"use client";

import * as React from "react";

// Create a context for popover state
interface PopoverContextType {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const PopoverContext = React.createContext<PopoverContextType | undefined>(undefined);

interface PopoverProps {
  children: React.ReactNode;
}

export const Popover = ({ children }: PopoverProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  // Enhanced click outside handler
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const contextValue: PopoverContextType = {
    isOpen,
    onToggle: handleToggle,
    onClose: handleClose
  };

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className="relative" ref={popoverRef}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

// Hook to use popover context
const usePopover = () => {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a Popover");
  }
  return context;
};

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const PopoverTrigger = ({ 
  children, 
  asChild 
}: PopoverTriggerProps) => {
  const { isOpen, onToggle } = usePopover();
  
  if (asChild && React.isValidElement(children)) {
    // Safe way to handle props with proper typing
    const existingOnClick = (children.props as any).onClick;
    
    const handleClick = (e: React.MouseEvent) => {
      existingOnClick?.(e);
      onToggle();
    };

    return React.cloneElement(children, {
      onClick: handleClick,
      "data-state": isOpen ? "open" : "closed"
    } as any);
  }

  return (
    <div onClick={onToggle} className="cursor-pointer" data-state={isOpen ? "open" : "closed"}>
      {children}
    </div>
  );
};

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}

export const PopoverContent = ({ 
  children, 
  className = "", 
  align = 'start'
}: PopoverContentProps) => {
  const { isOpen } = usePopover();

  if (!isOpen) return null;

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    end: "right-0"
  };

  return (
    <div 
      className={`absolute z-50 mt-2 bg-white shadow-lg rounded-md border border-gray-200 ${alignmentClasses[align]} ${className}`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {children}
    </div>
  );
};
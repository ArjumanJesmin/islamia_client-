"use client";

import * as React from "react";

interface PopoverProps {
  children: React.ReactNode;
}

export const Popover = ({ children }: PopoverProps) => (
  <div className="relative">{children}</div>
);

export const PopoverTrigger = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const PopoverContent = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-md p-2">
    {children}
  </div>
);

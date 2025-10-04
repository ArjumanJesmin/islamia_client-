// components/ui/gradient-text.tsx (Enhanced)
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const gradientVariants = {
  primary: "from-blue-600 to-purple-600",
  secondary: "from-green-600 to-blue-600", 
  accent: "from-orange-500 to-red-500"
};

export function GradientText({ 
  children, 
  className,
  variant = 'primary'
}: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r bg-clip-text text-transparent",
      gradientVariants[variant],
      className
    )}>
      {children}
    </span>
  );
}
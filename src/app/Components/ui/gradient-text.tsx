import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right';
  responsive?: boolean;
  withLine?: boolean;
}

const gradientVariants = {
  primary: "from-blue-600 to-purple-600",
  secondary: "from-green-500 to-teal-600", 
  accent: "from-orange-500 to-red-500"
};

const sizeVariants = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  '2xl': "text-2xl",
  '3xl': "text-3xl",
  '4xl': "text-4xl",
  '5xl': "text-5xl",
  '6xl': "text-6xl"
};

const responsiveSizeVariants = {
  xs: "text-xs md:text-sm",
  sm: "text-sm md:text-base", 
  base: "text-base md:text-lg",
  lg: "text-lg md:text-xl",
  xl: "text-xl md:text-2xl",
  '2xl': "text-2xl md:text-3xl",
  '3xl': "text-3xl md:text-4xl",
  '4xl': "text-4xl md:text-5xl",
  '5xl': "text-5xl md:text-6xl",
  '6xl': "text-6xl md:text-7xl"
};

const weightVariants = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold"
};

const alignVariants = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};

export function GradientText({ 
  children, 
  className,
  variant = 'primary',
  size = 'xl',
  weight = 'semibold',
  align = 'left',
  responsive = true,
  withLine = false
}: GradientTextProps) {
  return (
    <div className={cn("relative", alignVariants[align])}>
      <span className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradientVariants[variant],
        responsive ? responsiveSizeVariants[size] : sizeVariants[size],
        weightVariants[weight],
        className
      )}>
        {children}
      </span>
      
      {/* Optional underline */}
      {withLine && (
        <div className={cn(
          "h-0.5 w-12 mt-2 rounded-full bg-gradient-to-r",
          variant === 'primary' && "from-blue-600 to-purple-600",
          variant === 'secondary' && "from-green-500 to-teal-600",
          variant === 'accent' && "from-orange-500 to-red-500",
          align === 'center' && "mx-auto",
          align === 'right' && "ml-auto"
        )} />
      )}
    </div>
  );
}
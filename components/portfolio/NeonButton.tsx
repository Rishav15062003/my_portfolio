import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";
import { type VariantProps } from "class-variance-authority";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<VariantProps<typeof buttonVariants>, "variant"> {
  variant?: 'cyan' | 'blue' | 'magenta' | 'green';
  secondary?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

export function NeonButton({ variant = 'cyan', secondary = false, className, children, ...props }: NeonButtonProps) {
  const baseStyles = "font-mono rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2";

  const primaryStyles = {
    cyan: 'bg-[#101010] text-neon-cyan border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,246,0.5)]',
    blue: 'bg-[#101010] text-electric-blue border-electric-blue hover:shadow-[0_0_15px_rgba(36,84,255,0.5)]',
    magenta: 'bg-[#101010] text-cyber-magenta border-cyber-magenta hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]',
    green: 'bg-[#101010] text-matrix-green border-matrix-green hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]'
  };

  const secondaryStyles = {
    cyan: 'bg-transparent text-neon-cyan border-neon-cyan border-dashed hover:bg-neon-cyan/10',
    blue: 'bg-transparent text-electric-blue border-electric-blue border-dashed hover:bg-electric-blue/10',
    magenta: 'bg-transparent text-cyber-magenta border-cyber-magenta border-dashed hover:bg-cyber-magenta/10',
    green: 'bg-transparent text-matrix-green border-matrix-green border-dashed hover:bg-matrix-green/10'
  };

  return (
    <Button
      className={cn(
        baseStyles,
        secondary ? secondaryStyles[variant] : primaryStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

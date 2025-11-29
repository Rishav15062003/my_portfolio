import { cn } from "@/components/ui/utils";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className }: GlitchTextProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute top-0 left-0 text-neon-cyan opacity-70 animate-glitch"
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 text-cyber-magenta opacity-70 animate-glitch"
        style={{ animationDelay: '0.1s' }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}

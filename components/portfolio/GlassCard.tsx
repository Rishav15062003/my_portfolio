import { Card } from '@/components/ui/card';
import { cn } from '@/components/ui/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'blue' | 'magenta' | 'none';
}

export function GlassCard({ children, className, glowColor = 'cyan' }: GlassCardProps) {
  const glowStyles = {
    cyan: 'hover:shadow-[0_0_12px_rgba(0,255,246,0.3)] border-neon-cyan/30',
    blue: 'hover:shadow-[0_0_12px_rgba(36,84,255,0.3)] border-electric-blue/30',
    magenta: 'hover:shadow-[0_0_12px_rgba(255,0,255,0.3)] border-cyber-magenta/30',
    none: 'border-white/10'
  };

  return (
    <Card className={cn(
      'glass-card transition-all duration-300 rounded-xl border backdrop-blur-[6px] bg-[#101010]/60',
      glowStyles[glowColor],
      className
    )}>
      {children}
    </Card>
  );
}

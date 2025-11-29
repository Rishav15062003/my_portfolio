import { useEffect, useState } from 'react';
import { cn } from '@/components/ui/utils';

interface TerminalTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TerminalText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className,
  onComplete,
  showCursor = true 
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (currentIndex > text.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, speed, onComplete]);

  return (
    <span className={cn('terminal-text', className)}>
      {displayedText}
      {showCursor && currentIndex <= text.length && (
        <span className="animate-blink">_</span>
      )}
    </span>
  );
}

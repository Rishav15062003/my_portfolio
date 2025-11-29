import { useState, useEffect } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const bootLines = [
            "BIOS Date 01/01/2077 13:37:00 Ver: 1.0.0",
            "CPU: Neural Link Processor @ 100THz",
            "Memory Test: 64TB OK",
            "Detecting Primary Master ... CYBERDECK_OS",
            "Detecting Secondary Master ... PORTFOLIO_V2",
            "Loading Kernel Modules...",
            "Initializing Neural Interface...",
            "Establishing Secure Connection...",
            "System Ready."
        ];

        let delay = 0;
        bootLines.forEach((line, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                if (index === bootLines.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 font-mono text-neon-cyan text-lg md:text-xl overflow-hidden">
            <div className="space-y-2 w-full max-w-3xl">
                {lines.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap break-words">{line}</div>
                ))}
                <div className="animate-pulse">
                    {showCursor ? '_' : ' '}
                </div>
            </div>

            <div className="absolute bottom-8 right-8 text-sm text-steel-gray">
                PRESS DEL TO ENTER SETUP
            </div>
        </div>
    );
}

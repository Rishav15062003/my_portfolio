import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NeonButton } from '../NeonButton';

export function HeroSection({ onEnterConsole, onRunHelp }: { onEnterConsole: () => void; onRunHelp: () => void }) {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootLogs = [
      "[  OK  ] Started GNOME Display Manager.",
      "[  OK  ] Started Network Manager Script Dispatcher Service.",
      "[  OK  ] Reached target Graphical Interface.",
      "[  OK  ] Started Regular Background Processing Daemon.",
      "[  OK  ] Started System Logging Service.",
      "[  OK  ] Reached target Multi-User System.",
      "[  OK  ] Found device /dev/mapper/kali--vg-root.",
      "[  OK  ] Started Accounts Service.",
      "[  OK  ] Started Disk Manager.",
      "         Starting Authorization Manager...",
      "[  OK  ] Started Authorization Manager.",
      "         Starting Modem Manager...",
      "[  OK  ] Started Modem Manager.",
      "         Starting Network Manager...",
      "[  OK  ] Started Network Manager.",
      "[  OK  ] Reached target Network.",
      "         Starting Permit User Sessions...",
      "[  OK  ] Started Permit User Sessions.",
      "[  OK  ] Started Command Scheduler.",
      "[  OK  ] Started Serial Getty on ttyS0.",
      "[  OK  ] Started Getty on tty1.",
      "[  OK  ] Reached target Login Prompts.",
      "         Starting Hold until boot process finishes up...",
      "[  OK  ] Started Hold until boot process finishes up."
    ];

    let delay = 0;
    bootLogs.forEach((log, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setBootSequence(prev => [...prev, log]);
        if (index === bootLogs.length - 1) {
          setTimeout(() => {
            setIsBooting(false);
            setShowContent(true);
          }, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center scanlines overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-12">

        {/* Kali Linux Terminal Window */}
        <div className="w-full max-w-3xl bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-gray-400 text-xs font-semibold">root@kali: ~</div>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>

          {/* Terminal Content */}
          <div className="p-6 min-h-[400px] text-gray-300 font-mono overflow-y-auto max-h-[60vh]">
            {isBooting ? (
              <div className="space-y-1">
                {bootSequence.map((log, i) => (
                  <div key={i} className="whitespace-pre-wrap break-words">
                    {log.includes("[  OK  ]") ? (
                      <span>
                        <span className="text-matrix-green font-bold">[  OK  ]</span>
                        {log.replace("[  OK  ]", "")}
                      </span>
                    ) : (
                      log
                    )}
                  </div>
                ))}
                <div className="animate-pulse">_</div>
              </div>
            ) : (
              <div className="animate-fade-in space-y-6">
                {/* Neofetch Style Info */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="hidden md:block text-neon-cyan font-bold leading-tight select-none">
                    {`
      ...-:::::-...
   .-MMMMMMMMMMMMMMM-.
 .-MMMM\`..-:::::::-..\`MM-.
.:MMMM.:MMMMMMMMMMMMMMM:.MMMM:.
:MMMM: :MMMM:....:MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
:MMMM: :MMMM:    :MMMM: :MMMM:
 :MMMM: :MMMM:  :MMMM: :MMMM:
  :MMMM: :MMMM::MMMM: :MMMM:
   :MMMM: :MMMMMMMM: :MMMM:
    :MMMM: :MMMMMM: :MMMM:
     :MMMM: :MMMM: :MMMM:
      :MMMM: :MM: :MMMM:
       :MMMM: .. :MMMM:
        :MMMM:...:MMMM:
         :MMMMMMMMMM:
          :MMMMMMMM:
           ........
                    `}
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex gap-2">
                      <span className="text-neon-cyan font-bold">root@kali</span>
                      <span className="text-gray-400">----------------</span>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                      <span className="text-neon-cyan font-bold">OS</span>
                      <span className="text-white">Kali GNU/Linux Rolling x86_64</span>

                      <span className="text-neon-cyan font-bold">Host</span>
                      <span className="text-white">Portfolio v2.0</span>

                      <span className="text-neon-cyan font-bold">Kernel</span>
                      <span className="text-white">5.10.0-kali7-amd64</span>

                      <span className="text-neon-cyan font-bold">Uptime</span>
                      <span className="text-white">Forever</span>

                      <span className="text-neon-cyan font-bold">Shell</span>
                      <span className="text-white">zsh 5.8</span>

                      <span className="text-neon-cyan font-bold">Role</span>
                      <span className="text-white">B.Tech CSE (AI & ML)</span>

                      <span className="text-neon-cyan font-bold">Focus</span>
                      <span className="text-white">Cybersecurity & Networking</span>
                    </div>

                    <div className="mt-6 flex gap-2 text-lg">
                      <div className="w-4 h-4 bg-black"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-green-500"></div>
                      <div className="w-4 h-4 bg-yellow-500"></div>
                      <div className="w-4 h-4 bg-blue-500"></div>
                      <div className="w-4 h-4 bg-purple-500"></div>
                      <div className="w-4 h-4 bg-cyan-500"></div>
                      <div className="w-4 h-4 bg-white"></div>
                    </div>
                  </div>
                </div>

                {/* Prompt and Command */}
                <div className="mt-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-neon-cyan font-bold">┌──(root💀kali)-[~]</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-neon-cyan font-bold">└─#</span>
                    <span className="text-white typing-effect">./init_portfolio.sh</span>
                  </div>
                </div>

                {/* Action Buttons (Simulated Output) */}
                <div className="mt-4 pt-4 border-t border-gray-800/50 flex flex-col sm:flex-row gap-4">
                  <NeonButton
                    variant="cyan"
                    onClick={onEnterConsole}
                    className="w-full sm:w-auto text-sm"
                  >
                    [ENTER CONSOLE]
                  </NeonButton>
                  <NeonButton
                    variant="cyan"
                    secondary
                    onClick={onRunHelp}
                    className="w-full sm:w-auto text-sm"
                  >
                    [RUN HELP]
                  </NeonButton>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        {showContent && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <ChevronDown className="w-8 h-8 text-neon-cyan opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        )}
      </div>
    </section>
  );
}

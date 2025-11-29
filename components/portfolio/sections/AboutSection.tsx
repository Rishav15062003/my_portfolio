import { User } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { aboutInfo } from '@/data/portfolioData';

export function AboutSection() {
  const terminalInfo = [
    { key: 'alias', value: aboutInfo.alias },
    { key: 'specialization', value: aboutInfo.specialization },
    { key: 'current_status', value: aboutInfo.current_status },
    { key: 'location', value: aboutInfo.location },
    { key: 'mission', value: aboutInfo.mission }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-text text-neon-cyan flex items-center gap-3">
          <User className="w-8 h-8" />
          <span className="terminal-text">&gt; whoami</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Human Description */}
          <div className="space-y-8">
            <p className="text-lg text-ghost-white leading-relaxed">
              I'm a passionate <span className="text-neon-cyan font-semibold">B.Tech CSE student</span> specializing in{' '}
              <span className="text-electric-blue font-semibold">AI & Machine Learning</span>, with a deep interest in{' '}
              <span className="text-cyber-magenta font-semibold">Cybersecurity</span> and{' '}
              <span className="text-matrix-green font-semibold">Networking</span>.
            </p>
            <p className="text-lg text-steel-gray leading-relaxed">
              My journey combines the power of artificial intelligence with the critical need for robust security systems.
              I believe in building intelligent defense mechanisms that can adapt and evolve with emerging threats.
            </p>
            <p className="text-lg text-steel-gray leading-relaxed">
              When I'm not training models or breaking into systems (ethically, of course), you'll find me exploring
              CTF challenges, contributing to open-source security tools, or researching the latest in adversarial ML.
            </p>
          </div>

          {/* Right: Terminal Info Card */}
          <GlassCard className="p-8 h-full flex flex-col justify-center">
            <div className="font-mono space-y-6">
              <div className="text-neon-cyan mb-8 flex items-center gap-3 border-b border-neon-cyan/20 pb-4">
                <span className="text-matrix-green">$</span>
                <span className="typing-effect">cat /etc/profile</span>
              </div>
              {terminalInfo.map((item, index) => (
                <div
                  key={item.key}
                  className="flex flex-col sm:flex-row sm:gap-4 text-sm md:text-base group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-electric-blue min-w-[140px] group-hover:text-neon-cyan transition-colors">{item.key}:</span>
                  <span className="text-ghost-white">{item.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

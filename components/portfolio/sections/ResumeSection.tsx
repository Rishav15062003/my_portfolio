import { Download, FileText } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { NeonButton } from '../NeonButton';

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-text text-neon-cyan flex items-center gap-3">
          <FileText className="w-8 h-8" />
          <span className="terminal-text">&gt; resume --download</span>
        </h2>

        <GlassCard className="p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="mb-10">
              <div className="inline-block p-8 rounded-full glass-card neon-glow-cyan mb-8 bg-[#101010]/50 animate-float">
                <Download className="w-16 h-16 text-neon-cyan" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-ghost-white">Download My Resume</h3>
              <p className="text-steel-gray mb-4 text-lg max-w-lg mx-auto">
                Get a comprehensive overview of my skills, experience, and projects in a standardized format.
              </p>
              <p className="text-sm terminal-text text-neon-cyan font-mono">
                &gt; last_updated: January 2024
              </p>
            </div>

            <NeonButton variant="cyan" size="lg" className="px-12 py-8 text-lg w-full sm:w-auto">
              <Download className="w-5 h-5 mr-3" />
              download_cv --format=pdf
            </NeonButton>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm max-w-2xl mx-auto">
              <div className="glass-card p-6 border-neon-cyan/20">
                <div className="text-3xl font-bold text-neon-cyan mb-2">15+</div>
                <div className="text-steel-gray font-mono">Projects</div>
              </div>
              <div className="glass-card p-6 border-electric-blue/20">
                <div className="text-3xl font-bold text-electric-blue mb-2">8+</div>
                <div className="text-steel-gray font-mono">Certifications</div>
              </div>
              <div className="glass-card p-6 border-cyber-magenta/20">
                <div className="text-3xl font-bold text-cyber-magenta mb-2">3+</div>
                <div className="text-steel-gray font-mono">Years Learning</div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

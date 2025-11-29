import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { GlassCard } from '../GlassCard';
import { NeonButton } from '../NeonButton';
import type { ContactReason } from '@/data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '' as ContactReason | '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'cyan' as const },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'blue' as const },
    { icon: Mail, label: 'Email', href: 'mailto:your@email.com', color: 'magenta' as const }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-text text-neon-cyan flex items-center gap-3">
          <Mail className="w-8 h-8" />
          <span className="terminal-text">&gt; contact --init</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neon-cyan font-mono">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#101010]/50 border-neon-cyan/20 focus:border-neon-cyan text-ghost-white h-12"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-neon-cyan font-mono">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#101010]/50 border-neon-cyan/20 focus:border-neon-cyan text-ghost-white h-12"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason" className="text-neon-cyan font-mono">Reason</Label>
                <Select
                  value={formData.reason}
                  onValueChange={(value) => setFormData({ ...formData, reason: value as ContactReason })}
                >
                  <SelectTrigger className="bg-[#101010]/50 border-neon-cyan/20 focus:border-neon-cyan text-ghost-white h-12">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#101010] border-neon-cyan/20 text-ghost-white">
                    <SelectItem value="Collaboration">Collaboration</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-neon-cyan font-mono">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#101010]/50 border-neon-cyan/20 focus:border-neon-cyan text-ghost-white min-h-[150px] resize-none"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <NeonButton type="submit" variant="cyan" className="w-full py-6 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </NeonButton>
            </form>

            <p className="text-xs text-steel-gray mt-6 terminal-text text-center">
              &gt; note: this inbox is monitored. spam is logged & dropped.
            </p>
          </GlassCard>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-electric-blue font-mono">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#101010]/30 border border-white/5 hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all group"
                  >
                    <Icon className={`w-6 h-6 text-${color === 'cyan' ? 'neon-cyan' : color === 'blue' ? 'electric-blue' : 'cyber-magenta'} group-hover:scale-110 transition-transform`} />
                    <span className="text-ghost-white font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-electric-blue font-mono">Response Time</h3>
              <p className="text-steel-gray leading-relaxed">
                I typically respond within <span className="text-neon-cyan font-semibold">24-48 hours</span>.
                For urgent matters, please reach out via LinkedIn.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-electric-blue font-mono">Open to</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green">✓</span>
                  <span className="text-steel-gray">Internship Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green">✓</span>
                  <span className="text-steel-gray">Research Collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green">✓</span>
                  <span className="text-steel-gray">Open Source Contributions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green">✓</span>
                  <span className="text-steel-gray">Technical Discussions</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

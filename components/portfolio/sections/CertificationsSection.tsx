import { Award, CheckCircle, Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '../GlassCard';
import { certifications } from '@/data/portfolioData';
import { cn } from '@/components/ui/utils';

export function CertificationsSection() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-matrix-green" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-electric-blue" />;
      default:
        return <Calendar className="w-5 h-5 text-steel-gray" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-matrix-green/20 text-matrix-green border-matrix-green';
      case 'In Progress':
        return 'bg-electric-blue/20 text-electric-blue border-electric-blue';
      default:
        return 'bg-steel-gray/20 text-steel-gray border-steel-gray';
    }
  };

  return (
    <section id="certs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-text text-neon-cyan flex items-center gap-3">
          <Award className="w-8 h-8" />
          <span className="terminal-text">&gt; certifications --list</span>
        </h2>
        <p className="terminal-text text-sm text-steel-gray mb-12">
          &gt; loading credentials...
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <GlassCard key={cert.id} className="p-8 flex flex-col justify-between h-full group hover:border-neon-cyan/50 transition-colors">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ghost-white mb-2 group-hover:text-neon-cyan transition-colors">{cert.name}</h3>
                    <p className="text-steel-gray text-sm font-mono">{cert.issuer}</p>
                  </div>
                  {getStatusIcon(cert.status)}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Badge className={cn("font-mono", getStatusColor(cert.status))}>
                  [{cert.status}]
                </Badge>
                <span className="text-sm text-steel-gray terminal-text flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

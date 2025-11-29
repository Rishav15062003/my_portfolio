import { useState } from 'react';
import { Code, ExternalLink, Github, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GlassCard } from '../GlassCard';
import { NeonButton } from '../NeonButton';
import { projects, type Project } from '@/data/portfolioData';
import { cn } from '@/components/ui/utils';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'AI': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan',
      'Cyber': 'bg-electric-blue/20 text-electric-blue border-electric-blue',
      'Networking': 'bg-cyber-magenta/20 text-cyber-magenta border-cyber-magenta',
      'Full-stack': 'bg-matrix-green/20 text-matrix-green border-matrix-green',
      'ML': 'bg-neon-purple/20 text-neon-purple border-neon-purple',
      'Web': 'bg-alert-red/20 text-alert-red border-alert-red'
    };
    return colors[tag] || 'bg-steel-gray/20 text-steel-gray border-steel-gray';
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-text text-neon-cyan flex items-center gap-3">
          <Code className="w-8 h-8" />
          <span className="terminal-text">&gt; projects --list</span>
        </h2>
        <p className="terminal-text text-sm text-steel-gray mb-12">
          &gt; scanning for deployed operations... [{projects.length}] projects found
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.id} className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-ghost-white">{project.title}</h3>
              <p className="text-steel-gray text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} className={cn("font-mono", getTagColor(tag))}>
                    [{tag}]
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <NeonButton
                  variant="cyan"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1"
                >
                  Details
                </NeonButton>
                {project.repoUrl && (
                  <NeonButton variant="blue" secondary size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </NeonButton>
                )}
                {project.liveUrl && (
                  <NeonButton variant="magenta" secondary size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </NeonButton>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass-card border-neon-cyan max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-neon-cyan flex items-center justify-between">
                {selectedProject?.title}
                <button onClick={() => setSelectedProject(null)}>
                  <X className="w-6 h-6 text-steel-gray hover:text-ghost-white" />
                </button>
              </DialogTitle>
            </DialogHeader>

            {selectedProject && (
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Problem Statement</h4>
                  <p className="text-steel-gray">{selectedProject.details.problem}</p>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Role</h4>
                  <p className="text-steel-gray">{selectedProject.details.role}</p>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.techStack.map((tech) => (
                      <Badge key={tech} className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Architecture</h4>
                  <p className="text-steel-gray">{selectedProject.details.architecture}</p>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Challenges & Solutions</h4>
                  <p className="text-steel-gray">{selectedProject.details.challenges}</p>
                </div>

                <div>
                  <h4 className="text-electric-blue font-semibold mb-2">Future Improvements</h4>
                  <p className="text-steel-gray">{selectedProject.details.improvements}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

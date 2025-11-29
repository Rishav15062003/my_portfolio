import { useState } from 'react';
import { Brain, Shield, Network, Code, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { GlassCard } from '../GlassCard';
import { skills, currentlyTraining, type SkillCategory } from '@/data/portfolioData';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { cn } from '@/components/ui/utils';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('ai-ml');

  const categories = [
    { id: 'ai-ml' as SkillCategory, label: 'AI & ML', icon: Brain, color: 'neon-cyan' },
    { id: 'cybersecurity' as SkillCategory, label: 'Cybersecurity', icon: Shield, color: 'electric-blue' },
    { id: 'networking' as SkillCategory, label: 'Networking', icon: Network, color: 'cyber-magenta' },
    { id: 'core-cs' as SkillCategory, label: 'Core CS', icon: Code, color: 'matrix-green' }
  ];

  const getSkillsByCategory = (category: SkillCategory) =>
    skills.filter(skill => skill.category === category);

  const getRadarData = (category: SkillCategory) => {
    const categorySkills = getSkillsByCategory(category).slice(0, 6);
    return categorySkills.map(skill => ({
      skill: skill.name,
      proficiency: skill.proficiency
    }));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'proficient': return 'bg-matrix-green text-carbon-black';
      case 'hands-on': return 'bg-neon-cyan text-carbon-black';
      case 'learning': return 'bg-electric-blue text-ghost-white';
      case 'exploring': return 'bg-cyber-magenta text-ghost-white';
      default: return 'bg-steel-gray text-ghost-white';
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 heading-text text-neon-cyan flex items-center gap-3">
          <Activity className="w-8 h-8" />
          <span className="terminal-text">&gt; skills --list</span>
        </h2>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as SkillCategory)}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {categories.map(({ id, label, icon: Icon, color }) => (
              <TabsTrigger
                key={id}
                value={id}
                className={`glass-card data-[state=active]:border-${color} data-[state=active]:text-${color} transition-all`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(({ id }) => (
            <TabsContent key={id} value={id} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <GlassCard className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-neon-cyan">Proficiency Overview</h3>
                  <ChartContainer
                    config={{
                      proficiency: {
                        label: 'Proficiency',
                        color: 'var(--neon-cyan)'
                      }
                    }}
                    className="h-[300px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={getRadarData(id)}>
                        <PolarGrid stroke="rgba(21, 244, 238, 0.2)" />
                        <PolarAngleAxis
                          dataKey="skill"
                          tick={{ fill: 'var(--ghost-white)', fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fill: 'var(--steel-gray)' }}
                        />
                        <Radar
                          name="Proficiency"
                          dataKey="proficiency"
                          stroke="var(--neon-cyan)"
                          fill="var(--neon-cyan)"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </GlassCard>

                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getSkillsByCategory(id).map((skill) => (
                    <GlassCard key={skill.name} className="p-4 flex flex-col justify-between gap-3" glowColor="none">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-ghost-white">{skill.name}</span>
                        <Badge className={cn("font-mono", getLevelColor(skill.level))}>
                          [{skill.level}]
                        </Badge>
                      </div>
                      <Progress value={skill.proficiency} className="h-1.5" />
                    </GlassCard>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Currently Training Ticker */}
        <GlassCard className="mt-12 p-6 overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <span className="terminal-text text-neon-cyan whitespace-nowrap">
              &gt; currently_training
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {currentlyTraining.map((item, index) => (
              <Badge
                key={index}
                className="bg-electric-blue/20 text-electric-blue border-electric-blue whitespace-nowrap"
              >
                {item}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenTerminal, onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Labs', href: '#labs' },
    { label: 'AI', href: '#ai' },
    { label: 'Certs', href: '#certs' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neon-cyan/20' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group relative z-20"
          >
            <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-colors">
              <Terminal className="w-5 h-5 text-neon-cyan group-hover:animate-pulse" />
            </div>
            <span className="font-bold text-lg terminal-text hidden sm:block tracking-tight">
              AI x Cyber Defense
            </span>
          </button>

          {/* Centered Name - Royal/Professional Vibe */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none">
            <h1 className="text-lg md:text-2xl font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-neon-cyan via-white to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,246,0.3)] font-sans pointer-events-auto inline-block">
              Rishav Singh
            </h1>
          </div>

          {/* Right Side: Nav + Actions */}
          <div className="flex items-center gap-6 relative z-20">
            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-steel-gray hover:text-neon-cyan transition-colors text-sm font-medium font-mono relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-2 text-steel-gray hover:text-neon-cyan hover:bg-neon-cyan/10 border border-transparent hover:border-neon-cyan/20"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs font-mono">Ctrl+K</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={onOpenTerminal}
                className="text-steel-gray hover:text-neon-cyan hover:bg-neon-cyan/10 border border-transparent hover:border-neon-cyan/20"
              >
                <Terminal className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden text-steel-gray hover:text-neon-cyan hover:bg-neon-cyan/10"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-4 rounded-xl border border-neon-cyan/20 bg-[#0A0A0A]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-steel-gray hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all py-3 px-4 rounded-lg font-mono text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Navbar } from './portfolio/Navbar';
import { HeroSection } from './portfolio/sections/HeroSection';
import { AboutSection } from './portfolio/sections/AboutSection';
import { SkillsSection } from './portfolio/sections/SkillsSection';
import { ProjectsSection } from './portfolio/sections/ProjectsSection';
import { CertificationsSection } from './portfolio/sections/CertificationsSection';
import { ResumeSection } from './portfolio/sections/ResumeSection';
import { ContactSection } from './portfolio/sections/ContactSection';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';

const commands = {
  help: {
    description: 'Show available commands',
    action: () => [
      'Available commands:',
      '  whoami    - Display current user info',
      '  ls        - List directory contents',
      '  cat       - Concatenate and display files',
      '  scan      - Perform network vulnerability scan',
      '  clear     - Clear terminal screen',
      '  exit      - Close terminal session',
      '  sudo      - Execute a command as another user',
      '  date      - Print system date and time'
    ]
  },
  whoami: {
    description: 'Display user info',
    action: () => [
      'User: guest@portfolio',
      'Role: Visitor / Recruiter',
      'Access Level: Read-Only',
      'Session ID: ' + Math.random().toString(36).substring(7).toUpperCase()
    ]
  },
  ls: {
    description: 'List directories',
    action: () => [
      'drwxr-xr-x  2 root root  4096 Nov 30 13:37  about/',
      'drwxr-xr-x  2 root root  4096 Nov 30 13:37  skills/',
      'drwxr-xr-x  2 root root  4096 Nov 30 13:37  projects/',
      'drwxr-xr-x  2 root root  4096 Nov 30 13:37  certifications/',
      'drwxr-xr-x  2 root root  4096 Nov 30 13:37  contact/',
      '-rw-r--r--  1 root root  2048 Nov 30 13:37  resume.pdf',
      '-rwxr-x---  1 root root   128 Nov 30 13:37  init_portfolio.sh'
    ]
  },
  scan: {
    description: 'Simulate network scan',
    action: () => [
      'Starting Nmap 7.92 ( https://nmap.org ) at 2025-11-30',
      'Nmap scan report for portfolio.local (127.0.0.1)',
      'Host is up (0.00042s latency).',
      'Not shown: 996 closed ports',
      'PORT     STATE SERVICE',
      '80/tcp   open  http',
      '443/tcp  open  https',
      '3000/tcp open  react-dev',
      '22/tcp   filtered ssh',
      '',
      'Nmap done: 1 IP address (1 host up) scanned in 0.15 seconds'
    ]
  },
  date: {
    description: 'Show date',
    action: () => [new Date().toString()]
  },
  sudo: {
    description: 'Superuser do',
    action: () => ['guest is not in the sudoers file. This incident will be reported.']
  }
};

export function Portfolio() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'input' | 'output' | 'error' | 'success', content: string }>>([
    { type: 'output', content: 'Welcome to AI x Cyber Defense Console v2.0.0' },
    { type: 'output', content: 'Type "help" for available commands.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Command Palette keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleEnterConsole = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRunHelp = () => {
    setIsTerminalOpen(true);
    handleTerminalCommand('help');
  };

  const handleTerminalCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add input to history
    setTerminalHistory(prev => [...prev, { type: 'input', content: trimmedCmd }]);

    const [command, ...args] = trimmedCmd.toLowerCase().split(' ');

    if (command === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    if (command === 'exit') {
      setIsTerminalOpen(false);
      setTerminalInput('');
      return;
    }

    if (command === 'cat') {
      if (args.length === 0) {
        setTerminalHistory(prev => [...prev, { type: 'error', content: 'cat: missing operand' }]);
      } else {
        const file = args[0];
        if (file === 'resume.pdf') {
          setTerminalHistory(prev => [...prev, { type: 'success', content: 'Opening resume...' }]);
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          setIsTerminalOpen(false);
        } else if (['about', 'skills', 'projects', 'contact'].includes(file.replace('/', ''))) {
          const section = file.replace('/', '');
          setIsTerminalOpen(false);
          setTimeout(() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          }, 300);
          setTerminalHistory(prev => [...prev, { type: 'success', content: `Navigating to ${section}...` }]);
        } else {
          setTerminalHistory(prev => [...prev, { type: 'error', content: `cat: ${file}: No such file or directory` }]);
        }
      }
    } else {
      const cmdEntry = (commands as any)[command];
      if (cmdEntry) {
        const output = cmdEntry.action();
        output.forEach((line: string) => {
          setTerminalHistory(prev => [...prev, { type: 'output', content: line }]);
        });
      } else {
        setTerminalHistory(prev => [...prev, { type: 'error', content: `Command not found: ${command}. Type "help" for available commands.` }]);
      }
    }

    setTerminalInput('');
  };

  const navigationItems = [
    { label: 'About', value: 'about', href: '#about' },
    { label: 'Skills', value: 'skills', href: '#skills' },
    { label: 'Projects', value: 'projects', href: '#projects' },
    { label: 'Certifications', value: 'certs', href: '#certs' },
    { label: 'Resume', value: 'resume', href: '#resume' },
    { label: 'Contact', value: 'contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-neon-cyan z-[100] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,255,246,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <HeroSection
          onEnterConsole={handleEnterConsole}
          onRunHelp={handleRunHelp}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Terminal Panel */}
      <Sheet open={isTerminalOpen} onOpenChange={setIsTerminalOpen}>
        <SheetContent side="bottom" className="glass-card border-neon-cyan h-[50vh] md:h-[500px] p-0 overflow-hidden flex flex-col">
          <SheetHeader className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <SheetTitle className="text-gray-400 text-xs font-mono font-normal m-0">
              guest@portfolio: ~
            </SheetTitle>
            <div className="w-16"></div>
          </SheetHeader>

          <div className="flex-1 bg-[#0d1117] p-4 font-mono text-sm overflow-y-auto" onClick={() => document.getElementById('terminal-input')?.focus()}>
            <div className="space-y-1">
              {terminalHistory.map((entry, i) => (
                <div key={i} className={`${entry.type === 'input' ? 'text-white font-bold mt-4' :
                  entry.type === 'error' ? 'text-red-500' :
                    entry.type === 'success' ? 'text-matrix-green' :
                      'text-gray-300'
                  }`}>
                  {entry.type === 'input' && <span className="text-neon-cyan mr-2">guest@portfolio:~$</span>}
                  {entry.content}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-neon-cyan font-bold shrink-0">guest@portfolio:~$</span>
              <input
                id="terminal-input"
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleTerminalCommand(terminalInput);
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-red-500 caret-neon-cyan min-w-[50px] opacity-100 z-50"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Command Palette */}
      <CommandDialog open={isCommandPaletteOpen} onOpenChange={setIsCommandPaletteOpen}>
        <Command className="glass-card border-neon-cyan">
          <CommandInput placeholder="Type a command or search..." className="terminal-text" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation" className="text-electric-blue">
              {navigationItems.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsCommandPaletteOpen(false);
                  }}
                  className="text-ghost-white hover:text-neon-cyan"
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}

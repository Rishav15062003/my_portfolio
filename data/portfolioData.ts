export type SkillLevel = 'proficient' | 'hands-on' | 'learning' | 'exploring';
export type SkillCategory = 'ai-ml' | 'cybersecurity' | 'networking' | 'core-cs';
export type ProjectTag = 'AI' | 'Cyber' | 'Networking' | 'Full-stack' | 'ML' | 'Web' | 'Mobile';
export type SeverityLevel = 'Info' | 'Medium' | 'High' | 'Critical';
export type BlogCategory = 'AI' | 'Cybersecurity' | 'Networking' | 'Notes';
export type ContactReason = 'Collaboration' | 'Internship' | 'Freelance' | 'Other';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  proficiency: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  repoUrl?: string;
  liveUrl?: string;
  details: {
    problem: string;
    role: string;
    techStack: string[];
    architecture: string;
    challenges: string;
    improvements: string;
  };
}

export interface CTFOperation {
  id: string;
  caseId: string;
  title: string;
  platform: string;
  category: string;
  severity: SeverityLevel;
  writeup: {
    vector: string;
    tools: string[];
    learning: string;
  };
}

export interface AIExperiment {
  id: string;
  title: string;
  description: string;
  model: string;
  dataset: string;
  metrics: {
    accuracy: number;
    epochs: number;
  };
  chartData: Array<{ epoch: number; accuracy: number }>;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: BlogCategory;
  timestamp: string;
  summary: string;
}

// Mock Data
export const aboutInfo = {
  name: '[YOUR_NAME]',
  handle: '[YOUR_HANDLE]',
  role: 'B.Tech CSE (AI & ML) | Cybersecurity & Networking',
  alias: '@cyberdefender',
  specialization: 'AI/ML Engineering & Cybersecurity',
  current_status: 'Building intelligent defense systems',
  location: '[CITY, COUNTRY]',
  mission: 'Securing the future with AI-powered solutions'
};

export const skills: Skill[] = [
  // AI & ML
  { name: 'TensorFlow', level: 'proficient', category: 'ai-ml', proficiency: 90 },
  { name: 'PyTorch', level: 'proficient', category: 'ai-ml', proficiency: 85 },
  { name: 'Scikit-learn', level: 'hands-on', category: 'ai-ml', proficiency: 80 },
  { name: 'Deep Learning', level: 'proficient', category: 'ai-ml', proficiency: 88 },
  { name: 'NLP', level: 'hands-on', category: 'ai-ml', proficiency: 75 },
  { name: 'Computer Vision', level: 'learning', category: 'ai-ml', proficiency: 70 },
  
  // Cybersecurity
  { name: 'Penetration Testing', level: 'hands-on', category: 'cybersecurity', proficiency: 82 },
  { name: 'Network Security', level: 'proficient', category: 'cybersecurity', proficiency: 85 },
  { name: 'Cryptography', level: 'hands-on', category: 'cybersecurity', proficiency: 78 },
  { name: 'OWASP Top 10', level: 'proficient', category: 'cybersecurity', proficiency: 90 },
  { name: 'Metasploit', level: 'hands-on', category: 'cybersecurity', proficiency: 75 },
  { name: 'Burp Suite', level: 'hands-on', category: 'cybersecurity', proficiency: 80 },
  
  // Networking
  { name: 'TCP/IP', level: 'proficient', category: 'networking', proficiency: 88 },
  { name: 'Wireshark', level: 'hands-on', category: 'networking', proficiency: 82 },
  { name: 'Cisco Networking', level: 'learning', category: 'networking', proficiency: 70 },
  { name: 'Network Protocols', level: 'proficient', category: 'networking', proficiency: 85 },
  { name: 'Firewall Config', level: 'hands-on', category: 'networking', proficiency: 75 },
  
  // Core CS
  { name: 'Python', level: 'proficient', category: 'core-cs', proficiency: 95 },
  { name: 'JavaScript', level: 'proficient', category: 'core-cs', proficiency: 88 },
  { name: 'C++', level: 'hands-on', category: 'core-cs', proficiency: 80 },
  { name: 'Data Structures', level: 'proficient', category: 'core-cs', proficiency: 90 },
  { name: 'Algorithms', level: 'proficient', category: 'core-cs', proficiency: 88 },
  { name: 'Git', level: 'proficient', category: 'core-cs', proficiency: 92 }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Intrusion Detection System',
    description: 'ML-based network intrusion detection using deep learning to identify anomalous traffic patterns',
    tags: ['AI', 'Cyber', 'Networking'],
    repoUrl: '#',
    liveUrl: '#',
    details: {
      problem: 'Traditional signature-based IDS systems fail to detect zero-day attacks and sophisticated threats',
      role: 'Lead Developer & ML Engineer',
      techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Wireshark', 'Flask'],
      architecture: 'LSTM-based neural network trained on NSL-KDD dataset with real-time packet analysis pipeline',
      challenges: 'Handling imbalanced dataset, reducing false positives, achieving real-time performance',
      improvements: 'Implement federated learning for distributed threat intelligence, add explainable AI features'
    }
  },
  {
    id: '2',
    title: 'Malware Classification Engine',
    description: 'Deep learning model for automated malware family classification using static and dynamic analysis',
    tags: ['AI', 'Cyber', 'ML'],
    repoUrl: '#',
    details: {
      problem: 'Manual malware analysis is time-consuming and requires expert knowledge',
      role: 'ML Researcher & Developer',
      techStack: ['PyTorch', 'CNN', 'Random Forest', 'PE Parser', 'Docker'],
      architecture: 'Hybrid CNN-RF model analyzing PE file features and behavioral patterns',
      challenges: 'Feature engineering, handling polymorphic malware, model interpretability',
      improvements: 'Add adversarial robustness, implement online learning for new malware families'
    }
  },
  {
    id: '3',
    title: 'Secure Chat Application',
    description: 'End-to-end encrypted messaging platform with zero-knowledge architecture',
    tags: ['Cyber', 'Full-stack', 'Web'],
    repoUrl: '#',
    liveUrl: '#',
    details: {
      problem: 'Most messaging apps compromise privacy by storing unencrypted metadata',
      role: 'Full-stack Developer',
      techStack: ['React', 'Node.js', 'WebRTC', 'Signal Protocol', 'MongoDB'],
      architecture: 'Client-side encryption with Signal Protocol, WebRTC for P2P communication',
      challenges: 'Key management, perfect forward secrecy, scalable infrastructure',
      improvements: 'Add group chat support, implement disappearing messages, mobile apps'
    }
  }
];

export const ctfOperations: CTFOperation[] = [
  {
    id: '1',
    caseId: 'CASE-001',
    title: 'Blue - Windows Exploitation',
    platform: 'TryHackMe',
    category: 'Windows',
    severity: 'High',
    writeup: {
      vector: 'EternalBlue (MS17-010) SMB vulnerability exploitation',
      tools: ['Nmap', 'Metasploit', 'Meterpreter'],
      learning: 'Understanding SMB protocol vulnerabilities and Windows privilege escalation techniques'
    }
  },
  {
    id: '2',
    caseId: 'CASE-002',
    title: 'OWASP Top 10 - SQL Injection',
    platform: 'Hack The Box',
    category: 'Web',
    severity: 'Critical',
    writeup: {
      vector: 'Time-based blind SQL injection in login form',
      tools: ['Burp Suite', 'SQLMap', 'Python'],
      learning: 'Advanced SQL injection techniques, database enumeration, and secure coding practices'
    }
  },
  {
    id: '3',
    caseId: 'CASE-003',
    title: 'Network Forensics Challenge',
    platform: 'Custom Lab',
    category: 'Forensics',
    severity: 'Medium',
    writeup: {
      vector: 'PCAP analysis to identify data exfiltration',
      tools: ['Wireshark', 'NetworkMiner', 'tcpdump'],
      learning: 'Network traffic analysis, protocol dissection, and incident response procedures'
    }
  }
];

export const aiExperiments: AIExperiment[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Model',
    description: 'BERT-based model for social media sentiment classification',
    model: 'BERT (fine-tuned)',
    dataset: 'Twitter Sentiment140',
    metrics: {
      accuracy: 94.5,
      epochs: 10
    },
    chartData: [
      { epoch: 1, accuracy: 78 },
      { epoch: 2, accuracy: 84 },
      { epoch: 3, accuracy: 88 },
      { epoch: 4, accuracy: 90 },
      { epoch: 5, accuracy: 91.5 },
      { epoch: 6, accuracy: 92.8 },
      { epoch: 7, accuracy: 93.5 },
      { epoch: 8, accuracy: 94 },
      { epoch: 9, accuracy: 94.3 },
      { epoch: 10, accuracy: 94.5 }
    ]
  },
  {
    id: '2',
    title: 'Object Detection System',
    description: 'YOLOv8 implementation for real-time object detection',
    model: 'YOLOv8',
    dataset: 'COCO',
    metrics: {
      accuracy: 89.2,
      epochs: 50
    },
    chartData: Array.from({ length: 10 }, (_, i) => ({
      epoch: (i + 1) * 5,
      accuracy: 65 + (i + 1) * 2.4
    }))
  },
  {
    id: '3',
    title: 'Network Traffic Classifier',
    description: 'LSTM model for classifying network traffic types',
    model: 'LSTM',
    dataset: 'NSL-KDD',
    metrics: {
      accuracy: 96.8,
      epochs: 20
    },
    chartData: Array.from({ length: 10 }, (_, i) => ({
      epoch: (i + 1) * 2,
      accuracy: 82 + (i + 1) * 1.5
    }))
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    status: 'In Progress',
    date: '2024'
  },
  {
    id: '2',
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    status: 'Completed',
    date: '2023'
  },
  {
    id: '3',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'Planned',
    date: '2024'
  },
  {
    id: '4',
    name: 'AWS Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    date: '2024'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding LSTM Networks for Intrusion Detection',
    category: 'AI',
    timestamp: '[2024-01-15 14:30:00]',
    summary: 'Deep dive into using LSTM networks for detecting network anomalies and intrusions'
  },
  {
    id: '2',
    title: 'SQL Injection: From Basics to Advanced Techniques',
    category: 'Cybersecurity',
    timestamp: '[2024-01-10 09:15:00]',
    summary: 'Comprehensive guide on SQL injection vulnerabilities and exploitation methods'
  },
  {
    id: '3',
    title: 'TCP/IP Protocol Stack Explained',
    category: 'Networking',
    timestamp: '[2024-01-05 16:45:00]',
    summary: 'Understanding the layers of TCP/IP and how data flows through networks'
  },
  {
    id: '4',
    title: 'Building Robust ML Models: Best Practices',
    category: 'AI',
    timestamp: '[2023-12-28 11:20:00]',
    summary: 'Tips and techniques for creating production-ready machine learning models'
  },
  {
    id: '5',
    title: 'Zero Trust Architecture in Modern Networks',
    category: 'Cybersecurity',
    timestamp: '[2023-12-20 13:00:00]',
    summary: 'Implementing zero trust security model in enterprise environments'
  }
];

export const currentlyTraining = [
  'Adversarial Machine Learning',
  'Advanced Penetration Testing',
  'Cloud Security (AWS)',
  'Kubernetes Security',
  'Quantum Cryptography'
];

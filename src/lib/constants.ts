import { Database, Bot, TrendingUp, ShieldCheck, Zap, Cpu } from 'lucide-react';

export const PROJECTS = [
  { 
    id: 'taxpilot',
    title: "TaxPilot V2", 
    desc: "Automated SME tax compliance engine tailored for the Nigerian Finance Act.", 
    icon: Database, 
    tag: "FinTech",
    status: "Production"
  },
  { 
    id: 'sosbi',
    title: "SOSBI Interface", 
    desc: "Next-gen AI conversational UI for high-speed business orchestration.", 
    icon: Bot, 
    tag: "AI/UX",
    status: "WIP"
  },
  { 
    id: 'prodigy',
    title: "Prodigy Growth", 
    desc: "Autonomous SEO content pipeline generating high-volume organic traffic.", 
    icon: TrendingUp, 
    tag: "Growth",
    status: "Live"
  },
  { 
    id: 'legalbot',
    title: "LegalBot RAG", 
    desc: "Precision document analysis using Vector Embeddings and RAG architecture.", 
    icon: ShieldCheck, 
    tag: "LegalTech",
    status: "Beta"
  },
  { 
    id: 'nexus',
    title: "Nexus CRM", 
    desc: "AI-driven customer relationship automation for modern tech SMEs.", 
    icon: Zap, 
    tag: "Automation",
    status: "Production"
  },
  { 
    id: 'marketmind',
    title: "Market Mind", 
    desc: "Predictive analytics for retail supply chains in the Nigerian market.", 
    icon: Cpu, 
    tag: "Data",
    status: "R&D"
  }
];
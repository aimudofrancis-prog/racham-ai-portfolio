'use client'
import { motion } from 'framer-motion';
import { Database, Bot, TrendingUp, Cpu, ShieldCheck, Zap } from 'lucide-react';

const allProjects = [
  { title: "TaxPilot V2", desc: "Automated SME tax compliance engine for Nigeria.", icon: <Database />, tag: "FinTech" },
  { title: "SOSBI Interface", desc: "Next-gen AI conversational UI for business orchestration.", icon: <Bot />, tag: "AI/UX" },
  { title: "Prodigy Growth", desc: "Autonomous SEO content pipeline generating organic traffic.", icon: <TrendingUp />, tag: "Growth" },
  { title: "LegalBot RAG", desc: "Legal document analysis using Vector Embeddings.", icon: <ShieldCheck />, tag: "LegalTech" },
  { title: "Nexus CRM", desc: "AI-driven customer relationship automation for SMEs.", icon: <Zap />, tag: "Automation" },
  { title: "Market Mind", desc: "Predictive analytics for Nigerian retail supply chains.", icon: <Cpu />, tag: "Data" }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Portfolio</h2>
        <h3 className="text-4xl font-bold text-white">Active Deployments</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((p, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all group"
          >
            <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
            <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest bg-blue-400/10 px-2 py-0.5 rounded">{p.tag}</span>
            <h4 className="text-xl font-bold text-white mt-4 mb-2">{p.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
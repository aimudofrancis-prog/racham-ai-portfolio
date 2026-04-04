'use client'

import { motion } from 'framer-motion';
import { Database, Bot, TrendingUp, Cpu } from 'lucide-react';

const projects = [
  {
    title: "SME Database Orchestration",
    desc: "Architecting seamless Prisma DB integrations for TaxPilot, bridging SME financial apps with robust data infrastructure.",
    icon: <Database className="text-blue-500" />,
    tag: "TaxPilot",
    status: "Production"
  },
  {
    title: "SOSBI: Intelligent UX",
    desc: "Engineering custom LLM interfaces for SOSBI—focusing on intuitive, AI-first user journeys for small businesses.",
    icon: <Bot className="text-blue-500" />,
    tag: "SOSBI",
    status: "WIP"
  },
  {
    title: "Autonomous Content Growth",
    desc: "Orchestrated AI content pipelines for Prodigy Tech Hub, achieving top-tier SEO rankings via optimized LLM generation.",
    icon: <TrendingUp className="text-blue-500" />,
    tag: "SEO Growth",
    status: "Live"
  },
  {
    title: "Automation Lab",
    desc: "Researching autonomous SME workflow agents to reduce manual overhead by up to 90% in the Nigerian ecosystem.",
    icon: <Cpu className="text-blue-500" />,
    tag: "R&D",
    status: "Experimental"
  }
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white tracking-tight">
          System <span className="text-blue-500 italic">Capabilities</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all group"
          >
            <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <span className="text-[10px] font-black tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
              {project.tag}
            </span>
            <h3 className="text-xl font-bold text-white mt-4 mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">{project.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
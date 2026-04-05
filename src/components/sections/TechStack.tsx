'use client'
import { motion } from 'framer-motion';
import { Cpu, Code2, Globe, Zap, Database } from 'lucide-react';

export default function TechStack() {
  const tools = [
    { icon: <Cpu size={20} />, name: "OpenAI / Claude" },
    { icon: <Code2 size={20} />, name: "Next.js 14" },
    { icon: <Database size={20} />, name: "Prisma / SQL" },
    { icon: <Zap size={20} />, name: "Framer Motion" },
    { icon: <Globe size={20} />, name: "Vercel Edge" }
  ];

  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-10">Powered by Modern Tools</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
          {tools.map((tool, i) => (
            <motion.div 
              key={i}
              whileHover={{ opacity: 1, y: -2 }}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all cursor-default"
            >
              {tool.icon}
              <span className="text-sm font-medium tracking-tighter">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
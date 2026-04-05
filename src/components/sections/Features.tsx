'use client'
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Active Deployments</h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, borderColor: 'rgba(0, 136, 255, 0.4)' }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all group"
          >
            <div className="text-blue-500 mb-6 group-hover:scale-110 group-hover:text-blue-400 transition-all">
              <project.icon size={28} strokeWidth={1.5} />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest bg-blue-400/10 px-2 py-0.5 rounded">
                {project.tag}
              </span>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                {project.status}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] text-gray-400 uppercase font-mono">Infrastructure_Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
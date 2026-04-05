'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Shield } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20"
    >
      {/* Status Badge */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400">
          SYSTEMS ONLINE // RACHAM_AI_ARCHITECT
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
      >
        Architecting the Future of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">
          SME Automation
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed"
      >
        Deploying High-Speed AI Solutions, Precision Prompt Engineering, and <br className="hidden md:block" />
        Automated Tax Systems for the <span className="text-white font-semibold">Nigerian Market.</span>
      </motion.p>

      {/* Action Buttons - Now with Functional Linking */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 flex flex-col sm:flex-row gap-4 z-10"
      >
        <motion.a 
          href="#taxpilot"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 136, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all group cursor-pointer"
        >
          <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
          View Command Center
          <ArrowRight size={18} />
        </motion.a>

        <motion.a 
          href="#features"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all cursor-pointer"
        >
          <Shield size={18} />
          View Projects
        </motion.a>
      </motion.div>

      {/* Stats Bar */}
      <motion.div 
        variants={itemVariants}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-10 w-full"
      >
        {[
          { label: "AI Agents Deployed", value: "36+" },
          { label: "Uptime Reliability", value: "99.9%" },
          { label: "Efficiency Gain", value: "10x" },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2 font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
'use client'

import { motion } from 'framer-motion'; // <--- THIS LINE IS THE FIX
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
      className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
    >
      {/* ... keep your existing Status Badge and Headline code here ... */}

      {/* RE-PASTE THE STATS BAR HERE ENSURING IT IS INSIDE THE RETURN BLOCK */}
      <motion.div 
        variants={itemVariants}
        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-white/5 py-8 w-full"
      >
        {[
          { label: "AI Agents Deployed", value: "36+" },
          { label: "Uptime Reliability", value: "99.9%" },
          { label: "Efficiency Gain", value: "10x" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
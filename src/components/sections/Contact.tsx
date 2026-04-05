'use client'
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Uplink</h2>
          <h3 className="text-4xl font-bold text-white mb-6 italic">Deploy a New Project</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Ready to architect your SME's autonomous future? Reach out to the lab for 
            infrastructure consultations or custom AI deployments.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10"><Mail size={20} /></div>
              <span className="font-mono text-sm">ceo@racham.ai</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10"><Linkedin size={20} /></div>
              <span className="font-mono text-sm">linkedin.com/in/racham-ai</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Terminal Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden"
        >
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          
          <form className="space-y-6 relative z-10">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Identity / Company</label>
              <input 
                type="text" 
                placeholder="Name or Organization" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Infrastructure Requirements</label>
              <textarea 
                rows={4}
                placeholder="Describe the automation or AI project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 136, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              Initialize Deployment
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
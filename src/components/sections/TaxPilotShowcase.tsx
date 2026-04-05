'use client'
import { motion } from 'framer-motion';

export default function TaxPilotShowcase() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-blue-600/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Case Study</h2>
          <h3 className="text-4xl font-bold text-white italic">TaxPilot 2026 Dashboard</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl shadow-blue-500/5 overflow-hidden"
        >
          {/* Mock UI Header */}
          <div className="flex items-center gap-2 p-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            </div>
            <div className="mx-auto text-[9px] text-gray-600 font-mono tracking-tighter">
              RACHAM_LABS // TAXPILOT_V2.0.exe
            </div>
          </div>
          
          <div className="aspect-video bg-grid flex items-center justify-center">
             <div className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold animate-pulse">
                SME COMPLIANCE WORKSPACE // ENCRYPTED
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client'
import { motion } from 'framer-motion';

export default function TaxPilotShowcase() {
  return (
    <section className="py-24 px-6 bg-blue-600/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Case Study</h2>
          <h3 className="text-4xl font-bold text-white">TaxPilot 2026 Dashboard</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-white/10 bg-[#0F0F0F] p-2 shadow-2xl shadow-blue-500/10"
        >
          {/* Mock Browser Header */}
          <div className="flex items-center gap-2 p-4 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="mx-auto bg-white/5 px-4 py-1 rounded-md text-[10px] text-gray-500">
              taxpilot.racham.ai/dashboard
            </div>
          </div>
          
          {/* Dashboard Content Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#121212] to-[#0A0A0A] flex items-center justify-center">
             <div className="text-center">
                <div className="text-blue-500 font-bold text-xl mb-2">SME Compliance Workspace</div>
                <div className="text-gray-500 text-sm italic">Simulated Infrastructure Environment</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
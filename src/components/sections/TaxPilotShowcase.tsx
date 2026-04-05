'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TaxPilotShowcase() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-blue-600/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
          >
            Case Study
          </motion.h2>
          <h3 className="text-4xl font-bold text-white italic">TaxPilot 2026 Dashboard</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl shadow-blue-500/10 overflow-hidden"
        >
          {/* Mock UI Header */}
          <div className="flex items-center gap-2 p-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            </div>
            <div className="mx-auto text-[9px] text-gray-600 font-mono tracking-tighter">
              RACHAM_LABS // TAXPILOT_V2.0.exe // SME_COMPLIANCE
            </div>
          </div>
          
          {/* THE IMAGE CONTAINER */}
          <div className="relative aspect-video w-full overflow-hidden bg-black group">
            {/* Overlay Gradient for that "Elite" depth */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            <Image 
              src="/taxpilot-preview.png" // Ensure the file is in /public
              alt="TaxPilot Interface"
              fill
              className="object-cover object-top transition-transform duration-[5000ms] ease-in-out group-hover:scale-110"
              priority
            />

            {/* Hover Indicator */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="px-4 py-2 rounded-full border border-blue-500/50 bg-black/80 text-blue-400 text-[10px] font-bold backdrop-blur-md">
                  LIVE INFRASTRUCTURE PREVIEW
               </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights below the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
          <div className="space-y-2">
            <h4 className="text-blue-400 font-bold text-sm">Finance Act 2026 Ready</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Automated reconciliation with current Nigerian tax laws.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-bold text-sm">Data-Driven Compliance</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Real-time monitoring of SME obligations via Prisma architecture.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-bold text-sm">Autonomous Ledger</h4>
            <p className="text-gray-500 text-xs leading-relaxed">AI-orchestrated bookkeeping for high-growth tech hubs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
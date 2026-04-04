{/* Stats Bar */}
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
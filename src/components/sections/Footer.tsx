'use client'

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold text-white uppercase tracking-tighter">Racham <span className="text-blue-500 italic">Global</span></div>
          <p className="text-gray-600 text-xs mt-2 italic">Architecting the Nigerian Digital Frontier © 2026</p>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
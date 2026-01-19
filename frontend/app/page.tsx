import { Settings, Play, Download, Sparkles } from "lucide-react";

export default function StudioPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      
      {/* Left Sidebar: Resources */}
      <aside className="w-64 border-r border-white/5 bg-[#030303]/50 p-4 flex flex-col gap-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</h2>
        <div className="space-y-2">
           {/* Mock Resources */}
           {[1, 2, 3].map((i) => (
             <div key={i} className="glass-panel h-20 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:border-white/20 cursor-pointer transition-all">
               Asset {i}
             </div>
           ))}
        </div>
      </aside>

      {/* Center Stage: Preview & Prompt */}
      <section className="flex-1 flex flex-col relative">
        {/* Preview Area */}
        <div className="flex-1 flex items-center justify-center bg-[#050505] p-8">
          <div className="aspect-video w-full max-w-4xl glass-panel rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
            <Play className="w-16 h-16 text-white/20 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 cursor-pointer" />
            <span className="absolute bottom-4 left-4 text-xs text-gray-400 font-mono">PREVIEW MODE</span>
          </div>
        </div>

        {/* Prompt Input Area */}
        <div className="h-48 border-t border-white/5 bg-[#030303]/80 backdrop-blur-md p-6 flex flex-col gap-4">
          <div className="flex items-start gap-4 h-full">
             <textarea 
               className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 resize-none h-full transition-colors"
               placeholder="Describe your scene in detail..."
             />
             <div className="flex flex-col gap-2">
               <button className="glass-button p-3 rounded-lg text-primary hover:text-white" title="Enhance Prompt">
                 <Sparkles className="w-5 h-5" />
               </button>
               <button className="bg-primary text-black font-bold py-3 px-6 rounded-lg shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_30px_rgba(0,255,163,0.5)] transition-all flex items-center gap-2">
                 <span>Generate</span>
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Right Sidebar: Inspector / Camera Control */}
      <aside className="w-80 border-l border-white/5 bg-[#030303]/50 p-6 flex flex-col gap-6 overflow-y-auto">
        
        {/* Camera Control Grid */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Camera Control</h2>
          <div className="grid grid-cols-3 gap-2 aspect-square mb-4">
            {['UL', 'U', 'UR', 'L', 'C', 'R', 'DL', 'D', 'DR'].map((pos) => (
              <button 
                key={pos} 
                className="glass-panel rounded-md flex items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                <span className="text-xs text-gray-600 group-hover:text-primary">{pos}</span>
                {/* On hover, this would show a video preview per PRD */}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 text-center">Hover to preview movement</p>
        </div>

        {/* Parameters */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Motion Intensity</span>
              <span className="text-primary">5</span>
            </div>
            <input type="range" className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Duration</span>
              <span className="text-gray-200">5s</span>
            </div>
            <input type="range" className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" />
          </div>
        </div>

      </aside>
    </div>
  );
}

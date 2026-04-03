export default function TailwindCSS() {
  return (
    // Background utama dengan Radial Gradient & Dark Mode mewah
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 p-4 md:p-10 font-sans leading-relaxed">
      
      {/* Wrapper Utama */}
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Navigation - Gacor Version */}
        <FlexboxGrid />

        {/* Hero Section */}
        <header className="relative py-10 px-6 rounded-[2.5rem] overflow-hidden bg-slate-900/40 border border-white/5 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -z-10 animate-pulse"></div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Belajar <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tailwind CSS 4</span>
          </h1>
          <button className="group relative bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 overflow-hidden">
            <span className="relative z-10 text-sm tracking-widest uppercase">Click Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </header>

        {/* Layout Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-8 space-y-6">
             {/* Spacing Component */}
             <Spacing/>
             
             {/* Shadow Effects Component */}
             <ShadowEffects/>
          </div>

          <div className="md:col-span-4 space-y-6 flex flex-col">
             {/* Typography Component */}
             <div className="flex-1 bg-slate-900/60 p-8 rounded-[2rem] border border-slate-800">
                <Typography/>
             </div>

             {/* Background & Border Components */}
             <div className="space-y-4">
                <BackgroundColors/>
                <div className="flex justify-center p-6 bg-white/5 rounded-[2rem] border border-white/10">
                  <BorderRadius/>
                </div>
             </div>
          </div>

        </div>

        <footer className="text-center text-slate-500 text-xs tracking-[0.3em] uppercase pt-10">
           Next Level UI • 2026
        </footer>
      </div>
    </div>
  )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/10 p-4 px-8 rounded-full shadow-2xl sticky top-4 z-50">
            <h1 className="text-xl font-black tracking-tighter text-white italic group cursor-pointer">
              MY<span className="text-cyan-400 group-hover:text-white transition">WEB</span>
            </h1>
            <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition">Home</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-full text-black font-bold transition shadow-lg shadow-cyan-500/20">Contact</a></li>
            </ul>
        </nav>
    )
}

function Spacing(){
    return (
        <div className="group bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl p-8 rounded-[2rem] border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-1 bg-cyan-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-white tracking-tight">Card Title</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
                Ini adalah contoh penggunaan <span className="text-cyan-400 font-mono">padding</span> dan <span className="text-blue-400 font-mono">margin</span> yang bikin layout nafas.
            </p>
        </div>
    )
}

function Typography(){
    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 leading-[1.1]">
              Tailwind Typography
            </h1>
            <p className="text-slate-400 text-lg border-l-2 border-cyan-500 pl-4 italic leading-snug">
              Belajar Tailwind sangat menyenangkan dan cepat!
            </p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="relative overflow-hidden border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-full font-black uppercase tracking-tighter hover:bg-cyan-500 hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]"> 
          Klik Saya 
        </button>
    )
}

function BackgroundColors(){
    return(
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 rounded-[2rem] shadow-2xl group">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-2xl font-black tracking-tight mb-2">Tailwind Colors</h3>
            <p className="text-blue-100/80 font-medium">Seru, Fleksibel, & Gacor!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-slate-900/80 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] p-10 rounded-[2rem] border border-white/5 hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-700 cursor-help group">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">Hover me!</h3>
            <p className="text-slate-500 text-lg">Lihat efek bayangan halus yang terasa <span className="text-white italic font-serif">premium</span>.</p>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 relative overflow-hidden flex-grow min-h-[calc(100vh-8rem)]">
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="mb-6 relative w-32 h-32 md:w-48 md:h-48">
          <Image 
            src="/hollowdex-logo.png" 
            alt="HollowDex Logo" 
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          HollowDex
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed whitespace-pre-line">
          The ultimate Hollow Knight creature collection bot for Discord.
          {"\n"}
          <span className="text-lg text-foreground/60 mt-4 block">Catch, trade, and battle using dynamic trading cards featuring enemies from all across Hallownest.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-20 w-full sm:w-auto">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1455565970784518278" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-[16px] bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.7)]"
          >
            Add to Discord
          </a>
          <Link 
            href="/commands" 
            className="w-full sm:w-auto px-8 py-4 rounded-[16px] border border-white/20 hover:border-white/40 hover:bg-white/5 font-semibold transition-all duration-300"
          >
            See Commands
          </Link>
        </div>

      </div>
    </main>
  );
}

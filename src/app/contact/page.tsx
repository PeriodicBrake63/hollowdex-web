export const metadata = {
  title: 'HollowDex - Contact',
  description: 'Contact the creator of HollowDex',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden flex-grow">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-md w-full text-center z-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-foreground/60 mb-8">
          Have an issue with the bot or want to suggest a feature? 
          Reach out directly on Discord.
        </p>

        <div className="bg-[#2b2d31] p-6 rounded-2xl shadow-xl border border-white/5 flex items-center gap-6 text-left transform transition-transform hover:scale-105">
          <div className="relative w-20 h-20 rounded-full bg-black/40 border-[4px] border-[#1e1f22] overflow-hidden flex-shrink-0 flex items-center justify-center">
             {/* Simple discord avatar placeholder */}
             <span className="text-3xl font-bold text-white/50">?</span>
             <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#2b2d31] rounded-full z-10"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">gamrston</h3>
            <p className="text-green-400 text-sm font-medium">Developer</p>
            <div className="mt-2 text-xs text-white/40 font-mono">
              DISCORD
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}

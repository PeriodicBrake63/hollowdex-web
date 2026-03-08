import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-auto bg-black/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity mb-4">
              <Image 
                src="/hollowdex-logo.png" 
                alt="HollowDex Logo" 
                width={24} 
                height={24} 
                className="rounded-md opacity-80"
              />
              <span className="font-bold tracking-tight">HollowDex</span>
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
              The ultimate Hollow Knight creature collection bot for Discord.
            </p>
          </div>

          <div>
             <h4 className="font-bold mb-4 text-foreground/80">Enemies</h4>
             <ul className="flex flex-col gap-2 text-sm text-foreground/50">
               <li><Link href="/dex" className="hover:text-primary transition-colors">Enemy list</Link></li>
             </ul>
          </div>
          
          <div>
             <h4 className="font-bold mb-4 text-foreground/80">Players</h4>
             <ul className="flex flex-col gap-2 text-sm text-foreground/50">
               <li><Link href="/stats" className="hover:text-primary transition-colors">Stats</Link></li>
               <li><Link href="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4 text-foreground/80">Info</h4>
             <ul className="flex flex-col gap-2 text-sm text-foreground/50">
               <li><Link href="/faq" className="hover:text-primary transition-colors">FaQ</Link></li>
               <li><Link href="/legal" className="hover:text-primary transition-colors">Legal</Link></li>
               <li><Link href="/commands" className="hover:text-primary transition-colors">Commands</Link></li>
               <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
             </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
          <p>© {currentYear} HollowDex. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal" className="hover:text-foreground">Terms & Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

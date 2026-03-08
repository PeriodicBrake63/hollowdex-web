"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      group: "Enemies",
      items: [
        { label: "Enemy list", href: "/dex" },
      ]
    },
    {
      group: "Players",
      items: [
        { label: "Stats", href: "/stats" },
        { label: "Leaderboard", href: "/leaderboard" },
      ]
    },
    {
      group: "Info",
      items: [
        { label: "FaQ", href: "/faq" },
        { label: "Legal", href: "/legal" },
        { label: "Commands", href: "/commands" },
      ]
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image 
            src="/hollowdex-logo.png" 
            alt="HollowDex Logo" 
            width={32} 
            height={32} 
            className="rounded-lg"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block">HollowDex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((section) => (
            <div key={section.group} className="relative group">
              <button className="flex items-center gap-1 font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
                {section.group}
                <svg className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown menus */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-[#1a1f2e] border border-white/10 rounded-xl shadow-xl p-2 w-48 flex flex-col gap-1">
                  {section.items.map(item => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className={`px-3 py-2 rounded-lg transition-colors text-sm ${isActive(item.href) ? 'bg-primary/20 text-primary font-medium' : 'hover:bg-white/5 text-foreground/70 hover:text-foreground'}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1455565970784518278" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-global bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold transition-all shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:shadow-[0_0_25px_rgba(88,101,242,0.6)]"
          >
            Add to Discord
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground/80 hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#11141c] pb-6 px-4">
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map(section => (
              <div key={section.group} className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-2">{section.group}</div>
                {section.items.map(item => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="px-4 py-3 rounded-lg bg-white/5 font-medium hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1455565970784518278" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-5 py-4 rounded-global bg-[#5865f2] text-center text-white font-bold"
            >
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

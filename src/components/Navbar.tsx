'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-40">
                <Image 
                  src="/logo.png" 
                  alt="Lovosis Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <div className="relative group">
                <Link 
                  href="/electrical-trainer-kits" 
                  className="flex items-center gap-1 text-primary font-medium hover:text-primary/80 transition-all duration-200 px-3 py-2 rounded-md text-sm ring-1 ring-white/10 hover:ring-white/20"
                >
                  Electricals Trainer Kits <ChevronDown size={16} />
                </Link>

                {/* Level 1 Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block pt-4 w-72">
                  <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-2xl ring-1 ring-white/5">
                      
                    {/* Electrical Group */}
                    <div className="relative group/electrical">
                        <Link 
                          href="/electrical-trainer-kits/electrical" 
                          className="w-full flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-neutral-800/50 hover:text-red-500 rounded-lg transition-all duration-200 border border-transparent hover:border-red-500/10 group-hover/electrical:bg-neutral-800/80"
                        >
                          <span className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-neutral-900 border border-white/5 group-hover/electrical:border-red-500/30 group-hover/electrical:bg-red-500/10 transition-colors shadow-lg">
                                <Zap size={18} className="text-red-500" />
                            </div>
                            <div>
                                <span className="font-semibold text-sm tracking-wide block">Electrical</span>
                                <span className="text-[10px] text-neutral-500 font-medium hidden group-hover/electrical:block animate-in fade-in slide-in-from-left-1">Trainer Kits</span>
                            </div>
                          </span>
                          <ChevronRight size={14} className="text-neutral-600 group-hover/electrical:text-red-500 transition-transform group-hover/electrical:translate-x-0.5" />
                        </Link>

                        {/* Level 2 Dropdown (Starters) */}
                        <div className="absolute top-0 left-full hidden group-hover/electrical:block pl-2 w-80">
                          <div className="bg-black border border-neutral-800 rounded-xl p-3 shadow-2xl ring-1 ring-white/5 animate-in fade-in slide-in-from-left-2 duration-200">
                              <div className="px-3 py-2 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-1">
                                Select product series
                              </div>
                              
                              <Link href="/electrical-trainer-kits/electrical/starters" className="flex items-center justify-between px-4 py-3 text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-white rounded-lg transition-all group/item border border-transparent hover:border-neutral-700/50">
                                  <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-md bg-neutral-900 border border-neutral-800 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors shadow-sm">
                                      <Activity size={16} className="text-blue-500" />
                                    </div>
                                    <span className="font-medium">Starters</span>
                                  </div>
                                  <ChevronRight size={14} className="text-neutral-700 group-hover/item:text-white transition-transform group-hover/item:translate-x-0.5" />
                              </Link>
                          </div>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
              {['About', 'Services', 'Certificates'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link href="/" className="text-foreground/90 hover:text-primary hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link 
            href="/electrical-trainer-kits" 
            className="w-full text-left flex items-center justify-between text-primary font-medium hover:bg-white/5 px-3 py-3 rounded-md text-base transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Electricals Trainer Kits <ChevronDown size={16} />
          </Link>
          <div className="pl-4 space-y-1">
             <Link 
              href="/electrical-trainer-kits/electrical/starters"
              className="block text-sm text-neutral-400 hover:text-white py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
             >
               ↳ Electrical Starters
             </Link>
          </div>
          {['About', 'Services', 'Certificates'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/90 hover:text-primary hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

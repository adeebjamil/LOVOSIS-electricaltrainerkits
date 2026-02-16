'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
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
                <button className="flex items-center gap-1 text-primary font-medium hover:text-primary/80 transition-all duration-200 px-3 py-2 rounded-md text-sm">
                  Products <ChevronDown size={16} />
                </button>
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
          <button className="w-full text-left flex items-center justify-between text-primary font-medium hover:bg-white/5 px-3 py-3 rounded-md text-base transition-colors">
            Products <ChevronDown size={16} />
          </button>
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

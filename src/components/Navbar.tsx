'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "https://lovosis.in/about", external: true },
  { name: "Services", href: "https://lovosis.in/Services", external: true },
  { name: "Certificates", href: "#certificates" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          "bg-white/80 backdrop-blur-xl border-b border-neutral-200/60 shadow-[0_1px_30px_rgba(0,0,0,0.06)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative h-12 w-48 md:h-16 md:w-64 transition-transform group-hover:scale-[1.03] duration-300">
                  <Image
                    src="/logo.png"
                    alt="Lovosis Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  isActive("/")
                    ? "text-red-600"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80"
                )}
              >
                Home
                {isActive("/") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-red-600 rounded-full" />
                )}
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <Link
                  href="/electrical-trainer-kits/electrical"
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    isActive("/electrical-trainer-kits") || pathname?.startsWith("/electrical-trainer-kits")
                      ? "text-red-600"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80"
                  )}
                >
                  Products
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180 opacity-50 group-hover:opacity-100"
                  />
                  {pathname?.startsWith("/electrical-trainer-kits") && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-red-600 rounded-full" />
                  )}
                </Link>

                {/* Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pt-3 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white backdrop-blur-2xl border border-neutral-200/70 rounded-2xl shadow-2xl shadow-neutral-900/10 overflow-hidden w-[340px]">
                    {/* Accent gradient bar */}
                    <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-400" />

                    {/* Header */}
                    <div className="px-5 py-3.5 border-b border-neutral-100">
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Product Categories</p>
                    </div>

                    <div className="p-2">
                      {/* Electrical */}
                      <div className="relative group/elec">
                        <Link
                          href="/electrical-trainer-kits/electrical"
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50/80 hover:to-orange-50/40 transition-all duration-300 group/item"
                        >
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-neutral-100 shadow-sm flex-shrink-0 ring-1 ring-black/5 group-hover/item:shadow-md group-hover/item:ring-red-200/50 transition-all">
                            <Image
                              src="https://xxhlstgdpuccyrahdtuu.supabase.co/storage/v1/object/public/images/sub-categories/1769606141374-ieu8v.webp"
                              alt="Electrical"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-neutral-900 group-hover/item:text-red-600 transition-colors">
                              Electrical
                            </p>
                            <p className="text-[11px] text-neutral-400 mt-0.5">
                              Motors, Generators & Starters
                            </p>
                          </div>
                          <ChevronRight
                            size={15}
                            className="text-neutral-300 group-hover/item:text-red-500 transition-all group-hover/item:translate-x-0.5 flex-shrink-0"
                          />
                        </Link>

                        {/* Sub-dropdown */}
                        <div className="absolute top-0 left-full invisible opacity-0 group-hover/elec:visible group-hover/elec:opacity-100 transition-all duration-200 pl-2 translate-x-1 group-hover/elec:translate-x-0">
                          <div className="bg-white backdrop-blur-2xl border border-neutral-200/70 rounded-2xl shadow-2xl shadow-neutral-900/10 overflow-hidden w-[260px]">
                            <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-400" />
                            <div className="px-5 py-3 border-b border-neutral-100">
                              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Series</p>
                            </div>
                            <div className="p-2">
                              <Link
                                href="/electrical-trainer-kits/electrical/starters"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50/80 hover:to-orange-50/40 transition-all duration-300 group/sub"
                              >
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-neutral-100 shadow-sm flex-shrink-0 group-hover/sub:shadow-md transition-all">
                                  <Image
                                    src="https://xxhlstgdpuccyrahdtuu.supabase.co/storage/v1/object/public/images/super-sub-categories/1769615103810-v2m983.webp"
                                    alt="Starters"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-neutral-700 group-hover/sub:text-red-600 transition-colors">Starters</p>
                                  <p className="text-[11px] text-neutral-400">DOL, Star-Delta & Soft Starters</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1",
                    isActive(link.href)
                      ? "text-red-600"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80"
                  )}
                >
                  {link.name}
                  {link.external && <ArrowUpRight size={11} className="opacity-40" />}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-red-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden md:flex flex-shrink-0">
              <a
                href="https://lovosis.in/Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-red-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative p-2.5 rounded-xl transition-all duration-300 focus:outline-none",
                  scrolled || isOpen
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-neutral-700 hover:bg-white/40"
                )}
              >
                <div className="w-5 h-5 relative">
                  <span
                    className={cn(
                      "absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300",
                      isOpen ? "top-[9px] rotate-45" : "top-1"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[9px] w-5 h-[2px] bg-current rounded-full transition-all duration-300",
                      isOpen ? "opacity-0 translate-x-2" : "opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300",
                      isOpen ? "top-[9px] -rotate-45" : "top-[17px]"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em]">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-neutral-100 transition-colors text-neutral-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4">
              <div className="space-y-1">
                <Link
                  href="/"
                  className={cn(
                    "block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all",
                    isActive("/")
                      ? "bg-red-50 text-red-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Products Accordion */}
                <div>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all",
                      pathname?.startsWith("/electrical-trainer-kits")
                        ? "bg-red-50 text-red-600"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    Products
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300 text-neutral-400",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      dropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="ml-4 pl-4 border-l-2 border-red-100 space-y-1 py-2">
                      <Link
                        href="/electrical-trainer-kits/electrical"
                        className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-red-600 rounded-lg hover:bg-red-50/50 transition-all font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Electrical
                      </Link>
                      <Link
                        href="/electrical-trainer-kits/electrical"
                        className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-red-600 rounded-lg hover:bg-red-50/50 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        Electrical
                      </Link>
                      <Link
                        href="/electrical-trainer-kits/electrical/starters"
                        className="block px-3 py-2.5 text-sm text-neutral-500 hover:text-red-600 rounded-lg hover:bg-red-50/50 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        → Starters
                      </Link>
                    </div>
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all",
                      isActive(link.href)
                        ? "bg-red-50 text-red-600"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {link.external && <ArrowUpRight size={13} className="text-neutral-400" />}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50/50">
              <a
                href="https://lovosis.in/Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

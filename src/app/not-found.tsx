'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Zap, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden selection:bg-red-500/30">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating glow orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[120px] will-change-transform transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
          top: "10%",
          left: "20%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-red-500/10 blur-[100px] will-change-transform transition-transform duration-[3000ms] ease-out"
        style={{
          transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`,
          bottom: "10%",
          right: "15%",
        }}
      />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-orange-500/8 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Decorative circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0 100h80v-40h40v80h-40v-40" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="80" cy="100" r="3" fill="white" />
          <circle cx="120" cy="60" r="3" fill="white" />
          <circle cx="120" cy="140" r="3" fill="white" />
          <path d="M160 0v80h40" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="160" cy="80" r="3" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Animated 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Giant 404 */}
          <div className="relative inline-block">
            <motion.h1
              className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-900 select-none"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              404
            </motion.h1>

            {/* Glowing "4" overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-500/30 to-transparent select-none pointer-events-none">
                404
              </h1>
            </motion.div>

            {/* Animated spark on the "0" */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Zap className="w-12 h-12 md:w-16 md:h-16 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em]">
              Circuit Broken
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Found</span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-md mx-auto leading-relaxed">
            Looks like this connection got short-circuited. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/electrical-trainer-kits/electrical"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 font-semibold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Search size={18} />
            Browse Products
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-neutral-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Electrical", href: "/electrical-trainer-kits/electrical" },
              { label: "Starters", href: "/electrical-trainer-kits/electrical/starters" },
              { label: "lovosis.in", href: "https://lovosis.in", external: true },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="text-sm text-neutral-500 hover:text-red-500 transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {link.external && <ArrowLeft size={12} className="rotate-[135deg]" />}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </main>
  );
}

'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Activity, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "starters",
    name: "Electrical Starters",
    description: "Comprehensive training systems for various motor starting methods including DOL, Star-Delta, and Soft Starters.",
    icon: Activity,
    link: "/electrical-trainer-kits/electrical/starters",
    features: ["DOL Starter", "Star Delta Starter", "Soft Starter", "VFD Integration"]
  },
  {
    id: "protection",
    name: "Protection Relays",
    description: "Advanced protection system trainers covering overcurrent, earth fault, and differential protection.",
    icon: Zap,
    link: "#",
    features: ["Overcurrent Relay", "Earth Fault Relay", "Differential Protection"]
  },
  {
    id: "machines",
    name: "Electrical Machines",
    description: "Hands-on learning for DC Motors, Induction Motors, Alternators, and Transformers.",
    icon: Settings,
    link: "#",
    features: ["DC Shunt Motor", "3-Phase Induction Motor", "Synchronous Motor"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ElectricalPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Electrical Engineering
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Explore our specialized range of electrical engineering training systems designed for optimal learning outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={item}
                className="group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-red-500/20 transition-all duration-300">
                    <cat.icon className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {cat.name}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 h-20">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={cat.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-red-500 transition-colors">
                    Explore Series <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

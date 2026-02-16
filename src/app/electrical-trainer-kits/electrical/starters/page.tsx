'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Monitor, Activity, Settings, ArrowRight, ShieldCheck, Power } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const starters = [
  {
    id: "dol",
    name: "Direct On Line (DOL) Starter Trainer",
    description: "A complete trainer for understanding the working principle, wiring, and characteristics of Direct On Line starters for induction motors.",
    features: [
      "Rugged Industrial Contactor",
      "Thermal Overload Relay Protection",
      "Push Button Control Station",
      "Fully Isolated Banana Connectors"
    ],
    specs: "Input: 415V AC, 3 Phase | Motor Capacity: Up to 3 HP",
    image: "/images/dol-starter.png" 
  },
  {
    id: "star-delta",
    name: "Automatic Star Delta Starter Trainer",
    description: "Advanced simulation of Star-Delta starting method with pneumatic/electronic timer options for reducing inrush current.",
    features: [
      "Three Contactor Logic",
      "Electronic Timer Unit",
      "Comprehensive Mimic Diagram",
      "Transparent Casing for Visibility"
    ],
    specs: "Input: 415V AC, 3 Phase | Timer Range: 0-30s",
    image: "/images/star-delta.png"
  },
  {
    id: "soft-starter",
    name: "Soft Starter Training System",
    description: "Modern solid-state starting solution teaching ramp-up/ramp-down voltage control for smooth motor operation.",
    features: [
      "Thyristor-based Voltage Control",
      "Bypass Contactor Mechanism",
      "Digital Parameter Display",
      "Fault Indicators"
    ],
    specs: "Control Voltage: 24V DC | Power Circuit: 415V AC",
    image: "/images/soft-starter.png"
  }
];

export default function StartersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-end gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
                <Power size={14} /> Electrical Series
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Motor <span className="text-red-600">Starters</span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed border-l-2 border-red-600 pl-6">
                Comprehensive training solutions designed to master the art of motor control and protection. 
                From basic DOL starters to advanced Soft Starters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          {starters.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Product Image Placeholder */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center">
                   <Activity className="w-24 h-24 text-neutral-700 group-hover:text-red-500/50 transition-colors duration-500" />
                   <p className="absolute bottom-6 text-neutral-500 text-sm font-medium tracking-widest uppercase">Product Image Placeholder</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {product.name}
                  </h2>
                  <div className="h-1 w-20 bg-red-600 rounded-full" />
                </div>
                
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                      <ShieldCheck className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-medium text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-2">Technical Specifications</p>
                    <p className="text-sm text-neutral-300 font-mono">{product.specs}</p>
                </div>

                <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/5 hover:shadow-red-600/20">
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

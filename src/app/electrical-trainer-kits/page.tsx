'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Battery, Radio, Server } from "lucide-react";

const kits = [
  {
    id: 1,
    name: "Basic Electrical Trainer",
    description: "Fundamental training system for AC/DC circuits, Ohm's law, and Kirchhoff's laws.",
    icon: Zap,
    category: "Basic Electrical"
  },
  {
    id: 2,
    name: "Power Electronics Trainer",
    description: "Advanced kit for studying SCR, TRIAC, DIAC, and power control circuits.",
    icon: Activity,
    category: "Power Electronics"

  },
  {
    id: 3,
    name: "PLC Training System",
    description: "Industrial grade PLC trainer with digital I/O and simulation modules.",
    icon: Server,
    category: "Automation"
  },
  {
    id: 4,
    name: "Motor Control Trainer",
    description: "Comprehensive system for DC motor, induction motor, and stepper motor control.",
    icon: Cpu,
    category: "Machines"
  },
  {
    id: 5,
    name: "Microcontroller Kit",
    description: "8051/AVR/PIC based microcontroller trainer for embedded systems learning.",
    icon: Cpu,
    category: "Embedded Systems"
  },
  {
    id: 6,
    name: "Analog Electronics Kit",
    description: "Hands-on learning for Op-Amps, transistors, and signal conditioning.",
    icon: Radio,
    category: "Analog Electronics"
  },
  {
    id: 7,
    name: "Digital Logic Trainer",
    description: "Logic gates, flip-flops, counters, and shift registers implementation kit.",
    icon: Cpu,
    category: "Digital Electronics"
  },
  {
    id: 8,
    name: "Solar Energy Trainer",
    description: "Renewable energy training system with PV panels and charge controllers.",
    icon: Battery,
    category: "Renewable Energy"
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

export default function ElectricalTrainerKits() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform origin-top-left z-0" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Electricals Trainer Kits
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art educational equipment designed to bridge the gap between theory and practical application in electrical engineering.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {kits.map((kit) => (
              <motion.div
                key={kit.id}
                variants={item}
                className="group relative bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <kit.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="text-xs font-semibold text-primary/80 mb-2 uppercase tracking-wider">
                    {kit.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {kit.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {kit.description}
                  </p>
                  
                  <button className="w-full py-2 rounded-lg border border-white/10 hover:bg-white/5 hover:border-primary/30 transition-all text-sm font-medium">
                    View Details
                  </button>
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

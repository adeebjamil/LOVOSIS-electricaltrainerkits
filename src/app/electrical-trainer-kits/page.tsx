'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Battery, Radio, Server, ArrowRight, Settings, Sliders } from "lucide-react";

const kits = [
  {
    id: 1,
    name: "Basic Electrical Trainer",
    description: "Master the fundamentals of AC/DC circuits, Ohm's law, and Kirchhoff's laws with this comprehensive introductory system.",
    icon: Zap,
    category: "Basic Electrical",
    features: ["AC/DC Power Supply", "Resistor/Capacitor/Inductor Banks", "Digital Multimeters"]
  },
  {
    id: 2,
    name: "Power Electronics Trainer",
    description: "Advanced platform for experimenting with power semiconductor devices including SCRs, TRIACs, and MOSFETs.",
    icon: Activity,
    category: "Power Electronics",
    features: ["Thyristor Control", "Inverter Circuits", "cycloconverters"]
  },
  {
    id: 3,
    name: "PLC Training System",
    description: "Industrial-grade Programmable Logic Controller system designed for automation logic and process control education.",
    icon: Server,
    category: "Automation",
    features: ["Digital I/O Modules", "HMI Interface", "Real-time Simulation"]
  },
  {
    id: 4,
    name: "Motor Control Trainer",
    description: "Complete control station for studying DC motors, Induction motors, and modern Stepper/Servo motor technologies.",
    icon: Settings,
    category: "Machines",
    features: ["Speed Control", "Torque Measurement", "PID Controllers"]
  },
  {
    id: 5,
    name: "Microcontroller Kit",
    description: "Versatile embedded systems trainer supporting 8051, AVR, and PIC architectures for firmware development.",
    icon: Cpu,
    category: "Embedded Systems",
    features: ["GPIO Access", "ADC/DAC Convertors", "Serial Communication"]
  },
  {
    id: 6,
    name: "Analog Electronics Kit",
    description: "Deep dive into signal processing, operational amplifiers, and transistor amplifier configurations.",
    icon: Radio,
    category: "Analog Electronics",
    features: ["Op-Amp Circuits", "Filter Design", "Oscillators"]
  },
  {
    id: 7,
    name: "Digital Logic Trainer",
    description: "Hands-on verification of logic gates, flip-flops, counters, and complex sequential logic circuits.",
    icon: Sliders,
    category: "Digital Electronics",
    features: ["Logic Gates", "Shift Registers", "7-Segment Displays"]
  },
  {
    id: 8,
    name: "Solar Energy Trainer",
    description: "Renewable energy workstation focusing on Photovoltaic systems, MPPT, and battery management.",
    icon: Battery,
    category: "Renewable Energy",
    features: ["PV Panels", "Charge Controllers", "Inverter Load Test"]
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
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "outCirc" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={16} /> Premium Educational Equipment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
              Electrical Trainer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Kits</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Bridge the gap between theory and practice with our state-of-the-art laboratory equipment designed for modern engineering education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {kits.map((kit) => (
              <motion.div
                key={kit.id}
                variants={item}
                className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-12px_rgba(220,38,38,0.25)] flex flex-col"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 shadow-lg">
                      <kit.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:text-primary/80 group-hover:border-primary/20 transition-colors">
                      {kit.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {kit.name}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                    {kit.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                     {kit.features.slice(0, 3).map((feature, i) => (
                       <li key={i} className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                         <div className="w-1 h-1 rounded-full bg-primary/50 mr-2" />
                         {feature}
                       </li>
                     ))}
                  </ul>
                  
                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-primary hover:border-primary text-white font-medium transition-all group-hover:shadow-lg group-hover:shadow-primary/20 flex items-center justify-center gap-2">
                    View Specifications <ArrowRight size={16} />
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

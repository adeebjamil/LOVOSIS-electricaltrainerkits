'use client';

import { motion } from "framer-motion";
import { Globe, RefreshCw, Smartphone, Shield, Zap, Copy } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deploy instantly to the edge for fastest delivery worldwide.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Looks perfect on any device, from mobile to desktop.",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: RefreshCw,
    title: "Instant Updates",
    description: "Push git commit and see changes live in seconds.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security built-in automatically.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for Core Web Vitals out of the box.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description: "Components ready to drop into your project.",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
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

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/20 skew-y-3 transform origin-bottom-right z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"
          >
            Capabilities Unlocked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build faster, scales better, and look amazing while doing it.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/10"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

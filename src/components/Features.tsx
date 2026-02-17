'use client';

import { motion } from "framer-motion";
import { Shield, Zap, BookOpen, Settings, Award, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Industrial Standard",
    description: "Built using authentic industrial components to provide real-world engineering experience.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Designed with multiple protection layers and shrouded terminals to ensure student safety.",
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    icon: BookOpen,
    title: "Curriculum Aligned",
    description: "Tailored to meet the syllabus requirements of leading technical universities and polytechnics.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: Settings,
    title: "Plug & Play",
    description: "Ready-to-use systems with comprehensive manuals for immediate laboratory integration.",
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "ISO 9001:2015 certified manufacturing ensuring precision, reliability, and longevity.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated technical support and training for faculty and lab instructors.",
    color: "text-red-600",
    bg: "bg-red-50"
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
      <div className="absolute inset-0 bg-red-50/30 skew-y-3 transform origin-bottom-right z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900"
          >
            Engineering <span className="text-red-600">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            State-of-the-art educational equipment designed to bridge the gap between theory and practice.
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
              className="group p-8 rounded-2xl bg-white border border-neutral-100 hover:border-red-200 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5 hover:shadow-red-500/10"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-100`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-red-600 transition-colors">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

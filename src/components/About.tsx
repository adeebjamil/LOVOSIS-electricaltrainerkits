'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-semibold mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
              Driving Innovation in <br/>
              <span className="text-red-600">Technical Education</span>
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                <strong>Lovosis Technology Private Limited</strong> is a premier provider of advanced educational solutions, specializing in high-quality trainer kits and laboratory equipment. Our mission is to bridge the gap between theoretical knowledge and practical application for the next generation of engineers.
              </p>
              <p>
                Operating through <a href="https://lovosis.in" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">lovosis.in</a>, we deliver excellence from our manufacturing facilities in Bangalore and Kerala to institutions globally.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Industrial-Grade Quality",
                "Advanced Manufacturing",
                "Global Digital Transformation",
                "Educational Excellence"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="https://lovosis.in/about" target="_blank" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1">
                Learn More About Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
               <Image 
                  src="/facility.webp" 
                  alt="Lovosis Technology Private Limited" 
                  fill 
                  className="object-cover" 
               />
               
               <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-neutral-100/50">
                 <div className="relative w-32 h-8">
                   <Image 
                      src="/logo.png" 
                      alt="Lovosis" 
                      fill 
                      className="object-contain" 
                   />
                 </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

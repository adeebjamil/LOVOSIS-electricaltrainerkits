'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ElectricalHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-30">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50/50 to-transparent" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob will-change-transform" />
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 will-change-transform" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900">
              Electrical <br/>
              <span className="text-red-600">Engineering</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed mb-8">
              Explore our specialized range of electrical engineering training systems designed for optimal learning outcomes. Hands-on experience with industrial-grade equipment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold border border-red-100">
                    Industrial Standard
                </div>
                <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-100">
                    Safety Compliant
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative h-[400px] w-full max-w-lg"
          >
             <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10 border border-neutral-100">
               <Image 
                 src="https://xxhlstgdpuccyrahdtuu.supabase.co/storage/v1/object/public/images/sub-categories/1769606141374-ieu8v.webp" 
                 alt="Electrical Engineering Trainer"
                 fill
                 className="object-cover"
                 priority
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

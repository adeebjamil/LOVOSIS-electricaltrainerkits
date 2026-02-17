'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "1. Company Recognition Certificate",
    description: "Awarded for outstanding contribution to industry excellence and innovation in technology solutions.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.24f7d4cf.webp&w=640&q=75"
  },
  {
    id: 2,
    title: "2. Karnataka Startup Certificate",
    description: "Recognized by the Karnataka Startup Cell under the Karnataka Startup Policy for innovative solutions.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.f2abee2b.jpg&w=640&q=75"
  },
  {
    id: 3,
    title: "3. IEC 61058-1 Compliance",
    description: "Complies with IEC 61058-1 international standard for safety requirements of switch components for appliances, ensuring product reliability.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.61f77a03.jpg&w=640&q=75"
  },
  {
    id: 4,
    title: "4. IEC 61010-1 Compliance",
    description: "Complies with IEC 61010-1 international standard for safety requirements of electrical equipment for measurement, control, and laboratory use.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.275d9187.jpg&w=640&q=75"
  },
  {
    id: 5,
    title: "5. ISO 45001:2018 Certificate",
    description: "ISO 45001:2018 Occupational Health & Safety Management Systems - Demonstrating our commitment to workplace safety and employee well-being.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.c35ca676.webp&w=640&q=75"
  },
  {
    id: 6,
    title: "6. ISO 14001:2015 Certificate",
    description: "ISO 14001:2015 Environmental Management Systems - Certified for environmental responsibility and sustainable business practices.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.3e77115f.webp&w=640&q=75"
  },
  {
    id: 7,
    title: "7. ISO 9001:2015 Certificate",
    description: "ISO 9001:2015 Quality Management Systems - Certified for maintaining the highest standards of quality in our products and services.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.4d732dde.webp&w=640&q=75"
  },
  {
    id: 8,
    title: "8. GMP Certificate",
    description: "GMP (Good Manufacturing Practice) - Certified for following international manufacturing standards and quality control processes",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.85925792.webp&w=640&q=75"
  },
  {
    id: 9,
    title: "9. Certificate of Compliance",
    description: "CERTIFICATE Of Compliance - Verified compliance with industry regulations and standards for operational excellence.",
    image: "https://lovosis.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.407f2c79.webp&w=640&q=75"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-red-50/30 border-t border-neutral-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Certified Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">
            Our <span className="text-red-600">Certifications</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
             We are proud to be recognized for our commitment to quality, safety, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-red-500/10 border border-neutral-100 hover:border-red-100 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] mb-6 bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {cert.description}
              </p>
              
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 font-medium text-sm hover:bg-neutral-50 hover:border-red-200 hover:text-red-600 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
              >
                View Certificate
                <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:bg-red-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 bg-neutral-100 p-8 flex items-center justify-center border-r border-neutral-200">
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain shadow-lg bg-white"
                    sizes="50vw"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase mb-6">
                  <CheckCircle size={14} /> Verified Certificate
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                  {selectedCert.title}
                </h3>
                
                <div className="space-y-6">
                   <div>
                      <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Description</h4>
                      <p className="text-neutral-700 leading-relaxed text-lg">
                        {selectedCert.description}
                      </p>
                   </div>
                   
                   <div className="pt-6 border-t border-neutral-200">
                      <div className="flex items-center gap-4">
                        <Award className="w-12 h-12 text-red-500" />
                        <div>
                          <p className="font-bold text-neutral-900">Lovosis Technology Pvt Ltd</p>
                          <p className="text-sm text-neutral-500">Official Certification Document</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

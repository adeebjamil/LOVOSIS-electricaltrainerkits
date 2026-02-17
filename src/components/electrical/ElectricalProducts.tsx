'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, AlertCircle, Zap } from 'lucide-react';
import Loader from '@/components/Loader';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: string | null;
  sub_category_id: string | null;
  super_sub_category_id: string | null;
  image_url: string;
  image_url_2: string;
  image_url_3: string;
  key_features: string;
  catalogue_pdf_url: string;
  featured: boolean;
  status: string;
  created_at: string;
  category: { id: string; name: string; slug: string } | null;
  sub_category: { id: string; name: string; slug: string } | null;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

// The Electrical sub-category ID from the API
const ELECTRICAL_SUB_CATEGORY_ID = '73d0ea3a-2d08-4a18-bb2a-eaa74d6a2717';
// The Starters super-sub-category ID from the API
const STARTERS_SUPER_SUB_CATEGORY_ID = '875a0d2c-2274-4858-a035-891d995c40c5';

export default function ElectricalProducts() {
  const [starterProducts, setStarterProducts] = useState<Product[]>([]);
  const [electricalProducts, setElectricalProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const allProducts: Product[] = data.products || [];

        // Filter starter products
        const starters = allProducts.filter(
          (p) => p.super_sub_category_id === STARTERS_SUPER_SUB_CATEGORY_ID
        );

        // Filter electrical sub-category products (machines, motors, etc.)
        const electrical = allProducts.filter(
          (p) => p.sub_category?.slug === 'electrical' || p.sub_category_id === ELECTRICAL_SUB_CATEGORY_ID
        );

        setStarterProducts(starters);
        setElectricalProducts(electrical);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
          <AlertCircle className="w-10 h-10 text-red-500" />
          <p className="text-neutral-600 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  const parseFeatures = (features: string): string[] => {
    return features
      .split('\n')
      .map((f) => f.trim())
      .filter((f) => f.length > 0);
  };

  const renderProductGrid = (title: string, subtitle: string, products: Product[], accentColor: string) => {
    if (products.length === 0) return null;

    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${accentColor === 'red' ? 'bg-red-100' : 'bg-blue-100'} flex items-center justify-center`}>
                <Zap className={`w-5 h-5 ${accentColor === 'red' ? 'text-red-600' : 'text-blue-600'}`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${accentColor === 'red' ? 'text-red-600' : 'text-blue-600'}`}>
                {subtitle}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
              {title}
            </h2>
            <div className={`h-1 w-20 ${accentColor === 'red' ? 'bg-red-600' : 'bg-blue-600'} mt-3 rounded-full`} />
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => {
              const features = parseFeatures(product.key_features);
              return (
                <motion.div
                  key={product.id}
                  variants={item}
                  className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-neutral-100">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Zap className="w-16 h-16 text-neutral-300" />
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Catalogue badge */}
                    {product.catalogue_pdf_url && (
                      <a
                        href={product.catalogue_pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-neutral-700 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-lg"
                      >
                        <Download size={12} />
                        Catalogue
                      </a>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors duration-300 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {features.slice(0, 4).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-neutral-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <Link
                      href={`/electrical-trainer-kits/electrical/product/${product.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors group/link"
                    >
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <>
      {renderProductGrid(
        'Electrical Starters',
        'Motor Starting Systems',
        starterProducts,
        'red'
      )}
      {renderProductGrid(
        'Electrical Machines & Trainers',
        'Hands-on Learning Equipment',
        electricalProducts,
        'blue'
      )}
    </>
  );
}

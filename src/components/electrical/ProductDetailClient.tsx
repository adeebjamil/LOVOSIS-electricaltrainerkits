'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  AlertCircle,
  ChevronRight,
  CheckCircle2,
  Zap,
  Package,
  FileText,
  Share2,
} from "lucide-react";

export interface Product {
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

export default function ProductDetailClient() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        const allProducts: Product[] = data.products || [];

        const found = allProducts.find((p) => p.slug === slug);
        if (!found) {
          setError('Product not found');
          setLoading(false);
          return;
        }

        setProduct(found);

        // Find related products (same sub_category or super_sub_category)
        const related = allProducts.filter(
          (p) =>
            p.id !== found.id &&
            ((found.sub_category_id && p.sub_category_id === found.sub_category_id) ||
              (found.super_sub_category_id && p.super_sub_category_id === found.super_sub_category_id))
        );
        setRelatedProducts(related.slice(0, 3));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <p className="text-neutral-600 text-xl font-medium">{error || 'Product not found'}</p>
          <Link
            href="/electrical-trainer-kits/electrical"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const features = product.key_features
    .split('\n')
    .map((f) => f.trim())
    .filter((f) => f.length > 0);

  const images = [product.image_url, product.image_url_2, product.image_url_3].filter(
    (img) => img && img.length > 0
  );

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-red-500/30">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 flex-wrap">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/electrical-trainer-kits/electrical" className="hover:text-red-600 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <Link href="/electrical-trainer-kits/electrical" className="hover:text-red-600 transition-colors">Electrical</Link>
            <ChevronRight size={14} />
            <span className="text-neutral-900 font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              {/* Main Image */}
              <div className="relative aspect-square bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 mb-4 group">
                {images[activeImage] ? (
                  <Image
                    src={images[activeImage]}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-24 h-24 text-neutral-300" />
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === i
                          ? 'border-red-600 shadow-lg shadow-red-500/20'
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  In Stock
                </span>
                {product.sub_category && (
                  <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-200">
                    {product.sub_category.name}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Description</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}


              {/* Enquiry CTA */}
              <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Need a Quote?</h4>
                    <p className="text-neutral-400 text-sm mb-3">
                      Contact us for pricing, bulk orders, or custom configuration.
                    </p>
                    <a
                      href="https://lovosis.in/Contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold text-sm transition-colors"
                    >
                      Request a Quote <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-red-600" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                  You May Also Like
                </span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">Related Products</h2>
              <div className="h-1 w-20 bg-red-600 mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/electrical-trainer-kits/electrical/product/${rp.slug}`}
                  className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
                    {rp.image_url ? (
                      <Image
                        src={rp.image_url}
                        alt={rp.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-12 h-12 text-neutral-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-1">
                      {rp.name}
                    </h3>
                    <p className="text-neutral-500 text-sm line-clamp-2">{rp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/electrical-trainer-kits/electrical"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-red-600 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Electrical Products
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

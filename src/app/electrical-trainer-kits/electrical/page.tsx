import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ElectricalHero from "@/components/electrical/Hero";
import ElectricalProductsClient from "@/components/electrical/ElectricalProducts";
import { Metadata } from 'next';

// Define the Product interface here or import it
interface Product {
  id: string;
  name: string;
  slug: string;
  sub_category_id: string | null;
  super_sub_category_id: string | null;
  sub_category: { slug: string } | null;
}

// IDs from the original client component
const ELECTRICAL_SUB_CATEGORY_ID = '73d0ea3a-2d08-4a18-bb2a-eaa74d6a2717';
const STARTERS_SUPER_SUB_CATEGORY_ID = '875a0d2c-2274-4858-a035-891d995c40c5';

// Fetch products on the server
async function getProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL 
    ? `${process.env.NEXT_PUBLIC_APP_URL}/api/products` 
    : 'https://lovosis.in/api/products'; // Fallback for build time if env var is missing

  const res = await fetch(apiUrl, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
 
  const data = await res.json();
  return data.products as Product[];
}

export async function generateMetadata(): Promise<Metadata> {
  const products = await getProducts();

  // Filter for relevant keywords
  const productNames = products
    .filter(p => 
      p.super_sub_category_id === STARTERS_SUPER_SUB_CATEGORY_ID || 
      p.sub_category?.slug === 'electrical' || 
      p.sub_category_id === ELECTRICAL_SUB_CATEGORY_ID
    )
    .map(p => p.name)
    .slice(0, 10); // Limit to top 10 for keywords

  return {
    title: 'Electrical Engineering Trainer Kits | Industrial Lab Equipment | Lovosis',
    description: `Buy high-quality Electrical Engineering Trainer Kits. Top rated products: ${productNames.join(', ')}. Comprehensive range of Starters, Protection Relays, and Machines.`,
    keywords: ['Electrical Trainer Kits', 'Electrical Machine Lab', 'Motor Starter Trainers', ...productNames],
    openGraph: {
      title: 'Electrical Engineering Trainer Kits | Lovosis Technology',
      description: 'Explore our specialized range of electrical engineering training systems including Starters, Protection Relays, and Electrical Machines.',
      type: 'website',
    }
  };
}

export default function ElectricalPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-red-500/30">
      <Navbar />
      
      <ElectricalHero />

      {/* Render the Client Component */}
      <ElectricalProductsClient />

      <Footer />
    </main>
  );
}

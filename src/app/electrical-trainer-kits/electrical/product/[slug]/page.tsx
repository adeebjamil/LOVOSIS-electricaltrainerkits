
import { Metadata, ResolvingMetadata } from 'next';
import ProductDetailClient, { Product } from "@/components/electrical/ProductDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data from the reliable golden source
  const { slug } = await params;
  const product = await fetch('https://lovosis.in/api/products', { next: { revalidate: 3600 } })
    .then((res) => res.json())
    .then((data) => data.products.find((p: Product) => p.slug === slug))
    .catch(() => null);
 
  if (!product) {
    return {
      title: 'Product Not Found | Lovosis Technology',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const primaryImage = product.image_url || '/logo.png';
  const url = `https://electricaltrainerkits.com/electrical-trainer-kits/electrical/product/${slug}`;

  // SEO Optimized Title & Description
  const itemTitle = `${product.name} - Electrical Trainer Kit & Lab Equipment`;
  const itemDesc = `Buy ${product.name} at best price in India from Lovosis Technology. High-quality Electrical Engineering Trainer Kit for labs, colleges & industrial training. Specs: ${product.description.substring(0, 50)}...`;

  return {
    title: itemTitle,
    description: itemDesc,
    keywords: [
      product.name, 
      'Electrical Trainer Kit', 
      'Engineering Lab Equipment', 
      'Start Delta Starter', 
      'Industrial Tech Kits', 
      'Lovosis Technology', 
      'Buy Online India',
      product.sub_category?.name || 'Electrical'
    ],
    openGraph: {
      title: itemTitle,
      description: itemDesc,
      url: url,
      siteName: 'Lovosis Technology',
      images: [
        {
          url: primaryImage, 
          width: 800,
          height: 600,
          alt: product.name,
        },
        ...previousImages
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: itemTitle,
      description: itemDesc,
      images: [primaryImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

async function getProduct(slug: string) {
  // Always fetch from the golden source for consistency
  const res = await fetch('https://lovosis.in/api/products', { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.products.find((p: Product) => p.slug === slug);
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return <ProductDetailClient />;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image_url || 'https://lovosis.in/logo.png',
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Lovosis Technology',
    },
    offers: {
      '@type': 'Offer',
      url: `https://lovosis.in/electrical-trainer-kits/electrical/product/${product.slug}`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Lovosis Technology',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient />
    </>
  );
}

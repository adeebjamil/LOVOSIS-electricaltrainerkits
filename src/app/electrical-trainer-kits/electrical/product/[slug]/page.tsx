
import { Metadata, ResolvingMetadata } from 'next';
import ProductDetailClient, { Product } from "@/components/electrical/ProductDetailClient";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const slug = params.slug;
  const product = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'https://electricaltrainerkits.com'}/api/products`).then((res) => res.json()).then((data) => data.products.find((p: Product) => p.slug === slug));
 
  if (!product) {
    return {
      title: 'Product Not Found | Lovosis Technology',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const primaryImage = product.image_url || '/logo.png';
  const url = `https://electricaltrainerkits.com/electrical-trainer-kits/electrical/product/${slug}`;

  return {
    title: `${product.name} - Electrical Trainer Kit | Lovosis Technology`,
    description: product.description.substring(0, 160) + '... Buy industrial grade electrical trainer kits from Lovosis.',
    keywords: [product.name, 'Electrical Trainer Kit', 'Engineering Lab Equipment', 'Lovosis Product', product.sub_category?.name || 'Electrical'],
    openGraph: {
      title: `${product.name} | Lovosis Technology`,
      description: product.description.substring(0, 200),
      images: [primaryImage, ...previousImages],
      url: url,
    },
    alternates: {
      canonical: url,
    },
  }
}

async function getProduct(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL 
    ? `${process.env.NEXT_PUBLIC_APP_URL}/api/products` 
    : 'https://lovosis.in/api/products'; 

  const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.products.find((p: Product) => p.slug === slug);
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.slug);

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

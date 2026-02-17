import { MetadataRoute } from 'next';

interface Product {
    slug: string;
    updated_at?: string;
    created_at: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://electricaltrainerkits.com';

    let products: Product[] = [];
    try {
        const apiUrl = process.env.NEXT_PUBLIC_APP_URL
            ? `${process.env.NEXT_PUBLIC_APP_URL}/api/products`
            : 'https://lovosis.in/api/products';

        const response = await fetch(apiUrl, { next: { revalidate: 3600 } });
        if (response.ok) {
            const data = await response.json();
            products = data.products || [];
        }
    } catch (error) {
        console.error('Failed to fetch products for sitemap:', error);
    }

    const productUrls = products.map((product) => ({
        url: `${baseUrl}/electrical-trainer-kits/electrical/product/${product.slug}`,
        lastModified: new Date(product.updated_at || product.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/electrical-trainer-kits/electrical`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/electrical-trainer-kits/electrical/starters`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...productUrls,
    ];
}

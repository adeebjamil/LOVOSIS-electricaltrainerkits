'use client';

export default function supabaseLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    // Check if it's a Supabase storage URL
    if (src.includes('supabase.co/storage/v1/object/public')) {
        // Try to use the render endpoint for checking if we can optimize
        // NOTE: This requires Supabase Image Transformations to be enabled in the project.
        // If images fail to load, reverted to: return src; which disables resizing but keeps the file.

        // Using the 'render/image' endpoint for transformation
        // Original: .../object/public/bucket/path
        // Transform: .../render/image/public/bucket/path?width=...

        // const transformUrl = src.replace('/object/public/', '/render/image/public/');
        // return `${transformUrl}?width=${width}&quality=${quality || 75}`;

        // SAFE MODE: Since we don't know if transformations are enabled, we return the original src
        // but the Next.js Image component will still handle lazy loading and layout.
        // To enable real optimization, uncomment the lines above and comment the line below.
        return src;
    }

    // Check for already optimized next/image URLs (to avoid double optimization/param conflicts)
    if (src.includes('_next/image') || src.includes('lovosis.in')) {
        return src;
    }

    // For other external images or local images
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}w=${width}&q=${quality || 75}`;
}

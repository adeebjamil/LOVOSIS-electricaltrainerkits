import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Commented out for dev - API routes need server mode
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
};

export default nextConfig;

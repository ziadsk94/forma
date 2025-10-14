import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Cloudflare Pages optimization
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
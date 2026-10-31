import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  experimental: {
    // Static export only needs a handful of workers; 20+ can exhaust memory
    // on build machines with tight RAM limits.
    cpus: 4,
    // Multiple root layouts each own an <html> element, so the 404 page has
    // to be rendered outside them.
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable modern CSS
    optimizeCss: true,
  },
  // Enable more strict type checking
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure React strict mode is enabled
  reactStrictMode: true,
};

export default nextConfig;

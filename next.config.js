/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experiences
  reactStrictMode: true,
  // Disable image optimization if not needed
  images: {
    domains: [],
  },
  // Add any other configurations as needed
};

module.exports = nextConfig; 
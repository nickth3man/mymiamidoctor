/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains if needed
    formats: ['image/avif', 'image/webp'],
  },
  // Enable webpack analyzer in production build if needed
  // webpack(config) {
  //   return config;
  // },
};

export default nextConfig; 
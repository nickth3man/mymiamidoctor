/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: [], // Add any image domains if needed
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
  // Configure static asset caching
  async headers() {
    return [
      {
        // Cache static assets
        source: '/(images|fonts|icons)/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
      {
        // Cache CSS and JS
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
      {
        // Cache other static assets
        source: '/(.*)\\.(svg|jpg|png|webp|avif|woff2|woff|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ];
  },
  // Enable Incremental Static Regeneration with a default revalidation period
  // This allows pages to be statically generated at build time and regenerated
  // in the background when requested
  experimental: {
    // Enable optimized loading of third-party scripts
    optimizeCss: true,
  },
  // Enable webpack analyzer in production build if needed
  // webpack(config) {
  //   return config;
  // },
};

export default nextConfig;
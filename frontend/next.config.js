/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://supa-guru-ten.vercel.app/api/:path*' // Proxy to the deployed API
      }
    ];
  }
};

module.exports = nextConfig;

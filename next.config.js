/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/404',
      }
    ];
  },
  images: {
    domains: ["www.looper.com", "c.tenor.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig

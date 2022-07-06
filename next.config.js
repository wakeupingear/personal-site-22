/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    myName: 'Will Farhat',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/404',
      },
    ];
  },
  images: {
    domains: ["www.looper.com", "c.tenor.com"],
  },
}

module.exports = nextConfig

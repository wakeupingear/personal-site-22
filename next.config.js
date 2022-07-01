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
        destination: '/',
      },
    ];
  },
  images: {
    domains: ["www.looper.com"],
  }
}

module.exports = nextConfig

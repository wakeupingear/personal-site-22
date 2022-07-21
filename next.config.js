/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/work",
        destination: "/professional"
      },
      {
        source: "/school",
        destination: "/professional"
      },
      {
        source: "/education",
        destination: "/professional"
      },
    ];
  },
  images: {
    domains: ["www.looper.com", "c.tenor.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig

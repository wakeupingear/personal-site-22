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

      {
        source: "/inc",
        destination: "/incLife"
      },
      {
        source: "/inclife",
        destination: "/incLife"
      },
    ];
  },
  images: {
    domains: ["www.looper.com", "c.tenor.com"],
  },
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

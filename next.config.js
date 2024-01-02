/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);

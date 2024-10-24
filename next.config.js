/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)

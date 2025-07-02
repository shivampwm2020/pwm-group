// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withMDX(nextConfig);

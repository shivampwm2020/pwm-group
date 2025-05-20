/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  experimental: {
    // Remove appDir option as it's no longer needed
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // Dangerously ignore ESLint errors during production builds
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 
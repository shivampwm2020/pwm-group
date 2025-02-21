/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'],
  },
  experimental: {
    // Remove appDir option as it's no longer needed
  }
}

module.exports = nextConfig 
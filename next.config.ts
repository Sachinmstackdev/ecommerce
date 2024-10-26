import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images: {
    domains: ['placeholder.com'], // Add any domains you're loading images from
  },
}

export default nextConfig
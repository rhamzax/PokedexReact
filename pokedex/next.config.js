/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.pokemon.com']
  }
  // experimental: {
  //   scrollRestoration: true,
  // },
}

module.exports = nextConfig


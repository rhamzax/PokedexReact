/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.pokemon.com', 'raw.githubusercontent.com']
  }
  // experimental: {
  //   scrollRestoration: true,
  // },
}

module.exports = nextConfig


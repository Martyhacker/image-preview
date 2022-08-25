/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['toyota-cms-media.s3.amazonaws.com']
  }
}

module.exports = nextConfig

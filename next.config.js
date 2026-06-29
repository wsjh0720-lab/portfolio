/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
 /portfolio/  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

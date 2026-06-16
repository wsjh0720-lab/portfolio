/** @type {import('next').NextConfig} */
const nextConfig = {
  // 不再用静态导出——在线编辑需要 API 路由
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: '**' },
    ],
  },
}

module.exports = nextConfig

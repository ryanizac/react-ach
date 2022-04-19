/** @type {import('next').NextConfig} */

// const withImages = require('next-images')
// module.exports = withImages({
//   esModule: true,
// })
module.exports = {
  images: {
    domains: ['admin.pechinchou.com.br', 'adminusa.pechinchou.com.br'],
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  experimental: {
    headers() {
      return [
        {
          source: '/.well-known/apple-app-site-association',
          headers: [{ key: 'content-type', value: 'application/json' }],
        },
      ]
    },
  },
}

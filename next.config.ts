/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shawneephysiotherapy.ca',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

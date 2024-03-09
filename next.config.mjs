/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:7105',
        port: '',
        pathname: '\\Images/**',
      },
    ],
  },
}

export default nextConfig

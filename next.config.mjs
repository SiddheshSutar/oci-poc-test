/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://localhost:4000/api/:path*',
          },
        ]
      },
};


export default nextConfig;

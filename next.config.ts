/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lunch-hub.vercel.app', // Updated website name
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Allow Unsplash images
        pathname: '/**',
      },
      
      
    ],
  },
};

export default nextConfig;

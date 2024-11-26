/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
        port: '', // No specific port
        pathname: '**', // Allows any path
      },
    ],
  },
};

export default nextConfig; // Use this if you're in an .mjs file

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname],
  },
};

export default nextConfig;

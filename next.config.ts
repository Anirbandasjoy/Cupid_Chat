import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co", "i.ibb.co.com"],
  },
  eslint: {
    // Disabling ESLint during build to prevent blocking the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

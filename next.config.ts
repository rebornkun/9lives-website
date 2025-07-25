import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: "export"' to support API routes
  images: {
    unoptimized: true,
  },
  // Remove 'distDir: "out"' to use the default '.next' directory
};

export default nextConfig;

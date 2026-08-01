import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cssInlining: false,
  },
};

export default nextConfig;

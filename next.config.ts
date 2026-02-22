import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local in public/, no remote patterns needed
    unoptimized: false,
  },
};

export default nextConfig;

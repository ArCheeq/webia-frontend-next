import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

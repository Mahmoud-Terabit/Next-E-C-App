import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["172.16.0.2"],
  images: {
    remotePatterns: [new URL('https://ecommerce.routemisr.com/**')],
  },
};

export default nextConfig;

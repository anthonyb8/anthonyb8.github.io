import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist", // output director
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

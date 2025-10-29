import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;
 
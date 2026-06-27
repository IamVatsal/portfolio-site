import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://iamvatsal.github.io/My-Resume',
        permanent: true, 
      },
    ]
  },
};

export default nextConfig;

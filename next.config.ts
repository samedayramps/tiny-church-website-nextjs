import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/landing1',
        permanent: true, // 308 status code - helps with SEO
      },
    ]
  },
};

export default nextConfig;

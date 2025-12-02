import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // proxy for hugging face space
        source: '/api/gradio-proxy/:path*',
        destination: 'https://AI4ALL3DCNN-neuroscan-backend.hf.space/:path*',
      },
    ];
  },
};

export default nextConfig;
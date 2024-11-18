import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/capitulos/introduccion', // La ruta que quieres como principal
        permanent: true, // true = código 308, false = código 307
      },
      
    ]
  },
};

export default nextConfig;

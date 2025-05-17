import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* Preload fonts and colors in all scss files. */
  sassOptions: {
    additionalData: `@use 'sass:meta'; @use '@/styles/_colors' as *; @use '@/styles/_typography' as *;`,
    quietDeps: true
    // silenceDeprecations: [  ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'wu-11-lasse-k-k-trainer-api.onrender.com',
        // port: '4000',
        pathname: '/**',
        search: '',
      },
    ],
    // Cleans the image src url to remove url params 
    unoptimized: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

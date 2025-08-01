import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fix case sensitivity issues on Windows
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Ignore case sensitivity warnings for html-to-text
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        module: /html-to-text/,
        message: /multiple modules with names that only differ in casing/,
      },
    ];
    
    return config;
  },
};

export default nextConfig;

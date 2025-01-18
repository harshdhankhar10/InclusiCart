import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com",
      "img.freepik.com",
      "t4.ftcdn.net",
      "media.istockphoto.com",
      
    ],
  },
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      {
        "@mapbox/node-pre-gyp": "commonjs @mapbox/node-pre-gyp",
      },
    ];
    return config;
  }
};

export default nextConfig;

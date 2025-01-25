import { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "img.freepik.com",
      "t4.ftcdn.net",
      "media.istockphoto.com",
      "encrypted-tbn0.gstatic.com"
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

export default withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
})(nextConfig);
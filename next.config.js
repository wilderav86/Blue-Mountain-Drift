/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // optimizeFonts: false,
  env: {
    NEXT_PUBLIC_INSTA_ID: process.env.NEXT_PUBLIC_INSTA_ID,
    NEXT_PUBLIC_INSTA_KEY: process.env.NEXT_PUBLIC_INSTA_KEY,
  },
};

module.exports = nextConfig;

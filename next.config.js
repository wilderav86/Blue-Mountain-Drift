/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // optimizeFonts: false,
  env: {
    NEXT_PUBLIC_INSTA_ID: process.env.NEXT_PUBLIC_INSTA_ID,
    NEXT_PUBLIC_INSTA_KEY: process.env.NEXT_PUBLIC_INSTA_KEY,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,

    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,

    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

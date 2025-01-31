/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ui-avatars.com',
      'images.unsplash.com',
      'identity.stanford.edu',
      'brand.berkeley.edu',
      'upload.wikimedia.org'
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
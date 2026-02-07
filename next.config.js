/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: isProd ? '/diegolibreros/' : '',
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
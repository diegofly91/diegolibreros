/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: ['legacy-js-api', 'import', 'color-functions', 'global-builtin', 'slash-div'],
  },
  assetPrefix: isProd ? '/diegolibreros/' : '',
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
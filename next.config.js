// next.config.js
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const composePlugins = require('next-compose-plugins');

module.exports = composePlugins([
  [withCss],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
]);

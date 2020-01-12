const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config, options) {
    config.resolve.alias['@mallowigi/frontend'] = __dirname;
    return config;
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});

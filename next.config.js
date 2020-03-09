/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const config = {
  poweredByHeader: false,
};

module.exports = withPlugins([[withImages]], config);

/**
 * dist-min.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const TerserPlugin = require('terser-webpack-plugin');

const config = require('./dist.conf');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    filename: 'react-multi-menu-child.min.js',
  }),
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'production',
});

/*
 * @file demo.conf.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 09.09.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = require('./base.conf');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  entry: './dev/App.jsx',
  output: {
    path: path.resolve(__dirname, '../demo'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: require.resolve('less-loader'),
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});

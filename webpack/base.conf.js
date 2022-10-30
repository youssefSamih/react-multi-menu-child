/**
 * base.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

// Webpack Base Settings
module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
    ],
  },
};

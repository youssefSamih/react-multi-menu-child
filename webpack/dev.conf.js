/**
 * dev.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

const path = require("path");

const config = require("./base.conf");

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: "./dev/App.jsx",
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dev"),
    },
    port: 3000,
  },
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve("style-loader"),
          },
          {
            loader: require.resolve("css-loader"),
          },
          {
            loader: require.resolve("less-loader"),
          },
        ],
      },
    ],
  },
});

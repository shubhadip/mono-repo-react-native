
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath:  '/',
    },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    },
    extensions: [
        '.web.tsx',
        '.web.ts',
        '.tsx',
        '.ts',
        '.web.jsx',
        '.web.js',
        '.jsx',
        '.js',
      ],
  }
};


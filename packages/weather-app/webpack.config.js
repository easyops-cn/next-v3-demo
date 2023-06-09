const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { RuntimePlugin } = require('@next-core/webpack');

const mode = process.env.NODE_ENV;
const packageDir = process.cwd();

module.exports = {
  mode,
  entry: './index.js',
  output: {
    path: path.join(packageDir, 'dist'),
    publicPath: 'auto',
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.yaml$/,
        type: 'asset/source',
      },
    ],
  },
  devServer: {
    open: true,
    client: {
      overlay: false,
    },
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(packageDir, "index.ejs"),
    }),
    new RuntimePlugin({
      brickPackages: [
        '@next-bricks/basic',
        '@next-bricks/shoelace',
      ],
    }),
  ],
};

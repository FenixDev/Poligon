const path = require('path');
const webpack = require('webpack');

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');


module.exports = {
  mode: 'production',

  entry: {
    main: './public/js/main.js'
    //, location: './public/js.js'
  },

  output: {
    path: path.resolve(__dirname, 'public/js/dist')
  },

  /*
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: false,
    })
  ],
  */

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'public')],
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}
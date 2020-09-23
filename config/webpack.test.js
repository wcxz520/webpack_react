const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')

const global = require('./global')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/test'),
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [],
  },
  plugins: [
    new DefinePlugin({
      PROJECT_GLOBAL: JSON.stringify(global.test),
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
})

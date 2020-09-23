const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const global = require('./global')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/prod'),
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [],
  },
  optimization: {
    //模块只导出被使用的成员
    usedExports: true,
    // // 压缩输出的结果
    // minimize: true,
    // 只会在开启minimizer特性后才会工作， 压缩的工作添加到这统一控制
    minimizer: [
      // 解决设置了OptimizeCssAssetsWebpackPlugin,  webpack以为要使用自定义压缩, 所以取消了内置js压缩器，所以加上这个内置js压缩器
      new TerserWebpackPlugin(),
      // 压缩样式文件
      new OptimizeCssAssetsWebpackPlugin(),
    ],
    concatenateModules: true,
    splitChunks: {
      // 自动提取公共模块到bundle
      chunks: 'all',
    },
  },
  plugins: [
    new DefinePlugin({
      PROJECT_GLOBAL: JSON.stringify(global.production),
    }),
    new CleanWebpackPlugin(),
  ],
})

const path = require('path')
const {
  DefinePlugin,
  HotModuleReplacementPlugin,
  EvalSourceMapDevToolPlugin,
} = require('webpack')
const { merge } = require('webpack-merge')

const global = require('./global')
const webpackBase = require('./webpack.base')

process.env.NODE_ENV = 'development'

module.exports = merge(webpackBase, {
  mode: 'development',
  plugins: [
    new DefinePlugin({
      PROJECT_GLOBAL: JSON.stringify(global.development),
    }),
    new HotModuleReplacementPlugin(),
    new EvalSourceMapDevToolPlugin({
      exclude: /node_modules/,
      module: true,
      columns: false,
    }),
  ],
  module: {
    rules: [],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/bundle.js'),
    inline: true,
    port: 5555,
    open: true,
    hot: true,
    compress: true,
    overlay: {
      errors: true,
    },
  },
  // devtool: 'source-map',
})

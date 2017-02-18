const path = require('path');
const { webpack } = require('@webpack-blocks/webpack2');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.basePlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, 'index.html'),
  }),
];

exports.productionPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
    sourceMap: false,
  }),
];

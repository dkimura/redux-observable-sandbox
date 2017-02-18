const path = require('path');
const { createConfig, addPlugins, customConfig, defineConstants, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const plugins = require('./webpack.plugins');

module.exports = createConfig([
  entryPoint(path.join(__dirname, 'src', 'index.js')),
  setOutput(path.join(__dirname, 'build', 'bundle.js')),
  babel(),
  addPlugins(plugins.basePlugins),
  customConfig({
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules',
      ],
    },
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
  }),
  env('development', [
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    addPlugins(plugins.productionPlugins),
  ]),
]);

var path = require('path');
var webpack = require('webpack');
var basePath = require('os').platform() !== 'win32' ? basePath = process.cwd() : '';
var PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:' + PORT,
      'webpack/hot/only-dev-server',
      './index'
    ],
    inspector: [path.join(__dirname, '../../dist/react.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      OPEN_FILE_URL: '"/open-in-editor"',
      REMPL_HOST: '"localhost:8177"'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        options: {
          babelrc: false,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            // in case you are using React, this plugin should be applied
            // before babel-plugin-source-wrapper
            // otherwise component names will not to be shown propertly
            'transform-react-display-name',
            require('babel-plugin-source-wrapper').configure({
              // webpack sends absolute paths to plugins
              // but we need paths relative to project root
              basePath: basePath,

              // inject runtime in instrumented sources
              runtime: true
            })
          ]
        }
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader'],
        include: __dirname
      }
    ]
  }
};

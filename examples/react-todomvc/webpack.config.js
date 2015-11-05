var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  babel: {
    plugins: [
      // in case you are using React, this plugin should be applied
      // before babel-plugin-source-wrapper
      // otherwise component names will not to be shown propertly
      require('babel-plugin-react-display-name'),
      require('babel-plugin-source-wrapper').configure({
        // webpack sends absolute paths to plugins
        // but we need paths relative to project root
        basePath: path.resolve(path.join(process.cwd(), '../../')),

        // inject runtime in instrumented sources
        runtime: true
      })
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      OPEN_FILE_URL: '"/open-in-editor"'
    })
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '..', '..', 'src')
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

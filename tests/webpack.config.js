var path = require('path');
var webpack = require('webpack');
var basePath = '';
var reactPath = process.env.REACT === '14' ? 'react14' : 'react15';

if (require('os').platform() !== 'win32') {
  basePath = process.cwd();
}

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
        basePath: basePath,

        // inject runtime in instrumented sources
        runtime: true
      })
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      OPEN_FILE_URL: '"/open-in-editor"'
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'react-dom': path.join(__dirname, reactPath, 'node_modules', 'react-dom'),
      'react': path.join(__dirname, reactPath, 'node_modules', 'react')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, '..')
    }]
  }
};

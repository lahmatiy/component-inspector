var path = require('path');
var webpack = require('webpack');
var basePath = '';
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
    alias: {
      'react': path.join(__dirname, '../', 'node_modules', 'react')
    },
    extensions: ['', '.js']
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

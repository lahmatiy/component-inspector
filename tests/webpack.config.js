const path = require('path');
const webpack = require('webpack');
let basePath = '';
const reactPath = process.env.REACT === '14' ? 'react14' : 'react15';

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
  plugins: [
    new webpack.DefinePlugin({
      OPEN_FILE_URL: '"/open-in-editor"'
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      'react-dom': path.join(__dirname, reactPath, 'node_modules', 'react-dom'),
      'react': path.join(__dirname, reactPath, 'node_modules', 'react')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '..'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['env', 'react'],
              plugins: [
                'babel-plugin-transform-class-properties',
                'babel-plugin-transform-function-bind',
                'babel-plugin-transform-object-rest-spread',
                require('babel-plugin-source-wrapper').configure({
                  // webpack sends absolute paths to plugins
                  // but we need paths relative to project root
                  basePath: basePath,

                  // inject runtime in instrumented sources
                  runtime: true
                })
              ],
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
};

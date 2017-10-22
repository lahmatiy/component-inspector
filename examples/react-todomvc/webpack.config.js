const path = require('path');
const webpack = require('webpack');
let basePath = '';

if (require('os').platform() !== 'win32') {
  basePath = process.cwd();
}

console.log(path.join(__dirname, '..', '..', 'src'));
module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'react-hot-loader/patch',
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
    new webpack.DefinePlugin({
      OPEN_FILE_URL: '"/open-in-editor"',
      SOURCE_FRAGMENT: '"/source-fragment"',
      REMPL_SERVER: '"localhost:8177"'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
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
                'react-hot-loader/babel',
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
      },
      {
        test: /\.css?$/,
        include: __dirname,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'raw-loader'
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};

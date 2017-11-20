const path = require('path');
const resolve = require('resolve');
const webpack = require('webpack');
const reactPath = process.env.REACT === '14' ? 'react14' : 'react15';
let basePath = '';

if (require('os').platform() !== 'win32') {
  basePath = process.cwd();
}

function resolveAlias(name) {
  return path.dirname(resolve.sync(name, {
    basedir: path.dirname(require.resolve(reactPath))
  }));
}

module.exports = {
  devtool: 'inline-source-map',
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
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      'react-dom': resolveAlias('react-dom'),
      'react': resolveAlias('react')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '../..'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['env', { modules: false }], 'react'],
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
      },
      {
        test: /\.css?$/,
        include: path.join(__dirname, '../..'),
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

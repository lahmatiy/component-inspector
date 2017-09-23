var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var openInEditor = require('express-open-in-editor');
var config = require('./webpack.config');
var PORT = process.env.PORT || 3000;

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  setup: function(app) {
    app.use('/open-in-editor', openInEditor());
  }
});

server.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + PORT);
});

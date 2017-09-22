var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var openInEditor = require('express-open-in-editor');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  setup: function(app) {
    app.use(openInEditor());
  }
});
var port = process.env.PORT || 3000;
server.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});

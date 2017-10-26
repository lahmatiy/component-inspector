const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openInEditor = require('express-open-in-editor');
const sourceFragment = require('express-source-fragment');
const config = require('./webpack.config');
const PORT = process.env.PORT || 3000;

const options = {
  publicPath: config.output.publicPath,
  contentBase: '.',
  hot: true,
  host: 'localhost',
  historyApiFallback: true,
  stats: {
    colors: true
  },
  before(app) {
    app.use('/open-in-editor', openInEditor({
      cwd: __dirname
    }));
    app.use('/source-fragment', sourceFragment({
      cwd: __dirname
    }));
    app.use('/dist', function(req, res) {
      res.setHeader('content-type', 'application/javascript');
      const filename = req.url.replace('/', '');
      fs.createReadStream(path.join(__dirname, '../../dist', filename)).pipe(res);
    });
  }
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);


server.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + PORT);
});

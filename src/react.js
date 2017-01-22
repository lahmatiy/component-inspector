var initInspector = require('./inspector/index.js');

require('./api-adapter/react.js').ready(function(api) {
    initInspector(api);
    return require('./inspector-rempl/publisher/index.js')(api);
});

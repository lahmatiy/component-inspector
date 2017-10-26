// rempl inject itself to subscriber environment
// in prod mode UI is distributed as `script` and sandbox inject rempl script
var rempl = global.rempl;

// in dev mode UI is distributed as `url` and we should include rempl script
/** @cut */ rempl = require('../../../node_modules/rempl/dist/rempl.js');

module.exports = rempl.getSubscriber();

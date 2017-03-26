// stub module since rempl inject itself to subscriber environment

// in prod mode UI is distributed as `script` and sandbox inject rempl script
module.exports = global.rempl;

// in dev module UI is distributed as `url` and we should include rempl script
/** @cut */ module.exports = require('../../../node_modules/rempl/dist/rempl.js');

var inited = false;

module.exports = function(api){
  function init(){
    require('./api.js').set(api);    
    require('./panel/index.js');

    basis.dev.log('component-inspector inited');
  }

  if (inited) {
    basis.dev.warn('component-inspector already inited');
    return;
  }

  inited = true;
  if (!global.basisjsToolsFileSync) {
    setTimeout(init, 500);
  } else {
    init();
  }
};

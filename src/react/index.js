// init devpanel
function init(){
  // init interface
  require('./panel.js');

  basis.dev.log('component-inspector inited');
}

// everything ok, init on dom ready
basis.ready(function(){
  if (!basis.devtools)
    // if inspectBasis.devtools is not defined, then init with 500 ms delay
    // to give a chance basisjs-tools script is loaded (as it load async/defered and doesn't fire appropriate event)
    setTimeout(init, 500);
  else
    init();
});

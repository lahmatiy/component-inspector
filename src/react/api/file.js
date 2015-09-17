module.exports = {
  openFile: function(filename){
    var basisjsTools = typeof basisjsToolsFileSync != 'undefined' ? basisjsToolsFileSync : inspectBasis.devtools;

    if (basisjsTools && typeof basisjsTools.openFile == 'function')
    {
      basisjsTools.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, '$1')));
    }
  }
};

module.exports = function(node, api){
  var root = node;
  var cursor = root.firstChild;
  var nodes = [root, [], {}];
  var nodesCursor = nodes;
  var nodesStack = [nodesCursor];
  var candidate;

  while (cursor && cursor !== root) {
    var node = [cursor, [], {}];
    nodesCursor[1].push(node);

    if (!api.isComponentRootNode(cursor)) {
      if (cursor.firstChild) {
        cursor = cursor.firstChild;
        nodesStack.push(nodesCursor);
        nodesCursor = node;
        continue;
      }
    } else {
      node[2].nestedView = true;
    }

    candidate = cursor.nextSibling;

    while (!candidate && cursor.parentNode !== root) {
      cursor = cursor.parentNode;
      nodesCursor = nodesStack.pop();
      if (cursor !== root)
        candidate = cursor.nextSibling;
    }

    cursor = candidate;
  }

  return nodes;
};

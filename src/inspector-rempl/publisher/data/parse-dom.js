function parseDom(node, api) {
  var root = node;
  var cursor = root.firstChild;
  var nodes = [root, [], {}];
  var nodesCursor = nodes;
  var nodesStack = [nodesCursor];
  var candidate;

  while (cursor && cursor !== root) {
    var node = [cursor, [], {}];
    nodesCursor[1].push(node);

    if (api.isComponentRootNode(cursor)) {
      node[2].nestedView = true;
      node[2].foreign = api.isForeignComponentNode(root, cursor);
    } else {
      if (cursor.firstChild) {
        cursor = cursor.firstChild;
        nodesStack.push(nodesCursor);
        nodesCursor = node;
        continue;
      }
    }

    candidate = cursor.nextSibling;

    while (!candidate && cursor.parentNode !== root) {
      cursor = cursor.parentNode;
      nodesCursor = nodesStack.pop();
      if (cursor !== root) {
        candidate = cursor.nextSibling;
      }
    }

    cursor = candidate;
  }

  return nodes;
}

function buildAttribute(attr) {
  var value = !attr.value ? [] : [{
    type: 'static',
    value: attr.value
  }];

  return {
    name: attr.name,
    childNodes: value
  };
}

module.exports = function buildDomTree(rootNode, api) {
  function createNode(item) {
    var node = item[0];
    var children = item[1];
    var properties = item[2];
    var result;

    switch (node.nodeType) {
      case 1:
        var nestedView = properties.nestedView;
        var attributes = basis.array(node.attributes).filter(api.viewAttributeFilter);
        var attrs;
        var inline;

        attrs = attributes.map(buildAttribute);
        children = children.map(createNode);

        inline =
          children.every(function(node) {
            return node instanceof Text;
          }) &&
          children.reduce(function(res, node) {
            return res + node.value.length;
          }, 0) < 32;

        result = {
          type: 'element',
          domNodeId: node,
          name: node.tagName.toLowerCase(),
          componentName: nestedView ? api.getComponentNameByNode(node) : null,
          childrenHidden: node.firstChild && !children.length,
          inlineChildren: inline,
          nestedView: nestedView,
          foreign: properties.foreign,
          attributes: attrs,
          childNodes: children,
          loc: api.getNodeLocation(node)
        };
        break;

      case 3:
        result = {
          type: 'text',
          domNodeId: node,
          value: node.nodeValue,
          nestedView: properties.nestedView,
          foreign: properties.foreign
        };
        break;

      case 8:
        result = {
          type: 'comment',
          domNodeId: node,
          value: node.nodeValue,
          nestedView: properties.nestedView,
          foreign: properties.foreign
        };
        break;
    }

    if (result) {
      var nodeId = basis.genUID();
      domNodesMap[nodeId] = result.domNodeId;
      result.domNodeId = nodeId;
    }

    return result || '';
  }

  var domNodesMap = {};
  var tree = null;

  if (rootNode) {
    tree = createNode(parseDom(rootNode, api));
  }

  return {
    map: domNodesMap,
    tree: tree
  };
};

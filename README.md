[![NPM version](https://img.shields.io/npm/v/component-inspector.svg)](https://www.npmjs.com/package/component-inspector)

# Component inspector

![Example for React](http://s63.imgup.net/ci-introcbc0.gif)

General purpose of tool is showing components boundaries and its DOM fragment with some details. It could be extended by features like [source fragment locating](#locating-components-source) and [opening file in editor](#opening-file-in-editor). See [Additional features](#additional-features) section for details.

It's still a **proof of concept**. Generally it's an adoptation of [basis.js](https://github.com/basisjs/basisjs) tool for other component frameworks and libraries. Here is ready to use builds for [React](#react) and [Backbone](#backbone). But you also could [use inspector with custom API](#api-free-build) for your own component solution.

## Install

```
npm install component-inspector --save-dev
```

## Usage

There are 3 options to use Component Inspector:

- use one of ready-to-use build for certain framework or library
- use API free build and init inspector with custom API
- make you own build as ready-to-use solution (PRs are welcome)

### Ready to use builds

In case you use one of ready-to-use editions (i.e. `React` or `Backbone`) there is no any public API. Just include apropriate script and here you are.

#### React

![React example](http://u12.imgup.net/ScreenShot5cce.png)

You should include `component-inspector` script **before** `React` script.

```html
<script src="node_modules/component-inspector/dist/react.js"></script>
<script src="react.js"></script>
```

#### Backbone

![Backbone example](http://i60.imgup.net/backbone2e57.png)

You should include `component-inspector` script right **after** `Backbone` script.

```html
<script src="backbone.js"></script>
<script src="node_modules/component-inspector/dist/backbone.js"></script>
```

### API free build

In case you want to use inspector with your own API adapter you should use `dist/base.js` script. When script included into html only one public function available – `initComponentInspector(api)`. This function could be invoked just once. It takes API methods that override defaults.

```html
<script src="node_modules/component-inspector/dist/base.js"></script>
<script>
  initComponentInspector({
    isComponentRootNode: function(node){
      return Boolean(node && node.__view);
    },
    getInstanceByNode: function(node){
      if (node) {
        return node.__view;
      }
    },
    getInstanceRootNode: function(instance){
      if (instance) {
        return instance.rootNode;
      }
    }
  });
</script>
```

All methods are optional. Most important method is `isComponentRootNode` that checks DOM node is component root node. Also `getInstanceByNode` and `getInstanceRootNode` could be used to resolve DOM fragment owner (component instance) and owners root element. Other methods could provide additional information.

#### isComponentRootNode(node)

Returns `true` if DOM node is root node of some component. Uses to determine component boundaries.

#### getComponentNameByNode(node)

Returns component name if possible. This name using in component short details.

#### getInstanceByNode(node)

Function to resolve component owner by DOM node if any. Usually it's some kind of `view` instance.

#### getInstanceRootNode(instance)

Should return instance's root DOM node. It's vice versa function of `getInstanceByNode(node)`. Using on DOM mutations to determine actual DOM node to inspect, as root DOM node could be changed on component re-render.

#### getInstanceClass(instance)

Should returns reference to instance class. Returns `instance.constructor` by default.

#### getInstanceLocation(instance)

Returns instance source location if possible. Normally no need to override it, as it returns `api.getLocation(instance)` by default.

#### getInstanceRenderLocation(instance)

By default it returns source location of `instance.render` method. You can override it if needed.

#### getNodeLocation(node)

If there is source location where DOM node was created this function should returns it. Uses in DOM viewer when hover nodes.

#### getNestedComponentNameByNode(node)

Used in DOM viewer to get name for nested components. Override function if those names should be provided.

#### getNestedComponentNodeLocation(node)

Allow provide location for nested component root node. If not defined `getNodeLocation` is used.

#### domAttributeFilter(attribute)

Allow to filter output attributes in DOM viewer. For example, React adds `data-reactid` attribute to every element, but we don't want to show it. In this case, method could be:

```js
domAttributeFilter: function(attr){
  return attr.name !== 'data-reactid';
}
```

#### showDefaultInfo()

Show default info block or not. True by default.

#### getAdditionalInstanceInfo(instance)

Allow provide additional info for related objects. Should provide array of objects or nothing. For example, provide instance model info:

```js
api.getAdditionalInstanceInfo = function(instance){
  if (instance && instance.model) {
    return [{
      name: 'Model',
      locations: [
        { type: 'instance', loc: this.getLocation(instance.model) },
        { type: 'class', loc: this.getLocation(instance.model.constructor) }
      ]
    }];
  }
};
```

#### getLocation(value)

Should returns source location, where value was defined. By default return `loc` value from `getDevInfo()`

#### getDevInfo(value[, property])

Function provides dev info attached to value. It should returns info as is if no `property` argument and property value otherwise.

```js
getDevInfo(value);
// { "loc": "file.js:1:2:3:4", ... }

getDevInfo(value, 'loc');
// "file.js:1:2:3:4"
```

#### isOpenFileSupported()

Returns `true` if `open file in editor` is supported. In this case click by source location links will call `openFile` method.

#### openFile(filename)

Should make some action to open specified filename in editor.

### Make your own build

You can make your own ready-to-use edition, see [React](src/react.js) or [Backbone](src/backbone.js) as examples.

#### Implementation

First of all, you should include `basis.js` core (as inspector was originaly implemented using it) in your base html file and specify path to your implementation module.

```html
<script src="node_modules/component-inspector/node_modules/basisjs/src/basis.js" basis-config="
  noConflict: true,    // prevents export names to global scope
  devpanel: false,
  modules: {
    myapi: {           // your implementation module
      autoload: true,
      filename: 'path/to/implementation.js'
    }
  }
"></script>
```

Example of `implementation.js`:

```js
var initInspector = require('./inspector/index.js');

initInspector({
  isComponentRootNode: function(node){
    // ..
  },
  getInstanceByNode: function(node){
    // ..
  },
  getInstanceRootNode: function(instance){
    // ..
  }
});
```

#### Build

Install `basisjs-tools`

```
npm install basisjs-tools --save-dev
```

Run build with `--single-file` option.

```
node node_modules/basisjs-tools/bin/basis --file path/to/myinspector.html --single-file --pack --same-filenames
```

As result you'll get single JavaScript file (`myinspector.js` in this example) that contains everything. Include this script in your application page.

## Additional features

Component inspector shows component bounds and its DOM fragment only. But more details could be shown if some sort of meta-data (like source code locations) is available.

There is example of default view for React component:

![Component inspector w/o instrumenting](http://v03.imgup.net/ScreenShotb2f6.png)

Compare it to the same view but with meta-data available:

![Component inspector with instrumenting](http://o52.imgup.net/ScreenShot199c.png)

Interface to get meta-data should be called `$devinfo` with at least single method `get()`. Inspector expects `get` method returns object or falsy value if no data.

```js
window.$devinfo = {
  get: function(ref){
    // return some information for `ref`
  }
};
```

If API has name other than `$devinfo`, you can specify it's name by defining global variable `DEVINFO_API_NAME`.

```js
window.DEVINFO_API_NAME = 'customApiName';
```

You could use ready-to-use [babel plugin](https://github.com/restrry/babel-plugin-source-wrapper) that instruments source code and provides necessary API. See ([documentation](https://github.com/restrry/babel-plugin-source-wrapper)) for details. You free to implement your own solution and use plugin implementation as reference.

### Locating component's source

When meta-data object is available for inspecting value, inspector expects location is storing in `loc` property as string `filename:startLine:startColumn:endLineEnd:endColumn`.

```js
window.$devinfo.get(obj);
// > { "loc": "app.js:...", ... }
```

If value definition source location is found some additional features became available: [fetching source fragments](#fetching-source-fragments) and [opening file in editor](opening-file-in-editor).

### Fetching source fragments

Component inspector includes solution for retrieving original source code and highlight it. It's all possible if value location provided.

How does it works:

- retrieve source code by request to server for original filename (or get it from cache if `basisjs-tools` server is used)
- extract original source code with aware of source maps
- cache the result
- highligh code
- get required source fragment and show it in popup

Since original files are fetching by request to server, make sure those files are available for downloading by your server.

> NOTE: Take in account if source file was changed since running in browser, inspector could wrong or outdated source fragment. Page refresh should solve the problem.

> NOTE: Support for external or server API for source fragment extraction is coming in next releases (see [issue](https://github.com/lahmatiy/component-inspector/issues/10)).

### Opening file in editor

In case dev-server supports `opening in editor` feature, all location references become active links. A click on any of those opens a file in editor with cursor set at the start of the code fragment. You'll see a hint if feature is supported.

One possible way to provide this feature is set global variable `OPEN_FILE_URL`.

```js
window.OPEN_FILE_URL = '/open-in-editor';
```

After that inspector will send request for server (i.e. `GET /open-in-editor?file=/path/to/file.js:1:2:3:4`) on click by location link. Server should run command to open file in external editor on request receiving.

See inspector's [API implementation](https://github.com/lahmatiy/component-inspector/blob/master/src/inspector/api/file.js) for details.

There is `express` extension [express-open-in-editor](https://github.com/lahmatiy/express-open-in-editor) that provides necessary functionality. It also could be used with [webpack-dev-server](https://github.com/lahmatiy/express-open-in-editor#using-with-webpack-dev-server).

In case you don't depend on dev-server, you can use [basisjs-tools](https://github.com/basisjs/basisjs-tools) that also support that feature.

Roll your own implementation for your dev-server using [open-in-editor](https://github.com/lahmatiy/open-in-editor).

> NOTE: Take in account if source file was changed since running in browser, inspector could "open" file with wrong (outdated) position. Page refresh should solve the problem.

## License

MIT

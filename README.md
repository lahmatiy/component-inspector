[![NPM version](https://img.shields.io/npm/v/component-inspector.svg)](https://www.npmjs.com/package/component-inspector)
[![Build Status](https://travis-ci.org/lahmatiy/component-inspector.svg?branch=master)](https://travis-ci.org/lahmatiy/component-inspector)

# Component inspector

![Example for React](http://s63.imgup.net/ci-introcbc0.gif)

General purpose of tool is showing components boundaries and its DOM fragment with some details. It could be extended by features like [source fragment locating](#locating-components-source) and [opening file in editor](#opening-file-in-editor). See [Additional features](#additional-features) section for details.

Generally it's an adoptation of [basis.js](https://github.com/basisjs/basisjs) tool for other component frameworks and libraries. Here is ready to use builds:

- [React](#react)
- [Backbone](#backbone)

You also could [setup custom API](#api-free-build) for your own component solution.

<!-- MarkdownTOC -->

- [Install](#install)
- [Usage](#usage)
  - [Ready to use builds](#ready-to-use-builds)
    - [React](#react)
    - [Backbone](#backbone)
  - [API free build](#api-free-build)
    - [isComponentRootNode\(node\)](#iscomponentrootnodenode)
    - [getComponentNameByNode\(node\)](#getcomponentnamebynodenode)
    - [getInstanceByNode\(node\)](#getinstancebynodenode)
    - [getInstanceRootNode\(instance\)](#getinstancerootnodeinstance)
    - [getInstanceClass\(instance\)](#getinstanceclassinstance)
    - [getInstanceLocation\(instance\)](#getinstancelocationinstance)
    - [getInstanceRenderLocation\(instance\)](#getinstancerenderlocationinstance)
    - [getNodeLocation\(node\)](#getnodelocationnode)
    - [viewAttributeFilter\(attribute\)](#viewattributefilterattribute)
    - [showDefaultInfo\(\)](#showdefaultinfo)
    - [getAdditionalInstanceInfo\(instance, helpers\)](#getadditionalinstanceinfoinstance-helpers)
    - [getLocation\(value\)](#getlocationvalue)
    - [getDevInfo\(value\[, property\]\)](#getdevinfovalue-property)
    - [buildComponentInfo\(instance, node\)](#buildcomponentinfoinstance-node)
    - [logComponentInfo\(info\)](#logcomponentinfoinfo)
    - [isOpenFileSupported\(\)](#isopenfilesupported)
    - [openFile\(filename\)](#openfilefilename)
  - [Custom info sections](#custom-info-sections)
    - [Location links](#location-links)
    - [HTML view](#html-view)
    - [DOM view](#dom-view)
    - [Links to source](#links-to-source)
  - [Make your own build](#make-your-own-build)
    - [Implementation](#implementation)
    - [Build](#build)
- [Additional features](#additional-features)
  - [Locating component's source](#locating-components-source)
  - [Fetching source fragments](#fetching-source-fragments)
  - [Opening file in editor](#opening-file-in-editor)
- [License](#license)

<!-- /MarkdownTOC -->

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

- [Component Inspector in action](http://www.youtube.com/watch?v=CJDFidsjCas) (video)
- [Online Demo](http://lahmatiy.github.io/component-inspector/examples/react-todomvc/) (w/o open in editor feature)
- [Setup example](https://github.com/lahmatiy/component-inspector/tree/master/examples/react-todomvc)

You should include `component-inspector` script **before** `React` script.

```html
<script src="node_modules/component-inspector/dist/react.js"></script>
<script src="react.js"></script>
```

#### Backbone

![Backbone example](http://i60.imgup.net/backbone2e57.png)

- [Component Inspector in action](http://www.youtube.com/watch?v=TddZvJTMPmw) (video)

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

#### viewAttributeFilter(attribute)

Allow to filter output attributes in DOM viewer. For example, React adds `data-reactid` attribute to every element, but we don't want to show it. In this case, method could be:

```js
viewAttributeFilter: function(attr){
  return attr.name !== 'data-reactid';
}
```

#### showDefaultInfo()

Show default info block or not. True by default.

#### getAdditionalInstanceInfo(instance, helpers)

Allow provide additional info for related objects. Should provide array of objects (configs for sections) or nothing. See more details in [Custom info sections](#custom-info-sections).

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

#### buildComponentInfo(instance, node)

Customize component info object build. Default behaviour:

```js
api.buildComponentInfo = function(instance, node){
  return {
    instance: instance,
    node: node
  };
};
```

#### logComponentInfo(info)

Defines actions on component info logging. Default actions:

```js
api.logComponentInfo = function(info){
  window.$component = info;
  console.log(info);
};
```

#### isOpenFileSupported()

Returns `true` if `open file in editor` is supported. In this case click by source location links will call `openFile` method.

#### openFile(filename)

Should make some action to open specified filename in editor.

### Custom info sections

There several ways to create custom info sections for inspectors sidebar. For all cases you should define `getAdditionalInstanceInfo()` method. You are free to use any framework or library to create a section.

> NOTE: If you don't want to output default section with instance info use override `showDefaultInfo` API method to `function(){ return false; }`.

#### Location links

Most simple way is specify links list for some nested object. Here is example for model attached to instance:

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

#### HTML view

If view should be created by some HTML markup, you can use `section.html(name, html)` helper:

```js
api.getAdditionalInstanceInfo = function(instance, section){
  return [
    section.html('Custom section', '<h1>Hello world</h1>')
  ];
};
```

Pass empty string or `null` if you don't want to output a header of section.

#### DOM view

Any DOM node may to be specified as section. Use `section.dom(name, nodeOrElement)` helper in this case:

```js
var view = document.createElement('h1');
view.appendChild(document.createTextNode('Hello world!'));

api.getAdditionalInstanceInfo = function(instance, section){
  return [
    section.dom('Custom section', view)
  ];
};
```

If DOM node attach approach is using (e.g. `React`), function should be passed to `section.dom()` helper:

```jsx
api.getAdditionalInstanceInfo = function(instance, section){
  return [
    section.dom('Custom section', function(container){
      container.innerHTML = '<h1>Hello world!</h1>';
      container.onclick = function(){
        alert('Example!');
      };
    }),
    section.dom(null, function(container){
      React.render(<h1>Hello world!</h1>, container);
    })
  ];
};
```

Pass empty string or `null` if you don't want to output a header of section.

#### Links to source

To make a reference to source location add `data-loc` attribute to an element. You can use `getLocation()` method to fetch location for an object.

```js
api.getAdditionalInstanceInfo = function(instance, section){
  return [
    section.html(null, 'This is a <span data-loc="' + this.getLocation(instance) + '">link</span>')
  ];
};
```

In this case the `<span>` becomes clickable (if open in editor feature is set up) and popup with source fragment will be shown on hover.

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

Component inspector shows component bounds and its DOM fragment only. More details could be shown if some sort of meta-data (like source code location) is available.

There is example of default view for React component:

![Component inspector w/o instrumenting](http://v03.imgup.net/ScreenShotb2f6.png)

Compare it to the same view but with meta-data available:

![Component inspector with instrumenting](http://o52.imgup.net/ScreenShot199c.png)

You can use ready-to-use plugin for babel [babel-plugin-source-wrapper](https://github.com/restrry/babel-plugin-source-wrapper) to instrument your code with necessary API included. You free to use your own implementation. See [documentation](https://github.com/restrry/babel-plugin-source-wrapper) for details.

By default interface to get meta-data should be called `$devinfo` with at least single method `get()`. Inspector expects `get` method returns an object or falsy value if no data.

```js
window.$devinfo = {
  get: function(ref){
    // return some information for `ref`
  }
};
```

If API has name other than `$devinfo`, it should be defined via global variable `DEVINFO_API_NAME`.

```js
window.DEVINFO_API_NAME = 'customApiName';
```

### Locating component's source

When meta-data is available for inspecting value, inspector expects location is storing in `loc` property as string `filename:startLine:startColumn:endLine:endColumn`.

```js
window.$devinfo.get(obj);
// > { "loc": "app.js:...", ... }
```

If value definition source location is found some additional features became available: [fetching source fragments](#fetching-source-fragments) and [opening file in editor](opening-file-in-editor).

### Fetching source fragments

Component inspector includes solution for retrieving original source code and highlight it. It's all possible if value location provided.

How does it work:

- retrieve source code by request to server for original filename (or get it from cache if `basisjs-tools` server is used)
- extract original source code with aware of source maps
- cache the result
- highligh code
- get required source fragment and show it in popup

Since original files are fetching by request to server, make sure those files are available for downloading by your server.

> NOTE: Take in account if source file was changed since downloaded by browser, inspector could show wrong (outdated) source fragment. Page refresh should solve the problem.

> NOTE: Support for external or server API for source fragment extraction is coming in next releases (see [issue](https://github.com/lahmatiy/component-inspector/issues/10)).

### Opening file in editor

Ready-to-use solutions to provide `opening in editor` feature on server:

- `express` extension [express-open-in-editor](https://github.com/lahmatiy/express-open-in-editor), that also could be used with [webpack-dev-server](https://github.com/lahmatiy/express-open-in-editor#using-with-webpack-dev-server).
- in case you don't depend on dev-server, you can use [basisjs-tools](https://github.com/basisjs/basisjs-tools) that provides this feature out of box
- add your own implementation for your dev-server using [open-in-editor](https://github.com/lahmatiy/open-in-editor)

In case dev-server supports `opening in editor` feature, all location references become active links. A click on any of those opens a file in editor with cursor set at the start of the code fragment. You'll see a hint if feature is supported.

One possible way to provide this feature is set global variable `OPEN_FILE_URL`.

```js
window.OPEN_FILE_URL = '/open-in-editor';
```

When location link is clicked inspector sends request to server (see [implementation](https://github.com/lahmatiy/component-inspector/blob/master/src/inspector/api/file.js) for details):

```
GET /open-in-editor?file=/path/to/file.js:1:2:3:4
```

> NOTE: Take in account if source file was changed since downloaded by browser, inspector could "open" file on wrong (outdated) position. Page refresh should solve the problem.

## License

MIT

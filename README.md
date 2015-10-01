[![NPM version](https://img.shields.io/npm/v/component-inspector.svg)](https://www.npmjs.com/package/component-inspector)

# Component inspector

This is mostly a **proof of concept**. Generally it's adoptation of `devpanel` tool from `basis.js` for some other frameworks. For now Backbone and React are supported.

![Example for React](https://github.com/lahmatiy/component-inspector/raw/master/docs/img/intro.gif)

General purpose of tool is show components boundaries and its DOM fragment with some details. But this functionality could be extended by features like `source fragment locating` and `open file in editor`.

## Install

```
npm install component-inspector --save-dev
```

### Usage

In case you use one of ready-to-use editions (i.e. `React` or `Backbone`) there is no any public API. Just include necessary script and here you are.

You can build your own ready-to-use edition, see [React](src/react.js) or [Backbone](src/backbone.js) examples.

But if you want to provide custom API, you should use `dist/base.js` script. if script included only one public function will be available – `initComponentInspector(api)`. This function could be called just once. It takes API methods that should override defaults and build interface.

```js
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

### Custom API

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

#### domAttributeFilter(attribute)

Allow to filter output attributes in DOM viewer. For example, React adds `data-reactid` attribute to every element, but we don't want to show it. In this case, method could be:

```js
domAttributeFilter: function(attr){
  return attr.name !== 'data-reactid';
}
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

### Using with React

![React example](https://github.com/lahmatiy/component-inspector/raw/master/docs/img/react.png)

You should include `component-inspector` script **before** `React` script.

```html
<script src="node_modules/component-inspector/dist/react.js"></script>
<script src="react.js"></script>
```

### Using with Backbone

![Backbone example](https://github.com/lahmatiy/component-inspector/raw/master/docs/img/backbone.png)

You should include `component-inspector` script right **after** `Backbone` script.

```html
<script src="backbone.js"></script>
<script src="node_modules/component-inspector/dist/backbone.js"></script>
```

## Source code fragment locations

Component inspector works as is, but show only component bounds and live dom fragment owned by component. More interesting things could be shown if some meta information (like source code location) is available.

You could use [babel plugin](https://github.com/restrry/babel-plugin-source-wrapper) with your building solution to instrument sources ([see documentation](https://github.com/restrry/babel-plugin-source-wrapper) for more details). Also suitable dev-server could be used that serves instrumented sources, like [basisjs-tools](https://github.com/basisjs/basisjs-tools-instrumenter) does.

For now, interface to get meta data about object should be called `$devinfo`. This interface should provide `get()` method, that returns meta data if any.

```js
$devinfo.get(obj);
// > { "loc": "app.js:..." }
```

## Open file in editor

When dev-server supports "open in external editor" feature, all location references become active links. Click by those links opens file in editor with cursor on code fragment start. You'll see hint if feature is supported.

One possible way to provide this feature is some url that do the job. This url could be set via global variable `OPEN_FILE_URL`.

```js
window.OPEN_FILE_URL = '/open-in-editor';
```

If you use `Express` you can use [express-open-in-editor](https://github.com/lahmatiy/express-open-in-editor) to provide some url with necessary functionality.

Or if you don't depend on dev-server you could use [basisjs-tools](https://github.com/basisjs/basisjs-tools) that support that feature.

Also you could implement your own implmentation for your dev-server using [open-in-editor](https://github.com/lahmatiy/open-in-editor) as basis.

## License

MIT

[![NPM version](https://img.shields.io/npm/v/component-inspector.svg)](https://www.npmjs.com/package/component-inspector)

# Component inspector

This is mostly a **proof of concept**. Generally it's an adoptation of `devpanel` tool from `basis.js` for some other frameworks. Currently Backbone and React are supported.

![Example for React](https://github.com/lahmatiy/component-inspector/raw/master/docs/img/intro.gif)

## Install

```
npm install component-inspector --save-dev
```

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

## Locating component's source

Component inspector works as is, but shows only component bounds and its DOM fragment. More interesting things could be shown if some meta information (like source code location) is available.

You could use [babel plugin](https://github.com/restrry/babel-plugin-source-wrapper) with your building solution to instrument sources ([see documentation](https://github.com/restrry/babel-plugin-source-wrapper)). Also suitable dev-server could be used for instrumenting source code on the fly e.g. [basisjs-tools](https://github.com/basisjs/basisjs-tools-instrumenter).

Interface to get metadata about an object is called `$devinfo`. This interface should provide `get()` method, that returns metadata if available.

```js
$devinfo.get(obj);
// > { "loc": "app.js:..." }
```

## Opening file in editor

In case dev-server supports "open in external editor" feature, all location references become active links. A click on any of those opens a file in editor with cursor set at the start of the code fragment. You'll see a hint if feature is supported.

One possible way to provide this feature is some URL that does the job. This URL could be set via global variable `OPEN_FILE_URL`.

```js
window.OPEN_FILE_URL = '/open-in-editor';
```

There is an `Express` middleware [express-open-in-editor](https://github.com/lahmatiy/express-open-in-editor), which is able to provide an URL with necessary functionality.

In case you don't depend on dev-server, you could use [basisjs-tools](https://github.com/basisjs/basisjs-tools) that support that feature.

Roll your own implementation for your dev-server using [open-in-editor](https://github.com/lahmatiy/open-in-editor).

## License

MIT

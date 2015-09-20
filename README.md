[![NPM version](https://img.shields.io/npm/v/component-inspector.svg)](https://www.npmjs.com/package/component-inspector)

# Component inspector

This is mostly a **proof of concept**. Generally it's adoptation of `devpanel` tool from `basis.js` for some other frameworks. For now Backbone and React are supported.

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

If you doesn't depends on dev-server you could use [basisjs-tools](https://github.com/basisjs/basisjs-tools) dev-server that support that feature.

## License

MIT

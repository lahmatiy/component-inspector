# Component-inspector

This is mostly a **proof of concent**. Generally it's adopted version of `devpanel` tool from `basis.js` for some other frameworks. For now adoption for Backbone and React are available.

![Example for React](http://www.gfycat.com/DimpledCharmingFlyingfish)

## Install

```
npm install component-inspector --save-dev
```

## Source code fragment locations

Component inspector works as is, but in this case it's show only component bounds and live dom fragment owned by it. More interesting things could be shown if some kind of source code is available.

You can use apropriate dev-server that serves instrumented sources, like [basisjs-tools](https://github.com/basisjs/basisjs-tools-instrumenter) does. Also [babel plugin](https://github.com/restrry/babel-plugin-source-wrapper) could be used by your building solution to instrument source.

For now, interface to get meta data about object should be called `$devinfo`. This interface should provide `get()` method, that returns data if available.

```js
$devinfo.get(obj);
// > { "loc": "app.js:..." }
```

## Open file in editor

When server supports "open in external editor" feature, all location links become active. Click by those links opens file in editor with cursor on code fragment start.

![Open in editor](http://www.gfycat.com/MelodicFlawedGreatargus)

## Framework adoptations

### Using with Backbone

You should include apropriate script right **after** `Backbone` script.

```html
<script src="backbone.js"></script>
<script src="node_modules/component-inspector/dist/backbone.js"></script>
```

### Using with React

You should include apropriate script **before** `React` script.

```html
<script src="node_modules/component-inspector/dist/react.js"></script>
<script src="react.js"></script>
```

To get verbose names of components, `babel-plugin-react-display-name` should be applied before `basis-plugin-source-wrapper`. Here is example for `webpack.config.js`:

```js
module.exports = {
  // ...
  babel: {
    sourceMaps: true,
    plugins: [
      require('babel-plugin-react-display-name'),
      require('babel-plugin-source-wrapper')({
        basePath: process.cwd()  // webpack uses absolute paths for files,
                                 // but we need paths relative to project root
      })
    ]
  }
};
```

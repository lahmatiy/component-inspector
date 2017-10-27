## 1.6 (October 25, 2017)

All changes is about React version of Component Inspector:
- It is now based on [Rempl](https://github.com/rempl/rempl). That's mean that inspector may to be used remotely, i.e. [pluged into Chrome's Developer Tools](https://chrome.google.com/webstore/detail/rempl/hcikjlholajopgbgfmmlbmifdfbkijdj) or in a separate tab or window using [rempl server](https://github.com/rempl/rempl-cli).
![rempl](https://user-images.githubusercontent.com/270491/32082729-4e175346-bac6-11e7-9c40-db86722987af.gif)
- Added support for multiple React 15 instances on a single page
- Added support for external service (URL) to fetch a source fragments
- Added posibility to setup "open in editor" via meta (i.e. `<meta name="open-in-editor" content="{url}">`)
- Added real element overlay when hover it in DOM tree
- Added special formating for foreign components in DOM tree (i.e. created by another instance of React)
- Improved source popup styles and layout
- Hover any element in DOM tree, not only with a loc

## 1.5 (May 25, 2017)

- Added instance props display for React version (@vslinko, #28)
- Improved location resolving of `render` method for React version (@vslinko, #27)

## 1.4 (July 2, 2016)

- Added support for React 15 (many thanks to @Mavrin)

## 1.3 (May 10, 2016)

- New API methods `buildComponentInfo(instance, node)` and `logComponentInfo(info)` to customize instance info building and logging (#10)
- New argument `helpers` for `getAdditionalInstanceInfo()` to simplify creation of custom info sections
- Improve readme
- React TodoMVC demo (thanks to @lapanoid)

## 1.2 (October 8, 2015)

- Universal inspector implementation, just [add your own API](https://github.com/lahmatiy/component-inspector#api-free-build)
- Rework React and Backbone inspectors to use universal implementation
- Improvements and fixes for React inspector (thanks to @vslinko)
  - Custom info view
  - Support for decorators
- Fix: make requests async when `OPEN_FILE_URL` is used
- Better documentation (thanks to @filipovskii)

## 1.1 (September 24, 2015)

- Support for `OPEN_FILE_URL`
- Fixes for React inspector

## 1.0 (September 19, 2015)

- Initial release

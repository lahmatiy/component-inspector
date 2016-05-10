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

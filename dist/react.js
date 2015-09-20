// resources(56):
//   [string] [generated-style#14] -> 0.css
//   [array] ../src/react/template/panel.tmpl -> 3.tmpl
//   [array] ../src/react/inspector/template/template_hintPopup.tmpl -> d.tmpl
//   [array] ../src/react/inspector/template-info/template/window.tmpl -> c.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/comment.tmpl -> b.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/text.tmpl -> a.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/attritubes.tmpl -> 9.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/element.tmpl -> 8.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/attritube.tmpl -> 7.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/attribute-value.tmpl -> 6.tmpl
//   [array] ../src/react/inspector/template-info/template/tree/attribute-value-static.tmpl -> 5.tmpl
//   [array] ../src/react/inspector/template-info/template/js-source-popup.tmpl -> 4.tmpl
//   [array] ../node_modules/basisjs/src/basis/ui/templates/popup/popupManager.tmpl -> 2.tmpl
//   [array] ../node_modules/basisjs/src/basis/ui/templates/popup/Balloon.tmpl -> 1.tmpl
//   [array] ../node_modules/basisjs/src/basis/ui/templates/popup/Popup.tmpl -> 0.tmpl
//   [object] ../src/react/template/reloadRequired.l10n -> 0.l10n
//   [function] ../src/react/api/file.js -> z.js
//   [function] ../node_modules/basisjs/src/basis/template/declaration.js -> e.js
//   [function] ../node_modules/basisjs/src/basis/template/tokenize.js -> w.js
//   [function] ../node_modules/basisjs/src/basis/template/isolateCss.js -> x.js
//   [function] ../node_modules/basisjs/src/basis/template/store.js -> f.js
//   [function] ../node_modules/basisjs/src/basis/template/theme.js -> g.js
//   [function] ../node_modules/basisjs/src/basis/template/buildDom.js -> h.js
//   [function] ../node_modules/basisjs/src/basis/dom/wrapper.js -> i.js
//   [function] ../node_modules/basisjs/src/basis/dragdrop.js -> j.js
//   [function] ../node_modules/basisjs/src/basis/dom/computedStyle.js -> k.js
//   [function] ../node_modules/basisjs/src/basis/layout.js -> l.js
//   [function] ../src/react/inspector/template.js -> y.js
//   [function] ../src/react.js -> 1.js
//   [function] ../node_modules/basisjs/src/basis/dom.js -> m.js
//   [function] ../node_modules/basisjs/src/basis/cssom.js -> n.js
//   [function] ../node_modules/basisjs/src/basis/ui/popup.js -> o.js
//   [function] ../node_modules/basisjs/src/basis/template/htmlfgen.js -> b.js
//   [function] ../node_modules/basisjs/src/basis/l10n.js -> a.js
//   [function] ../node_modules/basisjs/src/basis/template/html.js -> 9.js
//   [function] ../node_modules/basisjs/src/basis/template.js -> d.js
//   [function] ../src/react/inspector/template-info/index.js -> 10.js
//   [function] ../src/react/inspector/template-info/parse-dom.js -> 11.js
//   [function] ../src/react/inspector/template-info/build-tree.js -> 12.js
//   [function] ../src/react/inspector/template-info/js-source-popup.js -> 13.js
//   [function] ../node_modules/basisjs/src/basis/utils/source.js -> p.js
//   [function] ../node_modules/basisjs/src/basis/utils/base64.js -> q.js
//   [function] ../node_modules/basisjs/src/basis/utils/utf16.js -> r.js
//   [function] ../node_modules/basisjs/src/basis/utils/highlight.js -> s.js
//   [function] ../node_modules/basisjs/src/basis/ui.js -> 8.js
//   [function] ../node_modules/basisjs/src/basis/data/AbstractData.js -> v.js
//   [function] ../node_modules/basisjs/src/basis/event.js -> 7.js
//   [function] ../node_modules/basisjs/src/basis/data/resolve.js -> 6.js
//   [function] ../node_modules/basisjs/src/basis/data/subscription.js -> 5.js
//   [function] ../node_modules/basisjs/src/basis/data/state.js -> 4.js
//   [function] ../node_modules/basisjs/src/basis/data.js -> 3.js
//   [function] ../node_modules/basisjs/src/basis/dom/event.js -> 2.js
//   [function] ../src/react/panel.js -> u.js
//   [function] ../src/react/index.js -> t.js
//   [function] ../node_modules/basisjs/src/basis/template/const.js -> c.js
//   [function] ../node_modules/basisjs/src/basis/devpanel.js -> 0.js
//
// filelist(1):
//   /src/react.js
//
(function(){
"use strict";

var __namespace_map__ = {"0.js":"basis.devpanel","1.js":"devpanel","2.js":"basis.dom.event","3.js":"basis.data","4.js":"basis.data.state","5.js":"basis.data.subscription","6.js":"basis.data.resolve","7.js":"basis.event","8.js":"basis.ui","9.js":"basis.template.html","a.js":"basis.l10n","b.js":"basis.template.htmlfgen","c.js":"basis.template.const","d.js":"basis.template","e.js":"basis.template.declaration","f.js":"basis.template.store","g.js":"basis.template.theme","h.js":"basis.template.buildDom","i.js":"basis.dom.wrapper","j.js":"basis.dragdrop","k.js":"basis.dom.computedStyle","l.js":"basis.layout","m.js":"basis.dom","n.js":"basis.cssom","o.js":"basis.ui.popup","p.js":"basis.utils.source","q.js":"basis.utils.base64","r.js":"basis.utils.utf16","s.js":"basis.utils.highlight"};
var __resources__ = {
  "0.css": '/*@import url(/node_modules/basisjs/src/basis/ui/templates/highlight/SourceCode.css);*/\n\n\n  .Basis-SyntaxHighlight\n  {\n    border: 1px solid #E0E0E0;\n    padding: 1px;\n    margin: 0 1ex;\n    overflow: hidden;\n\n    font-family: Consolas, monospace;\n    font-size: 100%;\n    line-height: 1.4em;\n    white-space: pre;   /* needs for line endings preserving */\n  }\n\n  .Basis-SyntaxHighlight .line\n  {\n    position: relative; /* for webkit, otherwise if user starts select from numbering\n                           selection begins from block begining */\n    zoom: 1;            /* IE6/7 */\n    /*white-space: pre;*/   /* preseving line endings in IE7 */\n\n    background: #F0F0F0;\n  }\n\n  .Basis-SyntaxHighlight .even\n  {\n    background-color: #F8F8F8;\n  }\n  /*.Basis-SyntaxHighlight .line:hover\n  {\n    background: #DDD;\n  }*/\n\n  .Basis-SyntaxHighlight .lineNumber\n  {\n    position: absolute;\n    left: 0;\n\n    padding: 0 .5ex;\n    margin: 0;\n    width: 6ex;\n    line-height: 1.4em;\n    height: 1.4em;\n\n    background: none;\n    border: none;\n    font-family: Consolas, monospace;\n    font-size: 100%;\n    text-align: right;\n    color: #666;\n\n      -ms-user-select: none;    /* prevent block including to selection */\n      -moz-user-select: none;\n      -webkit-user-select: none;\n    user-select: none;\n    pointer-events: none;        /* actually this rule makes unnecessary .over block,\n                                    but it lacks of browsers support */\n  }\n\n  .Basis-SyntaxHighlight .over\n  {\n    display: block;\n    position: absolute;\n    left: 0;\n    width: 7ex;\n    height: 1.4em;\n    z-index: 1;\n    background: url(data:image/png;base64,);  /* we need set transporent background, otherwise IE & Opera\n                                                 pass mouse event to underline blocks */\n  }\n\n  .Basis-SyntaxHighlight .lineContent\n  {\n    padding-left: 1ex;\n    padding-right: 1ex;\n    border-left: 2px solid #33BB66;\n    display: block;\n    white-space: pre-wrap;      /* preserve formating but allow word breaking */\n  }\n\n  .Basis-SyntaxHighlight .hasLineNumber .lineContent\n  {\n    margin-left: 7ex;\n    padding-left: 2.5ex;\n  }\n\n  .Basis-SyntaxHighlight .token-string\n  {\n    color: blue;\n  }\n  .Basis-SyntaxHighlight .token-comment \n  {\n    color: #008200;\n  }\n  .Basis-SyntaxHighlight .token-keyword\n  {\n    color: #006699;\n    font-weight: bold;\n  }\n  .Basis-SyntaxHighlight .token-key\n  {\n    color: #006699;\n  }\n  .Basis-SyntaxHighlight .token-value\n  {\n    color: #AA8844;\n    font-weight: bold;\n  }\n\n/*@import url(/node_modules/basisjs/src/basis/ui/templates/popup/Popup.css);*/\n\n\n  .Basis-Popup\n  {\n    position: absolute;\n    background-color: white;\n    border: 1px solid #CCC;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.2);\n  }\n  .Basis-Popup.visible,\n  .Basis-Popup.visible-anim,\n  .Basis-Popup.hidden,\n  .Basis-Popup.hidden-anim\n  {\n\n  }\n\n  .Basis-Popup-Content\n  {\n    min-height: 1em;\n    min-width: 100px;\n  }\n\n  .popup-v-left-top,\n  .popup-v-right-top,\n  .popup-v-center-top,\n  .popup-v-left-center,\n  .popup-v-right-center,\n  .popup-v-center-center,\n  .popup-v-left-bottom,\n  .popup-v-right-bottom,\n  .popup-v-center-bottom,\n  .popup-h-left-top,\n  .popup-h-right-top,\n  .popup-h-center-top,\n  .popup-h-left-center,\n  .popup-h-right-center,\n  .popup-h-center-center,\n  .popup-h-left-bottom,\n  .popup-h-right-bottom,\n  .popup-h-center-bottom\n  {\n\n  }\n\n/*@import url(/node_modules/basisjs/src/basis/ui/templates/popup/Balloon.css);*/\n\n\n  .Basis-Balloon\n  {\n    position: absolute;\n    min-height: 12px; /* 4 (top) + 6 (bottom) + 2 (border) */\n    min-width: 60px;\n  }\n\n  .Basis-Balloon.visible-anim,\n  .Basis-Balloon.visible,\n  .Basis-Balloon.hidden-anim,\n  .Basis-Balloon.hidden\n  {\n\n  }\n\n  .Basis-Balloon-Canvas\n  {\n    pointer-events: none;\n    position: absolute;\n\n    bottom: 0;\n    top: 0;\n    right: 0;\n    left: 0;\n\n    padding-bottom: 10px; /* 5 (top) + 5 (bottom) */\n  }\n\n  .Basis-Balloon-Canvas *\n  {\n    border-color: #E5B720;\n    border-style: solid;\n    border-width: 0;\n  }\n\n  .Basis-Balloon-Canvas .corner-left-top,\n  .Basis-Balloon-Canvas .corner-right-top,\n  .Basis-Balloon-Canvas .corner-left-bottom,\n  .Basis-Balloon-Canvas .corner-right-bottom\n  {\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAllBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMjIwAAAAAAAAAAAAAAABsbGwAAAAAAABeXl4AAAAAAAAAAAC8vLw+Pj6hoaHDw8ONjY22trazs7OwsLCtra2qqqrS0tJ0dHSVlZW4uLiLi4uGhoaAgIB+fn6Xl5fltyDsyUH3428iluXtAAAAL3RSTlMAAAECAwUGBwkKDA0ODxAUFBYXGBkaHB4eISMlKi0xNzg7PD0+Pz9ESEhNUFRVWN93s/AAAADISURBVBgZVcFBTgNBEATBrN4Bgc2Z//+QA8gWsNPJIBtpiQhLQbgRBAYJWQggKsggS1UWXLoVB6ROL1slpe7Xy+yWUcnp9Zk/57eP3TBIvTwn3Pj4dHUpUhvhLjw9bBUqSXFQW5aChINUBYokHOQXBSkOkgoUIP8IFCgHLlCoHPiLAnfkTvZuYajX86PceZkuW5LZMyp2f71/fs3ZplLb2B62StCe33Of7eiyd02l1HbO1h5ga2fBpVshJGQhgLjQhEAg3AgN/ADJsIkt26ff9AAAAABJRU5ErkJggg==);\n  }\n\n  .Basis-Balloon-Canvas .tail\n  {\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAMAAADi4EJ+AAABrVBMVEUAAAAAAAD///8AAAAAAACqqqoAAAAAAACZmZnMzMwAAACqqqoAAAAAAAAgICAAAAAAAACAgIAAAAAAAACVlZUAAAAAAAAREREAAABwcHAAAAAPDw8AAABjY2MAAAAAAAANDQ1AQEAAAABtbW0AAAAMDAwAAACQkJAAAAB1dXWKiopHR0cAAACEhIQAAAAJCQmAgIAAAABycnIAAAA8PDxSUlIAAAAICAg1NTVTU1NgYGAHBwcAAAA7OztVVVUAAABTU1NZWVkAAABXV1dVVVVTU1Ouono8PDxERESonnXHuI88PDxAQEC8roY8PDw7OzvRxpzMvpmtoHbKuIWhlWytpISzpHijmnvNvInUwYrRv4m1p3jPv4fQvYmhl23Jt4O3qnu9r36klm64qXq6qXq4qnu2qHq5qHqkl22tnXGkl2ymmW+jlm3htSfitSfjtifitSfjuzzctTvitifhtSfhtSfgtCfjtyfhtSjgtCfjtyjhtSjgtSbktifitijjtyjjuCjhtCfitSjitijjtijhtSbhtSfitSfgtSbgtSflth/nvCruzEXvz0r3426ZKyhaAAAAinRSTlMAAQECAwMEBQUFBgYHCAgJCgoLDAwNDg8QEBEREhITFBQUFRUWFhcXGBgYGRsbHBwcHR0eHh8iIiIlJSYnJycoKCgpKSorLC8xMjI3ODk8PUhLTlZXV1dbW15fYGBhYmNmaWtra2xtbXNzeHh6m5yvsLzCysvW197g4ebo6evt7e3u7u7u7+/v8PAsoZcEAAADLUlEQVRIx7WX91/aQByGCcREY2IimoiKCwW3VgX3Frfi3q2iKO49qtVa9yiEv7mXMCrD3p1+er/CQ8jl+z55T6N5bxE6kqRpmiR1hAZ7ETqKTS/MEjiGwscJHc2XjB6OVafpORoXB7BQPnfjfVhqzBZ5TFyBv3z9Jfvk++UOs4SHh2CfT75bs+PhKvxNhQH+tN5twcDDYAV3o+OEstvl8z+DMMCvXV0mUdl5goDTJFs8++MvDPBLZ0OmwJAItIag8ie+v4UBfr5gE1kS5a9rEwb2w2GAHwynJsZpIeRvdXkiYYB7/B/9m4b9+n+ilQ2F04T/izFoQgultcpDJ2LKgEqA0vE0FUsXYMLY/AEPhPb05CWxTNTQKuNZPLEvQ2h5d7xUFCJ1ocpgFkwYhPbJx9O2zAhdqKmaV2YbRvvk04UGU1ji/JFUUwWlwcw7u94G9m2e4TRInCuQdyJcQ0g0yLu7W5UVuDzwNl8ehJFoRVZ2s8hRILJABiVzIQ0h0QBfbc/WMyqdPnoTiiQa7ZOfp6wSRwOaLjz0+jBpn/eo1QDuXKOjs8YesK/9OFOfIajXFqqX7jHv+3Wzr8zAq/fNpTUu32Ht+cv2UJ1F4lSa0Wd3rD1hPO/bHUdTmVHP+J83J5rt60/Is3a1NdJWBV4PVGDWeMnc7b5GnPOLDUdnjRqUULYlS7frEiljZyuDzTUF4TEBeJfzHCHfJ4u9tRUFkRHlJVPDwgHULXuTLZVFOVKUHngx0zYM9Vq/NddoiKoiAOcEMRXq1GQxJUXgYmmRYRPhRubYGE71l7s4KB1HUbHr36feJZ9+j6G8v9+jg0sb37Mb1R32+pPjod3Bv/l548cRveVk0gpSoUNqPUml06dhnelssSU3haWQChvJiraF8zd97WKlt9KYgtSZQF9jhMwG52WoK15tDNYWGdD6mtIVOdHU5boO9NTbLUdzRQ5iVwzl3a3aRn7ZGemsKcCruQquyEp+3Xa0YcFBWdlXn72Pm0NNVSb8eg/w9qmjmb66Mlw4oItsa2t9mcWIfS7x60IvGTIM0gfOROp5jOF4gf/QeeyTZ0FVF8R7MgisP5rSafvSJ06ZAAAAAElFTkSuQmCC);\n    position: absolute;\n    display: block;\n  }\n\n  .Basis-Balloon-Canvas .side-top,\n  .Basis-Balloon-Canvas .side-bottom\n  {\n    background-repeat: repeat-x;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPElEQVR42mJkYGBgYiACsAAxK7EKOYhSuGrVKgOiFF65ckWMGIWMQKxKrBu/EKvwG7FWsxOrkKgABwgwADscBwQE74deAAAAAElFTkSuQmCC);\n  }\n\n  .Basis-Balloon-Canvas .side-left,\n  .Basis-Balloon-Canvas .side-right\n  {\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMklEQVR42mJmYGBgAmI2IOZZtWqVhaamptnBgwd/A/nsQMzMAAH/mRiIBKMKqaMQIMAAFdsHWGCGydQAAAAASUVORK5CYII=);\n  }\n\n\n  .Basis-Balloon-Canvas .corner-left-top\n  {\n    float: left;\n\n    width: 10px;\n    height: 10px;\n\n    margin-top: -5px;\n    margin-right: -5px;\n    margin-left: -5px;\n\n    background-position: 0 0;\n  }\n  .Basis-Balloon-Canvas .corner-right-top\n  {\n    float: right;\n\n    width: 12px;\n    height: 10px;\n\n    margin-top: -5px;\n    margin-right: -7px;\n    margin-left: -5px;\n\n    background-position: -10px 0;\n  }\n  .Basis-Balloon-Canvas .side-top\n  {\n    margin-right: 5px;\n    margin-left: 5px;\n    margin-top: -5px;\n    height: 4px;\n    border-bottom-width: 1px;\n  }\n\n  .Basis-Balloon-Canvas .side-left\n  {\n    position: relative; /* ? */\n    float: left;\n\n    height: 100%;\n    width: 4px;\n    border-right-width: 1px;\n\n    margin-left: -5px;\n    margin-top: 5px;\n  }\n\n  .Basis-Balloon-Canvas .side-right\n  {\n    position: relative; /* ? */\n    float: right;\n\n    width: 6px;\n    border-left-width: 1px;\n    height: 100%;\n\n    margin-right: -7px;\n    margin-top: 5px;\n\n    background-position: -4px 0;\n  }\n\n  .Basis-Balloon-Canvas .content\n  {\n    height: 100%;\n    padding: 5px 0 5px;\n\n    background-color: #F7E36F;\n  }\n\n  .Basis-Balloon-Canvas .side-bottom\n  {\n    margin-right: 5px;\n    margin-left: 5px;\n\n    height: 6px;\n    border-top-width: 1px;\n\n    background-position: 0 -4px;\n  }\n\n  .Basis-Balloon-Canvas .corner-left-bottom\n  {\n    float: left;\n\n    width: 10px;\n    height: 12px;\n\n    margin-top: -5px;\n    margin-left: -5px;\n\n    background-position: 0 -10px;\n  }\n  .Basis-Balloon-Canvas .corner-right-bottom\n  {\n    float: right;\n\n    width: 12px;\n    height: 12px;\n\n    margin-top: -5px;\n    margin-right: -7px;\n\n    background-position: -10px -10px;\n  }\n\n /*\n  * Content\n  */\n\n  .Basis-Balloon-Layout\n  {\n    position: relative;\n    padding: 3px;\n  }\n\n  .Basis-Balloon-Content\n  {\n    position: relative;\n    background: #FFFAC3;\n    border: 1px solid #F3DD67;\n    padding: 5px;\n    border-radius: 2px;\n      -webkit-border-radius: 2px;\n      -moz-border-radius: 2px;\n  }\n\n  .mode-h-left-top .Basis-Balloon-Content,\n  .mode-h-left-center .Basis-Balloon-Content,\n  .mode-h-left-bottom .Basis-Balloon-Content,\n  .mode-h-right-top .Basis-Balloon-Content,\n  .mode-h-right-center .Basis-Balloon-Content,\n  .mode-h-right-bottom .Basis-Balloon-Content,\n  .mode-v-left-center .Basis-Balloon-Content,\n  .mode-v-right-center .Basis-Balloon-Content\n  {\n    min-height: 24px;\n  }\n\n /**\n  * Modes\n  */\n\n  .mode-v-center-center,\n  .mode-h-center-center\n  {\n  }\n\n /*********************************\n  * TOP BOTTOM\n  */\n\n  .mode-v-left-bottom,\n  .mode-v-right-bottom,\n  .mode-v-center-bottom,\n  .mode-h-center-bottom\n  {\n    margin-bottom: 10px;\n  }\n\n  .mode-h-right-bottom,\n  .mode-h-left-bottom\n  {\n    margin-bottom: -22px;\n  }\n\n  /* ========================== */\n\n  .mode-v-left-top,\n  .mode-v-right-top,\n  .mode-v-center-top,\n  .mode-h-center-top\n  {\n    margin-top: 10px;\n  }\n\n  .mode-h-right-top,\n  .mode-h-left-top\n  {\n    margin-top: -21px;\n  }\n\n  /* ========================== */\n\n  .mode-h-center-bottom .tail,\n  .mode-v-left-bottom .tail,\n  .mode-v-center-bottom .tail,\n  .mode-v-right-bottom .tail\n  {\n    bottom: -16px;\n    height: 16px;\n    width: 30px;\n    background-position: -14px bottom;\n  }\n  .mode-h-center-top .tail,\n  .mode-v-left-top .tail,\n  .mode-v-center-top .tail,\n  .mode-v-right-top .tail\n  {\n    top: -13px;\n    height: 16px;\n    width: 30px;\n    background-position: -14px 0;\n  }\n\n  .mode-v-left-bottom .tail,\n  .mode-v-left-top .tail\n  {\n    left: 6px;\n  }\n  .mode-h-center-bottom .tail,\n  .mode-h-center-top .tail,\n  .mode-v-center-bottom .tail,\n  .mode-v-center-top .tail\n  {\n    left: 50%;\n    margin-left: -15px;\n  }\n  .mode-v-right-bottom .tail,\n  .mode-v-right-top .tail\n  {\n    right: 6px;\n  }\n\n /*******************************\n  *  LEFT RIGHT\n  */\n\n  .mode-v-left-center,\n  .mode-h-left-top,\n  .mode-h-left-center,\n  .mode-h-left-bottom\n  {\n    margin-left: 10px;\n  }\n\n  .mode-v-left-top,\n  .mode-v-left-bottom\n  {\n    margin-left: -22px;\n  }\n\n  .mode-v-right-center,\n  .mode-h-right-center,\n  .mode-h-right-top,\n  .mode-h-right-bottom\n  {\n    margin-right: 10px;\n  }\n\n  .mode-v-right-top,\n  .mode-v-right-bottom\n  {\n    margin-right: -21px;\n  }\n\n  .mode-v-left-center .tail,\n  .mode-h-left-bottom .tail,\n  .mode-h-left-center .tail,\n  .mode-h-left-top .tail\n  {\n    height: 31px;\n    width: 16px;\n    left: -14px;\n    background-position: 0 -13px;\n  }\n\n  .mode-v-right-center .tail,\n  .mode-h-right-bottom .tail,\n  .mode-h-right-center .tail,\n  .mode-h-right-top .tail\n  {\n    height: 31px;\n    width: 16px;\n    right: -16px;\n    background-position: right -13px;\n  }\n\n  .mode-h-left-top .tail,\n  .mode-h-right-top .tail\n  {\n    top: 5px;\n  }\n  .mode-v-left-center .tail,\n  .mode-v-right-center .tail,\n  .mode-h-left-center .tail,\n  .mode-h-right-center .tail\n  {\n    top: 50%;\n    margin-top: -15px;\n  }\n  .mode-h-left-bottom .tail,\n  .mode-h-right-bottom .tail\n  {\n    bottom: 6px;\n  }\n\n/*@import url(/node_modules/basisjs/src/basis/ui/templates/popup/popupManager.css);*/\n\n  \n  #Basis-PopupStack.hasChildren\n  {\n  }\n\n/*@import url(/src/react/template/inspectMode.css);*/\n\n.a1352qp5c25tsg97__qh9i452rx8alt8rd__label\n{\n  border-radius: 3px;\n  background: orange;\n  padding: 6px;\n  margin: 3px -1px -1px;\n}\n\n/*@import url(/src/react/template/reloadRequired.css);*/\n\n.a1352qp5c25tsg97__cquu4kx261xketf1__label\n{\n  border-radius: 3px;\n  background: orange;\n  padding: 6px;\n  margin: 3px -1px -1px;\n}\n\n/*@import url(/src/react/template/panel.css);*/\n\n.a1352qp5c25tsg97__panel\n{\n  position: fixed;\n  z-index: 10001;\n  left: 10px;\n  top: 10px;\n  padding: 1px;\n\n  opacity: 0.5;\n  background: #999;\n  border-radius: 3px;\n  box-shadow:\n    0 0 7px 1px rgba(0, 0, 0, 0),\n    0 0 0px 1px rgba(255, 255, 255, .75);\n  \n  font-family: Arial;\n  font-size: 12px;\n  line-height: normal;\n  color: white;\n  text-align: center;\n  \n  cursor: pointer;\n\n  transition: box-shadow .15s, background .15s, opacity .15s, border-color .15s;\n}\n.a1352qp5c25tsg97__panel,\n.a1352qp5c25tsg97__panel *\n{\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n@media print {\n  .a1352qp5c25tsg97__panel\n  {\n    display: none;\n  }\n}\n\n.a1352qp5c25tsg97__panel:hover,\n.a1352qp5c25tsg97__panel_activated\n{\n  opacity: .999999;\n  box-shadow:\n    0 0 7px 1px rgba(0, 0, 0, .3),\n    0 0 0px 1px rgba(255, 255, 255, 1);\n}\n\n.a1352qp5c25tsg97__panel_isOnline\n{\n  background: #4B77CC;\n}\n\n.a1352qp5c25tsg97__panel__section\n{\n  position: relative;\n  display: inline-block;\n}\n\n.a1352qp5c25tsg97__panel__button\n{\n  border-left: 1px solid rgba(255, 255, 255, .4);\n  display: inline-block;\n  padding: 5px 8px;\n  min-width: 10px;\n  background: no-repeat center center;\n}\n.a1352qp5c25tsg97__panel__button:hover,\n.a1352qp5c25tsg97__panel__button_active-template\n{\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.a1352qp5c25tsg97__panel__section:last-child .a1352qp5c25tsg97__panel__button\n{\n  border-right: none;\n  border-radius: 0 4px 4px 0;\n}\n\n.a1352qp5c25tsg97__panel__button_template\n{\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRTE4M0Q5MDlBN0VFMjExOEY0QjlGMjVBNDQ4M0RGNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3M0QyMTAwNzdFOUIxMUUyODMwRUNGRkVERDkyNkJBRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3M0QyMTAwNjdFOUIxMUUyODMwRUNGRkVERDkyNkJBRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjE4M0Q5MDlBN0VFMjExOEY0QjlGMjVBNDQ4M0RGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRTE4M0Q5MDlBN0VFMjExOEY0QjlGMjVBNDQ4M0RGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpZ/CiQAAADJSURBVHjaYvz//z8DuYAFjR8GxClAzAbEi4B4HpLcGQzdIJuh+PV/TPALSR6Gz8DYMJs/ADE/EL8H4i4gZgbiWiBmB+I/WFwItzkRastjLLZ8g8o1YrOZCag/EGpOCRazK6G0PzaLmaDOAgEeLPLcUPoPkpgJsrNToU67jcXZT6Fy5Vjk4KH9BaroCRAXAXEJEL9ECnVdfJqRDcAF1PBpBuEMIN4MxFuAOAsq9gaXAQzYnIMFP0cyQIVUzcgGLCVHMwi3IPMBAgwAtcnMMXslGboAAAAASUVORK5CYII=); \n}\n\n.a1352qp5c25tsg97__panel__dd-trigger\n{\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  width: 12px;\n  height: 100%;\n  cursor: move;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyMTI1ODMzN0U5MDExRTJBRkQzQjczQ0IwMTdGMTRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyMTI1ODM0N0U5MDExRTJBRkQzQjczQ0IwMTdGMTRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDIxMjU4MzE3RTkwMTFFMkFGRDNCNzNDQjAxN0YxNEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDIxMjU4MzI3RTkwMTFFMkFGRDNCNzNDQjAxN0YxNEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55XbBbAAAAK0lEQVR42mL8////agYICIXSYD4TAw7ACNSBVQKnDhaYmcPZDj5sOgACDAD8+xLNUUCRVQAAAABJRU5ErkJggg==) no-repeat center;\n}\n\n.a1352qp5c25tsg97__info-panels\n{\n  position: absolute;\n  left: 100%;\n  margin-left: 3px;\n  top: -3px;\n  width: 200px;\n}\n\n/*@import url(/src/react/inspector/template-info/template/js-source-popup.css);*/\n\n.aylyls3jod86ipgj__balloon\n{\n  position: absolute;\n  margin-top: 6px;\n  padding: 8px 16px 8px 10px;\n  min-height: 1em;\n  min-width: 300px;\n  background-color: white;\n  background-color: rgba(255, 255, 255, .95);\n  border: 1px solid #e6e9ed;\n  border-radius: 2px;\n  box-shadow: 0 0 6px rgba(46, 53, 62, .11);\n  pointer-events: none;\n  font-family: Tahoma, Verdana, Arial, sans-serif;\n}\n.aylyls3jod86ipgj__tail\n{\n  position: absolute;\n  width: 15px;\n  height: 6px;\n  overflow: hidden;\n}\n.aylyls3jod86ipgj__tail:after\n{\n  content: \'\';\n  display: block;\n  width: 9px;\n  height: 9px;\n  margin: 0 auto;\n  -webkit-transform: translateX(5px) rotate(45deg);\n  transform: translateX(5px) rotate(45deg);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  background-color: white;\n  border: 1px solid #e6e9ed;\n  box-shadow: 1px 1px 6px rgba(46, 53, 62, .11);\n}\n.aylyls3jod86ipgj__tail_v-left-bottom:after,\n.aylyls3jod86ipgj__tail_v-center-bottom:after,\n.aylyls3jod86ipgj__tail_v-right-bottom:after\n{\n  position: absolute;\n  bottom: 7px;\n  -webkit-transform: translateX(8px) rotate(45deg);\n  transform: translateX(8px) rotate(45deg);\n}\n\n.aylyls3jod86ipgj__balloon_v-left-top,\n.aylyls3jod86ipgj__balloon_v-left-bottom\n{\n  margin-left: -38px;\n}\n.aylyls3jod86ipgj__balloon_v-left-bottom\n{\n  margin-bottom: 5px;\n}\n.aylyls3jod86ipgj__balloon_v-right-top,\n.aylyls3jod86ipgj__balloon_v-right-bottom\n{\n  margin-right: -13px;\n}\n.aylyls3jod86ipgj__balloon_v-center-top,\n.aylyls3jod86ipgj__balloon_v-center-bottom\n{\n  /* todo? */\n}\n\n.aylyls3jod86ipgj__tail_v-center-top,\n.aylyls3jod86ipgj__tail_v-center-bottom\n{\n  left: 50%;\n  margin-left: -7px;\n}\n.aylyls3jod86ipgj__tail_v-left-top,\n.aylyls3jod86ipgj__tail_v-left-bottom\n{\n  left: 36px;\n}\n.aylyls3jod86ipgj__tail_v-right-top,\n.aylyls3jod86ipgj__tail_v-right-bottom\n{\n  right: 12px;\n  margin-right: -7px;\n}\n\n.aylyls3jod86ipgj__tail_v-left-top,\n.aylyls3jod86ipgj__tail_v-center-top,\n.aylyls3jod86ipgj__tail_v-right-top\n{\n  top: -6px;\n}\n.aylyls3jod86ipgj__tail_v-left-bottom,\n.aylyls3jod86ipgj__tail_v-center-bottom,\n.aylyls3jod86ipgj__tail_v-right-bottom\n{\n  bottom: -8px;\n  width: 20px;\n  height: 8px;\n}\n\n.aylyls3jod86ipgj__header\n{\n  padding-left: 6px;\n  padding-bottom: 8px;\n  margin-right: -8px;\n  font-size: 11px;\n  color: #666;\n  text-align: center;\n}\n.aylyls3jod86ipgj__header__comment\n{\n  display: block;\n  padding-top: 2px;\n  font-size: 10px;\n  color: #999;\n}\n\n.aylyls3jod86ipgj__source\n{\n  margin: 0;\n  padding: 0;\n  font-family: Consolas, Monaco, monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n.aylyls3jod86ipgj__source [class~="line"]\n{\n  max-width: 600px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.aylyls3jod86ipgj__source [class~="num"]\n{\n  color: #BBB;\n  margin-right: 2px;\n}\n.aylyls3jod86ipgj__source [class~="line"]:first-child [class~="num"],\n.aylyls3jod86ipgj__source [class~="skip-before"] + [class~="line"] [class~="num"]\n{\n  margin-right: 6px;\n}\n.aylyls3jod86ipgj__source [class~="range"]\n{\n  background: #F8F0D0;\n  padding: 2px 4px 2px 4px;\n}\n.aylyls3jod86ipgj__source [class~="line"]:first-child [class~="range"],\n.aylyls3jod86ipgj__source [class~="skip-before"] + [class~="line"] [class~="range"]\n{\n  padding-left: 2px;\n  margin-left: -2px;\n}\n.aylyls3jod86ipgj__source [class~="skip-before"],\n.aylyls3jod86ipgj__source [class~="skip-after"]\n{\n  color: #CCC;\n}\n\n.aylyls3jod86ipgj__source [class~="token-string"]\n{\n  color: blue;\n}\n.aylyls3jod86ipgj__source [class~="token-comment"]\n{\n  color: #008200;\n}\n.aylyls3jod86ipgj__source [class~="token-keyword"]\n{\n  color: #006699;\n  font-weight: bold;\n}\n.aylyls3jod86ipgj__source [class~="token-key"]\n{\n  color: #006699;\n}\n.aylyls3jod86ipgj__source [class~="token-value"]\n{\n  color: #AA8844;\n  font-weight: bold;\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/attribute-value.css);*/\n\n.nqk0ktmau0iyfubd__binding\n{\n  padding: 3px;\n  padding: 3px .5ch;\n  margin: 0 1px;\n  border-radius: 2px;\n  color: #666;\n  background: #EEE;\n  text-shadow: 0px 0px 1px white;\n  transition: color .15s, background-color .15s;\n  cursor: default;\n}\n.nqk0ktmau0iyfubd__matchBinding\n{\n  color: #353;\n  background: #B6CFB6;\n}\n.nqk0ktmau0iyfubd__action,\n.nqk0ktmau0iyfubd__l10n\n{\n  padding: 3px;\n  padding: 3px .5ch;\n  margin: 0 1px;\n  border-radius: 2px;\n  background: #ADCCEB;\n  color: #458;\n  text-shadow: 0px 0px 1px white;\n  cursor: default;\n}\n.nqk0ktmau0iyfubd__l10n\n{\n  background: #EAC4F7;\n  color: #661188;\n}\n.nqk0ktmau0iyfubd__hasLocation\n{\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/attritube.css);*/\n\n.jujfrsxftv7jsbi3__attribute\n{\n}\n.jujfrsxftv7jsbi3__name\n{\n  white-space: nowrap;\n  color: rgb(153, 69, 0);\n}\n.jujfrsxftv7jsbi3__value\n{\n  color: rgb(26, 26, 166);\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/element.css);*/\n\n.u11nvyjlx104galp__element\n{\n  color: rgb(136, 18, 128);\n}\n.u11nvyjlx104galp__childNodes\n{\n  padding-left: 2ex;\n  padding-left: 2ch;\n}\n.u11nvyjlx104galp__inline\n{\n  padding: 0 2px;\n  display: inline-block;\n}\n.u11nvyjlx104galp__childrenHidden\n{\n  color: #666;\n  padding: 0 1px;\n}\n.u11nvyjlx104galp__binding,\n.u11nvyjlx104galp__nestedView\n{\n  padding: 3px;\n  padding: 3px .5ch;\n  margin-left: -3px;\n  margin-left: -.5ch;\n  border-radius: 2px;\n  background: #EEE;\n  text-shadow: 0px 0px 1px white;\n  transition: color .15s, background-color .15s;\n}\n.u11nvyjlx104galp__nestedView:not(.u11nvyjlx104galp__binding),\n.u11nvyjlx104galp__matchBinding.u11nvyjlx104galp__nestedView\n{\n  background: #E0E4B0;\n}\n.u11nvyjlx104galp__matchBinding\n{\n  background: #B6CFB6;\n}\n.u11nvyjlx104galp__nestedView\n{\n  cursor: pointer;\n}\n.u11nvyjlx104galp__component-name\n{\n  margin-right: 1ex;\n  margin-left: -3px;\n  padding: 5px;\n  color: black;\n  background: rgba(255, 255, 255, .5);\n}\n.u11nvyjlx104galp__showLoc:hover\n{\n  background: #D0D8FF;\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/element_text.css);*/\n\n.cdgia6r5uqhyt17e__inline .cdgia6r5uqhyt17e__text\n{\n  margin-left: 0;\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/text.css);*/\n\n.i13bmf36autrupkt__text\n{\n  color: rgb(48, 57, 66);\n}\n.i13bmf36autrupkt__binding,\n.i13bmf36autrupkt__nestedView,\n.i13bmf36autrupkt__l10n\n{\n  padding: 3px;\n  padding: 3px .65ch;\n  margin-left: -3px;\n  margin-left: -.5ch;\n  border-radius: 2px;\n  background: #EEE;\n  color: #666;\n  text-shadow: 0px 0px 1px white;  \n  transition: color .15s, background-color .15s;\n  cursor: default;\n}\n.i13bmf36autrupkt__nestedView:not(.i13bmf36autrupkt__binding),\n.i13bmf36autrupkt__matchBinding.i13bmf36autrupkt__nestedView\n{\n  background: #E0E4B0;\n}\n.i13bmf36autrupkt__matchBinding\n{\n  background: #B6CFB6;\n}\n.i13bmf36autrupkt__matchBinding\n{\n  background: #B6CFB6;\n  color: #353;\n}\n.i13bmf36autrupkt__l10n\n{\n  background: #EAC4F7;\n  color: #661188;\n}\n.i13bmf36autrupkt__nestedView\n{\n  cursor: pointer;\n}\n\n/*@import url(/src/react/inspector/template-info/template/tree/comment.css);*/\n\n.q58iaf6cm3wbexyf__comment\n{\n  color: rgb(35, 110, 37);\n}\n.q58iaf6cm3wbexyf__binding,\n.q58iaf6cm3wbexyf__nestedView\n{\n  padding: 3px;\n  padding: 3px .5ch;\n  margin-left: -3px;\n  margin-left: -.5ch;\n  border-radius: 2px;\n  color: #666;\n  background: #EEE;\n  text-shadow: 0px 0px 1px white;\n  transition: color .15s, background-color .15s;\n}\n.q58iaf6cm3wbexyf__nestedView:not(.q58iaf6cm3wbexyf__binding),\n.q58iaf6cm3wbexyf__matchBinding.q58iaf6cm3wbexyf__nestedView\n{\n  background: #E0E4B0;\n}\n.q58iaf6cm3wbexyf__matchBinding\n{\n  color: #353;\n  background: #B6CFB6;\n}\n.q58iaf6cm3wbexyf__nestedView\n{\n  cursor: pointer;\n}\n\n/*@import url(/src/react/inspector/template-info/template/object-info.css);*/\n\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__panel\n{\n  padding-top: 4px;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__caption\n{\n  font-size: 10px;\n  color: #888;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__content\n{\n  padding: 6px 4px 8px;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__object-title\n{\n  font-size: 12px;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__object-loc\n{\n  padding-top: 4px;\n  display: block;\n  font-size: 11px;\n  color: #AAA;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__loc\n{\n  color: #888;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__loc:hover\n{\n  color: #A00;\n}\n\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__instance:before,\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__class:before,\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__render:before\n{\n  border-radius: 2px;\n  padding: 0px 4px;\n  margin-right: 1ex;\n  width: 1.5ex;\n  display: inline-block;\n  text-align: center;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__instance:before\n{\n  content: "I";\n  color: #353;\n  background: #B6CFB6;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__class:before\n{\n  content: "C";\n  color: #618;\n  background: #EAC4F7;\n}\n.y2xmnj8enrqy3vny__phdxolkjezo2ypk1__render:before\n{\n  content: "R";\n  color: #458;\n  background: #ADCCEB;\n}\n\n/*@import url(/src/react/inspector/template-info/template/window.css);*/\n\n.y2xmnj8enrqy3vny__window__wrapper\n{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 40px 0;\n  text-align: center;\n  white-space: nowrap;\n  z-index: 10001;\n  transform: translateZ(0);\n  background: rgba(0, 0, 0, .2);\n  color: black;\n  overflow: auto;\n  line-height: 1.4em;\n}\n.y2xmnj8enrqy3vny__window__wrapper:before\n{\n  content: \'\';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.y2xmnj8enrqy3vny__window\n{\n  /* vertical center */\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.y2xmnj8enrqy3vny__window__inner-wrapper\n{\n  overflow: auto;\n  padding: 4px 8px;\n  background: white;\n  background: rgba(255, 255, 255, .95);\n  border-radius: 2px;\n  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, .3);\n  display: flex;\n}\n.y2xmnj8enrqy3vny__window__inner\n{\n  text-align: left;\n  font-size: 12px;\n  font-family: Tahoma, Verdana, Arial, sans-serif;\n}\n\n.y2xmnj8enrqy3vny__source-toggle-button\n{\n  background: #EEE;\n  margin-top: 8px;\n  padding: 6px;\n  border-radius: 2px;\n  opacity: .8;\n  cursor: pointer;\n}\n.y2xmnj8enrqy3vny__source-toggle-button:hover\n{\n  opacity: 1;\n}\n\n.y2xmnj8enrqy3vny__content\n{\n  vertical-align: top;\n  min-width: 300px;\n  max-width: 650px;\n  padding: 0;\n}\n.y2xmnj8enrqy3vny__toolbar\n{\n  padding-bottom: 1px;\n}\n.y2xmnj8enrqy3vny__source-title\n{\n  font-size: 12px;\n  padding: 3px 3ex;\n  margin-right: 60px;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #666;\n}\n.y2xmnj8enrqy3vny__source-title_isFile\n{\n  cursor: pointer;\n  text-decoration: underline;\n}\n.y2xmnj8enrqy3vny__source-title_isFile:hover\n{\n  color: #A00;\n}\n.y2xmnj8enrqy3vny__button\n{\n  background: #EEE;\n  padding: 3px 8px;\n  line-height: 1.2;\n  font-size: 12px;\n}\n.y2xmnj8enrqy3vny__button_up\n{\n  position: relative;\n  left: -3px;\n  padding-left: 6px;\n  display: inline-block;\n  visibility: hidden;\n  cursor: pointer;\n  float: left;\n}\n.y2xmnj8enrqy3vny__button_up.y2xmnj8enrqy3vny__button_upName\n{\n  visibility: visible;\n}\n.y2xmnj8enrqy3vny__button_up:hover\n{\n  background: #DDD;\n}\n.y2xmnj8enrqy3vny__button_source\n{\n  float: right;\n  margin-right: -5px;\n  border-radius: 10px;\n}\n.y2xmnj8enrqy3vny__code\n{\n  padding: 4px 0 2px;\n  clear: both;\n  overflow: hidden;\n  white-space: pre-wrap;\n  color: #444;\n  font-family: Consolas, Monaco, Courier New, monospace;\n  font-size: 12px;\n  line-height: 22px;  \n}\n.y2xmnj8enrqy3vny__binding\n{\n  background: rgb(182, 207, 182);\n  padding: 3px;\n}\n\n.y2xmnj8enrqy3vny__sidebar\n{\n  vertical-align: top;\n  max-width: 300px;\n  border-right: 1px solid #EEE;\n  margin-right: 10px;\n  padding-right: 10px;\n  white-space: normal;\n}\n\n.y2xmnj8enrqy3vny__info-links\n{\n}\n.y2xmnj8enrqy3vny__log__link\n{\n  float: right;\n  color: red;\n  margin-left: 1ex;\n  padding-top: 0px;\n  text-decoration: underline;\n  color: #666;\n  cursor: pointer;\n}\n.y2xmnj8enrqy3vny__log__link:hover\n{\n  color: #A00;\n}\n\n/*@import url(/src/react/inspector/template/template_hintPopup.css);*/\n\n.apf5lghjlxmvhoa2__popup\n{\n  position: absolute;\n  padding: 4px 8px;\n  margin: 2px 0;\n  border: 1px solid #D0C0AA;\n  border: 1px solid rgba(0, 0, 0, .4);\n  background: white;\n  background: rgba(255, 255, 255, .95);\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, .5) 0%, rgba(128, 128, 128, .15) 100%);\n  pointer-events: none;\n  font-size: 11px;\n  font-family: Tahoma, Verdana, Arial, sans-serif;\n  line-height: 1.5;\n  transition: all .05s;\n  z-index: 10001 !important;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, .25);\n}\n\n.apf5lghjlxmvhoa2__section\n{\n\n}\n\n.apf5lghjlxmvhoa2__section__title\n{\n  font-size: 11px;\n  color: #666;\n}\n.apf5lghjlxmvhoa2__section__title-text\n{\n  border-bottom: 2px solid #C8D0D8;\n}\n.apf5lghjlxmvhoa2__section__content\n{\n  padding: 5px 5px 10px 15px;\n}\n.apf5lghjlxmvhoa2__name\n{\n  font-size: 14px;\n  color: #28A;\n}\n.apf5lghjlxmvhoa2__source\n{\n  color: #888;\n  font-size: 11px;\n  display: block;\n  padding-top: 4px;\n  margin-bottom: -1px;\n}\n.apf5lghjlxmvhoa2__location\n{\n  color: #282;\n}\n.apf5lghjlxmvhoa2__ui-hint\n{\n  display: block;\n  color: #AAA;\n  font-size: 10px;\n}\n\n.apf5lghjlxmvhoa2__satelliteName\n{\n  padding: 1px 5px 2px;\n  margin: 0 1ex 0 -2px;\n  color: #666;\n  background: #9C0;\n  border-radius: 3px;\n  font-size: 11px;\n}\n.apf5lghjlxmvhoa2__satelliteName_equalNames\n{\n  background-image: linear-gradient(to bottom, transparent 55%, #D4D490 55%);\n}\n.apf5lghjlxmvhoa2__role\n{\n  padding: 1px 5px 2px;\n  margin: 0 1ex 0 -2px;\n  color: #666;\n  background: #D4D490;\n  border-radius: 3px;\n  font-size: 11px;\n}\n\n.apf5lghjlxmvhoa2__namespace\n{\n  color: #888;\n  font-size: 10px;\n}\n.apf5lghjlxmvhoa2__id\n{\n  color: #888;\n  padding-left: 1ex;\n}\n\n',
  "3.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "a1352qp5c25tsg97__panel_", "activated", 2, "activated", 0 ], [ "a1352qp5c25tsg97__panel_", "isOnline", 2, "isOnline", 0 ], [ "a1352qp5c25tsg97__panel_", "inspectMode", 2, "inspectMode", 0 ] ], 0, "a1352qp5c25tsg97__panel" ], [ 2, 0, 0, "basis-devpanel-ignore" ], [ 6, "mousemove", "storePosition" ], [ 1, 1, [ "dragElement" ], "div", [ 4, 0, 0, "a1352qp5c25tsg97__panel__dd-trigger" ], [ 3, 0, 0, " " ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "a1352qp5c25tsg97__panel__section" ], [ 1, 0, 0, "div", [ 4, [ [ "a1352qp5c25tsg97__panel__button_active-", "inspectorId", 1, "templateActivated", 0, [ "template" ] ] ], 0, "a1352qp5c25tsg97__panel__button a1352qp5c25tsg97__panel__button_template" ], [ 6, "mousedown", "inspectTemplate" ], [ 3, 0, 0, " " ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "a1352qp5c25tsg97__info-panels" ], [ 1, 0, 0, "div", [ 4, 0, 0, "a1352qp5c25tsg97__cquu4kx261xketf1__label" ], [ 6, "click", "reload" ], [ 5, [ [ [ "permanentFilesChangedCount" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 1, [ "permanentFilesChangedCount" ] ], [ 3, 0, 0, " " ], [ 3, "l10n:file.{permanentFilesChangedCount}@0.l10n", 0 ], [ 3, 0, 0, " updated, changes can't be applied until page reload" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "a1352qp5c25tsg97__qh9i452rx8alt8rd__label" ], [ 6, "click", "cancelInspect" ], [ 5, [ [ [ "inspector" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 1, [ "inspector" ] ], [ 3, 0, 0, " inspector is activated" ] ] ] ] ],
  "d.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, 0, 0, "apf5lghjlxmvhoa2__popup" ], [ 1, 0, 0, "div", [ 4, 0, 0, "apf5lghjlxmvhoa2__section" ], [ 1, 0, 0, "div", [ 4, 0, 0, "apf5lghjlxmvhoa2__section__title" ], [ 1, 0, 0, "span", [ 4, 0, 0, "apf5lghjlxmvhoa2__section__title-text" ], [ 3, 0, 0, "Component" ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "apf5lghjlxmvhoa2__section__content" ], [ 1, 0, 0, "span", [ 4, 0, 0, "apf5lghjlxmvhoa2__name" ], [ 3, 0, 0, "<" ], [ 3, 1, [ "name" ] ], [ 3, 0, 0, ">" ] ], [ 1, 0, 0, "span", [ 5, [ [ [ "instanceLocation" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 1, 0, 0, "span", [ 4, 0, 0, "apf5lghjlxmvhoa2__source" ], [ 3, 0, 0, "Created at " ], [ 1, 0, 0, "span", [ 4, 0, 0, "apf5lghjlxmvhoa2__location" ], [ 3, 1, [ "instanceLocation" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "apf5lghjlxmvhoa2__ui-hint" ], [ 5, [ [ [ "openFileSupported" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 0, 0, "Use alt + click to open place in editor" ] ] ] ] ] ] ],
  "c.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__window__wrapper" ], [ 6, "click", "close" ], [ 6, "mousedown", "stop-propagation prevent-default" ], [ 2, 0, 0, "basis-devpanel-ignore" ], [ 5, [ [ [ "visible" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 1, 0, [ "ddelement", "ddtrigger" ], "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__window" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__window__inner" ], [ 6, "click", "stop-propagation" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__window__inner-wrapper" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__sidebar" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__info-links" ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__log__link" ], [ 6, "click", "logInfo" ], [ 2, 0, 0, "title", "Output view in console save it as $reactComponent" ], [ 3, 0, 0, "console.log(info)" ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__panel" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__caption" ], [ 3, 0, 0, "Compontent" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__content" ], [ 8, 0, 0, ' <span class="object-title">{sourceTitle}</span> ' ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__object-loc y2xmnj8enrqy3vny__phdxolkjezo2ypk1__instance" ], [ 5, [ [ [ "objectLoc" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__loc" ], [ 2, [ [ "objectLoc" ], [ 0 ] ], 0, "data-loc", "{objectLoc}" ], [ 6, "click", "openRefLocation" ], [ 6, "mouseenter", "enterRefLocation" ], [ 6, "mouseleave", "leaveRefLocation" ], [ 3, 1, [ "objectLoc" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__object-loc y2xmnj8enrqy3vny__phdxolkjezo2ypk1__class" ], [ 5, [ [ [ "objectClassLoc" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__loc" ], [ 2, [ [ "objectClassLoc" ], [ 0 ] ], 0, "data-loc", "{objectClassLoc}" ], [ 6, "click", "openRefLocation" ], [ 6, "mouseenter", "enterRefLocation" ], [ 6, "mouseleave", "leaveRefLocation" ], [ 3, 1, [ "objectClassLoc" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__object-loc y2xmnj8enrqy3vny__phdxolkjezo2ypk1__render" ], [ 5, [ [ [ "objectRenderLoc" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 1, 0, 0, "span", [ 4, 0, 0, "y2xmnj8enrqy3vny__phdxolkjezo2ypk1__loc" ], [ 2, [ [ "objectRenderLoc" ], [ 0 ] ], 0, "data-loc", "{objectRenderLoc}" ], [ 6, "click", "openRefLocation" ], [ 6, "mouseenter", "enterRefLocation" ], [ 6, "mouseleave", "leaveRefLocation" ], [ 3, 1, [ "objectRenderLoc" ] ] ] ] ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__content" ], [ 1, 0, 0, "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__toolbar" ], [ 1, 0, 0, "span", [ 4, [ [ "y2xmnj8enrqy3vny__button_", "upName", 2, "upName", 0 ] ], 0, "y2xmnj8enrqy3vny__button y2xmnj8enrqy3vny__button_up" ], [ 5, 0, 0, "margin-left: -3px;" ], [ 6, "click", "up" ], [ 3, 0, 0, "↑ " ], [ 3, 1, [ "upName" ] ] ], [ 1, 0, 0, "div", [ 4, [ [ "y2xmnj8enrqy3vny__source-title_", "isFile", 0 ] ], 0, "y2xmnj8enrqy3vny__source-title" ], [ 6, "click", "openSource" ], [ 2, [ [ "sourceTitle" ], [ 0 ] ], 0, "title", "{sourceTitle}" ], [ 3, 1, [ "sourceTitle" ] ] ] ], [ 1, 1, [ "childNodesElement" ], "div", [ 4, 0, 0, "y2xmnj8enrqy3vny__code" ] ] ] ] ] ] ] ],
  "b.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, 0, 0, "q58iaf6cm3wbexyf__comment" ], [ 1, 0, 0, "span", [ 4, [ [ "q58iaf6cm3wbexyf__", "binding", 2, "binding", 0 ], [ "q58iaf6cm3wbexyf__", "matchBinding", 2, "matchBinding", 0 ], [ "q58iaf6cm3wbexyf__", "nestedView", 2, "nestedView", 0 ] ], 0, "q58iaf6cm3wbexyf__caption" ], [ 6, "click", "inspect" ], [ 6, "mouseenter", "enter" ], [ 6, "mouseleave", "leave" ], [ 3, 0, 0, "<!--" ], [ 3, 1, [ "value" ] ], [ 3, 0, 0, "-->" ] ] ] ],
  "a.tmpl": [ [ 1, 0, [ "element" ], "span", [ 4, [ [ "i13bmf36autrupkt__", "binding", 2, "binding", 0 ], [ "i13bmf36autrupkt__", "matchBinding", 2, "matchBinding", 0 ], [ "i13bmf36autrupkt__", "nestedView", 2, "nestedView", 0 ], [ "i13bmf36autrupkt__", "l10n", 2, "l10n", 0 ] ], 0, "i13bmf36autrupkt__text cdgia6r5uqhyt17e__text" ], [ 6, "click", "inspect" ], [ 6, "mouseenter", "enter" ], [ 6, "mouseleave", "leave" ], [ 3, 1, [ "value" ] ] ] ],
  "9.tmpl": [ [ 1, 0, [ "element" ], "span" ] ],
  "8.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "u11nvyjlx104galp__", "showLoc", 2, "showLoc", 0 ] ], 0, "u11nvyjlx104galp__element" ], [ 6, "click", "inspect" ], [ 6, "mouseenter", "enter" ], [ 6, "mouseleave", "leave" ], [ 1, 0, 0, "span", [ 4, [ [ "u11nvyjlx104galp__", "binding", 2, "binding", 0 ], [ "u11nvyjlx104galp__", "matchBinding", 2, "matchBinding", 0 ], [ "u11nvyjlx104galp__", "nestedView", 2, "nestedView", 0 ] ], 0 ], [ 1, 0, 0, "span", [ 4, 0, 0, "u11nvyjlx104galp__component-name" ], [ 5, [ [ [ "componentName" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 0, 0, "<" ], [ 3, 1, [ "componentName" ] ], [ 3, 0, 0, ">" ] ], [ 3, 0, 0, "<" ], [ 3, "name", 0 ], [ 8, 1, [ "attributes" ] ], [ 3, 0, 0, ">" ], [ 1, 0, 0, "span", [ 5, [ [ [ "singleton" ], [ 0 ], "display", "hide" ] ], 0, null ], [ 1, 1, [ "childNodesElement" ], "div", [ 4, [ [ "u11nvyjlx104galp__", "inline", 2, "inline", 0 ], [ "cdgia6r5uqhyt17e__", "inline", 2, "inline", 0 ] ], 0, "u11nvyjlx104galp__childNodes" ], [ 5, [ [ [ "childCount" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "u11nvyjlx104galp__childrenHidden" ], [ 5, [ [ [ "childrenHidden" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 0, 0, "…" ] ], [ 3, 0, 0, "</" ], [ 3, 1, [ "name" ] ], [ 3, 0, 0, ">" ] ] ] ] ],
  "7.tmpl": [ [ 1, 0, [ "element" ], "span", [ 4, 0, 0, "jujfrsxftv7jsbi3__attribute" ], [ 3, 0, 0, " " ], [ 1, 0, 0, "span", [ 4, 0, 0, "jujfrsxftv7jsbi3__name" ], [ 3, 1, [ "name" ] ] ], [ 1, 0, 0, "span", [ 5, [ [ [ "childCount" ], [ 0 ], "display", "show" ] ], 0, "display: none;" ], [ 3, 0, 0, '="' ], [ 1, 1, [ "childNodesElement" ], "span", [ 4, 0, 0, "jujfrsxftv7jsbi3__value" ] ], [ 3, 0, 0, '"' ] ] ] ],
  "6.tmpl": [ [ 1, 0, [ "element" ], "span", [ 4, [ [ "nqk0ktmau0iyfubd__", "type", 1, "type", 0, [ "binding", "action", "l10n" ] ], [ "nqk0ktmau0iyfubd__", "matchBinding", 2, "matchBinding", 0 ], [ "nqk0ktmau0iyfubd__", "loc", 2, "hasLocation", 0 ] ], 0 ], [ 2, [ [ "l10n" ], [ 0 ] ], 0, "title", "{l10n}" ], [ 6, "click", "openLoc" ], [ 6, "mouseenter", "enter" ], [ 6, "mouseleave", "leave" ], [ 3, 1, [ "value" ] ] ] ],
  "5.tmpl": [ [ 3, 1, [ "value", "element" ] ] ],
  "4.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "aylyls3jod86ipgj__balloon_", "orientation", 1, "orientation", 0, [ "v-left-top", "v-right-top", "v-center-top", "v-left-bottom", "v-right-bottom", "v-center-bottom" ] ] ], 0, "aylyls3jod86ipgj__balloon" ], [ 1, 0, 0, "span", [ 4, [ [ "aylyls3jod86ipgj__tail_", "orientation", 1, "orientation", 0, [ "v-left-top", "v-right-top", "v-center-top", "v-left-bottom", "v-right-bottom", "v-center-bottom" ] ] ], 0, "aylyls3jod86ipgj__tail" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "aylyls3jod86ipgj__header" ], [ 3, 1, [ "loc" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "aylyls3jod86ipgj__header__comment" ], [ 3, 0, 0, "click to open file in editor" ] ] ], [ 1, 1, [ "source" ], "pre", [ 4, 0, 0, "aylyls3jod86ipgj__source" ] ] ] ],
  "2.tmpl": [ [ 1, 0, [ "element" ], "div", [ 2, 0, 0, "id", "Basis-PopupStack" ], [ 4, [ [ "", "hasChildren", 2, "hasChildren", 0 ] ], 0 ] ] ],
  "1.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "mode-", "orientation", 1, "orientation", 0, [ "v-left-top", "v-right-top", "v-center-top", "v-left-center", "v-right-center", "v-center-center", "v-left-bottom", "v-right-bottom", "v-center-bottom", "h-left-top", "h-right-top", "h-center-top", "h-left-center", "h-right-center", "h-center-center", "h-left-bottom", "h-right-bottom", "h-center-bottom" ] ], [ "", "anim:visible", 1, "visible", 2, [ "visible", "hidden" ] ] ], 0, "Basis-Balloon" ], [ 6, "click" ], [ 1, 0, 0, "div", [ 4, 0, 0, "Basis-Balloon-Canvas" ], [ 1, 0, 0, "div", [ 4, 0, 0, "corner-left-top" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "corner-right-top" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "side-top" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "side-left" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "side-right" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "content" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "corner-left-bottom" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "corner-right-bottom" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "side-bottom" ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "tail" ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "Basis-Balloon-Layout" ], [ 1, 0, [ "content", "childNodesElement" ], "div", [ 4, 0, 0, "Basis-Balloon-Content" ] ] ] ] ],
  "0.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "popup-", "orientation", 1, "orientation", 0, [ "v-left-top", "v-right-top", "v-center-top", "v-left-center", "v-right-center", "v-center-center", "v-left-bottom", "v-right-bottom", "v-center-bottom", "h-left-top", "h-right-top", "h-center-top", "h-left-center", "h-right-center", "h-center-center", "h-left-bottom", "h-right-bottom", "h-center-bottom" ] ], [ "", "anim:visible", 1, "visible", 2, [ "visible", "hidden" ] ] ], 0, "Basis-Popup" ], [ 1, 0, [ "content", "childNodesElement" ], "div", [ 4, 0, 0, "Basis-Popup-Content" ] ] ] ],
  "0.l10n": {
    _meta: {
      type: {
        file: "plural"
      }
    },
    "en-US": {
      file: [ "file", "files" ]
    }
  },
  "z.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    module.exports = {
      openFile: function(filename) {
        var basisjsTools = typeof basisjsToolsFileSync != "undefined" ? basisjsToolsFileSync : inspectBasis.devtools;
        if (basisjsTools && typeof basisjsTools.openFile == "function") {
          basisjsTools.openFile(basis.path.resolve(filename.replace(/(:\d+:\d+):\d+:\d+$/, "$1")));
        }
      }
    };
  },
  "e.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var arraySearch = basis.array.search;
    var arrayAdd = basis.array.add;
    var arrayRemove = basis.array.remove;
    var tokenize = basis.require("./w.js");
    var isolateCss = basis.require("./x.js");
    var consts = basis.require("./c.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_VALUE = consts.ATTR_VALUE;
    var ATTR_NAME_BY_TYPE = consts.ATTR_NAME_BY_TYPE;
    var ATTR_TYPE_BY_NAME = consts.ATTR_TYPE_BY_NAME;
    var ATTR_VALUE_INDEX = consts.ATTR_VALUE_INDEX;
    var ELEMENT_ATTRIBUTES_AND_CHILDREN = consts.ELEMENT_ATTRIBUTES_AND_CHILDREN;
    var TEXT_VALUE = consts.TEXT_VALUE;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var IDENT = /^[a-z_][a-z0-9_\-]*$/i;
    var ATTR_EVENT_RX = /^event-(.+)$/;
    var Template = function() {};
    var resolveResource = function() {};
    function genIsolateMarker() {
      return basis.genUID() + "__";
    }
    var makeDeclaration = function() {
      var includeStack = [];
      var styleNamespaceIsolate = {};
      var styleNamespaceResource = {};
      function getTokenName(token) {
        return (token.prefix ? token.prefix + ":" : "") + token.name;
      }
      function refList(token) {
        var array = token.refs;
        if (!array || !array.length) return 0;
        return array;
      }
      function addTokenRef(token, refName) {
        if (!token[TOKEN_REFS]) token[TOKEN_REFS] = [];
        arrayAdd(token[TOKEN_REFS], refName);
        if (refName != "element") token[TOKEN_BINDINGS] = token[TOKEN_REFS].length == 1 ? refName : 0;
      }
      function removeTokenRef(token, refName) {
        var idx = token[TOKEN_REFS].indexOf(refName);
        if (idx != -1) {
          var indexBinding = token[TOKEN_BINDINGS] && typeof token[TOKEN_BINDINGS] == "number";
          token[TOKEN_REFS].splice(idx, 1);
          if (indexBinding) if (idx == token[TOKEN_BINDINGS] - 1) {
            token[TOKEN_BINDINGS] = refName;
            indexBinding = false;
          }
          if (!token[TOKEN_REFS].length) token[TOKEN_REFS] = 0; else {
            if (indexBinding) token[TOKEN_BINDINGS] -= idx < token[TOKEN_BINDINGS] - 1;
          }
        }
      }
      function tokenAttrs(token) {
        var result = {};
        if (token.attrs) for (var i = 0, attr; attr = token.attrs[i]; i++) result[getTokenName(attr)] = attr.value;
        return result;
      }
      function tokenAttrs_(token) {
        var result = {};
        if (token.attrs) for (var i = 0, attr; attr = token.attrs[i]; i++) result[getTokenName(attr)] = attr;
        return result;
      }
      function addUnique(array, items) {
        for (var i = 0; i < items.length; i++) arrayAdd(array, items[i]);
      }
      function importStyles(array, items, prefix, includeToken) {
        for (var i = 0, item; item = items[i]; i++) {
          if (item[1] !== styleNamespaceIsolate) item[1] = prefix + item[1];
          if (!item[3]) item[3] = includeToken;
        }
        array.unshift.apply(array, items);
      }
      function addStyle(template, token, src, isolatePrefix, namespace) {
        var text = token.children[0];
        var url = src ? basis.resource.resolveURI(src, template.baseURI, '<b:style src="{url}"/>') : basis.resource.virtual("css", text ? text.value : "", template.sourceUrl).url;
        token.sourceUrl = template.sourceUrl;
        template.resources.push([ url, isolatePrefix, token, null, src ? false : text || true, namespace ]);
        return url;
      }
      function getLocation(template, loc) {
        if (loc) return (template.sourceUrl || "") + ":" + loc.start.line + ":" + (loc.start.column + 1);
      }
      function addTemplateWarn(template, options, message, loc) {
        if (loc && options.loc) {
          message = Object(message);
          message.loc = typeof loc == "string" ? loc : getLocation(template, loc);
        }
        template.warns.push(message);
      }
      function applyTokenLocation(template, options, dest, source) {
        if (options.loc && source && source.loc && !dest.loc) dest.loc = getLocation(template, source.loc);
      }
      function process(tokens, template, options) {
        function addTokenLocation(item, token) {
          applyTokenLocation(template, options, item, token);
        }
        function getAttributeValueLocationMap(token) {
          if (!token || !token.map_) return null;
          return token.map_.reduce(function(res, part) {
            if (!part.binding) res[part.value] = getLocation(template, part.loc);
            return res;
          }, {});
        }
        function addStateInfo(name, type, value) {
          if (!hasOwnProperty.call(template.states, name)) template.states[name] = {};
          var info = template.states[name];
          var isArray = Array.isArray(value);
          if (!hasOwnProperty.call(info, type) || !isArray) info[type] = isArray ? basis.array(value) : value; else addUnique(info[type], value);
        }
        function parseIncludeOptions(str) {
          var result = {};
          var pairs = (str || "").trim().split(/\s*,\s*/);
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split(/\s*:\s*/);
            if (pair.length != 2) {
              return {};
            }
            result[pair[0]] = pair[1];
          }
          return result;
        }
        function getAttrByName(token, name) {
          var offset = typeof token[0] == "number" ? ELEMENT_ATTRIBUTES_AND_CHILDREN : 0;
          for (var i = offset, attr, attrName; attr = token[i]; i++) {
            if (attr[TOKEN_TYPE] == TYPE_ATTRIBUTE_EVENT) attrName = "event-" + attr[1]; else attrName = ATTR_NAME_BY_TYPE[attr[TOKEN_TYPE]] || attr[ATTR_NAME];
            if (attrName == name) return attr;
          }
        }
        function getStyleBindingProperty(attr, name) {
          var bindings = attr[TOKEN_BINDINGS];
          if (bindings) for (var i = 0, binding; binding = bindings[i]; i++) if (binding[2] == name) return binding;
        }
        function setStylePropertyBinding(host, attr, property, showByDefault, defaultValue) {
          var styleAttr = getAttrByName(host, "style");
          if (!styleAttr) {
            styleAttr = [ TYPE_ATTRIBUTE_STYLE, 0, 0 ];
            addTokenLocation(styleAttr, attr);
            host.push(styleAttr);
          }
          var binding = attr.binding;
          var addDefault = false;
          var show = attr.name == showByDefault;
          var value = styleAttr[3];
          if (!binding || binding[0].length != binding[1].length) {
            addDefault = !(show ^ attr.value === "");
          } else {
            var bindings = styleAttr[TOKEN_BINDINGS];
            binding = binding.concat(property, attr.name);
            addDefault = show;
            if (bindings) {
              arrayRemove(bindings, getStyleBindingProperty(styleAttr, property));
              bindings.push(binding);
            } else styleAttr[TOKEN_BINDINGS] = [ binding ];
          }
          if (value) value = value.replace(new RegExp(property + "\\s*:\\s*[^;]+(;|$)"), "");
          if (addDefault) value = (value ? value + " " : "") + defaultValue;
          styleAttr[3] = value;
        }
        function applyShowHideAttribute(host, attr) {
          if (attr.name == "show" || attr.name == "hide") setStylePropertyBinding(host, attr, "display", "show", "display: none;");
          if (attr.name == "visible" || attr.name == "hidden") setStylePropertyBinding(host, attr, "visibility", "visible", "visibility: hidden;");
        }
        function addRoleAttribute(host, role) {
          var sourceToken = arguments[2];
          if (!/[\/\(\)]/.test(role)) {
            var item = [ TYPE_ATTRIBUTE, [ [ "$role" ], [ 0, role ? "/" + role : "" ] ], 0, "role-marker" ];
            item.sourceToken = sourceToken;
            addTokenLocation(item, sourceToken);
            host.push(item);
          } else addTemplateWarn(template, options, 'Value for role was ignored as value can\'t contains ["/", "(", ")"]: ' + role, sourceToken.loc);
        }
        function processAttrs(token, declToken) {
          var result = [];
          var styleAttr;
          var displayAttr;
          var visibilityAttr;
          var item;
          var m;
          for (var i = 0, attr; attr = token.attrs[i]; i++) {
            if (attr.prefix == "b") {
              switch (attr.name) {
                case "ref":
                  var refs = (attr.value || "").trim().split(/\s+/);
                  for (var j = 0; j < refs.length; j++) addTokenRef(declToken, refs[j]);
                  break;
                case "show":
                case "hide":
                  displayAttr = attr;
                  break;
                case "visible":
                case "hidden":
                  visibilityAttr = attr;
                  break;
                case "role":
                  addRoleAttribute(result, attr.value || "", attr);
                  break;
              }
              continue;
            }
            if (m = attr.name.match(ATTR_EVENT_RX)) {
              item = m[1] == attr.value ? [ TYPE_ATTRIBUTE_EVENT, m[1] ] : [ TYPE_ATTRIBUTE_EVENT, m[1], attr.value ];
            } else {
              item = [ attr.type, attr.binding, 0 ];
              if (attr.type == TYPE_ATTRIBUTE) item.push(getTokenName(attr));
              if (attr.value && (!options.optimizeSize || !attr.binding || attr.type != TYPE_ATTRIBUTE)) item.push(attr.value);
              if (attr.type == TYPE_ATTRIBUTE_STYLE) styleAttr = item;
            }
            item.valueLocMap = getAttributeValueLocationMap(attr);
            item.sourceToken = attr;
            addTokenLocation(item, attr);
            result.push(item);
          }
          if (displayAttr) applyShowHideAttribute(result, displayAttr);
          if (visibilityAttr) applyShowHideAttribute(result, visibilityAttr);
          return result.length ? result : 0;
        }
        function modifyAttr(include, token, name, action) {
          var attrs = tokenAttrs(token);
          var attrs_ = tokenAttrs_(token);
          if (name) attrs.name = name;
          if (!attrs.name) {
            addTemplateWarn(template, options, "Instruction <b:" + token.name + "> has no `name` attribute", token.loc);
            return;
          }
          if (!IDENT.test(attrs.name)) {
            addTemplateWarn(template, options, "Bad attribute name `" + attrs.name + "`", token.loc);
            return;
          }
          var includedToken = tokenRefMap[attrs.ref || "element"];
          if (includedToken) {
            if (includedToken.token[TOKEN_TYPE] == TYPE_ELEMENT) {
              var itAttrs = includedToken.token;
              var isEvent = attrs.name.match(ATTR_EVENT_RX);
              var isClassOrStyle = attrs.name == "class" || attrs.name == "style";
              var itType = isEvent ? TYPE_ATTRIBUTE_EVENT : ATTR_TYPE_BY_NAME[attrs.name] || TYPE_ATTRIBUTE;
              var valueIdx = ATTR_VALUE_INDEX[itType] || ATTR_VALUE;
              var valueLocMap = getAttributeValueLocationMap(attrs_.value);
              var itAttrToken = itAttrs && getAttrByName(itAttrs, attrs.name);
              if (itAttrToken && action == "set") {
                template.removals.push({
                  reason: "<b:" + token.name + ">",
                  removeToken: token,
                  includeToken: include,
                  token: itAttrToken
                });
                arrayRemove(itAttrs, itAttrToken);
                itAttrToken = null;
              }
              if (!itAttrToken && (action == "set" || action == "append")) {
                action = "set";
                if (isEvent) {
                  itAttrToken = [ itType, isEvent[1] ];
                } else {
                  itAttrToken = [ itType, 0, 0, itType == TYPE_ATTRIBUTE ? attrs.name : "" ];
                  if (itType == TYPE_ATTRIBUTE) itAttrToken.push("");
                }
                if (!itAttrs) {
                  itAttrs = [];
                  includedToken.token.push(itAttrs);
                }
                itAttrs.push(itAttrToken);
                itAttrToken.valueLocMap = valueLocMap;
                addTokenLocation(itAttrToken, token);
              }
              switch (action) {
                case "set":
                  if (itAttrToken[TOKEN_TYPE] == TYPE_ATTRIBUTE_EVENT) {
                    if (attrs.value == isEvent[1]) itAttrToken.length = 2; else itAttrToken[valueIdx] = attrs.value;
                    return;
                  }
                  var valueAttr = attrs_.value || {};
                  itAttrToken[TOKEN_BINDINGS] = valueAttr.binding || 0;
                  itAttrToken.valueLocMap = valueLocMap;
                  if (!options.optimizeSize || !itAttrToken[TOKEN_BINDINGS] || isClassOrStyle) itAttrToken[valueIdx] = valueAttr.value || ""; else itAttrToken.length = valueIdx;
                  if (isClassOrStyle) if (!itAttrToken[TOKEN_BINDINGS] && !itAttrToken[valueIdx]) {
                    arrayRemove(itAttrs, itAttrToken);
                    return;
                  }
                  break;
                case "append":
                  var valueAttr = attrs_.value || {};
                  var appendValue = valueAttr.value || "";
                  var appendBinding = valueAttr.binding;
                  if (!isEvent) {
                    if (appendBinding) {
                      var attrBindings = itAttrToken[TOKEN_BINDINGS];
                      if (attrBindings) {
                        switch (attrs.name) {
                          case "style":
                            for (var i = 0, newBinding; newBinding = appendBinding[i]; i++) {
                              arrayRemove(attrBindings, getStyleBindingProperty(itAttrToken, newBinding[2]));
                              attrBindings.push(newBinding);
                            }
                            break;
                          case "class":
                            attrBindings.push.apply(attrBindings, appendBinding);
                            break;
                          default:
                            appendBinding[0].forEach(function(name) {
                              arrayAdd(this, name);
                            }, attrBindings[0]);
                            for (var i = 0; i < appendBinding[1].length; i++) {
                              var value = appendBinding[1][i];
                              if (typeof value == "number") value = attrBindings[0].indexOf(appendBinding[0][value]);
                              attrBindings[1].push(value);
                            }
                        }
                      } else {
                        itAttrToken[TOKEN_BINDINGS] = appendBinding;
                        if (!isClassOrStyle) itAttrToken[TOKEN_BINDINGS][1].unshift(itAttrToken[valueIdx]);
                      }
                    } else {
                      if (!isClassOrStyle && itAttrToken[TOKEN_BINDINGS]) itAttrToken[TOKEN_BINDINGS][1].push(attrs.value);
                    }
                  }
                  if (appendValue) {
                    if (isEvent || attrs.name == "class") {
                      var parts = (itAttrToken[valueIdx] || "").trim();
                      var appendParts = appendValue.trim();
                      parts = parts ? parts.split(/\s+/) : [];
                      appendParts = appendParts ? appendParts.split(/\s+/) : [];
                      for (var i = 0; i < appendParts.length; i++) {
                        var part = appendParts[i];
                        basis.array.remove(parts, part);
                        parts.push(part);
                      }
                      itAttrToken[valueIdx] = parts.join(" ");
                    } else {
                      itAttrToken[valueIdx] = (itAttrToken[valueIdx] || "") + (itAttrToken[valueIdx] && isClassOrStyle ? " " : "") + appendValue;
                    }
                    if (valueLocMap) {
                      if (itAttrToken.valueLocMap) for (var name in valueLocMap) itAttrToken.valueLocMap[name] = valueLocMap[name]; else itAttrToken.valueLocMap = valueLocMap;
                    }
                  }
                  if (isClassOrStyle && !itAttrToken[TOKEN_BINDINGS] && !itAttrToken[valueIdx]) arrayRemove(itAttrs, itAttrToken);
                  break;
                case "remove-class":
                  if (itAttrToken) {
                    var valueAttr = attrs_.value || {};
                    var values = (itAttrToken[valueIdx] || "").split(" ");
                    var removeValues = (valueAttr.value || "").split(" ");
                    var bindings = itAttrToken[TOKEN_BINDINGS];
                    var removedValues = [];
                    var removedBindings = 0;
                    if (valueAttr.binding && bindings) {
                      for (var i = 0, removeBinding; removeBinding = valueAttr.binding[i]; i++) for (var j = bindings.length - 1, classBinding; classBinding = bindings[j]; j--) {
                        var prefix = classBinding[0];
                        var bindingName = classBinding[3] || classBinding[1];
                        if (prefix === removeBinding[0] && bindingName === removeBinding[1]) {
                          bindings.splice(j, 1);
                          if (!removedBindings) removedBindings = [ classBinding ]; else removedBindings.push(classBinding);
                        }
                      }
                      if (!bindings.length) itAttrToken[TOKEN_BINDINGS] = 0;
                    }
                    for (var i = 0; i < removeValues.length; i++) {
                      if (values.indexOf(removeValues[i]) != -1) removedValues.push(removeValues[i]);
                      arrayRemove(values, removeValues[i]);
                      if (itAttrToken.valueLocMap) delete itAttrToken.valueLocMap[removeValues[i]];
                    }
                    itAttrToken[valueIdx] = values.join(" ");
                    if (!bindings.length && !values.length) arrayRemove(itAttrs, itAttrToken);
                    if (removedValues.length || removedBindings.length) template.removals.push({
                      reason: "<b:" + token.name + ">",
                      removeToken: token,
                      includeToken: include,
                      token: [ TYPE_ATTRIBUTE_CLASS, removedBindings, 0, removedValues.join(" ") ]
                    });
                  }
                  break;
                case "remove":
                  if (itAttrToken) {
                    arrayRemove(itAttrs, itAttrToken);
                    template.removals.push({
                      reason: "<b:" + token.name + ">",
                      removeToken: token,
                      includeToken: include,
                      token: itAttrToken
                    });
                  }
                  break;
              }
            } else {
              addTemplateWarn(template, options, "Attribute modificator is not reference to element token (reference name: " + (attrs.ref || "element") + ")", token.loc);
            }
          }
        }
        var result = [];
        for (var i = 0, token, item; token = tokens[i]; i++) {
          var refs = refList(token);
          var bindings = refs && refs.length == 1 ? refs[0] : 0;
          switch (token.type) {
            case TYPE_ELEMENT:
              if (token.prefix == "b") {
                var elAttrs = tokenAttrs(token);
                var elAttrs_ = tokenAttrs_(token);
                switch (token.name) {
                  case "style":
                    var useStyle = true;
                    if (elAttrs.options) {
                      var filterOptions = parseIncludeOptions(elAttrs.options);
                      for (var name in filterOptions) useStyle = useStyle && filterOptions[name] == options.includeOptions[name];
                    }
                    if (useStyle) {
                      var namespaceAttrName = elAttrs.namespace ? "namespace" : "ns";
                      var styleNamespace = elAttrs[namespaceAttrName];
                      var styleIsolate = styleNamespace ? styleNamespaceIsolate : "";
                      var src = addStyle(template, token, elAttrs.src, styleIsolate, styleNamespace);
                      if (styleNamespace) {
                        if (src in styleNamespaceIsolate == false) styleNamespaceIsolate[src] = genIsolateMarker();
                        template.styleNSPrefix[styleNamespace] = {
                          loc: getLocation(template, elAttrs_[namespaceAttrName].loc),
                          used: false,
                          name: styleNamespace,
                          prefix: styleNamespaceIsolate[src]
                        };
                      }
                    } else {
                      token.sourceUrl = template.sourceUrl;
                      template.resources.push([ null, styleIsolate, token, null, elAttrs.src ? false : token.children[0] || true, styleNamespace ]);
                    }
                    break;
                  case "isolate":
                    if (!template.isolate) template.isolate = elAttrs.prefix || options.isolate || genIsolateMarker(); else addTemplateWarn(template, options, "<b:isolate> is already set to `" + template.isolate + "`", token.loc);
                    break;
                  case "l10n":
                    if (elAttrs.src) options.dictURI = basis.resource.resolveURI(elAttrs.src, template.baseURI, "<b:" + token.name + ' src="{url}"/>');
                    break;
                  case "define":
                    if ("name" in elAttrs == false) addTemplateWarn(template, options, "<b:define> has no `name` attribute", token.loc);
                    if ("type" in elAttrs == false) addTemplateWarn(template, options, "<b:define> has no `type` attribute", token.loc);
                    if (hasOwnProperty.call(options.defines, elAttrs.name)) addTemplateWarn(template, options, "<b:define> for `" + elAttrs.name + "` has already defined", token.loc);
                    if ("name" in elAttrs && "type" in elAttrs && !hasOwnProperty.call(options.defines, elAttrs.name)) {
                      var bindingName = elAttrs.from || elAttrs.name;
                      var defineName = elAttrs.name;
                      var define = false;
                      var defaultIndex;
                      var values;
                      switch (elAttrs.type) {
                        case "bool":
                          define = [ bindingName, CLASS_BINDING_BOOL, defineName, elAttrs["default"] == "true" ? 1 : 0 ];
                          addStateInfo(bindingName, "bool", true);
                          break;
                        case "enum":
                          if ("values" in elAttrs == false) {
                            addTemplateWarn(template, options, "Enum <b:define> has no `values` attribute", token.loc);
                            break;
                          }
                          values = (elAttrs.values || "").trim();
                          if (!values) {
                            addTemplateWarn(template, options, "Enum <b:define> has no variants (`values` attribute is empty)", elAttrs_.values && elAttrs_.values.loc);
                            break;
                          }
                          values = values.split(/\s+/);
                          defaultIndex = values.indexOf(elAttrs["default"]);
                          if ("default" in elAttrs && defaultIndex == -1) addTemplateWarn(template, options, "Enum <b:define> has bad value as default (value ignored)", elAttrs_["default"] && elAttrs_["default"].loc);
                          define = [ bindingName, CLASS_BINDING_ENUM, defineName, defaultIndex + 1, values ];
                          addStateInfo(bindingName, "enum", values);
                          break;
                        default:
                          addTemplateWarn(template, options, "Bad type in <b:define> for `" + defineName + "`: " + elAttrs.type, elAttrs_.type && elAttrs_.type.valueLoc);
                      }
                      if (define) {
                        addTokenLocation(define, token);
                        options.defines[defineName] = define;
                      }
                    }
                    break;
                  case "text":
                    var text = token.children[0];
                    tokens[i--] = basis.object.extend(text, {
                      refs: (elAttrs.ref || "").trim().split(/\s+/),
                      value: "notrim" in elAttrs ? text.value : text.value.replace(/^\s*[\r\n]+|[\r\n]+\s*$/g, "")
                    });
                    break;
                  case "include":
                    var templateSrc = elAttrs.src;
                    if (templateSrc) {
                      var resource = resolveResource(templateSrc, template.baseURI);
                      if (!resource) {
                        addTemplateWarn(template, options, '<b:include src="' + templateSrc + '"> is not resolved, instruction ignored', token.loc);
                        continue;
                      }
                      if (includeStack.indexOf(resource) == -1) {
                        var isolatePrefix = elAttrs_.isolate ? elAttrs_.isolate.value || genIsolateMarker() : "";
                        var includeOptions = elAttrs.options ? parseIncludeOptions(elAttrs.options) : null;
                        var declarationOptions = basis.object.merge(options, {
                          includeOptions: includeOptions
                        });
                        var decl = getDeclFromSource(resource, "", true, declarationOptions);
                        arrayAdd(template.deps, resource);
                        template.includes.push({
                          token: token,
                          resource: resource,
                          nested: decl.includes
                        });
                        if (decl.deps) addUnique(template.deps, decl.deps);
                        if (decl.warns) template.warns.push.apply(template.warns, decl.warns);
                        if (decl.removals) template.removals.push.apply(template.removals, decl.removals);
                        if (decl.resources && "no-style" in elAttrs == false) importStyles(template.resources, decl.resources, isolatePrefix, token);
                        var instructions = basis.array(token.children);
                        var styleNSIsolate = {
                          map: options.styleNSIsolateMap,
                          prefix: genIsolateMarker()
                        };
                        var tokenRefMap = normalizeRefs(decl.tokens, styleNSIsolate);
                        for (var key in decl.styleNSPrefix) template.styleNSPrefix[styleNSIsolate.prefix + key] = basis.object.merge(decl.styleNSPrefix[key], {
                          used: hasOwnProperty.call(options.styleNSIsolateMap, styleNSIsolate.prefix + key)
                        });
                        if (isolatePrefix) {
                          isolateTokens(decl.tokens, isolatePrefix);
                          if (decl.removals) decl.removals.forEach(function(item) {
                            isolateTokens([ item.token ], isolatePrefix);
                          });
                        }
                        for (var includeAttrName in elAttrs_) switch (includeAttrName) {
                          case "class":
                            instructions.unshift({
                              type: TYPE_ELEMENT,
                              prefix: "b",
                              name: "append-class",
                              attrs: [ basis.object.complete({
                                name: "value"
                              }, elAttrs_["class"]) ]
                            });
                            break;
                          case "id":
                            instructions.unshift({
                              type: TYPE_ELEMENT,
                              prefix: "b",
                              name: "set-attr",
                              attrs: [ {
                                type: TYPE_ATTRIBUTE,
                                name: "name",
                                value: "id"
                              }, basis.object.complete({
                                name: "value"
                              }, elAttrs_.id) ]
                            });
                            break;
                          case "ref":
                            if (tokenRefMap.element) elAttrs.ref.trim().split(/\s+/).map(function(refName) {
                              addTokenRef(tokenRefMap.element.token, refName);
                            });
                            break;
                          case "show":
                          case "hide":
                          case "visible":
                          case "hidden":
                            var tokenRef = tokenRefMap.element;
                            var token = tokenRef && tokenRef.token;
                            if (token && token[TOKEN_TYPE] == TYPE_ELEMENT) applyShowHideAttribute(token, elAttrs_[includeAttrName]);
                            break;
                          case "role":
                            var role = elAttrs_.role.value;
                            if (role) {
                              if (!/[\/\(\)]/.test(role)) {
                                var loc;
                                loc = getLocation(template, elAttrs_.role.loc);
                                applyRole(decl.tokens, role, elAttrs_.role, loc);
                              } else addTemplateWarn(template, options, 'Value for role was ignored as value can\'t contains ["/", "(", ")"]: ' + role, elAttrs_.role.loc);
                            }
                            break;
                        }
                        for (var j = 0, child; child = instructions[j]; j++) {
                          if (child.type == TYPE_ELEMENT && child.prefix == "b") {
                            switch (child.name) {
                              case "style":
                                var childAttrs = tokenAttrs(child);
                                var childAttrs_ = tokenAttrs_(child);
                                var useStyle = true;
                                if (childAttrs.options) {
                                  var filterOptions = parseIncludeOptions(childAttrs.options);
                                  for (var name in filterOptions) useStyle = useStyle && filterOptions[name] == includeOptions[name];
                                }
                                if (useStyle) {
                                  var namespaceAttrName = childAttrs.namespace ? "namespace" : "ns";
                                  var styleNamespace = childAttrs[namespaceAttrName];
                                  var styleIsolate = styleNamespace ? styleNamespaceIsolate : isolatePrefix;
                                  var src = addStyle(template, child, childAttrs.src, styleIsolate, styleNamespace);
                                  if (styleNamespace) {
                                    if (src in styleNamespaceIsolate == false) styleNamespaceIsolate[src] = genIsolateMarker();
                                    template.styleNSPrefix[styleNSIsolate.prefix + styleNamespace] = {
                                      loc: getLocation(template, childAttrs_[namespaceAttrName].loc),
                                      used: false,
                                      name: styleNamespace,
                                      prefix: styleNamespaceIsolate[src]
                                    };
                                  }
                                } else {
                                  child.sourceUrl = template.sourceUrl;
                                  template.resources.push([ null, styleIsolate, child, token, childAttrs.src ? false : child.children[0] || true, styleNamespace ]);
                                }
                                break;
                              case "replace":
                              case "remove":
                              case "before":
                              case "after":
                                var replaceOrRemove = child.name == "replace" || child.name == "remove";
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs || !replaceOrRemove ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                if (tokenRef) {
                                  var parent = tokenRef.owner;
                                  var pos = parent.indexOf(tokenRef.token);
                                  if (pos != -1) {
                                    var args = [ pos + (child.name == "after"), replaceOrRemove ];
                                    if (child.name != "remove") args = args.concat(process(child.children, template, options) || []);
                                    parent.splice.apply(parent, args);
                                    if (replaceOrRemove) template.removals.push({
                                      reason: "<b:" + child.name + ">",
                                      removeToken: child,
                                      includeToken: token,
                                      token: tokenRef.token
                                    });
                                  }
                                }
                                break;
                              case "prepend":
                              case "append":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token && token[TOKEN_TYPE] == TYPE_ELEMENT) {
                                  var children = process(child.children, template, options) || [];
                                  if (child.name == "prepend") token.splice.apply(token, [ ELEMENT_ATTRIBUTES_AND_CHILDREN, 0 ].concat(children)); else token.push.apply(token, children);
                                }
                                break;
                              case "show":
                              case "hide":
                              case "visible":
                              case "hidden":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token && token[TOKEN_TYPE] == TYPE_ELEMENT) {
                                  var expr = tokenAttrs_(child).expr;
                                  if (!expr) {
                                    addTemplateWarn(template, options, "Instruction <b:" + child.name + "> has no `expr` attribute", child.loc);
                                    break;
                                  }
                                  applyShowHideAttribute(token, basis.object.complete({
                                    name: child.name
                                  }, tokenAttrs_(child).expr));
                                }
                                break;
                              case "attr":
                              case "set-attr":
                                modifyAttr(token, child, false, "set");
                                break;
                              case "append-attr":
                                modifyAttr(token, child, false, "append");
                                break;
                              case "remove-attr":
                                modifyAttr(token, child, false, "remove");
                                break;
                              case "class":
                              case "append-class":
                                modifyAttr(token, child, "class", "append");
                                break;
                              case "set-class":
                                modifyAttr(token, child, "class", "set");
                                break;
                              case "remove-class":
                                var childAttrs_ = tokenAttrs_(child);
                                var valueAttr = childAttrs_.value;
                                if (valueAttr) {
                                  valueAttr.value = valueAttr.value.split(/\s+/).map(function(name) {
                                    return name.indexOf(":") > 0 ? styleNSIsolate.prefix + name : name;
                                  }).join(" ");
                                  if (valueAttr.binding) valueAttr.binding.forEach(function(bind) {
                                    if (bind[0].indexOf(":") > 0) bind[0] = styleNSIsolate.prefix + bind[0];
                                  });
                                  if (valueAttr.map_) valueAttr.map_.forEach(function(item) {
                                    if (item.value.indexOf(":") > 0) item.value = styleNSIsolate.prefix + item.value;
                                  });
                                }
                                modifyAttr(token, child, "class", "remove-class");
                                break;
                              case "add-ref":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token && childAttrs.name) addTokenRef(token, childAttrs.name);
                                break;
                              case "remove-ref":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token) removeTokenRef(token, childAttrs.name || childAttrs.ref);
                                break;
                              case "role":
                              case "set-role":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token) {
                                  arrayRemove(token, getAttrByName(token, "role-marker"));
                                  addRoleAttribute(token, childAttrs.value || "", child);
                                }
                                break;
                              case "remove-role":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token) arrayRemove(token, getAttrByName(token, "role-marker"));
                                break;
                              default:
                                addTemplateWarn(template, options, "Unknown instruction tag: <b:" + child.name + ">", child.loc);
                            }
                          } else {
                            decl.tokens.push.apply(decl.tokens, process([ child ], template, options) || []);
                          }
                        }
                        if (tokenRefMap.element) removeTokenRef(tokenRefMap.element.token, "element");
                        result.push.apply(result, decl.tokens);
                      } else {
                        var stack = includeStack.slice(includeStack.indexOf(resource) || 0).concat(resource).map(function(res) {
                          if (res instanceof Template) res = res.source;
                          return res.id || res.url || "[inline template]";
                        });
                        template.warns.push("Recursion: ", stack.join(" -> "));
                        basis.dev.warn("Recursion in template: ", stack.join(" -> "));
                      }
                    }
                    break;
                  default:
                    addTemplateWarn(template, options, "Unknown instruction tag: <b:" + token.name + ">", token.loc);
                }
                continue;
              }
              item = [ 1, bindings, refs, getTokenName(token) ];
              item.push.apply(item, processAttrs(token, item, options.optimizeSize) || []);
              item.push.apply(item, process(token.children, template, options) || []);
              addTokenLocation(item, token);
              item.sourceToken = token;
              break;
            case TYPE_TEXT:
              if (refs && refs.length == 2 && arraySearch(refs, "element")) bindings = refs[+!refs.lastSearchIndex];
              item = [ 3, bindings, refs ];
              if (!refs || token.value != "{" + refs.join("|") + "}") item.push(token.value);
              addTokenLocation(item, token);
              item.sourceToken = token;
              break;
            case TYPE_COMMENT:
              if (options.optimizeSize && !bindings && !refs) continue;
              item = [ 8, bindings, refs ];
              if (!options.optimizeSize) if (!refs || token.value != "{" + refs.join("|") + "}") item.push(token.value);
              addTokenLocation(item, token);
              item.sourceToken = token;
              break;
          }
          while (item[item.length - 1] === 0) item.pop();
          result.push(item);
        }
        return result.length ? result : 0;
      }
      function absl10n(value, dictURI, l10nMap) {
        if (typeof value == "string") {
          var parts = value.split(":");
          var key = parts[1];
          if (key && parts[0] == "l10n") {
            if (parts.length == 2 && key.indexOf("@") == -1) {
              if (!dictURI) return false;
              key = key + "@" + dictURI;
              value = "l10n:" + key;
            }
            arrayAdd(l10nMap, key);
          }
        }
        return value;
      }
      function applyRole(tokens, role, sourceToken, location, stIdx) {
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          switch (tokenType) {
            case TYPE_ELEMENT:
              applyRole(token, role, sourceToken, location, ELEMENT_ATTRIBUTES_AND_CHILDREN);
              break;
            case TYPE_ATTRIBUTE:
              if (token[ATTR_NAME] == "role-marker") {
                var roleExpression = token[TOKEN_BINDINGS][1];
                var currentRole = roleExpression[1];
                roleExpression[1] = "/" + role + (currentRole ? "/" + currentRole : "");
                token.sourceToken = sourceToken;
                token.loc = location;
              }
              break;
          }
        }
      }
      function normalizeRefs(tokens, isolate, map, stIdx) {
        function processName(name) {
          if (name.indexOf(":") <= 0) return name;
          var prefix = name.split(":")[0];
          isolate.map[isolate.prefix + prefix] = prefix;
          return isolate.prefix + name;
        }
        if (!map) map = {};
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          var refs = token[TOKEN_REFS];
          if (isolate && tokenType == TYPE_ATTRIBUTE_CLASS) {
            var bindings = token[TOKEN_BINDINGS];
            var valueIndex = ATTR_VALUE_INDEX[tokenType];
            if (token[valueIndex]) token[valueIndex] = token[valueIndex].split(/\s+/).map(processName).join(" ");
            if (token.valueLocMap) {
              var oldValueLocMap = token.valueLocMap;
              token.valueLocMap = {};
              for (var name in oldValueLocMap) token.valueLocMap[processName(name)] = oldValueLocMap[name];
            }
            if (bindings) for (var k = 0, bind; bind = bindings[k]; k++) bind[0] = processName(bind[0]);
          }
          if (tokenType != TYPE_ATTRIBUTE_EVENT && refs) {
            for (var j = refs.length - 1, refName; refName = refs[j]; j--) {
              if (refName.indexOf(":") != -1) {
                removeTokenRef(token, refName);
                continue;
              }
              if (map[refName]) removeTokenRef(map[refName].token, refName);
              if (token[TOKEN_BINDINGS] == refName) token[TOKEN_BINDINGS] = j + 1;
              map[refName] = {
                owner: tokens,
                token: token
              };
            }
          }
          if (tokenType === TYPE_ELEMENT) normalizeRefs(token, isolate, map, ELEMENT_ATTRIBUTES_AND_CHILDREN);
        }
        return map;
      }
      function applyDefines(tokens, template, options, stIdx) {
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          var bindings = token[TOKEN_BINDINGS];
          switch (tokenType) {
            case TYPE_ELEMENT:
              applyDefines(token, template, options, ELEMENT_ATTRIBUTES_AND_CHILDREN);
              break;
            case TYPE_TEXT:
              if (bindings) {
                var binding = absl10n(bindings, options.dictURI, template.l10n);
                token[TOKEN_BINDINGS] = binding || 0;
                if (binding === false) {
                  addTemplateWarn(template, options, "Dictionary for l10n binding on text node can't be resolved: {" + bindings + "}", token.loc);
                  token[TEXT_VALUE] = "{" + bindings + "}";
                }
              }
              break;
            case TYPE_ATTRIBUTE:
              if (bindings) {
                var array = bindings[0];
                for (var j = array.length - 1; j >= 0; j--) {
                  var binding = absl10n(array[j], options.dictURI, template.l10n);
                  if (binding === false) {
                    addTemplateWarn(template, options, "Dictionary for l10n binding on attribute can't be resolved: {" + array[j] + "}", token.loc);
                    var expr = bindings[1];
                    for (var k = 0; k < expr.length; k++) if (typeof expr[k] == "number") {
                      if (expr[k] == j) expr[k] = "{" + array[j] + "}"; else if (expr[k] > j) expr[k] = expr[k] - 1;
                    }
                    array.splice(j, 1);
                    if (!array.length) token[TOKEN_BINDINGS] = 0;
                  } else array[j] = binding;
                }
              }
              break;
            case TYPE_ATTRIBUTE_CLASS:
              if (bindings) {
                for (var k = 0, bind; bind = bindings[k]; k++) {
                  if (bind.length > 2) continue;
                  applyTokenLocation(template, options, bind, bind.info_);
                  var bindNameParts = bind[1].split(":");
                  var bindName = bindNameParts.pop();
                  var bindPrefix = bindNameParts.pop() || "";
                  if (hasOwnProperty.call(options.defines, bindName)) {
                    var define = options.defines[bindName];
                    bind[1] = (bindPrefix ? bindPrefix + ":" : "") + define[0];
                    bind.push.apply(bind, define.slice(1));
                    define.used = true;
                  } else {
                    bind.push(0);
                    addTemplateWarn(template, options, "Unpredictable class binding: " + bind[0] + "{" + bind[1] + "}", bind.loc);
                  }
                }
                if (options.optimizeSize) {
                  var valueIdx = ATTR_VALUE_INDEX[tokenType];
                  if (!token[valueIdx]) token.length = valueIdx;
                }
              }
              break;
          }
        }
      }
      function isolateTokens(tokens, isolate, template, options, stIdx) {
        function processName(name) {
          if (name.indexOf(":") == -1) return isolate + name;
          if (!template) return name;
          var parts = name.split(":");
          if (!parts[0]) return parts[1];
          var namespace = hasOwnProperty.call(template.styleNSPrefix, parts[0]) ? template.styleNSPrefix[parts[0]] : false;
          if (!namespace) {
            var isolatedPrefix = options.styleNSIsolateMap[parts[0]];
            var oldPrefix = parts[0];
            var fullName = arguments[1];
            var loc = arguments[2];
            if (fullName) {
              if (isolatedPrefix) fullName = fullName.replace(oldPrefix, isolatedPrefix);
              addTemplateWarn(template, options, "Namespace `" + (isolatedPrefix || oldPrefix) + "` is not defined: " + fullName, loc);
            }
            return false;
          } else {
            namespace.used = true;
            return namespace.prefix + parts[1];
          }
        }
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          if (tokenType == TYPE_ELEMENT) isolateTokens(token, isolate, template, options, ELEMENT_ATTRIBUTES_AND_CHILDREN);
          if (tokenType == TYPE_ATTRIBUTE_CLASS) {
            var bindings = token[TOKEN_BINDINGS];
            var valueIndex = ATTR_VALUE_INDEX[tokenType];
            if (token[valueIndex]) token[valueIndex] = token[valueIndex].split(/\s+/).map(function(name) {
              return processName(name, name, token.valueLocMap ? token.valueLocMap[name] : null);
            }).filter(Boolean).join(" ");
            if (bindings) {
              for (var j = 0, bind, prefix, removed; bind = bindings[j]; j++) {
                prefix = processName(bind[0], bind[0] + "{" + bind[1] + "}", bind.loc);
                if (prefix === false) {
                  removed = true;
                  bindings[j] = null;
                } else bind[0] = prefix;
              }
              if (removed) {
                bindings = bindings.filter(Boolean);
                token[TOKEN_BINDINGS] = bindings.length ? bindings : 0;
              }
            }
            if (token.valueLocMap) {
              var oldValueLocMap = token.valueLocMap;
              token.valueLocMap = {};
              for (var name in oldValueLocMap) {
                var newKey = processName(name);
                if (newKey) token.valueLocMap[newKey] = oldValueLocMap[name];
              }
            }
          }
        }
      }
      function styleHash(style) {
        return style[0] + "|" + style[1];
      }
      return function makeDeclaration(source, baseURI, options, sourceUrl, sourceOrigin) {
        var warns = [];
        var source_;
        options = basis.object.slice(options);
        options.includeOptions = options.includeOptions || {};
        options.defines = {};
        options.dictURI = sourceUrl ? basis.path.resolve(sourceUrl) : baseURI || "";
        options.styleNSIsolateMap = {};
        options.loc = true;
        options.range = true;
        var result = {
          sourceUrl: sourceUrl,
          baseURI: baseURI || "",
          tokens: null,
          includes: [],
          deps: [],
          isolate: false,
          styleNSPrefix: {},
          resources: [],
          l10n: [],
          warns: warns
        };
        result.removals = [];
        result.states = {};
        if (options.dictURI) {
          var extname = basis.path.extname(options.dictURI);
          if (extname && extname != ".l10n") options.dictURI = options.dictURI.substr(0, options.dictURI.length - extname.length) + ".l10n";
        }
        if (!source.templateTokens) {
          source_ = source;
          source = tokenize(String(source), {
            loc: !!options.loc,
            range: !!options.range
          });
        }
        if (source.warns) source.warns.forEach(function(warn) {
          addTemplateWarn(result, options, warn[0], warn[1].loc);
        });
        includeStack.push(sourceOrigin !== true && sourceOrigin || {});
        result.tokens = process(source, result, options);
        includeStack.pop();
        if (!result.tokens) result.tokens = [ [ TYPE_TEXT, 0, 0, "" ] ];
        if (source_) result.tokens.source_ = source_;
        addTokenRef(result.tokens[0], "element");
        normalizeRefs(result.tokens);
        applyDefines(result.tokens, result, options);
        if (/^[^a-z]/i.test(result.isolate)) basis.dev.error("basis.template: isolation prefix `" + result.isolate + "` should not starts with symbol other than letter, otherwise it leads to incorrect css class names and broken styles");
        if (includeStack.length == 0) {
          isolateTokens(result.tokens, result.isolate || "", result, options);
          result.warns = [];
          if (result.removals) result.removals.forEach(function(item) {
            isolateTokens([ item.token ], result.isolate || "", result, options);
          });
          result.warns = warns;
          for (var key in result.styleNSPrefix) {
            var styleNSPrefix = result.styleNSPrefix[key];
            if (!styleNSPrefix.used) addTemplateWarn(result, options, "Unused namespace: " + styleNSPrefix.name, styleNSPrefix.loc);
          }
          if (result.isolate) for (var i = 0, item; item = result.resources[i]; i++) if (item[1] !== styleNamespaceIsolate) item[1] = result.isolate + item[1];
          var styles = result.resources;
          result.resources = result.resources.filter(function(item, idx, array) {
            return item[0] && !basis.array.search(array, styleHash(item), styleHash, idx + 1);
          }).map(function(item) {
            var url = item[0];
            var isolate = item[1];
            var namespaceIsolate = isolate === styleNamespaceIsolate;
            var cssMap;
            if (namespaceIsolate) {
              isolate = styleNamespaceIsolate[url];
              if (url in styleNamespaceResource) {
                item.url = styleNamespaceResource[url].url;
                return styleNamespaceResource[url].url;
              }
            }
            if (!isolate) {
              item.url = url;
              return url;
            }
            var resource = basis.resource.virtual("css", "").ready(function(cssResource) {
              cssResource.url = url + "?isolate-prefix=" + isolate;
              cssResource.baseURI = basis.path.dirname(url) + "/";
              cssResource.map = cssMap;
              sourceResource();
            });
            var sourceResource = basis.resource(url).ready(function(cssResource) {
              var isolated = isolateCss(cssResource.cssText || "", isolate, true);
              if (typeof global.btoa == "function") isolated.css += "\n/*# sourceMappingURL=data:application/json;base64," + global.btoa('{"version":3,"sources":["' + basis.path.origin + url + '"],' + '"mappings":"AAAA' + basis.string.repeat(";AACA", isolated.css.split("\n").length) + '"}') + " */";
              cssMap = isolated.map;
              resource.update(isolated.css);
            });
            if (namespaceIsolate) styleNamespaceResource[url] = resource;
            item.url = resource.url;
            return resource.url;
          });
          result.styles = styles.map(function(item, idx) {
            var sourceUrl = item[0] || tokenAttrs(item[2]).src;
            return {
              resource: item.url || false,
              sourceUrl: basis.resource.resolveURI(sourceUrl),
              isolate: item[1] === styleNamespaceIsolate ? styleNamespaceIsolate[item[0]] : item[1] || false,
              namespace: item[5] || false,
              inline: item[4],
              styleToken: item[2],
              includeToken: item[3]
            };
          });
        }
        for (var key in options.defines) {
          var define = options.defines[key];
          if (!define.used) addTemplateWarn(result, options, "Unused define: " + key, define.loc);
        }
        if (!warns.length) result.warns = false;
        return result;
      };
    }();
    function cloneDecl(array) {
      var result = [];
      if (array.source_) result.source_ = array.source_;
      for (var i = 0; i < array.length; i++) result.push(Array.isArray(array[i]) ? cloneDecl(array[i]) : array[i]);
      return result;
    }
    function getDeclFromSource(source, baseURI, clone, options) {
      var result = source;
      var sourceUrl;
      if (source.bindingBridge) {
        baseURI = "baseURI" in source ? source.baseURI : "url" in source ? basis.path.dirname(source.url) : baseURI;
        sourceUrl = "url" in source ? source.url : sourceUrl;
        result = source.bindingBridge.get(source);
      }
      if (Array.isArray(result)) {
        if (clone) result = cloneDecl(result);
        result = {
          tokens: result
        };
      } else {
        if (typeof result != "object" || !Array.isArray(result.tokens)) result = String(result);
      }
      if (typeof result == "string") result = makeDeclaration(result, baseURI, options, sourceUrl, source);
      return result;
    }
    basis.resource("./d.js").ready(function(exports) {
      resolveResource = exports.resolveResource;
      Template = exports.Template;
    });
    module.exports = {
      VERSION: 3,
      makeDeclaration: makeDeclaration,
      getDeclFromSource: getDeclFromSource,
      setIsolatePrefixGenerator: function(fn) {
        genIsolateMarker = fn;
      }
    };
  },
  "w.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var consts = basis.require("./c.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var ATTR_TYPE_BY_NAME = consts.ATTR_TYPE_BY_NAME;
    var SYNTAX_ERROR = "Invalid or unsupported syntax";
    var TEXT = /((?:.|[\r\n])*?)(\{(?:l10n:([a-zA-Z_][a-zA-Z0-9_\-]*(?:\.[a-zA-Z_][a-zA-Z0-9_\-]*)*(?:\.\{[a-zA-Z_][a-zA-Z0-9_\-]*\})?)\})?|<(\/|!--(\s*\{)?)?|$)/g;
    var TAG_NAME = /([a-z_][a-z0-9\-_]*)(:|\{|\s*(\/?>)?)/ig;
    var ATTRIBUTE_NAME_OR_END = /([a-z_][a-z0-9_\-]*)(:|\{|=|\s*)|(\/?>)/ig;
    var COMMENT = /(.|[\r\n])*?-->/g;
    var CLOSE_TAG = /([a-z_][a-z0-9_\-]*(?::[a-z_][a-z0-9_\-]*)?)>/ig;
    var REFERENCE = /([a-z_][a-z0-9_]*)(\||\}\s*)/ig;
    var ATTRIBUTE_VALUE = /"((?:(\\")|[^"])*?)"\s*/g;
    var QUOTE_UNESCAPE = /\\"/g;
    var BREAK_TAG_PARSE = /^/g;
    var SINGLETON_TAG = /^(area|base|br|col|command|embed|hr|img|input|link|meta|param|source)$/i;
    var TAG_IGNORE_CONTENT = {
      text: /((?:.|[\r\n])*?)(?:<\/b:text>|$)/g,
      style: /((?:.|[\r\n])*?)(?:<\/b:style>|$)/g
    };
    var ATTR_BINDING = /\{([a-z_][a-z0-9_]*|l10n:[a-z_][a-z0-9_]*(?:\.[a-z_][a-z0-9_]*)*(?:\.\{[a-z_][a-z0-9_]*\})?)\}/i;
    var CLASS_ATTR_BINDING = /^((?:[a-z_][a-z0-9_\-]*)?(?::(?:[a-z_][a-z0-9_\-]*)?)?)\{((anim:)?[a-z_][a-z0-9_\-]*)\}$/i;
    var STYLE_ATTR_PARTS = /\s*[^:]+?\s*:(?:\(.*?\)|".*?"|'.*?'|[^;]+?)+(?:;|$)/gi;
    var STYLE_PROPERTY = /\s*([^:]+?)\s*:((?:\(.*?\)|".*?"|'.*?'|[^;]+?)+);?$/i;
    var STYLE_ATTR_BINDING = /\{([a-z_][a-z0-9_]*)\}/i;
    var ATTRIBUTE_MODE = /^(?:|append-|set-|remove-)(class|attr)$/;
    var decodeHTMLTokens = function() {
      var tokenMap = {};
      var tokenElement = !basis.NODE_ENV ? global.document.createElement("div") : null;
      var NAMED_CHARACTER_REF = /&([a-z]+\d*|#\d+|#x[0-9a-f]{1,4});?/gi;
      if (basis.NODE_ENV) tokenMap = __nodejsRequire("./htmlentity.json");
      function namedCharReplace(m, token) {
        if (!tokenMap[token]) {
          if (token.charAt(0) == "#") {
            tokenMap[token] = String.fromCharCode(token.charAt(1) == "x" || token.charAt(1) == "X" ? parseInt(token.substr(2), 16) : token.substr(1));
          } else {
            if (tokenElement) {
              tokenElement.innerHTML = m;
              tokenMap[token] = tokenElement.firstChild ? tokenElement.firstChild.nodeValue : m;
            }
          }
        }
        return tokenMap[token] || m;
      }
      return function decodeHTMLTokens(string) {
        return String(string).replace(NAMED_CHARACTER_REF, namedCharReplace);
      };
    }();
    function buildAttrExpression(parts) {
      var bindName;
      var names = [];
      var expression = [];
      var map = {};
      for (var j = 0; j < parts.length; j++) if (j % 2) {
        bindName = parts[j];
        if (!map[bindName]) {
          map[bindName] = names.length;
          names.push(bindName);
        }
        expression.push(map[bindName]);
      } else {
        if (parts[j]) expression.push(decodeHTMLTokens(parts[j]));
      }
      return [ names, expression ];
    }
    function processAttr(token, mode, convertRange) {
      var value = token.value;
      var bindings = 0;
      var parts;
      var m;
      if (value) {
        switch (mode) {
          case "class":
            var pos = token.valueRange.start_;
            var rx = /(\s*)(\S+)/g;
            var newValue = [];
            var partMap = [];
            var binding;
            bindings = [];
            while (part = rx.exec(value)) {
              var val = part[2];
              var valInfo = {
                value: val,
                binding: false,
                range: {
                  start_: pos += part[1].length,
                  end_: pos += val.length
                }
              };
              convertRange(valInfo);
              if (m = val.match(CLASS_ATTR_BINDING)) {
                binding = [ m[1] || "", m[2] ];
                binding.info_ = valInfo;
                valInfo.binding = true;
                bindings.push(binding);
              } else newValue.push(val);
              partMap.push(valInfo);
            }
            value = newValue.join(" ");
            token.map_ = partMap;
            break;
          case "style":
            var props = [];
            bindings = [];
            if (parts = value.match(STYLE_ATTR_PARTS)) {
              for (var j = 0, part; part = parts[j]; j++) {
                var m = part.match(STYLE_PROPERTY);
                var propertyName = m[1];
                var value = m[2].trim();
                var valueParts = value.split(STYLE_ATTR_BINDING);
                if (valueParts.length > 1) {
                  var expr = buildAttrExpression(valueParts);
                  expr.push(propertyName);
                  bindings.push(expr);
                } else props.push(propertyName + ": " + decodeHTMLTokens(value));
              }
            } else {
              if (/\S/.test(value)) basis.dev.warn("Bad value for style attribute (value ignored):", value);
            }
            value = props.join("; ");
            if (value) value += ";";
            break;
          default:
            parts = value.split(ATTR_BINDING);
            if (parts.length > 1) bindings = buildAttrExpression(parts); else value = decodeHTMLTokens(value);
        }
      }
      if (bindings && !bindings.length) bindings = 0;
      token.binding = bindings;
      token.value = value;
      token.type = ATTR_TYPE_BY_NAME[mode] || TYPE_ATTRIBUTE;
    }
    function postProcessing(tokens, options, source) {
      function tokenName(token) {
        return (token.prefix ? token.prefix + ":" : "") + token.name;
      }
      function getTokenAttrs(token) {
        return token.attrs.reduce(function(res, attr) {
          res[tokenName(attr)] = attr.value;
          return res;
        }, {});
      }
      function buildLocationIndex() {
        var line = 1;
        var column = 0;
        lineIdx = new Array(source.length);
        columnIdx = new Array(source.length);
        for (var i = 0; i < source.length + 1; i++) {
          lineIdx[i] = line;
          columnIdx[i] = column;
          if (source[i] === "\n") {
            line++;
            column = 0;
          } else column++;
        }
      }
      function findLocationByOffset(offset) {
        return {
          line: lineIdx[offset],
          column: columnIdx[offset]
        };
      }
      function getLocationFromRange(range) {
        return {
          start: findLocationByOffset(range.start_),
          end: findLocationByOffset(range.end_)
        };
      }
      function convertRange(token) {
        if (options.loc) {
          token.loc = getLocationFromRange(token.range);
          if (token.valueRange) token.valueLoc = getLocationFromRange(token.valueRange);
        }
        if (options.range) {
          token.range = [ token.range.start_, token.range.end_ ];
          if (token.valueRange) token.valueRange = [ token.valueRange.start_, token.valueRange.end_ ];
        } else {
          delete token.range;
          delete token.valueRange;
        }
      }
      function walk(tokens) {
        var token;
        var prev;
        for (var i = 0; token = tokens[i++]; prev = token) {
          if (token.type == TYPE_ELEMENT) {
            var attrs = getTokenAttrs(token);
            for (var j = 0, attr; attr = token.attrs[j++]; ) {
              var mode = attr.name;
              if (token.prefix == "b" && attr.name == "value") {
                var m = token.name.match(ATTRIBUTE_MODE);
                if (m) mode = m[1] == "class" ? "class" : attrs.name;
              }
              processAttr(attr, mode, convertRange);
              convertRange(attr);
            }
            walk(token.children);
          }
          if (token.type == TYPE_TEXT) {
            token.value = decodeHTMLTokens(token.value);
            if (!token.refs && prev && prev.type == TYPE_TEXT && !prev.refs) {
              prev.value += token.value;
              prev.end_ = token.end_;
              tokens.splice(--i, 1);
            }
          }
          if (token.type == TYPE_COMMENT) {
            token.value = decodeHTMLTokens(token.value);
          }
          convertRange(token);
        }
      }
      var lineIdx;
      var columnIdx;
      if (options.loc) buildLocationIndex();
      walk(tokens);
    }
    function tokenize(source, options) {
      var result = [];
      var tagStack = [];
      var lastTag = {
        children: result
      };
      var parseTag = false;
      var token;
      var state = TEXT;
      var pos = 0;
      var textStateEndPos = 0;
      var textEndPos;
      var bufferPos;
      var startPos;
      var m;
      var attrMap;
      result.source_ = source;
      result.warns = [];
      if (!options || options.trim !== false) {
        pos = textStateEndPos = source.match(/^\s*/)[0].length;
        source = source.trimRight();
      }
      while (pos < source.length || state != TEXT) {
        state.lastIndex = pos;
        startPos = pos;
        m = state.exec(source);
        if (!m || m.index !== pos) {
          if (state == REFERENCE && token && token.type == TYPE_COMMENT) {
            state = COMMENT;
            continue;
          }
          if (parseTag) lastTag = tagStack.pop();
          if (token) lastTag.children.pop();
          if (token = lastTag.children.pop()) {
            if (token.type == TYPE_TEXT && !token.refs) textStateEndPos -= token.value.length; else lastTag.children.push(token);
          }
          parseTag = false;
          state = TEXT;
          continue;
        }
        pos = state.lastIndex;
        switch (state) {
          case TEXT:
            textEndPos = startPos + m[1].length;
            if (textStateEndPos != textEndPos) {
              var sourceText = textStateEndPos == startPos ? m[1] : source.substring(textStateEndPos, textEndPos);
              sourceText = sourceText.replace(/\s*(\r\n?|\n\r?)\s*/g, "");
              if (sourceText) lastTag.children.push({
                type: TYPE_TEXT,
                value: sourceText,
                range: {
                  start_: textStateEndPos,
                  end_: textEndPos
                }
              });
            }
            textStateEndPos = textEndPos;
            if (m[3]) {
              lastTag.children.push({
                type: TYPE_TEXT,
                refs: [ "l10n:" + m[3] ],
                value: "{l10n:" + m[3] + "}",
                range: {
                  start_: textEndPos,
                  end_: pos
                }
              });
            } else if (m[2] == "{") {
              bufferPos = pos - 1;
              lastTag.children.push(token = {
                type: TYPE_TEXT,
                range: {
                  start_: textEndPos,
                  end_: textEndPos
                }
              });
              state = REFERENCE;
            } else if (m[4]) {
              if (m[4] == "/") {
                token = null;
                state = CLOSE_TAG;
              } else {
                lastTag.children.push(token = {
                  type: TYPE_COMMENT,
                  range: {
                    start_: textEndPos,
                    end_: textEndPos
                  }
                });
                if (m[5]) {
                  bufferPos = pos - m[5].length;
                  state = REFERENCE;
                } else {
                  bufferPos = pos;
                  state = COMMENT;
                }
              }
            } else if (m[2]) {
              parseTag = true;
              tagStack.push(lastTag);
              lastTag.children.push(token = {
                type: TYPE_ELEMENT,
                attrs: [],
                children: [],
                range: {
                  start_: textEndPos,
                  end_: textEndPos
                }
              });
              lastTag = token;
              state = TAG_NAME;
              attrMap = {};
            }
            break;
          case CLOSE_TAG:
            if (m[1] !== (lastTag.prefix ? lastTag.prefix + ":" : "") + lastTag.name) {
              lastTag.children.push({
                type: TYPE_TEXT,
                value: "</" + m[0],
                range: {
                  start_: startPos - 2,
                  end_: startPos + m[0].length
                }
              });
              result.warns.push([ "Wrong close tag: " + source.substr(startPos - 2, m[0].length + 2), lastTag.children[lastTag.children.length - 1] ]);
            } else lastTag = tagStack.pop();
            state = TEXT;
            break;
          case TAG_NAME:
          case ATTRIBUTE_NAME_OR_END:
            if (m[2] == ":") {
              if (token.prefix) state = BREAK_TAG_PARSE; else token.prefix = m[1];
              break;
            }
            if (m[1]) {
              token.name = m[1];
              token.range.end_ = startPos + m[1].length;
              if (token.type == TYPE_ATTRIBUTE) {
                var fullName = (token.prefix ? token.prefix + ":" : "") + token.name;
                if (Object.prototype.hasOwnProperty.call(attrMap, fullName)) result.warns.push([ "Duplicate attribute: " + fullName, token ]);
                attrMap[fullName] = true;
                lastTag.attrs.push(token);
              }
            }
            if (m[2] == "{") {
              if (token.type == TYPE_ELEMENT) state = REFERENCE; else state = BREAK_TAG_PARSE;
              break;
            }
            if (m[3]) {
              parseTag = false;
              lastTag.range.end_ = pos;
              if (m[3] == "/>" || !lastTag.prefix && SINGLETON_TAG.test(lastTag.name)) {
                if (m[3] != "/>") result.warns.push([ "Tag <" + lastTag.name + "> doesn't closed explicit (use `/>` as tag ending)", lastTag ]);
                lastTag = tagStack.pop();
              } else {
                if (lastTag.prefix == "b" && lastTag.name in TAG_IGNORE_CONTENT) {
                  state = TAG_IGNORE_CONTENT[lastTag.name];
                  break;
                }
              }
              state = TEXT;
              break;
            }
            if (m[2] == "=") {
              state = ATTRIBUTE_VALUE;
              break;
            }
            token = {
              type: TYPE_ATTRIBUTE,
              range: {
                start_: pos,
                end_: pos
              }
            };
            state = ATTRIBUTE_NAME_OR_END;
            break;
          case COMMENT:
            token.value = source.substring(bufferPos, pos - 3);
            token.range.end_ = pos;
            state = TEXT;
            break;
          case REFERENCE:
            if (token.refs) token.refs.push(m[1]); else token.refs = [ m[1] ];
            if (m[2] != "|") {
              if (token.type == TYPE_TEXT) {
                pos -= m[2].length - 1;
                token.value = source.substring(bufferPos, pos);
                token.range.end_ = pos;
                state = TEXT;
              } else if (token.type == TYPE_COMMENT) {
                state = COMMENT;
              } else if (token.type == TYPE_ATTRIBUTE && source[pos] == "=") {
                pos++;
                state = ATTRIBUTE_VALUE;
              } else {
                token = {
                  type: TYPE_ATTRIBUTE,
                  range: {
                    start_: pos,
                    end_: pos
                  }
                };
                state = ATTRIBUTE_NAME_OR_END;
              }
            }
            break;
          case ATTRIBUTE_VALUE:
            token.value = m[1].replace(QUOTE_UNESCAPE, '"');
            token.range.end_ = pos;
            token.valueRange = {
              start_: startPos + 1,
              end_: startPos + 1 + m[1].length
            };
            token = {
              type: TYPE_ATTRIBUTE,
              range: {
                start_: pos,
                end_: pos
              }
            };
            state = ATTRIBUTE_NAME_OR_END;
            break;
          case TAG_IGNORE_CONTENT.text:
          case TAG_IGNORE_CONTENT.style:
            lastTag.children.push({
              type: TYPE_TEXT,
              value: m[1],
              range: {
                start_: startPos,
                end_: startPos + m[1].length
              }
            });
            lastTag = tagStack.pop();
            state = TEXT;
            break;
          default:
            throw SYNTAX_ERROR;
        }
        if (state == TEXT) textStateEndPos = pos;
      }
      if (textStateEndPos != pos) lastTag.children.push({
        type: TYPE_TEXT,
        value: source.substring(textStateEndPos, pos),
        range: {
          start_: textStateEndPos,
          end_: pos
        }
      });
      postProcessing(result, options || {}, source);
      if (lastTag.name) result.warns.push([ "No close tag for <" + (lastTag.prefix ? lastTag.prefix + ":" : "") + lastTag.name + ">", lastTag ]);
      if (!result.warns.length) delete result.warns;
      result.templateTokens = true;
      return result;
    }
    module.exports = tokenize;
  },
  "x.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var CSS_CLASSNAME_START = /^\-?([_a-z]|[^\x00-\xb1]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-f])/i;
    var CSS_CLASSNAME_START_MAXLEN = 8;
    var CSS_NESTED_ATRULE = /^(media|supports|document)\b/i;
    var CSS_NESTED_ATRULE_MAXLEN = 8;
    var CSS_FNSELECTOR = /^(not|has|matches|nth-child|nth-last-child)\(/i;
    var CSS_FNSELECTOR_MAXLEN = 15;
    function genIsolateMarker() {
      return basis.genUID() + "__";
    }
    function isolateCss(css, prefix, info) {
      function jumpAfter(str, offset) {
        var index = css.indexOf(str, offset);
        i = index !== -1 ? index + str.length : sym.length;
      }
      function parseString() {
        var quote = sym[i];
        if (quote !== '"' && quote !== "'") return;
        for (i++; i < len && sym[i] !== quote; i++) if (sym[i] === "\\") i++;
        return true;
      }
      function parseBraces() {
        var bracket = sym[i];
        if (bracket === "(") {
          jumpAfter(")", i + 1);
          return true;
        }
        if (bracket === "[") {
          for (i++; i < len && sym[i] !== "]"; i++) parseString();
          return true;
        }
      }
      function parseComment() {
        if (sym[i] !== "/" || sym[i + 1] !== "*") return;
        jumpAfter("*/", i + 2);
        return true;
      }
      function parsePseudoContent() {
        for (; i < len && sym[i] != ")"; i++) if (parseComment() || parseBraces() || parsePseudo() || parseClassName()) continue;
      }
      function parsePseudo() {
        if (sym[i] !== ":") return;
        var m = css.substr(i + 1, CSS_FNSELECTOR_MAXLEN).match(CSS_FNSELECTOR);
        if (m) {
          i += m[0].length + 1;
          parsePseudoContent();
        }
        return true;
      }
      function parseAtRule() {
        if (sym[i] !== "@") return;
        var m = css.substr(i + 1, CSS_NESTED_ATRULE_MAXLEN).match(CSS_NESTED_ATRULE);
        if (m) {
          i += m[0].length;
          nestedStyleSheet = true;
        }
        return true;
      }
      function parseBlock() {
        if (sym[i] !== "{") return;
        if (nestedStyleSheet) {
          i++;
          parseStyleSheet(true);
          return;
        }
        for (i++; i < len && sym[i] !== "}"; i++) parseString() || parseBraces();
        return true;
      }
      function parseClassName() {
        if (sym[i] !== ".") return;
        var m = css.substr(i + 1, CSS_CLASSNAME_START_MAXLEN).match(CSS_CLASSNAME_START);
        if (m) {
          i++;
          map[i + result.length / 2 * prefix.length - 1] = i;
          result.push(css.substring(lastMatchPos, i), prefix);
          lastMatchPos = i;
        }
        return true;
      }
      function parseStyleSheet(nested) {
        for (nestedStyleSheet = false; i < len; i++) {
          if (parseComment() || parseAtRule() || parsePseudo() || parseBraces() || parseString() || parseClassName()) continue;
          if (nested && sym[i] == "}") return;
          parseBlock();
        }
      }
      var map = {};
      var result = [];
      var sym = css.split("");
      var len = sym.length;
      var lastMatchPos = 0;
      var i = 0;
      var nestedStyleSheet;
      if (!prefix) prefix = genIsolateMarker();
      parseStyleSheet(false);
      result = result.join("") + css.substring(lastMatchPos);
      return info ? {
        css: result,
        map: map,
        prefix: prefix
      } : result;
    }
    module.exports = isolateCss;
  },
  "f.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var templates = {};
    function add(id, template, instances) {
      templates[id] = {
        template: template,
        instances: instances
      };
    }
    function remove(id) {
      delete templates[id];
    }
    function resolveTemplateById(refId) {
      var templateId = refId & 4095;
      var object = templates[templateId];
      return object && object.template;
    }
    function resolveInstanceById(refId) {
      var templateId = refId & 4095;
      var instanceId = refId >> 12;
      var object = templates[templateId];
      return object && object.instances[instanceId];
    }
    function resolveObjectById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.context;
    }
    function resolveTmplById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.tmpl;
    }
    function resolveActionById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && {
        context: templateRef.context,
        action: templateRef.action
      };
    }
    function getDebugInfoById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.debug && templateRef.debug();
    }
    module.exports = {
      getDebugInfoById: getDebugInfoById,
      add: add,
      remove: remove,
      resolveActionById: resolveActionById,
      resolveTemplateById: resolveTemplateById,
      resolveObjectById: resolveObjectById,
      resolveTmplById: resolveTmplById
    };
  },
  "g.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var themes = {};
    var sourceByPath = {};
    var themeChangeHandlers = [];
    var currentThemeName = "base";
    var baseTheme;
    var Theme = basis.Class(null, {
      className: namespace + ".Theme",
      get: getSourceByPath
    });
    var SourceWrapper = basis.Class(basis.Token, {
      className: namespace + ".SourceWrapper",
      path: "",
      url: "",
      baseURI: "",
      init: function(value, path) {
        this.path = path;
        basis.Token.prototype.init.call(this, "");
      },
      get: function() {
        return this.value && this.value.bindingBridge ? this.value.bindingBridge.get(this.value) : this.value;
      },
      set: function() {
        var content = getThemeSource(currentThemeName, this.path);
        if (this.value != content) {
          if (this.value && this.value.bindingBridge) this.value.bindingBridge.detach(this.value, SourceWrapper.prototype.apply, this);
          this.value = content;
          this.url = content && content.url || "";
          this.baseURI = (typeof content == "object" || typeof content == "function") && "baseURI" in content ? content.baseURI : basis.path.dirname(this.url) + "/";
          if (this.value && this.value.bindingBridge) this.value.bindingBridge.attach(this.value, SourceWrapper.prototype.apply, this);
          this.apply();
        }
      },
      destroy: function() {
        this.url = null;
        this.baseURI = null;
        if (this.value && this.value.bindingBridge) this.value.bindingBridge.detach(this.value, this.apply, this);
        basis.Token.prototype.destroy.call(this);
      }
    });
    function getSourceByPath() {
      var path = basis.array(arguments).join(".");
      var source = sourceByPath[path];
      if (!source) {
        source = new SourceWrapper("", path);
        sourceByPath[path] = source;
      }
      return source;
    }
    function normalize(list) {
      var used = {};
      var result = [];
      for (var i = 0; i < list.length; i++) if (!used[list[i]]) {
        used[list[i]] = true;
        result.push(list[i]);
      }
      return result;
    }
    function extendFallback(themeName, list) {
      var result = [];
      result.source = normalize(list).join("/");
      var used = {
        base: true
      };
      for (var i = 0; i < list.length; i++) {
        var name = list[i] || "base";
        if (name == themeName || used[name]) continue;
        used[name] = true;
        result.push(name);
        getTheme(name);
        list.splice.apply(list, [ i + 1, 0 ].concat(themes[name].fallback));
      }
      result.unshift(themeName);
      if (themeName != "base") result.push("base");
      result.value = result.join("/");
      return result;
    }
    function getThemeSource(name, path) {
      var sourceList = themes[name].sourcesList;
      for (var i = 0, map; map = sourceList[i]; i++) if (map.hasOwnProperty(path)) return map[path];
      return "";
    }
    function themeHasEffect(themeName) {
      return themes[currentThemeName].fallback.indexOf(themeName) != -1;
    }
    function syncCurrentThemePath(path) {
      getSourceByPath(path).set();
    }
    function syncCurrentTheme() {
      basis.dev.log("re-apply templates");
      for (var path in sourceByPath) syncCurrentThemePath(path);
    }
    function getTheme(name) {
      if (!name) name = "base";
      if (themes[name]) return themes[name].theme;
      if (!/^([a-z0-9\_\-]+)$/.test(name)) throw "Bad name for theme - " + name;
      var sources = {};
      var sourceList = [ sources ];
      var themeInterface = new Theme;
      themes[name] = {
        theme: themeInterface,
        sources: sources,
        sourcesList: sourceList,
        fallback: []
      };
      var addSource = function(path, source) {
        if (path in sources == false) {
          sources[path] = source;
          if (themeHasEffect(name)) syncCurrentThemePath(path);
        } else basis.dev.warn("Template path `" + path + "` is already defined for theme `" + name + "` (definition ignored).");
        return getSourceByPath(path);
      };
      basis.object.extend(themeInterface, {
        name: name,
        fallback: function(value) {
          if (themeInterface !== baseTheme && arguments.length > 0) {
            var newFallback = typeof value == "string" ? value.split("/") : [];
            var changed = {};
            newFallback = extendFallback(name, newFallback);
            if (themes[name].fallback.source != newFallback.source) {
              themes[name].fallback.source = newFallback.source;
              basis.dev.log("fallback changed");
              for (var themeName in themes) {
                var curFallback = themes[themeName].fallback;
                var newFallback = extendFallback(themeName, (curFallback.source || "").split("/"));
                if (newFallback.value != curFallback.value) {
                  changed[themeName] = true;
                  themes[themeName].fallback = newFallback;
                  var sourceList = themes[themeName].sourcesList;
                  sourceList.length = newFallback.length;
                  for (var i = 0; i < sourceList.length; i++) sourceList[i] = themes[newFallback[i]].sources;
                }
              }
            }
            for (var themeName in changed) if (themeHasEffect(themeName)) {
              syncCurrentTheme();
              break;
            }
          }
          var result = themes[name].fallback.slice(1);
          result.source = themes[name].fallback.source;
          return result;
        },
        define: function(what, wherewith) {
          if (typeof what == "function") what = what();
          if (typeof what == "string") {
            if (typeof wherewith == "object") {
              var namespace = what;
              var dictionary = wherewith;
              var result = {};
              for (var key in dictionary) if (dictionary.hasOwnProperty(key)) result[key] = addSource(namespace + "." + key, dictionary[key]);
              return result;
            } else {
              if (arguments.length == 1) {
                return getSourceByPath(what);
              } else {
                return addSource(what, wherewith);
              }
            }
          } else {
            if (typeof what == "object") {
              var dictionary = what;
              for (var path in dictionary) if (dictionary.hasOwnProperty(path)) addSource(path, dictionary[path]);
              return themeInterface;
            } else {
              basis.dev.warn("Wrong first argument for basis.template.Theme#define");
            }
          }
        },
        apply: function() {
          if (name != currentThemeName) {
            currentThemeName = name;
            syncCurrentTheme();
            for (var i = 0, handler; handler = themeChangeHandlers[i]; i++) handler.fn.call(handler.context, name);
            basis.dev.info("Template theme switched to `" + name + "`");
          }
          return themeInterface;
        },
        getSource: function(path, withFallback) {
          return withFallback ? getThemeSource(name, path) : sources[path];
        },
        drop: function(path) {
          if (sources.hasOwnProperty(path)) {
            delete sources[path];
            if (themeHasEffect(name)) syncCurrentThemePath(path);
          }
        }
      });
      themes[name].fallback = extendFallback(name, []);
      sourceList.push(themes.base.sources);
      return themeInterface;
    }
    function onThemeChange(fn, context, fire) {
      themeChangeHandlers.push({
        fn: fn,
        context: context
      });
      if (fire) fn.call(context, currentThemeName);
    }
    basis.cleaner.add({
      destroy: function() {
        for (var path in sourceByPath) sourceByPath[path].destroy();
        themes = null;
        sourceByPath = null;
      }
    });
    baseTheme = getTheme();
    module.exports = {
      SourceWrapper: SourceWrapper,
      Theme: Theme,
      theme: getTheme,
      getThemeList: function() {
        return basis.object.keys(themes);
      },
      currentTheme: function() {
        return themes[currentThemeName].theme;
      },
      setTheme: function(name) {
        return getTheme(name).apply();
      },
      onThemeChange: onThemeChange,
      define: baseTheme.define,
      get: getSourceByPath,
      getPathList: function() {
        return basis.object.keys(sourceByPath);
      }
    };
    getTheme("base").define({
      "#0": basis.resource("./3.tmpl"),
      "#1": basis.resource("./4.tmpl"),
      "#2": basis.resource("./5.tmpl"),
      "#3": basis.resource("./6.tmpl"),
      "#4": basis.resource("./7.tmpl"),
      "#5": basis.resource("./8.tmpl"),
      "#6": basis.resource("./9.tmpl"),
      "#7": basis.resource("./a.tmpl"),
      "#8": basis.resource("./b.tmpl"),
      "#9": basis.resource("./c.tmpl"),
      "#a": basis.resource("./d.tmpl")
    });
  },
  "h.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var Node = global.Node;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var eventUtils = basis.require("./2.js");
    var resolveActionById = basis.require("./f.js").resolveActionById;
    var consts = basis.require("./c.js");
    var MARKER = consts.MARKER;
    var CLONE_NORMALIZATION_TEXT_BUG = consts.CLONE_NORMALIZATION_TEXT_BUG;
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_VALUE = consts.ATTR_VALUE;
    var ATTR_VALUE_INDEX = consts.ATTR_VALUE_INDEX;
    var ELEMENT_NAME = consts.ELEMENT_NAME;
    var ELEMENT_ATTRIBUTES_AND_CHILDREN = consts.ELEMENT_ATTRIBUTES_AND_CHILDREN;
    var TEXT_VALUE = consts.TEXT_VALUE;
    var COMMENT_VALUE = consts.COMMENT_VALUE;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var MOUSE_ENTER_LEAVE_SUPPORT = "onmouseenter" in document.documentElement;
    var USE_CAPTURE_FALLBACK = false;
    var tmplEventListeners = {};
    var afterEventAction = {};
    var insideElementEvent = {};
    var contains;
    if (Node && !Node.prototype.contains) contains = function(parent, child) {
      return parent.compareDocumentPosition(child) & 16;
    }; else contains = function(parent, child) {
      return parent.contains(child);
    };
    if (!document.addEventListener) USE_CAPTURE_FALLBACK = basis.publicCallback(function(eventName, event) {
      eventUtils.fireEvent(document, eventName);
      event.returnValue = true;
      var listener = tmplEventListeners[eventName];
      if (listener) listener(new eventUtils.Event(event));
    }, true);
    function createEventHandler(attrName) {
      return function(event) {
        if (event.type == "click" && event.which == 3) return;
        var bubble = insideElementEvent[event.type] || event.type != "mouseenter" && event.type != "mouseleave";
        var nodePath = event.path.slice(0, event.path.length - 1);
        var attrCursor = nodePath.shift();
        var attr;
        while (attrCursor) {
          attr = attrCursor.getAttribute && attrCursor.getAttribute(attrName);
          if (!bubble || typeof attr == "string") break;
          attrCursor = nodePath.shift();
        }
        if (typeof attr == "string") {
          var cursor = attrCursor;
          var actionTarget = cursor;
          var refId;
          var tmplRef;
          if (insideElementEvent[event.type]) {
            var relTarget = event.relatedTarget;
            if (relTarget && (cursor === relTarget || contains(cursor, relTarget))) cursor = null;
          }
          while (cursor) {
            refId = cursor[MARKER];
            if (typeof refId == "number") {
              if (tmplRef = resolveActionById(refId)) break;
            }
            cursor = nodePath.shift();
          }
          var actions = attr.trim().split(/\s+/);
          var actionCallback = tmplRef && tmplRef.action;
          for (var i = 0, actionName; actionName = actions[i++]; ) switch (actionName) {
            case "prevent-default":
              event.preventDefault();
              break;
            case "stop-propagation":
              event.stopPropagation();
              break;
            case "log-event":
              basis.dev.log("Template event:", event);
              break;
            default:
              if (actionCallback) {
                event.actionTarget = actionTarget;
                actionCallback.call(tmplRef.context, actionName, event);
              }
          }
        }
        if (event.type in afterEventAction) afterEventAction[event.type](event, attrCursor);
      };
    }
    function emulateEvent(origEventName, emulEventName) {
      regEventHandler(emulEventName);
      insideElementEvent[origEventName] = true;
      afterEventAction[emulEventName] = function(event) {
        event = new eventUtils.Event(event);
        event.type = origEventName;
        tmplEventListeners[origEventName](event);
      };
      afterEventAction[origEventName] = function(event, cursor) {
        if (!cursor || !cursor.parentNode) return;
        event = new eventUtils.Event(event);
        event.type = origEventName;
        event.sender = cursor.parentNode;
        tmplEventListeners[origEventName](event);
      };
    }
    function regEventHandler(eventName) {
      if (hasOwnProperty.call(tmplEventListeners, eventName)) return;
      tmplEventListeners[eventName] = createEventHandler("event-" + eventName);
      if (USE_CAPTURE_FALLBACK) return;
      if (!MOUSE_ENTER_LEAVE_SUPPORT) {
        if (eventName == "mouseenter") return emulateEvent(eventName, "mouseover");
        if (eventName == "mouseleave") return emulateEvent(eventName, "mouseout");
      }
      for (var i = 0, names = eventUtils.browserEvents(eventName), browserEventName; browserEventName = names[i]; i++) eventUtils.addGlobalHandler(browserEventName, tmplEventListeners[eventName]);
    }
    var namespaceURI = {
      svg: "http://www.w3.org/2000/svg"
    };
    var SET_CLASS_ATTRIBUTE_BUG = function() {
      var element = document.createElement("div");
      element.setAttribute("class", "a");
      return !element.className;
    }();
    var SET_STYLE_ATTRIBUTE_BUG = function() {
      var element = document.createElement("div");
      element.setAttribute("style", "position:absolute");
      return element.style.position != "absolute";
    }();
    function setEventAttribute(node, eventName, actions) {
      regEventHandler(eventName);
      if (USE_CAPTURE_FALLBACK) node.setAttribute("on" + eventName, USE_CAPTURE_FALLBACK + '("' + eventName + '",event)');
      node.setAttribute("event-" + eventName, actions);
    }
    function setAttribute(node, name, value) {
      if (SET_CLASS_ATTRIBUTE_BUG && name == "class") name = "className";
      if (SET_STYLE_ATTRIBUTE_BUG && name == "style") return node.style.cssText = value;
      node.setAttribute(name, value);
    }
    var buildDOM = function(tokens, parent) {
      var result = parent || document.createDocumentFragment();
      var offset = parent ? ELEMENT_ATTRIBUTES_AND_CHILDREN : 0;
      for (var i = offset, token; token = tokens[i]; i++) {
        var tokenType = token[TOKEN_TYPE];
        switch (tokenType) {
          case TYPE_ELEMENT:
            var tagName = token[ELEMENT_NAME];
            var colonIndex = tagName.indexOf(":");
            var element = colonIndex != -1 ? document.createElementNS(namespaceURI[tagName.substr(0, colonIndex)], tagName) : document.createElement(tagName);
            buildDOM(token, element);
            result.appendChild(element);
            break;
          case TYPE_ATTRIBUTE:
            if (!token[TOKEN_BINDINGS]) setAttribute(result, token[ATTR_NAME], token[ATTR_VALUE] || "");
            break;
          case TYPE_ATTRIBUTE_CLASS:
            var attrValue = token[ATTR_VALUE_INDEX[tokenType]];
            attrValue = attrValue ? [ attrValue ] : [];
            if (token[TOKEN_BINDINGS]) for (var j = 0, binding; binding = token[TOKEN_BINDINGS][j]; j++) {
              var defaultValue = binding[4];
              if (defaultValue) {
                var prefix = binding[0];
                if (Array.isArray(prefix)) {
                  attrValue.push(prefix[defaultValue - 1]);
                } else {
                  switch (binding[2]) {
                    case CLASS_BINDING_BOOL:
                      attrValue.push(prefix + binding[3]);
                      break;
                    case CLASS_BINDING_ENUM:
                      attrValue.push(prefix + binding[5][defaultValue - 1]);
                      break;
                  }
                }
              }
            }
            if (attrValue.length) setAttribute(result, "class", attrValue.join(" "));
            break;
          case TYPE_ATTRIBUTE_STYLE:
            var attrValue = token[ATTR_VALUE_INDEX[tokenType]];
            if (attrValue) setAttribute(result, "style", attrValue);
            break;
          case TYPE_ATTRIBUTE_EVENT:
            setEventAttribute(result, token[1], token[2] || token[1]);
            break;
          case TYPE_COMMENT:
            result.appendChild(document.createComment(token[COMMENT_VALUE] || (token[TOKEN_REFS] ? "{" + token[TOKEN_REFS].join("|") + "}" : "")));
            break;
          case TYPE_TEXT:
            if (CLONE_NORMALIZATION_TEXT_BUG && i && tokens[i - 1][TOKEN_TYPE] == TYPE_TEXT) result.appendChild(document.createComment(""));
            result.appendChild(document.createTextNode(token[TEXT_VALUE] || (token[TOKEN_REFS] ? "{" + token[TOKEN_REFS].join("|") + "}" : "") || (token[TOKEN_BINDINGS] ? "{" + token[TOKEN_BINDINGS] + "}" : "")));
            break;
        }
      }
      if (!parent && tokens.length == 1) result = result.firstChild;
      return result;
    };
    module.exports = buildDOM;
  },
  "i.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var Class = basis.Class;
    var complete = basis.object.complete;
    var arrayFrom = basis.array;
    var arrayRemove = basis.array.remove;
    var $undef = basis.fn.$undef;
    var getter = basis.getter;
    var nullGetter = basis.fn.nullGetter;
    var basisEvent = basis.require("./7.js");
    var createEvent = basisEvent.create;
    var events = basisEvent.events;
    var basisData = basis.require("./3.js");
    var resolveValue = basisData.resolveValue;
    var resolveDataset = basisData.resolveDataset;
    var createResolveFunction = basisData.createResolveFunction;
    var SUBSCRIPTION = basisData.SUBSCRIPTION;
    var STATE = basisData.STATE;
    var DataObject = basisData.Object;
    var ReadOnlyDataset = basisData.ReadOnlyDataset;
    var Dataset = basisData.Dataset;
    var EXCEPTION_CANT_INSERT = namespace + ": Node can't be inserted at specified point in hierarchy";
    var EXCEPTION_NODE_NOT_FOUND = namespace + ": Node was not found";
    var EXCEPTION_BAD_CHILD_CLASS = namespace + ": Child node has wrong class";
    var EXCEPTION_NULL_CHILD = namespace + ": Child node is null";
    var EXCEPTION_DATASOURCE_CONFLICT = namespace + ": Operation is not allowed because node is under dataSource control";
    var EXCEPTION_DATASOURCEADAPTER_CONFLICT = namespace + ": Operation is not allowed because node is under dataSource adapter control";
    var EXCEPTION_PARENTNODE_OWNER_CONFLICT = namespace + ": Node can't has owner and parentNode";
    var EXCEPTION_NO_CHILDCLASS = namespace + ": Node can't has children and dataSource as childClass isn't specified";
    var AUTO = "__auto__";
    var DELEGATE = {
      ANY: true,
      NONE: false,
      PARENT: "parent",
      OWNER: "owner"
    };
    var childNodesDatasetMap = {};
    function warnOnDataSourceItemNodeDestoy() {
      basis.dev.warn(namespace + ": node can't be destroyed as representing dataSource item, destroy delegate item or remove it from dataSource first");
    }
    function warnOnAutoSatelliteOwnerChange() {
      basis.dev.warn(namespace + ": satellite can't change owner as it auto-satellite");
    }
    function warnOnAutoSatelliteDestoy() {
      basis.dev.warn(namespace + ": satellite can't be destroyed as it auto-create satellite, and could be destroyed on owner destroy");
    }
    function lockDataSourceItemNode(node) {
      node.setDelegate = basis.fn.$undef;
      node.destroy = warnOnDataSourceItemNodeDestoy;
    }
    function unlockDataSourceItemNode(node) {
      var proto = node.constructor.prototype;
      node.setDelegate = proto.setDelegate;
      node.destroy = proto.destroy;
    }
    function getSortingValue(node) {
      return node.sortingValue;
    }
    function sortAsc(a, b) {
      a = a.sortingValue || 0;
      b = b.sortingValue || 0;
      return +(a > b) || -(a < b);
    }
    function sortDesc(a, b) {
      a = a.sortingValue || 0;
      b = b.sortingValue || 0;
      return -(a > b) || +(a < b);
    }
    function sortChildNodes(obj) {
      return obj.childNodes.sort(obj.sortingDesc ? sortDesc : sortAsc);
    }
    function binarySearchPos(array, value, valueGetter, desc) {
      if (!array.length) return 0;
      desc = !!desc;
      var l = 0;
      var r = array.length - 1;
      var valueType = typeof value;
      var compareValue;
      var compareValueType;
      var pos;
      do {
        pos = l + r >> 1;
        compareValue = valueGetter(array[pos]);
        compareValueType = typeof compareValue;
        if (desc) {
          if (valueType > compareValueType || value > compareValue) {
            r = pos - 1;
            continue;
          }
          if (valueType < compareValueType || value < compareValue) {
            l = pos + 1;
            continue;
          }
        } else {
          if (valueType < compareValueType || value < compareValue) {
            r = pos - 1;
            continue;
          }
          if (valueType > compareValueType || value > compareValue) {
            l = pos + 1;
            continue;
          }
        }
        return value == compareValue ? pos : 0;
      } while (l <= r);
      return pos + ((compareValueType < valueType || compareValue < value) ^ desc);
    }
    function updateNodeContextSelection(root, oldSelection, newSelection, rootUpdate, ignoreRootSelection) {
      if (oldSelection === newSelection) return;
      var nextNode;
      var cursor = root;
      var selected = [];
      if (rootUpdate) {
        root.contextSelection = newSelection;
        if (root.selected && !root.selectedRA_) selected.push(root);
      }
      while (cursor) {
        nextNode = !cursor.selection || ignoreRootSelection && cursor === root ? cursor.firstChild : null;
        if (nextNode && nextNode.contextSelection !== oldSelection) throw "Try change wrong context selection";
        while (!nextNode) {
          if (cursor === root) {
            if (selected.length) {
              if (oldSelection) oldSelection.remove(selected);
              if (newSelection) {
                newSelection.add(selected);
                for (var i = 0; i < selected.length; i++) {
                  var node = selected[i];
                  if (node.selected && !newSelection.has(node)) {
                    node.selected = false;
                    node.emit_unselect();
                  }
                }
              }
            }
            return;
          }
          nextNode = cursor.nextSibling;
          if (!nextNode) cursor = cursor.parentNode;
        }
        cursor = nextNode;
        if (cursor.selected && !cursor.selectedRA_) selected.push(cursor);
        cursor.contextSelection = newSelection;
      }
    }
    function updateNodeDisableContext(node, disabled) {
      if (node.contextDisabled != disabled) {
        node.contextDisabled = disabled;
        if (node.disabled) return;
        if (disabled) node.emit_disable(); else node.emit_enable();
      }
    }
    SUBSCRIPTION.addProperty("owner");
    SUBSCRIPTION.addProperty("dataSource");
    SUBSCRIPTION.add("CHILD", {
      childNodesModified: function(object, delta) {
        var array;
        if (array = delta.inserted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.link("child", object, array[i]);
        if (array = delta.deleted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.unlink("child", object, array[i]);
      }
    }, function(action, object) {
      var childNodes = object.childNodes || [];
      for (var i = 0, child; child = childNodes[i]; i++) action("child", object, child);
    });
    SUBSCRIPTION.add("SATELLITE", {
      satelliteChanged: function(object, name, oldSatellite) {
        if (oldSatellite) SUBSCRIPTION.unlink("satellite", object, oldSatellite);
        if (object.satellite[name]) SUBSCRIPTION.link("satellite", object, object.satellite[name]);
      }
    }, function(action, object) {
      var satellites = object.satellite;
      if (satellites !== NULL_SATELLITE) for (var name in satellites) if (name !== AUTO) action("satellite", object, satellites[name]);
    });
    function processInstanceClass(InstanceClass) {
      if (!InstanceClass.isSubclassOf(AbstractNode)) {
        basis.dev.warn(namespace + ": Bad class for instance, should be subclass of basis.dom.wrapper.AbstractNode");
        return AbstractNode;
      }
      return InstanceClass;
    }
    function processSatelliteConfig(satelliteConfig) {
      var loc;
      if (!satelliteConfig) return null;
      if (satelliteConfig.isSatelliteConfig) return satelliteConfig;
      if (satelliteConfig instanceof AbstractNode) return satelliteConfig;
      if (satelliteConfig.constructor !== Object) satelliteConfig = {
        instance: satelliteConfig
      }; else loc = basis.dev.getInfo(satelliteConfig, "loc");
      var handlerRequired = false;
      var events = "update";
      var config = {
        isSatelliteConfig: true
      };
      for (var key in satelliteConfig) {
        var value = satelliteConfig[key];
        switch (key) {
          case "instance":
            if (value instanceof AbstractNode) {
              config.instance = value;
            } else {
              if (Class.isClass(value)) config.instanceClass = processInstanceClass(value); else {
                if (typeof value == "string") value = basis.getter(value);
                config.getInstance = value;
              }
            }
            break;
          case "instanceOf":
          case "satelliteClass":
            if (key == "instanceOf") {
              basis.dev.warn(namespace + ": `instanceOf` in satellite config is deprecated, use `instance` instead");
              if ("satelliteClass" in satelliteConfig) {
                basis.dev.warn(namespace + ": `instanceOf` in satellite config has been ignored, as `satelliteClass` is specified");
                break;
              }
            }
            if ("instance" in satelliteConfig) {
              basis.dev.warn(namespace + ": `" + key + "` in satellite config has been ignored, as `instance` is specified");
              break;
            }
            if (Class.isClass(value)) {
              basis.dev.warn(namespace + ": `satelliteClass` in satellite config is deprecated, use `instance` instead");
              config.instanceClass = processInstanceClass(value);
            } else basis.dev.warn(namespace + ": bad value for `" + key + "` in satellite config, value should be a subclass of basis.dom.wrapper.AbstractNode");
            break;
          case "existsIf":
          case "delegate":
          case "dataSource":
            if (value) {
              if (typeof value == "string") value = getter(value);
              if (typeof value != "function") value = basis.fn.$const(value); else handlerRequired = true;
            }
            config[key] = value;
            break;
          case "config":
            if (typeof value == "string") value = getter(value);
            config.config = value;
            break;
          case "events":
            events = satelliteConfig.events;
            break;
          default:
            basis.dev.warn("Unknown satellite config option – " + key);
        }
      }
      if (!config.instance && !config.getInstance && !config.instanceClass) config.instanceClass = processInstanceClass(AbstractNode);
      if (handlerRequired) {
        if (Array.isArray(events)) events = events.join(" ");
        if (typeof events == "string") {
          var handler = {};
          events = events.split(/\s+/);
          for (var i = 0, eventName; eventName = events[i]; i++) {
            handler[eventName] = SATELLITE_UPDATE;
            config.handler = handler;
          }
        }
      }
      if (loc) basis.dev.setInfo(config, "loc", loc);
      return config;
    }
    function applySatellites(node, satellites) {
      for (var name in satellites) if (satellites[name] && typeof satellites[name] == "object") node.setSatellite(name, satellites[name]);
    }
    var NULL_SATELLITE = Class.customExtendProperty({}, function(result, extend) {
      var map = basis.dev.getInfo(extend, "map");
      for (var name in extend) {
        result[name] = processSatelliteConfig(extend[name]);
        if (map && !basis.dev.getInfo(result[name]) && hasOwnProperty.call(map, name)) basis.dev.setInfo(result[name], "loc", map[name]);
      }
    });
    var SATELLITE_UPDATE = function() {
      var name = this.name;
      var config = this.config;
      var owner = this.owner;
      var exists = "existsIf" in config == false || config.existsIf(owner);
      if (resolveValue(this, SATELLITE_UPDATE, exists, "existsRA_")) {
        var satellite = this.instance || config.instance;
        if (!satellite || this.factoryType == "value") {
          if (!this.factoryType) {
            var instanceValue = config.getInstance;
            var instanceClass = config.instanceClass;
            if (typeof instanceValue == "function") {
              instanceValue = instanceValue.call(owner, owner);
              if (Class.isClass(instanceValue)) instanceClass = processInstanceClass(instanceValue);
            }
            this.factoryType = instanceClass ? "class" : "value";
            this.factory = instanceClass || instanceValue;
          }
          if (this.factoryType == "class") {
            var satelliteConfig = {
              destroy: warnOnAutoSatelliteDestoy
            };
            if (config.delegate) {
              satelliteConfig.autoDelegate = false;
              satelliteConfig.delegate = config.delegate(owner);
            }
            if (config.dataSource) satelliteConfig.dataSource = config.dataSource(owner);
            if (config.config) basis.object.complete(satelliteConfig, typeof config.config == "function" ? config.config(owner) : config.config);
            this.instance = new this.factory(satelliteConfig);
            owner.setSatellite(name, this.instance, true);
            var loc = basis.dev.getInfo(config, "loc");
            if (loc) basis.dev.setInfo(this.instance, "loc", loc);
            return;
          }
          satellite = resolveAbstractNode(this, SATELLITE_UPDATE, this.factory, "instanceRA_");
        }
        if (this.instance !== satellite) {
          this.instance = satellite || null;
          owner.setSatellite(name, this.instance, true);
        }
        if (satellite && satellite.owner === owner) {
          if (config.delegate) satellite.setDelegate(config.delegate(owner));
          if (config.dataSource) satellite.setDataSource(config.dataSource(owner));
        }
      } else {
        var satellite = this.instance;
        if (satellite) {
          if (config.instance) {
            if (config.delegate) satellite.setDelegate();
            if (config.dataSource) satellite.setDataSource();
          }
          this.instance = null;
          owner.setSatellite(name, null, true);
        }
      }
    };
    var AUTO_SATELLITE_INSTANCE_HANDLER = {
      destroy: function() {
        if (!this.instanceRA_) this.owner.setSatellite(this.name, null);
      }
    };
    var AbstractNode = Class(DataObject, {
      className: namespace + ".AbstractNode",
      propertyDescriptors: {
        owner: "ownerChanged",
        parentNode: "parentChanged",
        childNodes: "childNodesModified",
        childNodesState: "childNodesStateChanged",
        dataSource: "dataSourceChanged",
        "getChildNodesDataset()": true,
        satellite: {
          nested: true,
          events: "satelliteChanged"
        },
        sorting: "sortingChanged",
        sortingDesc: "sortingChanged",
        grouping: "groupingChanged",
        ownerSatelliteName: "ownerSatelliteNameChanged",
        firstChild: false,
        lastChild: false,
        previousSibling: false,
        nextSibling: false,
        groupNode: false,
        groupId: true,
        autoDelegate: false,
        destroyDataSourceMember: false,
        name: true
      },
      subscribeTo: DataObject.prototype.subscribeTo + SUBSCRIPTION.DATASOURCE + SUBSCRIPTION.SATELLITE,
      isSyncRequired: function() {
        return this.state == STATE.UNDEFINED || this.state == STATE.DEPRECATED;
      },
      syncEvents: {
        activeChanged: false
      },
      emit_update: function(delta) {
        DataObject.prototype.emit_update.call(this, delta);
        var parentNode = this.parentNode;
        if (parentNode) {
          if (parentNode.matchFunction) this.match(parentNode.matchFunction);
          parentNode.insertBefore(this, this.nextSibling);
        }
      },
      listen: {
        owner: {
          destroy: function() {
            if (!this.ownerSatelliteName) this.setOwner();
          }
        }
      },
      autoDelegate: DELEGATE.NONE,
      name: null,
      childNodes: null,
      emit_childNodesModified: createEvent("childNodesModified", "delta") && function(delta) {
        events.childNodesModified.call(this, delta);
        var listen = this.listen.childNode;
        var array;
        if (listen) {
          if (array = delta.inserted) for (var i = 0, child; child = array[i]; i++) child.addHandler(listen, this);
          if (array = delta.deleted) for (var i = 0, child; child = array[i]; i++) child.removeHandler(listen, this);
        }
      },
      childNodesState: STATE.UNDEFINED,
      emit_childNodesStateChanged: createEvent("childNodesStateChanged", "oldState"),
      childClass: AbstractNode,
      dataSource: null,
      emit_dataSourceChanged: createEvent("dataSourceChanged", "oldDataSource"),
      dataSourceRA_: null,
      dataSourceMap_: null,
      destroyDataSourceMember: true,
      parentNode: null,
      emit_parentChanged: createEvent("parentChanged", "oldParentNode"),
      nextSibling: null,
      previousSibling: null,
      firstChild: null,
      lastChild: null,
      sorting: nullGetter,
      sortingDesc: false,
      emit_sortingChanged: createEvent("sortingChanged", "oldSorting", "oldSortingDesc"),
      groupingClass: null,
      grouping: null,
      emit_groupingChanged: createEvent("groupingChanged", "oldGrouping"),
      groupNode: null,
      groupId: NaN,
      satellite: NULL_SATELLITE,
      emit_satelliteChanged: createEvent("satelliteChanged", "name", "oldSatellite"),
      ownerSatelliteName: null,
      emit_ownerSatelliteNameChanged: createEvent("ownerSatelliteNameChanged", "name", "oldName"),
      owner: null,
      emit_ownerChanged: createEvent("ownerChanged", "oldOwner"),
      init: function() {
        DataObject.prototype.init.call(this);
        var childNodes = this.childNodes;
        var dataSource = this.dataSource;
        if (childNodes) this.childNodes = null;
        if (dataSource) this.dataSource = null;
        var grouping = this.grouping;
        if (grouping) {
          this.grouping = null;
          this.setGrouping(grouping);
        }
        if (this.childClass) {
          this.childNodes = [];
          if (dataSource) {
            this.setDataSource(dataSource);
          } else {
            if (childNodes) this.setChildNodes(childNodes);
          }
        }
        var satellites = this.satellite;
        if (satellites !== NULL_SATELLITE) {
          this.satellite = NULL_SATELLITE;
          applySatellites(this, satellites);
        }
        var owner = this.owner;
        if (owner) {
          this.owner = null;
          this.setOwner(owner);
        }
      },
      setChildNodesState: function(state, data) {
        var stateCode = String(state);
        var oldState = this.childNodesState;
        if (!STATE.values[stateCode]) throw new Error("Wrong state value");
        if (oldState != stateCode || oldState.data != data) {
          this.childNodesState = Object(stateCode);
          this.childNodesState.data = data;
          this.emit_childNodesStateChanged(oldState);
        }
      },
      appendChild: function(newChild) {},
      insertBefore: function(newChild, refChild) {},
      removeChild: function(oldChild) {},
      replaceChild: function(newChild, oldChild) {},
      clear: function(alive) {},
      setChildNodes: function(nodes) {},
      setGrouping: function(grouping, alive) {},
      setSorting: function(sorting, desc) {},
      setDataSource: function(dataSource) {},
      setOwner: function(owner) {
        if (!owner || owner instanceof AbstractNode == false) owner = null;
        if (owner && this.parentNode) throw EXCEPTION_PARENTNODE_OWNER_CONFLICT;
        var oldOwner = this.owner;
        if (oldOwner !== owner) {
          var listenHandler = this.listen.owner;
          if (oldOwner) {
            if (this.ownerSatelliteName && oldOwner.satellite[AUTO] && this.ownerSatelliteName in oldOwner.satellite[AUTO]) {
              basis.dev.warn(namespace + ": auto-satellite can't change it's owner");
              return;
            }
            if (listenHandler) oldOwner.removeHandler(listenHandler, this);
            if (this.ownerSatelliteName) {
              this.owner = null;
              oldOwner.setSatellite(this.ownerSatelliteName, null);
            }
          }
          if (owner && listenHandler) owner.addHandler(listenHandler, this);
          this.owner = owner;
          this.emit_ownerChanged(oldOwner);
          if (this.autoDelegate == DELEGATE.OWNER || this.autoDelegate === DELEGATE.ANY) this.setDelegate(owner);
        }
      },
      setSatellite: function(name, satellite, autoSet) {
        var oldSatellite = this.satellite[name] || null;
        var auto = this.satellite[AUTO];
        var autoConfig = auto && auto[name];
        var preserveAuto = autoSet && autoConfig;
        if (preserveAuto) {
          satellite = autoConfig.instance;
          if (satellite && autoConfig.config.instance) delete autoConfig.config.instance.setOwner;
        } else {
          satellite = processSatelliteConfig(satellite);
          if (satellite && satellite.owner === this && auto && satellite.ownerSatelliteName && auto[satellite.ownerSatelliteName]) {
            basis.dev.warn(namespace + ": auto-create satellite can't change name inside owner");
            return;
          }
          if (autoConfig) {
            delete auto[name];
            if (autoConfig.config.instance) autoConfig.config.instance.removeHandler(AUTO_SATELLITE_INSTANCE_HANDLER, autoConfig);
            if (autoConfig.config.handler) this.removeHandler(autoConfig.config.handler, autoConfig);
          }
        }
        if (oldSatellite !== satellite) {
          var satelliteListen = this.listen.satellite;
          var satellitePersonalListen = this.listen["satellite:" + name];
          var destroySatellite;
          if (oldSatellite) {
            delete this.satellite[name];
            var oldSatelliteName = oldSatellite.ownerSatelliteName;
            if (oldSatelliteName != null) {
              oldSatellite.ownerSatelliteName = null;
              oldSatellite.emit_ownerSatelliteNameChanged(oldSatelliteName);
            }
            if (autoConfig && oldSatellite.destroy === warnOnAutoSatelliteDestoy) {
              destroySatellite = oldSatellite;
            } else {
              if (satelliteListen) oldSatellite.removeHandler(satelliteListen, this);
              if (satellitePersonalListen) oldSatellite.removeHandler(satellitePersonalListen, this);
              oldSatellite.setOwner(null);
            }
            if (preserveAuto && !satellite && autoConfig.config.instance) autoConfig.config.instance.setOwner = warnOnAutoSatelliteOwnerChange;
          }
          if (satellite) {
            if (satellite instanceof AbstractNode == false) {
              var autoConfig = {
                owner: this,
                name: name,
                config: satellite,
                factoryType: null,
                factory: null,
                instance: null,
                instanceRA_: null,
                existsRA_: null
              };
              if (satellite.handler) this.addHandler(satellite.handler, autoConfig);
              if (satellite.instance) {
                satellite.instance.addHandler(AUTO_SATELLITE_INSTANCE_HANDLER, autoConfig);
                satellite.instance.setOwner = warnOnAutoSatelliteOwnerChange;
              }
              if (!auto) {
                if (this.satellite === NULL_SATELLITE) this.satellite = {};
                auto = this.satellite[AUTO] = {};
              }
              auto[name] = autoConfig;
              SATELLITE_UPDATE.call(autoConfig, this);
              if (!autoConfig.instance && oldSatellite) this.emit_satelliteChanged(name, oldSatellite);
              if (destroySatellite) {
                delete destroySatellite.destroy;
                destroySatellite.destroy();
              }
              return;
            }
            if (satellite.owner !== this) {
              if (autoConfig && autoConfig.config.delegate) {
                var autoDelegate = satellite.autoDelegate;
                satellite.autoDelegate = false;
                satellite.setOwner(this);
                satellite.autoDelegate = autoDelegate;
              } else satellite.setOwner(this);
              if (satellite.owner !== this) {
                this.setSatellite(name, null);
                return;
              }
              if (satelliteListen) satellite.addHandler(satelliteListen, this);
              if (satellitePersonalListen) satellite.addHandler(satellitePersonalListen, this);
            } else {
              if (satellite.ownerSatelliteName) {
                delete this.satellite[satellite.ownerSatelliteName];
                this.emit_satelliteChanged(satellite.ownerSatelliteName, satellite);
              }
            }
            if (this.satellite == NULL_SATELLITE) this.satellite = {};
            this.satellite[name] = satellite;
            var oldSatelliteName = satellite.ownerSatelliteName;
            if (oldSatelliteName != name) {
              satellite.ownerSatelliteName = name;
              satellite.emit_ownerSatelliteNameChanged(oldSatelliteName);
            }
          }
          this.emit_satelliteChanged(name, oldSatellite);
          if (destroySatellite) {
            delete destroySatellite.destroy;
            destroySatellite.destroy();
          }
        }
      },
      getChildNodesDataset: function() {
        return childNodesDatasetMap[this.basisObjectId] || new ChildNodesDataset({
          sourceNode: this
        });
      },
      destroy: function() {
        DataObject.prototype.destroy.call(this);
        if (this.dataSource || this.dataSourceRA_) {
          this.setDataSource();
        } else {
          if (this.firstChild) this.clear();
        }
        if (this.parentNode) this.parentNode.removeChild(this);
        if (this.grouping) {
          this.grouping.setOwner();
          this.grouping = null;
        }
        if (this.owner) this.setOwner();
        var satellites = this.satellite;
        if (satellites !== NULL_SATELLITE) {
          var auto = satellites[AUTO];
          delete satellites[AUTO];
          for (var name in auto) {
            if (auto[name].config.instance && !auto[name].instance) auto[name].config.instance.destroy();
            if (auto[name].existsRA_) resolveValue(auto[name], null, null, "existsRA_");
            if (auto[name].instanceRA_) resolveValue(auto[name], null, null, "instanceRA_");
          }
          for (var name in satellites) {
            var satellite = satellites[name];
            satellite.owner = null;
            satellite.ownerSatelliteName = null;
            if (satellite.destroy === warnOnAutoSatelliteDestoy) delete satellite.destroy;
            satellite.destroy();
          }
          this.satellite = null;
        }
        this.childNodes = null;
      }
    });
    var resolveAbstractNode = createResolveFunction(AbstractNode);
    var PartitionNode = Class(AbstractNode, {
      className: namespace + ".PartitionNode",
      autoDestroyIfEmpty: false,
      nodes: null,
      first: null,
      last: null,
      init: function() {
        this.nodes = [];
        AbstractNode.prototype.init.call(this);
      },
      insert: function(newNode, refNode) {
        var nodes = this.nodes;
        var pos = refNode ? nodes.indexOf(refNode) : -1;
        if (pos == -1) {
          nodes.push(newNode);
          this.last = newNode;
        } else nodes.splice(pos, 0, newNode);
        this.first = nodes[0];
        newNode.groupNode = this;
        this.emit_childNodesModified({
          inserted: [ newNode ]
        });
      },
      remove: function(oldNode) {
        var nodes = this.nodes;
        if (arrayRemove(nodes, oldNode)) {
          this.first = nodes[0] || null;
          this.last = nodes[nodes.length - 1] || null;
          oldNode.groupNode = null;
          this.emit_childNodesModified({
            deleted: [ oldNode ]
          });
        }
        if (!this.first && this.autoDestroyIfEmpty) this.destroy();
      },
      clear: function() {
        if (!this.first) return;
        var nodes = this.nodes;
        for (var i = nodes.length; i-- > 0; ) nodes[i].groupNode = null;
        this.nodes = [];
        this.first = null;
        this.last = null;
        this.emit_childNodesModified({
          deleted: nodes
        });
        if (this.autoDestroyIfEmpty) this.destroy();
      },
      destroy: function() {
        AbstractNode.prototype.destroy.call(this);
        this.nodes = null;
        this.first = null;
        this.last = null;
      }
    });
    var DOMMIXIN_DATASOURCE_HANDLER = {
      itemsChanged: function(dataSource, delta) {
        var newDelta = {};
        var deleted = [];
        if (delta.deleted) {
          newDelta.deleted = deleted;
          if (this.childNodes.length == delta.deleted.length) {
            deleted = arrayFrom(this.childNodes);
            for (var i = 0, child; child = deleted[i]; i++) unlockDataSourceItemNode(child);
            this.dataSourceMap_ = null;
            this.clear(true);
            this.dataSourceMap_ = {};
          } else {
            for (var i = 0, item; item = delta.deleted[i]; i++) {
              var delegateId = item.basisObjectId;
              var oldChild = this.dataSourceMap_[delegateId];
              unlockDataSourceItemNode(oldChild);
              delete this.dataSourceMap_[delegateId];
              this.removeChild(oldChild);
              deleted.push(oldChild);
            }
          }
        }
        if (delta.inserted) {
          newDelta.inserted = [];
          for (var i = 0, item; item = delta.inserted[i]; i++) {
            var newChild = createChildByFactory(this, {
              delegate: item
            });
            lockDataSourceItemNode(newChild);
            this.dataSourceMap_[item.basisObjectId] = newChild;
            newDelta.inserted.push(newChild);
            if (this.firstChild) this.insertBefore(newChild);
          }
        }
        if (!this.firstChild) this.setChildNodes(newDelta.inserted); else this.emit_childNodesModified(newDelta);
        if (this.destroyDataSourceMember && deleted.length) for (var i = 0, item; item = deleted[i]; i++) item.destroy();
      },
      stateChanged: function(dataSource) {
        this.setChildNodesState(dataSource.state, dataSource.state.data);
      },
      destroy: function() {
        if (!this.dataSourceRA_) this.setDataSource();
      }
    };
    function fastChildNodesOrder(node, order) {
      var lastIndex = order.length - 1;
      node.childNodes = order;
      node.firstChild = order[0] || null;
      node.lastChild = order[lastIndex] || null;
      for (var orderNode, i = lastIndex; orderNode = order[i]; i--) {
        orderNode.nextSibling = order[i + 1] || null;
        orderNode.previousSibling = order[i - 1] || null;
        node.insertBefore(orderNode, orderNode.nextSibling);
      }
    }
    function fastChildNodesGroupOrder(node, order) {
      for (var i = 0, child; child = order[i]; i++) child.groupNode.nodes.push(child);
      var groups = [ node.grouping.nullGroup ].concat(node.grouping.childNodes);
      var result = [];
      for (var i = 0, group; group = groups[i]; i++) {
        var nodes = group.nodes;
        group.first = nodes[0] || null;
        group.last = nodes[nodes.length - 1] || null;
        result.push.apply(result, nodes);
        group.emit_childNodesModified({
          inserted: nodes
        });
      }
      return result;
    }
    function createChildByFactory(node, config) {
      var child;
      if (typeof node.childFactory == "function") {
        child = node.childFactory(config);
        if (child instanceof node.childClass) {
          var info = basis.dev.getInfo(config);
          if (info) for (var key in info) basis.dev.setInfo(child, key, info[key]);
          return child;
        }
      }
      if (!child) throw EXCEPTION_NULL_CHILD;
      basis.dev.warn(EXCEPTION_BAD_CHILD_CLASS + " (expected " + (node.childClass && node.childClass.className) + " but " + (child && child.constructor && child.constructor.className) + ")");
      throw EXCEPTION_BAD_CHILD_CLASS;
    }
    var DomMixin = {
      childClass: AbstractNode,
      childFactory: null,
      listen: {
        dataSource: DOMMIXIN_DATASOURCE_HANDLER
      },
      getChild: function(value, getter) {
        return basis.array.search(this.childNodes, value, getter);
      },
      getChildByName: function(name) {
        return this.getChild(name, "name");
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild);
      },
      insertBefore: function(newChild, refChild) {
        if (!this.childClass) throw EXCEPTION_NO_CHILDCLASS;
        if (newChild.firstChild) {
          var cursor = this;
          while (cursor = cursor.parentNode) {
            if (cursor === newChild) throw EXCEPTION_CANT_INSERT;
          }
        }
        var isChildClassInstance = newChild && newChild instanceof this.childClass;
        if (this.dataSource) {
          if (!isChildClassInstance || !newChild.delegate || this.dataSourceMap_[newChild.delegate.basisObjectId] !== newChild) throw EXCEPTION_DATASOURCE_CONFLICT;
        } else {
          if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        }
        if (!isChildClassInstance) newChild = createChildByFactory(this, newChild instanceof DataObject ? {
          delegate: newChild
        } : newChild);
        if (newChild.owner) throw EXCEPTION_PARENTNODE_OWNER_CONFLICT;
        var isInside = newChild.parentNode === this;
        var childNodes = this.childNodes;
        var grouping = this.grouping;
        var groupNodes;
        var currentNewChildGroup = newChild.groupNode;
        var group = null;
        var sorting = this.sorting;
        var sortingDesc;
        var correctSortPos = false;
        var newChildValue;
        var pos = -1;
        var nextSibling;
        var prevSibling;
        if (isInside) {
          nextSibling = newChild.nextSibling;
          prevSibling = newChild.previousSibling;
        }
        if (sorting !== nullGetter) {
          refChild = null;
          sortingDesc = this.sortingDesc;
          newChildValue = sorting(newChild);
          if (newChildValue == null) newChildValue = -Infinity; else if (typeof newChildValue != "number" || newChildValue !== newChildValue) newChildValue = String(newChildValue);
          if (isInside) {
            if (newChildValue === newChild.sortingValue) {
              correctSortPos = true;
            } else {
              if (sortingDesc) {
                correctSortPos = (!nextSibling || typeof nextSibling.sortingValue <= typeof newChildValue && nextSibling.sortingValue <= newChildValue) && (!prevSibling || typeof prevSibling.sortingValue >= typeof newChildValue && prevSibling.sortingValue >= newChildValue);
              } else {
                correctSortPos = (!nextSibling || typeof nextSibling.sortingValue >= typeof newChildValue && nextSibling.sortingValue >= newChildValue) && (!prevSibling || typeof prevSibling.sortingValue <= typeof newChildValue && prevSibling.sortingValue <= newChildValue);
              }
              if (correctSortPos) newChild.sortingValue = newChildValue;
            }
          }
        }
        if (grouping) {
          var cursor;
          group = grouping.getGroupNode(newChild, true);
          groupNodes = group.nodes;
          if (currentNewChildGroup === group) if (correctSortPos || sorting === nullGetter && nextSibling === refChild) return newChild;
          if (sorting !== nullGetter) {
            if (currentNewChildGroup === group && correctSortPos) {
              if (nextSibling && nextSibling.groupNode === group) pos = groupNodes.indexOf(nextSibling); else pos = groupNodes.length;
            } else {
              pos = binarySearchPos(groupNodes, newChildValue, getSortingValue, sortingDesc);
              newChild.sortingValue = newChildValue;
            }
          } else {
            if (refChild && refChild.groupNode === group) pos = groupNodes.indexOf(refChild); else pos = groupNodes.length;
          }
          if (pos < groupNodes.length) {
            refChild = groupNodes[pos];
          } else {
            if (group.last) {
              refChild = group.last.nextSibling;
            } else {
              cursor = group;
              refChild = null;
              while (cursor = cursor.nextSibling) if (refChild = cursor.first) break;
            }
          }
          if (newChild === refChild || isInside && nextSibling === refChild) {
            if (currentNewChildGroup !== group) {
              if (currentNewChildGroup) currentNewChildGroup.remove(newChild);
              group.insert(newChild, refChild);
            }
            return newChild;
          }
          pos = -1;
        } else {
          if (sorting !== nullGetter) {
            if (correctSortPos) return newChild;
            pos = binarySearchPos(childNodes, newChildValue, getSortingValue, sortingDesc, this.lll);
            refChild = childNodes[pos];
            newChild.sortingValue = newChildValue;
            if (newChild === refChild || isInside && nextSibling === refChild) return newChild;
          } else {
            if (refChild && refChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
            if (isInside) {
              if (nextSibling === refChild) return newChild;
              if (newChild === refChild) throw EXCEPTION_CANT_INSERT;
            }
          }
        }
        if (isInside) {
          if (nextSibling) {
            nextSibling.previousSibling = prevSibling;
            newChild.nextSibling = null;
          } else this.lastChild = prevSibling;
          if (prevSibling) {
            prevSibling.nextSibling = nextSibling;
            newChild.previousSibling = null;
          } else this.firstChild = nextSibling;
          if (pos == -1) arrayRemove(childNodes, newChild); else {
            var oldPos = childNodes.indexOf(newChild);
            childNodes.splice(oldPos, 1);
            pos -= oldPos < pos;
          }
          if (currentNewChildGroup) {
            currentNewChildGroup.remove(newChild);
            currentNewChildGroup = null;
          }
        } else {
          if (newChild.parentNode) newChild.parentNode.removeChild(newChild);
        }
        if (currentNewChildGroup != group) group.insert(newChild, refChild);
        if (refChild) {
          if (pos == -1) pos = childNodes.indexOf(refChild);
          if (pos == -1) throw EXCEPTION_NODE_NOT_FOUND;
          newChild.nextSibling = refChild;
          childNodes.splice(pos, 0, newChild);
        } else {
          pos = childNodes.length;
          childNodes.push(newChild);
          refChild = {
            previousSibling: this.lastChild
          };
          this.lastChild = newChild;
        }
        newChild.parentNode = this;
        newChild.previousSibling = refChild.previousSibling;
        if (pos == 0) this.firstChild = newChild; else refChild.previousSibling.nextSibling = newChild;
        refChild.previousSibling = newChild;
        if (!isInside) {
          updateNodeContextSelection(newChild, newChild.contextSelection, this.selection || this.contextSelection, true);
          updateNodeDisableContext(newChild, this.disabled || this.contextDisabled);
          if ((newChild.underMatch_ || this.matchFunction) && newChild.match) newChild.match(this.matchFunction);
          if (newChild.autoDelegate == DELEGATE.PARENT || newChild.autoDelegate === DELEGATE.ANY) newChild.setDelegate(this);
          newChild.emit_parentChanged(null);
          if (!this.dataSource) this.emit_childNodesModified({
            inserted: [ newChild ]
          });
          if (newChild.listen.parentNode) this.addHandler(newChild.listen.parentNode, newChild);
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (!oldChild || oldChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
        if (oldChild instanceof this.childClass == false) throw EXCEPTION_BAD_CHILD_CLASS;
        if (this.dataSource) {
          if (!oldChild.delegate || this.dataSourceMap_[oldChild.delegate.basisObjectId]) throw EXCEPTION_DATASOURCE_CONFLICT;
        } else {
          if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        }
        var pos = this.childNodes.indexOf(oldChild);
        if (pos == -1) throw EXCEPTION_NODE_NOT_FOUND;
        this.childNodes.splice(pos, 1);
        oldChild.parentNode = null;
        if (oldChild.nextSibling) oldChild.nextSibling.previousSibling = oldChild.previousSibling; else this.lastChild = oldChild.previousSibling;
        if (oldChild.previousSibling) oldChild.previousSibling.nextSibling = oldChild.nextSibling; else this.firstChild = oldChild.nextSibling;
        oldChild.nextSibling = null;
        oldChild.previousSibling = null;
        if (oldChild.listen.parentNode) this.removeHandler(oldChild.listen.parentNode, oldChild);
        updateNodeContextSelection(oldChild, oldChild.contextSelection, null, true);
        if (oldChild.groupNode) oldChild.groupNode.remove(oldChild);
        oldChild.emit_parentChanged(this);
        if (!this.dataSource) this.emit_childNodesModified({
          deleted: [ oldChild ]
        });
        if (oldChild.autoDelegate == DELEGATE.PARENT || oldChild.autoDelegate === DELEGATE.ANY) oldChild.setDelegate();
        return oldChild;
      },
      replaceChild: function(newChild, oldChild) {
        if (this.dataSource) throw EXCEPTION_DATASOURCE_CONFLICT;
        if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        if (oldChild == null || oldChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
        this.insertBefore(newChild, oldChild);
        return this.removeChild(oldChild);
      },
      clear: function(alive) {
        if (this.dataSource && this.dataSourceMap_ && this.dataSource.itemCount) throw EXCEPTION_DATASOURCE_CONFLICT;
        if (!this.firstChild) return;
        if (alive) updateNodeContextSelection(this, this.selection || this.contextSelection, null, false, true);
        var childNodes = this.childNodes;
        this.firstChild = null;
        this.lastChild = null;
        this.childNodes = [];
        this.emit_childNodesModified({
          deleted: childNodes
        });
        for (var i = childNodes.length; i-- > 0; ) {
          var child = childNodes[i];
          if (child.listen.parentNode) child.parentNode.removeHandler(child.listen.parentNode, child);
          child.parentNode = null;
          child.groupNode = null;
          if (alive) {
            child.nextSibling = null;
            child.previousSibling = null;
            child.emit_parentChanged(this);
            if (child.autoDelegate == DELEGATE.PARENT || child.autoDelegate === DELEGATE.ANY) child.setDelegate();
          } else child.destroy();
        }
        if (this.grouping) {
          for (var childNodes = this.grouping.childNodes, i = childNodes.length - 1, group; group = childNodes[i]; i--) group.clear();
        }
      },
      setChildNodes: function(newChildNodes, keepAlive) {
        if (!this.dataSource && !this.dataSourceRA_) this.clear(keepAlive);
        if (newChildNodes) {
          if ("length" in newChildNodes == false) newChildNodes = [ newChildNodes ];
          if (newChildNodes.length) {
            var tmp = this.emit_childNodesModified;
            this.emit_childNodesModified = $undef;
            for (var i = 0, len = newChildNodes.length; i < len; i++) this.insertBefore(newChildNodes[i]);
            this.emit_childNodesModified = tmp;
            this.emit_childNodesModified({
              inserted: this.childNodes
            });
          }
        }
      },
      setDataSource: function(dataSource) {
        if (!this.childClass) throw EXCEPTION_NO_CHILDCLASS;
        dataSource = resolveDataset(this, this.setDataSource, dataSource, "dataSourceRA_");
        if (this.dataSource !== dataSource) {
          var oldDataSource = this.dataSource;
          var dataSourceMap = this.dataSourceMap_ || {};
          var listenHandler = this.listen.dataSource;
          var inserted;
          var deleted;
          if (oldDataSource) {
            if (listenHandler) oldDataSource.removeHandler(listenHandler, this);
            if (dataSource) {
              inserted = dataSource.getItems().filter(function(item) {
                return !oldDataSource.has(item);
              });
              deleted = oldDataSource.getItems().filter(function(item) {
                return !dataSource.has(item);
              });
            } else {
              deleted = oldDataSource.getItems();
            }
          } else {
            if (dataSource) inserted = dataSource.getItems();
          }
          if (!oldDataSource || !dataSource) {
            if (this.firstChild) {
              if (oldDataSource) for (var i = 0, child; child = this.childNodes[i]; i++) unlockDataSourceItemNode(child);
              this.dataSource = null;
              this.clear(oldDataSource && !this.destroyDataSourceMember);
            }
          } else {
            if (oldDataSource && deleted.length && listenHandler) listenHandler.itemsChanged.call(this, oldDataSource, {
              deleted: deleted
            });
          }
          this.dataSource = dataSource;
          if (dataSource) {
            this.dataSourceMap_ = dataSourceMap;
            this.setChildNodesState(dataSource.state, dataSource.state.data);
            if (listenHandler) {
              dataSource.addHandler(listenHandler, this);
              if (inserted.length) listenHandler.itemsChanged.call(this, dataSource, {
                inserted: inserted
              });
            }
          } else {
            this.dataSourceMap_ = null;
            this.setChildNodesState(STATE.UNDEFINED);
          }
          this.emit_dataSourceChanged(oldDataSource);
        }
      },
      setGrouping: function(grouping, alive) {
        if (typeof grouping == "function" || typeof grouping == "string") grouping = {
          rule: grouping
        };
        if (grouping instanceof GroupingNode == false) {
          grouping = grouping && typeof grouping == "object" ? new this.groupingClass(grouping) : null;
        }
        if (this.grouping !== grouping) {
          var oldGrouping = this.grouping;
          var order;
          if (oldGrouping) {
            this.grouping = null;
            if (!grouping) {
              if (this.firstChild) {
                if (this.sorting !== nullGetter) order = sortChildNodes(this); else order = this.childNodes;
                oldGrouping.nullGroup.clear();
                var groups = oldGrouping.childNodes.slice(0);
                for (var i = 0; i < groups.length; i++) groups[i].clear();
                fastChildNodesOrder(this, order);
              }
            }
            oldGrouping.setOwner();
          }
          if (grouping) {
            this.grouping = grouping;
            grouping.setOwner(this);
            if (this.firstChild) {
              if (this.sorting !== nullGetter) order = sortChildNodes(this); else order = this.childNodes;
              for (var i = 0, child; child = order[i]; i++) child.groupNode = this.grouping.getGroupNode(child, true);
              order = fastChildNodesGroupOrder(this, order);
              fastChildNodesOrder(this, order);
            }
          }
          this.emit_groupingChanged(oldGrouping);
          if (oldGrouping && !alive) oldGrouping.destroy();
        }
      },
      setSorting: function(sorting, sortingDesc) {
        sorting = getter(sorting);
        sortingDesc = !!sortingDesc;
        if (this.sorting !== sorting || this.sortingDesc != !!sortingDesc) {
          var oldSorting = this.sorting;
          var oldSortingDesc = this.sortingDesc;
          this.sorting = sorting;
          this.sortingDesc = !!sortingDesc;
          if (sorting !== nullGetter && this.firstChild) {
            var order = [];
            var nodes;
            for (var node = this.firstChild; node; node = node.nextSibling) {
              var newChildValue = sorting(node);
              if (newChildValue == null) newChildValue = -Infinity; else if (typeof newChildValue != "number" || newChildValue !== newChildValue) newChildValue = String(newChildValue);
              node.sortingValue = newChildValue;
            }
            if (this.grouping) {
              var groups = [ this.grouping.nullGroup ].concat(this.grouping.childNodes);
              for (var i = 0, group; group = groups[i]; i++) {
                nodes = group.nodes = sortChildNodes({
                  childNodes: group.nodes,
                  sortingDesc: this.sortingDesc
                });
                group.first = nodes[0] || null;
                group.last = nodes[nodes.length - 1] || null;
                order.push.apply(order, nodes);
              }
            } else {
              order = sortChildNodes(this);
            }
            fastChildNodesOrder(this, order);
          }
          this.emit_sortingChanged(oldSorting, oldSortingDesc);
        }
      },
      setMatchFunction: function(matchFunction) {
        if (this.matchFunction != matchFunction) {
          var oldMatchFunction = this.matchFunction;
          this.matchFunction = matchFunction;
          for (var node = this.lastChild; node; node = node.previousSibling) node.match(matchFunction);
          this.emit_matchFunctionChanged(oldMatchFunction);
        }
      }
    };
    var Node = Class(AbstractNode, DomMixin, {
      className: namespace + ".Node",
      propertyDescriptors: {
        disabled: "disable enable",
        contextDisabled: false,
        selected: "select unselect",
        contextSelection: false,
        selection: "selectionChanged",
        matched: "match unmatch",
        matchFunction: "matchFunctionChanged"
      },
      emit_satelliteChanged: function(name, oldSatellite) {
        AbstractNode.prototype.emit_satelliteChanged.call(this, name, oldSatellite);
        if (this.satellite[name] instanceof Node) updateNodeDisableContext(this.satellite[name], this.disabled || this.contextDisabled);
      },
      contextDisabled: false,
      disabled: false,
      disabledRA_: null,
      emit_enable: createEvent("enable") && function() {
        for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, false);
        events.enable.call(this);
      },
      emit_disable: createEvent("disable") && function() {
        for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, true);
        events.disable.call(this);
      },
      selection: null,
      emit_selectionChanged: createEvent("selectionChanged", "oldSelection"),
      contextSelection: null,
      selected: false,
      selectedRA_: null,
      emit_select: createEvent("select"),
      emit_unselect: createEvent("unselect"),
      matched: true,
      emit_match: createEvent("match"),
      emit_unmatch: createEvent("unmatch"),
      matchFunction: null,
      emit_matchFunctionChanged: createEvent("matchFunctionChanged", "oldMatchFunction"),
      listen: {
        owner: {
          enable: function() {
            updateNodeDisableContext(this, false);
          },
          disable: function() {
            updateNodeDisableContext(this, true);
          }
        },
        selection: {
          destroy: function() {
            this.setSelection();
          }
        }
      },
      init: function() {
        var disabled = this.disabled;
        this.disabled = false;
        var selection = this.selection;
        if (selection) {
          this.selection = null;
          this.setSelection(selection, true);
        }
        AbstractNode.prototype.init.call(this);
        if (disabled) {
          disabled = !!resolveValue(this, this.setDisabled, disabled, "disabledRA_");
          if (disabled) {
            this.disabled = disabled;
            for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, true);
          }
        }
        if (this.selected) this.selected = !!resolveValue(this, this.setSelected, this.selected, "selectedRA_");
      },
      setSelection: function(selection, silent) {
        var oldSelection = this.selection;
        if (selection instanceof Selection === false) selection = selection ? new Selection(selection) : null;
        if (oldSelection !== selection) {
          updateNodeContextSelection(this, oldSelection || this.contextSelection, selection || this.contextSelection, false, true);
          if (this.listen.selection) {
            if (oldSelection) oldSelection.removeHandler(this.listen.selection, this);
            if (selection) selection.addHandler(this.listen.selection, this);
          }
          this.selection = selection;
          if (!silent) this.emit_selectionChanged(oldSelection);
          return true;
        }
      },
      setSelected: function(selected, multiple) {
        var selection = this.contextSelection;
        selected = !!resolveValue(this, this.setSelected, selected, "selectedRA_");
        if (this.selected && selection) {
          if (this.selectedRA_) {
            if (selection.has(this)) {
              this.selected = false;
              selection.remove(this);
              this.selected = true;
            }
          } else {
            if (!selection.has(this)) selection.add(this);
          }
        }
        if (selected !== this.selected) {
          if (this.selectedRA_) {
            this.selected = selected;
            if (selected) this.emit_select(); else this.emit_unselect();
          } else {
            if (selected) {
              if (selection) {
                if (multiple) selection.add(this); else selection.set(this);
              } else {
                this.selected = true;
                this.emit_select();
              }
            } else {
              if (selection) {
                selection.remove(this);
              } else {
                this.selected = false;
                this.emit_unselect();
              }
            }
          }
          return true;
        } else {
          if (!this.selectedRA_ && selected && selection) {
            if (multiple) selection.remove(this); else selection.set(this);
          }
        }
        return false;
      },
      select: function(multiple) {
        if (this.selectedRA_) {
          basis.dev.warn("`selected` property is under bb-value and can't be changed by `select()` method. Use `setSelected()` instead.");
          return false;
        }
        return this.setSelected(true, multiple);
      },
      unselect: function() {
        if (this.selectedRA_) {
          basis.dev.warn("`selected` property is under bb-value and can't be changed by `unselect()` method. Use `setSelected()` instead.");
          return false;
        }
        return this.setSelected(false);
      },
      setDisabled: function(disabled) {
        disabled = !!resolveValue(this, this.setDisabled, disabled, "disabledRA_");
        if (this.disabled !== disabled) {
          this.disabled = disabled;
          if (!this.contextDisabled) if (disabled) this.emit_disable(); else this.emit_enable();
          return true;
        }
        return false;
      },
      disable: function() {
        if (this.disabledRA_) {
          basis.dev.warn("`disabled` property is under bb-value and can't be changed by `disable()` method. Use `setDisabled()` instead.");
          return false;
        }
        return this.setDisabled(true);
      },
      enable: function() {
        if (this.disabledRA_) {
          basis.dev.warn("`disabled` property is under bb-value and can't be changed by `enable()` method. Use `setDisabled()` instead.");
          return false;
        }
        return this.setDisabled(false);
      },
      isDisabled: function() {
        return this.disabled || this.contextDisabled;
      },
      match: function(func) {
        if (typeof func != "function") func = null;
        if (this.underMatch_ && !func) this.underMatch_(this, true);
        this.underMatch_ = func;
        var matched = !func || func(this);
        if (this.matched != matched) {
          this.matched = matched;
          if (matched) this.emit_match(); else this.emit_unmatch();
        }
      },
      destroy: function() {
        if (this.disabledRA_) resolveValue(this, null, null, "disabledRA_");
        if (this.selectedRA_) resolveValue(this, null, null, "selectedRA_");
        this.contextSelection = null;
        if (this.selection) this.setSelection();
        AbstractNode.prototype.destroy.call(this);
      }
    });
    var GroupingNode = Class(AbstractNode, DomMixin, {
      className: namespace + ".GroupingNode",
      emit_childNodesModified: function(delta) {
        events.childNodesModified.call(this, delta);
        var array;
        if (array = delta.inserted) {
          for (var i = 0, child; child = array[i++]; ) {
            child.groupId_ = child.delegate ? child.delegate.basisObjectId : child.data.id;
            this.map_[child.groupId_] = child;
          }
          if (this.dataSource && this.nullGroup.first) {
            var parentNode = this.owner;
            var nodes = arrayFrom(this.nullGroup.nodes);
            for (var i = nodes.length; i-- > 0; ) parentNode.insertBefore(nodes[i], nodes[i].nextSibling);
          }
        }
      },
      emit_ownerChanged: function(oldOwner) {
        if (oldOwner && oldOwner.grouping === this) oldOwner.setGrouping(null, true);
        if (this.owner && this.owner.grouping !== this) this.owner.setGrouping(this);
        events.ownerChanged.call(this, oldOwner);
        if (!this.owner && this.autoDestroyWithNoOwner) this.destroy();
      },
      map_: null,
      nullGroup: null,
      autoDestroyWithNoOwner: true,
      autoDestroyEmptyGroups: true,
      rule: nullGetter,
      childClass: PartitionNode,
      childFactory: function(config) {
        return new this.childClass(complete({
          autoDestroyIfEmpty: this.dataSource ? false : this.autoDestroyEmptyGroups
        }, config));
      },
      init: function() {
        this.map_ = {};
        this.nullGroup = new PartitionNode;
        AbstractNode.prototype.init.call(this);
      },
      getGroupNode: function(node, autocreate) {
        var groupRef = this.rule(node);
        var isDelegate = groupRef instanceof DataObject;
        var group = this.map_[isDelegate ? groupRef.basisObjectId : groupRef];
        if (this.dataSource) autocreate = false;
        if (!group && autocreate) {
          group = this.appendChild(isDelegate ? groupRef : {
            data: {
              id: groupRef,
              title: groupRef
            }
          });
        }
        return group || this.nullGroup;
      },
      setDataSource: function(dataSource) {
        var curDataSource = this.dataSource;
        DomMixin.setDataSource.call(this, dataSource);
        var owner = this.owner;
        if (owner && this.dataSource !== curDataSource) {
          var nodes = arrayFrom(owner.childNodes);
          for (var i = nodes.length - 1; i >= 0; i--) owner.insertBefore(nodes[i], nodes[i + 1]);
        }
      },
      insertBefore: function(newChild, refChild) {
        newChild = DomMixin.insertBefore.call(this, newChild, refChild);
        var firstNode = newChild.first;
        if (firstNode) {
          var parent = firstNode.parentNode;
          var lastNode = newChild.last;
          var beforePrev;
          var beforeNext;
          var afterPrev;
          var afterNext = null;
          var cursor = newChild;
          while (cursor = cursor.nextSibling) {
            if (afterNext = cursor.first) break;
          }
          afterPrev = afterNext ? afterNext.previousSibling : parent.lastChild;
          beforePrev = firstNode.previousSibling;
          beforeNext = lastNode.nextSibling;
          if (beforeNext !== afterNext) {
            var parentChildNodes = parent.childNodes;
            var nodes = newChild.nodes;
            var nodesCount = nodes.length;
            if (beforePrev) beforePrev.nextSibling = beforeNext;
            if (beforeNext) beforeNext.previousSibling = beforePrev;
            if (afterPrev) afterPrev.nextSibling = firstNode;
            if (afterNext) afterNext.previousSibling = lastNode;
            firstNode.previousSibling = afterPrev;
            lastNode.nextSibling = afterNext;
            var firstPos = parentChildNodes.indexOf(firstNode);
            var afterNextPos = afterNext ? parentChildNodes.indexOf(afterNext) : parentChildNodes.length;
            if (afterNextPos > firstPos) afterNextPos -= nodesCount;
            parentChildNodes.splice(firstPos, nodesCount);
            parentChildNodes.splice.apply(parentChildNodes, [ afterNextPos, 0 ].concat(nodes));
            if (!afterPrev || !beforePrev) parent.firstChild = parentChildNodes[0];
            if (!afterNext || !beforeNext) parent.lastChild = parentChildNodes[parentChildNodes.length - 1];
            if (firstNode instanceof PartitionNode) for (var i = nodesCount, insertBefore = afterNext; i-- > 0; ) {
              parent.insertBefore(nodes[i], insertBefore);
              insertBefore = nodes[i];
            }
          }
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (oldChild = DomMixin.removeChild.call(this, oldChild)) {
          delete this.map_[oldChild.groupId_];
          for (var i = 0, node; node = oldChild.nodes[i]; i++) node.parentNode.insertBefore(node);
        }
        return oldChild;
      },
      clear: function(alive) {
        var nodes = [];
        var getGroupNode = this.getGroupNode;
        var nullGroup = this.nullGroup;
        this.getGroupNode = function() {
          return nullGroup;
        };
        for (var group = this.firstChild; group; group = group.nextSibling) nodes.push.apply(nodes, group.nodes);
        for (var i = 0, child; child = nodes[i]; i++) child.parentNode.insertBefore(child);
        this.getGroupNode = getGroupNode;
        DomMixin.clear.call(this, alive);
        this.map_ = {};
      },
      destroy: function() {
        this.autoDestroyWithNoOwner = false;
        AbstractNode.prototype.destroy.call(this);
        this.nullGroup.destroy();
        this.nullGroup = null;
        this.map_ = null;
      }
    });
    AbstractNode.prototype.groupingClass = GroupingNode;
    var CHILDNODESDATASET_HANDLER = {
      childNodesModified: function(sender, delta) {
        var memberMap = this.members_;
        var newDelta = {};
        var node;
        var insertCount = 0;
        var deleteCount = 0;
        var inserted = delta.inserted;
        var deleted = delta.deleted;
        if (inserted && inserted.length) {
          newDelta.inserted = inserted;
          while (node = inserted[insertCount]) {
            memberMap[node.basisObjectId] = node;
            insertCount++;
          }
        }
        if (deleted && deleted.length) {
          newDelta.deleted = deleted;
          while (node = deleted[deleteCount]) {
            delete memberMap[node.basisObjectId];
            deleteCount++;
          }
        }
        if (insertCount || deleteCount) this.emit_itemsChanged(newDelta);
      },
      destroy: function() {
        this.destroy();
      }
    };
    var ChildNodesDataset = Class(ReadOnlyDataset, {
      className: namespace + ".ChildNodesDataset",
      sourceNode: null,
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var sourceNode = this.sourceNode;
        childNodesDatasetMap[sourceNode.basisObjectId] = this;
        if (sourceNode.firstChild) CHILDNODESDATASET_HANDLER.childNodesModified.call(this, sourceNode, {
          inserted: sourceNode.childNodes
        });
        sourceNode.addHandler(CHILDNODESDATASET_HANDLER, this);
      },
      destroy: function() {
        this.sourceNode.removeHandler(CHILDNODESDATASET_HANDLER, this);
        delete childNodesDatasetMap[this.sourceNode.basisObjectId];
        ReadOnlyDataset.prototype.destroy.call(this);
      }
    });
    var Selection = Class(Dataset, {
      className: namespace + ".Selection",
      multiple: false,
      emit_itemsChanged: function(delta) {
        var array;
        Dataset.prototype.emit_itemsChanged.call(this, delta);
        if (array = delta.deleted) for (var i = 0, node; node = array[i]; i++) {
          if (node.selected && node.contextSelection === this) {
            node.selected = false;
            node.emit_unselect();
          }
        }
        if (array = delta.inserted) for (var i = 0, node; node = array[i]; i++) {
          if (!node.selected && node.contextSelection === this) {
            node.selected = true;
            node.emit_select();
          }
        }
      },
      add: function(nodes) {
        if (!nodes) return;
        if (!this.multiple && this.itemCount) return this.set(nodes);
        if (!Array.isArray(nodes)) nodes = [ nodes ];
        nodes = nodes.filter(this.filter, this);
        if (!this.multiple && nodes.length > 1) {
          basis.dev.warn(namespace + ".Selection#add() can't accept more than one node as not in multiple mode");
          nodes = [ nodes[0] ];
        }
        if (nodes.length) return Dataset.prototype.add.call(this, nodes);
      },
      set: function(nodes) {
        if (!nodes) return this.clear();
        if (!Array.isArray(nodes)) nodes = [ nodes ];
        nodes = nodes.filter(this.filter, this);
        if (!this.multiple && nodes.length > 1) {
          basis.dev.warn(namespace + ".Selection#set() can't accept more than one node as not in multiple mode");
          nodes = [ nodes[0] ];
        }
        if (nodes.length) return Dataset.prototype.set.call(this, nodes); else return this.clear();
      },
      filter: function(node) {
        return node instanceof Node && !node.selectedRA_ && node.contextSelection === this;
      }
    });
    module.exports = {
      DELEGATE: DELEGATE,
      AbstractNode: AbstractNode,
      Node: Node,
      GroupingNode: GroupingNode,
      PartitionNode: PartitionNode,
      ChildNodesDataset: ChildNodesDataset,
      Selection: Selection,
      nullSelection: new ReadOnlyDataset
    };
  },
  "j.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var cleaner = basis.cleaner;
    var eventUtils = basis.require("./2.js");
    var addGlobalHandler = eventUtils.addGlobalHandler;
    var removeGlobalHandler = eventUtils.removeGlobalHandler;
    var basisEvent = basis.require("./7.js");
    var Emitter = basisEvent.Emitter;
    var createEvent = basisEvent.create;
    var getComputedStyle = basis.require("./k.js").get;
    var basisLayout = basis.require("./l.js");
    var getBoundingRect = basisLayout.getBoundingRect;
    var getViewportRect = basisLayout.getViewportRect;
    var SELECTSTART_SUPPORTED = eventUtils.getEventInfo("selectstart").supported;
    var dragging;
    var dragElement;
    var dragData;
    function resolveElement(value) {
      return typeof value == "string" ? document.getElementById(value) : value;
    }
    function startDrag(event) {
      if (dragElement || this.ignoreTarget(event.sender, event)) return;
      var viewport = getViewportRect(event.sender);
      if (event.mouseX < viewport.left || event.mouseX > viewport.right || event.mouseY < viewport.top || event.mouseY > viewport.bottom) return;
      dragElement = this;
      dragData = {
        initX: event.mouseX,
        initY: event.mouseY,
        deltaX: 0,
        minDeltaX: -Infinity,
        maxDeltaX: Infinity,
        deltaY: 0,
        minDeltaY: -Infinity,
        maxDeltaY: Infinity
      };
      addGlobalHandler("mousedown", stopDrag);
      addGlobalHandler("touchstart", stopDrag);
      addGlobalHandler("mousemove", onDrag);
      addGlobalHandler("touchmove", onDrag);
      addGlobalHandler("mouseup", stopDrag);
      addGlobalHandler("touchend", stopDrag);
      if (SELECTSTART_SUPPORTED) addGlobalHandler("selectstart", eventUtils.kill);
      event.preventDefault();
      this.prepareDrag(dragData, event);
    }
    function onDrag(event) {
      var deltaX = event.mouseX - dragData.initX;
      var deltaY = event.mouseY - dragData.initY;
      if (!dragging) {
        if (!dragElement.startRule(deltaX, deltaY)) return;
        dragging = true;
        dragElement.emit_start(dragData, event);
      }
      if (dragElement.axisX) dragData.deltaX = dragElement.axisXproxy(basis.number.fit(deltaX, dragData.minDeltaX, dragData.maxDeltaX));
      if (dragElement.axisY) dragData.deltaY = dragElement.axisYproxy(basis.number.fit(deltaY, dragData.minDeltaY, dragData.maxDeltaY));
      dragElement.emit_drag(dragData, event);
    }
    function stopDrag(event) {
      removeGlobalHandler("mousedown", stopDrag);
      removeGlobalHandler("touchstart", stopDrag);
      removeGlobalHandler("mousemove", onDrag);
      removeGlobalHandler("touchmove", onDrag);
      removeGlobalHandler("mouseup", stopDrag);
      removeGlobalHandler("touchend", stopDrag);
      if (SELECTSTART_SUPPORTED) removeGlobalHandler("selectstart", eventUtils.kill);
      var element = dragElement;
      var data = dragData;
      dragElement = null;
      dragData = null;
      if (dragging) {
        dragging = false;
        element.emit_over(data, event);
      }
      event.die();
    }
    var DragDropElement = Emitter.subclass({
      className: namespace + ".DragDropElement",
      element: null,
      trigger: null,
      baseElement: null,
      axisX: true,
      axisY: true,
      axisXproxy: basis.fn.$self,
      axisYproxy: basis.fn.$self,
      prepareDrag: basis.fn.$undef,
      startRule: basis.fn.$true,
      ignoreTarget: function(target) {
        return /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(target.tagName);
      },
      emit_start: createEvent("start"),
      emit_drag: createEvent("drag"),
      emit_over: createEvent("over"),
      init: function() {
        Emitter.prototype.init.call(this);
        var element = this.element;
        var trigger = this.trigger;
        this.element = null;
        this.trigger = null;
        this.setElement(element, trigger);
        this.setBase(this.baseElement);
        cleaner.add(this);
      },
      setElement: function(element, trigger) {
        this.element = resolveElement(element);
        trigger = resolveElement(trigger) || this.element;
        if (this.trigger !== trigger) {
          if (this.trigger) {
            eventUtils.removeHandler(this.trigger, "mousedown", startDrag, this);
            eventUtils.removeHandler(this.trigger, "touchstart", startDrag, this);
          }
          this.trigger = trigger;
          if (this.trigger) {
            eventUtils.addHandler(this.trigger, "mousedown", startDrag, this);
            eventUtils.addHandler(this.trigger, "touchstart", startDrag, this);
          }
        }
      },
      setBase: function(baseElement) {
        this.baseElement = resolveElement(baseElement);
      },
      getBase: function() {
        if (getComputedStyle(this.element, "position") == "fixed") return global;
        if (this.baseElement) return this.baseElement;
        return document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
      },
      isDragging: function() {
        return dragElement === this;
      },
      start: function(event) {
        if (!this.isDragging()) startDrag.call(this, event);
      },
      stop: function() {
        if (this.isDragging()) stopDrag();
      },
      destroy: function() {
        this.stop();
        cleaner.remove(this);
        Emitter.prototype.destroy.call(this);
        this.setElement();
        this.setBase();
      }
    });
    var DeltaWriter = basis.Class(null, {
      className: namespace + ".DeltaWriter",
      property: null,
      invert: false,
      format: basis.fn.$self,
      init: function(element) {
        if (typeof this.property == "function") this.property = this.property(element);
        if (typeof this.invert == "function") this.invert = this.invert(this.property);
        this.value = this.read(element);
      },
      read: function(element) {
        return element[this.property];
      },
      write: function(element, formattedValue) {
        element[this.property] = formattedValue;
      },
      applyDelta: function(element, delta) {
        if (this.invert) delta = -delta;
        this.write(element, this.format(this.value + delta, delta));
      }
    });
    var StyleDeltaWriter = DeltaWriter.subclass({
      className: namespace + ".StyleDeltaWriter",
      format: function(value) {
        return value + "px";
      },
      read: function(element) {
        return parseFloat(getComputedStyle(element, this.property)) || 0;
      },
      write: function(element, formattedValue) {
        element.style[this.property] = formattedValue;
      }
    });
    var StylePositionX = StyleDeltaWriter.subclass({
      className: namespace + ".StylePositionX",
      property: function(element) {
        return getComputedStyle(element, "left") == "auto" && getComputedStyle(element, "right") != "auto" ? "right" : "left";
      },
      invert: function(property) {
        return property == "right";
      }
    });
    var StylePositionY = StyleDeltaWriter.subclass({
      className: namespace + ".StylePositionY",
      property: function(element) {
        return getComputedStyle(element, "top") == "auto" && getComputedStyle(element, "bottom") != "auto" ? "bottom" : "top";
      },
      invert: function(property) {
        return property == "bottom";
      }
    });
    var MoveableElement = DragDropElement.subclass({
      className: namespace + ".MoveableElement",
      fixTop: true,
      fixRight: true,
      fixBottom: true,
      fixLeft: true,
      axisX: StylePositionX,
      axisY: StylePositionY,
      emit_start: function(dragData, event) {
        var element = this.element;
        if (element) {
          var viewport = getViewportRect(this.getBase());
          var box = getBoundingRect(element, this.getBase());
          dragData.element = element;
          if (this.axisX) {
            dragData.axisX = new this.axisX(element);
            if (this.fixLeft) dragData.minDeltaX = viewport.left - box.left;
            if (this.fixRight) dragData.maxDeltaX = viewport.right - box.right;
          }
          if (this.axisY) {
            dragData.axisY = new this.axisY(element);
            if (this.fixTop) dragData.minDeltaY = viewport.top - box.top;
            if (this.fixBottom) dragData.maxDeltaY = viewport.bottom - box.bottom;
          }
        }
        DragDropElement.prototype.emit_start.call(this, dragData, event);
      },
      emit_drag: function(dragData, event) {
        if (!dragData.element) return;
        if (dragData.axisX) dragData.axisX.applyDelta(dragData.element, dragData.deltaX);
        if (dragData.axisY) dragData.axisY.applyDelta(dragData.element, dragData.deltaY);
        DragDropElement.prototype.emit_drag.call(this, dragData, event);
      }
    });
    module.exports = {
      DragDropElement: DragDropElement,
      MoveableElement: MoveableElement,
      DeltaWriter: DeltaWriter,
      StyleDeltaWriter: StyleDeltaWriter
    };
  },
  "k.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var document = global.document;
    var computedStyle;
    if ("getComputedStyle" in global) {
      var GETCOMPUTEDSTYLE_BUGGY = {
        top: true,
        bottom: true,
        left: true,
        right: true,
        height: true,
        width: true
      };
      var testForBuggyProperties = basis.fn.runOnce(function() {
        var testElement = document.createElement("div");
        testElement.setAttribute("style", "position:absolute;top:auto!important");
        basis.doc.body.add(testElement);
        if (global.getComputedStyle(testElement).top == "auto") GETCOMPUTEDSTYLE_BUGGY = {};
        basis.doc.remove(testElement);
      });
      computedStyle = function(element, styleProp) {
        var style = global.getComputedStyle(element);
        var res;
        if (style) {
          if (styleProp in GETCOMPUTEDSTYLE_BUGGY) testForBuggyProperties();
          if (GETCOMPUTEDSTYLE_BUGGY[styleProp] && style.position != "static") {
            var display = element.style.display;
            element.style.display = "none";
            res = style.getPropertyValue(styleProp);
            element.style.display = display;
          } else {
            res = style.getPropertyValue(styleProp);
          }
          return res;
        }
      };
    } else {
      var VALUE_UNIT = /^-?(\d*\.)?\d+([a-z]+|%)?$/i;
      var IS_PIXEL = /\dpx$/i;
      var getPixelValue = function(element, value) {
        if (IS_PIXEL.test(value)) return parseInt(value, 10) + "px";
        var style = element.style;
        var runtimeStyle = element.runtimeStyle;
        var left = style.left;
        var runtimeLeft = runtimeStyle.left;
        runtimeStyle.left = element.currentStyle.left;
        style.left = value || 0;
        value = style.pixelLeft;
        style.left = left;
        runtimeStyle.left = runtimeLeft;
        return value + "px";
      };
      computedStyle = function(element, styleProp) {
        var style = element.currentStyle;
        if (style) {
          var value = style[styleProp == "float" ? "styleFloat" : basis.string.camelize(styleProp)];
          var unit = (value || "").match(VALUE_UNIT);
          if (unit && unit[2] && unit[2] != "px") value = getPixelValue(element, value);
          return value;
        }
      };
    }
    module.exports = {
      get: computedStyle
    };
  },
  "l.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var document = global.document;
    var documentElement = document.documentElement;
    var getComputedStyle = basis.require("./k.js").get;
    var standartsMode = document.compatMode == "CSS1Compat";
    function getOffsetParent(node) {
      var offsetParent = node.offsetParent || documentElement;
      while (offsetParent && offsetParent !== documentElement && getComputedStyle(offsetParent, "position") == "static") offsetParent = offsetParent.offsetParent;
      return offsetParent || documentElement;
    }
    function getOffset(element) {
      var top = 0;
      var left = 0;
      if (element && element.getBoundingClientRect) {
        var relRect = element.getBoundingClientRect();
        top = -relRect.top;
        left = -relRect.left;
      } else {
        if (standartsMode) {
          top = global.pageYOffset || documentElement.scrollTop;
          left = global.pageXOffset || documentElement.scrollLeft;
        } else {
          var body = document.body;
          if (element !== body) {
            top = body.scrollTop - body.clientTop;
            left = body.scrollLeft - body.clientLeft;
          }
        }
      }
      return {
        left: left,
        top: top
      };
    }
    function getTopLeftPoint(element, relElement) {
      var left = 0;
      var top = 0;
      var offset = getOffset(relElement);
      if (element && element.getBoundingClientRect) {
        var box = element.getBoundingClientRect();
        top = box.top;
        left = box.left;
      }
      return {
        top: top + offset.top,
        left: left + offset.left
      };
    }
    function getBoundingRect(element, relElement) {
      var top = 0;
      var left = 0;
      var right = 0;
      var bottom = 0;
      var offset = getOffset(relElement);
      if (element && element.getBoundingClientRect) {
        var rect = element.getBoundingClientRect();
        top = rect.top;
        left = rect.left;
        right = rect.right;
        bottom = rect.bottom;
      }
      return {
        top: top + offset.top,
        left: left + offset.left,
        right: right + offset.left,
        bottom: bottom + offset.top,
        width: right - left,
        height: bottom - top
      };
    }
    function getViewportRect(element, relElement) {
      var topViewport = standartsMode ? document.documentElement : document.body;
      var point = element === topViewport && !relElement ? getOffset() : getTopLeftPoint(element, relElement);
      var top = point.top;
      var left = point.left;
      var width;
      var height;
      if (!element || element === global) {
        width = global.innerWidth || 0;
        height = global.innerHeight || 0;
      } else {
        top += element.clientTop;
        left += element.clientLeft;
        width = element.clientWidth;
        height = element.clientHeight;
      }
      return {
        top: top,
        left: left,
        right: left + width,
        bottom: top + height,
        width: width,
        height: height
      };
    }
    module.exports = {
      getOffset: getOffset,
      getOffsetParent: getOffsetParent,
      getTopLeftPoint: getTopLeftPoint,
      getBoundingRect: getBoundingRect,
      getViewportRect: getViewportRect
    };
  },
  "y.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var domUtils = basis.require("./m.js");
    var domEventUtils = basis.require("./2.js");
    var setStyle = basis.require("./n.js").setStyle;
    var getBoundingRect = basis.require("./l.js").getBoundingRect;
    var Value = basis.require("./3.js").Value;
    var Balloon = basis.require("./o.js").Balloon;
    var fileAPI = basis.require("./z.js");
    var componentBoundMarker = "__view";
    var document = global.document;
    var templateInfo = basis.resource("./10.js");
    var inspectDepth = 0;
    var inspectMode = new Value({
      value: false
    });
    var overlay = domUtils.createElement({
      css: {
        pointerEvents: "none",
        transition: "all .05s",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1e4,
        background: "rgba(110,163,217,0.7)"
      }
    });
    var boxElement = domUtils.createElement({
      css: {
        visibility: "hidden",
        position: "absolute"
      }
    });
    function pickHandler(event) {
      event.die();
      if (event.mouseRight) {
        stopInspect();
        return;
      }
      var component = pickupTarget.value;
      if (component) {
        stopInspect();
        if (event.altKey) {
          var info = basis.dev.getInfo(component.element._currentElement);
          if (info && info.loc) fileAPI.openFile(info.loc); else console.info("Object create location doesn't resolved:", component, info);
        } else {
          templateInfo().set(component.node);
        }
      }
    }
    var pickupTarget = new Value({
      handler: {
        change: function() {
          var component = this.value || null;
          if (component) {
            var rectNode = component.node;
            var rect;
            if (rectNode.nodeType == 3) {
              rectNode = document.createRange();
              rectNode.selectNodeContents(component.node);
            }
            rect = getBoundingRect(rectNode);
            if (rect) {
              var style = {
                left: rect.left + "px",
                top: rect.top + "px",
                width: rect.width + "px",
                height: rect.height + "px"
              };
              setStyle(overlay, style);
              setStyle(boxElement, style);
              document.body.appendChild(overlay);
              document.body.appendChild(boxElement);
            }
          } else {
            domUtils.remove(overlay);
            domUtils.remove(boxElement);
            inspectDepth = 0;
          }
          nodeInfoPopup().update({
            node: component && component.node,
            element: component && component.element
          });
        }
      }
    });
    var nodeInfoPopup = basis.fn.lazyInit(function() {
      return new Balloon({
        dir: "left bottom left top",
        template: basis.template.get("#a"),
        autorotate: [ "left top left bottom", "right bottom right top", "right top right bottom" ],
        binding: {
          openFileSupported: {
            events: "delegateChanged update",
            getter: function() {
              var basisjsTools = typeof basisjsToolsFileSync != "undefined" ? basisjsToolsFileSync : basis.devtools;
              return basisjsTools && typeof basisjsTools.openFile == "function";
            }
          },
          name: {
            events: "delegateChanged update",
            getter: function(node) {
              var element = node.data.element;
              var data = element && basis.reactApi.getInfo(element);
              if (data) return data.name;
            }
          },
          instanceLocation: {
            events: "delegateChanged update",
            getter: function(node) {
              var element = node.data.element;
              return basis.dev.getInfo(element && element._currentElement, "loc");
            }
          }
        },
        handler: {
          update: function() {
            if (this.data.node) this.show(boxElement); else this.hide();
          },
          hide: function() {
            this.update({
              tmpl: null
            });
          }
        }
      });
    });
    function contextmenuHandler(e) {
      e.die();
      stopInspect();
    }
    function startInspect() {
      if (!inspectMode.value) {
        if (templateInfo.isResolved()) templateInfo().set();
        domEventUtils.addGlobalHandler("mousemove", mousemoveHandler);
        domEventUtils.addGlobalHandler("mousewheel", mouseWheelHandler);
        domEventUtils.addGlobalHandler("wheel", mouseWheelHandler);
        domEventUtils.addGlobalHandler("DOMMouseScroll", mouseWheelHandler);
        domEventUtils.addGlobalHandler("mousedown", domEventUtils.kill);
        domEventUtils.addGlobalHandler("mouseup", domEventUtils.kill);
        domEventUtils.addGlobalHandler("contextmenu", contextmenuHandler);
        domEventUtils.addGlobalHandler("click", pickHandler);
        inspectMode.set(true);
      }
    }
    function stopInspect() {
      if (inspectMode.value) {
        domEventUtils.removeGlobalHandler("mousemove", mousemoveHandler);
        domEventUtils.removeGlobalHandler("mousewheel", mouseWheelHandler);
        domEventUtils.removeGlobalHandler("wheel", mouseWheelHandler);
        domEventUtils.removeGlobalHandler("DOMMouseScroll", mouseWheelHandler);
        domEventUtils.removeGlobalHandler("mousedown", domEventUtils.kill);
        domEventUtils.removeGlobalHandler("mouseup", domEventUtils.kill);
        domEventUtils.removeGlobalHandler("contextmenu", contextmenuHandler);
        domEventUtils.removeGlobalHandler("click", pickHandler);
        inspectMode.set(false);
        pickupTarget.set();
      }
    }
    var lastMouseX;
    var lastMouseY;
    var DEPTH_MODE_MOVE_THRESHOLD = 8;
    function mousemoveHandler(event) {
      var dx = Math.abs(event.mouseX - lastMouseX);
      var dy = Math.abs(event.mouseY - lastMouseY);
      var cursor = event.sender;
      var instance;
      if (inspectDepth && lastMouseX && dx < DEPTH_MODE_MOVE_THRESHOLD && dy < DEPTH_MODE_MOVE_THRESHOLD) return;
      lastMouseX = event.mouseX;
      lastMouseY = event.mouseY;
      if (instance = basis.reactApi.getComponent(cursor)) inspectDepth = 0;
      pickupTarget.set(instance);
    }
    function mouseWheelHandler(event) {
      var delta = event.wheelDelta;
      var sender = event.sender;
      var cursor = sender;
      var tempDepth = inspectDepth + delta;
      var curDepth = 0;
      var lastRefId;
      var lastDepth;
      var refId;
      do {
        if (refId = cursor[componentBoundMarker]) {
          lastRefId = refId;
          lastDepth = curDepth;
          if (tempDepth < 0 || curDepth == tempDepth) break;
          curDepth++;
        }
      } while (cursor = cursor.parentNode);
      pickupTarget.set(lastRefId);
      inspectDepth = lastDepth;
      event.die();
    }
    module.exports = {
      name: "Component",
      startInspect: startInspect,
      stopInspect: stopInspect,
      inspectMode: inspectMode,
      isActive: function() {
        return inspectMode.value;
      }
    };
  },
  "1.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    function patchApi(api) {
      window.reactDevApi = api;
      var reactDevApi = api;
      var _instanceMap = {};
      function getReactElementFromNative(node) {
        var id = api.Mount.getID(node);
        while (node && node.parentNode && !id) {
          node = node.parentNode;
          id = api.Mount.getID(node);
        }
        return _instanceMap[id];
      }
      function getInstanceByNode(node) {
        var element = getReactElementFromNative(node);
        try {
          node = api.Mount.getNode(element._rootNodeID);
        } catch (e) {}
        return element && node ? {
          element: element,
          node: node
        } : null;
      }
      function isComponentInstance(instance) {
        return instance && typeof instance.element._currentElement != "number" && typeof instance.element._currentElement != "string" && typeof instance.element._currentElement.type != "string";
      }
      api.getInstanceByNode = getInstanceByNode;
      api.getComponent = function(node) {
        var cursor = getInstanceByNode(node);
        while (cursor && !isComponentInstance(cursor)) {
          cursor = getInstanceByNode(cursor.node.parentNode);
        }
        return cursor;
      };
      api.isComponent = function(node) {
        return isComponentInstance(getInstanceByNode(node));
      };
      api.getInfo = function(element) {
        var name = null;
        var type = null;
        var nodeType = "Native";
        if (element && element._currentElement) {
          type = element._currentElement.type;
          if (typeof type === "string") {
            name = type;
          } else if (element.getName) {
            nodeType = "Composite";
            name = element.getName();
            if (element._renderedComponent && element._currentElement.props === element._renderedComponent._currentElement) {
              nodeType = "Wrapper";
            }
            if (name === null) {
              name = "No display name";
            }
          } else if (element._stringText) {} else {
            name = type.displayName || type.name || "Unknown";
          }
        }
        return {
          nodeType: nodeType,
          name: name
        };
      };
      var _mount = api.Reconciler.mountComponent;
      api.Reconciler.mountComponent = function(instance) {
        var res = _mount.apply(this, arguments);
        _instanceMap[instance._rootNodeID] = instance;
        return res;
      };
      basis.reactApi = api;
      basis.require("./t.js");
    }
    var oldHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (oldHook) {
      var oldInject = oldHook.inject;
      oldHook.inject = function(api) {
        patchApi(api);
        oldInject.call(this, api);
      };
    } else {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
        inject: function(api) {
          patchApi(api);
        }
      };
    }
  },
  "m.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Node = global.Node;
    var Class = basis.Class;
    var arrayFrom = basis.array.from;
    var getter = basis.getter;
    var eventUtils = basis.require("./2.js");
    var cssom;
    basis.resource("./n.js").ready(function(exports) {
      cssom = exports;
    });
    var testElement = document.createElement("div");
    var ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = 2;
    var TEXT_NODE = 3;
    var CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = 8;
    var DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = 12;
    var AXIS_ANCESTOR = 1;
    var AXIS_ANCESTOR_OR_SELF = 2;
    var AXIS_DESCENDANT = 4;
    var AXIS_DESCENDANT_OR_SELF = 8;
    var AXIS_SELF = 16;
    var AXIS_PARENT = 32;
    var AXIS_CHILD = 64;
    var AXIS_FOLLOWING = 128;
    var AXIS_FOLLOWING_SIBLING = 256;
    var AXIS_PRECEDING = 512;
    var AXIS_PRECEDING_SIBLING = 1024;
    var POSITION_DISCONNECTED = 1;
    var POSITION_PRECEDING = 2;
    var POSITION_FOLLOWING = 4;
    var POSITION_CONTAINS = 8;
    var POSITION_CONTAINED_BY = 16;
    var POSITION_IMPLEMENTATION_SPECIFIC = 32;
    var PARENT_NODE = "parentNode";
    var FIRST_CHILD = "firstChild";
    var LAST_CHILD = "lastChild";
    var NEXT_SIBLING = "nextSibling";
    var PREVIOUS_SIBLING = "previousSibling";
    var INSERT_BEGIN = "begin";
    var INSERT_END = "end";
    var INSERT_BEFORE = "before";
    var INSERT_AFTER = "after";
    var comparePosition;
    if (typeof testElement.compareDocumentPosition == "function") {
      comparePosition = function(nodeA, nodeB) {
        return nodeA.compareDocumentPosition(nodeB);
      };
    } else {
      comparePosition = function(nodeA, nodeB) {
        if (nodeA == nodeB) return 0;
        if (nodeA.document != nodeB.document) return POSITION_DISCONNECTED | POSITION_IMPLEMENTATION_SPECIFIC;
        if (nodeA.sourceIndex > nodeB.sourceIndex) return POSITION_PRECEDING | POSITION_CONTAINS * contains(nodeB, nodeA); else return POSITION_FOLLOWING | POSITION_CONTAINED_BY * contains(nodeA, nodeB);
      };
    }
    var isNode;
    var contains;
    if (typeof Node != "undefined") {
      isNode = function(node) {
        return node instanceof Node;
      };
      if (!Node.prototype.contains) contains = function(parent, child) {
        return !!(parent.compareDocumentPosition(child) & POSITION_CONTAINED_BY);
      }; else contains = function(parent, child) {
        return parent.contains(child);
      };
    } else {
      isNode = function(node) {
        return node && node.ownerDocument === document;
      };
      contains = function(parent, child) {
        return parent === document ? document.documentElement.contains(child) : parent.contains(child);
      };
    }
    function handleInsert(node, newNode, refChild) {
      return newNode != null ? node.insertBefore(isNode(newNode) ? newNode : createText(newNode), refChild || null) : null;
    }
    var TreeWalker = Class(null, {
      className: namespace + ".TreeWalker",
      root_: null,
      cursor_: null,
      filter: basis.fn.$true,
      init: function(root, filter, direction) {
        this.setRoot(root);
        this.setDirection(direction);
        if (typeof filter == "function") this.filter = filter;
      },
      setDirection: function(direction) {
        basis.object.extend(this, direction ? {
          a: LAST_CHILD,
          b: PREVIOUS_SIBLING,
          c: NEXT_SIBLING,
          d: FIRST_CHILD
        } : {
          a: FIRST_CHILD,
          b: NEXT_SIBLING,
          c: PREVIOUS_SIBLING,
          d: LAST_CHILD
        });
      },
      setRoot: function(node) {
        this.root_ = node || document;
        this.reset();
      },
      reset: function() {
        this.cursor_ = null;
      },
      first: function(filter) {
        this.reset();
        return this.next(filter);
      },
      last: function(filter) {
        this.reset();
        return this.prev(filter);
      },
      nodes: function(filter, result) {
        var node;
        if (!result) result = [];
        this.reset();
        while (node = this.next(filter)) result.push(node);
        return result;
      },
      next: function(filter) {
        filter = filter || this.filter;
        var cursor = this.cursor_ || this.root_;
        do {
          var node = cursor[this.a];
          while (!node) {
            if (cursor === this.root_) return this.cursor_ = null;
            node = cursor[this.b];
            if (!node) cursor = cursor[PARENT_NODE];
          }
        } while (!filter(cursor = node));
        return this.cursor_ = cursor;
      },
      prev: function(filter) {
        filter = filter || this.filter;
        var cursor = this.cursor_;
        var prevSibling = this.c;
        var prevChild = this.d;
        do {
          var node = cursor ? cursor[prevSibling] : this.root_[prevChild];
          if (node) {
            while (node[prevChild]) node = node[prevChild];
            cursor = node;
          } else if (cursor) cursor = cursor[PARENT_NODE];
          if (!cursor || cursor === this.root_) {
            cursor = null;
            break;
          }
        } while (!filter(cursor));
        return this.cursor_ = cursor;
      },
      destroy: function() {
        this.root_ = null;
        this.cursor_ = null;
      }
    });
    TreeWalker.BACKWARD = true;
    function outerHTML(node, noClone) {
      return node.outerHTML || createElement("", noClone ? node : node.cloneNode(true)).innerHTML;
    }
    var TEXT_PROPERTIES = [ "textContent", "innerText", "nodeValue" ];
    function textContent(node) {
      for (var i = 0, property; property = TEXT_PROPERTIES[i++]; ) if (node[property] != null) return node[property];
      return axis(node, AXIS_DESCENDANT, function(node) {
        return node.nodeType == TEXT_NODE;
      }).map(getter("nodeValue")).join("");
    }
    function get(ref) {
      if (ref && (isNode(ref) || ref.nodeType)) return ref; else return typeof ref == "string" ? document.getElementById(ref) : null;
    }
    function tag(node, tagName) {
      var element = get(node) || document;
      if (tagName == "*" && element.all) return arrayFrom(element.all); else return arrayFrom(element.getElementsByTagName(tagName || "*"));
    }
    function axis(root, axis, filter) {
      var result = [];
      var walker;
      var cursor;
      filter = typeof filter == "string" ? getter(filter) : filter || basis.fn.$true;
      if (axis & (AXIS_SELF | AXIS_ANCESTOR_OR_SELF | AXIS_DESCENDANT_OR_SELF)) if (filter(root)) result.push(root);
      switch (axis) {
        case AXIS_ANCESTOR:
        case AXIS_ANCESTOR_OR_SELF:
          cursor = root;
          while ((cursor = cursor[PARENT_NODE]) && cursor !== root.document) if (filter(cursor)) result.push(cursor);
          break;
        case AXIS_CHILD:
          cursor = root[FIRST_CHILD];
          while (cursor) {
            if (filter(cursor)) result.push(cursor);
            cursor = cursor[NEXT_SIBLING];
          }
          break;
        case AXIS_DESCENDANT:
        case AXIS_DESCENDANT_OR_SELF:
          if (root[FIRST_CHILD]) {
            walker = new TreeWalker(root);
            walker.nodes(filter, result);
          }
          break;
        case AXIS_FOLLOWING:
          walker = new TreeWalker(root, filter);
          walker.cursor_ = root[NEXT_SIBLING] || root[PARENT_NODE];
          while (cursor = walker.next()) result.push(cursor);
          break;
        case AXIS_FOLLOWING_SIBLING:
          cursor = root;
          while (cursor = cursor[NEXT_SIBLING]) if (filter(cursor)) result.push(cursor);
          break;
        case AXIS_PARENT:
          if (filter(root[PARENT_NODE])) result.push(root[PARENT_NODE]);
          break;
        case AXIS_PRECEDING:
          walker = new TreeWalker(root, filter, TreeWalker.BACKWARD);
          walker.cursor_ = root[PREVIOUS_SIBLING] || root[PARENT_NODE];
          while (cursor = walker.next()) result.push(cursor);
          break;
        case AXIS_PRECEDING_SIBLING:
          cursor = root;
          while (cursor = cursor[PREVIOUS_SIBLING]) if (filter(cursor)) result.push(cursor);
          break;
      }
      return result;
    }
    function findAncestor(node, matchFunction, bound) {
      while (node && node !== bound) {
        if (matchFunction(node)) break;
        node = node.parentNode;
      }
      return node || null;
    }
    function createText(text) {
      return document.createTextNode(text != null ? text : "");
    }
    function createFragment() {
      var result = document.createDocumentFragment();
      var len = arguments.length;
      var array = createFragment.array = [];
      for (var i = 0; i < len; i++) array.push(handleInsert(result, arguments[i]));
      return result;
    }
    var IS_ATTRIBUTE_BUG_NAME = function() {
      var input = document.createElement("input");
      input.name = "a";
      return !/name/.test(outerHTML(input));
    }();
    var IS_ATTRIBUTE_BUG_STYLE = function() {
      testElement.setAttribute("style", "color: red");
      return testElement.style.color !== "red";
    }();
    var DESCRIPTION_PART_REGEXP = /#([a-z0-9_:\-]+)|\.([a-z0-9_:\-]+)|\[([a-z0-9_:\-]+)(="((?:\\.|[^"])*)"|='((?:\\.|[^'])*)'|=((?:\\.|[^\]])*))?\s*\]|\s*(\S)/gi;
    function createElement(config) {
      var isConfig = config != undefined && typeof config != "string";
      var description = (isConfig ? config.description : config) || "";
      var elementName = "div";
      var element;
      var m = description.match(/^([a-z0-9_\-]+)(.*)$/i);
      if (m) {
        elementName = m[1];
        description = m[2];
      }
      if (description != "") {
        var classNames = [];
        var attributes = {};
        var entryName;
        while (m = DESCRIPTION_PART_REGEXP.exec(description)) {
          if (m[8]) {
            throw new Error("Create element error in basis.dom.createElement()" + "\n\nDescription:\n> " + description + "\n\nProblem place:\n> " + description.substr(0, m.index) + "-->" + description.substr(m.index) + "<--");
          }
          entryName = m[1] || m[2] || m[3];
          if (m[1]) attributes.id = entryName; else if (m[2]) classNames.push(entryName); else {
            if (entryName != "class") attributes[entryName] = m[4] ? m[5] || m[6] || m[7] || "" : entryName;
          }
        }
        if (IS_ATTRIBUTE_BUG_NAME && attributes.name && /^(input|textarea|select)$/i.test(elementName)) elementName = "<" + elementName + " name=" + attributes.name + ">";
      }
      element = document.createElement(elementName);
      if (attributes) {
        if (attributes.style && IS_ATTRIBUTE_BUG_STYLE) element.style.cssText = attributes.style;
        for (var attrName in attributes) element.setAttribute(attrName, attributes[attrName], 0);
      }
      if (classNames && classNames.length) element.className = classNames.join(" ");
      if (arguments.length > 1) handleInsert(element, createFragment.apply(0, basis.array.flatten(arrayFrom(arguments, 1))));
      if (isConfig) {
        if (config.css) {
          if (!cssom) cssom = basis.require("./n.js");
          cssom.setStyle(element, config.css);
        }
        for (var event in config) if (typeof config[event] == "function") eventUtils.addHandler(element, event, config[event], element);
      }
      return element;
    }
    function insert(node, source, insertPoint, refChild) {
      node = get(node) || node;
      switch (insertPoint) {
        case undefined:
        case INSERT_END:
          refChild = null;
          break;
        case INSERT_BEGIN:
          refChild = node[FIRST_CHILD];
          break;
        case INSERT_BEFORE:
          break;
        case INSERT_AFTER:
          refChild = refChild[NEXT_SIBLING];
          break;
        default:
          insertPoint = Number(insertPoint);
          refChild = insertPoint >= 0 && insertPoint < node.childNodes.length ? node.childNodes[insertPoint] : null;
      }
      var isDOMLikeObject = !isNode(node);
      var result;
      if (!source || !Array.isArray(source)) result = isDOMLikeObject ? source && node.insertBefore(source, refChild) : handleInsert(node, source, refChild); else {
        if (isDOMLikeObject) {
          result = [];
          for (var i = 0, len = source.length; i < len; i++) result[i] = node.insertBefore(source[i], refChild);
        } else {
          node.insertBefore(createFragment.apply(0, source), refChild);
          result = createFragment.array;
        }
      }
      return result;
    }
    function remove(node) {
      return node[PARENT_NODE] ? node[PARENT_NODE].removeChild(node) : node;
    }
    function replace(oldNode, newNode) {
      return oldNode[PARENT_NODE] ? oldNode[PARENT_NODE].replaceChild(newNode, oldNode) : oldNode;
    }
    function swap(nodeA, nodeB) {
      if (nodeA === nodeB || comparePosition(nodeA, nodeB) & (POSITION_CONTAINED_BY | POSITION_CONTAINS | POSITION_DISCONNECTED)) return false;
      replace(nodeA, testElement);
      replace(nodeB, nodeA);
      replace(testElement, nodeB);
      return true;
    }
    function clone(node, noChildren) {
      var result = node.cloneNode(!noChildren);
      if (result.attachEvent) axis(result, AXIS_DESCENDANT_OR_SELF).forEach(eventUtils.clearHandlers);
      return result;
    }
    function clear(node) {
      node = get(node);
      while (node[LAST_CHILD]) node.removeChild(node[LAST_CHILD]);
      return node;
    }
    function wrap(array, map, getter) {
      var result = [];
      getter = basis.getter(getter || basis.fn.$self);
      for (var k in map) for (var i = 0; i < array.length; i++) {
        var value = getter(array[i]);
        result[i] = map[k](array[i], i, value) ? createElement(k, value) : array[i];
      }
      return result;
    }
    function setAttribute(node, name, value) {
      if (value == null) node.removeAttribute(name); else node.setAttribute(name, value);
    }
    function parentOf(node, child) {
      return contains(node, child);
    }
    function isInside(node, root) {
      return node == root || contains(root, node);
    }
    function focus(node, select) {
      try {
        node = get(node);
        node.focus();
        if (select && node.select) node.select();
      } catch (e) {}
    }
    function setSelectionRange(input, start, end) {
      if (arguments.length < 3) end = start;
      if (input.setSelectionRange) input.setSelectionRange(start, end); else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart("character", start);
        range.moveEnd("character", end - start);
        range.select();
      }
    }
    function ieGetInputPosition(isStart) {
      if (document.selection) {
        var range = document.selection.createRange();
        if (range.compareEndPoints("StartToEnd", range) != 0) range.collapse(isStart);
        return range.getBookmark().charCodeAt(2) - 2;
      }
      return 0;
    }
    function getSelectionStart(input) {
      if (typeof input.selectionStart != "undefined") return input.selectionStart; else return ieGetInputPosition(true);
    }
    function getSelectionEnd(input) {
      if (typeof input.selectionEnd != "undefined") return input.selectionEnd; else return ieGetInputPosition(false);
    }
    module.exports = {
      ELEMENT_NODE: ELEMENT_NODE,
      ATTRIBUTE_NODE: ATTRIBUTE_NODE,
      TEXT_NODE: TEXT_NODE,
      CDATA_SECTION_NODE: CDATA_SECTION_NODE,
      ENTITY_REFERENCE_NODE: ENTITY_REFERENCE_NODE,
      ENTITY_NODE: ENTITY_NODE,
      PROCESSING_INSTRUCTION_NODE: PROCESSING_INSTRUCTION_NODE,
      COMMENT_NODE: COMMENT_NODE,
      DOCUMENT_TYPE_NODE: DOCUMENT_TYPE_NODE,
      DOCUMENT_NODE: DOCUMENT_NODE,
      DOCUMENT_FRAGMENT_NODE: DOCUMENT_FRAGMENT_NODE,
      NOTATION_NODE: NOTATION_NODE,
      AXIS_ANCESTOR: AXIS_ANCESTOR,
      AXIS_ANCESTOR_OR_SELF: AXIS_ANCESTOR_OR_SELF,
      AXIS_DESCENDANT: AXIS_DESCENDANT,
      AXIS_DESCENDANT_OR_SELF: AXIS_DESCENDANT_OR_SELF,
      AXIS_SELF: AXIS_SELF,
      AXIS_PARENT: AXIS_PARENT,
      AXIS_CHILD: AXIS_CHILD,
      AXIS_FOLLOWING: AXIS_FOLLOWING,
      AXIS_FOLLOWING_SIBLING: AXIS_FOLLOWING_SIBLING,
      AXIS_PRECEDING: AXIS_PRECEDING,
      AXIS_PRECEDING_SIBLING: AXIS_PRECEDING_SIBLING,
      INSERT_BEGIN: INSERT_BEGIN,
      INSERT_END: INSERT_END,
      INSERT_BEFORE: INSERT_BEFORE,
      INSERT_AFTER: INSERT_AFTER,
      TreeWalker: TreeWalker,
      outerHTML: outerHTML,
      textContent: textContent,
      get: get,
      tag: tag,
      axis: axis,
      findAncestor: findAncestor,
      createElement: createElement,
      createText: createText,
      createFragment: createFragment,
      insert: insert,
      remove: remove,
      replace: replace,
      swap: swap,
      clone: clone,
      clear: clear,
      wrap: wrap,
      setAttribute: setAttribute,
      parentOf: parentOf,
      isInside: isInside,
      focus: focus,
      setSelectionRange: setSelectionRange,
      getSelectionStart: getSelectionStart,
      getSelectionEnd: getSelectionEnd
    };
  },
  "n.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var arrayFrom = basis.array.from;
    var camelize = basis.string.camelize;
    var Class = basis.Class;
    var dom = basis.require("./m.js");
    var DOMTokenList = global.DOMTokenList;
    var CLASSLIST_SUPPORTED = DOMTokenList && document && document.documentElement.classList instanceof DOMTokenList;
    var IMPORTANT_REGEXP = /\s*!important/i;
    var IMPORTANT = "important";
    var GENERIC_RULE_SEED = 1;
    var cssStyleSheets = {};
    var SET_STYLE_EXCEPTION_BUG = function() {
      var element = dom.createElement();
      try {
        element.style.width = "badvalue";
      } catch (e) {
        return true;
      }
      return false;
    }();
    function createRule(selector, styleSheet) {
      return getStyleSheet(styleSheet, true).createRule(selector);
    }
    function isPropertyImportant(style, property) {
      if (style.getPropertyPriority) return style.getPropertyPriority(property) == IMPORTANT; else return false;
    }
    function uniqueRule(element) {
      var token = "genericRule-" + GENERIC_RULE_SEED++;
      if (element) classList(element).add(token);
      var result = createRule("." + token);
      result.token = token;
      return result;
    }
    function compatibleStyleSheetInsertRule(rule, index) {
      var m = rule.match(/^([^{]+)\{(.*)\}\s*$/);
      if (m) {
        var selectors = m[1].trim().split(/\s*,\s*/);
        for (var i = 0; i < selectors.length; i++) this.addRule(selectors[i], m[2] || null, index++);
        return index - 1;
      }
      throw new Error("Syntax error in CSS rule to be added");
    }
    function makeStyleSheetCompatible(style) {
      try {
        if (!style.cssRules) style.cssRules = style.rules;
      } catch (e) {}
      if (!style.insertRule) style.insertRule = compatibleStyleSheetInsertRule;
      if (!style.deleteRule) style.deleteRule = style.removeRule;
      return style;
    }
    function addStyleSheet(url, title) {
      var element = dom.createElement(!url ? 'style[type="text/css"]' : basis.string.format('link[type="text/css"][rel="{alt}stylesheet"][href="{url}"]', {
        alt: title ? "alternate " : "",
        url: url.replace(/\"/g, '\\"')
      }));
      basis.doc.head.add(element);
      return makeStyleSheetCompatible(element.sheet || element.styleSheet);
    }
    function getStyleSheet(id, createIfNotExists) {
      if (!id) id = "DefaultGenericStyleSheet";
      if (!cssStyleSheets[id]) if (createIfNotExists) cssStyleSheets[id] = new StyleSheet(addStyleSheet());
      return cssStyleSheets[id];
    }
    var testElement = dom.createElement("");
    var styleMapping = {};
    var features = {};
    function createStyleMapping(property, names, regSupport, getters) {
      getters = getters || {};
      names = names.split(" ");
      for (var i = 0, name; name = names[i]; i++) {
        if (typeof testElement.style[name] != "undefined") {
          if (regSupport) features["css-" + property] = name;
          styleMapping[property] = {
            key: name,
            getter: getters[name]
          };
          return;
        }
      }
    }
    createStyleMapping("opacity", "opacity filter", true, {
      filter: function(value) {
        return "alpha(opacity:" + parseInt(value * 100, 10) + ")";
      }
    });
    createStyleMapping("float", "cssFloat styleFloat");
    function setStyleProperty(node, property, value) {
      var mapping = styleMapping[property];
      var key = mapping ? mapping.key : camelize(property.replace(/^-ms-/, "ms-"));
      if (!key) return;
      if (mapping && mapping.getter) value = mapping.getter(value);
      var imp = !!IMPORTANT_REGEXP.test(value);
      var style = node.style;
      if (imp || isPropertyImportant(style, property)) {
        value = value.replace(IMPORTANT_REGEXP, "");
        if (style.setProperty) {
          if (!imp) style.setProperty(property, "");
          style.setProperty(property, value, imp ? IMPORTANT : "");
        } else {
          var newValue = key + ": " + value + (imp ? " !" + IMPORTANT : "") + ";";
          var rxText = style[key] ? property + "\\s*:\\s*" + style[key] + "(\\s*!" + IMPORTANT + ")?\\s*;?" : "^";
          try {
            style.cssText = style.cssText.replace(new RegExp(rxText, "i"), newValue);
          } catch (e) {
            basis.dev.warn("basis.cssom.setStyleProperty: Can't set wrong value `" + value + "` for " + key + " property");
          }
        }
      } else {
        if (SET_STYLE_EXCEPTION_BUG) {
          try {
            node.style[key] = value;
          } catch (e) {
            basis.dev.warn("basis.cssom.setStyleProperty: Can't set wrong value `" + value + "` for " + key + " property");
          }
        } else node.style[key] = value;
        return node.style[key];
      }
    }
    function setStyle(node, style) {
      for (var key in style) setStyleProperty(node, key, style[key]);
      return node;
    }
    function display(node, display) {
      return setStyleProperty(node, "display", typeof display == "string" ? display : display ? "" : "none");
    }
    function visibility(node, visible) {
      return setStyleProperty(node, "visibility", visible ? "" : "hidden");
    }
    var StyleSheet = Class(null, {
      className: namespace + ".StyleSheet",
      styleSheet: null,
      rules: null,
      init: function(styleSheet) {
        this.styleSheet = styleSheet;
        this.rules = [];
      },
      createRule: function(selector) {
        var styleSheet = this.styleSheet;
        var index = this.rules.length;
        styleSheet.insertRule(selector + "{}", index);
        var cssRules = arrayFrom(styleSheet.cssRules, index);
        var ruleWrapper = cssRules[1] ? new RuleSet(cssRules, this) : new Rule(cssRules[0], this);
        this.rules.push.apply(this.rules, ruleWrapper.rules || [ ruleWrapper ]);
        return ruleWrapper;
      },
      deleteRule: function(rule) {
        if (rule instanceof RuleSet) rule.rules.forEach(this.deleteRule, this); else {
          var ruleIndex = this.rules.indexOf(rule);
          if (ruleIndex != -1) {
            this.rules.splice(ruleIndex, 1);
            this.styleSheet.deleteRule(ruleIndex);
          }
        }
        rule.owner = null;
        rule.destroy();
      },
      destroy: function() {
        this.rules.forEach(function(item) {
          item.destroy();
        });
        this.styleSheet = null;
        this.rules = null;
      }
    });
    var Rule = Class(null, {
      className: namespace + ".Rule",
      rule: null,
      selector: "",
      init: function(rule, owner) {
        this.owner = owner;
        this.rule = rule;
        this.selector = rule.selectorText;
      },
      setProperty: function(property, value) {
        setStyleProperty(this.rule, property, value);
      },
      setStyle: function(style) {
        basis.object.iterate(style, this.setProperty, this);
      },
      clear: function() {
        this.rule.style.cssText = "";
      },
      destroy: function() {
        if (this.owner) this.owner.deleteRule(this);
        this.owner = null;
        this.rule = null;
      }
    });
    function createRuleSetMethod(methodName) {
      return function() {
        for (var i = 0, rule; rule = this.rules[i]; i++) rule[methodName].apply(rule, arguments);
      };
    }
    var RuleSet = Class(null, {
      className: namespace + ".RuleSet",
      rules: null,
      init: function(rules, owner) {
        this.owner = owner;
        this.rules = rules.map(function(rule) {
          return new Rule(rule, this);
        }, this);
      },
      createRule: function(selector) {
        var rule = this.owner.createRule(selector);
        this.rules.push(rule);
        rule.owner = this;
        return rule;
      },
      deleteRule: function(rule) {
        var ruleIndex = this.rules.indexOf(rule);
        if (ruleIndex != -1) {
          this.rules.splice(ruleIndex, 1);
          this.owner.deleteRule(rule);
        }
      },
      setProperty: createRuleSetMethod("setProperty"),
      setStyle: createRuleSetMethod("setStyle"),
      clear: createRuleSetMethod("clear"),
      destroy: function() {
        if (this.owner) this.owner.deleteRule(this);
        this.owner = null;
        this.rules = null;
      }
    });
    var classList;
    var tokenRxCache = {};
    function tokenRegExp(token) {
      return tokenRxCache[token] || (tokenRxCache[token] = new RegExp("\\s*\\b" + token + "\\b"));
    }
    var ClassList = Class(null, {
      className: namespace + ".ClassList",
      init: function(element) {
        if (!element) throw namespace + ".classList: Element " + element + " not found!";
        this.element = element;
      },
      set_: function(value) {
        var className = this.element.className;
        if (typeof className == "string") return this.element.className = value; else return className.baseVal = value;
      },
      toString: function() {
        var className = this.element.className;
        return typeof className == "string" ? className : className.baseVal;
      },
      set: function(tokenList) {
        this.clear();
        tokenList.trim().split(" ").forEach(this.add, this);
      },
      replace: function(searchFor, replaceFor, prefix) {
        prefix = prefix || "";
        if (typeof searchFor != "undefined") this.remove(prefix + searchFor);
        if (typeof replaceFor != "undefined") this.add(prefix + replaceFor);
      },
      bool: function(token, exists) {
        if (exists) this.add(token); else this.remove(token);
      },
      clear: function() {
        this.set_("");
      },
      contains: function(token) {
        return !!this.toString().match(tokenRegExp(token));
      },
      item: function(index) {
        return this.toString().trim().split(" ")[index];
      },
      add: function(token) {
        var className = this.toString();
        if (!className.match(tokenRegExp(token))) this.set_(className + " " + token);
      },
      remove: function(token) {
        var className = this.toString();
        var newClassName = className.replace(tokenRegExp(token), "");
        if (newClassName != className) this.set_(newClassName);
      },
      toggle: function(token) {
        var exists = this.contains(token);
        if (exists) this.remove(token); else this.add(token);
        return !exists;
      }
    });
    var prefixRxCache = {};
    function prefixRegExp(prefix, global) {
      var key = (global ? "g" : "s") + prefix;
      return prefixRxCache[key] || (prefixRxCache[key] = new RegExp((global ? "" : "\\s*") + "\\b" + prefix + "\\S*\\b"));
    }
    var ClassListNS = Class(null, {
      className: namespace + ".ClassListNS",
      delim: "-",
      init: function(ns, classList) {
        this.classList = classList;
        this.prefix = ns + this.delim;
      },
      add: function(value) {
        this.classList.add(this.prefix + value);
      },
      remove: function(value) {
        this.classList.remove(this.prefix + value);
      },
      items: function() {
        var className = this.classList.toString();
        return className ? className.match(prefixRegExp(this.prefix, true)) : null;
      },
      set: function(value) {
        var items = this.items();
        var token = typeof value != "undefined" ? this.prefix + value : "";
        var classList = this.classList;
        if (items) {
          if (items.length == 1) {
            if (items[0] === token) return;
            classList.remove(items[0]);
          } else this.clear();
        }
        if (token) classList.add(token);
      },
      clear: function() {
        this.items().forEach(this.classList.remove, this.classList);
      }
    });
    if (CLASSLIST_SUPPORTED) {
      var proto = ClassList.prototype;
      basis.object.extend(DOMTokenList.prototype, {
        set: proto.set,
        replace: proto.replace,
        bool: proto.bool,
        clear: function() {
          for (var i = this.length; i > 0; ) this.remove(this[--i]);
        },
        setPrefixToken: proto.setPrefixToken
      });
      classList = function(element) {
        return (typeof element == "string" ? dom.get(element) : element).classList;
      };
    } else {
      classList = function(element) {
        return new ClassList(typeof element == "string" ? dom.get(element) : element);
      };
    }
    var classListProxy = function(element, ns) {
      return ns ? new ClassListNS(ns, classList(element)) : classList(element);
    };
    function createUnitFormatter(unit) {
      return function(value) {
        return value == 0 || isNaN(value) ? "0" : value + unit;
      };
    }
    module.exports = {
      features: features,
      setStyleProperty: setStyleProperty,
      setStyle: setStyle,
      classList: classListProxy,
      uniqueRule: uniqueRule,
      createRule: createRule,
      getStyleSheet: getStyleSheet,
      addStyleSheet: addStyleSheet,
      StyleSheet: StyleSheet,
      Rule: Rule,
      RuleSet: RuleSet,
      display: display,
      visibility: visibility,
      em: createUnitFormatter("em"),
      ex: createUnitFormatter("ex"),
      px: createUnitFormatter("px"),
      percent: createUnitFormatter("%")
    };
  },
  "o.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var window = global;
    var document = global.document;
    var arrayFrom = basis.array.from;
    var domUtils = basis.require("./m.js");
    var eventUtils = basis.require("./2.js");
    var cssom = basis.require("./n.js");
    var createEvent = basis.require("./7.js").create;
    var getComputedStyle = basis.require("./k.js").get;
    var getOffsetParent = basis.require("./l.js").getOffsetParent;
    var getBoundingRect = basis.require("./l.js").getBoundingRect;
    var getViewportRect = basis.require("./l.js").getViewportRect;
    var Node = basis.require("./8.js").Node;
    var CHECK_INTERVAL = 50;
    var templates = basis.require("./d.js").define(namespace, {
      Popup: basis.resource("./0.tmpl"),
      Balloon: basis.resource("./1.tmpl"),
      popupManager: basis.resource("./2.tmpl")
    });
    var LEFT = "LEFT";
    var RIGHT = "RIGHT";
    var TOP = "TOP";
    var BOTTOM = "BOTTOM";
    var CENTER = "CENTER";
    var ORIENTATION = {
      VERTICAL: "V",
      HORIZONTAL: "H"
    };
    var ROTATE_MATRIX = String("LTRTRBLBLCCTRCCBCCCCCCCC");
    var LETTER_TO_SIDE = {
      L: LEFT,
      R: RIGHT,
      T: TOP,
      B: BOTTOM,
      C: CENTER
    };
    var FLIP = {
      LEFT: RIGHT,
      RIGHT: LEFT,
      TOP: BOTTOM,
      BOTTOM: TOP,
      CENTER: CENTER
    };
    var DEFAULT_DIR = [ RIGHT, BOTTOM, RIGHT, TOP ].join(" ");
    var DIR_MAP = function() {
      var h = [ LEFT, CENTER, RIGHT ];
      var v = [ TOP, CENTER, BOTTOM ];
      var result = {};
      var perm = {};
      for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) {
        perm[h[i] + " " + v[j]] = h[i] + " " + v[j];
        perm[v[j] + " " + h[i]] = h[i] + " " + v[j];
      }
      for (var p1 in perm) for (var p2 in perm) result[p1 + " " + p2] = perm[p1] + " " + perm[p2];
      return result;
    }();
    var FACTOR = {
      LEFT: {
        LEFT: [ 0, 1, 1 ],
        CENTER: [ [ 1, 0, 0 ], [ 0, 1, 1 ] ],
        RIGHT: [ 1, 0, 0 ]
      },
      CENTER: {
        TOP: [ 0, .5, 1 ],
        LEFT: [ 0, .5, 1 ],
        RIGHT: [ 1, .5, 0 ],
        BOTTOM: [ 1, .5, 0 ],
        CENTER: [ [ 1, .5, 0 ], [ 0, .5, 1 ] ]
      },
      RIGHT: {
        LEFT: [ 0, 0, 1 ],
        CENTER: [ [ 1, 1, 0 ], [ 0, 0, 1 ] ],
        RIGHT: [ 1, 1, 0 ]
      },
      TOP: {
        TOP: [ 0, 1, 1 ],
        CENTER: [ [ 1, 0, 0 ], [ 0, 1, 1 ] ],
        BOTTOM: [ 1, 0, 0 ]
      },
      BOTTOM: {
        TOP: [ 0, 0, 1 ],
        CENTER: [ [ 1, 1, 0 ], [ 0, 0, 1 ] ],
        BOTTOM: [ 1, 1, 0 ]
      }
    };
    function normalizeDir(value, valueOnFailure) {
      return DIR_MAP[typeof value == "string" && value.toUpperCase()] || valueOnFailure;
    }
    function resolveRelBox(relPoint, offsetParent) {
      if (Array.isArray(relPoint)) return {
        left: relPoint[0],
        right: relPoint[0],
        width: 0,
        top: relPoint[1],
        bottom: relPoint[1],
        height: 0
      };
      return getBoundingRect(relPoint, offsetParent);
    }
    function getTopZIndex() {
      var basisUiWindow = basis.resource.get(basis.resolveNSFilename("basis.ui.window"));
      return basisUiWindow ? basisUiWindow.fetch().getWindowTopZIndex() : 2001;
    }
    function isVisible(element) {
      if (!domUtils.parentOf(document.documentElement, element)) return false;
      if (getComputedStyle(element, "visibility") != "visible") return false;
      var box = getBoundingRect(element);
      if (!box.width || !box.height) return false;
      return true;
    }
    var popupManager = basis.object.extend([], {
      body: NaN,
      trackingCount: 0,
      trackingTimer: null,
      add: function(popup) {
        if (!this.length) {
          eventUtils.addGlobalHandler("click", this.hideByClick, this);
          eventUtils.addGlobalHandler("keydown", this.hideByKey, this);
          eventUtils.addGlobalHandler("scroll", this.hideByScroll, this);
          eventUtils.addHandler(window, "resize", this.realignAll, this);
        }
        this.unshift(popup);
        popup.setZIndex(getTopZIndex());
        if (this.body && !domUtils.parentOf(document, popup.element)) this.body.appendChild(popup.element);
        if (popup.trackRelElement) {
          if (!this.trackingCount) this.trackingTimer = setInterval(this.checkRelElement.bind(this), CHECK_INTERVAL);
          this.trackingCount++;
        }
      },
      remove: function(popup) {
        var popupIndex = this.indexOf(popup);
        if (popupIndex == -1) return;
        if (popup.hideOnAnyClick) {
          var nextPopup = this[popupIndex - 1];
          if (nextPopup) nextPopup.hide();
        }
        if (popup.trackRelElement) {
          this.trackingCount--;
          if (!this.trackingCount) clearInterval(this.trackingTimer);
        }
        basis.array.remove(this, popup);
        if (popup.element.parentNode === this.body) domUtils.remove(popup.element);
        if (!this.length) {
          eventUtils.removeGlobalHandler("click", this.hideByClick, this);
          eventUtils.removeGlobalHandler("keydown", this.hideByKey, this);
          eventUtils.removeGlobalHandler("scroll", this.hideByScroll, this);
          eventUtils.removeHandler(window, "resize", this.realignAll, this);
        }
      },
      clear: function() {
        arrayFrom(this).forEach(function(popup) {
          popup.hide();
        });
      },
      checkRelElement: function() {
        arrayFrom(this).forEach(function(popup) {
          if (popup.trackRelElement && popup.relElement_ && !isVisible(popup.relElement_)) popup.hide();
        });
      },
      realignAll: function() {
        this.forEach(function(popup) {
          if (popup.autoRealign) popup.realign();
        });
      },
      hideByClick: function(event) {
        if (!this.length) return;
        var ancestors = domUtils.axis(event.sender, domUtils.AXIS_ANCESTOR_OR_SELF);
        for (var i = 0, popup; popup = this[i]; i++) {
          if (ancestors.indexOf(popup.element) != -1 || ancestors.some(function(element) {
            return popup.ignoreClickFor.indexOf(element) != -1;
          })) {
            for (var j = i - 1; popup = this[j]; j--) if (popup.hideOnAnyClick) {
              popup.hide();
              break;
            }
            return;
          }
        }
        var firstOnAnyClickPopup = basis.array.lastSearch(this, true, "hideOnAnyClick");
        if (firstOnAnyClickPopup) firstOnAnyClickPopup.hide();
      },
      hideByKey: function(event) {
        var popup = this[0];
        if (popup) {
          var hideOnKey = popup.hideOnKey;
          var hide;
          if (typeof hideOnKey == "function") hide = hideOnKey.call(this, event.key);
          if (Array.isArray(hideOnKey)) hide = hideOnKey.indexOf(event.key) != -1;
          if (hide) popup.hide();
        }
      },
      hideByScroll: function(event) {
        var sender = event.sender;
        if (domUtils.parentOf(sender, this.body)) return;
        arrayFrom(this).forEach(function(popup) {
          if (popup.hideOnScroll && popup.relElement_ && !Array.isArray(popup.relElement_) && popup.offsetParent !== sender && domUtils.parentOf(sender, popup.relElement_)) popup.hide();
        });
      }
    });
    basis.doc.body.ready(function(body) {
      popupManager.body = body;
      popupManager.forEach(function(popup) {
        if (!domUtils.parentOf(document, popup.element)) {
          body.appendChild(popup.element);
          popup.realign();
        }
      });
    });
    var Popup = Node.subclass({
      className: namespace + ".Popup",
      template: templates.Popup,
      binding: {
        visible: {
          events: "show hide",
          getter: function(node) {
            return node.visible ? "visible" : "hidden";
          }
        },
        orientation: {
          events: "layoutChanged",
          getter: function(node) {
            return (node.orientation + "-" + node.dir.split(" ").slice(2, 4).join("-")).toLowerCase();
          }
        },
        maxHeight: function(node) {
          return node.maxHeight == "none" ? "none" : node.maxHeight + "px";
        },
        maxWidth: function(node) {
          return node.maxWidth == "none" ? "none" : node.maxWidth + "px";
        }
      },
      action: {
        hide: function() {
          this.hide();
        }
      },
      emit_beforeShow: createEvent("beforeShow"),
      emit_show: createEvent("show"),
      emit_hide: createEvent("hide"),
      emit_realign: createEvent("realign"),
      emit_layoutChanged: createEvent("layoutChanged", "oldOrientation", "oldDir"),
      listen: {
        owner: {
          templateChanged: function() {
            if (this.visible) this.show.apply(this, this.visibleArgs_);
          }
        }
      },
      visible: false,
      visibleArgs_: null,
      autorotate: false,
      autoRealign: true,
      zIndex: 0,
      maxHeight: "none",
      maxWidth: "none",
      dir: "",
      defaultDir: DEFAULT_DIR,
      orientation: ORIENTATION.VERTICAL,
      relElement: null,
      relElement_: null,
      hideOnAnyClick: true,
      hideOnKey: false,
      hideOnScroll: true,
      ignoreClickFor: null,
      trackRelElement: false,
      trackRelElementTimer_: null,
      init: function() {
        Node.prototype.init.call(this);
        this.ignoreClickFor = arrayFrom(this.ignoreClickFor);
        if (this.dir) {
          this.dir = normalizeDir(this.dir, DEFAULT_DIR);
          this.defaultDir = this.dir;
        } else {
          this.defaultDir = normalizeDir(this.defaultDir, DEFAULT_DIR);
          this.dir = this.defaultDir;
        }
        this.setLayout(this.defaultDir, this.orientation);
      },
      templateSync: function() {
        Node.prototype.templateSync.call(this);
        this.realign();
      },
      setLayout: function(dir, orientation, noRealign) {
        var oldDir = this.dir;
        var oldOrientation = this.orientation;
        this.dir = normalizeDir(dir, this.dir);
        if (typeof orientation == "string") this.orientation = orientation;
        if (oldDir != this.dir || oldOrientation != this.orientation) {
          this.emit_layoutChanged(oldOrientation, oldDir);
          if (!noRealign) this.realign();
        }
      },
      flip: function(orientation) {
        var dir = this.dir.split(" ");
        var v = orientation == ORIENTATION.VERTICAL;
        dir[0 + v] = FLIP[dir[0 + v]];
        dir[2 + v] = FLIP[dir[2 + v]];
        this.setLayout(dir.join(" "));
      },
      rotate: function(offset) {
        var dir = this.dir.split(" ");
        var result = [];
        offset = (offset % 4 + 4) % 4;
        if (!offset) return dir;
        var a = dir[0].charAt(0);
        var b = dir[1].charAt(0);
        var idx = ROTATE_MATRIX.indexOf(a + b) >> 1;
        var index = (idx & 252) + ((idx & 3) + offset & 3) << 1;
        result.push(LETTER_TO_SIDE[ROTATE_MATRIX.charAt(index)], LETTER_TO_SIDE[ROTATE_MATRIX.charAt(index + 1)]);
        var a = dir[2].charAt(0);
        var b = dir[3].charAt(0);
        var idx = ROTATE_MATRIX.indexOf(a + b) >> 1;
        offset = a != "C" && b != "C" && dir[0] == dir[2] != (dir[1] == dir[3]) ? -offset + 4 : offset;
        var index = (idx & 252) + ((idx & 3) + offset & 3) << 1;
        result.push(LETTER_TO_SIDE[ROTATE_MATRIX.charAt(index)], LETTER_TO_SIDE[ROTATE_MATRIX.charAt(index + 1)]);
        return result;
      },
      isFitToViewport: function(dir, relElement) {
        if (this.visible && relElement) {
          var offsetParent = getOffsetParent(this.element);
          var box = resolveRelBox(relElement, offsetParent);
          var width = this.element.offsetWidth;
          var height = this.element.offsetHeight;
          var viewport = getViewportRect(global, offsetParent);
          dir = normalizeDir(dir, this.dir).split(" ");
          var pointX = dir[0] == CENTER ? box.left + (box.width >> 1) : box[dir[0].toLowerCase()];
          var pointY = dir[1] == CENTER ? box.top + (box.height >> 1) : box[dir[1].toLowerCase()];
          if (dir[2] != LEFT && pointX < width >> (dir[2] == CENTER) || dir[2] != RIGHT && viewport.width - pointX + viewport.left < width >> (dir[2] == CENTER) || dir[3] != TOP && pointY < height >> (dir[3] == CENTER) || dir[3] != BOTTOM && viewport.height - pointY + viewport.top < height >> (dir[3] == CENTER)) return false;
          return {
            x: pointX,
            y: pointY
          };
        }
      },
      setZIndex: function(zIndex) {
        this.zIndex = isNaN(zIndex) ? "auto" : zIndex;
        cssom.setStyle(this.element, {
          "z-index": zIndex
        });
      },
      realign: function() {
        function getAvailSizes(dir) {
          function calc(sizes, factor) {
            return Math.floor(sizes[0] * factor[0] + sizes[1] * factor[1] + sizes[2] * factor[2]);
          }
          var pointX = dir[0];
          var pointY = dir[1];
          var popupX = dir[2];
          var popupY = dir[3];
          var availWidth = popupX == CENTER ? 2 * Math.min(calc(widths, FACTOR[pointX][popupX][0]), calc(widths, FACTOR[pointX][popupX][1])) : calc(widths, FACTOR[pointX][popupX]);
          var availHeight = popupY == CENTER ? 2 * Math.min(calc(heights, FACTOR[pointY][popupY][0]), calc(heights, FACTOR[pointY][popupY][1])) : calc(heights, FACTOR[pointY][popupY]);
          return {
            dir: dir,
            width: availWidth,
            height: availHeight
          };
        }
        function getPoint(dir) {
          var pointX = dir[0] == CENTER ? relElementBox.left + (relElementBox.width >> 1) : relElementBox[dir[0].toLowerCase()];
          var pointY = dir[1] == CENTER ? relElementBox.top + (relElementBox.height >> 1) : relElementBox[dir[1].toLowerCase()];
          return {
            x: pointX,
            y: pointY
          };
        }
        this.setZIndex(this.zIndex);
        this.maxWidth = "none";
        this.updateBind("maxWidth");
        this.maxHeight = "none";
        this.updateBind("maxHeight");
        var relElement = this.visible && this.relElement_;
        if (relElement) {
          var dir = this.dir.split(" ");
          var rotateOffset = 0;
          var curDir = dir;
          var dirH = dir[2];
          var dirV = dir[3];
          var maxRotate = typeof this.autorotate == "number" || !this.autorotate.length ? 3 : this.autorotate.length;
          var fitVariants = [];
          var offsetParent = getOffsetParent(this.element);
          var relElementBox = resolveRelBox(relElement, offsetParent);
          var width = this.element.offsetWidth;
          var height = this.element.offsetHeight;
          var maxHeight = "none";
          var maxWidth = "none";
          var fit = false;
          var point;
          var viewportBox = getViewportRect(global, offsetParent);
          var heights = [ basis.number.fit(relElementBox.top - viewportBox.top, 0, viewportBox.height), Math.min(relElementBox.bottom, viewportBox.bottom) - Math.max(relElementBox.top, viewportBox.top), basis.number.fit(viewportBox.bottom - relElementBox.bottom, 0, viewportBox.height) ];
          var widths = [ basis.number.fit(relElementBox.left - viewportBox.left, 0, viewportBox.width), Math.min(relElementBox.right, viewportBox.right) - Math.max(relElementBox.left, viewportBox.left), basis.number.fit(viewportBox.right - relElementBox.right, 0, viewportBox.width) ];
          while (this.autorotate && rotateOffset <= maxRotate) {
            var fitVariant = getAvailSizes(curDir);
            var point = getPoint(curDir);
            var isFitToSizes = width <= fitVariant.width && height <= fitVariant.height;
            var isFitToViewport = (dir[2] == LEFT || point.x > width >> (dir[2] == CENTER)) && (dir[2] == RIGHT || viewportBox.width - point.x + viewportBox.left > width >> (dir[2] == CENTER)) && (dir[3] == TOP || point.y > height >> (dir[3] == CENTER)) && (dir[3] == BOTTOM || viewportBox.height - point.y + viewportBox.top > height >> (dir[3] == CENTER));
            if (isFitToSizes && isFitToViewport) {
              fit = true;
              maxHeight = fitVariant.height;
              maxWidth = fitVariant.width;
              point = getPoint(curDir);
              break;
            }
            fitVariants.push(fitVariant);
            if (rotateOffset == maxRotate) break;
            if (Array.isArray(this.autorotate)) {
              var rotate = this.autorotate[rotateOffset++];
              if (typeof rotate == "string") curDir = normalizeDir(rotate, curDir.join(" ")).split(" "); else curDir = this.rotate(rotate);
            } else curDir = this.rotate(++rotateOffset * this.autorotate);
          }
          if (!fit) {
            if (!fitVariants.length) fitVariants.push(getAvailSizes(curDir));
            fitVariant = fitVariants.reduce(function(choice, variant) {
              return !choice || choice.width * choice.height < variant.width * variant.height ? variant : choice;
            }, null);
            curDir = fitVariant.dir;
            maxHeight = fitVariant.height;
            maxWidth = fitVariant.width;
            point = getPoint(curDir);
          }
          dirH = curDir[2];
          dirV = curDir[3];
          this.setLayout(curDir.join(" "), null, true);
          this.maxHeight = maxHeight;
          this.updateBind("maxHeight");
          this.maxWidth = maxWidth;
          this.updateBind("maxWidth");
          var style = {
            left: "auto",
            right: "auto",
            top: "auto",
            bottom: "auto"
          };
          switch (dirH) {
            case LEFT:
              style.left = point.x + "px";
              break;
            case CENTER:
              style.left = Math.round(point.x - this.element.offsetWidth / 2) + "px";
              break;
            case RIGHT:
              style.right = offsetParent.clientWidth - point.x + "px";
              break;
          }
          switch (dirV) {
            case TOP:
              style.top = point.y + "px";
              break;
            case CENTER:
              style.top = Math.round(point.y - this.element.offsetHeight / 2) + "px";
              break;
            case BOTTOM:
              style.bottom = offsetParent.clientHeight - point.y + "px";
              break;
          }
          cssom.setStyle(this.element, style);
          this.emit_realign();
        }
      },
      resolveRelElement: function(value) {
        if (typeof value == "string") {
          if (value.substr(0, 6) != "owner:") return domUtils.get(value);
          if (this.owner) return this.owner.tmpl && this.owner.tmpl[value.substr(6)] || this.owner.element; else return null;
        }
        if (Array.isArray(value)) return value;
        return value || null;
      },
      show: function(relElement, dir, orientation) {
        this.visibleArgs_ = basis.array(arguments);
        this.relElement_ = this.resolveRelElement(relElement || this.relElement);
        this.setLayout(normalizeDir(dir, this.defaultDir), orientation);
        if (!this.visible) {
          if (!this.relElement_) {
            basis.dev.warn("Popup#show(): relElement missed");
            return;
          }
          cssom.visibility(this.element, false);
          popupManager.add(this);
          this.emit_beforeShow();
          this.visible = true;
          this.realign();
          cssom.visibility(this.element, true);
          this.emit_show();
        } else this.realign();
      },
      hide: function() {
        this.visibleArgs_ = null;
        this.relElement_ = null;
        if (this.visible) {
          this.visible = false;
          popupManager.remove(this);
          this.emit_hide();
        }
      },
      hideAll: function() {
        popupManager.clear();
      },
      destroy: function() {
        this.hide();
        this.relElement = null;
        Node.prototype.destroy.call(this);
      }
    });
    var Balloon = Popup.subclass({
      className: namespace + ".Balloon",
      template: templates.Balloon
    });
    module.exports = {
      ORIENTATION: ORIENTATION,
      DIR: {
        LEFT: LEFT,
        RIGHT: RIGHT,
        TOP: TOP,
        BOTTOM: BOTTOM,
        CENTER: CENTER
      },
      Popup: Popup,
      Balloon: Balloon
    };
  },
  "b.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var consts = basis.require("./c.js");
    var MARKER = consts.MARKER;
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_NAME_BY_TYPE = consts.ATTR_NAME_BY_TYPE;
    var ELEMENT_NAME = consts.ELEMENT_NAME;
    var ELEMENT_ATTRIBUTES_AND_CHILDREN = consts.ELEMENT_ATTRIBUTES_AND_CHILDREN;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var inlineSeed = 1;
    var tmplFunctions = {};
    var SET_NONELEMENT_PROPERTY_SUPPORT = function() {
      try {
        global.document.createTextNode("").x = 1;
        return true;
      } catch (e) {
        return false;
      }
    }();
    var buildPathes = function() {
      var PATH_REF_NAME = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      var pathList;
      var refList;
      var bindingList;
      var markedElementList;
      var rootPath;
      var attrExprId;
      function putRefs(refs, pathIdx) {
        for (var i = 0, refName; refName = refs[i]; i++) if (refName.indexOf(":") == -1) refList.push(refName + ":" + pathIdx);
      }
      function putPath(path) {
        var len = pathList.length;
        var pathRef = PATH_REF_NAME[len] || "r" + len;
        pathList.push(pathRef + "=" + path);
        return pathRef;
      }
      function putBinding(binding) {
        bindingList.push(binding);
      }
      function processTokens(tokens, path, noTextBug) {
        var localPath;
        var refs;
        var myRef;
        var explicitRef;
        var bindings;
        for (var i = 0, cp = 0, closeText = 0, token; token = tokens[i]; i++, cp++, explicitRef = false) {
          if (!i) localPath = path + ".firstChild"; else {
            if (!tokens[i + 1]) localPath = path + ".lastChild"; else {
              if (token[TOKEN_TYPE] == tokens[i - 1][TOKEN_TYPE] && token[TOKEN_TYPE] == TYPE_TEXT) closeText++;
              localPath = path + ".childNodes[" + (noTextBug ? cp : cp + (closeText ? " + " + closeText + " * TEXT_BUG" : "")) + "]";
            }
          }
          if (refs = token[TOKEN_REFS]) {
            explicitRef = true;
            localPath = putPath(localPath);
            putRefs(refs, localPath);
          }
          if (token[TOKEN_BINDINGS]) {
            if (token[TOKEN_BINDINGS] && typeof token[TOKEN_BINDINGS] == "number") token[TOKEN_BINDINGS] = token[TOKEN_REFS][token[TOKEN_BINDINGS] - 1];
            if (!explicitRef) {
              explicitRef = true;
              localPath = putPath(localPath);
            }
            putBinding([ token[TOKEN_TYPE], localPath, token[TOKEN_BINDINGS], refs ? refs.indexOf("element") != -1 : false ]);
          }
          if (path == rootPath && (SET_NONELEMENT_PROPERTY_SUPPORT || token[TOKEN_TYPE] == TYPE_ELEMENT)) markedElementList.push(localPath + "." + MARKER);
          if (token[TOKEN_TYPE] == TYPE_ELEMENT) {
            myRef = -1;
            if (!explicitRef) {
              localPath = putPath(localPath);
              myRef = pathList.length;
            }
            var attrs = [];
            var children = [];
            for (var j = ELEMENT_ATTRIBUTES_AND_CHILDREN, t; t = token[j]; j++) if (t[TOKEN_TYPE] == TYPE_ELEMENT || t[TOKEN_TYPE] == TYPE_TEXT || t[TOKEN_TYPE] == TYPE_COMMENT) children.push(t); else attrs.push(t);
            for (var j = 0, attr; attr = attrs[j]; j++) {
              var attrTokenType = attr[TOKEN_TYPE];
              if (attrTokenType == TYPE_ATTRIBUTE_EVENT) continue;
              var attrName = ATTR_NAME_BY_TYPE[attrTokenType] || attr[ATTR_NAME];
              if (refs = attr[TOKEN_REFS]) {
                explicitRef = true;
                putRefs(refs, putPath(localPath + '.getAttributeNode("' + attrName + '")'));
              }
              if (bindings = attr[TOKEN_BINDINGS]) {
                explicitRef = true;
                switch (attrTokenType) {
                  case TYPE_ATTRIBUTE_CLASS:
                    for (var k = 0, binding; binding = bindings[k]; k++) putBinding([ 2, localPath, binding[1], attrName, binding[0] ].concat(binding[2] == -1 ? [] : binding.slice(2)));
                    break;
                  case TYPE_ATTRIBUTE_STYLE:
                    for (var k = 0, property; property = bindings[k]; k++) {
                      attrExprId++;
                      for (var m = 0, bindName; bindName = property[0][m]; m++) putBinding([ 2, localPath, bindName, attrName, property[0], property[1], property[2], property[3], attrExprId ]);
                    }
                    break;
                  default:
                    attrExprId++;
                    for (var k = 0, bindName; bindName = bindings[0][k]; k++) putBinding([ 2, localPath, bindName, attrName, bindings[0], bindings[1], token[ELEMENT_NAME], attrExprId ]);
                }
              }
            }
            if (children.length) processTokens(children, localPath, noTextBug);
            if (!explicitRef && myRef == pathList.length) pathList.pop();
          }
        }
      }
      return function(tokens, path, noTextBug) {
        pathList = [];
        refList = [];
        bindingList = [];
        markedElementList = [];
        rootPath = path || "_";
        attrExprId = 0;
        processTokens(tokens, rootPath, noTextBug);
        return {
          path: pathList,
          ref: refList,
          binding: bindingList,
          markedElementList: markedElementList
        };
      };
    }();
    var buildBindings = function() {
      var L10N_BINDING = /\.\{([a-zA-Z_][a-zA-Z0-9_\-]*)\}/;
      var SPECIAL_ATTR_MAP = {
        disabled: "*",
        checked: [ "input" ],
        indeterminate: [ "input" ],
        value: [ "input", "textarea", "select" ],
        minlength: [ "input" ],
        maxlength: [ "input" ],
        readonly: [ "input" ],
        selected: [ "option" ],
        multiple: [ "select" ]
      };
      var SPECIAL_ATTR_SINGLE = {
        disabled: true,
        checked: true,
        selected: true,
        readonly: true,
        multiple: true,
        indeterminate: true
      };
      var STYLE_EXPR_VALUE = {
        show: '"none"',
        visible: '"hidden"'
      };
      var STYLE_EXPR_TOGGLE = {
        hide: '?"none":""',
        show: '?"":"none"',
        hidden: '?"hidden":""',
        visible: '?"":"hidden"'
      };
      var bindFunctions = {
        1: "bind_element",
        3: "bind_textNode",
        8: "bind_comment"
      };
      function quoteString(value) {
        return '"' + value.replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
      }
      function simpleStringify(val) {
        return typeof val == "string" ? quoteString(val) : val;
      }
      function stringifyBindingNames(val) {
        if (val.indexOf("l10n:") == 0) val = this[val.substr(5)] || val;
        return quoteString(val);
      }
      function buildAttrExpression(binding, special, l10n) {
        var expression = [];
        var cond = [];
        var symbols = binding[5];
        var dictionary = binding[4];
        var exprVar;
        var colonPos;
        for (var j = 0; j < symbols.length; j++) {
          if (typeof symbols[j] == "string") expression.push(quoteString(symbols[j])); else {
            exprVar = dictionary[symbols[j]];
            colonPos = exprVar.indexOf(":");
            if (colonPos == -1) {
              expression.push(special == "l10n" ? '"{' + exprVar + '}"' : special == "bool" ? "(__" + exprVar + '||"")' : "__" + exprVar);
              if (!special) cond.push("__" + exprVar + "!==undefined");
            } else {
              var bindingName = null;
              var l10nPath = exprVar.substr(colonPos + 1).replace(L10N_BINDING, function(m, name) {
                bindingName = name;
                return "";
              });
              if (bindingName) {
                if (l10n === false) return false;
                expression.push(l10n[exprVar.substr(colonPos + 1)]);
                if (!special) cond.push(l10n[exprVar.substr(colonPos + 1)] + "!==undefined");
              } else expression.push('l10n["' + l10nPath + '"]');
            }
          }
        }
        if (expression.length == 1) expression.push('""');
        expression = expression.join("+");
        if (!special && cond.length) expression = cond.join("&&") + "?(" + expression + '):""';
        return expression;
      }
      return function(bindings) {
        function putBindCode(type) {
          toolsUsed[type] = true;
          bindCode.push(bindVar + "=" + type + "(" + basis.array(arguments, 1) + ");");
        }
        var bindMap = {};
        var bindCode;
        var bindVar;
        var bindVarSeed = 0;
        var varList = [];
        var bindingsWoL10nCompute = [];
        var l10nComputeBindings = [];
        var varName;
        var l10nMap;
        var l10nCompute = [];
        var l10nBindings = {};
        var l10nBindSeed = 0;
        var attrExprId;
        var attrExprMap = {};
        var debugList = [];
        var toolsUsed = {};
        for (var i = 0, binding; binding = bindings[i]; i++) {
          var bindName = binding[2];
          var namePart = bindName.split(":");
          if (namePart[0] == "l10n" && namePart[1]) {
            var l10nFullPath = namePart[1];
            var l10nBinding = null;
            var l10nName = l10nFullPath.replace(L10N_BINDING, function(m, name) {
              l10nBinding = name;
              return "";
            });
            if (l10nBinding) {
              l10nComputeBindings.push(binding);
              if (l10nFullPath in l10nBindings == false) {
                varName = "$l10n_" + l10nBindSeed++;
                l10nBindings[l10nFullPath] = varName;
                l10nCompute.push(varName);
                varList.push(varName + '=tools.l10nToken("' + l10nName + '").computeToken()');
                bindCode = bindMap[l10nBinding];
                if (!bindCode) {
                  bindCode = bindMap[l10nBinding] = [];
                  varList.push("__" + l10nBinding);
                }
                bindCode.push(varName + ".set(__" + l10nBinding + ");");
              }
              continue;
            }
          }
          bindingsWoL10nCompute.push(binding);
        }
        for (var i = 0, binding; binding = l10nComputeBindings[i]; i++) {
          var bindType = binding[0];
          var domRef = binding[1];
          var bindName = binding[2];
          var nodeBindingProhibited = binding[3];
          var l10nFullPath = bindName.split(":")[1];
          bindName = l10nBindings[l10nFullPath];
          bindVar = "_" + bindVarSeed++;
          varName = "__" + bindName;
          bindCode = bindMap[bindName];
          if (!bindCode) {
            bindCode = bindMap[bindName] = [];
            varList.push(varName);
          }
          if (bindType == TYPE_TEXT) {
            debugList.push("{" + [ 'binding:"' + bindName + '"', "dom:" + domRef, "val:" + bindVar, "l10n:true", "attachment:" + bindName ] + "}");
            varList.push(bindVar + "=" + domRef);
            putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
          } else {
            var expr = buildAttrExpression(binding, false, l10nBindings);
            attrExprId = binding[7];
            if (!attrExprMap[attrExprId]) {
              varList.push(bindVar);
              attrExprMap[attrExprId] = bindVar;
            }
            bindVar = attrExprMap[attrExprId];
            attrName = '"' + binding[ATTR_NAME] + '"';
            debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:" + bindName + ".get()", "l10n:true", 'type:"l10n"', "expr:[[" + binding[5].map(simpleStringify) + "],[" + binding[4].map(simpleStringify) + "],[" + binding[4].map(stringifyBindingNames, l10nBindings) + "]]", "dom:" + domRef, "attr:" + attrName, "val:" + bindVar, "attachment:" + bindName ] + "}");
            putBindCode("bind_attr", domRef, attrName, bindVar, expr);
          }
        }
        for (var i = 0, binding; binding = bindingsWoL10nCompute[i]; i++) {
          var bindType = binding[0];
          var domRef = binding[1];
          var bindName = binding[2];
          var nodeBindingProhibited = binding[3];
          if ([ "get", "set", "templateId_" ].indexOf(bindName) != -1) {
            basis.dev.warn("binding name `" + bindName + "` is prohibited, binding ignored");
            continue;
          }
          var namePart = bindName.split(":");
          var anim = namePart[0] == "anim";
          var l10n = namePart[0] == "l10n";
          if (anim) bindName = namePart[1];
          bindCode = hasOwnProperty.call(bindMap, bindName) ? bindMap[bindName] : null;
          bindVar = "_" + bindVarSeed++;
          varName = "__" + bindName;
          if (l10n && namePart[1]) {
            var l10nFullPath = namePart[1];
            var l10nBinding = null;
            var l10nName = l10nFullPath;
            if (!l10nMap) l10nMap = {};
            if (!bindMap[l10nName]) {
              bindMap[l10nName] = [];
              bindMap[l10nName].l10n = "$l10n_" + l10nBindSeed++;
              varList.push("__" + bindMap[l10nName].l10n + '=l10n["' + l10nName + '"]');
              l10nMap[l10nName] = [];
            }
            bindCode = bindMap[l10nName];
            if (bindType == TYPE_TEXT) {
              debugList.push("{" + [ 'binding:"' + l10nFullPath + '"', "dom:" + domRef, 'val:l10n["' + l10nName + '"]', "l10n:true", 'attachment:l10nToken("' + l10nName + '")' ] + "}");
              toolsUsed.l10nToken = true;
              l10nMap[l10nName].push(domRef + ".nodeValue=value;");
              if (!bindCode.nodeBind) {
                varList.push(bindVar + "=" + domRef);
                putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
                bindCode.nodeBind = bindVar;
              } else {
                bindCode.push(domRef + ".nodeValue=value;");
              }
              continue;
            } else {
              var expr = buildAttrExpression(binding, "l10n", false);
              if (expr !== false) {
                l10nMap[l10nName].push("bind_attr(" + [ domRef, '"' + binding[ATTR_NAME] + '"', "NaN", expr ] + ");");
              }
            }
          }
          if (!bindCode) {
            bindCode = bindMap[bindName] = [];
            varList.push(varName);
          }
          if (bindType != TYPE_ATTRIBUTE) {
            debugList.push("{" + [ 'binding:"' + bindName + '"', "dom:" + domRef, "val:" + (bindCode.nodeBind ? varName : bindVar), "updates:$$" + bindName, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
            if (!bindCode.nodeBind) {
              varList.push(bindVar + "=" + domRef);
              putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
              bindCode.nodeBind = bindVar;
            } else {
              switch (bindType) {
                case TYPE_ELEMENT:
                  putBindCode(bindFunctions[bindType], domRef, domRef, "value!==null?String(value):null");
                  break;
                case TYPE_TEXT:
                  bindCode.push(domRef + ".nodeValue=value;");
                  break;
              }
            }
          } else {
            var attrName = binding[ATTR_NAME];
            switch (attrName) {
              case "role-marker":
                varList.push(bindVar + '=""');
                putBindCode("bind_attr", domRef, '"' + attrName + '"', bindVar, "value?value" + (binding[5][1] ? "+" + quoteString(binding[5][1]) : "") + ':""');
                break;
              case "class":
                var defaultExpr = "";
                var valueExpr = "value";
                var bindingType = binding[5];
                var defaultValue = binding[7];
                switch (bindingType) {
                  case CLASS_BINDING_BOOL:
                    var values = [ binding[6] ];
                    var prefix = binding[4];
                    var classes = Array.isArray(prefix) ? prefix : values.map(function(val) {
                      return prefix + val;
                    });
                    valueExpr = 'value?"' + classes[0] + '":""';
                    if (defaultValue) defaultExpr = classes[defaultValue - 1];
                    break;
                  case CLASS_BINDING_ENUM:
                    var values = binding[8];
                    var prefix = binding[4];
                    var classes = Array.isArray(prefix) ? prefix : values.map(function(val) {
                      return prefix + val;
                    });
                    valueExpr = values.map(function(val, idx) {
                      return 'value=="' + val + '"?"' + classes[idx] + '"';
                    }).join(":") + ':""';
                    if (defaultValue) defaultExpr = classes[defaultValue - 1];
                    break;
                  default:
                    var prefix = binding[4];
                    valueExpr = 'typeof value=="string"||typeof value=="number"?"' + prefix + '"+value:(value?"' + prefix + bindName + '":"")';
                }
                varList.push(bindVar + '="' + defaultExpr + '"');
                putBindCode("bind_attrClass", domRef, bindVar, valueExpr, anim);
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:__" + bindName, 'prefix:"' + prefix + '"', "anim:" + anim, "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
                break;
              case "style":
                var expr = buildAttrExpression(binding, "style", l10nBindings);
                attrExprId = binding[8];
                if (!attrExprMap[attrExprId]) {
                  attrExprMap[attrExprId] = bindVar;
                  varList.push(bindVar + "=" + (STYLE_EXPR_VALUE[binding[7]] || '""'));
                }
                if (binding[7]) expr = expr.replace(/\+""$/, "") + (STYLE_EXPR_TOGGLE[binding[7]] || "");
                bindVar = attrExprMap[attrExprId];
                putBindCode("bind_attrStyle", domRef, '"' + binding[6] + '"', bindVar, expr);
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:__" + bindName, 'property:"' + binding[6] + '"', "expr:[[" + binding[5].map(simpleStringify) + "],[" + binding[4].map(simpleStringify) + "]]", "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
                break;
              default:
                var specialAttr = SPECIAL_ATTR_MAP[attrName];
                var tagName = binding[6].toLowerCase();
                var expr = specialAttr && SPECIAL_ATTR_SINGLE[attrName] ? buildAttrExpression(binding, "bool", l10nBindings) + '?"' + attrName + '":""' : buildAttrExpression(binding, false, l10nBindings);
                attrExprId = binding[7];
                if (!attrExprMap[attrExprId]) {
                  varList.push(bindVar);
                  attrExprMap[attrExprId] = bindVar;
                }
                bindVar = attrExprMap[attrExprId];
                if (attrName == "tabindex") putBindCode("bind_attr", domRef, '"' + attrName + '"', bindVar, expr + "==-1?" + ([ "input", "button", "textarea" ].indexOf(tagName) == -1 ? '""' : "-1") + ":" + expr); else putBindCode("bind_attr", domRef, '"' + attrName + '"', bindVar, expr);
                if (specialAttr && (specialAttr == "*" || specialAttr.indexOf(tagName) != -1)) bindCode.push("if(" + domRef + "." + attrName + "!=" + bindVar + ")" + domRef + "." + attrName + "=" + (SPECIAL_ATTR_SINGLE[attrName] ? "!!" + bindVar : bindVar) + ";");
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:" + (l10n ? 'l10n["' + l10nFullPath + '"]' : "__" + bindName), 'type:"' + (specialAttr && SPECIAL_ATTR_SINGLE[attrName] ? "bool" : "string") + '"', "expr:[[" + binding[5].map(simpleStringify) + "],[" + binding[4].map(simpleStringify) + "],[" + binding[4].map(stringifyBindingNames, l10nBindings) + "]]", "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
            }
          }
        }
        var bindMapKeys = basis.object.keys(bindMap);
        var setFunction = "";
        if (bindMapKeys.length) {
          toolsUsed.resolve = true;
          setFunction = [ ";function set(bindName,value){", 'if(typeof bindName!="string")' ];
          for (var bindName in bindMap) if (bindMap[bindName].nodeBind) {
            setFunction.push("if(bindName===" + bindMap[bindName].nodeBind + ")" + 'bindName="' + bindName + '";' + "else ");
          }
          setFunction.push("return;", "rawValues[bindName]=value;", "value=resolve.call(instance,bindName,value,Attaches);", "switch(bindName){");
          for (var bindName in bindMap) {
            var stateVar = bindMap[bindName].l10n || bindName;
            varList.push("$$" + stateVar + "=0");
            setFunction.push('case"' + bindName + '":', "if(__" + stateVar + "!==value)", "{", "$$" + stateVar + "++;", "__" + stateVar + "=value;", bindMap[bindName].join(""), "}", "break;");
          }
          setFunction = setFunction.join("") + "}}";
        }
        var toolsVarList = [];
        for (var key in toolsUsed) toolsVarList.push(key + "=tools." + key);
        return {
          debugList: debugList,
          allKeys: bindMapKeys,
          keys: bindMapKeys.filter(function(key) {
            return key.indexOf("@") == -1;
          }),
          tools: toolsVarList,
          vars: varList,
          set: setFunction,
          l10n: l10nMap,
          l10nCompute: l10nCompute
        };
      };
    }();
    function compileFunction(args, body) {
      try {
        return new Function(args, body);
      } catch (e) {
        basis.dev.error("Can't build template function: " + e + "\n", "function(" + args + "){\n" + body + "\n}");
      }
    }
    var getFunctions = function(tokens, debug, uri, source, noTextBug) {
      var fn = tmplFunctions[uri && basis.path.relative(uri)];
      if (fn) return fn;
      var paths = buildPathes(tokens, "_", noTextBug);
      var bindings = buildBindings(paths.binding);
      var objectRefs = paths.markedElementList.join("=");
      var result = {
        keys: bindings.keys,
        l10nKeys: basis.object.keys(bindings.l10n)
      };
      if (tokens.length == 1) paths.path[0] = "a=_";
      if (!uri) uri = basis.path.baseURI + "inline_template" + inlineSeed++ + ".tmpl";
      if (bindings.l10n) {
        var code = [];
        for (var key in bindings.l10n) code.push('case"' + key + '":' + bindings.l10n[key].join("") + "break;");
        result.createL10nSync = compileFunction([ "_", "l10n", "bind_attr", "TEXT_BUG" ], (source ? "\n// " + source.split(/\r\n?|\n\r?/).join("\n// ") + "\n\n" : "") + "var " + paths.path + ";" + "return function(path, value){" + "switch(path){" + code.join("") + "}" + "}" + "\n\n//# sourceURL=" + basis.path.origin + uri + "_l10n");
      }
      result.createInstanceFactory = compileFunction([ "tid", "createDOM", "tools", "l10nMap", "l10nMarkup", "getBindings", "TEXT_BUG" ], (source ? "\n// " + source.split(/\r\n?|\n\r?/).join("\n// ") + "\n\n" : "") + "var " + (bindings.tools.length ? bindings.tools + "," : "") + (bindings.set ? "Attaches=function(){};" + "Attaches.prototype={" + bindings.keys.map(function(key) {
        return key + ":null";
      }) + "};" : "set=function(){};") + "return function createTmpl_(id,instance,initL10n){" + "var _=createDOM()," + (bindings.l10n ? "l10n=initL10n?{}:l10nMap," : "") + paths.path.concat(bindings.vars) + ",rawValues={}" + (debug ? ";instance.debug=function debug(){" + "return {" + "bindings:[" + bindings.debugList + "]," + "values:{" + bindings.keys.map(function(key) {
        return '"' + key + '":__' + key;
      }) + "}," + "rawValues:rawValues," + (bindings.l10nCompute.length ? "compute:Array.prototype.slice.call(instance.compute)" : "compute:[]") + "}" + "}" : "") + (bindings.l10nCompute.length ? ";instance.compute=[" + bindings.l10nCompute + "]" : "") + ";instance.tmpl={" + [ paths.ref, "templateId_:id", "set:set" ] + "}" + (objectRefs ? ";if(instance.context||instance.onAction)" + objectRefs + "=(id<<12)|tid" : "") + bindings.set + (bindings.l10n ? ";if(initL10n){l10n=l10nMap;initL10n(set)}" + ";if(l10nMarkup.length)for(var idx=0,token;token=l10nMarkup[idx];idx++)set(token.path,token.token);" : "") + (bindings.set ? ";if(instance.bindings)instance.handler=getBindings(instance,set)" : "") + ";" + bindings.l10nCompute.map(function(varName) {
        return 'set("' + varName + '",' + varName + ")";
      }) + "}" + "\n\n//# sourceURL=" + basis.path.origin + uri);
      return result;
    };
    module.exports = {
      getFunctions: getFunctions
    };
  },
  "a.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var Emitter = basis.require("./7.js").Emitter;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var autoFetchDictionaryResource = true;
    basis.resource.extensions[".l10n"] = function(content, url) {
      var dictionary;
      autoFetchDictionaryResource = false;
      dictionary = resolveDictionary(url);
      autoFetchDictionaryResource = true;
      return dictionary.update(basis.resource.extensions[".json"](content, url));
    };
    var tokenIndex = [];
    var tokenComputeFn = {};
    var basisTokenPrototypeSet = basis.Token.prototype.set;
    var tokenType = {
      "default": true,
      plural: true,
      markup: true,
      "plural-markup": true,
      "enum-markup": true
    };
    var nestedType = {
      "default": "default",
      plural: "default",
      markup: "default",
      "plural-markup": "markup",
      "enum-markup": "markup"
    };
    var isPluralType = {
      plural: true,
      "plural-markup": true
    };
    var ComputeToken = Class(basis.Token, {
      className: namespace + ".ComputeToken",
      dictionary: null,
      token: null,
      parent: "",
      init: function(value) {
        this.token.computeTokens[this.basisObjectId] = this;
        basis.Token.prototype.init.call(this, value);
      },
      get: function() {
        var value = this.dictionary.getValue(this.getName());
        if (isPluralType[this.token.getType()]) value = String(value).replace(/\{#\}/g, this.value);
        return value;
      },
      getName: function() {
        var key = this.value;
        if (isPluralType[this.token.getType()]) key = cultures[currentCulture].plural(key);
        return this.parent + "." + key;
      },
      getType: function() {
        var type = this.token.getType();
        return this.dictionary.types[this.getName()] || nestedType[type] || "default";
      },
      getParentType: function() {
        return this.token.getType();
      },
      toString: function() {
        return this.get();
      },
      destroy: function() {
        delete this.token.computeTokens[this.basisObjectId];
        basis.Token.prototype.destroy.call(this);
      }
    });
    var Token = Class(basis.Token, {
      className: namespace + ".Token",
      index: NaN,
      dictionary: null,
      name: "",
      type: "default",
      computeTokens: null,
      computeTokenClass: null,
      init: function(dictionary, tokenName, value) {
        basis.Token.prototype.init.call(this, value);
        this.index = tokenIndex.push(this) - 1;
        this.name = tokenName;
        this.parent = tokenName.replace(/(^|\.)[^.]+$/, "");
        this.dictionary = dictionary;
        this.computeTokens = {};
      },
      toString: function() {
        return this.get();
      },
      apply: function() {
        for (var key in this.computeTokens) this.computeTokens[key].apply();
        basis.Token.prototype.apply.call(this);
      },
      set: function() {
        basis.dev.warn("basis.l10n: Value for l10n token can't be set directly, but through dictionary update only");
      },
      getName: function() {
        return this.name;
      },
      getType: function() {
        return this.dictionary.types[this.name] || nestedType[this.dictionary.types[this.parent]] || "default";
      },
      getParentType: function() {
        return this.parent ? this.dictionary.token(this.parent).getType() : "default";
      },
      setType: function() {
        basis.dev.warn("basis.l10n: Token#setType() is deprecated");
      },
      compute: function(events, getter) {
        if (arguments.length == 1) {
          getter = events;
          events = "";
        }
        getter = basis.getter(getter);
        events = String(events).trim().split(/\s+|\s*,\s*/).sort();
        var tokenId = this.basisObjectId;
        var enumId = events.concat(tokenId, getter[basis.getter.ID]).join("_");
        if (tokenComputeFn[enumId]) return tokenComputeFn[enumId];
        var token = this;
        var objectTokenMap = {};
        var updateValue = function(object) {
          basisTokenPrototypeSet.call(this, getter(object));
        };
        var handler = {
          destroy: function(object) {
            delete objectTokenMap[object.basisObjectId];
            this.destroy();
          }
        };
        for (var i = 0, eventName; eventName = events[i]; i++) if (eventName != "destroy") handler[eventName] = updateValue;
        return tokenComputeFn[enumId] = function(object) {
          if (object instanceof Emitter == false) throw "basis.l10n.Token#compute: object must be an instanceof Emitter";
          var objectId = object.basisObjectId;
          var computeToken = objectTokenMap[objectId];
          if (!computeToken) {
            computeToken = objectTokenMap[objectId] = token.computeToken(getter(object));
            object.addHandler(handler, computeToken);
          }
          return computeToken;
        };
      },
      computeToken: function(value) {
        var ComputeTokenClass = this.computeTokenClass;
        if (!ComputeTokenClass) ComputeTokenClass = this.computeTokenClass = ComputeToken.subclass({
          dictionary: this.dictionary,
          token: this,
          parent: this.name
        });
        return new ComputeTokenClass(value);
      },
      token: function(name) {
        if (isPluralType[this.getType()]) return this.computeToken(name, this);
        if (this.dictionary) return this.dictionary.token(this.name + "." + name);
      },
      destroy: function() {
        for (var key in this.computeTokens) this.computeTokens[key].destroy();
        this.computeTokenClass = null;
        this.computeTokens = null;
        this.value = null;
        this.dictionary = null;
        tokenIndex[this.index] = null;
        basis.Token.prototype.destroy.call(this);
      }
    });
    function resolveToken(path) {
      if (path.charAt(0) == "#") {
        return tokenIndex[parseInt(path.substr(1), 36)];
      } else {
        var parts = path.match(/^(.+?)@(.+)$/);
        if (parts) return resolveDictionary(basis.path.resolve(parts[2])).token(parts[1]);
        basis.dev.warn("basis.l10n.token accepts token references in format `token.path@path/to/dict.l10n` only");
      }
    }
    function isToken(value) {
      return value ? value instanceof Token || value instanceof ComputeToken : false;
    }
    function isPluralToken(value) {
      return isToken(value) && isPluralType[value.getType()];
    }
    function isMarkupToken(value) {
      return isToken(value) && value.getType() == "markup";
    }
    var dictionaries = [];
    var dictionaryByUrl = {};
    var createDictionaryNotifier = new basis.Token;
    function walkTokens(dictionary, culture, tokens, path) {
      var cultureValues = dictionary.cultureValues[culture];
      path = path ? path + "." : "";
      for (var name in tokens) {
        if (name.indexOf(".") != -1) {
          basis.dev.warn((dictionary.resource ? dictionary.resource.url : "[anonymous dictionary]") + ": wrong token name `" + name + "`, token ignored.");
          continue;
        }
        if (hasOwnProperty.call(tokens, name)) {
          var tokenName = path + name;
          var tokenValue = tokens[name];
          cultureValues[tokenName] = tokenValue;
          if (tokenValue && (typeof tokenValue == "object" || Array.isArray(tokenValue))) walkTokens(dictionary, culture, tokenValue, tokenName);
        }
      }
    }
    var Dictionary = Class(null, {
      className: namespace + ".Dictionary",
      tokens: null,
      types: null,
      cultureValues: null,
      index: NaN,
      resource: null,
      init: function(content) {
        this.tokens = {};
        this.types = {};
        this.cultureValues = {};
        this.index = dictionaries.push(this) - 1;
        if (basis.resource.isResource(content)) {
          var resource = content;
          this.resource = resource;
          if (!dictionaryByUrl[resource.url]) {
            dictionaryByUrl[resource.url] = this;
            createDictionaryNotifier.set(resource.url);
          }
          if (autoFetchDictionaryResource) resource.fetch();
        } else {
          this.update(content || {});
        }
      },
      update: function(data) {
        if (!data) data = {};
        this.cultureValues = {};
        for (var culture in data) if (!/^_|_$/.test(culture)) {
          this.cultureValues[culture] = {};
          walkTokens(this, culture, data[culture]);
        }
        var newTypes = data._meta && data._meta.type || {};
        var currentTypes = {};
        for (var path in this.tokens) currentTypes[path] = this.tokens[path].getType();
        this.types = {};
        for (var path in newTypes) this.types[path] = tokenType[newTypes[path]] == true ? newTypes[path] : "default";
        for (var path in this.tokens) {
          var token = this.tokens[path];
          if (token.getType() != currentTypes[path]) this.tokens[path].apply();
        }
        this.syncValues();
        return this;
      },
      syncValues: function() {
        for (var tokenName in this.tokens) basisTokenPrototypeSet.call(this.tokens[tokenName], this.getValue(tokenName));
      },
      getValue: function(tokenName) {
        var fallback = cultureFallback[currentCulture] || [];
        for (var i = 0, cultureName; cultureName = fallback[i]; i++) {
          var cultureValues = this.cultureValues[cultureName];
          if (cultureValues && tokenName in cultureValues) return cultureValues[tokenName];
        }
      },
      getCultureValue: function(culture, tokenName) {
        return this.cultureValues[culture] && this.cultureValues[culture][tokenName];
      },
      token: function(tokenName) {
        var token = this.tokens[tokenName];
        if (!token) {
          token = this.tokens[tokenName] = new Token(this, tokenName, this.getValue(tokenName));
        }
        return token;
      },
      destroy: function() {
        this.tokens = null;
        this.cultureValues = null;
        basis.array.remove(dictionaries, this);
        if (this.resource) {
          delete dictionaryByUrl[this.resource.url];
          this.resource = null;
        }
      }
    });
    function resolveDictionary(source) {
      var dictionary;
      if (typeof source == "string") {
        var location = source;
        var extname = basis.path.extname(location);
        if (extname != ".l10n") location = location.replace(new RegExp(extname + "([#?]|$)"), ".l10n$1");
        source = basis.resource(location);
      }
      if (basis.resource.isResource(source)) dictionary = dictionaryByUrl[source.url];
      return dictionary || new Dictionary(source);
    }
    function getDictionaries() {
      return dictionaries.slice(0);
    }
    var cultureList = [];
    var currentCulture = null;
    var cultures = {};
    var cultureFallback = {};
    var pluralFormsMap = {};
    var pluralForms = [ [ 1, function() {
      return 0;
    } ], [ 2, function(n) {
      return n == 1 || n % 10 == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 0 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 0 || n == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n % 10 != 1 || n % 100 == 11 ? 1 : 0;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n != 0 ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 0 ? 0 : n == 1 ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
    } ], [ 4, function(n) {
      return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
    } ], [ 4, function(n) {
      return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
    } ], [ 5, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
    } ], [ 6, function(n) {
      return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    } ] ];
    [ "ay bo cgg dz fa id ja jbo ka kk km ko ky lo ms my sah su th tt ug vi wo zh", "mk", "jv", "af an ast az bg bn brx ca da de doi el en eo es es-AR et eu ff fi fo fur fy gl gu ha he hi hne hu hy ia it kn ku lb mai ml mn mni mr nah nap nb ne nl nn no nso or pa pap pms ps pt rm rw sat sco sd se si so son sq sv sw ta te tk ur yo", "ach ak am arn br fil fr gun ln mfe mg mi oc pt-BR tg ti tr uz wa zh", "is", "csb", "lv", "lt", "be bs hr ru sr uk", "mnk", "ro", "pl", "cs sk", "cy", "kw", "sl", "mt", "gd", "ga", "ar" ].forEach(function(langs, idx) {
      langs.split(" ").forEach(function(lang) {
        pluralFormsMap[lang] = this;
      }, pluralForms[idx]);
    });
    var Culture = basis.Class(null, {
      className: namespace + ".Culture",
      name: "",
      pluralForm: null,
      init: function(name, pluralForm) {
        this.name = name;
        if (!cultures[name]) cultures[name] = this;
        this.pluralForm = pluralForm || pluralFormsMap[name] || pluralFormsMap[name.split("-")[0]] || pluralForms[0];
      },
      plural: function(value) {
        return Number(this.pluralForm[1](Math.abs(parseInt(value, 10))));
      }
    });
    function resolveCulture(name, pluralForm) {
      if (name && !cultures[name]) cultures[name] = new Culture(name, pluralForm);
      return cultures[name || currentCulture];
    }
    basis.object.extend(resolveCulture, new basis.Token);
    resolveCulture.set = setCulture;
    function getCulture() {
      return currentCulture;
    }
    function setCulture(culture) {
      if (!culture) return;
      if (currentCulture != culture) {
        if (cultureList.indexOf(culture) == -1) {
          basis.dev.warn("basis.l10n.setCulture: culture `" + culture + "` not in the list, the culture isn't changed");
          return;
        }
        currentCulture = culture;
        for (var i = 0, dictionary; dictionary = dictionaries[i]; i++) dictionary.syncValues();
        basis.Token.prototype.set.call(resolveCulture, culture);
      }
    }
    function getCultureList() {
      return cultureList.slice(0);
    }
    function setCultureList(list) {
      if (typeof list == "string") list = list.trim().split(" ");
      if (!list.length) {
        basis.dev.warn("basis.l10n.setCultureList: culture list can't be empty, the culture list isn't changed");
        return;
      }
      var cultures = {};
      var cultureRow;
      var baseCulture;
      cultureFallback = {};
      for (var i = 0, culture, cultureName; culture = list[i]; i++) {
        cultureRow = culture.split("/");
        if (cultureRow.length > 2) {
          basis.dev.warn("basis.l10n.setCultureList: only one fallback culture can be set for certain culture, try to set `" + culture + "`; other cultures except first one was ignored");
          cultureRow = cultureRow.slice(0, 2);
        }
        cultureName = cultureRow[0];
        if (!baseCulture) baseCulture = cultureName;
        cultures[cultureName] = resolveCulture(cultureName);
        cultureFallback[cultureName] = cultureRow;
      }
      for (var cultureName in cultureFallback) {
        cultureFallback[cultureName] = basis.array.flatten(cultureFallback[cultureName].map(function(name) {
          return cultureFallback[name];
        })).concat(baseCulture).filter(function(item, idx, array) {
          return !idx || array.lastIndexOf(item, idx - 1) == -1;
        });
      }
      cultureList = basis.object.keys(cultures);
      if (currentCulture in cultures == false) setCulture(baseCulture);
    }
    function onCultureChange(fn, context, fire) {
      resolveCulture.attach(fn, context);
      if (fire) fn.call(context, currentCulture);
    }
    setCultureList("en-US");
    setCulture("en-US");
    module.exports = {
      ComputeToken: ComputeToken,
      Token: Token,
      token: resolveToken,
      isToken: isToken,
      isPluralToken: isPluralToken,
      isMarkupToken: isMarkupToken,
      Dictionary: Dictionary,
      dictionary: resolveDictionary,
      getDictionaries: getDictionaries,
      addCreateDictionaryHandler: createDictionaryNotifier.attach.bind(createDictionaryNotifier),
      removeCreateDictionaryHandler: createDictionaryNotifier.detach.bind(createDictionaryNotifier),
      Culture: Culture,
      culture: resolveCulture,
      getCulture: getCulture,
      setCulture: setCulture,
      getCultureList: getCultureList,
      setCultureList: setCultureList,
      pluralForms: pluralForms,
      onCultureChange: onCultureChange
    };
    (function() {
      var value = false;
      try {
        Object.defineProperty(module.exports, "enableMarkup", {
          get: function() {
            return value;
          },
          set: function(newValue) {
            basis.dev.warn("basis.l10n: enableMarkup option is deprecated, just remove it from your source code as markup l10n tokens enabled by default now");
            value = newValue;
          }
        });
      } catch (e) {}
    })();
  },
  "9.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Node = global.Node;
    var camelize = basis.string.camelize;
    var isMarkupToken = basis.require("./a.js").isMarkupToken;
    var getL10nToken = basis.require("./a.js").token;
    var getFunctions = basis.require("./b.js").getFunctions;
    var basisTemplate = basis.require("./d.js");
    var TemplateSwitchConfig = basisTemplate.TemplateSwitchConfig;
    var TemplateSwitcher = basisTemplate.TemplateSwitcher;
    var Template = basisTemplate.Template;
    var getSourceByPath = basisTemplate.get;
    var buildDOM = basis.require("./h.js");
    var CLONE_NORMALIZATION_TEXT_BUG = basis.require("./c.js").CLONE_NORMALIZATION_TEXT_BUG;
    var IS_SET_STYLE_SAFE = !!function() {
      try {
        return document.documentElement.style.color = "x";
      } catch (e) {}
    }();
    var l10nTemplate = {};
    var l10nTemplateSource = {};
    function getSourceFromL10nToken(token) {
      var dict = token.dictionary;
      var url = dict.resource ? dict.resource.url : "dictionary" + dict.basisObjectId;
      var name = token.getName();
      var id = name + "@" + url;
      var result = l10nTemplateSource[id];
      var sourceWrapper;
      if (!result) {
        var sourceToken = dict.token(name);
        result = l10nTemplateSource[id] = sourceToken.as(function(value) {
          if (sourceToken.getType() == "markup") {
            var parentType = sourceToken.getParentType();
            if (typeof value == "string" && (parentType == "plural" || parentType == "plural-markup")) value = value.replace(/\{#\}/g, "{__templateContext}");
            if (value != this.value) if (sourceWrapper) {
              sourceWrapper.detach(sourceToken, sourceToken.apply);
              sourceWrapper = null;
            }
            if (value && String(value).substr(0, 5) == "path:") {
              sourceWrapper = getSourceByPath(value.substr(5));
              sourceWrapper.attach(sourceToken, sourceToken.apply);
            }
            return sourceWrapper ? sourceWrapper.bindingBridge.get(sourceWrapper) : value;
          }
          return this.value;
        });
        result.id = "{l10n:" + id + "}";
        result.url = url + ":" + name;
      }
      return result;
    }
    function getL10nHtmlTemplate(token) {
      if (typeof token == "string") token = getL10nToken(token);
      if (!token) return null;
      var templateSource = getSourceFromL10nToken(token);
      var id = templateSource.id;
      var htmlTemplate = l10nTemplate[id];
      if (!htmlTemplate) htmlTemplate = l10nTemplate[id] = new HtmlTemplate(templateSource);
      return htmlTemplate;
    }
    var builder = function() {
      var WHITESPACE = /\s+/;
      var CLASSLIST_SUPPORTED = global.DOMTokenList && document && document.documentElement.classList instanceof global.DOMTokenList;
      var W3C_DOM_NODE_SUPPORTED = function() {
        try {
          return document instanceof Node;
        } catch (e) {}
      }() || false;
      function collapseDomFragment(fragment) {
        var startMarker = fragment.startMarker;
        var endMarker = fragment.endMarker;
        var cursor = startMarker.nextSibling;
        while (cursor && cursor !== endMarker) {
          var tmp = cursor;
          cursor = cursor.nextSibling;
          fragment.appendChild(tmp);
        }
        endMarker.parentNode.removeChild(endMarker);
        fragment.startMarker = null;
        fragment.endMarker = null;
        return startMarker;
      }
      var bind_node = W3C_DOM_NODE_SUPPORTED ? function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = !domNodeBindingProhibited && newValue && newValue instanceof Node ? newValue : domRef;
        if (newNode !== oldNode) {
          if (newNode.nodeType === 11 && !newNode.startMarker) {
            newNode.startMarker = document.createTextNode("");
            newNode.endMarker = document.createTextNode("");
            newNode.insertBefore(newNode.startMarker, newNode.firstChild);
            newNode.appendChild(newNode.endMarker);
          }
          if (oldNode.nodeType === 11 && oldNode.startMarker) oldNode = collapseDomFragment(oldNode);
          oldNode.parentNode.replaceChild(newNode, oldNode);
        }
        return newNode;
      } : function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = !domNodeBindingProhibited && newValue && typeof newValue == "object" ? newValue : domRef;
        if (newNode !== oldNode) {
          try {
            oldNode.parentNode.replaceChild(newNode, oldNode);
          } catch (e) {
            newNode = domRef;
            if (oldNode !== newNode) oldNode.parentNode.replaceChild(newNode, oldNode);
          }
        }
        return newNode;
      };
      var bind_element = function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = bind_node(domRef, oldNode, newValue, domNodeBindingProhibited);
        if (newNode === domRef && typeof newValue == "string") domRef.innerHTML = newValue;
        return newNode;
      };
      var bind_comment = bind_node;
      var bind_textNode = function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = bind_node(domRef, oldNode, newValue, domNodeBindingProhibited);
        if (newNode === domRef) domRef.nodeValue = String(newValue);
        return newNode;
      };
      var bind_attrClass = CLASSLIST_SUPPORTED ? normalAttrClass : legacyAttrClass;
      function normalAttrClass(domRef, oldClass, newValue, anim) {
        var classList = domRef.classList;
        if (!classList) return legacyAttrClass(domRef, oldClass, newValue, anim);
        var newClass = newValue || "";
        if (newClass != oldClass) {
          if (oldClass) domRef.classList.remove(oldClass);
          if (newClass) {
            domRef.classList.add(newClass);
            if (anim) {
              domRef.classList.add(newClass + "-anim");
              basis.nextTick(function() {
                domRef.classList.remove(newClass + "-anim");
              });
            }
          }
        }
        return newClass;
      }
      function legacyAttrClass(domRef, oldClass, newValue, anim) {
        var newClass = newValue || "";
        if (newClass != oldClass) {
          var className = domRef.className;
          var classNameIsObject = typeof className != "string";
          var classList;
          if (classNameIsObject) className = className.baseVal;
          classList = className.split(WHITESPACE);
          if (oldClass) basis.array.remove(classList, oldClass);
          if (newClass) {
            classList.push(newClass);
            if (anim) {
              basis.array.add(classList, newClass + "-anim");
              basis.nextTick(function() {
                var classList = (classNameIsObject ? domRef.className.baseVal : domRef.className).split(WHITESPACE);
                basis.array.remove(classList, newClass + "-anim");
                if (classNameIsObject) domRef.className.baseVal = classList.join(" "); else domRef.className = classList.join(" ");
              });
            }
          }
          if (classNameIsObject) domRef.className.baseVal = classList.join(" "); else domRef.className = classList.join(" ");
        }
        return newClass;
      }
      var bind_attrStyle = IS_SET_STYLE_SAFE ? function(domRef, propertyName, oldValue, newValue) {
        if (oldValue !== newValue) domRef.style[camelize(propertyName)] = newValue;
        return newValue;
      } : function(domRef, propertyName, oldValue, newValue) {
        if (oldValue !== newValue) {
          try {
            domRef.style[camelize(propertyName)] = newValue;
          } catch (e) {}
        }
        return newValue;
      };
      var bind_attr = function(domRef, attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
          if (newValue) domRef.setAttribute(attrName, newValue); else domRef.removeAttribute(attrName);
        }
        return newValue;
      };
      function updateAttach() {
        this.set(this.name, this.value);
      }
      function resolveValue(bindingName, value, Attaches) {
        var bridge = value && value.bindingBridge;
        var oldAttach = this.attaches && this.attaches[bindingName];
        var tmpl = null;
        if (bridge || oldAttach) {
          if (bridge) {
            var isMarkup = isMarkupToken(value);
            var template;
            if (isMarkup) template = getL10nHtmlTemplate(value);
            if (!oldAttach || oldAttach.value !== value || oldAttach.template !== template) {
              if (oldAttach) {
                if (oldAttach.tmpl) oldAttach.template.clearInstance(oldAttach.tmpl);
                oldAttach.value.bindingBridge.detach(oldAttach.value, updateAttach, oldAttach);
              }
              if (template) {
                var context = this.context;
                var bindings = this.bindings;
                var onAction = this.action;
                var bindingInterface = this.bindingInterface;
                tmpl = template.createInstance(context, onAction, function onRebuild() {
                  tmpl = newAttach.tmpl = template.createInstance(context, onAction, onRebuild, bindings, bindingInterface);
                  tmpl.parent = tmpl.element.parentNode || tmpl.element;
                  updateAttach.call(newAttach);
                }, bindings, bindingInterface);
                tmpl.parent = tmpl.element.parentNode || tmpl.element;
              }
              if (!this.attaches) this.attaches = new Attaches;
              var newAttach = this.attaches[bindingName] = {
                name: bindingName,
                value: value,
                template: template,
                tmpl: tmpl,
                set: this.tmpl.set
              };
              bridge.attach(value, updateAttach, newAttach);
            } else tmpl = value && isMarkupToken(value) ? oldAttach.tmpl : null;
            if (tmpl) {
              tmpl.set("__templateContext", value.value);
              return tmpl.parent;
            }
            value = bridge.get(value);
          } else {
            if (oldAttach) {
              if (oldAttach.tmpl) oldAttach.template.clearInstance(oldAttach.tmpl);
              oldAttach.value.bindingBridge.detach(oldAttach.value, updateAttach, oldAttach);
              this.attaches[bindingName] = null;
            }
          }
        }
        return value;
      }
      function createBindingUpdater(names, getters) {
        var name1 = names[0];
        var name2 = names[1];
        var getter1 = getters[name1];
        var getter2 = getters[name2];
        switch (names.length) {
          case 1:
            return function bindingUpdater1(object) {
              this(name1, getter1(object));
            };
          case 2:
            return function bindingUpdater2(object) {
              this(name1, getter1(object));
              this(name2, getter2(object));
            };
          default:
            var getters_ = names.map(function(name) {
              return getters[name];
            });
            return function bindingUpdaterN(object) {
              for (var i = 0; i < names.length; i++) this(names[i], getters_[i](object));
            };
        }
      }
      function makeHandler(events, getters) {
        for (var name in events) events[name] = createBindingUpdater(events[name], getters);
        return name ? events : null;
      }
      function createBindingFunction(keys) {
        var bindingCache = {};
        return function getBinding(instance, set) {
          var bindings = instance.bindings;
          if (!bindings) return {};
          var cacheId = "bindingId" in bindings ? bindings.bindingId : null;
          if (!cacheId) basis.dev.warn("basis.template.Template.getBinding: bindings has no bindingId property, cache is not used");
          var result = bindingCache[cacheId];
          if (!result) {
            var names = [];
            var getters = {};
            var events = {};
            for (var i = 0, bindingName; bindingName = keys[i]; i++) {
              var binding = bindings[bindingName];
              var getter = binding && binding.getter;
              if (getter) {
                getters[bindingName] = getter;
                names.push(bindingName);
                if (binding.events) {
                  var eventList = String(binding.events).trim().split(/\s+|\s*,\s*/);
                  for (var j = 0, eventName; eventName = eventList[j]; j++) {
                    if (events[eventName]) events[eventName].push(bindingName); else events[eventName] = [ bindingName ];
                  }
                }
              }
            }
            result = {
              names: names,
              sync: createBindingUpdater(names, getters),
              handler: makeHandler(events, getters)
            };
            if (cacheId) bindingCache[cacheId] = result;
          }
          if (set) result.sync.call(set, instance.context);
          if (!instance.bindingInterface) return;
          if (result.handler) instance.bindingInterface.attach(instance.context, result.handler, set);
          return result.handler;
        };
      }
      var tools = {
        bind_textNode: bind_textNode,
        bind_node: bind_node,
        bind_element: bind_element,
        bind_comment: bind_comment,
        bind_attr: bind_attr,
        bind_attrClass: bind_attrClass,
        bind_attrStyle: bind_attrStyle,
        resolve: resolveValue,
        l10nToken: getL10nToken
      };
      return function(tokens, instances) {
        var fn = getFunctions(tokens, true, this.source.url, tokens.source_, !CLONE_NORMALIZATION_TEXT_BUG);
        var hasL10n = fn.createL10nSync;
        var initInstance;
        var l10nProtoSync;
        var l10nMap = {};
        var l10nLinks = [];
        var l10nMarkupTokens = [];
        var seed = 0;
        var proto = {
          cloneNode: function() {
            if (seed == 1) return buildDOM(tokens);
            proto = buildDOM(tokens);
            if (hasL10n) {
              l10nProtoSync = fn.createL10nSync(proto, l10nMap, bind_attr, CLONE_NORMALIZATION_TEXT_BUG);
              for (var i = 0, l10nToken; l10nToken = l10nLinks[i]; i++) l10nProtoSync(l10nToken.path, l10nMap[l10nToken.path]);
            }
            return proto.cloneNode(true);
          }
        };
        var createDOM = function() {
          return proto.cloneNode(true);
        };
        if (hasL10n) {
          var initL10n = function(set) {
            for (var i = 0, token; token = l10nLinks[i]; i++) set(token.path, l10nMap[token.path]);
          };
          var linkHandler = function(value) {
            var isMarkup = isMarkupToken(this.token);
            if (isMarkup) basis.array.add(l10nMarkupTokens, this); else basis.array.remove(l10nMarkupTokens, this);
            l10nMap[this.path] = isMarkup ? undefined : value == null ? "{" + this.path + "}" : value;
            if (l10nProtoSync) l10nProtoSync(this.path, l10nMap[this.path]);
            for (var key in instances) instances[key].tmpl.set(this.path, isMarkup ? this.token : value);
          };
          l10nLinks = fn.l10nKeys.map(function(key) {
            var token = getL10nToken(key);
            var link = {
              path: key,
              token: token,
              handler: linkHandler
            };
            token.attach(linkHandler, link);
            if (isMarkupToken(token)) l10nMarkupTokens.push(link); else l10nMap[key] = token.value == null ? "{" + key + "}" : token.value;
            return link;
          });
        }
        initInstance = fn.createInstanceFactory(this.templateId, createDOM, tools, l10nMap, l10nMarkupTokens, createBindingFunction(fn.keys), CLONE_NORMALIZATION_TEXT_BUG);
        return {
          createInstance: function(obj, onAction, onRebuild, bindings, bindingInterface) {
            var instanceId = seed++;
            var instance = {
              context: obj,
              action: onAction,
              rebuild: onRebuild,
              handler: null,
              bindings: bindings,
              bindingInterface: bindingInterface,
              attaches: null,
              compute: null,
              tmpl: null
            };
            initInstance(instanceId, instance, !instanceId ? initL10n : null);
            instances[instanceId] = instance;
            return instance.tmpl;
          },
          destroyInstance: function(tmpl) {
            var instanceId = tmpl.templateId_;
            var instance = instances[instanceId];
            if (instance) {
              if (instance.handler) instance.bindingInterface.detach(instance.context, instance.handler, instance.tmpl.set);
              if (instance.compute) {
                for (var i = 0; i < instance.compute.length; i++) instance.compute[i].destroy();
                instance.compute = null;
              }
              for (var key in instance.attaches) resolveValue.call(instance, key, null);
              delete instances[instanceId];
            }
          },
          destroy: function(rebuild) {
            for (var i = 0, link; link = l10nLinks[i]; i++) link.token.detach(link.handler, link);
            for (var key in instances) {
              var instance = instances[key];
              if (rebuild && instance.rebuild) instance.rebuild.call(instance.context);
              if (!rebuild || key in instances) {
                if (instance.handler) instance.bindingInterface.detach(instance.context, instance.handler, instance.tmpl.set);
                for (var key in instance.attaches) resolveValue.call(key, null);
              }
            }
            fn = null;
            proto = null;
            l10nMap = null;
            l10nLinks = null;
            l10nProtoSync = null;
            instances = null;
          }
        };
      };
    }();
    var HtmlTemplate = Template.subclass({
      className: namespace + ".Template",
      __extend__: function(value) {
        if (value instanceof HtmlTemplate) return value;
        if (value instanceof TemplateSwitchConfig) return new HtmlTemplateSwitcher(value);
        return new HtmlTemplate(value);
      },
      builder: builder
    });
    var HtmlTemplateSwitcher = TemplateSwitcher.subclass({
      className: namespace + ".TemplateSwitcher",
      templateClass: HtmlTemplate
    });
    module.exports = {
      Template: HtmlTemplate,
      TemplateSwitcher: HtmlTemplateSwitcher
    };
  },
  "d.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Class = basis.Class;
    var cleaner = basis.cleaner;
    var path = basis.path;
    var consts = basis.require("./c.js");
    var DECLARATION_VERSION = basis.require("./e.js").VERSION;
    var getDeclFromSource = basis.require("./e.js").getDeclFromSource;
    var makeDeclaration = basis.require("./e.js").makeDeclaration;
    var setIsolatePrefixGenerator = basis.require("./e.js").setIsolatePrefixGenerator;
    var store = basis.require("./f.js");
    var theme = basis.require("./g.js");
    var getSourceByPath = theme.get;
    var templateList = [];
    var sourceByDocumentId = {};
    function resolveSourceByDocumentId(sourceId) {
      var resource = sourceByDocumentId[sourceId];
      if (!resource) {
        var host = document.getElementById(sourceId);
        var source = "";
        if (host && host.tagName == "SCRIPT" && host.type == "text/basis-template") source = host.textContent || host.text; else if (!host) basis.dev.warn("Template script element with id `" + sourceId + "` not found"); else basis.dev.warn('Template should be declared in <script type="text/basis-template"> element (id `' + sourceId + "`)");
        resource = sourceByDocumentId[sourceId] = basis.resource.virtual("tmpl", source || "");
        resource.id = sourceId;
        resource.url = '<script id="' + sourceId + '"/>';
      }
      return resource;
    }
    function resolveResource(ref, baseURI) {
      if (/^#\d+$/.test(ref)) return templateList[ref.substr(1)];
      if (/^id:/.test(ref)) return resolveSourceByDocumentId(ref.substr(3));
      if (/^[a-z0-9\.]+$/i.test(ref) && !/\.tmpl$/.test(ref)) return getSourceByPath(ref);
      return basis.resource(basis.resource.resolveURI(ref, baseURI, '<b:include src="{url}"/>'));
    }
    function templateSourceUpdate() {
      if (this.destroyBuilder) buildTemplate.call(this);
      var cursor = this;
      while (cursor = cursor.attaches_) cursor.handler.call(cursor.context);
    }
    function buildTemplate() {
      var declaration = getDeclFromSource(this.source, this.baseURI, false, {
        isolate: this.getIsolatePrefix()
      });
      var destroyBuilder = this.destroyBuilder;
      var instances = {};
      var funcs = this.builder(declaration.tokens, instances);
      this.createInstance = funcs.createInstance;
      this.clearInstance = funcs.destroyInstance;
      this.destroyBuilder = funcs.destroy;
      store.add(this.templateId, this, instances);
      this.instances_ = instances;
      this.decl_ = declaration;
      var newDeps = declaration.deps;
      var oldDeps = this.deps_;
      this.deps_ = newDeps;
      if (oldDeps) for (var i = 0, dep; dep = oldDeps[i]; i++) dep.bindingBridge.detach(dep, templateSourceUpdate, this);
      if (newDeps) for (var i = 0, dep; dep = newDeps[i]; i++) dep.bindingBridge.attach(dep, templateSourceUpdate, this);
      var newResources = declaration.resources;
      var oldResources = this.resources;
      this.resources = newResources;
      if (newResources) for (var i = 0, url; url = newResources[i]; i++) {
        var resource = basis.resource(url).fetch();
        if (typeof resource.startUse == "function") resource.startUse();
      }
      if (oldResources) for (var i = 0, url; url = oldResources[i]; i++) {
        var resource = basis.resource(url).fetch();
        if (typeof resource.stopUse == "function") resource.stopUse();
      }
      if (destroyBuilder) destroyBuilder(true);
    }
    var Template = Class(null, {
      className: namespace + ".Template",
      __extend__: function(value) {
        if (value instanceof Template) return value;
        if (value instanceof TemplateSwitchConfig) return new TemplateSwitcher(value);
        return new Template(value);
      },
      source: "",
      baseURI: "",
      url: "",
      attaches_: null,
      init: function(source) {
        if (templateList.length == 4096) throw "Too many templates (maximum 4096)";
        this.setSource(source || "");
        this.templateId = templateList.push(this) - 1;
      },
      bindingBridge: {
        attach: function(template, handler, context) {
          var cursor = template;
          while (cursor = cursor.attaches_) if (cursor.handler === handler && cursor.context === context) basis.dev.warn("basis.template.Template#bindingBridge.attach: duplicate handler & context pair");
          template.attaches_ = {
            handler: handler,
            context: context,
            attaches_: template.attaches_
          };
        },
        detach: function(template, handler, context) {
          var cursor = template;
          var prev;
          while (prev = cursor, cursor = cursor.attaches_) if (cursor.handler === handler && cursor.context === context) {
            prev.attaches_ = cursor.attaches_;
            return;
          }
          basis.dev.warn("basis.template.Template#bindingBridge.detach: handler & context pair not found, nothing was removed");
        },
        get: function(template) {
          var source = template.source;
          return source && source.bindingBridge ? source.bindingBridge.get(source) : source;
        }
      },
      createInstance: function(object, actionCallback, updateCallback, bindings, bindingInterface) {
        buildTemplate.call(this);
        return this.createInstance(object, actionCallback, updateCallback, bindings, bindingInterface);
      },
      clearInstance: function() {},
      getIsolatePrefix: function() {
        return "i" + this.templateId + "__";
      },
      setSource: function(source) {
        var oldSource = this.source;
        if (oldSource != source) {
          if (typeof source == "string") {
            var m = source.match(/^([a-z]+):/);
            if (m) {
              source = source.substr(m[0].length);
              switch (m[1]) {
                case "id":
                  source = resolveSourceByDocumentId(source);
                  break;
                case "path":
                  source = getSourceByPath(source);
                  break;
                default:
                  basis.dev.warn(namespace + ".Template.setSource: Unknown prefix " + m[1] + " for template source was ingnored.");
              }
            }
          }
          if (oldSource && oldSource.bindingBridge) {
            this.url = "";
            this.baseURI = "";
            oldSource.bindingBridge.detach(oldSource, templateSourceUpdate, this);
          }
          if (source && source.bindingBridge) {
            if (source.url) {
              this.url = source.url;
              this.baseURI = path.dirname(source.url) + "/";
            }
            source.bindingBridge.attach(source, templateSourceUpdate, this);
          }
          this.source = source;
          templateSourceUpdate.call(this);
        }
      },
      destroy: function() {
        if (this.destroyBuilder) {
          store.remove(this.templateId);
          this.destroyBuilder();
        }
        this.attaches_ = null;
        this.createInstance = null;
        this.resources = null;
        this.source = null;
        this.instances_ = null;
        this.decl_ = null;
      }
    });
    var TemplateSwitchConfig = function(config) {
      basis.object.extend(this, config);
    };
    var TemplateSwitcher = basis.Class(null, {
      className: namespace + ".TemplateSwitcher",
      ruleRet_: null,
      templates_: null,
      templateClass: Template,
      ruleEvents: null,
      rule: String,
      init: function(config) {
        this.ruleRet_ = [];
        this.templates_ = [];
        this.rule = config.rule;
        var events = config.events;
        if (events && events.length) {
          this.ruleEvents = {};
          for (var i = 0, eventName; eventName = events[i]; i++) this.ruleEvents[eventName] = true;
        }
        cleaner.add(this);
      },
      resolve: function(object) {
        var ret = this.rule(object);
        var idx = this.ruleRet_.indexOf(ret);
        if (idx == -1) {
          this.ruleRet_.push(ret);
          idx = this.templates_.push(new this.templateClass(ret)) - 1;
        }
        return this.templates_[idx];
      },
      destroy: function() {
        this.rule = null;
        this.templates_ = null;
        this.ruleRet_ = null;
      }
    });
    function switcher(events, rule) {
      if (!rule) {
        rule = events;
        events = null;
      }
      if (typeof events == "string") events = events.split(/\s+/);
      return new TemplateSwitchConfig({
        rule: rule,
        events: events
      });
    }
    cleaner.add({
      destroy: function() {
        for (var i = 0, template; template = templateList[i]; i++) template.destroy();
        templateList = null;
      }
    });
    module.exports = {
      DECLARATION_VERSION: DECLARATION_VERSION,
      TYPE_ELEMENT: consts.TYPE_ELEMENT,
      TYPE_ATTRIBUTE: consts.TYPE_ATTRIBUTE,
      TYPE_ATTRIBUTE_CLASS: consts.TYPE_ATTRIBUTE_CLASS,
      TYPE_ATTRIBUTE_STYLE: consts.TYPE_ATTRIBUTE_STYLE,
      TYPE_ATTRIBUTE_EVENT: consts.TYPE_ATTRIBUTE_EVENT,
      TYPE_TEXT: consts.TYPE_TEXT,
      TYPE_COMMENT: consts.TYPE_COMMENT,
      TOKEN_TYPE: consts.TOKEN_TYPE,
      TOKEN_BINDINGS: consts.TOKEN_BINDINGS,
      TOKEN_REFS: consts.TOKEN_REFS,
      ATTR_NAME: consts.ATTR_NAME,
      ATTR_VALUE: consts.ATTR_VALUE,
      ATTR_NAME_BY_TYPE: consts.ATTR_NAME_BY_TYPE,
      CLASS_BINDING_ENUM: consts.CLASS_BINDING_ENUM,
      CLASS_BINDING_BOOL: consts.CLASS_BINDING_BOOL,
      ELEMENT_NAME: consts.ELEMENT_NAME,
      ELEMENT_ATTRS: consts.ELEMENT_ATTRIBUTES_AND_CHILDREN,
      ELEMENT_ATTRIBUTES_AND_CHILDREN: consts.ELEMENT_ATTRIBUTES_AND_CHILDREN,
      TEXT_VALUE: consts.TEXT_VALUE,
      COMMENT_VALUE: consts.COMMENT_VALUE,
      TemplateSwitchConfig: TemplateSwitchConfig,
      TemplateSwitcher: TemplateSwitcher,
      Template: Template,
      switcher: switcher,
      getDeclFromSource: getDeclFromSource,
      makeDeclaration: makeDeclaration,
      resolveResource: resolveResource,
      setIsolatePrefixGenerator: setIsolatePrefixGenerator,
      getDebugInfoById: store.getDebugInfoById,
      getTemplateCount: function() {
        return templateList.length;
      },
      resolveTemplateById: store.resolveTemplateById,
      resolveObjectById: store.resolveObjectById,
      resolveTmplById: store.resolveTmplById,
      SourceWrapper: theme.SourceWrapper,
      Theme: theme.Theme,
      theme: theme.theme,
      getThemeList: theme.getThemeList,
      currentTheme: theme.currentTheme,
      setTheme: theme.setTheme,
      onThemeChange: theme.onThemeChange,
      define: theme.define,
      get: theme.get,
      getPathList: theme.getPathList
    };
  },
  "10.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var fileAPI = basis.require("./z.js");
    var parseDom = basis.require("./11.js");
    var buildTree = basis.require("./12.js");
    var Node = basis.require("./8.js").Node;
    var jsSourcePopup = basis.require("./13.js");
    var showSource = new basis.Token(false);
    var selectedDomNode = new basis.Token;
    var selectedComponent = selectedDomNode.as(function(node) {
      return node && basis.reactApi.getComponent(node);
    });
    function syncSelectedNode() {
      var element = selectedView.value && selectedView.value.el;
      if (selectedDomNode.value === element) selectedDomNode.apply(); else selectedDomNode.set(element);
    }
    var observer = function() {
      var names = [ "MutationObserver", "WebKitMutationObserver" ];
      for (var i = 0, name; name = names[i]; i++) {
        var ObserverClass = global[name];
        if (typeof ObserverClass == "function") return new ObserverClass(syncSelectedNode);
      }
      setInterval(syncSelectedNode, 100);
    }();
    selectedDomNode.attach(function(node) {
      if (observer) observer.disconnect();
      if (observer && node) observer.observe(node, {
        subtree: true,
        attributes: true,
        characterData: true,
        childList: true
      });
    });
    selectedDomNode.attach(function(node) {
      if (!node) return view.clear();
      var nodes = parseDom(node);
      var actions = {};
      var bindings = [];
      view.setChildNodes(buildTree(nodes, bindings, actions, function(node) {
        selectedDomNode.set(node);
      }));
    });
    function findParentComponent(node) {
      var component = node && basis.reactApi.getComponent(node.parentNode);
      return component;
    }
    function getRefLoc(ref) {
      return ref ? basis.dev.getInfo(ref.element._currentElement, "loc") : null;
    }
    function getRefClassLoc(ref) {
      return basis.dev.getInfo(ref && ref.element._instance.constructor, "loc");
    }
    var view = new Node({
      container: document.body,
      visible: selectedDomNode.as(Boolean),
      template: basis.template.get("#9"),
      binding: {
        visible: "visible",
        upName: selectedDomNode.as(function(node) {
          return findParentComponent(node) ? "parent" : "";
        }),
        sourceTitle: selectedComponent.as(function(component) {
          return component ? "<" + basis.reactApi.getInfo(component.element).name + ">" : "";
        }),
        objectLoc: selectedComponent.as(getRefLoc),
        objectClassLoc: selectedComponent.as(getRefClassLoc),
        objectRenderLoc: selectedComponent.as(function(ref) {
          if (ref) return basis.dev.getInfo(ref.element._instance.render, "loc");
        })
      },
      action: {
        up: function() {
          var component = findParentComponent(selectedDomNode.value);
          if (component) selectedDomNode.set(component.node);
        },
        close: function() {
          selectedDomNode.set();
        },
        openRefLocation: function(e) {
          var loc = e.target.getAttribute("data-loc");
          if (loc) fileAPI.openFile(loc);
        },
        enterRefLocation: function(e) {
          var loc = e.target.getAttribute("data-loc");
          if (loc) {
            jsSourcePopup.loc.set(loc);
            jsSourcePopup.show(e.actionTarget);
          }
        },
        leaveRefLocation: function() {
          jsSourcePopup.hide();
        },
        logInfo: function() {
          global.$reactComponent = selectedComponent.value;
          console.log($reactComponent);
        }
      }
    });
    module.exports = selectedDomNode;
  },
  "11.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    module.exports = function(node) {
      var root = node;
      var cursor = root.firstChild;
      var nodes = [ root, [], {} ];
      var nodesCursor = nodes;
      var nodesStack = [ nodesCursor ];
      var candidate;
      while (cursor && cursor !== root) {
        var node = [ cursor, [], {} ];
        nodesCursor[1].push(node);
        if (!basis.reactApi.isComponent(cursor)) {
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
          if (cursor !== root) candidate = cursor.nextSibling;
        }
        cursor = candidate;
      }
      return nodes;
    };
  },
  "12.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var fileAPI = basis.require("./z.js");
    var Node = basis.require("./8.js").Node;
    var SINGLETON = [ "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "link", "meta", "param", "source" ];
    var jsSourcePopup = basis.require("./13.js");
    var templateSwitcher = basis.require("./d.js").switcher;
    function memo(fn, oldValue) {
      return function(newValue) {
        var result = fn(newValue, oldValue);
        oldValue = newValue;
        return result;
      };
    }
    var showLocNode = new basis.Token;
    showLocNode.attach(memo(function(node, oldNode) {
      if (oldNode) {
        oldNode.showLoc = false;
        oldNode.updateBind("showLoc");
      }
      if (node) {
        jsSourcePopup.loc.set(node.loc);
        jsSourcePopup.show(node.element);
        node.showLoc = true;
        node.updateBind("showLoc");
      } else {
        jsSourcePopup.hide();
      }
    }));
    var DOMNode = Node.subclass({
      action: {
        enter: function() {
          if (this.loc) showLocNode.set(this);
        },
        leave: function() {
          var cursor = this.parentNode;
          while (cursor && cursor instanceof DOMNode) {
            if (cursor.loc) {
              showLocNode.set(cursor);
              return;
            }
            cursor = cursor.parentNode;
          }
          showLocNode.set();
        },
        inspect: function() {
          if (this.selectDomNode && this.domNode) {
            this.selectDomNode(this.domNode);
          } else {
            if (showLocNode.value && showLocNode.value.loc) fileAPI.openFile(showLocNode.value.loc);
          }
        }
      },
      destroy: function() {
        Node.prototype.destroy.call(this);
        for (var property in this) if (hasOwnProperty.call(this, property)) if (this[property] && typeof this[property] == "object") this[property] = null;
      }
    });
    var ValuePart = DOMNode.subclass({
      type: "static",
      template: templateSwitcher(function(node) {
        return node.type == "static" ? basis.template.get("#2") : basis.template.get("#3");
      }),
      binding: {
        type: "type",
        value: "value",
        l10n: 'l10n || ""',
        loc: 'loc || ""'
      },
      action: {
        openLoc: function() {
          if (this.loc) fileAPI.openFile(this.loc);
        }
      }
    });
    var Attribute = DOMNode.subclass({
      template: basis.template.get("#4"),
      binding: {
        name: "name"
      },
      childClass: ValuePart
    });
    var Element = DOMNode.subclass({
      template: basis.template.get("#5"),
      binding: {
        showLoc: "showLoc",
        name: "name",
        binding: "bindingName",
        nestedView: "nestedView",
        componentName: "componentName",
        childrenHidden: "childrenHidden",
        inline: "inlineChildren",
        attributes: "satellite:",
        singleton: function(node) {
          return SINGLETON.indexOf(node.name) != -1;
        }
      },
      satellite: {
        attributes: {
          instance: Node.subclass({
            template: basis.template.get("#6"),
            childClass: Attribute
          }),
          config: function(owner) {
            return {
              childNodes: owner.attributes
            };
          }
        }
      }
    });
    var Text = DOMNode.subclass({
      template: basis.template.get("#7"),
      binding: {
        value: "value",
        binding: "bindingName",
        l10n: "l10n",
        nestedView: "nestedView"
      }
    });
    var Comment = DOMNode.subclass({
      template: basis.template.get("#8"),
      binding: {
        value: "value",
        binding: "bindingName",
        nestedView: "nestedView"
      }
    });
    function buildAttribute(attr, attrBindings, actions) {
      var value = [ {
        type: "static",
        value: attr.value
      } ];
      if (value.length == 1 && value[0].type == "static" && !value[0].value) value = [];
      return {
        name: attr.name,
        childNodes: value
      };
    }
    module.exports = function buildNode(item, bindings, actions, selectDomNode) {
      function findBinding(node) {
        return basis.array.search(bindings, node, "dom");
      }
      function findNodeBinding(node) {
        return basis.array.search(bindings, true, function(binding) {
          return binding.val !== binding.dom && binding.val === node;
        });
      }
      var node = item[0];
      var children = item[1];
      var properties = item[2];
      var binding;
      switch (node.nodeType) {
        case 1:
          var binding = findNodeBinding(node);
          var nestedView = properties.nestedView;
          var attributes = basis.array(node.attributes).filter(function(attr) {
            return attr.name != "data-reactid";
          });
          var attrs;
          var inline;
          var componentName;
          var loc;
          if (binding && binding.binding == "element") binding = null;
          attrs = binding || nestedView ? attributes.map(function(attr) {
            return {
              name: attr.name,
              childNodes: [ {
                type: "static",
                value: attr.value
              } ]
            };
          }) : attributes.map(function(attr) {
            return buildAttribute(attr, bindings.filter(function(bind) {
              return bind.dom === node && bind.attr === attr.name;
            }), actions);
          });
          children = children.map(function(child) {
            return buildNode(child, bindings, actions, selectDomNode);
          });
          inline = children.every(function(node) {
            return node instanceof Text;
          }) && children.reduce(function(res, node) {
            return res + node.value.length;
          }, 0) < 32;
          if (nestedView) {
            var component = basis.reactApi.getComponent(node);
            componentName = component ? basis.reactApi.getInfo(component.element).name : "";
          }
          var instance = basis.reactApi.getInstanceByNode(node);
          if (instance) {
            var locHost = instance.element._renderedComponent || instance.element;
            loc = basis.dev.getInfo(locHost._currentElement, "loc");
          }
          return new Element({
            domNode: node,
            name: node.tagName.toLowerCase(),
            bindingName: binding ? binding.binding : null,
            childrenHidden: node.firstChild && !children.length,
            inlineChildren: inline,
            nestedView: nestedView,
            componentName: componentName,
            selectDomNode: nestedView ? selectDomNode : null,
            attributes: attrs,
            childNodes: children,
            loc: loc
          });
          break;
        case 3:
          binding = findBinding(node) || findNodeBinding(node);
          if (/^\s*[\r\n]+\s*$/.test(node.nodeValue)) return "";
          return new Text({
            domNode: node,
            bindingName: binding && !binding.l10n ? binding.binding : null,
            value: node.nodeValue,
            l10n: binding ? binding.l10n : false,
            nestedView: properties.nestedView,
            selectDomNode: properties.nestedView ? selectDomNode : null
          });
        case 8:
          binding = findNodeBinding(node);
          return new Comment({
            domNode: node,
            bindingName: binding ? binding.binding : null,
            value: node.nodeValue,
            nestedView: properties.nestedView,
            selectDomNode: properties.nestedView ? selectDomNode : null
          });
      }
      return "";
    };
  },
  "13.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var Value = basis.require("./3.js").Value;
    var Node = basis.require("./8.js").Node;
    var Popup = basis.require("./o.js").Popup;
    var getColoredSource = basis.require("./p.js").getColoredSource;
    module.exports = new Popup({
      loc: new Value,
      dir: "top left bottom left",
      autorotate: [ "bottom left top left", "top right top left" ],
      template: basis.template.get("#1"),
      binding: {
        loc: function(node) {
          return node.loc.as(function(loc) {
            return (loc || "").replace(/(:\d+){1,4}$/, "");
          });
        },
        source: function(node) {
          return node.loc.as(function(loc) {
            if (loc) return getColoredSource(loc, 0, 0, 10);
          });
        }
      },
      zIndex: 65e3,
      setZIndex: function() {
        this.element.style.zIndex = this.zIndex;
      }
    });
  },
  "p.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var base64 = basis.require("./q.js");
    var highlight = basis.require("./s.js").highlight;
    var sourceCache = {};
    function findSourceInMap(map, filename) {
      if (Array.isArray(map.sources)) for (var i = 0; i < map.sources.length; i++) if (basis.path.normalize(map.sources[i]) == filename) {
        if (Array.isArray(map.sourcesContent)) return map.sourcesContent[i] || "";
      }
      if (Array.isArray(map.sections)) for (var i = 0; i < map.sections.length; i++) {
        var result = findSourceInMap(map.sections[i].map, filename);
        if (result !== false) return result;
      }
      return false;
    }
    function getSource(uri) {
      if (sourceCache[uri]) return sourceCache[uri];
      var resource = basis.resource(uri);
      var source = resource.get(true);
      var sourceMap = source.match(/\/\/# sourceMappingURL=([^\r\n]+)[\s\r\n]*$/);
      if (sourceMap) {
        sourceMap = sourceMap[1].split(";").pop();
        if (/^base64,/.test(sourceMap)) sourceMap = base64.decode(sourceMap.substr(7), true);
        sourceMap = JSON.parse(sourceMap);
        source = findSourceInMap(sourceMap, resource.url) || source;
      }
      sourceCache[uri] = source;
      return source;
    }
    function sliceString(str, start, end) {
      var lines = str.split("\n").slice(start.line - 1, end.line);
      return lines.concat(lines.pop().substr(0, end.column - 1)).join("\n").substr(start.column - 1);
    }
    function getSourceFragment(loc, start, end) {
      function ifNaN(value, fallback) {
        return isNaN(value) ? fallback : value;
      }
      var m = loc.match(/^(.*?)(?::(\d+):(\d+)(?::(\d+):(\d+))?)?$/);
      var source = getSource(m[1]);
      var numbers = m.slice(2).map(Number);
      if (!start) start = {
        line: numbers[0] || 0,
        column: numbers[1] || 0
      };
      if (!end) end = {
        line: ifNaN(numbers[2], 1e7),
        column: ifNaN(numbers[3], 1e7)
      };
      return sliceString(source, start, end);
    }
    function convertToRange(source, start, end) {
      var lines = source.split("\n");
      var rangeStart = lines.slice(0, start.line - 1).join("\n").length + start.column;
      var rangeEnd = lines.slice(0, end.line - 1).join("\n").length + end.column;
      return [ rangeStart, rangeEnd ];
    }
    function getColoredSource(loc, linesBefore, linesAfter, maxLines) {
      var m = loc.match(/^(.*?)(?::(\d+):(\d+)(?::(\d+):(\d+))?)?$/);
      var source = getSource(m[1]);
      var numbers = m.slice(2).map(Number);
      var startLine = 0;
      var lastLine = Infinity;
      var range;
      if (!numbers.some(isNaN)) {
        if (numbers[0]) {
          startLine = Math.max(0, numbers[0] - (linesBefore || 0));
          if (!numbers[2] && maxLines) lastLine = startLine + maxLines;
        }
        if (numbers[2]) lastLine = Math.min(numbers[2] + (linesAfter || 0), startLine + (maxLines || Infinity) - 1);
        range = convertToRange(source, {
          line: numbers[0],
          column: numbers[1]
        }, {
          line: numbers[2],
          column: numbers[3]
        });
      }
      var lines = highlight(source, "js", {
        keepFormat: true,
        range: range.concat("range"),
        lines: true,
        wrapper: basis.fn.$self
      });
      var linesCount = lines.length;
      var numLength = Math.max(String(Math.min(lastLine, linesCount)).length, 3);
      lines = lines.slice(startLine - 1, lastLine);
      var minOffset = Math.min.apply(null, lines.map(function(line) {
        if (!line || line == '<span class="range"></span>') return Infinity;
        return line.match(/^(<span class="range">)?(\xA0*)(.*)/)[2].length;
      }));
      var minOffsetRx = new RegExp('^(<span class="range">)? {' + minOffset + "}");
      lines = lines.map(function(line, num) {
        return '<div class="line">' + '<span class="num">' + basis.number.lead(startLine + num, numLength, " ") + "</span> " + line.replace(minOffsetRx, "$1") + "</div>";
      });
      if (startLine > 0) lines.unshift('<div class="skip-before">&middot;&middot;&middot;</div>');
      if (lastLine < linesCount) lines.push('<div class="skip-after">&middot;&middot;&middot;</div>');
      return lines.join("");
    }
    module.exports = {
      getSource: getSource,
      getColoredSource: getColoredSource,
      getSourceFragment: getSourceFragment,
      convertToRange: convertToRange
    };
  },
  "q.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var utf16 = basis.require("./r.js");
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");
    var charIndex = chars.reduce(function(res, item, index) {
      res[item] = index;
      return res;
    }, {});
    function encode(input, useUTF8) {
      if (!Array.isArray(input)) if (useUTF8) input = utf16.toUTF8Bytes(input); else input = utf16.toBytes(input);
      var output = "";
      var len = input.length;
      var i = 0;
      var chr1;
      var chr2;
      var chr3;
      var enc1;
      var enc2;
      var enc3;
      var enc4;
      while (i < len) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (chr2 == undefined) enc3 = enc4 = 64; else if (chr3 == undefined) enc4 = 64;
        output += chars[enc1] + chars[enc2] + chars[enc3] + chars[enc4];
      }
      return output;
    }
    function decode(input, useUTF8) {
      input = input.replace(/[^a-zA-Z0-9\+\/]/g, "");
      var output = [];
      var len = input.length;
      var i = 0;
      var chr1;
      var chr2;
      var chr3;
      var enc1;
      var enc2;
      var enc3;
      var enc4;
      while (i < len) {
        enc1 = charIndex[input.charAt(i++)];
        enc2 = charIndex[input.charAt(i++)];
        enc3 = charIndex[input.charAt(i++)];
        enc4 = charIndex[input.charAt(i++)];
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output.push(chr1, chr2, chr3);
      }
      if (enc3 == null || enc3 == 64) output.pop();
      if (enc4 == null || enc4 == 64) output.pop();
      if (useUTF8) return utf16.fromUTF8Bytes(output); else return utf16.fromBytes(output);
    }
    module.exports = {
      encode: encode,
      decode: decode
    };
  },
  "r.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var chars = basis.array.create(255, function(i) {
      return String.fromCharCode(i);
    });
    function toBytes(input) {
      var output = [];
      var len = input.length;
      for (var i = 0; i < len; i++) {
        var c = input.charCodeAt(i);
        output.push(c & 255, c >> 8);
      }
      return output;
    }
    function fromBytes(input) {
      var output = "";
      var len = input.length;
      var i = 0;
      var b1;
      var b2;
      while (i < len) {
        b1 = input[i++] || 0;
        b2 = input[i++] || 0;
        output += String.fromCharCode(b2 << 8 | b1);
      }
      return output;
    }
    function toUTF8(input) {
      var output = "";
      var len = input.length;
      for (var i = 0; i < len; i++) {
        var c = input.charCodeAt(i);
        if (c < 128) output += chars[c]; else if (c < 2048) output += chars[c >> 6 | 192] + chars[c & 63 | 128]; else output += chars[c >> 12 | 224] + chars[c >> 6 & 63 | 128] + chars[c & 63 | 128];
      }
      return output;
    }
    function toUTF8Bytes(input) {
      input = toUTF8(input);
      var len = input.length;
      var output = new Array(len);
      for (var i = 0; i < len; i++) output[i] = input.charCodeAt(i);
      return output;
    }
    function fromUTF8(input) {
      var output = "";
      var len = input.length;
      var i = 0;
      var c1;
      var c2;
      var c3;
      while (i < len) {
        c1 = input.charCodeAt(i++);
        if (c1 < 128) output += chars[c1]; else {
          c2 = input.charCodeAt(i++);
          if (c1 & 32) {
            c3 = input.charCodeAt(i++);
            output += String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          } else output += String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        }
      }
      return output;
    }
    function fromUTF8Bytes(input) {
      return fromUTF8(input.map(function(b) {
        return chars[b];
      }).join(""));
    }
    module.exports = {
      toBytes: toBytes,
      fromBytes: fromBytes,
      toUTF8: toUTF8,
      fromUTF8: fromUTF8,
      toUTF8Bytes: toUTF8Bytes,
      fromUTF8Bytes: fromUTF8Bytes
    };
  },
  "s.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var lead = basis.number.lead;
    var repeat = basis.string.repeat;
    var LANG_PARSER = {};
    var PARSER = {
      add: function(lang, fn) {
        LANG_PARSER[lang] = fn;
      }
    };
    PARSER.add("text", String);
    PARSER.add("js", function() {
      var keywords = "break case catch continue " + "default delete do else false " + "for function if in instanceof " + "new null return super switch " + "this throw true try typeof var while with " + "let const of class extends yield async await";
      var keywordRegExp = new RegExp("\\b(" + keywords.split(" ").join("|") + ")\\b", "g");
      return function(text, rangeStart, rangeEnd, rangeName) {
        function addMatch(kind, start, end, rn) {
          if (lastMatchPos != start) result.push(text.substring(lastMatchPos, start).replace(keywordRegExp, '<span class="token-keyword">$1</span>'));
          lastMatchPos = end ? end + 1 : start;
          if (kind) result.push('<span class="token-' + kind + '">' + text.substring(start, lastMatchPos) + "</span>" + (rn || ""));
        }
        var result = [];
        var sym = text.split("");
        var lastMatchPos = 0;
        var rangeWrapper = '<span class="' + rangeName + '">';
        var inRange = false;
        var resultRangeStart = -1;
        var resultRangeEnd;
        var start;
        var strSym;
        for (var i = 0; i < sym.length; i++) {
          if (i >= rangeStart) if (i < rangeEnd) {
            if (!inRange) {
              inRange = true;
              addMatch(null, rangeStart);
              result.push(rangeWrapper);
              resultRangeStart = result.join("").length;
            }
          } else {
            if (inRange) {
              inRange = false;
              addMatch(null, rangeEnd);
              result.push("</span>");
              resultRangeEnd = result.join("").length;
            }
          }
          if (sym[i] == "'" || sym[i] == '"') {
            strSym = sym[i];
            start = i;
            while (++i < sym.length) {
              if (sym[i] == "\\") {
                if (sym[i + 1] == "\n") {
                  addMatch("string", start, i);
                  start = ++i + 1;
                } else i += 2;
              }
              if (sym[i] == strSym) {
                addMatch("string", start, i);
                break;
              }
              if (sym[i] == "\n") break;
            }
          } else if (sym[i] == "/") {
            start = i;
            i++;
            if (sym[i] == "/") {
              while (++i < sym.length) {
                if (sym[i] == "\n") break;
              }
              addMatch("comment", start, i - 1);
            } else if (sym[i] == "*") {
              while (++i < sym.length) {
                if (sym[i] == "*" && sym[i + 1] == "/") {
                  addMatch("comment", start, ++i);
                  break;
                } else if (sym[i] == "\n") {
                  addMatch("comment", start, i - 1, "\n");
                  lastMatchPos = start = i + 1;
                }
              }
            }
          }
        }
        addMatch(null, text.length);
        result = result.join("");
        if (resultRangeStart != -1) {
          if (!resultRangeEnd) {
            resultRangeEnd = result.length;
            result += "</span>";
          }
          result = result.substr(0, resultRangeStart) + result.substring(resultRangeStart, resultRangeEnd).replace(/\n/g, "</span>\n" + rangeWrapper) + result.substr(resultRangeEnd);
        }
        return result;
      };
    }());
    PARSER.add("css", function() {
      var prefixes = "-webkit- -o- -ms- -moz- -khtml-";
      var properties = "azimuth background-attachment background-color background-image background-position " + "background-repeat background border-collapse border-color border-spacing border-style " + "border-top border-right border-bottom border-left border-top-color border-right-color " + "border-bottom-color border-left-color border-top-style border-right-style border-bottom-style " + "border-left-style border-top-width border-right-width border-bottom-width border-left-width " + "border-width border bottom caption-side clear clip color content counter-increment " + "counter-reset cue-after cue-before cue cursor direction display elevation empty-cells " + "float font-family font-size font-style font-variant font-weight font height left " + "letter-spacing line-height list-style-image list-style-position list-style-type " + "list-style margin-right margin-left margin-top margin-bottom margin max-height " + "max-width min-height min-width orphans outline-color outline-style outline-width " + "outline overflow padding-top padding-right padding-bottom padding-left padding " + "page-break-after page-break-before page-break-inside pause-after pause-before " + "pause pitch-range pitch play-during position quotes richness right speak-header " + "speak-numeral speak-punctuation speak speech-rate stress table-layout text-align " + "text-decoration text-indent text-transform top unicode-bidi vertical-align visibility " + "voice-family volume white-space widows width word-spacing z-index";
      var css3properties = "transition transition-delay transition-duration transition-property transition-timing-function " + "transform transform-origin " + "background-origin background-clip background-size " + "border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width " + "border-radius border-top-right-radius border-bottom-right-radius border-bottom-left-radius border-top-left-radius " + "box-decoration-break box-shadow " + "column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width columns column-span column-width";
      var values = "left-side far-left left center-left center-right center far-right right-side " + "right behind leftwards rightwards inherit scroll fixed transparent none repeat-x " + "repeat-y repeat no-repeat collapse separate auto top bottom both open-quote " + "close-quote no-open-quote no-close-quote crosshair default pointer move e-resize " + "ne-resize nw-resize n-resize se-resize sw-resize s-resize text wait help ltr rtl " + "inline block list-item run-in compact marker table inline-table table-row-group " + "table-header-group table-footer-group table-row table-column-group table-column " + "table-cell table-caption below level above higher lower show hide caption icon " + "menu message-box small-caption status-bar normal wider narrower ultra-condensed " + "extra-condensed condensed semi-condensed semi-expanded expanded extra-expanded " + "ultra-expanded italic oblique small-caps bold bolder lighter inside outside " + "disc circle square decimal decimal-leading-zero lower-roman upper-roman lower-greek " + "lower-alpha lower-latin upper-alpha upper-latin hebrew armenian georgian " + "cjk-ideographic hiragana katakana hiragana-iroha katakana-iroha crop cross invert " + "visible hidden always avoid x-low low medium high x-high static relative absolute " + "portrait landscape spell-out once digits continuous code x-slow slow fast x-fast " + "faster slower justify underline overline line-through blink capitalize uppercase " + "lowercase embed bidi-override baseline sub super text-top middle text-bottom silent " + "x-soft soft loud x-loud pre nowrap serif sans-serif cursive fantasy monospace empty " + "string strict loose char true false dotted dashed solid double groove ridge inset " + "outset larger smaller xx-small x-small small large x-large xx-large all newspaper " + "distribute distribute-all-lines distribute-center-last inter-word inter-ideograph " + "inter-cluster kashida ideograph-alpha ideograph-numeric ideograph-parenthesis " + "ideograph-space keep-all break-all break-word lr-tb tb-rl thin thick inline-block " + "w-resize hand distribute-letter distribute-space whitespace ignore";
      var propertiesRegExp = new RegExp("(^|[^a-z0-9-])((?:" + prefixes.split(" ").join("|") + ")?(?:" + css3properties.split(" ").join("|") + ")|(?:" + properties.split(" ").join("|") + "))(s|:|$)", "gi");
      var valuesRegExp = new RegExp("\\b(" + values.split(" ").join("|") + ")\\b", "g");
      return function(text) {
        function addMatch(kind, start, end, rn) {
          if (lastMatchPos != start) {
            var fragment = text.substring(lastMatchPos, start);
            if (blockScope) {
              if (valueScope) fragment = fragment.replace(valuesRegExp, '<span class="token-value">$1</span>'); else fragment = fragment.replace(propertiesRegExp, '$1<span class="token-key">$2</span>$3');
            }
            result.push(fragment);
          }
          lastMatchPos = end + 1;
          if (kind) result.push('<span class="token-' + kind + '">' + text.substring(start, end + 1) + "</span>" + (rn || ""));
        }
        var result = [];
        var sym = text.split("");
        var start = 0;
        var lastMatchPos = 0;
        var strSym;
        var blockScope = false;
        var valueScope = false;
        var braceScope = false;
        for (var i = 0; i < sym.length; i++) {
          if (sym[i] == "'" || sym[i] == '"') {
            strSym = sym[i];
            start = i;
            while (++i < sym.length) {
              if (sym[i] == strSym) {
                addMatch("string", start, i);
                break;
              }
              if (sym[i] == "\n") break;
              if (sym[i] == "\\" && sym[i + 1] == "\n") {
                addMatch("string", start, i);
                start = ++i + 1;
              }
            }
          } else if (sym[i] == "/") {
            start = i;
            i++;
            if (sym[i] == "*") {
              while (++i < sym.length) {
                if (sym[i] == "*" && sym[i + 1] == "/") {
                  addMatch("comment", start, ++i);
                  break;
                } else if (sym[i] == "\n") {
                  addMatch("comment", start, i - 1, "\n");
                  lastMatchPos = start = i + 1;
                }
              }
            }
          } else if (sym[i] == "{") {
            blockScope = true;
            valueScope = false;
            braceScope = false;
            start = i + 1;
            addMatch("", start, i);
          } else if (sym[i] == "(") {
            if (valueScope) braceScope = true;
          } else if (sym[i] == ")") {
            if (valueScope) braceScope = false;
          } else if (sym[i] == ":") {
            if (blockScope && !braceScope) {
              start = i + 1;
              addMatch("", start, i);
              valueScope = true;
            }
          } else if (sym[i] == ";") {
            if (blockScope && !braceScope) {
              start = i + 1;
              addMatch("", start, i);
              valueScope = false;
            }
          } else if (sym[i] == "}") {
            blockScope = false;
            valueScope = false;
          }
        }
        addMatch(null, text.length);
        return result.join("");
      };
    }());
    function highlight(text, lang, options) {
      function makeSafe(str) {
        return str.replace(/\r\n|\n\r|\r/g, "\n").replace(/&/g, "&amp;").replace(/</g, "&lt;");
      }
      function normalize(text) {
        text = text.replace(/^(?:\s*[\n]+)+?([ \t]*)/, "$1").trimRight();
        text = text.replace(/\n[ \t]+\n/g, "\n\n");
        var minOffset = 1e3;
        var lines = text.split(/\n+/);
        var startLine = Number(text.match(/^function/) != null);
        for (var i = startLine; i < lines.length; i++) {
          var m = lines[i].match(/^\s*/);
          if (m[0].length < minOffset) minOffset = m[0].length;
          if (minOffset == 0) break;
        }
        if (minOffset > 0) text = text.replace(new RegExp("(^|\\n) {" + minOffset + "}", "g"), "$1");
        return text;
      }
      function defaultWrapper(line, idx) {
        return '<div class="line ' + (idx % 2 ? "odd" : "even") + lineClass + '">' + '<span class="lineContent">' + (!options.noLineNumber ? '<input class="lineNumber" value="' + lead(idx + 1, numberWidth) + '" type="none" unselectable="on" readonly="readonly" tabindex="-1" />' + '<span class="over"></span>' : "") + line + "\r\n" + "</span>" + "</div>";
      }
      if (!options) options = {};
      var rangeStart = -1;
      var rangeEnd = -1;
      var rangeName = "";
      if (options.range) {
        var left = makeSafe(text.substr(0, options.range[0]));
        var range = makeSafe(text.substring(options.range[0], options.range[1]));
        var right = makeSafe(text.substr(options.range[1]));
        rangeStart = left.length;
        rangeEnd = rangeStart + range.length;
        rangeName = options.range[2] || "range";
        text = left + range + right;
      } else {
        text = makeSafe(text);
      }
      if (!options.keepFormat) text = normalize(text || "");
      var parser = LANG_PARSER[lang] || LANG_PARSER.text;
      var html = parser(text, rangeStart, rangeEnd, rangeName);
      var lines = html.split("\n");
      var numberWidth = String(lines.length).length;
      var lineClass = options.noLineNumber ? "" : " hasLineNumber";
      var offsetRx = new RegExp('^(<span class="' + rangeName + '">)?([ \\t]+)');
      lines = lines.map(function(line) {
        return line.replace(offsetRx, function(m, rangeSpan, spaces) {
          return (rangeSpan || "") + repeat(" ", spaces.replace(/\t/g, "  ").length);
        });
      }).map(options.wrapper || defaultWrapper);
      return options.lines ? lines : lines.join("");
    }
    module.exports = {
      highlight: highlight,
      useStyle: basis.fn.runOnce(function() {
        basis.resource("./1.css")().startUse();
      })
    };
  },
  "8.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Class = basis.Class;
    var createEvent = basis.require("./7.js").create;
    var HtmlTemplate = basis.require("./9.js").Template;
    var htmlTemplateIdMarker = basis.require("./c.js").MARKER;
    var TemplateSwitcher = basis.require("./d.js").TemplateSwitcher;
    var basisDomWrapper = basis.require("./i.js");
    var DWNode = basisDomWrapper.Node;
    var DWPartitionNode = basisDomWrapper.PartitionNode;
    var DWGroupingNode = basisDomWrapper.GroupingNode;
    var instances = {};
    var notifier = new basis.Token;
    var notifyCreateSchedule = basis.asap.schedule(function(instance) {
      instances[instance.basisObjectId] = instance;
      notifier.set({
        action: "create",
        instance: instance
      });
    });
    var notifyDestroySchedule = basis.asap.schedule(function(instance) {
      delete instances[instance.basisObjectId];
      notifier.set({
        action: "destroy",
        instance: instance
      });
    });
    var bindingSeed = 1;
    var unknownEventBindingCheck = {};
    function extendBinding(binding, extension) {
      var info = basis.dev.getInfo(extension, "map");
      binding.bindingId = bindingSeed++;
      for (var key in extension) {
        var def = null;
        var value = extension[key];
        if (Node && value instanceof Node || basis.resource.isResource(value)) {
          def = {
            events: "satelliteChanged",
            getter: function(key, satellite) {
              var resource = typeof satellite == "function" ? satellite : null;
              var init = function(node) {
                init = false;
                if (resource) {
                  satellite = resource();
                  if (satellite instanceof Node == false) return;
                  resource = null;
                }
                node.setSatellite(key, satellite);
                if (node.satellite[key] !== satellite) basis.dev.warn("basis.ui.binding: implicit satellite `" + key + "` attach to owner failed");
              };
              return function(node) {
                if (init) init(node);
                return resource || (node.satellite[key] ? node.satellite[key].element : null);
              };
            }(key, value)
          };
        } else {
          if (value) {
            if (typeof value == "string") value = BINDING_PRESET.process(key, value); else if (value.bindingBridge) value = basis.fn.$const(value);
            if (typeof value != "object") {
              def = {
                getter: typeof value == "function" ? value : basis.getter(value)
              };
            } else if (Array.isArray(value)) {
              def = {
                events: value[0],
                getter: basis.getter(value[1])
              };
            } else {
              def = {
                events: value.events,
                getter: basis.getter(value.getter)
              };
            }
          }
        }
        if (def && info && info.hasOwnProperty(key)) def.loc = info[key];
        binding[key] = def;
      }
    }
    var BINDING_PRESET = function() {
      var presets = {};
      var prefixRegExp = /^([a-z_][a-z0-9_]*):(.*)/i;
      return {
        add: function(prefix, func) {
          if (!presets[prefix]) {
            presets[prefix] = func;
          } else {
            basis.dev.warn("Preset `" + prefix + "` already exists, new definition ignored");
          }
        },
        process: function(key, value) {
          var preset;
          var m = value.match(prefixRegExp);
          if (m) {
            preset = presets[m[1]];
            value = m[2] || key;
          }
          return preset ? preset(value) : value;
        }
      };
    }();
    BINDING_PRESET.add("data", function(path) {
      return {
        events: "update",
        getter: "data." + path
      };
    });
    BINDING_PRESET.add("satellite", function(satelliteName) {
      return {
        events: "satelliteChanged",
        getter: function(node) {
          return node.satellite[satelliteName] ? node.satellite[satelliteName].element : null;
        }
      };
    });
    var TEMPLATE_BINDING = Class.customExtendProperty({
      $role: {
        events: "ownerSatelliteNameChanged",
        getter: function(node) {
          if (node.role) {
            var roleId = node.roleId && node.binding[node.roleId];
            if (roleId && typeof roleId.getter == "function") {
              roleId = roleId.getter(node);
              if (roleId === undefined) return "";
            }
            return node.role + (roleId !== undefined ? "(" + roleId + ")" : "");
          }
          return node.ownerSatelliteName || "";
        }
      },
      active: {
        events: "activeChanged",
        getter: function(node) {
          return node.active;
        }
      },
      state: {
        events: "stateChanged",
        getter: function(node) {
          return String(node.state);
        }
      },
      childNodesState: {
        events: "childNodesStateChanged",
        getter: function(node) {
          return String(node.childNodesState);
        }
      },
      childCount: {
        events: "childNodesModified",
        getter: function(node) {
          return node.childNodes ? node.childNodes.length : 0;
        }
      },
      hasChildren: {
        events: "childNodesModified",
        getter: function(node) {
          return !!node.firstChild;
        }
      },
      empty: {
        events: "childNodesModified",
        getter: function(node) {
          return !node.firstChild;
        }
      }
    }, extendBinding);
    var BINDING_TEMPLATE_INTERFACE = {
      attach: function(object, handler, context) {
        object.addHandler(handler, context);
      },
      detach: function(object, handler, context) {
        object.removeHandler(handler, context);
      }
    };
    var TEMPLATE_ACTION = Class.extensibleProperty({
      select: function(event) {
        if (this.isDisabled()) return;
        if (this.selectedRA_) {
          basis.dev.warn("`selected` property is under bb-value and can't be changed by user action. Override `select` action to make your logic working.");
          return;
        }
        if (this.contextSelection && this.contextSelection.multiple) this.select(event.ctrlKey || event.metaKey); else this.select();
      }
    });
    var TEMPLATE_SWITCHER_HANDLER = {
      "*": function(event) {
        var switcher = this.templateSwitcher_;
        if (switcher && switcher.ruleEvents && switcher.ruleEvents[event.type]) this.setTemplate(switcher.resolve(this));
      }
    };
    var TEMPLATE = new HtmlTemplate("<div/>");
    var fragments = [];
    function getDocumentFragment() {
      return fragments.pop() || document.createDocumentFragment();
    }
    function reinsertPartitionNodes(partition) {
      var nodes = partition.nodes;
      if (nodes) for (var i = nodes.length - 1, child; child = nodes[i]; i--) child.parentNode.insertBefore(child, child.nextSibling);
    }
    var focusTimer;
    var TemplateMixin = function(super_) {
      return {
        propertyDescriptors: {
          action: false,
          binding: false,
          template: "templateChanged",
          tmpl: "templateChanged",
          element: false,
          childNodesElement: false
        },
        template: TEMPLATE,
        emit_templateChanged: createEvent("templateChanged"),
        templateSwitcher_: null,
        binding: TEMPLATE_BINDING,
        action: TEMPLATE_ACTION,
        tmpl: null,
        element: null,
        childNodesElement: null,
        init: function() {
          this.element = this.childNodesElement = getDocumentFragment();
          super_.init.call(this);
        },
        postInit: function() {
          super_.postInit.call(this);
          var template = this.template;
          if (template) {
            var nodeDocumentFragment = this.childNodesElement;
            var bindingId = this.constructor.basisClassId_ + "_" + this.binding.bindingId;
            if (bindingId in unknownEventBindingCheck == false) {
              unknownEventBindingCheck[bindingId] = true;
              for (var bindName in this.binding) {
                var events = this.binding[bindName] && this.binding[bindName].events;
                if (events) {
                  events = String(events).trim().split(/\s+|\s*,\s*/);
                  for (var i = 0, eventName; eventName = events[i]; i++) if ("emit_" + eventName in this == false) basis.dev.warn("basis.ui: binding `" + bindName + "` has unknown event `" + eventName + "` for " + this.constructor.className);
                }
              }
            }
            this.template = null;
            this.setTemplate(template);
            fragments.push(nodeDocumentFragment);
            if (this.container) {
              this.container.appendChild(this.element);
              this.container = null;
            }
          }
          notifyCreateSchedule.add(this);
        },
        templateSync: function() {
          var oldElement = this.element;
          var tmpl = this.template.createInstance(this, this.templateAction, this.templateSync, this.binding, BINDING_TEMPLATE_INTERFACE);
          var noChildNodesElement;
          if (tmpl.childNodesHere) {
            tmpl.childNodesElement = tmpl.childNodesHere.parentNode;
            tmpl.childNodesElement.insertPoint = tmpl.childNodesHere;
          }
          this.tmpl = tmpl;
          this.element = tmpl.element;
          this.childNodesElement = tmpl.childNodesElement || tmpl.element;
          noChildNodesElement = this.childNodesElement.nodeType != 1;
          if (noChildNodesElement) this.childNodesElement = document.createDocumentFragment();
          if (noChildNodesElement) this.noChildNodesElement_ = true; else delete this.noChildNodesElement_;
          if (this.grouping) {
            this.grouping.syncDomRefs();
            var cursor = this;
            while (cursor.grouping) cursor = cursor.grouping;
            var topGrouping = cursor;
            for (var groupNode = topGrouping.lastChild; groupNode; groupNode = groupNode.previousSibling) {
              if (groupNode instanceof PartitionNode) topGrouping.insertBefore(groupNode, groupNode.nextSibling); else reinsertPartitionNodes(groupNode);
            }
            reinsertPartitionNodes(topGrouping.nullGroup);
          } else {
            for (var child = this.lastChild; child; child = child.previousSibling) this.insertBefore(child, child.nextSibling);
          }
          if (this instanceof PartitionNode) reinsertPartitionNodes(this);
          if (oldElement && oldElement !== this.element && oldElement.nodeType != 11) {
            var parentNode = oldElement && oldElement.parentNode;
            if (parentNode) {
              if (this.owner && this.owner.tmpl) this.owner.tmpl.set(oldElement, this.element);
              if (this.element.parentNode !== parentNode) parentNode.replaceChild(this.element, oldElement);
            }
          }
          this.emit_templateChanged();
        },
        setTemplate: function(template) {
          var curSwitcher = this.templateSwitcher_;
          var switcher;
          if (template instanceof TemplateSwitcher) {
            switcher = template;
            template = switcher.resolve(this);
          }
          if (template instanceof HtmlTemplate == false) template = null;
          if (!template) {
            basis.dev.warn("basis.ui.Node#setTemplate: set null to template possible only on node destroy");
            return;
          }
          if (switcher) {
            this.templateSwitcher_ = switcher;
            if (!curSwitcher) this.addHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          if (curSwitcher && curSwitcher.resolve(this) !== template) {
            this.templateSwitcher_ = null;
            this.removeHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          var oldTmpl = this.tmpl;
          var oldTemplate = this.template;
          if (oldTemplate !== template) {
            this.template = template;
            this.templateSync();
            if (oldTemplate) oldTemplate.clearInstance(oldTmpl);
          }
        },
        updateBind: function(bindName) {
          var binding = this.binding[bindName];
          var getter = binding && binding.getter;
          if (getter && this.tmpl) this.tmpl.set(bindName, getter(this));
          if (this.roleId == bindName) this.updateBind("$roleId");
        },
        templateAction: function(actionName, event) {
          var action = this.action[actionName];
          if (action) action.call(this, event);
          if (!action) basis.dev.warn("template call `" + actionName + "` action, but it isn't defined in action list");
        },
        focus: function(select) {
          var focusElement = this.tmpl ? this.tmpl.focus || this.element : null;
          if (focusElement) {
            if (focusTimer) focusTimer = basis.clearImmediate(focusTimer);
            focusTimer = basis.setImmediate(function() {
              try {
                focusElement.focus();
                if (select) focusElement.select();
              } catch (e) {}
            });
          }
        },
        blur: function() {
          var focusElement = this.tmpl ? this.tmpl.focus || this.element : null;
          if (focusElement) try {
            focusElement.blur();
          } catch (e) {}
        },
        destroy: function() {
          if (instances[this.basisObjectId]) notifyDestroySchedule.add(this); else notifyCreateSchedule.remove(this);
          var template = this.template;
          var element = this.element;
          if (this.templateSwitcher_) {
            this.templateSwitcher_ = null;
            this.removeHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          template.clearInstance(this.tmpl);
          super_.destroy.call(this);
          this.tmpl = null;
          this.element = null;
          this.childNodesElement = null;
          var parentNode = element && element.parentNode;
          if (parentNode && parentNode.nodeType == 1) parentNode.removeChild(element);
        }
      };
    };
    var ContainerTemplateMixin = function(super_) {
      return {
        insertBefore: function(newChild, refChild) {
          if (this.noChildNodesElement_) {
            delete this.noChildNodesElement_;
            basis.dev.warn("basis.ui: Template has no childNodesElement container, but insertBefore method called; probably it's a bug");
          }
          newChild = super_.insertBefore.call(this, newChild, refChild);
          var target = newChild.groupNode || this;
          var container = target.childNodesElement || this.childNodesElement;
          var nextSibling = newChild.nextSibling;
          var insertPoint = nextSibling && nextSibling.element.parentNode == container ? nextSibling.element : null;
          var childElement = newChild.element;
          var refNode = insertPoint || container.insertPoint || null;
          if (childElement.parentNode !== container || childElement.nextSibling !== refNode) container.insertBefore(childElement, refNode);
          return newChild;
        },
        removeChild: function(oldChild) {
          super_.removeChild.call(this, oldChild);
          var element = oldChild.element;
          var parent = element.parentNode;
          if (parent) parent.removeChild(element);
          return oldChild;
        },
        clear: function(alive) {
          if (alive) {
            var node = this.firstChild;
            while (node) {
              var element = node.element;
              var parent = element.parentNode;
              if (parent) parent.removeChild(element);
              node = node.nextSibling;
            }
          }
          super_.clear.call(this, alive);
        },
        setChildNodes: function(childNodes, keepAlive) {
          if (this.noChildNodesElement_) {
            delete this.noChildNodesElement_;
            basis.dev.warn("basis.ui: Template has no childNodesElement container, but setChildNodes method called; probably it's a bug");
          }
          var domFragment = document.createDocumentFragment();
          var target = this.grouping || this;
          var container = target.childNodesElement;
          target.childNodesElement = domFragment;
          super_.setChildNodes.call(this, childNodes, keepAlive);
          container.insertBefore(domFragment, container.insertPoint || null);
          target.childNodesElement = container;
        }
      };
    };
    var PartitionNode = Class(DWPartitionNode, TemplateMixin, {
      className: namespace + ".PartitionNode",
      binding: {
        title: "data:"
      }
    });
    var GroupingNode = Class(DWGroupingNode, ContainerTemplateMixin, {
      className: namespace + ".GroupingNode",
      childClass: PartitionNode,
      groupingClass: Class.SELF,
      element: null,
      childNodesElement: null,
      emit_ownerChanged: function(oldOwner) {
        this.syncDomRefs();
        DWGroupingNode.prototype.emit_ownerChanged.call(this, oldOwner);
      },
      init: function() {
        this.element = this.childNodesElement = document.createDocumentFragment();
        DWGroupingNode.prototype.init.call(this);
        instances[this.basisObjectId] = this;
        notifier.set({
          action: "create",
          instance: this
        });
      },
      syncDomRefs: function() {
        var cursor = this;
        var owner = this.owner;
        var element = null;
        if (owner) element = owner.tmpl && owner.tmpl.groupsElement || owner.childNodesElement;
        do {
          cursor.element = cursor.childNodesElement = element;
        } while (cursor = cursor.grouping);
      },
      destroy: function() {
        delete instances[this.basisObjectId];
        notifier.set({
          action: "destroy",
          instance: this
        });
        DWGroupingNode.prototype.destroy.call(this);
        this.element = null;
        this.childNodesElement = null;
      }
    });
    var Node = Class(DWNode, TemplateMixin, ContainerTemplateMixin, {
      className: namespace + ".Node",
      binding: {
        selected: {
          events: "select unselect",
          getter: function(node) {
            return node.selected;
          }
        },
        unselected: {
          events: "select unselect",
          getter: function(node) {
            return !node.selected;
          }
        },
        disabled: {
          events: "disable enable",
          getter: function(node) {
            return node.isDisabled();
          }
        },
        enabled: {
          events: "disable enable",
          getter: function(node) {
            return !node.isDisabled();
          }
        },
        tabindex: {
          events: "enable disable",
          getter: function(node) {
            return node.isDisabled() ? -1 : node.tabindex || 0;
          }
        }
      },
      childClass: Class.SELF,
      childFactory: function(config) {
        return new this.childClass(config);
      },
      groupingClass: GroupingNode
    });
    var ShadowNodeList = Node.subclass({
      className: namespace + ".ShadowNodeList",
      emit_ownerChanged: function(oldOwner) {
        Node.prototype.emit_ownerChanged.call(this, oldOwner);
        this.setDataSource(this.owner && this.owner.getChildNodesDataset());
      },
      getChildNodesElement: function(owner) {
        return owner.childNodesElement;
      },
      listen: {
        owner: {
          templateChanged: function() {
            this.childNodes.forEach(function(child) {
              this.appendChild(child.element);
            }, this.getChildNodesElement(this.owner) || this.owner.element);
          }
        }
      },
      childClass: {
        className: namespace + ".ShadowNode",
        getElement: function(node) {
          return node.element;
        },
        templateSync: function() {
          Node.prototype.templateSync.call(this);
          var newElement = this.getElement(this.delegate);
          if (newElement) {
            newElement[htmlTemplateIdMarker] = this.delegate.element[htmlTemplateIdMarker];
            this.element = newElement;
          }
        },
        listen: {
          delegate: {
            templateChanged: function() {
              var oldElement = this.element;
              var oldElementParent = oldElement.parentNode;
              var newElement = this.getElement(this.delegate);
              if (newElement) newElement[htmlTemplateIdMarker] = this.delegate.element[htmlTemplateIdMarker];
              this.element = newElement || this.tmpl.element;
              if (oldElementParent) oldElementParent.replaceChild(this.element, oldElement);
            }
          }
        }
      }
    });
    module.exports = {
      debug_notifier: notifier,
      debug_getInstances: function() {
        return basis.object.values(instances);
      },
      BINDING_PRESET: BINDING_PRESET,
      Node: Node,
      PartitionNode: PartitionNode,
      GroupingNode: GroupingNode,
      ShadowNodeList: ShadowNodeList,
      ShadowNode: ShadowNodeList.prototype.childClass
    };
  },
  "v.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var basisEvent = basis.require("./7.js");
    var Emitter = basisEvent.Emitter;
    var createEvent = basisEvent.create;
    var STATE = basis.require("./4.js");
    var SUBSCRIPTION = basis.require("./5.js");
    var resolveValue = basis.require("./6.js").resolveValue;
    var PROXY = basis.PROXY;
    var ABSTRACTDATA_ACTIVE_SYNC_HANDLER = {
      subscribersChanged: function(host) {
        this.set(host.subscriberCount > 0);
      }
    };
    var AbstractData = Emitter.subclass({
      className: "basis.data.AbstractData",
      propertyDescriptors: {
        state: "stateChanged",
        active: "activeChanged",
        subscriberCount: "subscribersChanged",
        subscribeTo: false,
        syncAction: false,
        syncEvents: false
      },
      state: STATE.UNDEFINED,
      stateRA_: null,
      emit_stateChanged: createEvent("stateChanged", "oldState"),
      active: false,
      activeRA_: null,
      emit_activeChanged: createEvent("activeChanged"),
      subscribeTo: SUBSCRIPTION.NONE,
      subscriberCount: 0,
      subscribers_: null,
      emit_subscribersChanged: createEvent("subscribersChanged", "delta"),
      syncEvents: basis.Class.oneFunctionProperty(function() {
        if (this.isSyncRequired()) this.syncAction();
      }, {
        stateChanged: true,
        subscribersChanged: true
      }),
      syncAction: null,
      init: function() {
        Emitter.prototype.init.call(this);
        if (this.active) {
          if (this.active === PROXY) {
            this.active = new basis.Token(this.subscriberCount > 0);
            this.addHandler(ABSTRACTDATA_ACTIVE_SYNC_HANDLER, this.active);
          }
          this.active = !!resolveValue(this, this.setActive, this.active, "activeRA_");
          if (this.active) this.addHandler(SUBSCRIPTION.getMaskConfig(this.subscribeTo).handler);
        }
        if (this.state != STATE.UNDEFINED) {
          var state = this.state;
          if (typeof this.state != "string") state = resolveValue(this, this.setState, state, "stateRA_");
          if (state && !STATE.isValid(state)) {
            basis.dev.error("Wrong value for state (value has been ignored and state set to STATE.UNDEFINED)", state);
            state = false;
          }
          this.state = state || STATE.UNDEFINED;
        }
        var syncAction = this.syncAction;
        if (syncAction) {
          this.syncAction = null;
          this.setSyncAction(syncAction);
        }
      },
      setState: function(state, data) {
        state = resolveValue(this, this.setState, state, "stateRA_") || STATE.UNDEFINED;
        var stateCode = String(state);
        if (!STATE.isValid(stateCode)) {
          basis.dev.error("Wrong value for state (value has been ignored)", stateCode);
          return false;
        }
        if (this.stateRA_ && data === undefined) data = state.data;
        if (this.state != stateCode || this.state.data != data) {
          var oldState = this.state;
          this.state = Object(stateCode);
          this.state.data = data;
          this.emit_stateChanged(oldState);
          return true;
        }
        return false;
      },
      deprecate: function() {
        if (this.state != STATE.PROCESSING) this.setState(STATE.DEPRECATED);
      },
      setActive: function(isActive) {
        var proxyToken = this.activeRA_ && this.activeRA_.proxyToken;
        if (isActive === PROXY) {
          if (!proxyToken) {
            proxyToken = new basis.Token(this.subscriberCount > 0);
            this.addHandler(ABSTRACTDATA_ACTIVE_SYNC_HANDLER, proxyToken);
          }
          isActive = proxyToken;
        } else {
          if (proxyToken && isActive !== proxyToken) {
            this.removeHandler(ABSTRACTDATA_ACTIVE_SYNC_HANDLER, proxyToken);
            proxyToken = null;
          }
        }
        isActive = !!resolveValue(this, this.setActive, isActive, "activeRA_");
        if (proxyToken && this.activeRA_) this.activeRA_.proxyToken = proxyToken;
        if (this.active != isActive) {
          this.active = isActive;
          this.emit_activeChanged();
          if (isActive) SUBSCRIPTION.subscribe(this, this.subscribeTo); else SUBSCRIPTION.unsubscribe(this, this.subscribeTo);
          return true;
        }
        return false;
      },
      setSubscription: function(subscriptionType) {
        var curSubscriptionType = this.subscribeTo;
        var newSubscriptionType = subscriptionType & SUBSCRIPTION.ALL;
        var delta = curSubscriptionType ^ newSubscriptionType;
        if (delta) {
          this.subscribeTo = newSubscriptionType;
          if (this.active) SUBSCRIPTION.changeSubscription(this, curSubscriptionType, newSubscriptionType);
          return true;
        }
        return false;
      },
      isSyncRequired: function() {
        return this.subscriberCount > 0 && (this.state == STATE.UNDEFINED || this.state == STATE.DEPRECATED);
      },
      setSyncAction: function(syncAction) {
        var oldAction = this.syncAction;
        if (typeof syncAction != "function") syncAction = null;
        this.syncAction = syncAction;
        if (syncAction) {
          if (!oldAction) this.addHandler(this.syncEvents);
          if (this.isSyncRequired()) this.syncAction();
        } else {
          if (oldAction) this.removeHandler(this.syncEvents);
        }
      },
      destroy: function() {
        Emitter.prototype.destroy.call(this);
        if (this.active) {
          var config = SUBSCRIPTION.getMaskConfig(this.subscribeTo);
          for (var i = 0, action; action = config.actions[i]; i++) action(SUBSCRIPTION.unlink, this);
        }
        if (this.activeRA_) resolveValue(this, false, false, "activeRA_");
        if (this.stateRA_) resolveValue(this, false, false, "stateRA_");
        this.state = STATE.UNDEFINED;
      }
    });
    module.exports = AbstractData;
  },
  "7.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var NULL_HANDLER = {};
    var events = {};
    var warnOnDestroy = function() {
      basis.dev.warn("Object had been destroyed before. Destroy method must not be called more than once.");
    };
    function createDispatcher(eventName) {
      var eventFunction = events[eventName];
      if (!eventFunction) {
        eventFunction = function() {
          var cursor = this;
          var args;
          var fn;
          while (cursor = cursor.handler) {
            fn = cursor.callbacks[eventName];
            if (typeof fn == "function") {
              if (!args) {
                args = [ this ];
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
              }
              fn.apply(cursor.context || this, args);
            }
            fn = cursor.callbacks["*"];
            if (typeof fn == "function") {
              if (!args) {
                args = [ this ];
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
              }
              fn.call(cursor.context || this, {
                sender: this,
                type: eventName,
                args: args
              });
            }
          }
          if (this.debug_emit) {
            args = [];
            for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
            this.debug_emit({
              sender: this,
              type: eventName,
              args: args
            });
          }
        };
        eventFunction = (new Function('return {"' + namespace + ".events." + eventName + '":\n\n      ' + "function(" + basis.array(arguments, 1).join(", ") + "){" + eventFunction.toString().replace(/\beventName\b/g, '"' + eventName + '"').replace(/^function[^(]*\(\)[^{]*\{|\}$/g, "") + "}" + '\n\n}["' + namespace + ".events." + eventName + '"];'))();
        events[eventName] = eventFunction;
      }
      return eventFunction;
    }
    function createHandler(events, eventCallback) {
      var handler = {
        events: []
      };
      if (events) {
        events = String(events).trim().split(/\s+|\s*,\s*/).sort();
        handler = {
          events: events
        };
        for (var i = 0, eventName; eventName = events[i]; i++) if (eventName != "destroy") handler[eventName] = eventCallback;
      }
      return handler;
    }
    var Emitter = Class(null, {
      className: namespace + ".Emitter",
      extendConstructor_: true,
      propertyDescriptors: Class.customExtendProperty({
        basisObjectId: true,
        propertyDescriptors: false,
        handler: false,
        listen: false
      }, function(result, extension) {
        for (var property in extension) {
          var value = extension[property];
          if (value === true || value == "<static>") value = {
            isStatic: true
          }; else if (value === false) value = {
            isPrivate: true
          }; else if (typeof value == "string") value = {
            events: value
          };
          result[property] = value;
        }
      }),
      handler: null,
      emit_destroy: createDispatcher("destroy"),
      listen: Class.nestedExtendProperty(),
      debug_handlers: function() {
        var result = [];
        var cursor = this;
        while (cursor = cursor.handler) result.push([ cursor.callbacks, cursor.context ]);
        return result;
      },
      debug_emit: null,
      init: function() {
        if (this.handler && !this.handler.callbacks) this.handler = {
          callbacks: this.handler,
          context: this,
          handler: null
        };
      },
      addHandler: function(callbacks, context) {
        if (!callbacks) basis.dev.warn(namespace + ".Emitter#addHandler: callbacks is not an object (", callbacks, ")");
        context = context || this;
        var cursor = this;
        while (cursor = cursor.handler) {
          if (cursor.callbacks === callbacks && cursor.context === context) {
            basis.dev.warn(namespace + ".Emitter#addHandler: add duplicate event callbacks", callbacks, "to Emitter instance:", this);
            break;
          }
        }
        this.handler = {
          callbacks: callbacks,
          context: context,
          handler: this.handler
        };
      },
      removeHandler: function(callbacks, context) {
        var cursor = this;
        var prev;
        context = context || this;
        while (prev = cursor, cursor = cursor.handler) if (cursor.callbacks === callbacks && cursor.context === context) {
          cursor.callbacks = NULL_HANDLER;
          prev.handler = cursor.handler;
          return;
        }
        basis.dev.warn(namespace + ".Emitter#removeHandler: no handler removed");
      },
      destroy: function() {
        this.destroy = warnOnDestroy;
        this.emit_destroy();
        this.handler = null;
      }
    });
    module.exports = {
      create: createDispatcher,
      createHandler: createHandler,
      events: events,
      Emitter: Emitter
    };
  },
  "6.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var NULL_OBJECT = {};
    function resolveAdapterProxy() {
      this.fn.call(this.context, this.source);
    }
    var ResolveAdapter = function(context, fn, source, handler) {
      this.context = context;
      this.fn = fn;
      this.source = source;
      this.handler = handler;
    };
    ResolveAdapter.prototype = {
      context: null,
      fn: null,
      source: null,
      handler: null,
      next: null,
      attach: function() {
        this.source.addHandler(this.handler, this);
      },
      detach: function() {
        this.source.removeHandler(this.handler, this);
      }
    };
    var BBResolveAdapter = function() {
      ResolveAdapter.apply(this, arguments);
    };
    BBResolveAdapter.prototype = new ResolveAdapter;
    BBResolveAdapter.prototype.attach = function(destroyCallback) {
      this.source.bindingBridge.attach(this.source, this.handler, this, destroyCallback);
    };
    BBResolveAdapter.prototype.detach = function() {
      this.source.bindingBridge.detach(this.source, this.handler, this);
    };
    var DEFAULT_CHANGE_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, this.source);
    };
    var DEFAULT_DESTROY_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, null);
    };
    var RESOLVEVALUE_DESTROY_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, resolveValue(NULL_OBJECT, null, this.source.bindingBridge.get(this.source)));
    };
    function createResolveFunction(Class) {
      return function resolve(context, fn, source, property, factoryContext) {
        var oldAdapter = context[property] || null;
        var newAdapter = null;
        if (fn !== resolveAdapterProxy && typeof source == "function") source = source.call(factoryContext || context, factoryContext || context);
        if (source && source.bindingBridge) {
          if (!oldAdapter || oldAdapter.source !== source) newAdapter = new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER); else newAdapter = oldAdapter;
          source = resolve(newAdapter, resolveAdapterProxy, source.bindingBridge.get(source), "next");
        }
        if (source instanceof Class == false) source = null;
        if (property && oldAdapter !== newAdapter) {
          var cursor = oldAdapter;
          while (cursor) {
            var adapter = cursor;
            adapter.detach();
            cursor = adapter.next;
            adapter.next = null;
          }
          if (newAdapter) newAdapter.attach(DEFAULT_DESTROY_ADAPTER_HANDLER);
          context[property] = newAdapter;
        }
        return source;
      };
    }
    function resolveValue(context, fn, source, property, factoryContext) {
      var oldAdapter = context[property] || null;
      var newAdapter = null;
      if (source && fn !== resolveAdapterProxy && basis.fn.isFactory(source)) source = source.call(factoryContext || context, factoryContext || context);
      if (source && source.bindingBridge) {
        if (!oldAdapter || oldAdapter.source !== source) newAdapter = new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER); else newAdapter = oldAdapter;
        source = resolveValue(newAdapter, resolveAdapterProxy, source.bindingBridge.get(source), "next");
      }
      if (property && oldAdapter !== newAdapter) {
        var cursor = oldAdapter;
        while (cursor) {
          var adapter = cursor;
          adapter.detach();
          cursor = adapter.next;
          adapter.next = null;
        }
        if (newAdapter) newAdapter.attach(RESOLVEVALUE_DESTROY_ADAPTER_HANDLER);
        context[property] = newAdapter;
      }
      return source;
    }
    module.exports = {
      DEFAULT_CHANGE_ADAPTER_HANDLER: DEFAULT_CHANGE_ADAPTER_HANDLER,
      DEFAULT_DESTROY_ADAPTER_HANDLER: DEFAULT_DESTROY_ADAPTER_HANDLER,
      ResolveAdapter: ResolveAdapter,
      BBResolveAdapter: BBResolveAdapter,
      createResolveFunction: createResolveFunction,
      resolveValue: resolveValue
    };
  },
  "5.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var subscriptionConfig = {};
    var subscriptionSeed = 1;
    var maskConfig = {};
    function mixFunctions(fnA, fnB) {
      return function() {
        fnA.apply(this, arguments);
        fnB.apply(this, arguments);
      };
    }
    var SUBSCRIPTION = {
      NONE: 0,
      ALL: 0,
      add: function(name, handler, action) {
        subscriptionConfig[subscriptionSeed] = {
          handler: handler,
          action: action
        };
        SUBSCRIPTION[name] = subscriptionSeed;
        SUBSCRIPTION.ALL |= subscriptionSeed;
        subscriptionSeed <<= 1;
      },
      addProperty: function(propertyName, eventName) {
        var handler = {};
        handler[eventName || propertyName + "Changed"] = function(object, oldValue) {
          if (oldValue) SUBSCRIPTION.unlink(propertyName, object, oldValue);
          if (object[propertyName]) SUBSCRIPTION.link(propertyName, object, object[propertyName]);
        };
        this.add(propertyName.toUpperCase(), handler, function(fn, object) {
          if (object[propertyName]) fn(propertyName, object, object[propertyName]);
        });
      },
      getMaskConfig: function(mask) {
        var config = maskConfig[mask];
        if (!config) {
          var actions = [];
          var handler = {};
          var idx = 1;
          config = maskConfig[mask] = {
            actions: actions,
            handler: handler
          };
          while (mask) {
            if (mask & 1) {
              var cfg = subscriptionConfig[idx];
              actions.push(cfg.action);
              for (var key in cfg.handler) handler[key] = handler[key] ? mixFunctions(handler[key], cfg.handler[key]) : cfg.handler[key];
            }
            idx <<= 1;
            mask >>= 1;
          }
        }
        return config;
      },
      link: function(type, from, to) {
        var subscriberId = type + from.basisObjectId;
        var subscribers = to.subscribers_;
        if (!subscribers) subscribers = to.subscribers_ = {};
        if (!subscribers[subscriberId]) {
          subscribers[subscriberId] = from;
          var count = to.subscriberCount += 1;
          if (count == 1) to.emit_subscribersChanged(+1);
        } else {
          basis.dev.warn("Attempt to add duplicate subscription");
        }
      },
      unlink: function(type, from, to) {
        var subscriberId = type + from.basisObjectId;
        var subscribers = to.subscribers_;
        if (subscribers && subscribers[subscriberId]) {
          delete subscribers[subscriberId];
          var count = to.subscriberCount -= 1;
          if (count == 0) {
            to.emit_subscribersChanged(-1);
            to.subscribers_ = null;
          }
        } else {
          basis.dev.warn("Trying remove non-exists subscription");
        }
      },
      subscribe: function(object, mask) {
        var config = this.getMaskConfig(mask);
        for (var i = 0, action; action = config.actions[i]; i++) action(SUBSCRIPTION.link, object);
        object.addHandler(config.handler);
      },
      unsubscribe: function(object, mask) {
        var config = this.getMaskConfig(mask);
        for (var i = 0, action; action = config.actions[i++]; ) action(SUBSCRIPTION.unlink, object);
        object.removeHandler(config.handler);
      },
      changeSubscription: function(object, oldSubscriptionType, newSubscriptionType) {
        var delta = oldSubscriptionType ^ newSubscriptionType;
        if (delta) {
          var curConfig = SUBSCRIPTION.getMaskConfig(oldSubscriptionType);
          var newConfig = SUBSCRIPTION.getMaskConfig(newSubscriptionType);
          object.removeHandler(curConfig.handler);
          object.addHandler(newConfig.handler);
          var idx = 1;
          while (delta) {
            if (delta & 1) {
              var cfg = subscriptionConfig[idx];
              if (oldSubscriptionType & idx) cfg.action(SUBSCRIPTION.unlink, object); else cfg.action(SUBSCRIPTION.link, object);
            }
            idx <<= 1;
            delta >>= 1;
          }
        }
      }
    };
    module.exports = SUBSCRIPTION;
  },
  "4.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var values = basis.object.values;
    var STATE_EXISTS = {};
    var STATE = {
      priority: [],
      values: {},
      add: function(state, order) {
        var name = state;
        var value = state.toLowerCase();
        STATE[name] = value;
        STATE_EXISTS[value] = name;
        this.values[value] = name;
        if (order) order = this.priority.indexOf(order); else order = -1;
        if (order == -1) this.priority.push(value); else this.priority.splice(order, 0, value);
      },
      getList: function() {
        return values(STATE_EXISTS);
      },
      isValid: function(value) {
        return hasOwnProperty.call(STATE_EXISTS, value);
      }
    };
    STATE.add("READY");
    STATE.add("DEPRECATED");
    STATE.add("UNDEFINED");
    STATE.add("ERROR");
    STATE.add("PROCESSING");
    module.exports = STATE;
  },
  "3.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var sliceArray = Array.prototype.slice;
    var values = basis.object.values;
    var $self = basis.fn.$self;
    var STATE = basis.require("./4.js");
    var SUBSCRIPTION = basis.require("./5.js");
    var resolvers = basis.require("./6.js");
    var createResolveFunction = resolvers.createResolveFunction;
    var resolveValue = resolvers.resolveValue;
    var ResolveAdapter = resolvers.ResolveAdapter;
    var BBResolveAdapter = resolvers.BBResolveAdapter;
    var DEFAULT_CHANGE_ADAPTER_HANDLER = resolvers.DEFAULT_CHANGE_ADAPTER_HANDLER;
    var DEFAULT_DESTROY_ADAPTER_HANDLER = resolvers.DEFAULT_DESTROY_ADAPTER_HANDLER;
    var basisEvent = basis.require("./7.js");
    var Emitter = basisEvent.Emitter;
    var createEvent = basisEvent.create;
    var createEventHandler = basisEvent.createHandler;
    var events = basisEvent.events;
    var AbstractData = basis.require("./v.js");
    var NULL_OBJECT = {};
    var EMPTY_ARRAY = [];
    var FACTORY = basis.FACTORY;
    var PROXY = basis.PROXY;
    SUBSCRIPTION.addProperty("delegate");
    SUBSCRIPTION.addProperty("target");
    SUBSCRIPTION.addProperty("dataset");
    SUBSCRIPTION.addProperty("value", "change");
    var GETTER_ID = basis.getter.ID;
    var VALUE_EMMITER_HANDLER = {
      destroy: function(object) {
        this.value.unlink(object, this.fn);
      }
    };
    var VALUE_EMMITER_DESTROY_HANDLER = {
      destroy: function() {
        this.set(null);
      }
    };
    var computeFunctions = {};
    var valueSetters = {};
    var valueSyncAs = function(value) {
      Value.prototype.set.call(this, value);
    };
    var valueSyncPipe = function(newValue, oldValue) {
      if (oldValue instanceof Emitter) oldValue.removeHandler(this.pipeHandler, this); else oldValue = null;
      if (newValue instanceof Emitter) newValue.addHandler(this.pipeHandler, this); else newValue = null;
      if (newValue !== oldValue) Value.prototype.set.call(this, newValue);
    };
    var Value = Class(AbstractData, {
      className: namespace + ".Value",
      propertyDescriptors: {
        value: "change",
        bindingBridge: false,
        initValue: false,
        locked: false,
        proxy: false,
        setNullOnEmitterDestroy: false
      },
      subscribeTo: SUBSCRIPTION.VALUE,
      emit_change: createEvent("change", "oldValue") && function(oldValue) {
        events.change.call(this, oldValue);
        var cursor = this;
        while (cursor = cursor.links_) cursor.fn.call(cursor.context, this.value, oldValue);
      },
      value: null,
      initValue: null,
      proxy: null,
      locked: 0,
      lockedValue_: null,
      links_: null,
      deferred_: null,
      pipes_: null,
      setNullOnEmitterDestroy: true,
      bindingBridge: {
        attach: function(host, callback, context, onDestroy) {
          host.link(context, callback, true, onDestroy);
        },
        detach: function(host, callback, context) {
          host.unlink(context, callback);
        },
        get: function(host) {
          return host.value;
        }
      },
      init: function() {
        AbstractData.prototype.init.call(this);
        if (this.proxy) this.value = this.proxy(this.value);
        if (this.setNullOnEmitterDestroy && this.value instanceof Emitter) this.value.addHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
        this.initValue = this.value;
      },
      set: function(value) {
        var oldValue = this.value;
        var newValue = this.proxy ? this.proxy(value) : value;
        var changed = newValue !== oldValue;
        if (changed) {
          if (this.setNullOnEmitterDestroy) {
            if (oldValue instanceof Emitter) oldValue.removeHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
            if (newValue instanceof Emitter) newValue.addHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
          }
          this.value = newValue;
          if (!this.locked) this.emit_change(oldValue);
        }
        return changed;
      },
      reset: function() {
        this.set(this.initValue);
      },
      isLocked: function() {
        return this.locked > 0;
      },
      lock: function() {
        this.locked++;
        if (this.locked == 1) this.lockedValue_ = this.value;
      },
      unlock: function() {
        if (this.locked) {
          this.locked--;
          if (!this.locked) {
            var lockedValue = this.lockedValue_;
            this.lockedValue_ = null;
            if (this.value !== lockedValue) this.emit_change(lockedValue);
          }
        }
      },
      compute: function(events, fn) {
        if (!fn) {
          fn = events;
          events = null;
        }
        if (!fn) fn = $self;
        var hostValue = this;
        var handler = createEventHandler(events, function(object) {
          Value.prototype.set.call(this, fn(object, hostValue.value));
        });
        var fnId = fn[GETTER_ID] || String(fn);
        var getComputeValueId = handler.events.concat(fnId, this.basisObjectId).join("_");
        var getComputeValue = computeFunctions[getComputeValueId];
        if (!getComputeValue) {
          var computeMap = {};
          handler.destroy = function(object) {
            delete computeMap[object.basisObjectId];
            this.destroy();
          };
          this.addHandler({
            change: function() {
              for (var key in computeMap) {
                var pair = computeMap[key];
                Value.prototype.set.call(pair.value, fn(pair.object, this.value));
              }
            },
            destroy: function() {
              for (var key in computeMap) {
                var pair = computeMap[key];
                pair.object.removeHandler(handler, pair.value);
                pair.value.destroy();
              }
              computeMap = null;
              hostValue = null;
            }
          });
          getComputeValue = computeFunctions[getComputeValueId] = chainValueFactory(function(object) {
            if (object instanceof Emitter == false) basis.dev.warn("basis.data.Value#compute: object should be an instanceof basis.event.Emitter");
            var objectId = object.basisObjectId;
            var pair = computeMap[objectId];
            var value = fn(object, hostValue.value);
            if (!pair) {
              var computeValue = new ReadOnlyValue({
                value: value
              });
              basis.dev.setInfo(computeValue, "sourceInfo", {
                type: "Value#compute",
                source: [ object, hostValue ],
                events: events,
                transform: fn
              });
              object.addHandler(handler, computeValue);
              pair = computeMap[objectId] = {
                value: computeValue,
                object: object
              };
            } else {
              Value.prototype.set.call(pair.value, value);
            }
            return pair.value;
          });
        }
        return getComputeValue;
      },
      pipe: function(events, getter) {
        var pipeHandler = createEventHandler(events, valueFromSetProxy);
        var getterId = getter[GETTER_ID] || String(getter);
        var id = pipeHandler.events.join("_") + "_" + getterId;
        var pipes = this.pipes_;
        var pipeValue;
        if (!pipes) pipes = this.pipes_ = {}; else pipeValue = pipes[id];
        if (!pipeValue) {
          pipeValue = new PipeValue({
            source: this,
            pipeId: id,
            pipeHandler: pipeHandler
          });
          pipeValue.proxy = basis.getter(getter);
          if (this.value instanceof Emitter) {
            pipeValue.value = pipeValue.proxy(this.value);
            this.value.addHandler(pipeHandler, pipeValue);
          }
          pipes[id] = pipeValue;
          this.link(pipeValue, valueSyncPipe, true, pipeValue.destroy);
          basis.dev.setInfo(pipeValue, "sourceInfo", {
            type: "Value#pipe",
            source: this,
            events: events,
            transform: pipeValue.proxy
          });
        }
        return pipeValue;
      },
      as: function(fn) {
        if (arguments.length > 1) basis.dev.warn("basis.data.Value#as() doesn't accept deferred flag as second parameter anymore. Use value.as(fn).deferred() instead.");
        if (!fn || fn === $self) return this;
        if (this.links_) {
          var cursor = this;
          var fnId = fn[GETTER_ID] || String(fn);
          while (cursor = cursor.links_) {
            var context = cursor.context;
            if (context instanceof ReadOnlyValue && context.proxy && (context.proxy[GETTER_ID] || String(context.proxy)) == fnId) return context;
          }
        }
        var result = new ReadOnlyValue({
          proxy: fn,
          value: this.value
        });
        basis.dev.setInfo(result, "sourceInfo", {
          type: "Value#as",
          source: this,
          transform: fn
        });
        this.link(result, valueSyncAs, true, result.destroy);
        return result;
      },
      deferred: function() {
        if (arguments.length > 0) basis.dev.warn("basis.data.Value#deferred() doesn't accept parameters anymore. Use value.as(fn).deferred() instead.");
        if (!this.deferred_) {
          this.deferred_ = new DeferredValue({
            source: this,
            value: this.value
          });
          basis.dev.setInfo(this.deferred_, "sourceInfo", {
            type: "Value#deferred",
            source: this
          });
        }
        return this.deferred_;
      },
      link: function(context, fn, noApply, onDestroy) {
        if (typeof fn != "function") {
          var property = String(fn);
          fn = valueSetters[property];
          if (!fn) fn = valueSetters[property] = function(value) {
            this[property] = value;
          };
        }
        var cursor = this;
        while (cursor = cursor.links_) if (cursor.context === context && cursor.fn === fn) {
          basis.dev.warn(this.constructor.className + "#attach: Duplicate link pair context-fn");
          break;
        }
        this.links_ = {
          value: this,
          context: context,
          fn: fn,
          destroy: onDestroy || null,
          links_: this.links_
        };
        if (context instanceof Emitter) context.addHandler(VALUE_EMMITER_HANDLER, this.links_);
        if (!noApply) fn.call(context, this.value);
        return context;
      },
      unlink: function(context, fn) {
        var cursor = this;
        var prev;
        while (prev = cursor, cursor = cursor.links_) if (cursor.context === context && (!fn || cursor.fn === fn)) {
          cursor.fn = basis.fn.$undef;
          prev.links_ = cursor.links_;
          if (cursor.context instanceof Emitter) cursor.context.removeHandler(VALUE_EMMITER_HANDLER, cursor);
        }
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        if (this.setNullOnEmitterDestroy && this.value instanceof Emitter) this.value.removeHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
        var cursor = this.links_;
        this.links_ = null;
        while (cursor) {
          if (cursor.context instanceof Emitter) cursor.context.removeHandler(VALUE_EMMITER_HANDLER, cursor);
          if (cursor.destroy) cursor.destroy.call(cursor.context);
          cursor = cursor.links_;
        }
        this.proxy = null;
        this.initValue = null;
        this.value = null;
        this.lockedValue_ = null;
        this.deferred_ = null;
        this.pipes_ = null;
      }
    });
    var ReadOnlyValue = Class(Value, {
      className: namespace + ".ReadOnlyValue",
      set: basis.fn.$false
    });
    var deferredSchedule = basis.asap.schedule(function(value) {
      value.unlock();
    });
    var DEFERRED_HANDLER = {
      change: function(source) {
        if (!this.isLocked()) {
          this.lock();
          deferredSchedule.add(this);
        }
        Value.prototype.set.call(this, source.value);
      },
      destroy: function() {
        this.destroy();
      }
    };
    var DeferredValue = Class(ReadOnlyValue, {
      className: namespace + ".DeferredValue",
      setNullOnEmitterDestroy: false,
      source: null,
      init: function() {
        ReadOnlyValue.prototype.init.call(this);
        this.source.addHandler(DEFERRED_HANDLER, this);
      },
      deferred: function() {
        return this;
      },
      destroy: function() {
        deferredSchedule.remove(this);
        this.source = null;
        ReadOnlyValue.prototype.destroy.call(this);
      }
    });
    var PipeValue = Class(ReadOnlyValue, {
      className: namespace + ".PipeValue",
      source: null,
      pipeId: null,
      pipeHandler: null,
      destroy: function() {
        var source = this.source;
        var sourceValue = source.value;
        if (sourceValue instanceof Emitter) sourceValue.removeHandler(this.pipeHandler, this);
        source.pipes_[this.pipeId] = null;
        this.source = null;
        this.pipeHandler = null;
        ReadOnlyValue.prototype.destroy.call(this);
      }
    });
    var valueFromMap = {};
    var valueFromSetProxy = function(sender) {
      Value.prototype.set.call(this, sender);
    };
    Value.from = function(obj, events, getter) {
      var result;
      if (!obj) return null;
      if (obj instanceof Emitter) {
        if (!getter) {
          getter = events;
          events = null;
        }
        if (!getter) getter = $self;
        var handler = createEventHandler(events, valueFromSetProxy);
        var getterId = getter[GETTER_ID] || String(getter);
        var id = handler.events.concat(getterId, obj.basisObjectId).join("_");
        result = valueFromMap[id];
        if (!result) {
          result = valueFromMap[id] = new ReadOnlyValue({
            proxy: basis.getter(getter),
            value: obj,
            handler: {
              destroy: function() {
                valueFromMap[id] = null;
                obj.removeHandler(handler, this);
              }
            }
          });
          basis.dev.setInfo(result, "sourceInfo", {
            type: "Value.from",
            source: obj,
            events: events,
            transform: result.proxy
          });
          handler.destroy = function() {
            valueFromMap[id] = null;
            this.destroy();
          };
          obj.addHandler(handler, result);
        }
      }
      if (!result) {
        var id = obj.basisObjectId;
        var bindingBridge = obj.bindingBridge;
        if (id && bindingBridge) {
          result = valueFromMap[id];
          if (!result) {
            result = valueFromMap[id] = new ReadOnlyValue({
              value: bindingBridge.get(obj),
              handler: {
                destroy: function() {
                  valueFromMap[id] = null;
                  bindingBridge.detach(obj, Value.prototype.set, result);
                }
              }
            });
            bindingBridge.attach(obj, Value.prototype.set, result, result.destroy);
          }
        }
      }
      if (!result) throw new Error("Bad object type");
      return result;
    };
    var UNDEFINED_VALUE = new ReadOnlyValue({
      value: undefined
    });
    var queryAsFunctionCache = {};
    function getQueryPathFragment(target, path, index) {
      var pathFragment = path[index];
      var isStatic = false;
      var descriptor;
      var events;
      if (/^<static>/.test(pathFragment)) {
        isStatic = true;
        pathFragment = pathFragment.substr(8);
      }
      var descriptor = target.propertyDescriptors[pathFragment];
      var events = descriptor ? descriptor.events : null;
      if (descriptor && descriptor.isPrivate) {
        isStatic = true;
        events = null;
        var warnMessage = "Property can't be accessed via query: ";
        basis.dev.warn(warnMessage + path.join(".") + "\n" + basis.string.repeat(" ", warnMessage.length + path.slice(0, index).join(".").length) + basis.string.repeat("^", pathFragment.length));
      }
      if (descriptor && descriptor.isStatic) isStatic = true;
      if (events) {
        if (isStatic) {
          events = null;
          var warnMessage = "<static> was applied for property that has events: ";
          basis.dev.warn(warnMessage + path.join(".") + "\n" + basis.string.repeat(" ", warnMessage.length + path.slice(0, index).join(".").length) + basis.string.repeat("^", "<static>".length) + "\n" + "Propably is't a bug and <static> should be removed from path");
        } else {
          if (descriptor && descriptor.nested && index < path.length - 1) pathFragment += "." + path[++index];
        }
      } else {
        if (!isStatic) {
          var warnMessage = "No events found for property: ";
          basis.dev.warn(warnMessage + path.join(".") + "\n" + basis.string.repeat(" ", warnMessage.length + path.slice(0, index).join(".").length) + basis.string.repeat("^", pathFragment.length) + "\n" + "If a property never changes use `<static>` before property name, i.e. " + path.slice(0, index).join(".") + (index ? "." : "") + "<static>" + path.slice(index).join("."));
          return;
        }
      }
      return {
        path: pathFragment,
        rest: path.slice(index + 1).join("."),
        events: events || null
      };
    }
    function getQueryPathFunction(path) {
      var result = queryAsFunctionCache[path];
      if (!result) result = queryAsFunctionCache[path] = basis.getter(function(target) {
        if (target instanceof Emitter) return Value.query(target, path);
      });
      return result;
    }
    Value.query = function(target, path) {
      if (arguments.length == 1) {
        path = target;
        return chainValueFactory(function(target) {
          return Value.query(target, path);
        });
      }
      if (target instanceof Emitter == false) throw new Error("Bad target type");
      if (typeof path != "string") throw new Error("Path should be a string");
      var pathFragment = getQueryPathFragment(target, path.split("."), 0);
      var result;
      if (!pathFragment) return UNDEFINED_VALUE;
      result = Value.from(target, pathFragment.events, pathFragment.path);
      if (pathFragment.rest) result = result.as(getQueryPathFunction(pathFragment.rest)).pipe("change", "value");
      return result;
    };
    function chainValueFactory(fn) {
      fn.factory = FACTORY;
      fn.deferred = valueDeferredFactory;
      fn.compute = valueComputeFactory;
      fn.pipe = valuePipeFactory;
      fn.as = valueAsFactory;
      return fn;
    }
    function valueDeferredFactory() {
      var factory = this;
      return chainValueFactory(function(value) {
        value = factory(value);
        return value ? value.deferred() : value;
      });
    }
    function valueComputeFactory(events, getter) {
      var factory = this;
      return chainValueFactory(function(sourceValue) {
        var value = factory(sourceValue);
        return value ? value.compute(events, getter)(sourceValue) : value;
      });
    }
    function valueAsFactory(getter) {
      var factory = this;
      return chainValueFactory(function(value) {
        value = factory(value);
        return value ? value.as(getter) : value;
      });
    }
    function valuePipeFactory(events, getter) {
      var factory = this;
      return chainValueFactory(function(value) {
        value = factory(value);
        return value ? value.pipe(events, getter) : value;
      });
    }
    Value.factory = function(events, getter) {
      return chainValueFactory(function(object) {
        return Value.from(object, events, getter);
      });
    };
    Value.state = function(source) {
      return source instanceof AbstractData ? Value.from(source, "stateChanged", "state") : STATE.UNDEFINED;
    };
    Value.stateFactory = function(events, getter) {
      return Value.factory(events, getter).pipe("stateChanged", "state").as(function(state) {
        return state || STATE.UNDEFINED;
      });
    };
    var INIT_DATA = {};
    function isConnected(a, b) {
      while (b && b !== a && b !== b.delegate) b = b.delegate;
      return b === a;
    }
    function applyDelegateChanges(object, oldRoot, oldTarget) {
      var delegate = object.delegate;
      if (delegate) {
        object.root = delegate.root;
        object.target = delegate.target;
        object.data = delegate.data;
        object.state = delegate.state;
      }
      if (object.root !== oldRoot) {
        var rootListenHandler = object.listen.root;
        if (rootListenHandler) {
          if (oldRoot && oldRoot !== object) oldRoot.removeHandler(rootListenHandler, object);
          if (object.root && object.root !== object) object.root.addHandler(rootListenHandler, object);
        }
        object.emit_rootChanged(oldRoot);
      }
      if (object.target !== oldTarget) {
        var targetListenHandler = object.listen.target;
        if (targetListenHandler) {
          if (oldTarget && oldTarget !== object) oldTarget.removeHandler(targetListenHandler, object);
          if (object.target && object.target !== object) object.target.addHandler(targetListenHandler, object);
        }
        object.emit_targetChanged(oldTarget);
      }
      var cursor = object.delegates_;
      while (cursor) {
        if (cursor.delegate) applyDelegateChanges(cursor.delegate, oldRoot, oldTarget);
        cursor = cursor.next;
      }
    }
    var DataObject = Class(AbstractData, {
      className: namespace + ".Object",
      propertyDescriptors: {
        delegate: "delegateChanged",
        target: "targetChanged",
        root: "rootChanged",
        data: {
          nested: true,
          events: "update"
        }
      },
      subscribeTo: SUBSCRIPTION.DELEGATE + SUBSCRIPTION.TARGET,
      data: null,
      emit_update: createEvent("update", "delta") && function(delta) {
        var cursor = this.delegates_;
        events.update.call(this, delta);
        while (cursor) {
          if (cursor.delegate) cursor.delegate.emit_update(delta);
          cursor = cursor.next;
        }
      },
      emit_stateChanged: function(oldState) {
        var cursor = this.delegates_;
        AbstractData.prototype.emit_stateChanged.call(this, oldState);
        while (cursor) {
          if (cursor.delegate) {
            cursor.delegate.state = this.state;
            cursor.delegate.emit_stateChanged(oldState);
          }
          cursor = cursor.next;
        }
      },
      delegate: null,
      delegateRA_: null,
      delegates_: null,
      debug_delegates: function() {
        var cursor = this.delegates_;
        var result = [];
        while (cursor) {
          result.push(cursor.delegate);
          cursor = cursor.next;
        }
        return result;
      },
      emit_delegateChanged: createEvent("delegateChanged", "oldDelegate"),
      target: null,
      emit_targetChanged: createEvent("targetChanged", "oldTarget"),
      root: null,
      emit_rootChanged: createEvent("rootChanged", "oldRoot"),
      init: function() {
        this.root = this;
        AbstractData.prototype.init.call(this);
        var delegate = this.delegate;
        var data = this.data;
        if (delegate) {
          this.delegate = null;
          this.target = null;
          this.data = INIT_DATA;
          this.setDelegate(delegate);
          if (this.data === INIT_DATA) this.data = data || {};
        } else {
          if (!data) this.data = {};
          if (this.target !== null) this.target = this;
        }
      },
      setSyncAction: function(syncAction) {
        if (syncAction && this.delegate) basis.dev.warn(this.constructor.syncAction + " instance has a delegate and syncAction - it may produce conflics with data & state");
        AbstractData.prototype.setSyncAction.call(this, syncAction);
      },
      setDelegate: function(newDelegate) {
        newDelegate = resolveObject(this, this.setDelegate, newDelegate, "delegateRA_");
        if (newDelegate && newDelegate instanceof DataObject) {
          if (newDelegate.delegate && isConnected(this, newDelegate)) {
            basis.dev.warn("New delegate has already connected to object. Delegate assignment has been ignored.", this, newDelegate);
            return false;
          }
        } else {
          newDelegate = null;
        }
        if (this.delegate !== newDelegate) {
          var oldState = this.state;
          var oldData = this.data;
          var oldDelegate = this.delegate;
          var oldTarget = this.target;
          var oldRoot = this.root;
          var delegateListenHandler = this.listen.delegate;
          var dataChanged = false;
          var delta;
          if (oldDelegate) {
            if (delegateListenHandler) oldDelegate.removeHandler(delegateListenHandler, this);
            var cursor = oldDelegate.delegates_;
            var prev = oldDelegate;
            while (cursor) {
              if (cursor.delegate === this) {
                cursor.delegate = null;
                if (prev === oldDelegate) oldDelegate.delegates_ = cursor.next; else prev.next = cursor.next;
                break;
              }
              prev = cursor;
              cursor = cursor.next;
            }
          }
          if (newDelegate) {
            this.delegate = newDelegate;
            if (delegateListenHandler) newDelegate.addHandler(delegateListenHandler, this);
            newDelegate.delegates_ = {
              delegate: this,
              next: newDelegate.delegates_
            };
            if (this.data !== INIT_DATA) {
              delta = {};
              for (var key in newDelegate.data) if (key in oldData === false) {
                dataChanged = true;
                delta[key] = undefined;
              }
              for (var key in oldData) if (oldData[key] !== newDelegate.data[key]) {
                dataChanged = true;
                delta[key] = oldData[key];
              }
            }
          } else {
            this.delegate = null;
            this.target = null;
            this.root = this;
            this.data = {};
            for (var key in oldData) this.data[key] = oldData[key];
          }
          applyDelegateChanges(this, oldRoot, oldTarget);
          if (dataChanged) this.emit_update(delta);
          if (delta && oldState !== this.state && (String(oldState) != this.state || oldState.data !== this.state.data)) this.emit_stateChanged(oldState);
          this.emit_delegateChanged(oldDelegate);
          return true;
        }
        return false;
      },
      setState: function(state, data) {
        if (this.delegate) return this.root.setState(state, data); else return AbstractData.prototype.setState.call(this, state, data);
      },
      update: function(data) {
        if (this.delegate) return this.root.update(data);
        if (data) {
          var delta = {};
          var changed = false;
          for (var prop in data) if (this.data[prop] !== data[prop]) {
            changed = true;
            delta[prop] = this.data[prop];
            this.data[prop] = data[prop];
          }
          if (changed) {
            this.emit_update(delta);
            return delta;
          }
        }
        return false;
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        var cursor = this.delegates_;
        this.delegates_ = null;
        while (cursor) {
          cursor.delegate.setDelegate();
          cursor = cursor.next;
        }
        if (this.delegate) this.setDelegate();
        if (this.delegateRA_) resolveObject(this, false, false, "delegateRA_");
        this.data = NULL_OBJECT;
        this.root = null;
        this.target = null;
      }
    });
    var resolveObject = createResolveFunction(DataObject);
    var Slot = Class(DataObject, {
      className: namespace + ".Slot"
    });
    var KEYOBJECTMAP_MEMBER_HANDLER = {
      destroy: function() {
        delete this.map[this.id];
      }
    };
    var KeyObjectMap = Class(AbstractData, {
      className: namespace + ".KeyObjectMap",
      itemClass: DataObject,
      keyGetter: basis.getter($self),
      autoDestroyMembers: true,
      map_: null,
      extendConstructor_: true,
      init: function() {
        this.map_ = {};
        AbstractData.prototype.init.call(this);
      },
      resolve: function(object) {
        return this.get(this.keyGetter(object), object);
      },
      create: function(key) {
        var itemConfig;
        if (key instanceof DataObject) itemConfig = {
          delegate: key
        }; else itemConfig = {
          data: {
            id: key,
            title: key
          }
        };
        return new this.itemClass(itemConfig);
      },
      get: function(key, autocreate) {
        var itemId = key instanceof DataObject ? key.basisObjectId : key;
        var itemInfo = this.map_[itemId];
        if (!itemInfo && autocreate) {
          itemInfo = this.map_[itemId] = {
            map: this.map_,
            id: itemId,
            item: this.create(key, autocreate)
          };
          itemInfo.item.addHandler(KEYOBJECTMAP_MEMBER_HANDLER, itemInfo);
        }
        if (itemInfo) return itemInfo.item;
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        var map = this.map_;
        this.map_ = null;
        for (var itemId in map) {
          var itemInfo = map[itemId];
          if (this.autoDestroyMembers) itemInfo.item.destroy(); else itemInfo.item.removeHandler(KEYOBJECTMAP_MEMBER_HANDLER, itemInfo);
        }
      }
    });
    function getDelta(inserted, deleted) {
      var delta = {};
      var result;
      if (inserted && inserted.length) result = delta.inserted = inserted;
      if (deleted && deleted.length) result = delta.deleted = deleted;
      if (result) return delta;
    }
    function getDatasetDelta(a, b) {
      if (!a || !a.itemCount) {
        if (b && b.itemCount) return {
          inserted: b.getItems()
        };
      } else {
        if (!b || !b.itemCount) {
          if (a.itemCount) return {
            deleted: a.getItems()
          };
        } else {
          var inserted = [];
          var deleted = [];
          for (var key in a.items_) {
            var item = a.items_[key];
            if (item.basisObjectId in b.items_ == false) deleted.push(item);
          }
          for (var key in b.items_) {
            var item = b.items_[key];
            if (item.basisObjectId in a.items_ == false) inserted.push(item);
          }
          return getDelta(inserted, deleted);
        }
      }
    }
    var DatasetWrapper = Class(DataObject, {
      className: namespace + ".DatasetWrapper",
      propertyDescriptors: {
        dataset: "datasetChanged"
      },
      active: PROXY,
      subscribeTo: DataObject.prototype.subscribeTo + SUBSCRIPTION.DATASET,
      listen: {
        dataset: {
          itemsChanged: function(dataset, delta) {
            this.itemCount = dataset.itemCount;
            this.emit_itemsChanged(delta);
          },
          destroy: function() {
            this.setDataset();
          }
        }
      },
      dataset: null,
      datasetRA_: null,
      emit_datasetChanged: createEvent("datasetChanged", "oldDataset"),
      emit_itemsChanged: createEvent("itemsChanged", "delta"),
      init: function() {
        DataObject.prototype.init.call(this);
        var dataset = this.dataset;
        if (dataset) {
          this.dataset = null;
          this.setDataset(dataset);
        }
      },
      setDataset: function(dataset) {
        dataset = resolveDataset(this, this.setDataset, dataset, "datasetRA_");
        if (this.dataset !== dataset) {
          var listenHandler = this.listen.dataset;
          var oldDataset = this.dataset;
          var delta;
          if (listenHandler) {
            if (oldDataset) oldDataset.removeHandler(listenHandler, this);
            if (dataset) dataset.addHandler(listenHandler, this);
          }
          this.itemCount = dataset ? dataset.itemCount : 0;
          this.dataset = dataset;
          if (delta = getDatasetDelta(oldDataset, dataset)) this.emit_itemsChanged(delta);
          this.emit_datasetChanged(oldDataset);
        }
      },
      has: function(object) {
        return this.dataset ? this.dataset.has(object) : null;
      },
      getItems: function() {
        return this.dataset ? this.dataset.getItems() : [];
      },
      getValues: function(getter) {
        return this.dataset ? this.dataset.getValues(getter) : [];
      },
      pick: function() {
        return this.dataset ? this.dataset.pick() : null;
      },
      top: function(count) {
        return this.dataset ? this.dataset.top(count) : [];
      },
      forEach: function(fn) {
        if (this.dataset) return this.dataset.forEach(fn);
      },
      destroy: function() {
        if (this.dataset || this.datasetRA_) this.setDataset();
        DataObject.prototype.destroy.call(this);
      }
    });
    var ReadOnlyDataset = Class(AbstractData, {
      className: namespace + ".ReadOnlyDataset",
      propertyDescriptors: {
        itemCount: "itemsChanged",
        "pick()": "itemsChanged",
        "getItems()": "itemsChanged"
      },
      itemCount: 0,
      items_: null,
      members_: null,
      cache_: null,
      emit_itemsChanged: createEvent("itemsChanged", "delta") && function(delta) {
        var items;
        var insertCount = 0;
        var deleteCount = 0;
        var object;
        if (items = delta.inserted) {
          while (object = items[insertCount]) {
            this.items_[object.basisObjectId] = object;
            insertCount++;
          }
        }
        if (items = delta.deleted) {
          while (object = items[deleteCount]) {
            delete this.items_[object.basisObjectId];
            deleteCount++;
          }
        }
        this.itemCount += insertCount - deleteCount;
        this.cache_ = insertCount == this.itemCount ? delta.inserted : null;
        events.itemsChanged.call(this, delta);
      },
      init: function() {
        AbstractData.prototype.init.call(this);
        this.members_ = {};
        this.items_ = {};
      },
      has: function(object) {
        return !!(object && this.items_[object.basisObjectId]);
      },
      getItems: function() {
        if (!this.cache_) this.cache_ = values(this.items_);
        return this.cache_;
      },
      getValues: function(getter) {
        return this.getItems().map(basis.getter(getter || $self));
      },
      pick: function() {
        for (var objectId in this.items_) return this.items_[objectId];
        return null;
      },
      top: function(count) {
        var result = [];
        if (count) for (var objectId in this.items_) if (result.push(this.items_[objectId]) >= count) break;
        return result;
      },
      forEach: function(fn) {
        var items = this.getItems();
        for (var i = 0; i < items.length; i++) fn(items[i]);
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        this.cache_ = EMPTY_ARRAY;
        this.itemCount = 0;
        this.members_ = null;
        this.items_ = null;
      }
    });
    var Dataset = Class(ReadOnlyDataset, {
      className: namespace + ".Dataset",
      listen: {
        item: {
          destroy: function(object) {
            this.remove([ object ]);
          }
        }
      },
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var items = this.items;
        if (items) {
          this.items = null;
          this.set(items);
        }
      },
      add: function(items) {
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var inserted = [];
        var delta;
        if (items && !Array.isArray(items)) items = [ items ];
        for (var i = 0; i < items.length; i++) {
          var object = items[i];
          if (object instanceof DataObject) {
            var objectId = object.basisObjectId;
            if (!memberMap[objectId]) {
              memberMap[objectId] = object;
              if (listenHandler) object.addHandler(listenHandler, this);
              inserted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        if (inserted.length) {
          this.emit_itemsChanged(delta = {
            inserted: inserted
          });
        }
        return delta;
      },
      remove: function(items) {
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var deleted = [];
        var delta;
        if (items && !Array.isArray(items)) items = [ items ];
        for (var i = 0; i < items.length; i++) {
          var object = items[i];
          if (object instanceof DataObject) {
            var objectId = object.basisObjectId;
            if (memberMap[objectId]) {
              if (listenHandler) object.removeHandler(listenHandler, this);
              delete memberMap[objectId];
              deleted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        if (deleted.length) {
          this.emit_itemsChanged(delta = {
            deleted: deleted
          });
        }
        return delta;
      },
      set: function(items) {
        if (!this.itemCount) return this.add(items);
        if (!items || !items.length) return this.clear();
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var exists = {};
        var deleted = [];
        var inserted = [];
        var object;
        var objectId;
        var delta;
        for (var i = 0; i < items.length; i++) {
          object = items[i];
          if (object instanceof DataObject) {
            objectId = object.basisObjectId;
            exists[objectId] = object;
            if (!memberMap[objectId]) {
              memberMap[objectId] = object;
              if (listenHandler) object.addHandler(listenHandler, this);
              inserted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        for (var objectId in memberMap) {
          if (!exists[objectId]) {
            object = memberMap[objectId];
            if (listenHandler) object.removeHandler(listenHandler, this);
            delete memberMap[objectId];
            deleted.push(object);
          }
        }
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
        return delta;
      },
      sync: function(items) {
        basis.dev.warn("basis.data.Dataset#sync() method is deprecated, use basis.data.Dataset#setAndDestroyRemoved() instead.");
        return this.setAndDestroyRemoved(items);
      },
      setAndDestroyRemoved: function(items) {
        var delta = this.set(items) || {};
        var deleted = delta.deleted;
        Dataset.setAccumulateState(true);
        if (deleted) for (var i = 0, object; object = deleted[i]; i++) object.destroy();
        Dataset.setAccumulateState(false);
        return delta.inserted;
      },
      clear: function() {
        var deleted = this.getItems();
        var listenHandler = this.listen.item;
        var delta;
        if (deleted.length) {
          if (listenHandler) for (var i = 0; i < deleted.length; i++) deleted[i].removeHandler(listenHandler, this);
          this.emit_itemsChanged(delta = {
            deleted: deleted
          });
          this.members_ = {};
        }
        return delta;
      },
      destroy: function() {
        this.clear();
        ReadOnlyDataset.prototype.destroy.call(this);
      }
    });
    var DATASETWRAPPER_ADAPTER_HANDLER = {
      datasetChanged: DEFAULT_CHANGE_ADAPTER_HANDLER,
      destroy: DEFAULT_DESTROY_ADAPTER_HANDLER
    };
    function resolveAdapterProxy() {
      this.fn.call(this.context, this.source);
    }
    function resolveDataset(context, fn, source, property, factoryContext) {
      var oldAdapter = context[property] || null;
      var newAdapter = null;
      if (fn !== resolveAdapterProxy && typeof source == "function") source = source.call(factoryContext || context, factoryContext || context);
      if (source) {
        var adapter = newAdapter = oldAdapter && oldAdapter.source === source ? oldAdapter : null;
        if (source instanceof DatasetWrapper) {
          newAdapter = adapter || new ResolveAdapter(context, fn, source, DATASETWRAPPER_ADAPTER_HANDLER);
          source = source.dataset;
        } else if (source.bindingBridge) {
          newAdapter = adapter || new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER);
          source = resolveDataset(newAdapter, resolveAdapterProxy, source.value, "next");
        }
      }
      if (source instanceof ReadOnlyDataset == false) source = null;
      if (property && oldAdapter !== newAdapter) {
        var cursor = oldAdapter;
        while (cursor) {
          var adapter = cursor;
          adapter.detach();
          cursor = adapter.next;
          adapter.next = null;
        }
        if (newAdapter) newAdapter.attach(DEFAULT_DESTROY_ADAPTER_HANDLER);
        context[property] = newAdapter;
      }
      return source;
    }
    Dataset.setAccumulateState = function() {
      var proto = ReadOnlyDataset.prototype;
      var eventCache = {};
      var setStateCount = 0;
      var urgentTimer;
      var realEvent;
      function flushCache(cache) {
        var dataset = cache.dataset;
        realEvent.call(dataset, cache);
      }
      function flushAllDataset() {
        var eventCacheCopy = eventCache;
        eventCache = {};
        for (var datasetId in eventCacheCopy) {
          var entry = eventCacheCopy[datasetId];
          if (entry) flushCache(entry);
        }
      }
      function storeDatasetDelta(delta) {
        var dataset = this;
        var datasetId = dataset.basisObjectId;
        var inserted = delta.inserted;
        var deleted = delta.deleted;
        var cache = eventCache[datasetId];
        if (inserted && deleted || cache && cache.mixed) {
          if (cache) {
            eventCache[datasetId] = null;
            flushCache(cache);
          }
          realEvent.call(dataset, delta);
          return;
        }
        if (cache) {
          var mode = inserted ? "inserted" : "deleted";
          var array = cache[mode];
          if (!array) {
            var inCacheMode = inserted ? "deleted" : "inserted";
            var inCache = cache[inCacheMode];
            var inCacheMap = {};
            var deltaItems = inserted || deleted;
            var newInCacheItems = [];
            var inCacheRemoves = 0;
            for (var i = 0; i < inCache.length; i++) inCacheMap[inCache[i].basisObjectId] = i;
            for (var i = 0; i < deltaItems.length; i++) {
              var id = deltaItems[i].basisObjectId;
              if (id in inCacheMap == false) {
                newInCacheItems.push(deltaItems[i]);
              } else {
                if (!inCacheRemoves) inCache = sliceArray.call(inCache);
                inCacheRemoves++;
                inCache[inCacheMap[id]] = null;
              }
            }
            if (inCacheRemoves) {
              if (inCacheRemoves < inCache.length) {
                inCache = inCache.filter(Boolean);
              } else {
                inCache = null;
              }
              cache[inCacheMode] = inCache;
            }
            if (!newInCacheItems.length) {
              newInCacheItems = null;
              if (!inCache) eventCache[datasetId] = null;
            } else {
              cache[mode] = newInCacheItems;
              if (inCache) cache.mixed = true;
            }
          } else array.push.apply(array, inserted || deleted);
          return;
        }
        eventCache[datasetId] = {
          inserted: inserted,
          deleted: deleted,
          dataset: dataset,
          mixed: false
        };
      }
      function urgentFlush() {
        urgentTimer = null;
        if (setStateCount) {
          basis.dev.warn("(debug) Urgent flush dataset changes");
          setStateCount = 0;
          setAccumulateStateOff();
        }
      }
      function setAccumulateStateOff() {
        proto.emit_itemsChanged = realEvent;
        flushAllDataset();
      }
      return function(state) {
        if (state) {
          if (setStateCount == 0) {
            realEvent = proto.emit_itemsChanged;
            proto.emit_itemsChanged = storeDatasetDelta;
            if (!urgentTimer) urgentTimer = basis.setImmediate(urgentFlush);
          }
          setStateCount++;
        } else {
          setStateCount -= setStateCount > 0;
          if (setStateCount == 0) setAccumulateStateOff();
        }
      };
    }();
    function wrapData(data) {
      if (Array.isArray(data)) return data.map(function(item) {
        return {
          data: item
        };
      }); else return {
        data: data
      };
    }
    function wrapObject(data) {
      if (!data || data.constructor !== Object) data = {
        value: data
      };
      return new DataObject({
        data: data
      });
    }
    function wrap(value, retObject) {
      var wrapper = retObject ? wrapObject : wrapData;
      return Array.isArray(value) ? value.map(wrapper) : wrapper(value);
    }
    module.exports = {
      STATE: STATE,
      SUBSCRIPTION: SUBSCRIPTION,
      AbstractData: AbstractData,
      Value: Value,
      ReadOnlyValue: ReadOnlyValue,
      DeferredValue: DeferredValue,
      PipeValue: PipeValue,
      chainValueFactory: chainValueFactory,
      Object: DataObject,
      Slot: Slot,
      KeyObjectMap: KeyObjectMap,
      ReadOnlyDataset: ReadOnlyDataset,
      Dataset: Dataset,
      DatasetWrapper: DatasetWrapper,
      isConnected: isConnected,
      getDatasetDelta: getDatasetDelta,
      ResolveAdapter: ResolveAdapter,
      createResolveFunction: createResolveFunction,
      resolveValue: resolveValue,
      resolveObject: resolveObject,
      resolveDataset: resolveDataset,
      wrapData: wrapData,
      wrapObject: wrapObject,
      wrap: wrap
    };
  },
  "2.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var $null = basis.fn.$null;
    var arrayFrom = basis.array.from;
    var globalEvents = {};
    var EVENT_HOLDER = "basisEvents_" + basis.genUID();
    var W3CSUPPORT = !!document.addEventListener;
    var KEY = {
      BACKSPACE: 8,
      TAB: 9,
      CTRL_ENTER: 10,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      ESCAPE: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123
    };
    var MOUSE_LEFT = {
      VALUE: 1,
      BIT: 1
    };
    var MOUSE_MIDDLE = {
      VALUE: 2,
      BIT: 4
    };
    var MOUSE_RIGHT = {
      VALUE: 3,
      BIT: 2
    };
    var BROWSER_EVENTS = {
      mousewheel: [ "wheel", "mousewheel", "DOMMouseScroll" ]
    };
    var DEPRECATED = /^(returnValue|keyLocation|layerX|layerY|webkitMovementX|webkitMovementY)$/;
    function browserEvents(eventName) {
      return BROWSER_EVENTS[eventName] || [ eventName ];
    }
    function getPath(node) {
      var path = [];
      do {
        path.push(node);
      } while (node = node.parentNode);
      path.push(global);
      return path;
    }
    var Event = basis.Class(null, {
      className: namespace + ".Event",
      KEY: KEY,
      init: function(event) {
        event = wrap(event);
        for (var name in event) if (!DEPRECATED.test(name) && (event.type != "progress" || name != "totalSize" && name != "position")) if (typeof event[name] != "function" && name in this == false) this[name] = event[name];
        var target = sender(event);
        basis.object.extend(this, {
          event_: event,
          sender: target,
          target: target,
          path: event.path ? basis.array(event.path) : getPath(target),
          key: key(event),
          charCode: charCode(event),
          mouseLeft: mouseButton(event, MOUSE_LEFT),
          mouseMiddle: mouseButton(event, MOUSE_MIDDLE),
          mouseRight: mouseButton(event, MOUSE_RIGHT),
          mouseX: mouseX(event),
          mouseY: mouseY(event),
          wheelDelta: wheelDelta(event)
        });
      },
      stopBubble: function() {
        cancelBubble(this.event_);
      },
      stopPropagation: function() {
        cancelBubble(this.event_);
      },
      preventDefault: function() {
        cancelDefault(this.event_);
      },
      die: function() {
        this.stopBubble();
        this.preventDefault();
      }
    });
    function wrap(event) {
      return event instanceof Event ? event.event_ : event || global.event;
    }
    function getNode(ref) {
      return typeof ref == "string" ? document.getElementById(ref) : ref;
    }
    function sender(event) {
      var target = event.target || event.srcElement || document;
      return target.nodeType == 3 ? target.parentNode : target;
    }
    function cancelBubble(event) {
      if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;
    }
    function cancelDefault(event) {
      if (event.preventDefault) event.preventDefault(); else event.returnValue = false;
    }
    function kill(event, node) {
      node = getNode(node);
      if (node) addHandler(node, event, kill); else {
        cancelDefault(event);
        cancelBubble(event);
      }
    }
    function key(event) {
      return event.keyCode || event.which || 0;
    }
    function charCode(event) {
      return event.charCode || event.keyCode || 0;
    }
    function mouseButton(event, button) {
      if (typeof event.which == "number") return event.which == button.VALUE; else return !!(event.button & button.BIT);
    }
    function mouseX(event) {
      if (event.changedTouches) return event.changedTouches[0].pageX; else if ("pageX" in event) return event.pageX; else return "clientX" in event ? event.clientX + (document.compatMode == "CSS1Compat" ? document.documentElement.scrollLeft : document.body.scrollLeft) : 0;
    }
    function mouseY(event) {
      if (event.changedTouches) return event.changedTouches[0].pageY; else if ("pageY" in event) return event.pageY; else return "clientY" in event ? event.clientY + (document.compatMode == "CSS1Compat" ? document.documentElement.scrollTop : document.body.scrollTop) : 0;
    }
    function wheelDelta(event) {
      var delta = 0;
      if ("deltaY" in event) delta = -event.deltaY; else if ("wheelDelta" in event) delta = event.wheelDelta; else if (event.type == "DOMMouseScroll") delta = -event.detail;
      return delta && delta / Math.abs(delta);
    }
    var globalHandlers = {};
    var captureHandlers = {};
    var noCaptureScheme = !W3CSUPPORT;
    var flushAsap = true;
    var lastFrameStartEvent;
    var lastFrameFinishEvent;
    function startFrame(event) {
      if (flushAsap && event !== lastFrameStartEvent) {
        lastFrameStartEvent = event;
        basis.codeFrame.start();
      }
    }
    function finishFrame(event) {
      if (flushAsap && event !== lastFrameFinishEvent) {
        lastFrameFinishEvent = event;
        basis.codeFrame.finish();
      }
    }
    function observeGlobalEvents(event) {
      var handlers = arrayFrom(globalHandlers[event.type]);
      var captureHandler = captureHandlers[event.type];
      var wrappedEvent = new Event(event);
      startFrame(event);
      if (captureHandler) {
        captureHandler.handler.call(captureHandler.thisObject, wrappedEvent);
      } else {
        if (handlers) {
          for (var i = handlers.length; i-- > 0; ) {
            var handlerObject = handlers[i];
            handlerObject.handler.call(handlerObject.thisObject, wrappedEvent);
          }
        }
      }
      finishFrame(event);
    }
    function captureEvent(eventType, handler, thisObject) {
      if (captureHandlers[eventType]) releaseEvent(eventType);
      if (!handler) handler = basis.fn.$undef;
      addGlobalHandler(eventType, handler, thisObject);
      captureHandlers[eventType] = {
        handler: handler,
        thisObject: thisObject
      };
    }
    function releaseEvent(eventType) {
      var handlerObject = captureHandlers[eventType];
      if (handlerObject) {
        removeGlobalHandler(eventType, handlerObject.handler, handlerObject.thisObject);
        delete captureHandlers[eventType];
      }
    }
    function addGlobalHandler(eventType, handler, thisObject) {
      var handlers = globalHandlers[eventType];
      if (handlers) {
        for (var i = 0, item; item = handlers[i]; i++) if (item.handler === handler && item.thisObject === thisObject) return;
      } else {
        if (noCaptureScheme) addHandler(document, eventType, $null); else document.addEventListener(eventType, observeGlobalEvents, true);
        handlers = globalHandlers[eventType] = [];
      }
      handlers.push({
        handler: handler,
        thisObject: thisObject
      });
    }
    function removeGlobalHandler(eventType, handler, thisObject) {
      var handlers = globalHandlers[eventType];
      if (handlers) {
        for (var i = 0, item; item = handlers[i]; i++) {
          if (item.handler === handler && item.thisObject === thisObject) {
            handlers.splice(i, 1);
            if (!handlers.length) {
              delete globalHandlers[eventType];
              if (noCaptureScheme) removeHandler(document, eventType, $null); else document.removeEventListener(eventType, observeGlobalEvents, true);
            }
            return;
          }
        }
      }
    }
    function addHandler(node, eventType, handler, thisObject) {
      node = getNode(node);
      if (!node) throw "basis.event.addHandler: can't attach event listener to undefined";
      if (typeof handler != "function") throw "basis.event.addHandler: handler is not a function";
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (!handlers) handlers = node[EVENT_HOLDER] = {};
      var eventTypeHandlers = handlers[eventType];
      var handlerObject = {
        handler: handler,
        thisObject: thisObject
      };
      if (!eventTypeHandlers) {
        eventTypeHandlers = handlers[eventType] = [ handlerObject ];
        eventTypeHandlers.fireEvent = function(event) {
          event = wrap(event);
          if (noCaptureScheme && event && globalHandlers[eventType]) {
            if (typeof event.returnValue == "undefined") {
              observeGlobalEvents(event);
              if (event.cancelBubble === true) return;
              if (typeof event.returnValue == "undefined") event.returnValue = true;
            }
          }
          startFrame(event);
          for (var i = 0, wrappedEvent = new Event(event), item; item = eventTypeHandlers[i++]; ) item.handler.call(item.thisObject, wrappedEvent);
          finishFrame(event);
        };
        if (W3CSUPPORT) node.addEventListener(eventType, eventTypeHandlers.fireEvent, false); else node.attachEvent("on" + eventType, eventTypeHandlers.fireEvent);
      } else {
        for (var i = 0, item; item = eventTypeHandlers[i]; i++) if (item.handler === handler && item.thisObject === thisObject) return;
        eventTypeHandlers.push(handlerObject);
      }
    }
    function addHandlers(node, handlers, thisObject) {
      node = getNode(node);
      for (var eventType in handlers) addHandler(node, eventType, handlers[eventType], thisObject);
    }
    function removeHandler(node, eventType, handler, thisObject) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers) {
        var eventTypeHandlers = handlers[eventType];
        if (eventTypeHandlers) {
          for (var i = 0, item; item = eventTypeHandlers[i]; i++) {
            if (item.handler === handler && item.thisObject === thisObject) {
              eventTypeHandlers.splice(i, 1);
              if (!eventTypeHandlers.length) clearHandlers(node, eventType);
              return;
            }
          }
        }
      }
    }
    function clearHandlers(node, eventType) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers) {
        if (typeof eventType != "string") {
          for (eventType in handlers) clearHandlers(node, eventType);
        } else {
          var eventTypeHandlers = handlers[eventType];
          if (eventTypeHandlers) {
            if (node.removeEventListener) node.removeEventListener(eventType, eventTypeHandlers.fireEvent, false); else node.detachEvent("on" + eventType, eventTypeHandlers.fireEvent);
            delete handlers[eventType];
          }
        }
      }
    }
    function fireEvent(node, eventType, event) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers && handlers[eventType]) {
        try {
          flushAsap = false;
          handlers[eventType].fireEvent(event);
        } finally {
          flushAsap = true;
        }
      }
    }
    function onUnload(handler, thisObject) {
      basis.dev.warn("basis.dom.event.onUnload() is deprecated, use basis.teardown() instead");
      basis.teardown(handler, thisObject);
    }
    var tagNameEventMap = {};
    function getEventInfo(eventName, tagName) {
      if (!tagName) tagName = "div";
      var id = tagName + "-" + eventName;
      if (tagNameEventMap[id]) return tagNameEventMap[id]; else {
        var supported = false;
        var bubble = false;
        if (!W3CSUPPORT) {
          var onevent = "on" + eventName;
          var host = document.createElement("div");
          var target = host.appendChild(document.createElement(tagName));
          host[onevent] = function() {
            bubble = true;
          };
          try {
            target.fireEvent(onevent);
            supported = true;
          } catch (e) {}
        }
        return tagNameEventMap[id] = {
          supported: supported,
          bubble: bubble
        };
      }
    }
    function wrapEventFunction(fn) {
      return function(event, arg) {
        return fn(wrap(event), arg);
      };
    }
    module.exports = {
      W3CSUPPORT: W3CSUPPORT,
      browserEvents: browserEvents,
      getEventInfo: getEventInfo,
      KEY: KEY,
      MOUSE_LEFT: MOUSE_LEFT,
      MOUSE_RIGHT: MOUSE_RIGHT,
      MOUSE_MIDDLE: MOUSE_MIDDLE,
      Event: Event,
      sender: wrapEventFunction(sender),
      cancelBubble: wrapEventFunction(cancelBubble),
      cancelDefault: wrapEventFunction(cancelDefault),
      kill: wrapEventFunction(kill),
      key: wrapEventFunction(key),
      charCode: wrapEventFunction(charCode),
      mouseButton: wrapEventFunction(mouseButton),
      mouseX: wrapEventFunction(mouseX),
      mouseY: wrapEventFunction(mouseY),
      wheelDelta: wrapEventFunction(wheelDelta),
      addGlobalHandler: addGlobalHandler,
      removeGlobalHandler: removeGlobalHandler,
      captureEvent: captureEvent,
      releaseEvent: releaseEvent,
      addHandler: addHandler,
      addHandlers: addHandlers,
      removeHandler: removeHandler,
      clearHandlers: clearHandlers,
      fireEvent: fireEvent,
      onUnload: onUnload,
      wrap: wrap
    };
  },
  "u.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var inspectBasis = basis;
    var inspectBasisDomEvent = basis.require("./2.js");
    var Value = basis.require("./3.js").Value;
    var Node = basis.require("./8.js").Node;
    var MoveableElement = basis.require("./j.js").MoveableElement;
    var templateInspector = basis.resource("./y.js");
    var currentInspector = new Value({
      handler: {
        change: function(sender, oldValue) {
          if (oldValue) oldValue.stopInspect();
          if (this.value) this.value.startInspect();
        }
      }
    });
    var inspectMode = currentInspector.as(Boolean);
    var currentInspectorName = currentInspector.as(function(inspector) {
      return inspector ? inspector.name : "";
    });
    templateInspector.ready(function(inspector) {
      inspector.inspectMode.link(null, function(value) {
        if (value) currentInspector.set(inspector); else if (currentInspector.value === inspector) currentInspector.set();
      });
    });
    var isOnline;
    if (typeof basisjsToolsFileSync != "undefined") {
      isOnline = new basis.Token(basisjsToolsFileSync.isOnline.value);
      basisjsToolsFileSync.isOnline.attach(isOnline.set, isOnline);
    } else {
      isOnline = inspectBasis.devtools && Value.from(inspectBasis.devtools.serverState, "update", "data.isOnline");
    }
    var panel = new Node({
      container: document.body,
      activated: false,
      template: basis.template.get("#0"),
      binding: {
        activated: "activated",
        isOnline: isOnline,
        inspectMode: inspectMode,
        inspector: currentInspectorName,
        inspectorId: currentInspectorName.as(function(inspectorName) {
          return inspectorName ? inspectorName.replace(/\s/g, "").toLowerCase() : "";
        })
      },
      action: {
        inspectTemplate: function(e) {
          e.die();
          currentInspector.set(templateInspector());
        },
        storePosition: function() {
          if (localStorage) localStorage["basis-devpanel"] = parseInt(this.element.style.left) + ";" + parseInt(this.element.style.top);
        },
        cancelInspect: function() {
          currentInspector.set();
        },
        reload: function() {
          global.location.reload();
        }
      },
      init: function() {
        Node.prototype.init.call(this);
        this.dde = new MoveableElement;
      },
      templateSync: function() {
        Node.prototype.templateSync.call(this);
        this.dde.setElement(this.element, this.tmpl.dragElement);
      },
      destroy: function() {
        this.dde.destroy();
        this.dde = null;
        Node.prototype.destroy.call(this);
      }
    });
    if (typeof localStorage != "undefined") {
      var position = (localStorage["basis-devpanel"] || "10;10").split(";");
      panel.element.style.left = position[0] + "px";
      panel.element.style.top = position[1] + "px";
    }
    module.exports = panel;
  },
  "t.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    function init() {
      basis.require("./u.js");
      basis.dev.log("component-inspector inited");
    }
    basis.ready(function() {
      if (!basis.devtools) setTimeout(init, 500); else init();
    });
  },
  "c.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var MARKER = "basisTemplateId_" + basis.genUID();
    var TYPE_ELEMENT = 1;
    var TYPE_ATTRIBUTE = 2;
    var TYPE_ATTRIBUTE_CLASS = 4;
    var TYPE_ATTRIBUTE_STYLE = 5;
    var TYPE_ATTRIBUTE_EVENT = 6;
    var TYPE_TEXT = 3;
    var TYPE_COMMENT = 8;
    var TOKEN_TYPE = 0;
    var TOKEN_BINDINGS = 1;
    var TOKEN_REFS = 2;
    var ATTR_NAME = 3;
    var ATTR_VALUE = 4;
    var ATTR_NAME_BY_TYPE = {
      4: "class",
      5: "style"
    };
    var ATTR_TYPE_BY_NAME = {
      "class": TYPE_ATTRIBUTE_CLASS,
      style: TYPE_ATTRIBUTE_STYLE
    };
    var ATTR_VALUE_INDEX = {
      2: ATTR_VALUE,
      4: ATTR_VALUE - 1,
      5: ATTR_VALUE - 1,
      6: 2
    };
    var ELEMENT_NAME = 3;
    var ELEMENT_ATTRIBUTES_AND_CHILDREN = 4;
    var TEXT_VALUE = 3;
    var COMMENT_VALUE = 3;
    var CLASS_BINDING_ENUM = 1;
    var CLASS_BINDING_BOOL = 2;
    var CLASS_BINDING_INVERT = 3;
    var CLASS_BINDING_EQUAL = 4;
    var CLASS_BINDING_NOTEQUAL = 5;
    var document = global.document;
    var CLONE_NORMALIZATION_TEXT_BUG = !document ? true : function() {
      var element = document.createElement("div");
      element.appendChild(document.createTextNode("a"));
      element.appendChild(document.createTextNode("a"));
      return element.cloneNode(true).childNodes.length == 1;
    }();
    module.exports = {
      MARKER: MARKER,
      TYPE_ELEMENT: TYPE_ELEMENT,
      TYPE_ATTRIBUTE: TYPE_ATTRIBUTE,
      TYPE_ATTRIBUTE_CLASS: TYPE_ATTRIBUTE_CLASS,
      TYPE_ATTRIBUTE_STYLE: TYPE_ATTRIBUTE_STYLE,
      TYPE_ATTRIBUTE_EVENT: TYPE_ATTRIBUTE_EVENT,
      TYPE_TEXT: TYPE_TEXT,
      TYPE_COMMENT: TYPE_COMMENT,
      TOKEN_TYPE: TOKEN_TYPE,
      TOKEN_BINDINGS: TOKEN_BINDINGS,
      TOKEN_REFS: TOKEN_REFS,
      ATTR_NAME: ATTR_NAME,
      ATTR_VALUE: ATTR_VALUE,
      ATTR_NAME_BY_TYPE: ATTR_NAME_BY_TYPE,
      ATTR_TYPE_BY_NAME: ATTR_TYPE_BY_NAME,
      ATTR_VALUE_INDEX: ATTR_VALUE_INDEX,
      ELEMENT_NAME: ELEMENT_NAME,
      ELEMENT_ATTRIBUTES_AND_CHILDREN: ELEMENT_ATTRIBUTES_AND_CHILDREN,
      TEXT_VALUE: TEXT_VALUE,
      COMMENT_VALUE: COMMENT_VALUE,
      CLASS_BINDING_ENUM: CLASS_BINDING_ENUM,
      CLASS_BINDING_BOOL: CLASS_BINDING_BOOL,
      CLASS_BINDING_INVERT: CLASS_BINDING_INVERT,
      CLASS_BINDING_EQUAL: CLASS_BINDING_EQUAL,
      CLASS_BINDING_NOTEQUAL: CLASS_BINDING_NOTEQUAL,
      CLONE_NORMALIZATION_TEXT_BUG: CLONE_NORMALIZATION_TEXT_BUG
    };
  },
  "0.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    if (basis.filename_) {
      basis.createSandbox({
        inspect: basis,
        devInfoResolver: basis.config.devInfoResolver,
        modules: {
          devpanel: {
            autoload: true,
            path: basis.path.dirname(basis.filename_) + "/devpanel/",
            filename: "index.js"
          }
        }
      });
    }
  }
};

(function createBasisInstance(context, __basisFilename, __config) {
  "use strict";
  var VERSION = "1.5.0-dev";
  var global = Function("return this")();
  var process = global.process;
  var document = global.document;
  var location = global.location;
  var NODE_ENV = global !== context && process && process.argv ? global : false;
  var toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var FACTORY = {};
  var PROXY = {};
  FACTORY = new (devVerboseName("basis.FACTORY", {}, function() {}));
  PROXY = new (devVerboseName("basis.PROXY", {}, function() {}));
  function genUID(len) {
    function base36(val) {
      return Math.round(val).toString(36);
    }
    var result = base36(10 + 25 * Math.random());
    if (!len) len = 16;
    while (result.length < len) result += base36(new Date * Math.random());
    return result.substr(0, len);
  }
  var warnPropertyAccess = function() {
    try {
      if (Object.defineProperty) {
        var obj = {};
        Object.defineProperty(obj, "foo", {
          get: function() {
            return true;
          }
        });
        if (obj.foo === true) {
          return function(object, name, value, warning) {
            Object.defineProperty(object, name, {
              get: function() {
                consoleMethods.warn(warning);
                return value;
              },
              set: function(newValue) {
                value = newValue;
              }
            });
          };
        }
      }
    } catch (e) {}
    return function() {};
  }();
  function extend(dest, source) {
    for (var key in source) dest[key] = source[key];
    return dest;
  }
  function complete(dest, source) {
    for (var key in source) if (key in dest == false) dest[key] = source[key];
    return dest;
  }
  function keys(object) {
    var result = [];
    for (var key in object) result.push(key);
    return result;
  }
  function values(object) {
    var result = [];
    for (var key in object) result.push(object[key]);
    return result;
  }
  function slice(source, keys) {
    var result = {};
    if (!keys) return extend(result, source);
    for (var i = 0, key; key = keys[i++]; ) if (key in source) result[key] = source[key];
    return result;
  }
  function splice(source, keys) {
    var result = {};
    if (!keys) return extend(result, source);
    for (var i = 0, key; key = keys[i++]; ) if (key in source) {
      result[key] = source[key];
      delete source[key];
    }
    return result;
  }
  function merge() {
    var result = {};
    for (var i = 0; i < arguments.length; i++) extend(result, arguments[i]);
    return result;
  }
  function iterate(object, callback, thisObject) {
    var result = [];
    for (var key in object) result.push(callback.call(thisObject, key, object[key]));
    return result;
  }
  function $undefined(value) {
    return value == undefined;
  }
  function $defined(value) {
    return value != undefined;
  }
  function $isNull(value) {
    return value == null || value == undefined;
  }
  function $isNotNull(value) {
    return value != null && value != undefined;
  }
  function $isSame(value) {
    return value === this;
  }
  function $isNotSame(value) {
    return value !== this;
  }
  function $self(value) {
    return value;
  }
  function $const(value) {
    return function() {
      return value;
    };
  }
  function $false() {
    return false;
  }
  function $true() {
    return true;
  }
  function $null() {
    return null;
  }
  function $undef() {}
  var getter = function() {
    var GETTER_ID_PREFIX = "basisGetterId" + genUID() + "_";
    var GETTER_ID = GETTER_ID_PREFIX + "root";
    var ID = GETTER_ID_PREFIX;
    var SOURCE = GETTER_ID_PREFIX + "base";
    var PARENT = GETTER_ID_PREFIX + "parent";
    var getterSeed = 1;
    var pathCache = {};
    function as(path) {
      var self = this;
      var wrapper;
      var result;
      var id;
      if (typeof path == "function" || typeof path == "string") {
        wrapper = resolveFunction(path, self[ID]);
        id = GETTER_ID_PREFIX + wrapper[ID];
        if (hasOwnProperty.call(self, id)) return self[id];
        if (typeof wrapper[SOURCE] == "function") wrapper = wrapper[SOURCE];
        result = function(value) {
          return wrapper(self(value));
        };
      } else {
        var map = path;
        if (!map) return nullGetter;
        result = function(value) {
          return map[self(value)];
        };
      }
      result[PARENT] = self;
      result[ID] = getterSeed++;
      result[SOURCE] = path;
      result.__extend__ = getter;
      result.as = as;
      if (id) self[id] = result;
      return result;
    }
    function buildFunction(path) {
      return new Function("object", "return object != null ? object." + path + " : object");
    }
    function resolveFunction(value, id) {
      var fn = value;
      var result;
      if (value && typeof value == "string") {
        if (hasOwnProperty.call(pathCache, value)) return pathCache[value];
        fn = pathCache[value] = buildFunction(value);
      }
      if (typeof fn != "function") {
        basis.dev.warn("path for root getter should be function or non-empty string");
        return nullGetter;
      }
      if (fn.__extend__ === getter) return fn;
      if (hasOwnProperty.call(fn, id)) return fn[id];
      result = fn[id] = fn !== value ? fn : function(value) {
        return fn(value);
      };
      result[ID] = getterSeed++;
      result[SOURCE] = value;
      result.__extend__ = getter;
      result.as = as;
      return result;
    }
    function getter(path, value) {
      var result = path && path !== nullGetter ? resolveFunction(path, GETTER_ID) : nullGetter;
      if (value || value === "") {
        basis.dev.warn("second argument for getter is deprecated, use `as` method of getter instead");
        if (typeof value == "string") value = stringFunctions.formatter(value);
        return result.as(value);
      }
      return result;
    }
    getter.ID = ID;
    getter.SOURCE = SOURCE;
    getter.PARENT = PARENT;
    return getter;
  }();
  var nullGetter = function() {
    var nullGetter = function() {};
    nullGetter[getter.ID] = getter.ID + "nullGetter";
    nullGetter.__extend__ = getter, nullGetter.as = function() {
      return nullGetter;
    };
    return nullGetter;
  }();
  function wrapper(key) {
    return function(value) {
      var result = {};
      result[key] = value;
      return result;
    };
  }
  function lazyInit(init, thisObject) {
    var inited = 0;
    var self;
    var data;
    return self = function() {
      if (!(inited++)) {
        self.inited = true;
        self.data = data = init.apply(thisObject || this, arguments);
        if (typeof data == "undefined") consoleMethods.warn("lazyInit function returns nothing:\n" + init);
      }
      return data;
    };
  }
  function lazyInitAndRun(init, run, thisObject) {
    var inited = 0;
    var self;
    var data;
    return self = function() {
      if (!(inited++)) {
        self.inited = true;
        self.data = data = init.call(thisObject || this);
        if (typeof data == "undefined") consoleMethods.warn("lazyInitAndRun function returns nothing:\n" + init);
      }
      run.apply(data, arguments);
      return data;
    };
  }
  function runOnce(run, thisObject) {
    var fired = 0;
    return function() {
      if (!(fired++)) return run.apply(thisObject || this, arguments);
    };
  }
  function factory(fn) {
    if (typeof fn != "function") fn = getter(fn);
    var result = function(value) {
      return fn(value);
    };
    result.factory = FACTORY;
    return result;
  }
  function isFactory(value) {
    return typeof value === "function" && value.factory === FACTORY;
  }
  function publicCallback(fn, permanent) {
    var name = "basisjsCallback" + genUID();
    global[name] = permanent ? fn : function() {
      try {
        delete global[name];
      } catch (e) {
        global[name] = undefined;
      }
      fn.apply(this, arguments);
    };
    return name;
  }
  function devVerboseName(name, args, fn) {
    return (new Function(keys(args), 'return {"' + name + '": ' + fn + '\n}["' + name + '"]')).apply(null, values(args));
  }
  var consoleMethods = function() {
    var console = global.console;
    var methods = {
      log: $undef,
      info: $undef,
      warn: $undef,
      error: $undef
    };
    if (console) iterate(methods, function(methodName) {
      methods[methodName] = "bind" in Function.prototype && typeof console[methodName] == "function" ? Function.prototype.bind.call(console[methodName], console) : function() {
        Function.prototype.apply.call(console[methodName], console, arguments);
      };
    });
    return methods;
  }();
  var setImmediate = global.setImmediate || global.msSetImmediate;
  var clearImmediate = global.clearImmediate || global.msSetImmediate;
  if (setImmediate) setImmediate = setImmediate.bind(global);
  if (clearImmediate) clearImmediate = clearImmediate.bind(global);
  if (!setImmediate) {
    (function() {
      var runTask = function() {
        var taskById = {};
        var taskId = 0;
        setImmediate = function(fn) {
          if (typeof fn != "function") {
            consoleMethods.warn("basis.setImmediate() and basis.nextTick() accept functions only (call ignored)");
            return;
          }
          taskById[++taskId] = {
            fn: fn,
            args: arrayFrom(arguments, 1)
          };
          addToQueue(taskId);
          return taskId;
        };
        clearImmediate = function(taskId) {
          delete taskById[taskId];
        };
        return function(taskId) {
          var task = taskById[taskId];
          if (task) {
            delete taskById[taskId];
            task.fn.apply(undefined, task.args);
          }
          asap.process();
        };
      }();
      var addToQueue = function(taskId) {
        setTimeout(function() {
          runTask(taskId);
        }, 0);
      };
      if (NODE_ENV && NODE_ENV.process && typeof process.nextTick == "function") {
        addToQueue = function(taskId) {
          process.nextTick(function() {
            runTask(taskId);
          });
        };
      } else {
        var postMessageSupported = global.postMessage && !global.importScripts;
        if (postMessageSupported) {
          var oldOnMessage = global.onmessage;
          global.onmessage = function() {
            postMessageSupported = false;
          };
          global.postMessage("", "*");
          global.onmessage = oldOnMessage;
        }
        if (postMessageSupported) {
          var taskIdByMessage = {};
          var setImmediateHandler = function(event) {
            if (event && event.source == global) {
              var data = event.data;
              if (hasOwnProperty.call(taskIdByMessage, data)) {
                var taskId = taskIdByMessage[data];
                delete taskIdByMessage[data];
                runTask(taskId);
              }
            }
          };
          if (global.addEventListener) global.addEventListener("message", setImmediateHandler, true); else global.attachEvent("onmessage", setImmediateHandler);
          addToQueue = function(taskId) {
            var message = genUID(32);
            taskIdByMessage[message] = taskId;
            global.postMessage(message, "*");
          };
        } else {
          if (global.MessageChannel) {
            var channel = new global.MessageChannel;
            channel.port1.onmessage = function(event) {
              runTask(event.data);
            };
            addToQueue = function(taskId) {
              channel.port2.postMessage(taskId);
            };
          } else {
            var createScript = function() {
              return document.createElement("script");
            };
            if (document && "onreadystatechange" in createScript()) {
              var defaultAddToQueue = addToQueue;
              addToQueue = function beforeHeadReady(taskId) {
                if (typeof documentInterface != "undefined") {
                  addToQueue = defaultAddToQueue;
                  documentInterface.head.ready(function() {
                    addToQueue = function(taskId) {
                      var scriptEl = createScript();
                      scriptEl.onreadystatechange = function() {
                        scriptEl.onreadystatechange = null;
                        documentInterface.remove(scriptEl);
                        scriptEl = null;
                        runTask(taskId);
                      };
                      documentInterface.head.add(scriptEl);
                    };
                  });
                }
                if (addToQueue === beforeHeadReady) defaultAddToQueue(taskId); else addToQueue(taskId);
              };
            }
          }
        }
      }
    })();
  }
  var asap = function() {
    var queue = [];
    var processing = false;
    var timer;
    function processQueue() {
      try {
        processing = true;
        var item;
        while (item = queue.shift()) item.fn.call(item.context);
      } finally {
        processing = false;
        if (queue.length) timer = setImmediate(process);
      }
    }
    function process() {
      if (timer) timer = clearImmediate(timer);
      if (queue.length) processQueue();
    }
    var asap = function(fn, context) {
      queue.push({
        fn: fn,
        context: context
      });
      if (!timer) timer = setImmediate(process);
      return true;
    };
    asap.process = function() {
      if (!processing) process();
    };
    asap.schedule = function(scheduleFn) {
      var queue = {};
      var scheduled = false;
      function process() {
        var etimer = setImmediate(process);
        scheduled = false;
        for (var id in queue) {
          var object = queue[id];
          delete queue[id];
          scheduleFn(object);
        }
        clearImmediate(etimer);
        if (!scheduled) queue = {};
      }
      return {
        add: function(object) {
          queue[object.basisObjectId] = object;
          if (!scheduled) scheduled = asap(process);
        },
        remove: function(object) {
          delete queue[object.basisObjectId];
        }
      };
    };
    return asap;
  }();
  var codeFrame = function() {
    var count = 0;
    var info = {
      id: count,
      start: function() {
        info.id = count++;
      },
      finish: function() {
        asap.process();
        info.id = "unknown";
      }
    };
    return info;
  }();
  var pathUtils = function() {
    var ABSOLUTE_RX = /^([^\/]+:|\/)/;
    var PROTOCOL_RX = /^[a-zA-Z0-9\-]+:\/?/;
    var ORIGIN_RX = /^(?:[a-zA-Z0-9\-]+:)?\/\/[^\/]+\/?/;
    var SEARCH_HASH_RX = /[\?#].*$/;
    var baseURI;
    var origin;
    var utils;
    if (NODE_ENV) {
      var path = (process.basisjsBaseURI || "/").replace(/\\/g, "/");
      baseURI = path.replace(/^[^\/]*/, "");
      origin = path.replace(/\/.*/, "");
    } else {
      baseURI = location.pathname.replace(/[^\/]+$/, "");
      origin = location.protocol + "//" + location.host;
    }
    utils = {
      baseURI: baseURI,
      origin: origin,
      normalize: function(path) {
        path = (path || "").replace(PROTOCOL_RX, "/").replace(ORIGIN_RX, "/").replace(SEARCH_HASH_RX, "");
        var result = [];
        var parts = path.split("/");
        for (var i = 0; i < parts.length; i++) {
          if (parts[i] == "..") {
            if (result.length > 1 || result[0]) result.pop();
          } else {
            if ((parts[i] || !i) && parts[i] != ".") result.push(parts[i]);
          }
        }
        return result.join("/") || (path[0] === "/" ? "/" : "");
      },
      dirname: function(path) {
        var result = utils.normalize(path);
        return result.replace(/\/([^\/]*)$|^[^\/]+$/, "") || (result[0] == "/" ? "/" : ".");
      },
      extname: function(path) {
        var ext = utils.normalize(path).match(/[^\/](\.[^\/\.]*)$/);
        return ext ? ext[1] : "";
      },
      basename: function(path, ext) {
        var filename = utils.normalize(path).match(/[^\\\/]*$/);
        filename = filename ? filename[0] : "";
        if (ext == utils.extname(filename)) filename = filename.substring(0, filename.length - ext.length);
        return filename;
      },
      resolve: function() {
        var args = arrayFrom(arguments).reverse();
        var path = [];
        var absoluteFound = false;
        for (var i = 0; !absoluteFound && i < args.length; i++) if (typeof args[i] == "string") {
          path.unshift(args[i]);
          absoluteFound = ABSOLUTE_RX.test(args[i]);
        }
        if (!absoluteFound) path.unshift(baseURI == "/" ? "" : baseURI);
        return utils.normalize(path.join("/"));
      },
      relative: function(from, to) {
        if (typeof to != "string") {
          to = from;
          from = baseURI;
        }
        from = utils.normalize(from);
        to = utils.normalize(to);
        if (from[0] == "/" && to[0] != "/") return from;
        if (to[0] == "/" && from[0] != "/") return to;
        var base = from.replace(/^\/$/, "").split(/\//);
        var path = to.replace(/^\/$/, "").split(/\//);
        var result = [];
        var i = 0;
        while (path[i] == base[i] && typeof base[i] == "string") i++;
        for (var j = base.length - i; j > 0; j--) result.push("..");
        return result.concat(path.slice(i).filter(Boolean)).join("/");
      }
    };
    return utils;
  }();
  var basisFilename = __basisFilename || "";
  var config = __config || {
    modules: {},
    implicitExt: true,
    autoload: [ "./1.js" ]
  };
  function fetchConfig() {
    var config = __config;
    if (!config) {
      if (NODE_ENV) {
        basisFilename = process.basisjsFilename;
        if (process.basisjsConfig) {
          config = process.basisjsConfig;
          if (typeof config == "string") {
            try {
              config = Function("return{" + config + "}")();
            } catch (e) {
              consoleMethods.error("basis-config: basis.js config parse fault: " + e);
            }
          }
        }
      } else {
        var scripts = document.scripts;
        for (var i = 0, scriptEl; scriptEl = scripts[i]; i++) {
          var configAttrValue = scriptEl.hasAttribute("basis-config") ? scriptEl.getAttribute("basis-config") : scriptEl.getAttribute("data-basis-config");
          scriptEl.removeAttribute("basis-config");
          scriptEl.removeAttribute("data-basis-config");
          if (configAttrValue !== null) {
            basisFilename = pathUtils.normalize(scriptEl.src);
            try {
              config = Function("return{" + configAttrValue + "}")();
            } catch (e) {
              consoleMethods.error("basis-config: basis.js config parse fault: " + e);
            }
            break;
          }
        }
      }
    }
    return processConfig(config);
  }
  function processConfig(config) {
    config = slice(config);
    complete(config, {
      implicitExt: NODE_ENV ? true : "warn"
    });
    if ("extProto" in config) consoleMethods.warn("basis-config: `extProto` option in basis-config is not support anymore");
    if ("path" in config) consoleMethods.warn("basis-config: `path` option in basis-config is deprecated, use `modules` instead");
    var autoload = [];
    var modules = merge(config.path, config.modules, {
      basis: basisFilename
    });
    config.modules = {};
    if (config.autoload) {
      var m = String(config.autoload).match(/^((?:[^\/]*\/)*)([a-z$_][a-z0-9$_]*)((?:\.[a-z$_][a-z0-9$_]*)*)$/i);
      if (m) {
        modules[m[2]] = {
          autoload: true,
          filename: m[1] + m[2] + (m[3] || ".js")
        };
      } else {
        consoleMethods.warn("basis-config: wrong `autoload` value (setting ignored): " + config.autoload);
      }
      delete config.autoload;
    }
    for (var name in modules) {
      var module = modules[name];
      if (typeof module == "string") module = {
        filename: module.replace(/\/$/, "/" + name + ".js")
      };
      var filename = module.filename;
      var path = module.path;
      if (filename && !path) {
        filename = pathUtils.resolve(filename);
        path = filename.substr(0, filename.length - pathUtils.extname(filename).length);
        filename = "../" + pathUtils.basename(filename);
      }
      path = pathUtils.resolve(path);
      if (!filename && path) {
        filename = pathUtils.basename(path);
        path = pathUtils.dirname(path);
      }
      if (!pathUtils.extname(filename)) filename += ".js";
      filename = pathUtils.resolve(path, filename);
      config.modules[name] = {
        path: path,
        filename: filename
      };
      if (module.autoload) {
        config.autoload = autoload;
        autoload.push(name);
      }
    }
    return config;
  }
  var Class = function() {
    var instanceSeed = {
      id: 1
    };
    var classSeed = 1;
    var classes = [];
    var SELF = {};
    function isClass(object) {
      return typeof object == "function" && !!object.basisClassId_;
    }
    function isSubclassOf(superClass) {
      var cursor = this;
      while (cursor && cursor !== superClass) cursor = cursor.superClass_;
      return cursor === superClass;
    }
    var TOSTRING_BUG = function() {
      for (var key in {
        toString: 1
      }) return false;
      return true;
    }();
    function createClass(SuperClass) {
      var classId = classSeed++;
      if (typeof SuperClass != "function") SuperClass = BaseClass;
      var className = "";
      for (var i = 1, extension; extension = arguments[i]; i++) if (typeof extension != "function" && extension.className) className = extension.className;
      if (!className) className = SuperClass.className + "._Class" + classId;
      var NewClassProto = function() {};
      NewClassProto = devVerboseName(className, {}, NewClassProto);
      NewClassProto.prototype = SuperClass.prototype;
      var newProto = new NewClassProto;
      var newClassProps = {
        className: className,
        basisClassId_: classId,
        superClass_: SuperClass,
        extendConstructor_: !!SuperClass.extendConstructor_,
        isSubclassOf: isSubclassOf,
        subclass: function() {
          return createClass.apply(null, [ newClass ].concat(arrayFrom(arguments)));
        },
        extend: extendClass,
        __extend__: function(value) {
          if (value && value !== SELF && (typeof value == "object" || typeof value == "function" && !isClass(value))) return BaseClass.create.call(null, newClass, value); else return value;
        },
        prototype: newProto
      };
      for (var i = 1, extension; extension = arguments[i]; i++) newClassProps.extend(extension);
      if (newProto.init !== BaseClass.prototype.init && !/^function[^(]*\(\)/.test(newProto.init) && newClassProps.extendConstructor_) consoleMethods.warn("probably wrong extendConstructor_ value for " + newClassProps.className);
      var newClass = newClassProps.extendConstructor_ ? function(extend) {
        this.basisObjectId = instanceSeed.id++;
        var prop;
        for (var key in extend) {
          prop = this[key];
          this[key] = prop && prop.__extend__ ? prop.__extend__(extend[key]) : extend[key];
        }
        this.init();
        this.postInit();
      } : function() {
        this.basisObjectId = instanceSeed.id++;
        this.init.apply(this, arguments);
        this.postInit();
      };
      newClass = devVerboseName(className, {
        instanceSeed: instanceSeed
      }, newClass);
      newProto.constructor = newClass;
      for (var key in newProto) if (newProto[key] === SELF) newProto[key] = newClass;
      extend(newClass, newClassProps);
      classes.push(newClass);
      return newClass;
    }
    function extendClass(source) {
      var proto = this.prototype;
      if (typeof source == "function" && !isClass(source)) source = source(this.superClass_.prototype, slice(proto));
      if (source.prototype) source = source.prototype;
      for (var key in source) {
        var value = source[key];
        var protoValue = proto[key];
        if (key == "className" || key == "extendConstructor_") this[key] = value; else {
          if (protoValue && protoValue.__extend__) proto[key] = protoValue.__extend__(value); else {
            proto[key] = value;
          }
        }
      }
      if (TOSTRING_BUG && source[key = "toString"] !== toString) proto[key] = source[key];
      return this;
    }
    var BaseClass = extend(createClass, {
      className: "basis.Class",
      extendConstructor_: false,
      prototype: {
        basisObjectId: 0,
        constructor: null,
        init: function() {},
        postInit: function() {},
        toString: function() {
          return "[object " + (this.constructor || this).className + "]";
        },
        destroy: function() {
          for (var prop in this) if (hasOwnProperty.call(this, prop)) this[prop] = null;
          this.destroy = $undef;
        }
      }
    });
    var customExtendProperty = function(extension, fn) {
      return {
        __extend__: function(extension) {
          if (!extension) return extension;
          if (extension && extension.__extend__) return extension;
          var Base = function() {};
          Base = devVerboseName(arguments[2] || "customExtendProperty", {}, Base);
          Base.prototype = this;
          var result = new Base;
          fn(result, extension);
          return result;
        }
      }.__extend__(extension || {});
    };
    var extensibleProperty = function(extension) {
      return customExtendProperty(extension, extend, "extensibleProperty");
    };
    var nestedExtendProperty = function(extension) {
      return customExtendProperty(extension, function(result, extension) {
        for (var key in extension) if (hasOwnProperty.call(extension, key)) {
          var value = result[key];
          var newValue = extension[key];
          if (newValue) result[key] = value && value.__extend__ ? value.__extend__(newValue) : extensibleProperty(newValue); else result[key] = null;
        }
      }, "nestedExtendProperty");
    };
    var oneFunctionProperty = function(fn, keys) {
      var create = function(keys) {
        var result = {
          __extend__: create
        };
        if (keys) {
          if (keys.__extend__) return keys;
          var Cls = devVerboseName("oneFunctionProperty", {}, function() {});
          result = new Cls;
          result.__extend__ = create;
          for (var key in keys) if (hasOwnProperty.call(keys, key) && keys[key]) result[key] = fn;
        }
        return result;
      };
      return create(keys || {});
    };
    return extend(BaseClass, {
      all_: classes,
      SELF: SELF,
      create: createClass,
      isClass: isClass,
      customExtendProperty: customExtendProperty,
      extensibleProperty: extensibleProperty,
      nestedExtendProperty: nestedExtendProperty,
      oneFunctionProperty: oneFunctionProperty
    });
  }();
  var Token = Class(null, {
    className: "basis.Token",
    value: null,
    handler: null,
    deferredToken: null,
    bindingBridge: {
      attach: function(host, fn, context, onDestroy) {
        host.attach(fn, context, onDestroy);
      },
      detach: function(host, fn, context) {
        host.detach(fn, context);
      },
      get: function(host) {
        return host.get();
      }
    },
    init: function(value) {
      this.value = value;
    },
    get: function() {
      return this.value;
    },
    set: function(value) {
      if (this.value !== value) {
        this.value = value;
        this.apply();
      }
    },
    attach: function(fn, context, onDestroy) {
      var cursor = this;
      while (cursor = cursor.handler) if (cursor.fn === fn && cursor.context === context) consoleMethods.warn("basis.Token#attach: duplicate fn & context pair");
      this.handler = {
        fn: fn,
        context: context,
        destroy: onDestroy || null,
        handler: this.handler
      };
    },
    detach: function(fn, context) {
      var cursor = this;
      var prev;
      while (prev = cursor, cursor = cursor.handler) if (cursor.fn === fn && cursor.context === context) {
        cursor.fn = $undef;
        cursor.destroy = cursor.destroy && $undef;
        prev.handler = cursor.handler;
        return;
      }
      consoleMethods.warn("basis.Token#detach: fn & context pair not found, nothing was removed");
    },
    apply: function() {
      var value = this.get();
      var cursor = this;
      while (cursor = cursor.handler) cursor.fn.call(cursor.context, value);
    },
    deferred: function() {
      var token = this.deferredToken;
      if (!token) {
        token = this.deferredToken = new DeferredToken(this.get());
        this.attach(token.set, token);
      }
      return token;
    },
    as: function(fn) {
      var token = new Token;
      var setter = function(value) {
        this.set(fn.call(this, value));
      };
      if (typeof fn != "function") fn = getter(fn);
      setter.call(token, this.get());
      this.attach(setter, token, token.destroy);
      token.attach($undef, this, function() {
        this.detach(setter, token);
      });
      return token;
    },
    destroy: function() {
      if (this.deferredToken) {
        this.deferredToken.destroy();
        this.deferredToken = null;
      }
      this.attach = $undef;
      this.detach = $undef;
      var cursor = this;
      while (cursor = cursor.handler) if (cursor.destroy) cursor.destroy.call(cursor.context);
      this.handler = null;
      this.value = null;
    }
  });
  var deferredTokenApplyQueue = asap.schedule(function(token) {
    token.apply();
  });
  var DeferredToken = Token.subclass({
    className: "basis.DeferredToken",
    set: function(value) {
      if (this.value !== value) {
        this.value = value;
        deferredTokenApplyQueue.add(this);
      }
    },
    deferred: function() {
      return this;
    }
  });
  var resources = {};
  var resourceRequestCache = {};
  var resourceContentCache = {};
  var resourcePatch = {};
  var virtualResourceSeed = 1;
  var resourceResolvingStack = [];
  var requires;
  (function() {
    var map = typeof __resources__ != "undefined" ? __resources__ : null;
    if (map) {
      for (var key in map) resourceContentCache[pathUtils.resolve(key)] = map[key];
    }
  })();
  function applyResourcePatches(resource) {
    var patches = resourcePatch[resource.url];
    if (patches) for (var i = 0; i < patches.length; i++) {
      consoleMethods.info("Apply patch for " + resource.url);
      patches[i](resource.get(), resource.url);
    }
  }
  var resolveResourceFilename = function(url, baseURI) {
    var rootNS = url.match(/^([a-zA-Z0-9\_\-]+):/);
    if (rootNS) {
      var namespaceRoot = rootNS[1];
      if (namespaceRoot in nsRootPath == false) nsRootPath[namespaceRoot] = pathUtils.baseURI + namespaceRoot + "/";
      url = nsRootPath[namespaceRoot] + pathUtils.normalize("./" + url.substr(rootNS[0].length));
    } else {
      if (!/^(\.\/|\.\.|\/)/.test(url)) {
        var clr = arguments[2];
        consoleMethods.warn("Bad usage: " + (clr ? clr.replace("{url}", url) : url) + ".\nFilenames should starts with `./`, `..` or `/`. Otherwise it may treats as special reference in next releases.");
      }
      url = pathUtils.resolve(baseURI, url);
    }
    return url;
  };
  var getResourceContent = function(url, ignoreCache) {
    if (ignoreCache || !hasOwnProperty.call(resourceContentCache, url)) {
      var resourceContent = "";
      if (!NODE_ENV) {
        var req = new global.XMLHttpRequest;
        req.open("GET", url, false);
        req.setRequestHeader("If-Modified-Since", (new Date(0)).toGMTString());
        req.setRequestHeader("X-Basis-Resource", 1);
        req.send("");
        if (req.status >= 200 && req.status < 400) resourceContent = req.responseText; else {
          consoleMethods.error("basis.resource: Unable to load " + url + " (status code " + req.status + ")");
        }
      } else {
        try {
          if (!process.basisjsReadFile) consoleMethods.warn("basis.resource: basisjsReadFile not found, file content couldn't to be read");
          resourceContent = process.basisjsReadFile ? process.basisjsReadFile(url) : "";
        } catch (e) {
          consoleMethods.error("basis.resource: Unable to load " + url, e);
        }
      }
      resourceContentCache[url] = resourceContent;
    }
    return resourceContentCache[url];
  };
  var createResource = function(resourceUrl, content) {
    var contentType = pathUtils.extname(resourceUrl);
    var contentWrapper = getResource.extensions[contentType];
    var isVirtual = arguments.length > 1;
    var resolved = false;
    var wrapped = false;
    var wrappedContent;
    if (isVirtual) resourceUrl += "#virtual";
    var resource = function() {
      if (resolved) return content;
      var urlContent = isVirtual ? content : getResourceContent(resourceUrl);
      var idx = resourceResolvingStack.indexOf(resourceUrl);
      if (idx != -1) consoleMethods.warn("basis.resource recursion: " + resourceResolvingStack.slice(idx).concat(resourceUrl).map(pathUtils.relative, pathUtils).join(" -> "));
      resourceResolvingStack.push(resourceUrl);
      if (contentWrapper) {
        if (!wrapped) {
          wrapped = true;
          content = contentWrapper(urlContent, resourceUrl);
          wrappedContent = urlContent;
        }
      } else {
        content = urlContent;
      }
      resolved = true;
      applyResourcePatches(resource);
      resource.apply();
      resourceResolvingStack.pop();
      return content;
    };
    extend(resource, extend(new Token, {
      url: resourceUrl,
      type: contentType,
      virtual: isVirtual,
      fetch: function() {
        return resource();
      },
      toString: function() {
        return "[basis.resource " + resourceUrl + "]";
      },
      isResolved: function() {
        return resolved;
      },
      hasChanges: function() {
        return contentWrapper ? resourceContentCache[resourceUrl] !== wrappedContent : false;
      },
      update: function(newContent) {
        if (!resolved || isVirtual || newContent != resourceContentCache[resourceUrl]) {
          if (!isVirtual) resourceContentCache[resourceUrl] = newContent;
          if (contentWrapper) {
            if (!wrapped && isVirtual) content = newContent;
            if (wrapped && !contentWrapper.permanent) {
              content = contentWrapper(newContent, resourceUrl, content);
              applyResourcePatches(resource);
              resource.apply();
            }
          } else {
            content = newContent;
            resolved = true;
            applyResourcePatches(resource);
            resource.apply();
          }
        }
      },
      reload: function() {
        if (isVirtual) return;
        var oldContent = resourceContentCache[resourceUrl];
        var newContent = getResourceContent(resourceUrl, true);
        if (newContent != oldContent) {
          resolved = false;
          resource.update(newContent);
        }
      },
      get: function(source) {
        if (isVirtual) if (source) return contentWrapper ? wrappedContent : content;
        return source ? getResourceContent(resourceUrl) : resource();
      },
      ready: function(fn, context) {
        if (resolved) {
          fn.call(context, resource());
          if (contentWrapper && contentWrapper.permanent) return;
        }
        resource.attach(fn, context);
        return resource;
      }
    }));
    resources[resourceUrl] = resource;
    resourceRequestCache[resourceUrl] = resource;
    return resource;
  };
  var getResource = function(url, baseURI) {
    var reference = baseURI ? baseURI + "\0" + url : url;
    var resource = resourceRequestCache[reference];
    if (!resource) {
      var resolvedUrl = resolveResourceFilename(url, baseURI, "basis.resource('{url}')");
      resource = resources[resolvedUrl] || createResource(resolvedUrl);
      resourceRequestCache[reference] = resource;
    }
    return resource;
  };
  extend(getResource, {
    resolveURI: resolveResourceFilename,
    isResource: function(value) {
      return value ? resources[value.url] === value : false;
    },
    isResolved: function(resourceUrl) {
      var resource = getResource.get(resourceUrl);
      return resource ? resource.isResolved() : false;
    },
    exists: function(resourceUrl) {
      return hasOwnProperty.call(resources, resolveResourceFilename(resourceUrl, null, "basis.resource.exists('{url}')"));
    },
    get: function(resourceUrl) {
      resourceUrl = resolveResourceFilename(resourceUrl, null, "basis.resource.get('{url}')");
      if (!getResource.exists(resourceUrl)) return null;
      return getResource(resourceUrl);
    },
    getFiles: function(cache) {
      return cache ? keys(resourceContentCache) : keys(resources).filter(function(filename) {
        return !resources[filename].virtual;
      });
    },
    virtual: function(type, content, ownerUrl) {
      return createResource((ownerUrl ? ownerUrl + ":" : pathUtils.normalize(pathUtils.baseURI == "/" ? "" : pathUtils.baseURI) + "/") + "virtual-resource" + virtualResourceSeed++ + "." + type, content);
    },
    extensions: {
      ".js": extend(function processJsResourceContent(content, filename) {
        var namespace = filename2namespace[filename];
        if (!namespace) {
          var implicitNamespace = true;
          var resolvedFilename = (pathUtils.dirname(filename) + "/" + pathUtils.basename(filename, pathUtils.extname(filename))).replace(/^\/\//, "/");
          for (var ns in nsRootPath) {
            var path = nsRootPath[ns] + ns + "/";
            if (resolvedFilename.substr(0, path.length) == path) {
              implicitNamespace = false;
              resolvedFilename = resolvedFilename.substr(nsRootPath[ns].length);
              break;
            }
          }
          namespace = resolvedFilename.replace(/\./g, "_").replace(/^\//g, "").replace(/\//g, ".");
          if (implicitNamespace) namespace = "implicit." + namespace;
        }
        if (requires) arrayFunctions.add(requires, namespace);
        var ns = getNamespace(namespace);
        if (!ns.inited) {
          var savedRequires = requires;
          requires = [];
          ns.inited = true;
          ns.exports = runScriptInContext({
            path: ns.path,
            exports: ns.exports
          }, filename, content).exports;
          if (ns.exports && ns.exports.constructor === Object) {
            if (config.implicitExt) {
              if (config.implicitExt == "warn") {
                for (var key in ns.exports) if (key in ns == false && key != "path") {
                  ns[key] = ns.exports[key];
                  warnPropertyAccess(ns, key, ns.exports[key], "basis.js: Access to implicit namespace property `" + namespace + "." + key + "`");
                }
              } else complete(ns, ns.exports);
            }
          }
          ns.filename_ = filename;
          ns.source_ = content;
          ns.requires_ = requires;
          requires = savedRequires;
        }
        return ns.exports;
      }, {
        permanent: true
      }),
      ".css": function processCssResourceContent(content, url, cssResource) {
        if (!cssResource) cssResource = new CssResource(url);
        cssResource.updateCssText(content);
        return cssResource;
      },
      ".json": function processJsonResourceContent(content) {
        if (typeof content == "object") return content;
        var result;
        try {
          content = String(content);
          result = basis.json.parse(content);
        } catch (e) {
          var url = arguments[1];
          consoleMethods.warn("basis.resource: Can't parse JSON from " + url, {
            url: url,
            content: content
          });
        }
        return result || null;
      }
    }
  });
  var SOURCE_OFFSET;
  function compileFunction(sourceURL, args, body) {
    if (isNaN(SOURCE_OFFSET)) {
      var marker = basis.genUID();
      SOURCE_OFFSET = (new Function(args, marker)).toString().split(marker)[0].split(/\n/).length - 1;
    }
    body = devInfoResolver.fixSourceOffset(body, SOURCE_OFFSET + 1);
    if (!/\/\/# sourceMappingURL=[^\r\n]+[\s]*$/.test(body)) body += "\n\n//# sourceURL=" + pathUtils.origin + sourceURL;
    try {
      return new Function(args, '"use strict";\n' + (NODE_ENV ? "var __nodejsRequire = require;\n" : "") + body);
    } catch (e) {
      if (document && "line" in e == false && "addEventListener" in global) {
        global.addEventListener("error", function onerror(event) {
          if (event.filename == pathUtils.origin + sourceURL) {
            global.removeEventListener("error", onerror);
            consoleMethods.error("Compilation error at " + event.filename + ":" + event.lineno + ": " + e);
            event.preventDefault();
          }
        });
        var script = document.createElement("script");
        script.src = sourceURL;
        script.async = false;
        document.head.appendChild(script);
        document.head.removeChild(script);
      }
      consoleMethods.error("Compilation error at " + sourceURL + ("line" in e ? ":" + (e.line - 1) : "") + ": " + e);
    }
  }
  var runScriptInContext = function(context, sourceURL, sourceCode) {
    var baseURL = pathUtils.dirname(sourceURL);
    var compiledSourceCode = sourceCode;
    if (!context.exports) context.exports = {};
    if (typeof compiledSourceCode != "function") compiledSourceCode = compileFunction(sourceURL, [ "exports", "module", "basis", "global", "__filename", "__dirname", "resource", "require", "asset" ], sourceCode);
    if (typeof compiledSourceCode == "function") {
      compiledSourceCode.displayName = "[module] " + (filename2namespace[sourceURL] || sourceURL);
      compiledSourceCode.call(context.exports, context.exports, context, basis, global, sourceURL, baseURL, function(path) {
        return getResource(path, baseURL);
      }, function(path) {
        return requireNamespace(path, baseURL);
      }, function(path) {
        return resolveResourceFilename(path, baseURL, "asset('{url}')");
      });
    }
    return context;
  };
  var namespaces = {};
  var namespace2filename = {};
  var filename2namespace = {};
  var nsRootPath = {};
  iterate(config.modules, function(name, module) {
    nsRootPath[name] = module.path + "/";
    namespace2filename[name] = module.filename;
    filename2namespace[module.filename] = name;
  });
  (function(map) {
    var map = typeof __namespace_map__ != "undefined" ? __namespace_map__ : null;
    if (map) {
      for (var key in map) {
        var filename = pathUtils.resolve(key);
        var namespace = map[key];
        filename2namespace[filename] = namespace;
        namespace2filename[namespace] = filename;
      }
    }
  })();
  var Namespace = Class(null, {
    className: "basis.Namespace",
    init: function(name) {
      this.name = name;
      this.exports = {
        path: this.name
      };
    },
    toString: function() {
      return "[basis.namespace " + this.path + "]";
    },
    extend: function(names) {
      extend(this.exports, names);
      return complete(this, names);
    }
  });
  function resolveNSFilename(namespace) {
    if (namespace in namespace2filename == false) {
      var parts = namespace.split(".");
      var namespaceRoot = parts.shift();
      var filename = resolveResourceFilename(namespaceRoot + ":" + parts.join("/") + ".js").replace(/\/\.js$/, ".js");
      namespace2filename[namespace] = filename;
      filename2namespace[filename] = namespace;
    }
    return namespace2filename[namespace];
  }
  function getRootNamespace(name) {
    var namespace = namespaces[name];
    if (!namespace) {
      namespace = namespaces[name] = new Namespace(name);
      namespace.namespaces_ = {};
      namespace.namespaces_[name] = namespace;
      if (!config.noConflict) global[name] = namespace;
    }
    return namespace;
  }
  function getNamespace(path) {
    if (hasOwnProperty.call(namespaces, path)) return namespaces[path];
    path = path.split(".");
    var rootNs = getRootNamespace(path[0]);
    var cursor = rootNs;
    for (var i = 1; i < path.length; i++) {
      var name = path[i];
      var nspath = path.slice(0, i + 1).join(".");
      if (!hasOwnProperty.call(rootNs.namespaces_, nspath)) {
        var namespace = new Namespace(nspath);
        if (config.implicitExt) {
          cursor[name] = namespace;
          if (config.implicitExt == "warn") {
            cursor[name] = namespace;
            warnPropertyAccess(cursor, name, namespace, "basis.js: Access to implicit namespace `" + nspath + "`");
          }
        }
        rootNs.namespaces_[nspath] = namespace;
      }
      cursor = rootNs.namespaces_[nspath];
    }
    namespaces[path.join(".")] = cursor;
    return cursor;
  }
  var requireNamespace = function(path, baseURI) {
    if (!/[^a-z0-9_\.]/i.test(path) && pathUtils.extname(path) != ".js") {
      path = resolveNSFilename(path);
    } else {
      if (!/[\?#]/.test(path)) path = resolveResourceFilename(path, baseURI, "basis.require('{url}')");
    }
    return getResource(path).fetch();
  };
  requireNamespace.displayName = "basis.require";
  function patch(filename, patchFn) {
    if (!/[^a-z0-9_\.]/i.test(filename) && pathUtils.extname(filename) != ".js") {
      filename = resolveNSFilename(filename);
    } else {
      filename = resolveResourceFilename(filename, null, "basis.patch('{url}')");
    }
    if (!resourcePatch[filename]) resourcePatch[filename] = [ patchFn ]; else resourcePatch[filename].push(patchFn);
    var resource = getResource.get(filename);
    if (resource && resource.isResolved()) {
      consoleMethods.info("Apply patch for " + resource.url);
      patchFn(resource.get(), resource.url);
    }
  }
  complete(Function.prototype, {
    bind: function(thisObject) {
      var fn = this;
      var params = arrayFrom(arguments, 1);
      return params.length ? function() {
        return fn.apply(thisObject, params.concat.apply(params, arguments));
      } : function() {
        return fn.apply(thisObject, arguments);
      };
    }
  });
  complete(Array, {
    isArray: function(value) {
      return toString.call(value) === "[object Array]";
    }
  });
  function arrayFrom(object, offset) {
    if (object != null) {
      var len = object.length;
      if (typeof len == "undefined" || toString.call(object) == "[object Function]") return [ object ];
      if (!offset) offset = 0;
      if (len - offset > 0) {
        for (var result = [], k = 0, i = offset; i < len; ) result[k++] = object[i++];
        return result;
      }
    }
    return [];
  }
  function createArray(length, fillValue, thisObject) {
    var result = [];
    var isFunc = typeof fillValue == "function";
    for (var i = 0; i < length; i++) result[i] = isFunc ? fillValue.call(thisObject, i, result) : fillValue;
    return result;
  }
  complete(Array.prototype, {
    indexOf: function(searchElement, offset) {
      offset = parseInt(offset, 10) || 0;
      if (offset < 0) return -1;
      for (; offset < this.length; offset++) if (this[offset] === searchElement) return offset;
      return -1;
    },
    lastIndexOf: function(searchElement, offset) {
      var len = this.length;
      offset = parseInt(offset, 10);
      if (isNaN(offset) || offset >= len) offset = len - 1; else offset = (offset + len) % len;
      for (; offset >= 0; offset--) if (this[offset] === searchElement) return offset;
      return -1;
    },
    forEach: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this) callback.call(thisObject, this[i], i, this);
    },
    every: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this && !callback.call(thisObject, this[i], i, this)) return false;
      return true;
    },
    some: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this && callback.call(thisObject, this[i], i, this)) return true;
      return false;
    },
    filter: function(callback, thisObject) {
      var result = [];
      for (var i = 0, len = this.length; i < len; i++) if (i in this && callback.call(thisObject, this[i], i, this)) result.push(this[i]);
      return result;
    },
    map: function(callback, thisObject) {
      var result = [];
      for (var i = 0, len = this.length; i < len; i++) if (i in this) result[i] = callback.call(thisObject, this[i], i, this);
      return result;
    },
    reduce: function(callback, initialValue) {
      var len = this.length;
      var argsLen = arguments.length;
      if (len == 0 && argsLen == 1) throw new TypeError;
      var result;
      var inited = 0;
      if (argsLen > 1) {
        result = initialValue;
        inited = 1;
      }
      for (var i = 0; i < len; i++) if (i in this) if (inited++) result = callback.call(null, result, this[i], i, this); else result = this[i];
      return result;
    }
  });
  var arrayFunctions = {
    from: arrayFrom,
    create: createArray,
    flatten: function(this_) {
      return this_.concat.apply([], this_);
    },
    repeat: function(this_, count) {
      return arrayFunctions.flatten(createArray(parseInt(count, 10) || 0, this_));
    },
    search: function(this_, value, getter_, offset) {
      this_.lastSearchIndex = -1;
      getter_ = getter(getter_ || $self);
      for (var index = parseInt(offset, 10) || 0, len = this_.length; index < len; index++) if (getter_(this_[index]) === value) return this_[this_.lastSearchIndex = index];
    },
    lastSearch: function(this_, value, getter_, offset) {
      this_.lastSearchIndex = -1;
      getter_ = getter(getter_ || $self);
      var len = this_.length;
      var index = isNaN(offset) || offset == null ? len : parseInt(offset, 10);
      for (var i = index > len ? len : index; i-- > 0; ) if (getter_(this_[i]) === value) return this_[this_.lastSearchIndex = i];
    },
    add: function(this_, value) {
      return this_.indexOf(value) == -1 && !!this_.push(value);
    },
    remove: function(this_, value) {
      var index = this_.indexOf(value);
      return index != -1 && !!this_.splice(index, 1);
    },
    has: function(this_, value) {
      return this_.indexOf(value) != -1;
    },
    sortAsObject: function() {
      consoleMethods.warn("basis.array.sortAsObject is deprecated, use basis.array.sort instead");
      return arrayFunctions.sort.apply(this, arguments);
    },
    sort: function(this_, getter_, comparator, desc) {
      getter_ = getter(getter_);
      desc = desc ? -1 : 1;
      return this_.map(function(item, index) {
        return {
          i: index,
          v: getter_(item)
        };
      }).sort(comparator || function(a, b) {
        return desc * (a.v > b.v || -(a.v < b.v) || (a.i > b.i ? 1 : -1));
      }).map(function(item) {
        return this[item.i];
      }, this_);
    }
  };
  if (![ 1, 2 ].splice(1).length) {
    var nativeArraySplice = Array.prototype.splice;
    Array.prototype.splice = function() {
      var params = arrayFrom(arguments);
      if (params.length < 2) params[1] = this.length;
      return nativeArraySplice.apply(this, params);
    };
  }
  var ESCAPE_FOR_REGEXP = /([\/\\\(\)\[\]\?\{\}\|\*\+\-\.\^\$])/g;
  var FORMAT_REGEXP = /\{([a-z\d_]+)(?::([\.0])(\d+)|:(\?))?\}/gi;
  var stringFormatCache = {};
  complete(String, {
    toLowerCase: function(value) {
      return String(value).toLowerCase();
    },
    toUpperCase: function(value) {
      return String(value).toUpperCase();
    },
    trim: function(value) {
      return String(value).trim();
    },
    trimLeft: function(value) {
      return String(value).trimLeft();
    },
    trimRight: function(value) {
      return String(value).trimRight();
    }
  });
  complete(String.prototype, {
    trimLeft: function() {
      return this.replace(/^\s+/, "");
    },
    trimRight: function() {
      return this.replace(/\s+$/, "");
    },
    trim: function() {
      return this.trimLeft().trimRight();
    }
  });
  var stringFunctions = {
    toObject: function(this_, rethrow) {
      try {
        return (new Function("return 0," + this_))();
      } catch (e) {
        if (rethrow) throw e;
      }
    },
    repeat: function(this_, count) {
      return (new Array(parseInt(count, 10) + 1 || 0)).join(this_);
    },
    qw: function(this_) {
      var trimmed = this_.trim();
      return trimmed ? trimmed.split(/\s+/) : [];
    },
    forRegExp: function(this_) {
      return this_.replace(ESCAPE_FOR_REGEXP, "\\$1");
    },
    format: function(this_, first) {
      var data = arrayFrom(arguments, 1);
      if (typeof first == "object") extend(data, first);
      return this_.replace(FORMAT_REGEXP, function(m, key, numFormat, num, noNull) {
        var value = key in data ? data[key] : noNull ? "" : m;
        if (numFormat && !isNaN(value)) {
          value = Number(value);
          return numFormat == "." ? value.toFixed(num) : numberFunctions.lead(value, num);
        }
        return value;
      });
    },
    formatter: function(formatString) {
      formatString = String(formatString);
      if (hasOwnProperty.call(stringFormatCache, formatString)) return stringFormatCache[formatString];
      var formatter = function(value) {
        return stringFunctions.format(formatString, value);
      };
      var escapsedFormatString = '"' + formatString.replace(/"/g, '\\"') + '"';
      formatter = (new Function("stringFunctions", "return " + formatter.toString().replace("formatString", escapsedFormatString)))(stringFunctions);
      formatter.toString = function() {
        return "basis.string.formatter(" + escapsedFormatString + ")";
      };
      stringFormatCache[formatString] = formatter;
      return formatter;
    },
    capitalize: function(this_) {
      return this_.charAt(0).toUpperCase() + this_.substr(1).toLowerCase();
    },
    camelize: function(this_) {
      return this_.replace(/-(.)/g, function(m, chr) {
        return chr.toUpperCase();
      });
    },
    dasherize: function(this_) {
      return this_.replace(/[A-Z]/g, function(m) {
        return "-" + m.toLowerCase();
      });
    },
    isEmpty: function(value) {
      return value == null || String(value) == "";
    },
    isNotEmpty: function(value) {
      return value != null && String(value) != "";
    }
  };
  if ("|||".split(/\|/).length + "|||".split(/(\|)/).length != 11) {
    var nativeStringSplit = String.prototype.split;
    String.prototype.split = function(pattern, count) {
      if (!pattern || pattern instanceof RegExp == false || pattern.source == "") return nativeStringSplit.call(this, pattern, count);
      var result = [];
      var pos = 0;
      var match;
      if (!pattern.global) pattern = new RegExp(pattern.source, /\/([mi]*)$/.exec(pattern)[1] + "g");
      while (match = pattern.exec(this)) {
        match[0] = this.substring(pos, match.index);
        result.push.apply(result, match);
        pos = pattern.lastIndex;
      }
      result.push(this.substr(pos));
      return result;
    };
  }
  if ("12".substr(-1) != "2") {
    var nativeStringSubstr = String.prototype.substr;
    String.prototype.substr = function(start, end) {
      return nativeStringSubstr.call(this, start < 0 ? Math.max(0, this.length + start) : start, end);
    };
  }
  var numberFunctions = {
    fit: function(this_, min, max) {
      if (!isNaN(min) && this_ < min) return Number(min);
      if (!isNaN(max) && this_ > max) return Number(max);
      return this_;
    },
    lead: function(this_, len, leadChar) {
      return String(this_).replace(/\d+/, function(number) {
        return (len -= number.length - 1) > 1 ? (new Array(len)).join(leadChar || 0) + number : number;
      });
    },
    group: function(this_, len, splitter) {
      return String(this_).replace(/\d+/, function(number) {
        return number.replace(/\d/g, function(m, pos) {
          return !pos + (number.length - pos) % (len || 3) ? m : (splitter || " ") + m;
        });
      });
    },
    format: function(this_, prec, gs, prefix, postfix, comma) {
      var res = this_.toFixed(prec);
      if (gs || comma) res = res.replace(/(\d+)(\.?)/, function(m, number, c) {
        return (gs ? basis.number.group(Number(number), 3, gs) : number) + (c ? comma || c : "");
      });
      if (prefix) res = res.replace(/^-?/, "$&" + (prefix || ""));
      return res + (postfix || "");
    }
  };
  complete(Date, {
    now: function() {
      return Number(new Date);
    }
  });
  var ready = function() {
    var eventFired = !document || document.readyState == "complete";
    var readyHandlers = [];
    var timer;
    function processReadyHandler() {
      var handler;
      if (timer) timer = clearImmediate(timer);
      if (readyHandlers.length > 1) timer = setImmediate(processReadyHandler);
      while (handler = readyHandlers.shift()) handler[0].call(handler[1]);
      timer = clearImmediate(timer);
      asap.process();
    }
    function fireHandlers() {
      if (!(eventFired++)) processReadyHandler();
    }
    function doScrollCheck() {
      try {
        document.documentElement.doScroll("left");
        fireHandlers();
      } catch (e) {
        setTimeout(doScrollCheck, 1);
      }
    }
    if (!eventFired) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fireHandlers, false);
        global.addEventListener("load", fireHandlers, false);
      } else {
        document.attachEvent("onreadystatechange", fireHandlers);
        global.attachEvent("onload", fireHandlers);
        try {
          if (!global.frameElement && document.documentElement.doScroll) doScrollCheck();
        } catch (e) {}
      }
    }
    return function(callback, context) {
      if (!readyHandlers.length && eventFired && !timer) timer = setImmediate(processReadyHandler);
      readyHandlers.push([ callback, context ]);
    };
  }();
  var teardown = function() {
    if ("addEventListener" in global) return function(callback, context) {
      global.addEventListener("unload", function(event) {
        callback.call(context || null, event || global.event);
      }, false);
    };
    if ("attachEvent" in global) return function(callback, context) {
      global.attachEvent("onunload", function(event) {
        callback.call(context || null, event || global.event);
      });
    };
    return $undef;
  }();
  var documentInterface = function() {
    var timer;
    var reference = {};
    var callbacks = {
      head: [],
      body: []
    };
    function getParent(name) {
      if (document && !reference[name]) {
        reference[name] = document[name] || document.getElementsByTagName(name)[0];
        if (reference[name]) {
          var items = callbacks[name];
          delete callbacks[name];
          for (var i = 0, cb; cb = items[i]; i++) cb[0].call(cb[1], reference[name]);
        }
      }
      return reference[name];
    }
    function add() {
      var name = this[0];
      var node = this[1];
      var ref = this[2];
      remove(node);
      var parent = getParent(name);
      if (parent) {
        if (ref === true) ref = parent.firstChild;
        if (!ref || ref.parentNode !== parent) ref = null;
        parent.insertBefore(node, ref);
      } else callbacks[name].push([ add, [ name, node, ref ] ]);
    }
    function docReady(name, fn, context) {
      if (callbacks[name]) callbacks[name].push([ fn, context ]); else fn.call(context, reference[name]);
    }
    function remove(node) {
      for (var key in callbacks) {
        var entry = arrayFunctions.search(callbacks[key], node, function(item) {
          return item[1] && item[1][1];
        });
        if (entry) arrayFunctions.remove(callbacks[key], entry);
      }
      if (node && node.parentNode && node.parentNode.nodeType == 1) node.parentNode.removeChild(node);
    }
    function checkParents() {
      if (timer && getParent("head") && getParent("body")) timer = clearInterval(timer);
    }
    if (document && (!getParent("head") || !getParent("body"))) {
      timer = setInterval(checkParents, 5);
      ready(checkParents);
    }
    return {
      head: {
        ready: function(fn, context) {
          docReady("head", fn, context);
        },
        add: function(node, ref) {
          add.call([ "head", node, ref ]);
        }
      },
      body: {
        ready: function(fn, context) {
          docReady("body", fn, context);
        },
        add: function(node, ref) {
          add.call([ "body", node, ref ]);
        }
      },
      remove: remove
    };
  }();
  var cleaner = function() {
    var objects = [];
    function destroy() {
      var logDestroy = arguments[0] === true;
      result.globalDestroy = true;
      result.add = $undef;
      result.remove = $undef;
      var object;
      while (object = objects.pop()) {
        if (typeof object.destroy == "function") {
          try {
            if (logDestroy) consoleMethods.log("destroy", "[" + String(object.className) + "]", object);
            object.destroy();
          } catch (e) {
            consoleMethods.warn(String(object), e);
          }
        } else {
          for (var prop in object) object[prop] = null;
        }
      }
      objects = [];
    }
    if (teardown === $undef) return {
      add: $undef,
      remove: $undef
    };
    teardown(destroy);
    var result = {
      add: function(object) {
        if (object != null) objects.push(object);
      },
      remove: function(object) {
        arrayFunctions.remove(objects, object);
      }
    };
    result.destroy_ = destroy;
    result.objects_ = objects;
    return result;
  }();
  var CssResource = function() {
    var STYLE_APPEND_BUGGY = function() {
      try {
        return !document.createElement("style").appendChild(document.createTextNode(""));
      } catch (e) {
        return true;
      }
    }();
    var baseEl = document && document.createElement("base");
    function setBase(baseURI) {
      baseEl.setAttribute("href", baseURI);
      documentInterface.head.add(baseEl, true);
    }
    function restoreBase() {
      baseEl.setAttribute("href", location.href);
      documentInterface.remove(baseEl);
    }
    function injectStyleToHead() {
      setBase(this.baseURI);
      if (!this.element) {
        this.element = document.createElement("style");
        if (!STYLE_APPEND_BUGGY) this.element.appendChild(document.createTextNode(""));
        this.element.setAttribute("src", this.url);
      }
      documentInterface.head.add(this.element);
      this.syncCssText();
      restoreBase();
    }
    return Class(null, {
      className: "basis.CssResource",
      inUse: 0,
      url: "",
      baseURI: "",
      cssText: undefined,
      element: null,
      init: function(url) {
        this.url = url;
        this.baseURI = pathUtils.dirname(url) + "/";
      },
      updateCssText: function(cssText) {
        if (this.cssText != cssText) {
          this.cssText = cssText;
          if (this.inUse && this.element) {
            setBase(this.baseURI);
            this.syncCssText();
            restoreBase();
          }
        }
      },
      syncCssText: STYLE_APPEND_BUGGY ? function() {
        this.element.styleSheet.cssText = this.cssText;
      } : function() {
        var cssText = this.cssText;
        cssText += "\n/*# sourceURL=" + pathUtils.origin + this.url + " */";
        this.element.firstChild.nodeValue = cssText;
      },
      startUse: function() {
        if (!this.inUse) documentInterface.head.ready(injectStyleToHead, this);
        this.inUse += 1;
      },
      stopUse: function() {
        if (this.inUse) {
          this.inUse -= 1;
          if (!this.inUse && this.element) documentInterface.remove(this.element);
        }
      },
      destroy: function() {
        if (this.element) documentInterface.remove(this.element);
        this.element = null;
        this.cssText = null;
      }
    });
  }();
  var devInfoResolver = function() {
    var getExternalInfo = $undef;
    var fixSourceOffset = $self;
    var set = function(target, key, info) {};
    var get = function(target, key) {
      var externalInfo = getExternalInfo(target);
      var ownInfo = map.get(target);
      if (externalInfo || ownInfo) {
        var info = merge(externalInfo, ownInfo);
        return key ? info[key] : info;
      }
    };
    try {
      (new WeakMap).get(1);
    } catch (e) {
      get = function() {};
    }
    var map = typeof WeakMap == "function" ? new WeakMap : false;
    if (map) set = function(target, key, value) {
      if (!target || typeof target != "object" && typeof target != "function") {
        consoleMethods.warn("Set dev info for non-object or non-function was ignored");
        return;
      }
      var info = map.get(target);
      if (!info) map.set(target, info = {});
      info[key] = value;
    };
    var resolver = config.devInfoResolver || global.$devinfo || {};
    var test = {};
    if (typeof resolver.fixSourceOffset == "function") fixSourceOffset = resolver.fixSourceOffset;
    if (typeof resolver.get == "function") getExternalInfo = resolver.get;
    return {
      fixSourceOffset: fixSourceOffset,
      setInfo: set,
      getInfo: get
    };
  }();
  var basis = getNamespace("basis").extend({
    filename_: basisFilename,
    processConfig: processConfig,
    version: VERSION,
    NODE_ENV: NODE_ENV,
    config: config,
    createSandbox: function(config) {
      return createBasisInstance(global, basisFilename, complete({
        noConflict: true,
        devpanel: false
      }, config));
    },
    dev: consoleMethods = (new Namespace("basis.dev")).extend(consoleMethods).extend(devInfoResolver).extend({
      warnPropertyAccess: warnPropertyAccess
    }),
    resolveNSFilename: resolveNSFilename,
    patch: patch,
    namespace: getNamespace,
    require: requireNamespace,
    resource: getResource,
    asset: function(path) {
      return resolveResourceFilename(path, null, "basis.asset('{url}')");
    },
    setImmediate: setImmediate,
    clearImmediate: clearImmediate,
    nextTick: function() {
      setImmediate.apply(null, arguments);
    },
    asap: asap,
    FACTORY: FACTORY,
    PROXY: PROXY,
    Class: Class,
    Token: Token,
    DeferredToken: DeferredToken,
    codeFrame: codeFrame,
    ready: ready,
    teardown: teardown,
    cleaner: cleaner,
    genUID: genUID,
    getter: getter,
    console: consoleMethods,
    path: pathUtils,
    doc: documentInterface,
    object: {
      extend: extend,
      complete: complete,
      keys: keys,
      values: values,
      slice: slice,
      splice: splice,
      merge: merge,
      iterate: iterate
    },
    fn: {
      $undefined: $undefined,
      $defined: $defined,
      $isNull: $isNull,
      $isNotNull: $isNotNull,
      $isSame: $isSame,
      $isNotSame: $isNotSame,
      $self: $self,
      $const: $const,
      $false: $false,
      $true: $true,
      $null: $null,
      $undef: $undef,
      getter: getter,
      nullGetter: nullGetter,
      wrapper: wrapper,
      factory: factory,
      isFactory: isFactory,
      lazyInit: lazyInit,
      lazyInitAndRun: lazyInitAndRun,
      runOnce: runOnce,
      publicCallback: publicCallback
    },
    array: extend(arrayFrom, arrayFunctions),
    string: stringFunctions,
    number: numberFunctions,
    bool: {
      invert: function(value) {
        return !value;
      }
    },
    json: {
      parse: typeof JSON != "undefined" ? JSON.parse : function(str) {
        return stringFunctions.toObject(str, true);
      }
    }
  });
  if (!NODE_ENV) {
    if (config.autoload) config.autoload.forEach(function(name) {
      requireNamespace(name);
    });
    if ("devpanel" in config == false || config.devpanel) basis.require("./0.js");
  }
  if (NODE_ENV && exports) exports.basis = basis;
  return basis;
})(this);

basis.require("./0.css").startUse();
}).call(this);
!function e(t,n,o){function r(u,c){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return r(n?n:e)},s,s.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=e("./src/CollapsiblePanel"),i=o(r);window.Basic=window.Basic||{},window.Basic.CollapsiblePanel=i.default},{"./src/CollapsiblePanel":2}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var u=r.get;if(void 0!==u)return u.call(o)},l=e("../../basic-element-base/src/ElementBase"),s=o(l),f=e("../../basic-component-mixins/src/OpenCloseMixin"),p=o(f),d=e("../../basic-component-mixins/src/symbols"),y=o(d),b=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.$.overflow.addEventListener("transitionend",function(){e.closed||(e.$.overflow.style.height=""),e.classList.remove("showTransition")}),e}return u(t,e),c(t,[{key:"render",value:function(e){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this,e);var n=this.$.container.getBoundingClientRect().height;if(0===n)return void(this.$.overflow.style.height=e?0:"");this.classList.remove("showTransition");var o=e?n:0;this.$.overflow.style.height=o+"px",this.$.overflow.offsetHeight,this.classList.add("showTransition");var r=e?0:n;this.$.overflow.style.height=r+"px"}},{key:y.default.template,get:function(){return'\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      :host(.showTransition) #overflow {\n        transition: height 0.2s;\n      }\n      </style>\n\n      <div id="overflow" role="none">\n        <div id="container" role="none">\n          <slot></slot>\n        </div>\n      </div>\n    '}}]),t}((0,p.default)(s.default));customElements.define("basic-collapsible-panel",b),n.default=b},{"../../basic-component-mixins/src/OpenCloseMixin":6,"../../basic-component-mixins/src/symbols":11,"../../basic-element-base/src/ElementBase":13}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=y[e];if(!t){var n=/-([a-z])/g;t=e.replace(n,function(e){return e[1].toUpperCase()}),y[e]=t}return t}function a(e){if(e===HTMLElement||e===Object)return[];var t=Object.getPrototypeOf(e.prototype).constructor,n=a(t),o=Object.getOwnPropertyNames(e.prototype),r=o.filter(function(t){return"function"==typeof Object.getOwnPropertyDescriptor(e.prototype,t).set}),i=r.map(function(e){return l(e)}),u=i.filter(function(e){return n.indexOf(e)<0});return n.concat(u)}function l(e){var t=b[e];if(!t){var n=/([A-Z])/g;t=e.replace(n,"-$1").toLowerCase()}return t}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var u=r.get;if(void 0!==u)return u.call(o)},p=e("./safeAttributes"),d=o(p),y={},b={};n.default=function(e){var t=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"attributeChangedCallback",value:function(e,n,o){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this)&&f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this);var r=c(e);r in this&&!(r in HTMLElement.prototype)&&(this[r]=o)}},{key:"connectedCallback",value:function(){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),d.default.connected(this)}},{key:"reflectAttribute",value:function(e,t){return d.default.setAttribute(this,e,t)}},{key:"reflectClass",value:function(e,t){return d.default.toggleClass(this,e,t)}}],[{key:"observedAttributes",get:function(){return a(this)}}]),t}(e);return t}},{"./safeAttributes":10}],4:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if("function"==typeof t)return t(e);var n=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(e);return c(t,n.prototype,l),n}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object.getOwnPropertyNames(e).forEach(function(o){if(n.indexOf(o)<0){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r)}}),t}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n.default=function(e){var t=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,null,[{key:"compose",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(u,this)}}]),t}(e);return t};var l=["constructor"]},{}],5:[function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n,r=Array.prototype.map.call(e,function(e){var n="undefined"!=typeof HTMLSlotElement?e instanceof HTMLSlotElement:"slot"===e.localName;if(n){var o=e.assignedNodes({flatten:!0});return o?c(o,t):[]}return e instanceof HTMLElement?[e]:e instanceof Text&&t?[e]:[]}),i=(n=[]).concat.apply(n,o(r));return i}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n.default=function(e){var t=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"distributedChildren",get:function(){return c(this.children,!1)}},{key:"distributedChildNodes",get:function(){return c(this.childNodes,!0)}},{key:"distributedTextContent",get:function(){var e=this.distributedChildNodes.map(function(e){return e.textContent});return e.join("")}}]),t}(e);return t}},{}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var u=r.get;if(void 0!==u)return u.call(o)},l=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var u=Object.getPrototypeOf(t);null!==u&&e(u,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var c=i.set;void 0!==c&&c.call(r,o)}return o},s=e("./createSymbol"),f=o(s),p=e("./safeAttributes"),d=o(p),y=e("./symbols"),b=o(y),h=(0,f.default)("closed");n.default=function(e){var t=function(t){function n(){r(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return"undefined"==typeof e.closed&&(e.closed=e[b.default.defaults].closed),e}return u(n,t),c(n,[{key:"close",value:function(){this.closed=!0}},{key:"connectedCallback",value:function(){a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),d.default.connected(this),this.render(this.closed)}},{key:"open",value:function(){this.closed=!1}},{key:"render",value:function(e){a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this)&&a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this),d.default.toggleClass(this,"basic-closed",e),d.default.toggleClass(this,"basic-opened",!e),d.default.setAttribute(this,"aria-expanded",!e)}},{key:"toggle",value:function(){this.closed=!this.closed}},{key:"closed",get:function(){return this[h]},set:function(t){var o=this[h];if(this[h]=t,"closed"in e.prototype&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"closed",t,this),t!==o){this.render(t);var r=new CustomEvent("closed-changed");this.dispatchEvent(r)}}},{key:b.default.defaults,get:function(){var e=a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),b.default.defaults,this)||{};return e.closed=!1,e}}]),n}(e);return t}},{"./createSymbol":9,"./safeAttributes":10,"./symbols":11}],7:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(e.shadowRoot){e.$={};var n=e.shadowRoot.querySelectorAll("[id]");[].forEach.call(n,function(t){var n=t.getAttribute("id");e.$[n]=t})}return e}return i(t,e),t}(e);return t}},{}],8:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=document.createElement("template"),n=document.createElement("div");for(n.innerHTML=e;n.childNodes.length>0;)t.content.appendChild(n.childNodes[0]);return t}function a(e,t){window.WebComponents.ShadowCSS.shimStyling(e.content,t)}Object.defineProperty(n,"__esModule",{value:!0});var l=e("../src/symbols"),s=o(l);n.default=function(e){var t=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=e[s.default.template];if(n){"string"==typeof n&&(n=c(n)),window.ShadowDOMPolyfill&&a(n,e.localName);var o=e.attachShadow({mode:"open"}),u=document.importNode(n.content,!0);o.appendChild(u)}return e}return u(t,e),t}(e);return t}},{"../src/symbols":11}],9:[function(e,t,n){"use strict";function o(e){return"function"==typeof Symbol?Symbol(e):"_"+e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},{}],10:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){if(null===n||"undefined"==typeof n)e.removeAttribute(t);else{var o=String(n);e.getAttribute(t)!==o&&e.setAttribute(t,n)}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("./createSymbol"),u=o(i),c=e("./toggleClass"),a=o(c),l=(0,u.default)("safeToSetAttributes"),s=(0,u.default)("pendingAttributes"),f=(0,u.default)("pendingClasses");n.default={connected:function(e){if(e[l]=!0,e[s]){for(var t in e[s]){var n=e[s][t];r(e,t,n)}e[s]=null}if(e[f]){for(var o in e[f]){var i=e[f][o];(0,a.default)(e,o,i)}e[f]=null}},setAttribute:function(e,t,n){e[l]?r(e,t,n):(e[s]||(e[s]={}),e[s][t]=n)},toggleClass:function(e,t,n){e[l]?(0,a.default)(e,t,n):(e[f]||(e[f]={}),e[f][t]=n)}}},{"./createSymbol":9,"./toggleClass":12}],11:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=e("./createSymbol"),i=o(r),u={defaults:(0,i.default)("defaults"),dragging:(0,i.default)("dragging"),goDown:(0,i.default)("goDown"),goEnd:(0,i.default)("goEnd"),goLeft:(0,i.default)("goLeft"),goRight:(0,i.default)("goRight"),goStart:(0,i.default)("goStart"),goUp:(0,i.default)("goUp"),itemAdded:(0,i.default)("itemAdded"),itemsChanged:(0,i.default)("itemsChanged"),itemSelected:(0,i.default)("itemSelected"),keydown:(0,i.default)("keydown"),template:(0,i.default)("template")};n.default=u},{"./createSymbol":9}],12:[function(e,t,n){"use strict";function o(e,t,n){var o=e.classList,r="undefined"==typeof n?!o.contains(t):n;return r?o.add(t):o.remove(t),r}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o},{}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var c=e("../../basic-component-mixins/src/AttributeMarshallingMixin"),a=o(c),l=e("../../basic-component-mixins/src/ComposableMixin"),s=o(l),f=e("../../basic-component-mixins/src/DistributedChildrenMixin"),p=o(f),d=e("../../basic-component-mixins/src/ShadowElementReferencesMixin"),y=o(d),b=e("../../basic-component-mixins/src/ShadowTemplateMixin"),h=o(b),v=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}((0,s.default)(HTMLElement).compose(h.default,y.default,a.default,p.default));n.default=v},{"../../basic-component-mixins/src/AttributeMarshallingMixin":3,"../../basic-component-mixins/src/ComposableMixin":4,"../../basic-component-mixins/src/DistributedChildrenMixin":5,"../../basic-component-mixins/src/ShadowElementReferencesMixin":7,"../../basic-component-mixins/src/ShadowTemplateMixin":8}]},{},[1]);
//# sourceMappingURL=basic-collapsible-panel.js.map

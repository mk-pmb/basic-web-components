(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WrappedStandardElement = require('../../basic-wrapped-standard-element/src/WrappedStandardElement');

var _WrappedStandardElement2 = _interopRequireDefault(_WrappedStandardElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An anchor (link) that highlights itself when its destination matches the
 * current location.
 *
 * Such a link commonly appears in toolbars, side bars, and other navigation
 * elements. In these situations, you generally want the user to understand what
 * page or area the user is already on.
 *
 * Note: one limitation of this component is that, by default, the link does
 * *not* show the standard link color (usually blue). However, in navigation
 * elements like toolbars, you often will want to explicitly specific link
 * colors anyway, e.g., to reflect your application's visual style and brand.
 */

var ActivatingAnchor = function (_WrappedStandardEleme) {
  _inherits(ActivatingAnchor, _WrappedStandardEleme);

  function ActivatingAnchor() {
    _classCallCheck(this, ActivatingAnchor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActivatingAnchor).apply(this, arguments));
  }

  _createClass(ActivatingAnchor, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'attachedCallback', this).call(this);
      }
      refresh(this);
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      if (_get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'createdCallback', this)) {
        _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'createdCallback', this).call(this);
      }
      window.addEventListener('popstate', function (event) {
        refresh(_this2);
      });
      if (typeof this._areaLink === 'undefined') {
        this._areaLink = false;
      }
    }

    // Augment href implementation so that changing href checks the active status.

  }, {
    key: 'active',

    /**
     * True if the link's destination matches the current page location.
     *
     * If this is true, the element will have an `active` CSS class applied to it.
     *
     * @type {boolean}
     */
    get: function get() {
      return this.classList.contains('active');
    },
    set: function set(value) {
      // Would like to use classList.toggle() here, but IE 11 doesn't have it.
      if (value) {
        this.classList.add('active');
      } else {
        this.classList.remove('active');
      }
    }

    /**
     * True if the link points to an area within a site, not just a single page.
     *
     * If true, the matching rule to determine whether the link is active changes:
     * an area link is considered to be active if the link's destination forms a
     * prefix of the current location (instead of matching the complete URL).
     *
     * @type {boolean}
     */

  }, {
    key: 'areaLink',
    get: function get() {
      return this._areaLink;
    },
    set: function set(value) {
      // Cast boolean or string values to boolean.
      this._areaLink = String(value) === 'true';
      refresh(this);
    }
  }, {
    key: 'href',
    get: function get() {
      return _get(Object.getPrototypeOf(ActivatingAnchor.prototype), 'href', this);
    },
    set: function set(value) {
      _set(Object.getPrototypeOf(ActivatingAnchor.prototype), 'href', value, this);
      refresh(this);
    }
  }, {
    key: 'template',
    get: function get() {
      // Specify color:inherit so that color can be specified from the outside
      // without having to define a CSS variable.
      return '\n      <style>\n      #inner {\n        color: inherit;\n      }\n      </style>\n      <a id="inner"><slot></slot></a>';
    }
  }]);

  return ActivatingAnchor;
}(_WrappedStandardElement2.default.wrap('a'));

// Update the active status of the element based on the current location.

function refresh(element) {
  var current = window.location.href;
  element.active = element.areaLink ? current.substr(0, element.href.length) === element.href : // Match prefix
  current === element.href; // Match whole path
}

document.registerElement('basic-activating-anchor', ActivatingAnchor);

},{"../../basic-wrapped-standard-element/src/WrappedStandardElement":8}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with AttributeMarshalling. */

exports.default = function (base) {

  /**
   * Mixin which marshalls attributes to properties (and eventually vice versa).
   *
   * If your component exposes a setter for a property, it's generally a good
   * idea to let devs using your component be able to set that property in HTML
   * via an element attribute. You can code that yourself by writing an
   * `attributeChangedCallback`, or you can use this mixin to get a degree of
   * automatic support.
   *
   * This mixin implements an `attributeChangedCallback` that will attempt to
   * convert a change in an element attribute into a call to the corresponding
   * property setter. Attributes typically follow hyphenated names ("foo-bar"),
   * whereas properties typically use camelCase names ("fooBar"). This mixin
   * respects that convention, automatically mapping the hyphenated attribute
   * name to the corresponding camelCase property name.
   *
   * Example: You define a component using this mixin:
   *
   *     class MyElement extends AttributeMarshalling(HTMLElement) {
   *       get fooBar() { return this._fooBar; }
   *       set fooBar(value) { this._fooBar = value; }
   *     }
   *     document.registerElement('my-element', MyElement);
   *
   * If someone then instantiates your component in HTML:
   *
   *     <my-element foo-bar="Hello"></my-element>
   *
   * Then, after the element has been upgraded, the `fooBar` setter will
   * automatically be invoked with the initial value "Hello".
   *
   * For the time being, this mixin only supports string-valued properties.
   * If you'd like to convert string attributes to other types (numbers,
   * booleans), you need to implement `attributeChangedCallback` yourself.
   */

  var AttributeMarshalling = function (_base) {
    _inherits(AttributeMarshalling, _base);

    function AttributeMarshalling() {
      _classCallCheck(this, AttributeMarshalling);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AttributeMarshalling).apply(this, arguments));
    }

    _createClass(AttributeMarshalling, [{
      key: "attributeChangedCallback",

      /*
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "attributeChangedCallback", this).call(this);
        }
        // If the attribute name corresponds to a property name, then set that
        // property. Ignore changes in standard HTMLElement properties.
        var propertyName = attributeToPropertyName(name);
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
      }

      /*
       * Generate an initial call to attributeChangedCallback for each attribute
       * on the element.
       *
       * TODO: The plan for Custom Elements v1 is for the browser to handle this.
       * Once that's handled (including in polyfills), this call can go away.
       */

    }, {
      key: "createdCallback",
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(AttributeMarshalling.prototype), "createdCallback", this)) {
          _get(Object.getPrototypeOf(AttributeMarshalling.prototype), "createdCallback", this).call(this);
        }
        [].forEach.call(this.attributes, function (attribute) {
          _this2.attributeChangedCallback(attribute.name, undefined, attribute.value);
        });
      }
    }]);

    return AttributeMarshalling;
  }(base);

  return AttributeMarshalling;
};

// Convert camel case fooBar name to hyphenated foo-bar.

function attributeToPropertyName(attributeName) {
  var propertyName = attributeName.replace(/-([a-z])/g, function (m) {
    return m[1].toUpperCase();
  });
  return propertyName;
}

// Convert hyphenated foo-bar name to camel case fooBar.
// TODO: Use this when we support reflection of properties to attributes.
// function propertyToAttributeName(propertyName) {
//   let attributeName = propertyName.replace(/([a-z][A-Z])/g, g => g[0] + '-' + g[1].toLowerCase());
//   return attributeName;
// }

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with Composable. */

exports.default = function (base) {

  /**
   * Mixin to make a class more easily composable with other mixins.
   *
   * This mixin contributes a `compose` method that applies a set of mixin
   * functions and returns the resulting new class. This sugar can make the
   * application of many mixins at once easier to read.
   */

  var Composable = function (_base) {
    _inherits(Composable, _base);

    function Composable() {
      _classCallCheck(this, Composable);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Composable).apply(this, arguments));
    }

    _createClass(Composable, null, [{
      key: 'compose',

      /**
       * Apply a set of mixin functions or mixin objects to the present class and
       * return the new class.
       *
       * Instead of writing:
       *
       *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
       *
       * You can write:
       *
       *     let MyClass = Composable(BaseClass).compose(
       *       Mixin1,
       *       Mixin2,
       *       Mixin3,
       *       Mixin4,
       *       Mixin5
       *     );
       *
       * This function can also take mixin objects. A mixin object is just a
       * shorthand for a mixin function that creates a new subclass with the given
       * members. The mixin object's members are *not* copied directly onto the
       * prototype of the base class, as with traditional mixins.
       *
       * In addition to providing syntactic sugar, this mixin can be used to
       * define a class in ES5, which lacks ES6's `class` keyword.
       *
       * @param {...mixins} mixins - A set of mixin functions or objects to apply.
       */
      value: function compose() {
        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }

        // We create a new subclass for each mixin in turn. The result becomes
        // the base class extended by any subsequent mixins. It turns out that
        // we can use Array.reduce() to concisely express this, using the current
        // object as the seed for reduce().
        return mixins.reduce(composeClass, this);
      }
    }]);

    return Composable;
  }(base);

  return Composable;
};

// Properties defined by Object that we don't want to mixin.

var NON_MIXABLE_OBJECT_PROPERTIES = ['constructor'];

/*
 * Apply the mixin to the given base class to return a new class.
 * The mixin can either be a function that returns the modified class, or a
 * plain object whose members will be copied to the new class' prototype.
 */
function composeClass(base, mixin) {
  if (typeof mixin === 'function') {
    // Mixin function
    return mixin(base);
  } else {
    // Mixin object

    var Subclass = function (_base2) {
      _inherits(Subclass, _base2);

      function Subclass() {
        _classCallCheck(this, Subclass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Subclass).apply(this, arguments));
      }

      return Subclass;
    }(base);

    copyOwnProperties(mixin, Subclass.prototype, NON_MIXABLE_OBJECT_PROPERTIES);
    return Subclass;
  }
}

/*
 * Copy the given properties/methods to the target.
 * Return the updated target.
 */
function copyOwnProperties(source, target) {
  var ignorePropertyNames = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (ignorePropertyNames.indexOf(name) < 0) {
      var descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: Rationalize with new Custom Elements API.
// TODO: Consider renaming to match Custom Elements API.

/* Exported function extends a base class with DistributedChildren. */

exports.default = function (base) {

  /**
   * Mixin which defines helpers for accessing a component's distributed
   * children as a flattened array or string.
   *
   * The standard DOM API provides several ways of accessing child content:
   * `children`, `childNodes`, and `textContent`. None of these functions are
   * Shadow DOM aware. This mixin defines variations of those functions that
   * *are* Shadow DOM aware.
   *
   * Example: you create a component `<count-children>` that displays a number
   * equal to the number of children placed inside that component. If someone
   * instantiates your component like:
   *
   *     <count-children>
   *       <div></div>
   *       <div></div>
   *       <div></div>
   *     </count-children>
   *
   * Then the component should show "3", because there are three children. To
   * calculate the number of children, the component can just calculate
   * `this.children.length`. However, suppose someone instantiates your
   * component inside one of their own components, and puts a `<slot>` element
   * inside your component:
   *
   *     <count-children>
   *       <slot></slot>
   *     </count-children>
   *
   * If your component only looks at `this.children`, it will always see exactly
   * one child — the `<slot>` element. But the user looking at the page will
   * *see* any nodes distributed to that slot. To match what the user sees, your
   * component should expand any `<slot>` elements it contains.
   *
   * That is the problem this mixin solves. After applying this mixin, your
   * component code has access to `this.distributedChildren`, whose `length`
   * will return the total number of all children distributed to your component
   * in the composed tree.
   *
   * Note: The latest Custom Elements API design calls for a new function,
   * `getAssignedNodes` that takes an optional `deep` parameter, that will solve
   * this problem at the API level.
   */

  var DistributedChildren = function (_base) {
    _inherits(DistributedChildren, _base);

    function DistributedChildren() {
      _classCallCheck(this, DistributedChildren);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(DistributedChildren).apply(this, arguments));
    }

    _createClass(DistributedChildren, [{
      key: "distributedChildren",

      /**
       * An in-order collection of children, expanding any slot elements. Like the
       * standard children property, this skips text nodes.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /**
       * An in-order collection of child nodes, expanding any slot elements. Like
       * the standard childNodes property, this includes text nodes.
       *
       * @type {Node[]}
       */

    }, {
      key: "distributedChildNodes",
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /**
       * The concatenated text content of all child nodes, expanding any slot
       * elements.
       *
       * @type {string}
       */

    }, {
      key: "distributedTextContent",
      get: function get() {
        var strings = this.distributedChildNodes.map(function (child) {
          return child.textContent;
        });
        return strings.join('');
      }
    }]);

    return DistributedChildren;
  }(base);

  return DistributedChildren;
};

/*
 * Given a array of nodes, return a new array with any content elements expanded
 * to the nodes distributed to that content element. This rule is applied
 * recursively.
 *
 * If includeTextNodes is true, text nodes will be included, as in the
 * standard childNodes property; by default, this skips text nodes, like the
 * standard children property.
 */

function expandContentElements(nodes, includeTextNodes) {
  var _ref;

  var expanded = Array.prototype.map.call(nodes, function (node) {
    // We want to see if the node is an instanceof HTMLSlotELement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "slot" or "content".
    if (node.localName && (node.localName === "slot" || node.localName === "content")) {
      // content element; use its distributed nodes instead.
      var distributedNodes = node.getDistributedNodes();
      return distributedNodes ? expandContentElements(distributedNodes, includeTextNodes) : [];
    } else if (node instanceof HTMLElement) {
      // Plain element; use as is.
      return [node];
    } else if (node instanceof Text && includeTextNodes) {
      // Text node.
      return [node];
    } else {
      // Comment, processing instruction, etc.; skip.
      return [];
    }
  });
  var flattened = (_ref = []).concat.apply(_ref, _toConsumableArray(expanded));
  return flattened;
}

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ShadowElementReferences. */

exports.default = function (base) {

  /**
   * Mixin to create references to elements in a component's Shadow DOM subtree.
   *
   * This adds a member on the component called `this.$` that can be used to
   * reference shadow elements with IDs. E.g., if component's shadow contains an
   * element `<button id="foo">`, then this mixin will create a member
   * `this.$.foo` that points to that button.
   *
   * Such references simplify a component's access to its own elements. In
   * exchange, this mixin trades off a one-time cost of querying all elements in
   * the shadow tree instead of paying an ongoing cost to query for an element
   * each time the component wants to inspect or manipulate it.
   *
   * This mixin expects the component to define a Shadow DOM subtree. You can
   * create that tree yourself, or make use of the ShadowTemplate mixin.
   *
   * This mixin is inspired by Polymer's [automatic
   * node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
   * feature.
   */

  var ShadowElementReferences = function (_base) {
    _inherits(ShadowElementReferences, _base);

    function ShadowElementReferences() {
      _classCallCheck(this, ShadowElementReferences);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowElementReferences).apply(this, arguments));
    }

    _createClass(ShadowElementReferences, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ShadowElementReferences.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ShadowElementReferences.prototype), 'createdCallback', this).call(this);
        }
        if (this.shadowRoot) {
          // Look for elements in the shadow subtree that have id attributes.
          // An alternatively implementation of this mixin would be to just define
          // a this.$ getter that lazily does this search the first time someone
          // tries to access this.$. That might introduce some complexity – if the
          // the tree changed after it was first populated, the result of
          // searching for a node might be somewhat unpredictable.
          this.$ = {};
          var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
          [].forEach.call(nodesWithIds, function (node) {
            var id = node.getAttribute('id');
            _this2.$[id] = node;
          });
        }
      }
    }]);

    return ShadowElementReferences;
  }(base);

  return ShadowElementReferences;
};

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

/* Exported function extends a base class with ShadowTemplate. */

exports.default = function (base) {

  /**
   * Mixin for stamping a template into a Shadow DOM subtree upon component
   * instantiation.
   *
   * To use this mixin, define a `template` property as a string or HTML
   * `<template>` element:
   *
   *     class MyElement extends ShadowTemplate(HTMLElement) {
   *       get template() {
   *         return `Hello, <em>world</em>.`;
   *       }
   *     }
   *
   * When your component class is instantiated, a shadow root will be created on
   * the instance, and the contents of the template will be cloned into the
   * shadow root. If your component does not define a `template` property, this
   * mixin has no effect.
   *
   * For the time being, this extension retains support for Shadow DOM v0. That
   * will eventually be deprecated as browsers (and the Shadow DOM polyfill)
   * implement Shadow DOM v1.
   */

  var ShadowTemplate = function (_base) {
    _inherits(ShadowTemplate, _base);

    function ShadowTemplate() {
      _classCallCheck(this, ShadowTemplate);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ShadowTemplate).apply(this, arguments));
    }

    _createClass(ShadowTemplate, [{
      key: 'createdCallback',

      /*
       * If the component defines a template, a shadow root will be created on the
       * component instance, and the template stamped into it.
       */
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(ShadowTemplate.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ShadowTemplate.prototype), 'createdCallback', this).call(this);
        }
        var template = this.template;
        // TODO: Save the processed template with the component's class prototype
        // so it doesn't need to be processed with every instantiation.
        if (template) {

          if (typeof template === 'string') {
            // Upgrade plain string to real template.
            template = createTemplateWithInnerHTML(template);
          }

          if (USING_SHADOW_DOM_V0) {
            polyfillSlotWithContent(template);
          }

          if (window.ShadowDOMPolyfill) {
            shimTemplateStyles(template, this.localName);
          }

          // this.log("cloning template into shadow root");
          var root = USING_SHADOW_DOM_V0 ? this.createShadowRoot() : // Shadow DOM v0
          this.attachShadow({ mode: 'open' }); // Shadow DOM v1
          var clone = document.importNode(template.content, true);
          root.appendChild(clone);
        }
      }
    }]);

    return ShadowTemplate;
  }(base);

  return ShadowTemplate;
};

// Convert a plain string of HTML into a real template element.

function createTemplateWithInnerHTML(innerHTML) {
  var template = document.createElement('template');
  // REVIEW: Is there an easier way to do this?
  // We'd like to just set innerHTML on the template content, but since it's
  // a DocumentFragment, that doesn't work.
  var div = document.createElement('div');
  div.innerHTML = innerHTML;
  while (div.childNodes.length > 0) {
    template.content.appendChild(div.childNodes[0]);
  }
  return template;
}

// Replace occurences of v1 slot elements with v0 content elements.
// This does not yet map named slots to content select clauses.
function polyfillSlotWithContent(template) {
  [].forEach.call(template.content.querySelectorAll('slot'), function (slotElement) {
    var contentElement = document.createElement('content');
    slotElement.parentNode.replaceChild(contentElement, slotElement);
  });
}

// Invoke basic style shimming with ShadowCSS.
function shimTemplateStyles(template, tag) {
  window.WebComponents.ShadowCSS.shimStyling(template.content, tag);
}

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Composable = require('../../basic-component-mixins/src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _ShadowTemplate = require('../../basic-component-mixins/src/ShadowTemplate');

var _ShadowTemplate2 = _interopRequireDefault(_ShadowTemplate);

var _ShadowElementReferences = require('../../basic-component-mixins/src/ShadowElementReferences');

var _ShadowElementReferences2 = _interopRequireDefault(_ShadowElementReferences);

var _AttributeMarshalling = require('../../basic-component-mixins/src/AttributeMarshalling');

var _AttributeMarshalling2 = _interopRequireDefault(_AttributeMarshalling);

var _DistributedChildren = require('../../basic-component-mixins/src/DistributedChildren');

var _DistributedChildren2 = _interopRequireDefault(_DistributedChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A sample general-purpose base class for defining custom elements that mixes
 * in some common features: template stamping into a shadow root, shadow element
 * references, marshalling attributes to properties, and retrieving the children
 * distributed to a component.
 *
 * This base class is not special in any way, and is defined only as a
 * convenient shorthand for applying the mixins listed above. You can use this
 * class as a base class for your own elements, or easily create your own base
 * class by applying the same set of mixins.
 *
 * The ElementBase base class does not register itself as a custom element with
 * the browser, and hence cannot be independently instantiated.
 */

var ElementBase = function (_Composable$compose) {
  _inherits(ElementBase, _Composable$compose);

  function ElementBase() {
    _classCallCheck(this, ElementBase);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ElementBase).apply(this, arguments));
  }

  _createClass(ElementBase, [{
    key: 'log',

    /*
     * Debugging utility: logs a message, prefixed by the component's tag.
     */
    value: function log(text) {
      if (_get(Object.getPrototypeOf(ElementBase.prototype), 'log', this)) {
        _get(Object.getPrototypeOf(ElementBase.prototype), 'log', this).call(this, text);
      }
      console.log(this.localName + ': ' + text);
    }
  }]);

  return ElementBase;
}((0, _Composable2.default)(HTMLElement).compose(_ShadowTemplate2.default, // before node finding, so shadow root is populated
_ShadowElementReferences2.default, // before marshalling, so properties can use refs
_AttributeMarshalling2.default, _DistributedChildren2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshalling":2,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":4,"../../basic-component-mixins/src/ShadowElementReferences":5,"../../basic-component-mixins/src/ShadowTemplate":6}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementBase2 = require('../../basic-element-base/src/ElementBase');

var _ElementBase3 = _interopRequireDefault(_ElementBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

/**
 * Wraps a standard HTML element so that the standard behavior can then be
 * extended.
 *
 * The Custom Elements spec does not currently (as of March 2016) allow you to
 * extend the behavior of a standard HTML element like `<a>` or `<button>`.
 * As a partial workaround, the WrappedStandardElement class can create a class
 * for you that wraps an instance of a standard HTML element. For example, the
 * code below creates a class that will wrap an instance of a standard `<a>`
 * element:
 *
 *     class WrappedA extends WrappedStandardElement.wrap('a') {
 *       customMethod() { ... }
 *     }
 *     document.registerElement('wrapped-a', WrappedA);
 *
 * An instance of the resulting class will look to the user like an instance of
 * the standard element class it wraps. The resulting class will *not* be an
 * `instanceof` the standard class (here, HTMLAnchorElement). Another limitation
 * is that the resulting `<wrapped-a>` will not automatically pick up CSS styles
 * for standard `<a>` elements. However, the resulting class *can* be extended.
 * E.g., instances of the above class have a `customMethod()` available to them.
 *
 * Any properties defined by the original standard element will be exposed on
 * the resulting wrapper class, and calls to get or set those properties will be
 * delegated to the wrapped element instance. Continuing the above example:
 *
 *     let wrapped = document.createElement('wrapped-a');
 *     wrapped.href = 'http://example.com/';
 *     wrapped.textContent = 'Click here';
 *
 * Here, the created custom `<wrapped-a>` element will contain inside its
 * shadow tree an instance of a standard `<a>` element. The call to set the
 * wrapper's `href` property will ultimately set the `href` on the inner link.
 * Moreover, the text content of the `<wrapped-a>` element will appear inside
 * the inner link. The result of all this is that the user will see what *looks*
 * like a normal link, just as if you had written
 * `<a href="http://example.com/">Click here</a>`. However, the actual element
 * will be an instance of your custom class, with whatever behavior you've
 * defined for it.
 */

var WrappedStandardElement = function (_ElementBase) {
  _inherits(WrappedStandardElement, _ElementBase);

  function WrappedStandardElement() {
    _classCallCheck(this, WrappedStandardElement);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedStandardElement).apply(this, arguments));
  }

  _createClass(WrappedStandardElement, [{
    key: 'ariaLabel',

    /**
     * A description for the user of the element's purpose on the page. Setting
     * this applies the label to the inner element, ensuring that screen readers
     * and other assistive technologies will provide a meaningful description to
     * the user.
     *
     * @type {string}
     */
    get: function get() {
      return this.inner.getAttribute('aria-label');
    },
    set: function set(label) {
      // Propagate the ARIA label to the inner textarea.
      this.inner.setAttribute('aria-label', label);
    }

    /**
     * Returns a reference to the inner standard HTML element.
     *
     * @type {HTMLElement}
     */

  }, {
    key: 'inner',
    get: function get() {
      return this.$.inner;
    }

    /**
     * The template copied into the shadow tree of new instances of this element.
     *
     * The default value of this property is a template that includes an instance
     * the standard element being wrapped, with a `<slot>` element inside that
     * to pick up the element's light DOM content. For example, if you wrap an
     * `<a>` element, then the template will look like:
     *
     *     <template>
     *       <a id="inner">
     *         <slot></slot>
     *       </a>
     *     </template>
     *
     * If you'd like the template to include other elements, then override this
     * property and return a template of your own. The template should include an
     * instance of the standard HTML element you are wrapping, and the ID of that
     * element should be "inner".
     *
     * @type {(string|HTMLTemplateElement)}
     */

  }, {
    key: 'template',
    get: function get() {
      // TODO: Use slot instead of content.
      return '<' + this.extends + ' id="inner"><content></content></' + this.extends;
    }

    /**
     * Creates a class that wraps a standard HTML element.
     *
     * Note that the resulting class is a subclass of WrappedStandardElement, not
     * the standard class being wrapped. E.g., if you call
     * `WrappedStandardElement.wrap('a')`, you will get a class whose shadow tree
     * will include an anchor element, but the class will *not* inherit from
     * HTMLAnchorElement.
     *
     * @param {string} extendsTag - the standard HTML element tag to extend
     */

  }], [{
    key: 'wrap',
    value: function wrap(extendsTag) {

      // Create the new class.

      var Wrapped = function (_WrappedStandardEleme) {
        _inherits(Wrapped, _WrappedStandardEleme);

        function Wrapped() {
          _classCallCheck(this, Wrapped);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(Wrapped).apply(this, arguments));
        }

        return Wrapped;
      }(WrappedStandardElement);

      // Indicate which tag it wraps.

      Wrapped.prototype.extends = extendsTag;

      // Create getter/setters that delegate to the wrapped element.
      var element = document.createElement(extendsTag);
      var extendsPrototype = element.constructor.prototype;
      var names = Object.getOwnPropertyNames(extendsPrototype);
      names.forEach(function (name) {
        var descriptor = Object.getOwnPropertyDescriptor(extendsPrototype, name);
        var delegate = createPropertyDelegate(name, descriptor);
        Object.defineProperty(Wrapped.prototype, name, delegate);
      });

      return Wrapped;
    }
  }]);

  return WrappedStandardElement;
}(_ElementBase3.default);

function createPropertyDelegate(name, descriptor) {
  var delegate = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable
  };
  if (descriptor.get) {
    delegate.get = function () {
      return this.inner[name];
    };
  }
  if (descriptor.set) {
    delegate.set = function (value) {
      this.inner[name] = value;
    };
  }
  if (descriptor.writable) {
    delegate.writable = descriptor.writable;
  }
  return delegate;
}

exports.default = WrappedStandardElement;

},{"../../basic-element-base/src/ElementBase":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hY3RpdmF0aW5nLWFuY2hvci9zcmMvQWN0aXZhdGluZ0FuY2hvci5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29tcG9zYWJsZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyIsInBhY2thZ2VzL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNnQk0sZ0JBQWdCO1lBQWhCLGdCQUFnQjs7V0FBaEIsZ0JBQWdCOzBCQUFoQixnQkFBZ0I7O2tFQUFoQixnQkFBZ0I7OztlQUFoQixnQkFBZ0I7O3VDQXVDRDtBQUNqQixxQ0F4Q0UsZ0JBQWdCLHdDQXdDVTtBQUFFLG1DQXhDNUIsZ0JBQWdCLGtEQXdDcUM7T0FBRTtBQUN6RCxhQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7O3NDQUVpQjs7O0FBQ2hCLHFDQTdDRSxnQkFBZ0IsdUNBNkNTO0FBQUUsbUNBN0MzQixnQkFBZ0IsaURBNkNtQztPQUFFO0FBQ3ZELFlBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUs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O0FBQ2IsZ0JBQVksRUFBRSxVQUFVLENBQUMsWUFBWTtBQUNyQyxjQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7R0FDbEMsQ0FBQztBQUNGLE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDeEIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLENBQUE7R0FDRjtBQUNELE1BQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNsQixZQUFRLENBQUMsR0FBRyxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzdCLFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzFCLENBQUE7R0FDRjtBQUNELE1BQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7R0FDekM7QUFDRCxTQUFPLFFBQVEsQ0FBQztDQUNqQjs7a0JBR2Msc0JBQXNCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGZyb20gJy4uLy4uL2Jhc2ljLXdyYXBwZWQtc3RhbmRhcmQtZWxlbWVudC9zcmMvV3JhcHBlZFN0YW5kYXJkRWxlbWVudCc7XG5cblxuLyoqXG4gKiBBbiBhbmNob3IgKGxpbmspIHRoYXQgaGlnaGxpZ2h0cyBpdHNlbGYgd2hlbiBpdHMgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGVcbiAqIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogU3VjaCBhIGxpbmsgY29tbW9ubHkgYXBwZWFycyBpbiB0b29sYmFycywgc2lkZSBiYXJzLCBhbmQgb3RoZXIgbmF2aWdhdGlvblxuICogZWxlbWVudHMuIEluIHRoZXNlIHNpdHVhdGlvbnMsIHlvdSBnZW5lcmFsbHkgd2FudCB0aGUgdXNlciB0byB1bmRlcnN0YW5kIHdoYXRcbiAqIHBhZ2Ugb3IgYXJlYSB0aGUgdXNlciBpcyBhbHJlYWR5IG9uLlxuICpcbiAqIE5vdGU6IG9uZSBsaW1pdGF0aW9uIG9mIHRoaXMgY29tcG9uZW50IGlzIHRoYXQsIGJ5IGRlZmF1bHQsIHRoZSBsaW5rIGRvZXNcbiAqICpub3QqIHNob3cgdGhlIHN0YW5kYXJkIGxpbmsgY29sb3IgKHVzdWFsbHkgYmx1ZSkuIEhvd2V2ZXIsIGluIG5hdmlnYXRpb25cbiAqIGVsZW1lbnRzIGxpa2UgdG9vbGJhcnMsIHlvdSBvZnRlbiB3aWxsIHdhbnQgdG8gZXhwbGljaXRseSBzcGVjaWZpYyBsaW5rXG4gKiBjb2xvcnMgYW55d2F5LCBlLmcuLCB0byByZWZsZWN0IHlvdXIgYXBwbGljYXRpb24ncyB2aXN1YWwgc3R5bGUgYW5kIGJyYW5kLlxuICovXG5jbGFzcyBBY3RpdmF0aW5nQW5jaG9yIGV4dGVuZHMgV3JhcHBlZFN0YW5kYXJkRWxlbWVudC53cmFwKCdhJykge1xuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhbiBgYWN0aXZlYCBDU1MgY2xhc3MgYXBwbGllZCB0byBpdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZSkge1xuICAgIC8vIFdvdWxkIGxpa2UgdG8gdXNlIGNsYXNzTGlzdC50b2dnbGUoKSBoZXJlLCBidXQgSUUgMTEgZG9lc24ndCBoYXZlIGl0LlxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgbGluayBwb2ludHMgdG8gYW4gYXJlYSB3aXRoaW4gYSBzaXRlLCBub3QganVzdCBhIHNpbmdsZSBwYWdlLlxuICAgKlxuICAgKiBJZiB0cnVlLCB0aGUgbWF0Y2hpbmcgcnVsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluayBpcyBhY3RpdmUgY2hhbmdlczpcbiAgICogYW4gYXJlYSBsaW5rIGlzIGNvbnNpZGVyZWQgdG8gYmUgYWN0aXZlIGlmIHRoZSBsaW5rJ3MgZGVzdGluYXRpb24gZm9ybXMgYVxuICAgKiBwcmVmaXggb2YgdGhlIGN1cnJlbnQgbG9jYXRpb24gKGluc3RlYWQgb2YgbWF0Y2hpbmcgdGhlIGNvbXBsZXRlIFVSTCkuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGFyZWFMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLl9hcmVhTGluaztcbiAgfVxuICBzZXQgYXJlYUxpbmsodmFsdWUpIHtcbiAgICAvLyBDYXN0IGJvb2xlYW4gb3Igc3RyaW5nIHZhbHVlcyB0byBib29sZWFuLlxuICAgIHRoaXMuX2FyZWFMaW5rID0gKFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJyk7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZXZlbnQgPT4ge1xuICAgICAgcmVmcmVzaCh0aGlzKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2FyZWFMaW5rID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fYXJlYUxpbmsgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBBdWdtZW50IGhyZWYgaW1wbGVtZW50YXRpb24gc28gdGhhdCBjaGFuZ2luZyBocmVmIGNoZWNrcyB0aGUgYWN0aXZlIHN0YXR1cy5cbiAgZ2V0IGhyZWYoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhyZWY7XG4gIH1cbiAgc2V0IGhyZWYodmFsdWUpIHtcbiAgICBzdXBlci5ocmVmID0gdmFsdWU7XG4gICAgcmVmcmVzaCh0aGlzKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBTcGVjaWZ5IGNvbG9yOmluaGVyaXQgc28gdGhhdCBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGZyb20gdGhlIG91dHNpZGVcbiAgICAvLyB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSBDU1MgdmFyaWFibGUuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICNpbm5lciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhIGlkPVwiaW5uZXJcIj48c2xvdD48L3Nsb3Q+PC9hPmA7XG4gIH1cblxufVxuXG5cbi8vIFVwZGF0ZSB0aGUgYWN0aXZlIHN0YXR1cyBvZiB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgY3VycmVudCBsb2NhdGlvbi5cbmZ1bmN0aW9uIHJlZnJlc2goZWxlbWVudCkge1xuICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBlbGVtZW50LmFjdGl2ZSA9IGVsZW1lbnQuYXJlYUxpbmsgP1xuICAgIChjdXJyZW50LnN1YnN0cigwLCBlbGVtZW50LmhyZWYubGVuZ3RoKSA9PT0gZWxlbWVudC5ocmVmKSA6IC8vIE1hdGNoIHByZWZpeFxuICAgIChjdXJyZW50ID09PSBlbGVtZW50LmhyZWYpOyAvLyBNYXRjaCB3aG9sZSBwYXRoXG59XG5cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdiYXNpYy1hY3RpdmF0aW5nLWFuY2hvcicsIEFjdGl2YXRpbmdBbmNob3IpO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgKGFuZCBldmVudHVhbGx5IHZpY2UgdmVyc2EpLlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBleHBvc2VzIGEgc2V0dGVyIGZvciBhIHByb3BlcnR5LCBpdCdzIGdlbmVyYWxseSBhIGdvb2RcbiAgICogaWRlYSB0byBsZXQgZGV2cyB1c2luZyB5b3VyIGNvbXBvbmVudCBiZSBhYmxlIHRvIHNldCB0aGF0IHByb3BlcnR5IGluIEhUTUxcbiAgICogdmlhIGFuIGVsZW1lbnQgYXR0cmlidXRlLiBZb3UgY2FuIGNvZGUgdGhhdCB5b3Vyc2VsZiBieSB3cml0aW5nIGFuXG4gICAqIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLCBvciB5b3UgY2FuIHVzZSB0aGlzIG1peGluIHRvIGdldCBhIGRlZ3JlZSBvZlxuICAgKiBhdXRvbWF0aWMgc3VwcG9ydC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsZW1lbnRzIGFuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHRoYXQgd2lsbCBhdHRlbXB0IHRvXG4gICAqIGNvbnZlcnQgYSBjaGFuZ2UgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgaW50byBhIGNhbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcHJvcGVydHkgc2V0dGVyLiBBdHRyaWJ1dGVzIHR5cGljYWxseSBmb2xsb3cgaHlwaGVuYXRlZCBuYW1lcyAoXCJmb28tYmFyXCIpLFxuICAgKiB3aGVyZWFzIHByb3BlcnRpZXMgdHlwaWNhbGx5IHVzZSBjYW1lbENhc2UgbmFtZXMgKFwiZm9vQmFyXCIpLiBUaGlzIG1peGluXG4gICAqIHJlc3BlY3RzIHRoYXQgY29udmVudGlvbiwgYXV0b21hdGljYWxseSBtYXBwaW5nIHRoZSBoeXBoZW5hdGVkIGF0dHJpYnV0ZVxuICAgKiBuYW1lIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBFeGFtcGxlOiBZb3UgZGVmaW5lIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW46XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyhIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgZm9vQmFyKCkgeyByZXR1cm4gdGhpcy5fZm9vQmFyOyB9XG4gICAqICAgICAgIHNldCBmb29CYXIodmFsdWUpIHsgdGhpcy5fZm9vQmFyID0gdmFsdWU7IH1cbiAgICogICAgIH1cbiAgICogICAgIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gICAqXG4gICAqIElmIHNvbWVvbmUgdGhlbiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgaW4gSFRNTDpcbiAgICpcbiAgICogICAgIDxteS1lbGVtZW50IGZvby1iYXI9XCJIZWxsb1wiPjwvbXktZWxlbWVudD5cbiAgICpcbiAgICogVGhlbiwgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gdXBncmFkZWQsIHRoZSBgZm9vQmFyYCBzZXR0ZXIgd2lsbFxuICAgKiBhdXRvbWF0aWNhbGx5IGJlIGludm9rZWQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBcIkhlbGxvXCIuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBtaXhpbiBvbmx5IHN1cHBvcnRzIHN0cmluZy12YWx1ZWQgcHJvcGVydGllcy5cbiAgICogSWYgeW91J2QgbGlrZSB0byBjb252ZXJ0IHN0cmluZyBhdHRyaWJ1dGVzIHRvIG90aGVyIHR5cGVzIChudW1iZXJzLFxuICAgKiBib29sZWFucyksIHlvdSBuZWVkIHRvIGltcGxlbWVudCBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIEhhbmRsZSBhIGNoYW5nZSB0byB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKTsgfVxuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgdGhlbiBzZXQgdGhhdFxuICAgICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUobmFtZSk7XG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdlbmVyYXRlIGFuIGluaXRpYWwgY2FsbCB0byBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIGVhY2ggYXR0cmlidXRlXG4gICAgICogb24gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUT0RPOiBUaGUgcGxhbiBmb3IgQ3VzdG9tIEVsZW1lbnRzIHYxIGlzIGZvciB0aGUgYnJvd3NlciB0byBoYW5kbGUgdGhpcy5cbiAgICAgKiBPbmNlIHRoYXQncyBoYW5kbGVkIChpbmNsdWRpbmcgaW4gcG9seWZpbGxzKSwgdGhpcyBjYWxsIGNhbiBnbyBhd2F5LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZS5uYW1lLCB1bmRlZmluZWQsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxuLy8gZnVuY3Rpb24gcHJvcGVydHlUb0F0dHJpYnV0ZU5hbWUocHJvcGVydHlOYW1lKSB7XG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbi8vIH1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBuZXcgQ3VzdG9tIEVsZW1lbnRzIEFQSS5cbi8vIFRPRE86IENvbnNpZGVyIHJlbmFtaW5nIHRvIG1hdGNoIEN1c3RvbSBFbGVtZW50cyBBUEkuXG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2UgdGhlXG4gICAgICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlXG4gICAgICogdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGxldCBzdHJpbmdzID0gdGhpcy5kaXN0cmlidXRlZENoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiIG9yIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiAobm9kZS5sb2NhbE5hbWUgPT09IFwic2xvdFwiIHx8IG5vZGUubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIikpIHtcbiAgICAgIC8vIGNvbnRlbnQgZWxlbWVudDsgdXNlIGl0cyBkaXN0cmlidXRlZCBub2RlcyBpbnN0ZWFkLlxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGRpc3RyaWJ1dGVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGUgU2hhZG93VGVtcGxhdGUgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgICAgcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICAgIGxldCByb290ID0gVVNJTkdfU0hBRE9XX0RPTV9WMCA/XG4gICAgICAgICAgdGhpcy5jcmVhdGVTaGFkb3dSb290KCkgOiAgICAgICAgICAgICAvLyBTaGFkb3cgRE9NIHYwXG4gICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIFJlcGxhY2Ugb2NjdXJlbmNlcyBvZiB2MSBzbG90IGVsZW1lbnRzIHdpdGggdjAgY29udGVudCBlbGVtZW50cy5cbi8vIFRoaXMgZG9lcyBub3QgeWV0IG1hcCBuYW1lZCBzbG90cyB0byBjb250ZW50IHNlbGVjdCBjbGF1c2VzLlxuZnVuY3Rpb24gcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpIHtcbiAgW10uZm9yRWFjaC5jYWxsKHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpLCBzbG90RWxlbWVudCA9PiB7XG4gICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xuICAgIHNsb3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRFbGVtZW50LCBzbG90RWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGUsICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlblxuKSB7XG5cbiAgLypcbiAgICogRGVidWdnaW5nIHV0aWxpdHk6IGxvZ3MgYSBtZXNzYWdlLCBwcmVmaXhlZCBieSB0aGUgY29tcG9uZW50J3MgdGFnLlxuICAgKi9cbiAgbG9nKHRleHQpIHtcbiAgICBpZiAoc3VwZXIubG9nKSB7IHN1cGVyLmxvZyh0ZXh0KTsgfVxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubG9jYWxOYW1lfTogJHt0ZXh0fWApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XG4iLCJpbXBvcnQgRWxlbWVudEJhc2UgZnJvbSAnLi4vLi4vYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZSc7XG5cblxuLy8gRmVhdHVyZSBkZXRlY3Rpb24gZm9yIG9sZCBTaGFkb3cgRE9NIHYwLlxuY29uc3QgVVNJTkdfU0hBRE9XX0RPTV9WMCA9ICh0eXBlb2YgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnKTtcblxuXG4vKipcbiAqIFdyYXBzIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHNvIHRoYXQgdGhlIHN0YW5kYXJkIGJlaGF2aW9yIGNhbiB0aGVuIGJlXG4gKiBleHRlbmRlZC5cbiAqXG4gKiBUaGUgQ3VzdG9tIEVsZW1lbnRzIHNwZWMgZG9lcyBub3QgY3VycmVudGx5IChhcyBvZiBNYXJjaCAyMDE2KSBhbGxvdyB5b3UgdG9cbiAqIGV4dGVuZCB0aGUgYmVoYXZpb3Igb2YgYSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgbGlrZSBgPGE+YCBvciBgPGJ1dHRvbj5gLlxuICogQXMgYSBwYXJ0aWFsIHdvcmthcm91bmQsIHRoZSBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IGNsYXNzIGNhbiBjcmVhdGUgYSBjbGFzc1xuICogZm9yIHlvdSB0aGF0IHdyYXBzIGFuIGluc3RhbmNlIG9mIGEgc3RhbmRhcmQgSFRNTCBlbGVtZW50LiBGb3IgZXhhbXBsZSwgdGhlXG4gKiBjb2RlIGJlbG93IGNyZWF0ZXMgYSBjbGFzcyB0aGF0IHdpbGwgd3JhcCBhbiBpbnN0YW5jZSBvZiBhIHN0YW5kYXJkIGA8YT5gXG4gKiBlbGVtZW50OlxuICpcbiAqICAgICBjbGFzcyBXcmFwcGVkQSBleHRlbmRzIFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQud3JhcCgnYScpIHtcbiAqICAgICAgIGN1c3RvbU1ldGhvZCgpIHsgLi4uIH1cbiAqICAgICB9XG4gKiAgICAgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCd3cmFwcGVkLWEnLCBXcmFwcGVkQSk7XG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdGluZyBjbGFzcyB3aWxsIGxvb2sgdG8gdGhlIHVzZXIgbGlrZSBhbiBpbnN0YW5jZSBvZlxuICogdGhlIHN0YW5kYXJkIGVsZW1lbnQgY2xhc3MgaXQgd3JhcHMuIFRoZSByZXN1bHRpbmcgY2xhc3Mgd2lsbCAqbm90KiBiZSBhblxuICogYGluc3RhbmNlb2ZgIHRoZSBzdGFuZGFyZCBjbGFzcyAoaGVyZSwgSFRNTEFuY2hvckVsZW1lbnQpLiBBbm90aGVyIGxpbWl0YXRpb25cbiAqIGlzIHRoYXQgdGhlIHJlc3VsdGluZyBgPHdyYXBwZWQtYT5gIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgcGljayB1cCBDU1Mgc3R5bGVzXG4gKiBmb3Igc3RhbmRhcmQgYDxhPmAgZWxlbWVudHMuIEhvd2V2ZXIsIHRoZSByZXN1bHRpbmcgY2xhc3MgKmNhbiogYmUgZXh0ZW5kZWQuXG4gKiBFLmcuLCBpbnN0YW5jZXMgb2YgdGhlIGFib3ZlIGNsYXNzIGhhdmUgYSBgY3VzdG9tTWV0aG9kKClgIGF2YWlsYWJsZSB0byB0aGVtLlxuICpcbiAqIEFueSBwcm9wZXJ0aWVzIGRlZmluZWQgYnkgdGhlIG9yaWdpbmFsIHN0YW5kYXJkIGVsZW1lbnQgd2lsbCBiZSBleHBvc2VkIG9uXG4gKiB0aGUgcmVzdWx0aW5nIHdyYXBwZXIgY2xhc3MsIGFuZCBjYWxscyB0byBnZXQgb3Igc2V0IHRob3NlIHByb3BlcnRpZXMgd2lsbCBiZVxuICogZGVsZWdhdGVkIHRvIHRoZSB3cmFwcGVkIGVsZW1lbnQgaW5zdGFuY2UuIENvbnRpbnVpbmcgdGhlIGFib3ZlIGV4YW1wbGU6XG4gKlxuICogICAgIGxldCB3cmFwcGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnd3JhcHBlZC1hJyk7XG4gKiAgICAgd3JhcHBlZC5ocmVmID0gJ2h0dHA6Ly9leGFtcGxlLmNvbS8nO1xuICogICAgIHdyYXBwZWQudGV4dENvbnRlbnQgPSAnQ2xpY2sgaGVyZSc7XG4gKlxuICogSGVyZSwgdGhlIGNyZWF0ZWQgY3VzdG9tIGA8d3JhcHBlZC1hPmAgZWxlbWVudCB3aWxsIGNvbnRhaW4gaW5zaWRlIGl0c1xuICogc2hhZG93IHRyZWUgYW4gaW5zdGFuY2Ugb2YgYSBzdGFuZGFyZCBgPGE+YCBlbGVtZW50LiBUaGUgY2FsbCB0byBzZXQgdGhlXG4gKiB3cmFwcGVyJ3MgYGhyZWZgIHByb3BlcnR5IHdpbGwgdWx0aW1hdGVseSBzZXQgdGhlIGBocmVmYCBvbiB0aGUgaW5uZXIgbGluay5cbiAqIE1vcmVvdmVyLCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBgPHdyYXBwZWQtYT5gIGVsZW1lbnQgd2lsbCBhcHBlYXIgaW5zaWRlXG4gKiB0aGUgaW5uZXIgbGluay4gVGhlIHJlc3VsdCBvZiBhbGwgdGhpcyBpcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIHdoYXQgKmxvb2tzKlxuICogbGlrZSBhIG5vcm1hbCBsaW5rLCBqdXN0IGFzIGlmIHlvdSBoYWQgd3JpdHRlblxuICogYDxhIGhyZWY9XCJodHRwOi8vZXhhbXBsZS5jb20vXCI+Q2xpY2sgaGVyZTwvYT5gLiBIb3dldmVyLCB0aGUgYWN0dWFsIGVsZW1lbnRcbiAqIHdpbGwgYmUgYW4gaW5zdGFuY2Ugb2YgeW91ciBjdXN0b20gY2xhc3MsIHdpdGggd2hhdGV2ZXIgYmVoYXZpb3IgeW91J3ZlXG4gKiBkZWZpbmVkIGZvciBpdC5cbiAqL1xuY2xhc3MgV3JhcHBlZFN0YW5kYXJkRWxlbWVudCBleHRlbmRzIEVsZW1lbnRCYXNlIHtcblxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBmb3IgdGhlIHVzZXIgb2YgdGhlIGVsZW1lbnQncyBwdXJwb3NlIG9uIHRoZSBwYWdlLiBTZXR0aW5nXG4gICAqIHRoaXMgYXBwbGllcyB0aGUgbGFiZWwgdG8gdGhlIGlubmVyIGVsZW1lbnQsIGVuc3VyaW5nIHRoYXQgc2NyZWVuIHJlYWRlcnNcbiAgICogYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgd2lsbCBwcm92aWRlIGEgbWVhbmluZ2Z1bCBkZXNjcmlwdGlvbiB0b1xuICAgKiB0aGUgdXNlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBhcmlhTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gIH1cbiAgc2V0IGFyaWFMYWJlbChsYWJlbCkge1xuICAgIC8vIFByb3BhZ2F0ZSB0aGUgQVJJQSBsYWJlbCB0byB0aGUgaW5uZXIgdGV4dGFyZWEuXG4gICAgdGhpcy5pbm5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5uZXIgc3RhbmRhcmQgSFRNTCBlbGVtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pbm5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgY29waWVkIGludG8gdGhlIHNoYWRvdyB0cmVlIG9mIG5ldyBpbnN0YW5jZXMgb2YgdGhpcyBlbGVtZW50LlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgdGVtcGxhdGUgdGhhdCBpbmNsdWRlcyBhbiBpbnN0YW5jZVxuICAgKiB0aGUgc3RhbmRhcmQgZWxlbWVudCBiZWluZyB3cmFwcGVkLCB3aXRoIGEgYDxzbG90PmAgZWxlbWVudCBpbnNpZGUgdGhhdFxuICAgKiB0byBwaWNrIHVwIHRoZSBlbGVtZW50J3MgbGlnaHQgRE9NIGNvbnRlbnQuIEZvciBleGFtcGxlLCBpZiB5b3Ugd3JhcCBhblxuICAgKiBgPGE+YCBlbGVtZW50LCB0aGVuIHRoZSB0ZW1wbGF0ZSB3aWxsIGxvb2sgbGlrZTpcbiAgICpcbiAgICogICAgIDx0ZW1wbGF0ZT5cbiAgICogICAgICAgPGEgaWQ9XCJpbm5lclwiPlxuICAgKiAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgICAgPC9hPlxuICAgKiAgICAgPC90ZW1wbGF0ZT5cbiAgICpcbiAgICogSWYgeW91J2QgbGlrZSB0aGUgdGVtcGxhdGUgdG8gaW5jbHVkZSBvdGhlciBlbGVtZW50cywgdGhlbiBvdmVycmlkZSB0aGlzXG4gICAqIHByb3BlcnR5IGFuZCByZXR1cm4gYSB0ZW1wbGF0ZSBvZiB5b3VyIG93bi4gVGhlIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIGFuXG4gICAqIGluc3RhbmNlIG9mIHRoZSBzdGFuZGFyZCBIVE1MIGVsZW1lbnQgeW91IGFyZSB3cmFwcGluZywgYW5kIHRoZSBJRCBvZiB0aGF0XG4gICAqIGVsZW1lbnQgc2hvdWxkIGJlIFwiaW5uZXJcIi5cbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmd8SFRNTFRlbXBsYXRlRWxlbWVudCl9XG4gICAqL1xuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgLy8gVE9ETzogVXNlIHNsb3QgaW5zdGVhZCBvZiBjb250ZW50LlxuICAgIHJldHVybiBgPCR7dGhpcy5leHRlbmRzfSBpZD1cImlubmVyXCI+PGNvbnRlbnQ+PC9jb250ZW50PjwvJHt0aGlzLmV4dGVuZHN9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xhc3MgdGhhdCB3cmFwcyBhIHN0YW5kYXJkIEhUTUwgZWxlbWVudC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSByZXN1bHRpbmcgY2xhc3MgaXMgYSBzdWJjbGFzcyBvZiBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LCBub3RcbiAgICogdGhlIHN0YW5kYXJkIGNsYXNzIGJlaW5nIHdyYXBwZWQuIEUuZy4sIGlmIHlvdSBjYWxsXG4gICAqIGBXcmFwcGVkU3RhbmRhcmRFbGVtZW50LndyYXAoJ2EnKWAsIHlvdSB3aWxsIGdldCBhIGNsYXNzIHdob3NlIHNoYWRvdyB0cmVlXG4gICAqIHdpbGwgaW5jbHVkZSBhbiBhbmNob3IgZWxlbWVudCwgYnV0IHRoZSBjbGFzcyB3aWxsICpub3QqIGluaGVyaXQgZnJvbVxuICAgKiBIVE1MQW5jaG9yRWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuZHNUYWcgLSB0aGUgc3RhbmRhcmQgSFRNTCBlbGVtZW50IHRhZyB0byBleHRlbmRcbiAgICovXG4gIHN0YXRpYyB3cmFwKGV4dGVuZHNUYWcpIHtcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IGNsYXNzLlxuICAgIGNsYXNzIFdyYXBwZWQgZXh0ZW5kcyBXcmFwcGVkU3RhbmRhcmRFbGVtZW50IHt9XG5cbiAgICAvLyBJbmRpY2F0ZSB3aGljaCB0YWcgaXQgd3JhcHMuXG4gICAgV3JhcHBlZC5wcm90b3R5cGUuZXh0ZW5kcyA9IGV4dGVuZHNUYWc7XG5cbiAgICAvLyBDcmVhdGUgZ2V0dGVyL3NldHRlcnMgdGhhdCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlZCBlbGVtZW50LlxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChleHRlbmRzVGFnKTtcbiAgICBsZXQgZXh0ZW5kc1Byb3RvdHlwZSA9IGVsZW1lbnQuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGV4dGVuZHNQcm90b3R5cGUpO1xuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihleHRlbmRzUHJvdG90eXBlLCBuYW1lKTtcbiAgICAgICAgbGV0IGRlbGVnYXRlID0gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWQucHJvdG90eXBlLCBuYW1lLCBkZWxlZ2F0ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gV3JhcHBlZDtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlEZWxlZ2F0ZShuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBkZWxlZ2F0ZSA9IHtcbiAgICBjb25maWd1cmFibGU6IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlLFxuICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgfTtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgZGVsZWdhdGUuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcltuYW1lXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVsZWdhdGUuc2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZWxlZ2F0ZS53cml0YWJsZSA9IGRlc2NyaXB0b3Iud3JpdGFibGU7XG4gIH1cbiAgcmV0dXJuIGRlbGVnYXRlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRTdGFuZGFyZEVsZW1lbnQ7XG4iXX0=

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ElementBase = require('../../basic-element-base/src/ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var _ContentItemsMixin = require('../../basic-component-mixins/src/ContentItemsMixin');

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DistributedChildrenContentMixin = require('../../basic-component-mixins/src/DistributedChildrenContentMixin');

var _DistributedChildrenContentMixin2 = _interopRequireDefault(_DistributedChildrenContentMixin);

var _FractionalSelectionMixin = require('../../basic-component-mixins/src/FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _SelectionAnimationMixin = require('../../basic-component-mixins/src/SelectionAnimationMixin');

var _SelectionAnimationMixin2 = _interopRequireDefault(_SelectionAnimationMixin);

var _SelectionAriaActiveMixin = require('../../basic-component-mixins/src/SelectionAriaActiveMixin');

var _SelectionAriaActiveMixin2 = _interopRequireDefault(_SelectionAriaActiveMixin);

var _SingleSelectionMixin = require('../../basic-component-mixins/src/SingleSelectionMixin');

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = _ElementBase2.default.compose(_ContentItemsMixin2.default, _DistributedChildrenContentMixin2.default, _FractionalSelectionMixin2.default, _SelectionAnimationMixin2.default, _SelectionAriaActiveMixin2.default, _SingleSelectionMixin2.default);

/**
 * Presents a single item as selected, providing animated transitions when the
 * selection changes. The same animation can be shown at an arbitrary point,
 * generally used to reflect a user-controlled touch or trackpad drag operation
 * in progress.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-animation-stage/)
 *
 * This component is intended to be used as a programmatic rendering surface for
 * components which want to show transitional effects.
 *
 * The component uses [SelectionAnimationMixin](../basic-component-mixins/docs/SelectionAnimationMixin.md)
 * mixin, which in turn uses the Web Animations API. For use on browsers which
 * do not support that API natively, you will need to load the
 * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
 *
 * For a simpler component that exhibits only a sliding effect, but does not
 * require the Web Animations API, see [basic-sliding-viewport](../basic-sliding-viewport).
 *
 * @extends ElementBase
 * @mixes ContentItemsMixin
 * @mixes DistributedChildrenContentMixin
 * @mixes SelectionAnimationMixin
 * @mixes SelectionAriaActiveMixin
 * @mixes SingleSelectionMixin
 */

var AnimationStage = function (_base) {
  _inherits(AnimationStage, _base);

  function AnimationStage() {
    _classCallCheck(this, AnimationStage);

    return _possibleConstructorReturn(this, (AnimationStage.__proto__ || Object.getPrototypeOf(AnimationStage)).apply(this, arguments));
  }

  _createClass(AnimationStage, [{
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(AnimationStage.prototype.__proto__ || Object.getPrototypeOf(AnimationStage.prototype), _symbols2.default.defaults, this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: _symbols2.default.template,
    get: function get() {
      return '\n      <style>\n      :host {\n        overflow: hidden;\n        position: relative;\n      }\n\n      #container ::slotted(*) {\n        height: 100%;\n        object-fit: contain;\n        position: absolute;\n        width: 100%;\n        will-change: transform;\n      }\n      </style>\n\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
    }
  }]);

  return AnimationStage;
}(base);

customElements.define('basic-animation-stage', AnimationStage);
exports.default = AnimationStage;

},{"../../basic-component-mixins/src/ContentItemsMixin":6,"../../basic-component-mixins/src/DistributedChildrenContentMixin":8,"../../basic-component-mixins/src/FractionalSelectionMixin":10,"../../basic-component-mixins/src/SelectionAnimationMixin":14,"../../basic-component-mixins/src/SelectionAriaActiveMixin":15,"../../basic-component-mixins/src/SingleSelectionMixin":18,"../../basic-component-mixins/src/symbols":24,"../../basic-element-base/src/ElementBase":26}],2:[function(require,module,exports){
'use strict';

var _Carousel = require('./src/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.Carousel = _Carousel2.default;

},{"./src/Carousel":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnimationStage = require('../../basic-animation-stage/src/AnimationStage');

var _AnimationStage2 = _interopRequireDefault(_AnimationStage);

var _HorizontalNavigationMixin = require('../../basic-component-mixins/src/HorizontalNavigationMixin');

var _HorizontalNavigationMixin2 = _interopRequireDefault(_HorizontalNavigationMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Lets the user navigate laterally through a sequence of child elements.
 *
 * basic-carousel is an implementation of the carousel user interface pattern,
 * commonly used for navigating between images, pages, and other elements. This
 * pattern presents the user with a linear sequence of elements, only one of
 * which is shown at a time. The user can navigate to the next/previous element
 * with a variety of input methods.
 *
 * [Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/)
 *
 * The above demo is a plain carousel. It's often combined, however, with
 * mixins like
 * [ArrowSelectionMixin](../basic-component-mixins/docs/ArrowSelectionMixin.md),
 * [PageDotsMixin](../basic-component-mixins/docs/PageDotsMixin.md),
 * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 * For example, you can view a
 * [demo with arrows and page dots](http://basicwebcomponents.org/basic-web-components/packages/demos/carousel-with-arrows-and-dots.html).
 * See the specific mixins for other carousel demos.
 *
 * basic-carousel uses its children as the elements the user will navigate
 * through. In a typical use, a basic-carousel can be used to navigate between a
 * sequence of images:
 *
 *     <basic-carousel>
 *       <img src="image1.jpg">
 *       <img src="image2.jpg">
 *       <img src="image3.jpg">
 *     </basic-carousel>
 *
 * The child elements can be of any type — they are not restricted to images.
 *
 * This component attempts to meet the [Gold Standard for web components]
 * (https://github.com/webcomponents/gold-standard/wiki) so that it is generally
 * as flexible and robust as standard HTML elements. For example, it meets the
 * "Content Changes" criteria: the carousel will adapt to new child elements
 * added or removed at runtime.
 *
 * Currently, this component does not meet the Gold Standard criteria "Size to
 * Content". As a result, for the time being, **you must manually set a size on
 * this component**. Two approaches are to: 1) stretch the component across
 * whatever surface it is contained within, or 2) set it to be larger than the
 * largest child element you want to display. The former approach is more
 * common, and can be achieved with CSS styling such as:
 *
 *     html {
 *       height: 100%;
 *     }
 *
 *     body {
 *       display: -webkit-flex;
 *       display: flex;
 *       height: 100%;
 *       margin: 0;
 *     }
 *
 *     basic-carousel {
 *       -webkit-flex: 1;
 *       flex: 1;
 *     }
 *
 * The standard basic-carousel component supports navigation via the following
 * input methods:
 *
 * * Keyboard. When the carousel has focus, the user can press Left, Right,
 *   Home, or End. These navigate to the expected element.
 * * Touch. On mobile and other touch-enabled devices, the user can drag left or
 *   right.
 * * Trackpad. The user can swipe left or right on a trackpad to navigate.
 *
 * Because carousels are used in a wide variety of circumstances, by default
 * basic-carousel provides a minimal appearance and no separately interactive
 * elements such as arrow buttons on the side or dots along the bottom. Those
 * elements can be added by wrapping a Carousel in optional mixins:
 *
 * * [ArrowSelectionMixin](../basic-component-mixins/docs/ArrowSelectionMixin.md).
 *   Adds prominent left and right arrow buttons on the side of the carousel.
 * * [PageDotsMixin](../basic-component-mixins/docs/PageDotsMixin.md).
 *   Adds a series of small dots below the carousel to indicate the user's
 *   current position in the sequence.
 * * [TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).
 *   Advances to the next item on a timer.
 * * [TabStripMixin](../basic-tab-strip).
 *   Adds a strip of traditional tab buttons.
 *
 * See those components for more details, but in general you can construct a
 * common carousel with both arrow buttons and dots like so:
 *
 *     class MyCarousel extends
 *         ArrowSelectionMixin(PageDotsMixin(Carousel)) {}
 *     customElements.define('my-carousel', MyCarousel);
 *
 * For universal access, basic-carousel automatically adds a variety of
 * [ARIA](http://www.w3.org/WAI/intro/aria) properties to itself and to child
 * elements. This helps users navigate the sequence of elements in the carousel
 * using assistive technologies.
 *
 * @extends AnimationStage
 * @mixes HorizontalNavigationMixin
 */
var Carousel = function (_AnimationStage$compo) {
  _inherits(Carousel, _AnimationStage$compo);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  return Carousel;
}(_AnimationStage2.default.compose(_HorizontalNavigationMixin2.default));

customElements.define('basic-carousel', Carousel);
exports.default = Carousel;

},{"../../basic-animation-stage/src/AnimationStage":1,"../../basic-component-mixins/src/HorizontalNavigationMixin":11}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

/* Exported function extends a base class with AttributeMarshalling. */

exports.default = function (base) {

  /**
   * Mixin which marshalls attributes to properties and vice versa.
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
   *     class MyElement extends AttributeMarshallingMixin(HTMLElement) {
   *       get fooBar() { return this._fooBar; }
   *       set fooBar(value) { this._fooBar = value; }
   *     }
   *     customElements.define('my-element', MyElement);
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

      return _possibleConstructorReturn(this, (AttributeMarshalling.__proto__ || Object.getPrototypeOf(AttributeMarshalling)).apply(this, arguments));
    }

    _createClass(AttributeMarshalling, [{
      key: 'attributeChangedCallback',


      /*
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this).call(this);
        }
        var propertyName = attributeToPropertyName(attributeName);
        // If the attribute name corresponds to a property name, set the property.
        // Ignore standard HTMLElement properties handled by the DOM.
        if (propertyName in this && !(propertyName in HTMLElement.prototype)) {
          this[propertyName] = newValue;
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
      }
    }, {
      key: 'reflectAttribute',


      /**
       * Set/unset the attribute with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as an attribute. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes. A call to `reflectAttribute` during the constructor will
       * be deferred until the element is connected to the document.
       *
       * @param {string} attribute - The name of the *attribute* (not property) to set.
       * @param {object} value - The value to set. If null, the attribute will be removed.
       */
      value: function reflectAttribute(attribute, value) {
        return _safeAttributes2.default.setAttribute(this, attribute, value);
      }

      /**
       * Set/unset the class with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as as class. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes, including the `class` attribute. A call to
       * `reflectClass` during the constructor will be deferred until the element
       * is connected to the document.
       *
       * @param {string} className - The name of the class to set.
       * @param {object} value - True to set the class, false to remove it.
       */

    }, {
      key: 'reflectClass',
      value: function reflectClass(className, value) {
        return _safeAttributes2.default.toggleClass(this, className, value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return attributesForClass(this);
      }
    }]);

    return AttributeMarshalling;
  }(base);

  return AttributeMarshalling;
};

// Convert hyphenated foo-bar attribute name to camel case fooBar property name.


function attributeToPropertyName(attributeName) {
  var propertyName = attributeToPropertyNames[attributeName];
  if (!propertyName) {
    // Convert and memoize.
    var hypenRegEx = /-([a-z])/g;
    propertyName = attributeName.replace(hypenRegEx, function (match) {
      return match[1].toUpperCase();
    });
    attributeToPropertyNames[attributeName] = propertyName;
  }
  return propertyName;
}

function attributesForClass(classFn) {

  // We treat the element base classes as if they have no attributes, since we
  // don't want to receive attributeChangedCallback for them.
  if (classFn === HTMLElement || classFn === Object) {
    return [];
  }

  // Get attributes for parent class.
  var baseClass = Object.getPrototypeOf(classFn.prototype).constructor;
  var baseAttributes = attributesForClass(baseClass);

  // Get attributes for this class.
  var propertyNames = Object.getOwnPropertyNames(classFn.prototype);
  var setterNames = propertyNames.filter(function (propertyName) {
    return typeof Object.getOwnPropertyDescriptor(classFn.prototype, propertyName).set === 'function';
  });
  var attributes = setterNames.map(function (setterName) {
    return propertyNameToAttribute(setterName);
  });

  // Merge.
  var diff = attributes.filter(function (attribute) {
    return baseAttributes.indexOf(attribute) < 0;
  });
  return baseAttributes.concat(diff);
}

// Convert a camel case fooBar property name to a hyphenated foo-bar attribute.
function propertyNameToAttribute(propertyName) {
  var attribute = propertyNamesToAttributes[propertyName];
  if (!attribute) {
    // Convert and memoize.
    var uppercaseRegEx = /([A-Z])/g;
    attribute = propertyName.replace(uppercaseRegEx, '-$1').toLowerCase();
  }
  return attribute;
}

},{"./safeAttributes":23}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      return _possibleConstructorReturn(this, (Composable.__proto__ || Object.getPrototypeOf(Composable)).apply(this, arguments));
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
       *     let MyClass = ComposableMixin(BaseClass).compose(
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

        return _possibleConstructorReturn(this, (Subclass.__proto__ || Object.getPrototypeOf(Subclass)).apply(this, arguments));
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
  var ignorePropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (ignorePropertyNames.indexOf(name) < 0) {
      var descriptor = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, descriptor);
    }
  });
  return target;
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass = require('./toggleClass');

var _toggleClass2 = _interopRequireDefault(_toggleClass);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var itemsSymbol = (0, _createSymbol2.default)('items');
var itemInitializedSymbol = (0, _createSymbol2.default)('itemInitialized');

/* Exported function extends a base class with ContentItems. */

exports.default = function (base) {

  /**
   * Mixin which maps content semantics (elements) to list item semantics.
   *
   * Items differ from element contents in several ways:
   *
   * * They are often referenced via index.
   * * They may have a selection state.
   * * It's common to do work to initialize the appearance or state of a new
   *   item.
   * * Auxiliary invisible child elements are filtered out and not counted as
   *   items. Auxiliary elements include link, script, style, and template
   *   elements. This filtering ensures that those auxiliary elements can be
   *   used in markup inside of a list without being treated as list items.
   *
   * This mixin expects a component to provide a `content` property returning a
   * raw set of elements. You can provide that yourself, or use
   * [DistributedChildrenContentMixin](DistributedChildrenContentMixin.md).
   *
   * The most commonly referenced property defined by this mixin is the `items`
   * property. To avoid having to do work each time that property is requested,
   * this mixin supports an optimized mode. If you invoke the `contentChanged`
   * method when the set of items changes, the mixin concludes that you'll take
   * care of notifying it of future changes, and turns on the optimization. With
   * that on, the mixin saves a reference to the computed set of items, and will
   * return that immediately on subsequent calls to the `items` property. If you
   * use this mixin in conjunction with
   * [DistributedChildrenContentMixin](DistributedChildrenContentMixin.md), the
   * `contentChanged` method will be invoked for you when the element's children
   * change, turning on the optimization automatically.
   */
  var ContentItems = function (_base) {
    _inherits(ContentItems, _base);

    function ContentItems() {
      _classCallCheck(this, ContentItems);

      return _possibleConstructorReturn(this, (ContentItems.__proto__ || Object.getPrototypeOf(ContentItems)).apply(this, arguments));
    }

    _createClass(ContentItems, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this).call(this);
        }

        // Since we got the contentChanged call, we'll assume we'll be notified if
        // the set of items changes later. We turn on memoization of the items
        // property by setting our internal property to null (instead of
        // undefined).
        this[itemsSymbol] = null;

        this[_symbols2.default.itemsChanged]();
      }

      /**
       * This method is invoked whenever a new item is added to the list.
       *
       * The default implementation of this method does nothing. You can override
       * this to perform per-item initialization.
       *
       * @param {HTMLElement} item - The item that was added.
       */

    }, {
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemAdded, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
      }

      /**
       * The selection state for a single item has changed.
       *
       * Invoke this method to signal that the selected state of the indicated item
       * has changed. By default, this applies a `selected` CSS class if the item
       * is selected, and removed it if not selected.
       *
       * @param {HTMLElement} item - The item whose selection state has changed.
       * @param {boolean} selected - True if the item is selected, false if not.
       */

    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemSelected, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        (0, _toggleClass2.default)(item, 'selected', selected);
      }

      /**
       * The current set of items in the list. See the top-level documentation for
       * mixin for a description of how items differ from plain content.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: _symbols2.default.itemsChanged,


      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function value() {
        var _this2 = this;

        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // Perform per-item initialization.
        Array.prototype.forEach.call(this.items, function (item) {
          if (!item[itemInitializedSymbol]) {
            _this2[_symbols2.default.itemAdded](item);
            item[itemInitializedSymbol] = true;
          }
        });

        this.dispatchEvent(new CustomEvent('items-changed'));
      }

      /**
       * Fires when the items in the list change.
       *
       * @memberof ContentItems
       * @event items-changed
       */

    }, {
      key: 'items',
      get: function get() {
        var items = void 0;
        if (this[itemsSymbol] == null) {
          items = filterAuxiliaryElements(this.content);
          // Note: test for *equality* with null; don't treat undefined as a match.
          if (this[itemsSymbol] === null) {
            // Memoize the set of items.
            this[itemsSymbol] = items;
          }
        } else {
          // Return the memoized items.
          items = this[itemsSymbol];
        }
        return items;
      }
    }]);

    return ContentItems;
  }(base);

  return ContentItems;
};

// Return the given elements, filtering out auxiliary elements that aren't
// typically visible. Items which are not elements are returned as is.


function filterAuxiliaryElements(items) {
  var auxiliaryTags = ['link', 'script', 'style', 'template'];
  return [].filter.call(items, function (item) {
    return !item.localName || auxiliaryTags.indexOf(item.localName) < 0;
  });
}

},{"./createSymbol":21,"./symbols":24,"./toggleClass":25}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DirectionSelection. */
exports.default = function (base) {

  /**
   * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
   * semantics (selectPrevious, selectNext, etc.).
   *
   * This mixin can be used in conjunction with
   * [KeyboardDirectionMixin](KeyboardDirectionMixin.md) (which maps keyboard
   * events to directions) and a mixin that handles selection like
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var DirectionSelection = function (_base) {
    _inherits(DirectionSelection, _base);

    function DirectionSelection() {
      _classCallCheck(this, DirectionSelection);

      return _possibleConstructorReturn(this, (DirectionSelection.__proto__ || Object.getPrototypeOf(DirectionSelection)).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: _symbols2.default.goDown,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this).call(this);
        }
        return this.selectPrevious();
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectFirst',


      // Default implementation. This will typically be handled by other mixins.
      value: function selectFirst() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectFirst', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectLast',
      value: function selectLast() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectLast', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectNext', this).call(this);
        }
      }

      // Default implementation. This will typically be handled by other mixins.

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this)) {
          return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectPrevious', this).call(this);
        }
      }

      // Map drag travel fraction to selection fraction.

    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', this);
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'selectedFraction', value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), 'travelFraction', value, this);
        }
        this.selectedFraction = value;
      }
    }]);

    return DirectionSelection;
  }(base);

  return DirectionSelection;
};

},{"./symbols":24}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _microtask = require('./microtask');

var _microtask2 = _interopRequireDefault(_microtask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with DistributedChildrenContent. */
exports.default = function (base) {

  /**
   * Mixin which defines a component's content as its children, expanding any
   * nodes distributed to the component's slots.
   *
   * This also provides notification of changes to a component's content. It
   * will invoke a `contentChanged` method when the component is first
   * instantiated, and whenever its distributed children change. This is an
   * easy way to satisfy the Gold Standard checklist item for monitoring
   * [Content Changes](https://github.com/webcomponents/gold-standard/wiki/Content-Changes).
   *
   * Example:
   *
   * ```
   * let base = DistributedChildrenContentMixin(DistributedChildrenMixin(HTMLElement));
   * class CountingElement extends base {
   *
   *   constructor() {
   *     super();
   *     let root = this.attachShadow({ mode: 'open' });
   *     root.innerHTML = `<slot></slot>`;
   *   }
   *
   *   contentChanged() {
   *     // Count the component's children, both initially and when changed.
   *     this.count = this.distributedChildren.length;
   *   }
   *
   * }
   * ```
   *
   * Note that content change detection depends upon the element having at least
   * one `slot` element in its shadow subtree.
   *
   * This mixin is intended for use with the
   * [DistributedChildrenMixin](DistributedChildrenMixin.md). See that mixin for
   * a discussion of how that works. This DistributedChildrenContentMixin
   * provides an easy way of defining the "content" of a component as the
   * component's distributed children. That in turn lets mixins like
   * [ContentItemsMixin](ContentItemsMixin.md) manipulate the children as list
   * items.
   */
  var DistributedChildrenContent = function (_base) {
    _inherits(DistributedChildrenContent, _base);

    function DistributedChildrenContent() {
      _classCallCheck(this, DistributedChildrenContent);

      var _this = _possibleConstructorReturn(this, (DistributedChildrenContent.__proto__ || Object.getPrototypeOf(DistributedChildrenContent)).call(this));

      if (_this.shadowRoot) {
        // Listen to changes on all slots.
        var slots = _this.shadowRoot.querySelectorAll('slot');
        slots.forEach(function (slot) {
          return slot.addEventListener('slotchange', function (event) {
            _this.contentChanged();
          });
        });
      }

      // Make an initial call to contentChanged() so that the component can do
      // initialization that it normally does when content changes.
      //
      // This will invoke contentChanged() handlers in other mixins. In order
      // that those mixins have a chance to complete their own initialization,
      // we add the contentChanged() call to the microtask queue.
      (0, _microtask2.default)(function () {
        return _this.contentChanged();
      });
      return _this;
    }

    /**
     * Invoked when the contents of the component (including distributed
     * children) have changed.
     *
     * This method is also invoked when a component is first instantiated; the
     * contents have essentially "changed" from being nothing. This allows the
     * component to perform initial processing of its children.
     */


    _createClass(DistributedChildrenContent, [{
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'contentChanged', this)) {
          _get(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }

      /**
       * The content of this component, defined to be the flattened array of
       * children distributed to the component.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: 'content',
      get: function get() {
        var distributedChildren = this.distributedChildren;
        if (typeof distributedChildren === 'undefined') {
          console.warn('DistributedChildrenContentMixin expects the component to define a "distributedChildren" property.');
        }
        return distributedChildren;
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(DistributedChildrenContent.prototype.__proto__ || Object.getPrototypeOf(DistributedChildrenContent.prototype), 'content', value, this);
        }
        // TODO: Set the children to the given value (which should be an array of
        // elements)?
      }

      /**
       * This event is raised when the component's contents (including distributed
       * children) have changed.
       *
       * @memberof DistributedChildrenContent
       * @event content-changed
       */

    }]);

    return DistributedChildrenContent;
  }(base);

  return DistributedChildrenContent;
};

},{"./microtask":22}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return _possibleConstructorReturn(this, (DistributedChildren.__proto__ || Object.getPrototypeOf(DistributedChildren)).apply(this, arguments));
    }

    _createClass(DistributedChildren, [{
      key: 'distributedChildren',


      /**
       * An in-order collection of distributed children, expanding any slot
       * elements. Like the standard children property, this skips text nodes.
       *
       * @type {HTMLElement[]}
       */
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /**
       * An in-order collection of distributed child nodes, expanding any slot
       * elements. Like the standard childNodes property, this includes text
       * nodes.
       *
       * @type {Node[]}
       */

    }, {
      key: 'distributedChildNodes',
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /**
       * The concatenated text content of all distributed child nodes, expanding
       * any slot elements.
       *
       * @type {string}
       */

    }, {
      key: 'distributedTextContent',
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
    // we do a simplistic check to see if the tag name is "slot".
    var isSlot = typeof HTMLSlotElement !== 'undefined' ? node instanceof HTMLSlotElement : node.localName === 'slot';
    if (isSlot) {
      // Use the nodes assigned to this node instead.
      var assignedNodes = node.assignedNodes({ flatten: true });
      return assignedNodes ? expandContentElements(assignedNodes, includeTextNodes) : [];
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = mixin;

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var selectedFractionSymbol = (0, _createSymbol2.default)('selectedFraction');

/* Exported function extends a base class with FractionalSelection. */
function mixin(base) {

  /**
   * Adds support for fractional selection: treating a selection as a real
   * number that combines an integer portion (an index into a list), and a
   * fraction (indicating how far of the way we are to the next or previous
   * item).
   *
   * This is useful in components that support incremental operations during
   * dragging and swiping. Example: a carousel component has several items, and the
   * currently selected item is item 3. The user begins swiping to the left,
   * moving towards selecting item 4. Halfway through this operation, the
   * fractional selection value is 3.5.
   *
   * This value permits communication between mixins like
   * [SwipeDirectionMixin](./SwipeDirectionMixin.md) and
   * [TrackpadDirectionMixin](./TrackpadDirectionMixin.md), which generate
   * fractional selection values, and mixins like
   * [SelectionAnimationMixin](./SelectionAnimationMixin.md), which can render
   * selection at a fractional value.
   */
  var FractionalSelection = function (_base) {
    _inherits(FractionalSelection, _base);

    function FractionalSelection() {
      _classCallCheck(this, FractionalSelection);

      return _possibleConstructorReturn(this, (FractionalSelection.__proto__ || Object.getPrototypeOf(FractionalSelection)).apply(this, arguments));
    }

    _createClass(FractionalSelection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this)) {
          _get(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'connectedCallback', this).call(this);
        }
        this.selectedFraction = 0;
      }

      /**
       * A fractional value indicating how far the user has currently advanced to
       * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
       * user is halfway between items 3 and 4.
       *
       * @type {number}
       */

    }, {
      key: 'selectedFraction',
      get: function get() {
        return this[selectedFractionSymbol];
      },
      set: function set(value) {
        this[selectedFractionSymbol] = value;
        if ('selectedFraction' in base.prototype) {
          _set(FractionalSelection.prototype.__proto__ || Object.getPrototypeOf(FractionalSelection.prototype), 'selectedFraction', value, this);
        }
        var event = new CustomEvent('selected-fraction-changed');
        this.dispatchEvent(event);
      }
    }]);

    return FractionalSelection;
  }(base);

  return FractionalSelection;
}

mixin.helpers = {

  /*
   * Dampen a selection that goes past the beginning or end of a list. This is
   * generally used to produce a visual effect of tension as the user tries to
   * go further in a direction that has no more items.
   *
   * Example: suppose `itemCount` is 5, indicating a list of 5 items. The index of
   * the last item is 4. If the `selection` parameter is 4.5, the user is trying
   * to go past this last item. When a damping function is applied, the resulting
   * value will be less than 4.5 (the actual value will be 4.25). When this
   * selection state is rendered, the user will see that, each unit distance the
   * drag travels has less and less visible effect. This is perceived as tension.
   *
   * @param {number} selection - A real number indicating a selection position
   * @param {number} itemCount - An integer for the number of items in the list
   * @returns {number} A real number representing the damped selection value.
   */
  dampedSelection: function dampedSelection(selection, itemCount) {
    var bound = itemCount - 1;
    var damped = void 0;
    if (selection < 0) {
      // Trying to go past beginning of list. Apply tension from the left edge.
      damped = -mixin.helpers.damping(-selection);
    } else if (selection >= bound) {
      // Trying to go past end of list. Apply tension from the right edge.
      damped = bound + mixin.helpers.damping(selection - bound);
    } else {
      // No damping required.
      damped = selection;
    }
    return damped;
  },


  /*
   * Calculate damping as a function of the distance past the minimum/maximum
   * values.
   *
   * We want to asymptotically approach an absolute minimum of 1 unit
   * below/above the actual minimum/maximum. This requires calculating a
   * hyperbolic function.
   *
   * See http://www.wolframalpha.com/input/?i=y+%3D+-1%2F%28x%2B1%29+%2B+1
   * for the one we use. The only portion of that function we care about is when
   * x is zero or greater. An important consideration is that the curve be
   * tangent to the diagonal line x=y at (0, 0). This ensures smooth continuity
   * with the normal drag behavior, in which the visible sliding is linear with
   * the distance the touchpoint has been dragged.
   */
  damping: function damping(x) {
    var y = -1 / (x + 1) + 1;
    return y;
  },


  /*
   * Return the current fractional selection value for the given element.
   *
   * This simply adds the element's `selectedIndex` and `selectedFraction`
   * properties.
   *
   * @param {HTMLElement} element - An element that supports selection
   */
  elementSelection: function elementSelection(element) {
    var selectedIndex = element.selectedIndex;
    if (selectedIndex < 0) {
      // No selection
      return;
    }
    var selectedFraction = element.selectedFraction || 0;
    return selectedIndex + selectedFraction;
  },


  /*
   * Breaks a fractional selection into its integer and fractional parts.
   *
   * Example: if passed 3.5, this returns { index: 3, fraction: 5 }.
   *
   * @param {number} selection – A real number representing a selection point
   * @returns {object} - An object with an `index` property holding the
   * selection's integer component, and a `fraction` property holding the
   * selection's fractional component.
   */
  selectionParts: function selectionParts(selection) {
    // Stupid IE doesn't have Math.trunc.
    // const index = Math.trunc(selection);
    var index = selection < 0 ? Math.ceil(selection) : Math.floor(selection);
    var fraction = selection - index;
    return { index: index, fraction: fraction };
  },


  /*
   * Returns a fractional selection point after accounting for wrapping, ensuring
   * that the integer portion of the selection stays between 0 and `itemCount`-1.
   * That is, the integer portion will always be a valid index into the list.
   *
   * Example of wrapping past the end of the list: if `selection` is 5.5 and
   * `itemCount` is 5, this returns 0.5. Example of wrapping past the beginning of
   * the list: if `selection` is 0.5 and `itemCount` is 5, this returns 4.5.
   *
   * @param {number} selection - A real number representing a selection point
   * @param {number} itemCount - The number of items in the list
   * @returns {number} - The result of wrapping the selection point
   */
  wrappedSelection: function wrappedSelection(selection, itemCount) {
    // Handles possibility of negative mod.
    // See http://stackoverflow.com/a/18618250/76472
    return (selection % itemCount + itemCount) % itemCount;
  },


  /*
   * Return the parts of a selection, first wrapping if necessary.
   *
   * @param {number} selection – A real number representing a selection point
   * @param {number} itemCount - The number of items in the list
   * @param {boolean} wrap – True if the selection should wrap to stay within the
   * list
   * @returns {object} – The parts of the selection, using the same format as
   * `selectionParts`.
   */
  wrappedSelectionParts: function wrappedSelectionParts(selection, itemCount, wrap) {
    if (wrap) {
      selection = mixin.helpers.wrappedSelection(selection, itemCount);
    }
    return mixin.helpers.selectionParts(selection);
  }
};

},{"./createSymbol":21}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DirectionSelectionMixin = require('../../basic-component-mixins/src/DirectionSelectionMixin');

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = require('../../basic-component-mixins/src/KeyboardDirectionMixin');

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = require('../../basic-component-mixins/src/KeyboardMixin');

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _SwipeDirectionMixin = require('../../basic-component-mixins/src/SwipeDirectionMixin');

var _SwipeDirectionMixin2 = _interopRequireDefault(_SwipeDirectionMixin);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TrackpadDirectionMixin = require('../../basic-component-mixins/src/TrackpadDirectionMixin');

var _TrackpadDirectionMixin2 = _interopRequireDefault(_TrackpadDirectionMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (base) {

  var mixins = [_DirectionSelectionMixin2.default, _KeyboardMixin2.default, _KeyboardDirectionMixin2.default, _SwipeDirectionMixin2.default, _TrackpadDirectionMixin2.default];

  // Don't assume base class uses ComposableMixin. Do composition by hand.
  var baseWithMixins = mixins.reduce(function (c, mixin) {
    return mixin(c);
  }, base);

  /**
   * @mixes KeyboardMixin
   * @mixes KeyboardDirectionMixin
   * @mixes SwipeDirectionMixin
   * @mixes TrackpadDirectionMixin
   */

  var HorizontalNavigation = function (_baseWithMixins) {
    _inherits(HorizontalNavigation, _baseWithMixins);

    function HorizontalNavigation() {
      _classCallCheck(this, HorizontalNavigation);

      return _possibleConstructorReturn(this, (HorizontalNavigation.__proto__ || Object.getPrototypeOf(HorizontalNavigation)).apply(this, arguments));
    }

    _createClass(HorizontalNavigation, [{
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(HorizontalNavigation.prototype.__proto__ || Object.getPrototypeOf(HorizontalNavigation.prototype), _symbols2.default.defaults, this) || {};
        defaults.navigationAxis = 'horizontal';
        defaults.selectionAnimationEffect = 'slideWithGap';
        // defaults.selectionRequired = true;
        return defaults;
      }
    }]);

    return HorizontalNavigation;
  }(baseWithMixins);

  return HorizontalNavigation;
};

},{"../../basic-component-mixins/src/DirectionSelectionMixin":7,"../../basic-component-mixins/src/KeyboardDirectionMixin":12,"../../basic-component-mixins/src/KeyboardMixin":13,"../../basic-component-mixins/src/SwipeDirectionMixin":19,"../../basic-component-mixins/src/TrackpadDirectionMixin":20,"../../basic-component-mixins/src/symbols":24}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var navigationAxisSymbol = (0, _createSymbol2.default)('navigationAxis');

/* Exported function extends a base class with KeyboardDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
   * (go left, go right, etc.).
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use [KeyboardMixin](KeyboardMixin.md) for that
   * purpose, or wire up your own keyboard handling and call `keydown` yourself.
   *
   * This mixin calls methods such as `goLeft` and `goRight`. You can define
   * what that means by implementing those methods yourself. If you want to use
   * direction keys to navigate a selection, use this mixin with
   * [DirectionSelectionMixin](DirectionSelectionMixin.md).
   */
  var KeyboardDirection = function (_base) {
    _inherits(KeyboardDirection, _base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (KeyboardDirection.__proto__ || Object.getPrototypeOf(KeyboardDirection)).call(this));

      if (typeof _this.navigationAxis === 'undefined') {
        _this.navigationAxis = _this[_symbols2.default.defaults].navigationAxis;
      }
      return _this;
    }

    _createClass(KeyboardDirection, [{
      key: _symbols2.default.goDown,


      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this).call(this);
        }
      }

      /**
       * Indicates the direction of permitted navigation with the keyboard.
       *
       * Accepted values are "horizontal", "vertical", or "both" (the default).
       * If this property is "horizontal", the Up Arrow and Down Arrow keys will
       * be ignored. Conversely, if this is "vertical", the Left Arrow and Right
       * Arrow keys will be ignored.
       *
       * @type {string}
       */

    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;

        var axis = this.navigationAxis;
        var horizontal = axis === 'horizontal' || axis === 'both';
        var vertical = axis === 'vertical' || axis === 'both';

        // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
        // as the user may be trying to navigate back or forward in the browser.
        switch (event.keyCode) {
          case 35:
            // End
            handled = this[_symbols2.default.goEnd]();
            break;
          case 36:
            // Home
            handled = this[_symbols2.default.goStart]();
            break;
          case 37:
            // Left
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goLeft]();
            }
            break;
          case 38:
            // Up
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goStart]() : this[_symbols2.default.goUp]();
            }
            break;
          case 39:
            // Right
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goRight]();
            }
            break;
          case 40:
            // Down
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goEnd]() : this[_symbols2.default.goDown]();
            }
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this) && _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this).call(this, event);
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.defaults, this) || {};
        defaults.navigationAxis = 'both';
        return defaults;
      }
    }, {
      key: 'navigationAxis',
      get: function get() {
        return this[navigationAxisSymbol];
      },
      set: function set(value) {
        this[navigationAxisSymbol] = value;
        if ('navigationAxis' in base.prototype) {
          _set(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), 'navigationAxis', value, this);
        }
      }
    }]);

    return KeyboardDirection;
  }(base);

  return KeyboardDirection;
};

},{"./createSymbol":21,"./symbols":24}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with Keyboard. */
exports.default = function (base) {

  /**
   * Mixin which manages the keydown handling for a component.
   *
   * This mixin handles several keyboard-related features.
   *
   * First, it wires up a single keydown event handler that can be shared by
   * multiple mixins on a component. The event handler will invoke a `keydown`
   * method with the event object, and any mixin along the prototype chain that
   * wants to handle that method can do so.
   *
   * If a mixin wants to indicate that keyboard event has been handled, and that
   * other mixins should *not* handle it, the mixin's `keydown` handler should
   * return a value of true. The convention that seems to work well is that a
   * mixin should see if it wants to handle the event and, if not, then ask the
   * superclass to see if it wants to handle the event. This has the effect of
   * giving the mixin that was applied last the first chance at handling a
   * keyboard event.
   *
   * Example:
   *
   *     [symbols.keydown](event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
   *     }
   *
   * A second feature provided by this mixin is that it implicitly makes the
   * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
   * has the effect of adding the component to the tab order in document order.
   */
  var Keyboard = function (_base) {
    _inherits(Keyboard, _base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

      _this.addEventListener('keydown', function (event) {
        var handled = _this[_symbols2.default.keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
      return _this;
    }

    _createClass(Keyboard, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
        }
        if (this.getAttribute('tabindex') == null && this[_symbols2.default.defaults].tabindex !== null) {
          this.setAttribute('tabindex', this[_symbols2.default.defaults].tabindex);
        }
      }
    }, {
      key: _symbols2.default.keydown,


      /**
       * Handle the indicated keyboard event.
       *
       * The default implementation of this method does nothing. This will
       * typically be handled by other mixins.
       *
       * @param {KeyboardEvent} event - the keyboard event
       * @return {boolean} true if the event was handled
       */
      value: function value(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this).call(this, event);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.defaults, this) || {};
        // The default tab index is 0 (document order).
        defaults.tabindex = 0;
        return defaults;
      }
    }]);

    return Keyboard;
  }(base);

  return Keyboard;
};

},{"./symbols":24}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = mixin;

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _FractionalSelectionMixin = require('./FractionalSelectionMixin');

var _FractionalSelectionMixin2 = _interopRequireDefault(_FractionalSelectionMixin);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var animationSymbol = (0, _createSymbol2.default)('animation');
var draggingSymbol = (0, _createSymbol2.default)('dragging');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var playingAnimationSymbol = (0, _createSymbol2.default)('animatingSelection');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationEffectSymbol = (0, _createSymbol2.default)('selectionAnimationEffect');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');
var resetAnimationsOnNextRenderSymbol = (0, _createSymbol2.default)('resetAnimationsOnNextRender');

/* Exported function extends a base class with SelectionAnimation. */
function mixin(base) {

  /**
   * Mixin which uses animation to show transitions between selection states.
   *
   * This mixin can be used by components that want to provide visible
   * animations when changing the selection. For example, a carousel component
   * may want to define a sliding animation effect shown when moving between
   * items.
   *
   * The animation is defined by a `selectionAnimationKeyframes` property; see
   * that property for details on how to define these keyframes. This animation
   * will be used in two ways. First, when moving strictly between items, the
   * animation will play smoothly to show the selection changing. Second, the
   * animation can be used to render the selection at a fixed point in the
   * transition between states. E.g., if the user pauses halfway through
   * dragging an element using [SwipeDirectionMixin](SwipeDirectionMixin.md)
   * or [TrackpadDirectionMixin](TrackpadDirectionMixin.md)s, then the selection
   * animation will be shown at the point exactly halfway through.
   *
   * This mixin expects a component to provide an `items` array of all elements
   * in the list, which can be provided via
   * [ContentItemsMixin](ContentItemsMixin.md). This mixin also expects
   * `selectedIndex` and `selectedItem` properties, which can be provided via
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   *
   * This mixin supports a `selectionWraps` property. When true, the user can
   * navigate forward from the last item in the list and wrap around to the
   * first item, or navigate backward from the first item and wrap around to the
   * last item.
   *
   * This mixin uses the Web Animations API. For use on browsers which
   * do not support that API natively, you will need to load the
   * [Web Animations polyfill](https://github.com/web-animations/web-animations-js).
   */
  var SelectionAnimation = function (_base) {
    _inherits(SelectionAnimation, _base);

    function SelectionAnimation() {
      _classCallCheck(this, SelectionAnimation);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SelectionAnimation.__proto__ || Object.getPrototypeOf(SelectionAnimation)).call(this));

      if (typeof _this.selectionAnimationDuration === 'undefined') {
        _this.selectionAnimationDuration = _this[_symbols2.default.defaults].selectionAnimationDuration;
      }
      if (typeof _this.selectionAnimationEffect === 'undefined' && _this.selectionAnimationKeyframes == null) {
        _this.selectionAnimationEffect = _this[_symbols2.default.defaults].selectionAnimationEffect;
      }

      _this[_symbols2.default.dragging] = false;
      return _this;
    }

    _createClass(SelectionAnimation, [{
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        // We mark new items in the list as explicitly visible to ARIA. Otherwise,
        // when an item isn't visible on the screen, ARIA will assume the item is
        // of no interest to the user, and leave it out of the accessibility tree.
        // If the list contains 10 items, but only 3 are visible, a screen reader
        // might then announce the list only has 3 items. To ensure that screen
        // readers and other assistive technologies announce the correct total
        // number of items, we explicitly mark all items as not hidden. This will
        // expose them all in the accessibility tree, even the items which are
        // currently not rendered.
        //
        // TODO: Generally speaking, this entire mixin assumes that the user can
        // navigate through all items in a list. But an app could style an item as
        // display:none or visibility:hidden because the user is not allowed to
        // interact with that item at the moment. Support for this scenario should
        // be added. This would entail changing all locations where a mixin
        // function is counting items, iterating over the (visible) items, and
        // showing or hiding items. Among other things, the code below to make
        // items visible to ARIA would need to discriminate between items which
        // are invisible because of animation state, or invisible because the user
        // shouldn't interact with them.
        item.setAttribute('aria-hidden', false);
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.itemsChanged, this)) {
          _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        _resetAnimations(this);

        // TODO: Also reset our notion of the last rendered selection? This comes
        // up when a DOM removal causes the selected item to change position.
        // this[previousSelectionSymbol] = null;

        renderSelection(this);
      }
    }, {
      key: 'resetAnimations',
      value: function resetAnimations() {
        _resetAnimations(this);
      }

      /**
       * A fractional value indicating how far the user has currently advanced to
       * the next/previous item. E.g., a `selectedFraction` of 3.5 indicates the
       * user is halfway between items 3 and 4.
       *
       * For more details, see [FractionalSelectionMixin](FractionalSelectionMixin.md)
       * mixin.
       *
       * @type {number}
       */

    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionAnimationDuration = 250;
        defaults.selectionAnimationEffect = 'slide';
        return defaults;
      }

      /*
       * Provide backing for the dragging property.
       * Also, when a drag begins, reset the animations.
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return this[draggingSymbol];
      },
      set: function set(value) {
        var previousValue = this[_symbols2.default.dragging];
        this[draggingSymbol] = value;
        if (_symbols2.default.dragging in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.dragging, value, this);
        }
        if (value && !previousValue) {
          // Have begun a drag.
          this[resetAnimationsOnNextRenderSymbol] = true;
        }
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', this) || 0;
      },
      set: function set(value) {
        if ('selectedFraction' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedFraction', value, this);
        }
        renderSelection(this, this.selectedIndex, value);
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectedIndex', index, this);
        }
        renderSelection(this, index, 0);
      }

      /**
       * The duration of a selection animation in milliseconds.
       *
       * This measures the amount of time required for a selection animation to
       * complete. This number remains constant, even if the number of items being
       * animated increases.
       *
       * The default value is 250 milliseconds (a quarter a second).
       *
       * @type {number}
       * @default 250
       */

    }, {
      key: 'selectionAnimationDuration',
      get: function get() {
        return this[selectionAnimationDurationSymbol];
      },
      set: function set(value) {
        this[selectionAnimationDurationSymbol] = value;
        if ('selectionAnimationDuration' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationDuration', value, this);
        }
      }

      /**
       * The name of a standard selection animation effect.
       *
       * This is a shorthand for setting the `selectionAnimationKeyframes`
       * property to standard keyframes. Supported string values:
       *
       * * "crossfade"
       * * "reveal"
       * * "revealWithFade"
       * * "showAdjacent"
       * * "slide"
       * * "slideWithGap"
       *
       * @type {string}
       * @default "slide"
       */

    }, {
      key: 'selectionAnimationEffect',
      get: function get() {
        return this[selectionAnimationEffectSymbol];
      },
      set: function set(value) {
        this[selectionAnimationEffectSymbol] = value;
        if ('selectionAnimationEffect' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationEffect', value, this);
        }
        this.selectionAnimationKeyframes = mixin.standardEffectKeyframes[value];
      }

      /**
       * The keyframes that define an animation that plays for an item when moving
       * forward in the sequence.
       *
       * This is an array of CSS rules that will be applied. These are used as
       * [keyframes](http://w3c.github.io/web-animations/#keyframes-section)
       * to animate the item with the
       * [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/animation).
       *
       * The animation represents the state of the next item as it moves from
       * completely unselected (offstage, usually right), to selected (center
       * stage), to completely unselected (offstage, usually left). The center time
       * of the animation should correspond to the item's quiscent selected state,
       * typically in the center of the stage and at the item's largest size.
       *
       * The default forward animation is a smooth slide at full size from right to
       * left.
       *
       * When moving the selection backward, this animation is played in reverse.
       *
       * @type {cssRules[]}
       */

    }, {
      key: 'selectionAnimationKeyframes',
      get: function get() {
        // Standard animation slides left/right, keeps adjacent items out of view.
        return this[selectionAnimationKeyframesSymbol];
      },
      set: function set(value) {
        this[selectionAnimationKeyframesSymbol] = value;
        if ('selectionAnimationKeyframes' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionAnimationKeyframes', value, this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }, {
      key: 'selectionWraps',
      get: function get() {
        return _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', this);
      },
      set: function set(value) {
        if ('selectionWraps' in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), 'selectionWraps', value, this);
        }
        _resetAnimations(this);
        renderSelection(this);
      }
    }]);

    return SelectionAnimation;
  }(base);

  return SelectionAnimation;
}

// We expose helpers on the mixin function that we want to be able to unit test.
// Since these are on the function, not on the class emitted by the function,
// they don't end up getting exposed on actual element instances.
mixin.helpers = {

  /*
   * Calculate the animation fractions for an element's items at the given
   * selection point. This is used when rendering the element's selection state
   * instantaneously.
   *
   * This function considers the selectedIndex parameter, which can be a whole
   * or fractional number, and determines which items will be visible at that
   * index. This function then calculates a corresponding animation fraction: a
   * number between 0 and 1 indicating how far through the selection animation
   * an item should be shown, or null if the item should not be visible at that
   * selection index. These fractions are returned as an array, where the
   * animation fraction at position N corresponds to how item N should be shown.
   */
  animationFractionsForSelection: function animationFractionsForSelection(element, selection) {

    var items = element.items;
    if (!items) {
      return;
    }

    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;

    return items.map(function (item, itemIndex) {
      // How many steps from the selection point to this item?
      var steps = stepsToIndex(itemCount, selectionWraps, selection, itemIndex);
      // To convert steps to animation fraction:
      // steps      animation fraction
      //  1         0     (stage right)
      //  0         0.5   (center stage)
      // -1         1     (stage left)
      var animationFraction = (1 - steps) / 2;
      return animationFraction >= 0 && animationFraction <= 1 ? animationFraction : null; // Outside animation range
    });
  },


  /*
   * Calculate the animation timings that should be used to smoothly animate the
   * element's items from one selection state to another.
   *
   * This returns an array of timings, where the timing at position N should be
   * used to animate item N. If an item's timing is null, then that item should
   * not take place in the animation, and should be hidden instead.
   */
  effectTimingsForSelectionAnimation: function effectTimingsForSelectionAnimation(element, fromSelection, toSelection) {

    var items = element.items;
    if (!items) {
      return;
    }
    var itemCount = items.length;
    var selectionWraps = element.selectionWraps;
    var toIndex = _FractionalSelectionMixin2.default.helpers.wrappedSelectionParts(toSelection, itemCount, selectionWraps).index;
    var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
    var direction = totalSteps >= 0 ? 'normal' : 'reverse';
    var fill = 'both';
    var totalDuration = element.selectionAnimationDuration;
    var stepDuration = totalSteps !== 0 ? totalDuration * 2 / Math.ceil(Math.abs(totalSteps)) : 0; // No steps required, animation will be instantenous.

    var timings = items.map(function (item, itemIndex) {
      var steps = stepsToIndex(itemCount, selectionWraps, itemIndex, toSelection);
      // If we include this item in the staggered sequence of animations we're
      // creating, where would the item appear in the sequence?
      var positionInSequence = totalSteps - steps;
      if (totalSteps < 0) {
        positionInSequence = -positionInSequence;
      }
      // So, is this item really included in the sequence?
      if (Math.ceil(positionInSequence) >= 0 && positionInSequence <= Math.abs(totalSteps)) {
        // Note that delay for first item will be negative. That will cause
        // the animation to start halfway through, which is what we want.
        var delay = stepDuration * (positionInSequence - 1) / 2;
        var endDelay = itemIndex === toIndex ? -stepDuration / 2 : // Stop halfway through.
        0; // Play animation until end.
        return { duration: stepDuration, direction: direction, fill: fill, delay: delay, endDelay: endDelay };
      } else {
        return null;
      }
    });

    return timings;
  }
};

// Keyframes for standard selection animation effects.
mixin.standardEffectKeyframes = {

  // Simple crossfade
  crossfade: [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }],

  // Reveal, as if sliding the top card off a deck of cards
  reveal: [{ transform: 'translateX(0%)', zIndex: 0 }, { transform: 'translateX(0%)', zIndex: 1 }, { transform: 'translateX(-100%)', zIndex: 2 }],

  // Google Photos-style reveal-with-fade animation
  revealWithFade: [{ transform: 'translateX(0%) scale(0.75)', opacity: 0, zIndex: 0 }, { transform: 'translateX(0%) scale(1.0)', opacity: 1, zIndex: 1 }, { transform: 'translateX(-100%) scale(1.0)', opacity: 1, zIndex: 2 }],

  // Carousel variant with a bit of off-stage elements showing
  showAdjacent: [{ transform: 'translateX(78%) scale(0.7)', zIndex: 0 }, { transform: 'translateX(0%) scale(0.82)', zIndex: 1 }, { transform: 'translateX(-78%) scale(0.7)', zIndex: 0 }],

  // Simple slide
  slide: [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],

  // Slide, with a gap between
  slideWithGap: [{ transform: 'translateX(110%)' }, { transform: 'translateX(-110%)' }]

};

/*
 * Smoothly animate the selection between the indicated "from" and "to"
 * indices. The former can be a fraction, e.g., when the user releases a finger
 * to complete a touch drag, and the selection will snap to the closest whole
 * index.
 */
function animateSelection(element, fromSelection, toSelection) {

  _resetAnimations(element);

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[playingAnimationSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);

  // Figure out which item will be the one *after* the one we're selecting.
  var itemCount = items.length;
  var selectionWraps = element.selectionWraps;
  var selectionIndex = _FractionalSelectionMixin2.default.helpers.selectionParts(toSelection, itemCount, selectionWraps).index;
  var totalSteps = stepsToIndex(itemCount, selectionWraps, fromSelection, toSelection);
  var forward = totalSteps >= 0;
  var nextUpIndex = selectionIndex + (forward ? 1 : -1);
  if (selectionWraps) {
    nextUpIndex = _FractionalSelectionMixin2.default.helpers.wrappedSelection(nextUpIndex, itemCount);
  } else if (!isItemIndexInBounds(element, nextUpIndex)) {
    nextUpIndex = null; // At start/end of list; don't have a next item to show.
  }

  // Play the animations using those timings.
  var lastAnimationDetails = void 0;
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);
      element[animationSymbol][index] = animation;
      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
      if (timing.endDelay !== 0) {
        // This is the animation for the item that will be left selected.
        // We want to clean up when this animation completes.
        lastAnimationDetails = { animation: animation, index: index, timing: timing, forward: forward };
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails != null) {
    // Arrange for clean-up work to be performed.
    lastAnimationDetails.nextUpIndex = nextUpIndex;
    lastAnimationDetails.animation.onfinish = function (event) {
      return selectionAnimationFinished(element, lastAnimationDetails);
    };
    element[lastAnimationSymbol] = lastAnimationDetails.animation;
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[playingAnimationSymbol] = false;
  }
}

function getAnimationForItemIndex(element, index) {
  if (element[animationSymbol] == null) {
    // Not ready yet;
    return null;
  }
  var animation = element[animationSymbol][index];
  if (!animation) {
    var item = element.items[index];
    animation = item.animate(element.selectionAnimationKeyframes, {
      duration: element.selectionAnimationDuration,
      fill: 'both'
    });
    animation.pause();
    element[animationSymbol][index] = animation;
  }
  return animation;
}

function isItemIndexInBounds(element, index) {
  return index >= 0 && element.items && index < element.items.length;
}

/*
 * Render the selection state of the element.
 *
 * This can be used to re-render a previous selection state (if the
 * selectedIndex param is omitted), render the selection instantly at a given
 * whole or fractional selection index, or animate to a given selection index.
 *
 * There are several distinct scenarios we need to cover:
 *
 * 1. Initial positioning, or repositioning after changing a property like
 *    selectionAnimationKeyframes that affects rendering.
 * 2. Animate on selectedIndex change. This should override any animation/swipe
 *    already in progress.
 * 3. Instantly render the current position of a drag operation in progress.
 * 4. Complete a drag operation. If the drag wasn't far enough to affect
 *    selection, we'll just be restoring the selectedFraction to 0.
 *
 * If the list does not wrap, any selection position outside the list's bounds
 * will be damped to produce a visual effect of tension.
 */
function renderSelection(element) {
  var selectedIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.selectedIndex;
  var selectedFraction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : element.selectedFraction;

  var itemCount = element.items ? element.items.length : 0;
  if (itemCount === 0) {
    // Nothing to render.
    return;
  }
  if (selectedIndex < 0) {
    // TODO: Handle no selection.
    return;
  }
  var selection = selectedIndex + selectedFraction;
  if (element.selectionWraps) {
    // Apply wrapping to ensure consistent representation of selection.
    selection = _FractionalSelectionMixin2.default.helpers.wrappedSelection(selection, itemCount);
  } else {
    // Apply damping if necessary.
    selection = _FractionalSelectionMixin2.default.helpers.dampedSelection(selection, itemCount);
  }
  var previousSelection = element[previousSelectionSymbol];
  // TODO: If an item changes position in the DOM, we end up animating from
  // its old index to its new index, but we really don't want to animate at all.
  if (!element[_symbols2.default.dragging] && previousSelection != null && previousSelection !== selection) {
    // Animate selection from previous state to new state.
    animateSelection(element, previousSelection, selection);
  } else if (selectedFraction === 0 && element[playingAnimationSymbol]) {
    // Already in process of animating to fraction 0. During that process,
    // ignore subsequent attempts to renderSelection to fraction 0.
    return;
  } else {
    // Render current selection state instantly.
    renderSelectionInstantly(element, selection);
  }
  element[previousSelectionSymbol] = selection;
}

/*
 * Instantly render (don't animate) the element's items at the given whole or
 * fractional selection index.
 */
function renderSelectionInstantly(element, toSelection) {
  if (element[resetAnimationsOnNextRenderSymbol]) {
    _resetAnimations(element);
    element[resetAnimationsOnNextRenderSymbol] = false;
  }
  var animationFractions = mixin.helpers.animationFractionsForSelection(element, toSelection);
  animationFractions.map(function (animationFraction, index) {
    var item = element.items[index];
    if (animationFraction != null) {
      showItem(item, true);
      setAnimationFraction(element, index, animationFraction);
    } else {
      showItem(item, false);
    }
  });
}

/*
 * We maintain an array containing an animation per item. This is used for two
 * reasons:
 *
 * * During a drag operation, we want to be able to reuse animations between
 *   drag updates.
 * * When a selection animation completes, we need to be able to leave the
 *   visibile items in a paused state. Later, we'll want to be able to clean up
 *   those animations.
 *
 * Note that this array is sparse: it will only hold up from 0–3 animations at
 * any given point.
 */
function _resetAnimations(element) {
  var animations = element[animationSymbol];
  if (animations) {
    // Cancel existing animations to remove the effects they're applying.
    animations.forEach(function (animation, index) {
      if (animation) {
        animation.cancel();
        animations[index] = null;
      }
    });
  }
  var itemCount = element.items ? element.items.length : 0;
  if (!animations || animations.length !== itemCount) {
    // Haven't animated before with this number of items; (re)create array.
    element[animationSymbol] = new Array(itemCount);
  }
}

/*
 * The last animation in our selection animation has completed. Clean up.
 */
function selectionAnimationFinished(element, details) {

  // When the last animation completes, show the next item in the direction
  // we're going. Waiting to that until this point is a bit of a hack to avoid
  // having a next item that's higher in the natural z-order obscure other items
  // during animation.
  var nextUpIndex = details.nextUpIndex;
  if (nextUpIndex != null) {
    if (element[animationSymbol][nextUpIndex]) {
      // Cancel existing selection animation so we can construct a new one.
      element[animationSymbol][nextUpIndex].cancel();
      element[animationSymbol][nextUpIndex] = null;
    }
    var animationFraction = details.forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(element.items[nextUpIndex], true);
  }

  element[lastAnimationSymbol].onfinish = null;
  element[playingAnimationSymbol] = false;
}

/*
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  var animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    var duration = element.selectionAnimationDuration;
    if (duration) {
      animation.currentTime = fraction * duration;
    }
  }
}

function showItem(item, flag) {
  item.style.visibility = flag ? 'visible' : 'hidden';
}

/*
 * Figure out how many steps it will take to go from fromSelection to
 * toSelection. To go from item 3 to item 4 is one step.
 *
 * If wrapping is allowed, then going from the last item to the first will take
 * one step (forward), and going from the first item to the last will take one
 * step (backward).
 */
function stepsToIndex(length, allowWrap, fromSelection, toSelection) {
  var steps = toSelection - fromSelection;
  // Wrapping only kicks in when list has more than 1 item.
  if (allowWrap && length > 1) {
    var wrapSteps = length - Math.abs(steps);
    if (wrapSteps <= 1) {
      // Special case
      steps = steps < 0 ? wrapSteps : // Wrap forward from last item to first.
      -wrapSteps; // Wrap backward from first item to last.
    }
  }
  return steps;
}

},{"./FractionalSelectionMixin":10,"./createSymbol":21,"./symbols":24}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Used to assign unique IDs to item elements without IDs.
var idCount = 0;

/* Exported function extends a base class with SelectionAriaActive. */

exports.default = function (base) {

  /**
   * Mixin which treats the selected item in a list as the active item in ARIA
   * accessibility terms.
   *
   * Handling ARIA selection state properly is actually quite complex:
   *
   * * The items in the list need to be indicated as possible items via an ARIA
   *   `role` attribute value such as "option".
   * * The selected item need to be marked as selected by setting the item's
   *   `aria-selected` attribute to true *and* the other items need be marked as
   *   *not* selected by setting `aria-selected` to false.
   * * The outermost element with the keyboard focus needs to have attributes
   *   set on it so that the selection is knowable at the list level via the
   *   `aria-activedescendant` attribute.
   * * Use of `aria-activedescendant` in turn requires that all items in the
   *   list have ID attributes assigned to them.
   *
   * This mixin tries to address all of the above requirements. To that end,
   * this mixin will assign generated IDs to any item that doesn't already have
   * an ID.
   *
   * ARIA relies on elements to provide `role` attributes. This mixin will apply
   * a default role of "listbox" on the outer list if it doesn't already have an
   * explicit role. Similarly, this mixin will apply a default role of "option"
   * to any list item that does not already have a role specified.
   *
   * This mixin expects a set of members that manage the state of the selection:
   * `[symbols.itemSelected]`, `itemAdded`, and `selectedIndex`. You can
   * supply these yourself, or do so via
   * [SingleSelectionMixin](SingleSelectionMixin.md).
   */
  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, (SelectionAriaActive.__proto__ || Object.getPrototypeOf(SelectionAriaActive)).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'connectedCallback', this).call(this);
        }
        // Set default ARIA role.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }
      }
    }, {
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }

        if (!item.getAttribute('role')) {
          // Assign a default ARIA role.
          item.setAttribute('role', 'option');
        }

        // Ensure each item has an ID so we can set aria-activedescendant on the
        // overall list whenever the selection changes.
        //
        // The ID will take the form of a base ID plus a unique integer. The base
        // ID will be incorporate the component's own ID. E.g., if a component has
        // ID "foo", then its items will have IDs that look like "_fooOption1". If
        // the compnent has no ID itself, its items will get IDs that look like
        // "_option1". Item IDs are prefixed with an underscore to differentiate
        // them from manually-assigned IDs, and to minimize the potential for ID
        // conflicts.
        if (!item.id) {
          var baseId = this.id ? "_" + this.id + "Option" : "_option";
          item.id = baseId + idCount++;
        }
      }
    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemSelected, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.id;
        if (itemId && selected) {
          this.setAttribute('aria-activedescendant', itemId);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'listbox';
        return defaults;
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), 'selectedItem', item, this);
        }
        if (item == null) {
          // Selection was removed.
          this.removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return SelectionAriaActive;
  }(base);

  return SelectionAriaActive;
};

},{"./symbols":24}],16:[function(require,module,exports){
'use strict';

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
   * create that tree yourself, or make use of
   * [ShadowTemplateMixin](ShadowTemplateMixin.md).
   *
   * This mixin is inspired by Polymer's [automatic
   * node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
   * feature.
   */
  var ShadowElementReferences = function (_base) {
    _inherits(ShadowElementReferences, _base);

    function ShadowElementReferences() {
      _classCallCheck(this, ShadowElementReferences);

      var _this = _possibleConstructorReturn(this, (ShadowElementReferences.__proto__ || Object.getPrototypeOf(ShadowElementReferences)).call(this));

      if (_this.shadowRoot) {
        // Look for elements in the shadow subtree that have id attributes.
        // An alternatively implementation of this mixin would be to just define
        // a this.$ getter that lazily does this search the first time someone
        // tries to access this.$. That might introduce some complexity – if the
        // the tree changed after it was first populated, the result of
        // searching for a node might be somewhat unpredictable.
        _this.$ = {};
        var nodesWithIds = _this.shadowRoot.querySelectorAll('[id]');
        [].forEach.call(nodesWithIds, function (node) {
          var id = node.getAttribute('id');
          _this.$[id] = node;
        });
      }
      return _this;
    }

    /**
     * The collection of references to the elements with IDs in a component's
     * Shadow DOM subtree.
     *
     * @type {object}
     * @member $
     */


    return ShadowElementReferences;
  }(base);

  return ShadowElementReferences;
};

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbols = require('../src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Exported function extends a base class with ShadowTemplate. */
exports.default = function (base) {

  /**
   * Mixin for stamping a template into a Shadow DOM subtree upon component
   * instantiation.
   *
   * To use this mixin, define a `template` property as a string or HTML
   * `<template>` element:
   *
   *     class MyElement extends ShadowTemplateMixin(HTMLElement) {
   *       get [symbols.template]() {
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

    /*
     * If the component defines a template, a shadow root will be created on the
     * component instance, and the template stamped into it.
     */
    function ShadowTemplate() {
      _classCallCheck(this, ShadowTemplate);

      var _this = _possibleConstructorReturn(this, (ShadowTemplate.__proto__ || Object.getPrototypeOf(ShadowTemplate)).call(this));

      var template = _this[_symbols2.default.template];
      // TODO: Save the processed template with the component's class prototype
      // so it doesn't need to be processed with every instantiation.
      if (template) {

        if (typeof template === 'string') {
          // Upgrade plain string to real template.
          template = createTemplateWithInnerHTML(template);
        }

        if (window.ShadowDOMPolyfill) {
          shimTemplateStyles(template, _this.localName);
        }

        var root = _this.attachShadow({ mode: 'open' });
        var clone = document.importNode(template.content, true);
        root.appendChild(clone);
      }
      return _this;
    }

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

// Invoke basic style shimming with ShadowCSS.
function shimTemplateStyles(template, tag) {
  window.WebComponents.ShadowCSS.shimStyling(template.content, tag);
}

},{"../src/symbols":24}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var canSelectNextSymbol = (0, _createSymbol2.default)('canSelectNext');
var canSelectPreviousSymbol = (0, _createSymbol2.default)('canSelectPrevious');
var selectionRequiredSymbol = (0, _createSymbol2.default)('selectionRequired');
var selectionWrapsSymbol = (0, _createSymbol2.default)('selectionWraps');

// We want to expose both selectedIndex and selectedItem as independent
// properties but keep them in sync. This allows a component user to reference
// the selection by whatever means is most natural for their situation.
//
// To efficiently keep these properties in sync, we track "external" and
// "internal" references for each property:
//
// The external index or item is the one we report to the outside world when
// asked for selection.  When handling a change to index or item, we update the
// external reference as soon as possible, so that if anyone immediately asks
// for the current selection, they will receive a stable answer.
//
// The internal index or item tracks whichever index or item last received the
// full set of processing. Processing includes raising a change event for the
// new value. Once we've begun that processing, we store the new value as the
// internal value to indicate we've handled it.
//
var externalSelectedIndexSymbol = (0, _createSymbol2.default)('externalSelectedIndex');
var externalSelectedItemSymbol = (0, _createSymbol2.default)('externalSelectedItem');
var internalSelectedIndexSymbol = (0, _createSymbol2.default)('internalSelectedIndex');
var internalSelectedItemSymbol = (0, _createSymbol2.default)('internalSelectedItem');

/* Exported function extends a base class with SingleSelection. */

exports.default = function (base) {

  /**
   * Mixin which manages single-selection semantics for items in a list.
   *
   * This mixin expects a component to provide an `items` Array or NodeList of
   * all elements in the list. A standard way to do that with is the
   * [ContentItemsMixin](ContentItemsMixin.md), which takes a component's
   * content (typically its distributed children) as the set of list items; see
   * that mixin for details.
   *
   * This mixin tracks a single selected item in the list, and provides means to
   * get and set that state by item position (`selectedIndex`) or item identity
   * (`selectedItem`). The selection can be moved in the list via the methods
   * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
   *
   * This mixin does not produce any user-visible effects to represent
   * selection. Other mixins, such as
   * [SelectionAriaActiveMixin](SelectionAriaActiveMixin.md),
   * [SelectionHighlightMixin](SelectionHighlightMixin.md) and
   * [SelectionInViewMixin](SelectionInViewMixin.md), modify the selected item
   * in common ways to let the user know a given item is selected or not
   * selected.
   */
  var SingleSelection = function (_base) {
    _inherits(SingleSelection, _base);

    function SingleSelection() {
      _classCallCheck(this, SingleSelection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SingleSelection.__proto__ || Object.getPrototypeOf(SingleSelection)).call(this));

      if (typeof _this.selectionRequired === 'undefined') {
        _this.selectionRequired = _this[_symbols2.default.defaults].selectionRequired;
      }
      if (typeof _this.selectionWraps === 'undefined') {
        _this.selectionWraps = _this[_symbols2.default.defaults].selectionWraps;
      }
      return _this;
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */


    _createClass(SingleSelection, [{
      key: _symbols2.default.itemAdded,


      /**
       * Handle a new item being added to the list.
       *
       * The default implementation of this method simply sets the item's
       * selection state to false.
       *
       * @param {HTMLElement} item - the item being added
       */
      value: function value(item) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
        this[_symbols2.default.itemSelected](item, item === this.selectedItem);
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // In case selected item changed position or was removed.
        trackSelectedItem(this);

        // In case the change in items affected which navigations are possible.
        updatePossibleNavigations(this);
      }

      /**
       * Apply the indicate selection state to the item.
       *
       * The default implementation of this method does nothing. User-visible
       * effects will typically be handled by other mixins.
       *
       * @param {HTMLElement} item - the item being selected/deselected
       * @param {boolean} selected - true if the item is selected, false if not
       */

    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
      }

      /**
       * The index of the item which is currently selected.
       *
       * A `selectedIndex` of -1 indicates there is no selection. Setting this
       * property to -1 will remove any existing selection.
       *
       * @type {number}
       */

    }, {
      key: 'selectFirst',


      /**
       * Select the first item in the list.
       */
      value: function selectFirst() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this).call(this);
        }
        return selectIndex(this, 0);
      }

      /**
       * True if the list should always have a selection (if it has items).
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectLast',


      /**
       * Select the last item in the list.
       */
      value: function selectLast() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this).call(this);
        }
        return selectIndex(this, this.selectedIndex + 1);
      }

      /**
       * Select the previous item in the list.
       *
       * If the list has no selection, the last item will be selected.
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this).call(this);
        }
        var newIndex = this.selectedIndex < 0 ? this.items.length - 1 : // No selection yet; select last item.
        this.selectedIndex - 1;
        return selectIndex(this, newIndex);
      }

      /**
       * Fires when the selectedItem property changes.
       *
       * @memberof SingleSelection
       * @event selected-item-changed
       * @param {HTMLElement} detail.selectedItem The new selected item.
       * @param {HTMLElement} detail.previousItem The previously selected item.
       */

      /**
       * Fires when the selectedIndex property changes.
       *
       * @memberof SingleSelection
       * @event selected-index-changed
       * @param {number} detail.selectedIndex The new selected index.
       */

    }, {
      key: 'canSelectNext',
      get: function get() {
        return this[canSelectNextSymbol];
      },
      set: function set(canSelectNext) {
        var previousCanSelectNext = this[canSelectNextSymbol];
        this[canSelectNextSymbol] = canSelectNext;
        if ('canSelectNext' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        if (canSelectNext !== previousCanSelectNext) {
          this.dispatchEvent(new CustomEvent('can-select-next-changed'));
        }
      }

      /**
       * True if the selection can be moved to the previous item, false if not
       * (the selected item is the first one in the list).
       *
       * @type {boolean}
       */

    }, {
      key: 'canSelectPrevious',
      get: function get() {
        return this[canSelectPreviousSymbol];
      },
      set: function set(canSelectPrevious) {
        var previousCanSelectPrevious = this[canSelectPreviousSymbol];
        this[canSelectPreviousSymbol] = canSelectPrevious;
        if ('canSelectPrevious' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        if (canSelectPrevious !== previousCanSelectPrevious) {
          this.dispatchEvent(new CustomEvent('can-select-previous-changed'));
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionRequired = false;
        defaults.selectionWraps = false;
        return defaults;
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return this[externalSelectedIndexSymbol] != null ? this[externalSelectedIndexSymbol] : -1;
      },
      set: function set(index) {
        // See notes at top about internal vs. external copies of this property.
        var previousSelectedIndex = this[internalSelectedIndexSymbol];
        var item = void 0;
        if (index !== this[externalSelectedIndexSymbol]) {
          // Store the new index and the corresponding item.
          var items = this.items;
          var hasItems = items && items.length > 0;
          if (!(hasItems && index >= 0 && index < items.length)) {
            index = -1; // No item at that index.
          }
          this[externalSelectedIndexSymbol] = index;
          item = hasItems && index >= 0 ? items[index] : null;
          this[externalSelectedItemSymbol] = item;
        } else {
          item = this[externalSelectedItemSymbol];
        }

        // Now let super do any work.
        if ('selectedIndex' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', index, this);
        }

        if (index !== previousSelectedIndex) {
          // The selected index changed.
          this[internalSelectedIndexSymbol] = index;

          var event = new CustomEvent('selected-index-changed', {
            detail: {
              selectedIndex: index,
              value: index // for Polymer binding. TODO: Verify still necessary
            }
          });
          this.dispatchEvent(event);
        }

        if (this[internalSelectedItemSymbol] !== item) {
          // Update selectedItem property so it can have its own effects.
          this.selectedItem = item;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * Setting this property to null deselects any currently-selected item.
       * Setting this property to an object that is not in the list has no effect.
       *
       * TODO: Even if selectionRequired, can still explicitly set selectedItem to null.
       * TODO: If selectionRequired, leave selection alone?
       *
       * @type {object}
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return this[externalSelectedItemSymbol] || null;
      },
      set: function set(item) {
        // See notes at top about internal vs. external copies of this property.
        var previousSelectedItem = this[internalSelectedItemSymbol];
        var index = void 0;
        if (item !== this[externalSelectedItemSymbol]) {
          // Store item and look up corresponding index.
          var items = this.items;
          var hasItems = items && items.length > 0;
          index = hasItems ? Array.prototype.indexOf.call(items, item) : -1;
          this[externalSelectedIndexSymbol] = index;
          if (index < 0) {
            item = null; // The indicated item isn't actually in `items`.
          }
          this[externalSelectedItemSymbol] = item;
        } else {
          index = this[externalSelectedIndexSymbol];
        }

        // Now let super do any work.
        if ('selectedItem' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
        }

        if (item !== previousSelectedItem) {
          // The selected item changed.
          this[internalSelectedItemSymbol] = item;

          if (previousSelectedItem) {
            // Update selection state of old item.
            this[_symbols2.default.itemSelected](previousSelectedItem, false);
          }
          if (item) {
            // Update selection state to new item.
            this[_symbols2.default.itemSelected](item, true);
          }

          updatePossibleNavigations(this);

          var event = new CustomEvent('selected-item-changed', {
            detail: {
              selectedItem: item,
              value: item // for Polymer binding
            }
          });
          this.dispatchEvent(event);
        }

        if (this[internalSelectedIndexSymbol] !== index) {
          // Update selectedIndex property so it can have its own effects.
          this.selectedIndex = index;
        }
      }
    }, {
      key: 'selectionRequired',
      get: function get() {
        return this[selectionRequiredSymbol];
      },
      set: function set(selectionRequired) {
        this[selectionRequiredSymbol] = selectionRequired;
        if ('selectionRequired' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        trackSelectedItem(this);
      }

      /**
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectionWraps',
      get: function get() {
        return this[selectionWrapsSymbol];
      },
      set: function set(value) {
        this[selectionWrapsSymbol] = String(value) === 'true';
        if ('selectionWraps' in base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionWraps', value, this);
        }
        updatePossibleNavigations(this);
      }
    }]);

    return SingleSelection;
  }(base);

  return SingleSelection;
};

// Ensure the given index is within bounds, and select it if it's not already
// selected.


function selectIndex(element, index) {
  var count = element.items.length;

  var boundedIndex = element.selectionWraps ?
  // JavaScript mod doesn't handle negative numbers the way we want to wrap.
  // See http://stackoverflow.com/a/18618250/76472
  (index % count + count) % count :

  // Keep index within bounds of array.
  Math.max(Math.min(index, count - 1), 0);

  var previousIndex = element.selectedIndex;
  if (previousIndex !== boundedIndex) {
    element.selectedIndex = boundedIndex;
    return true;
  } else {
    return false;
  }
}

// Following a change in the set of items, or in the value of the
// `selectionRequired` property, reacquire the selected item. If it's moved,
// update `selectedIndex`. If it's been removed, and a selection is required,
// try to select another item.
function trackSelectedItem(element) {

  var items = element.items;
  var itemCount = items ? items.length : 0;

  var previousSelectedItem = element.selectedItem;
  if (!previousSelectedItem) {
    // No item was previously selected.
    if (element.selectionRequired) {
      // Select the first item by default.
      element.selectedIndex = 0;
    }
  } else if (itemCount === 0) {
    // We've lost the selection, and there's nothing left to select.
    element.selectedItem = null;
  } else {
    // Try to find the previously-selected item in the current set of items.
    var indexInCurrentItems = Array.prototype.indexOf.call(items, previousSelectedItem);
    var previousSelectedIndex = element.selectedIndex;
    if (indexInCurrentItems < 0) {
      // Previously-selected item was removed from the items.
      // Select the item at the same index (if it exists) or as close as possible.
      var newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
      // Select by item, since index may be the same, and we want to raise the
      // selected-item-changed event.
      element.selectedItem = items[newSelectedIndex];
    } else if (indexInCurrentItems !== previousSelectedIndex) {
      // Previously-selected item still there, but changed position.
      element.selectedIndex = indexInCurrentItems;
    }
  }
}

// Following a change in selection, report whether it's now possible to
// go next/previous from the given index.
function updatePossibleNavigations(element) {
  var canSelectNext = void 0;
  var canSelectPrevious = void 0;
  var items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  }if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    var index = element.selectedIndex;
    if (index < 0 && items.length > 0) {
      // Special case. If there are items but no selection, declare that it's
      // always possible to go next/previous to create a selection.
      canSelectNext = true;
      canSelectPrevious = true;
    } else {
      // Normal case: we have an index in a list that has items.
      canSelectPrevious = index > 0;
      canSelectNext = index < items.length - 1;
    }
  }
  if (element.canSelectNext !== canSelectNext) {
    element.canSelectNext = canSelectNext;
  }
  if (element.canSelectPrevious !== canSelectPrevious) {
    element.canSelectPrevious = canSelectPrevious;
  }
}

},{"./createSymbol":21,"./symbols":24}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var deltaXSymbol = (0, _createSymbol2.default)('deltaX');
var deltaYSymbol = (0, _createSymbol2.default)('deltaY');
var multiTouchSymbol = (0, _createSymbol2.default)('multiTouch');
var previousXSymbol = (0, _createSymbol2.default)('previousX');
var previousYSymbol = (0, _createSymbol2.default)('previousY');
var startXSymbol = (0, _createSymbol2.default)('startX');
var travelFractionSymbol = (0, _createSymbol2.default)('travelFraction');

/* Exported function extends a base class with SwipeDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps touch gestures (swipe left, swipe right) to direction
   * semantics (go right, go left).
   *
   * By default, this mixin presents no user-visible effects; it just indicates
   * a direction in which the user is currently swiping or has finished swiping.
   * To map the direction to a change in selection, use
   * [DirectionSelectionMixin](DirectionSelectionMixin.md).
   */
  var SwipeDirection = function (_base) {
    _inherits(SwipeDirection, _base);

    function SwipeDirection() {
      _classCallCheck(this, SwipeDirection);

      var _this = _possibleConstructorReturn(this, (SwipeDirection.__proto__ || Object.getPrototypeOf(SwipeDirection)).call(this));

      _this.travelFraction = 0;

      // In all touch events, only handle single touches. We don't want to
      // inadvertently do work when the user's trying to pinch-zoom for example.
      // TODO: Even better approach than below would be to ignore touches after
      // the first if the user has already begun a swipe.
      // TODO: Touch events should probably be factored out into its own mixin.
      if (window.PointerEvent) {
        // Prefer listening to standard pointer events.
        _this.addEventListener('pointerdown', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchStart(_this, event.clientX, event.clientY);
          }
        });
        _this.addEventListener('pointermove', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            var handled = touchMove(_this, event.clientX, event.clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        _this.addEventListener('pointerup', function (event) {
          if (isEventForPenOrPrimaryTouch(event)) {
            touchEnd(_this, event.clientX, event.clientY);
          }
        });
      } else {
        // Pointer events not supported -- listen to older touch events.
        _this.addEventListener('touchstart', function (event) {
          if (_this[multiTouchSymbol]) {
            return;
          } else if (event.touches.length === 1) {
            var clientX = event.changedTouches[0].clientX;
            var clientY = event.changedTouches[0].clientY;
            touchStart(_this, clientX, clientY);
          } else {
            _this[multiTouchSymbol] = true;
          }
        });
        _this.addEventListener('touchmove', function (event) {
          if (!_this[multiTouchSymbol] && event.touches.length === 1) {
            var clientX = event.changedTouches[0].clientX;
            var clientY = event.changedTouches[0].clientY;
            var handled = touchMove(_this, clientX, clientY);
            if (handled) {
              event.preventDefault();
            }
          }
        });
        _this.addEventListener('touchend', function (event) {
          if (event.touches.length === 0) {
            // All touches removed; gesture is complete.
            if (!_this[multiTouchSymbol]) {
              // Single-touch swipe has finished.
              var clientX = event.changedTouches[0].clientX;
              var clientY = event.changedTouches[0].clientY;
              touchEnd(_this, clientX, clientY);
            }
            _this[multiTouchSymbol] = false;
          }
        });
      }
      return _this;
    }

    _createClass(SwipeDirection, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this)) {
          _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'connectedCallback', this).call(this);
        }

        // For the component to receive PointerEvents in IE/Edge, we need to set
        // touch-action: none. Only make this change if touch-action is currently
        // the default value ("auto"), in case the developer knows better than we
        // do what they want in their particular context.
        if (getComputedStyle(this).touchAction === 'auto') {
          this.style.touchAction = 'none';
        }
      }

      // Default implementation.

    }, {
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * The distance the first touchpoint has traveled since the beginning of a
       * drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return this[travelFractionSymbol];
      },
      set: function set(value) {
        this[travelFractionSymbol] = value;
        if ('travelFraction' in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'travelFraction', value, this);
        }
      }
    }]);

    return SwipeDirection;
  }(base);

  return SwipeDirection;
};

// Return true if the pointer event is for the pen, or the primary touch point.


function isEventForPenOrPrimaryTouch(event) {
  return event.pointerType === 'pen' || event.pointerType === 'touch' && event.isPrimary;
}

/*
 * Invoked when the user has finished a touch operation.
 */
function touchEnd(element, clientX, clientY) {
  element[_symbols2.default.dragging] = false;
  if (element[deltaXSymbol] >= 20) {
    // Finished going right at high speed.
    element[_symbols2.default.goLeft]();
  } else if (element[deltaXSymbol] <= -20) {
    // Finished going left at high speed.
    element[_symbols2.default.goRight]();
  } else {
    // Finished at low speed.
    trackTo(element, clientX);
    var travelFraction = element.travelFraction;
    if (travelFraction >= 0.5) {
      element[_symbols2.default.goRight]();
    } else if (travelFraction <= -0.5) {
      element[_symbols2.default.goLeft]();
    }
  }
  element.travelFraction = 0;
  element[deltaXSymbol] = null;
  element[deltaYSymbol] = null;
}

/*
 * Invoked when the user has moved during a touch operation.
 */
function touchMove(element, clientX, clientY) {

  element[deltaXSymbol] = clientX - element[previousXSymbol];
  element[deltaYSymbol] = clientY - element[previousYSymbol];
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  if (Math.abs(element[deltaXSymbol]) > Math.abs(element[deltaYSymbol])) {
    // Move was mostly horizontal.
    trackTo(element, clientX);
    // Indicate that the event was handled. It'd be nicer if we didn't have
    // to do this so that, e.g., a user could be swiping left and right
    // while simultaneously scrolling up and down. (Native touch apps can do
    // that.) However, Mobile Safari wants to handle swipe events near the
    // page and interpret them as navigations. To avoid having a horiziontal
    // swipe misintepreted as a navigation, we indicate that we've handled
    // the event, and prevent default behavior.
    return true;
  } else {
    // Move was mostly vertical.
    return false; // Not handled
  }
}

/*
 * Invoked when the user has begun a touch operation.
 */
function touchStart(element, clientX, clientY) {
  element[_symbols2.default.dragging] = true;
  element[startXSymbol] = clientX;
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  element[deltaXSymbol] = 0;
  element[deltaYSymbol] = 0;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element[startXSymbol] - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{"./createSymbol":21,"./symbols":24}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var absorbDecelerationSymbol = (0, _createSymbol2.default)('absorbDeceleration');
var lastDeltaXSymbol = (0, _createSymbol2.default)('lastDeltaX');
var lastWheelTimeoutSymbol = (0, _createSymbol2.default)('lastWheelTimeout');
var postNavigateDelayCompleteSymbol = (0, _createSymbol2.default)('postNavigateDelayComplete');
var wheelDistanceSymbol = (0, _createSymbol2.default)('wheelDistance');

/* Exported function extends a base class with TrackpadDirection. */

exports.default = function (base) {

  /**
   * Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
   * wheel actions) to direction semantics.
   *
   * You can use this mixin with a mixin like
   * [DirectionSelectionMixin](DirectionSelectionMixin.md) to let the user
   * change the selection with the trackpad or mouse wheel.
   *
   * To respond to the trackpad, we can listen to the DOM's "wheel" events.
   * These events are fired as the user drags their fingers across a trackpad.
   * Unfortunately, browsers are missing a critical event — there is no event
   * when the user *stops* a gestured on the trackpad or mouse wheel.
   *
   * To make things worse, the mainstream browsers continue to generate fake
   * wheel events even after the user has stopped dragging their fingers. These
   * fake events simulate the user gradually slowing down the drag until they
   * come to a smooth stop. In some contexts, these fake wheel events might be
   * helpful, but in trying to supply typical trackpad swipe navigation, these
   * fake events get in the way.
   *
   * This component uses heuristics to work around these problems, but the
   * complex nature of the problem make it extremely difficult to achieve the
   * same degree of trackpad responsiveness possible with native applications.
   */
  var TrackpadDirection = function (_base) {
    _inherits(TrackpadDirection, _base);

    function TrackpadDirection() {
      _classCallCheck(this, TrackpadDirection);

      var _this = _possibleConstructorReturn(this, (TrackpadDirection.__proto__ || Object.getPrototypeOf(TrackpadDirection)).call(this));

      _this.addEventListener('wheel', function (event) {
        var handled = wheel(_this, event);
        if (handled) {
          event.preventDefault();
        }
      });
      resetWheelTracking(_this);
      return _this;
    }

    // Default implementation.


    _createClass(TrackpadDirection, [{
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * The distance the user has moved the first touchpoint since the beginning
       * of a trackpad/wheel operation, expressed as a fraction of the element's
       * width.
       *
       * @type number
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, value, this);
        }
      }
    }, {
      key: 'travelFraction',
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', this);
      },
      set: function set(value) {
        if ('travelFraction' in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), 'travelFraction', value, this);
        }
      }
    }]);

    return TrackpadDirection;
  }(base);

  return TrackpadDirection;
};

// Time we wait following a navigation before paying attention to wheel
// events again.


var POST_NAVIGATE_TIME = 250;

// Time we wait after the last wheel event before we reset things.
var WHEEL_TIME = 100;

// Following a navigation, partially reset our wheel tracking.
function postNavigate(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[postNavigateDelayCompleteSymbol] = true;
  element[absorbDecelerationSymbol] = true;
  setTimeout(function () {
    element[postNavigateDelayCompleteSymbol] = false;
  }, POST_NAVIGATE_TIME);
}

// Reset all state related to the tracking of the wheel.
function resetWheelTracking(element) {
  element.travelFraction = 0;
  element[wheelDistanceSymbol] = 0;
  element[lastDeltaXSymbol] = 0;
  element[absorbDecelerationSymbol] = false;
  element[postNavigateDelayCompleteSymbol] = false;
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
    element[lastWheelTimeoutSymbol] = null;
  }
}

// Define our own sign function, since (as of May 2015), Safari and IE don't
// supply Math.sign().
function sign(x) {
  return x === 0 ? 0 : x > 0 ? 1 : -1;
}

// TODO: Damping, or some other treatment for going past the ends.

/*
 * A wheel event has been generated. This could be a real wheel event, or it
 * could be fake (see notes in the header).
 *
 * This handler uses several strategies to try to approximate native trackpad
 * swipe navigation.
 *
 * If the user has dragged enough to cause a navigation, then for a short
 * delay following that navigation, subsequent wheel events will be ignored.
 *
 * Furthermore, follwowing a navigation, we ignore all wheel events until we
 * receive at least one event where the event's deltaX (distance traveled) is
 * *greater* than the previous event's deltaX. This helps us filter out the
 * fake wheel events generated by the browser to simulate deceleration.
 *
 */
function wheel(element, event) {

  // Since we have a new wheel event, reset our timer waiting for the last
  // wheel event to pass.
  if (element[lastWheelTimeoutSymbol]) {
    clearTimeout(element[lastWheelTimeoutSymbol]);
  }
  element[lastWheelTimeoutSymbol] = setTimeout(function () {
    wheelTimedOut(element);
  }, WHEEL_TIME);

  var deltaX = event.deltaX;
  var deltaY = event.deltaY;

  // See if element event represents acceleration or deceleration.
  var acceleration = sign(deltaX) * (deltaX - element[lastDeltaXSymbol]);
  element[lastDeltaXSymbol] = deltaX;

  if (Math.abs(deltaX) < Math.abs(deltaY)) {
    // Move was mostly vertical. The user may be trying scroll with the
    // trackpad/wheel. To be on the safe, we ignore such events.
    return false;
  }

  if (element[postNavigateDelayCompleteSymbol]) {
    // It's too soon after a navigation; ignore the event.
    return true;
  }

  if (acceleration > 0) {
    // The events are not (or are no longer) decelerating, so we can start
    // paying attention to them again.
    element[absorbDecelerationSymbol] = false;
  } else if (element[absorbDecelerationSymbol]) {
    // The wheel event was likely faked to simulate deceleration; ignore it.
    return true;
  }

  element[wheelDistanceSymbol] += deltaX;

  // Update the travel fraction of the element being navigated.
  var width = element.offsetWidth;
  var travelFraction = width > 0 ? element[wheelDistanceSymbol] / width : 0;
  element[_symbols2.default.dragging] = true;
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goRight]();
    postNavigate(element);
  } else if (travelFraction === -1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goLeft]();
    postNavigate(element);
  }

  return true;
}

// A sufficiently long period of time has passed since the last wheel event.
// We snap the selection to the closest item, then reset our state.
function wheelTimedOut(element) {

  // Snap to the closest item.
  element[_symbols2.default.dragging] = false;
  var travelFraction = element.travelFraction;
  if (travelFraction >= 0.5) {
    element[_symbols2.default.goRight]();
  } else if (travelFraction <= -0.5) {
    element[_symbols2.default.goLeft]();
  }

  // TODO: Listen for the transition to complete, and then restore
  // dragging to false (or the previous value).

  resetWheelTracking(element);
}

},{"../../basic-component-mixins/src/createSymbol":21,"./symbols":24}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSymbol;
/**
 * Helper function to create a symbol that can be used for associating private
 * data with an element.
 *
 * Mixins and component classes often want to associate private data with an
 * element instance, but JavaScript does not have direct support for true
 * private properties. One approach is to use the
 * [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * data type to set and retrieve data on an element.
 *
 * Unfortunately, the Symbol type is not available in Internet Explorer 11. The
 * `createSymbol` helper function exists as a workaround for IE 11. Rather than
 * returning a true Symbol, it simply returns an underscore-prefixed string.
 *
 * Usage:
 *
 *     const fooSymbol = createSymbol('foo');
 *
 *     class MyElement extends HTMLElement {
 *       get foo() {
 *         return this[fooSymbol];
 *       }
 *       set foo(value) {
 *         this[fooSymbol] = value;
 *       }
 *     }
 *
 * In IE 11, this sample will "hide" data behind an instance property this._foo.
 * The use of the underscore is meant to reduce (not eliminate) the potential
 * for name conflicts, and discourage (not prevent) external access to this
 * data. In modern browsers, the above code will eliminate the potential of
 * naming conflicts, and better hide the data behind a real Symbol.
 *
 * @function createSymbol
 * @param {string} description - A string to identify the symbol when debugging
 */
function createSymbol(description) {
  return typeof Symbol === 'function' ? Symbol(description) : '_' + description;
}

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = microtask;
/*
 * Microtask helper for IE 11.
 *
 * Executing a function as a microtask is trivial in browsers that support
 * promises, whose then() clauses use microtask timing. IE 11 doesn't support
 * promises, but does support MutationObservers, which are also executed as
 * microtasks. So this helper uses an MutationObserver to achieve microtask
 * timing.
 *
 * See https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 *
 * Inspired by Polymer's async() function.
 */

// The queue of pending callbacks to be executed as microtasks.
var callbacks = [];

// Create an element that we will modify to force observable mutations.
var element = document.createTextNode('');

// A monotonically-increasing value.
var counter = 0;

/**
 * Add a callback to the microtask queue.
 *
 * This uses a MutationObserver so that it works on IE 11.
 *
 * NOTE: IE 11 may actually use timeout timing with MutationObservers. This
 * needs more investigation.
 *
 * @function microtask
 * @param {function} callback
 */
function microtask(callback) {
  callbacks.push(callback);
  // Force a mutation.
  element.textContent = ++counter;
}

// Execute any pending callbacks.
function executeCallbacks() {
  while (callbacks.length > 0) {
    var callback = callbacks.shift();
    callback();
  }
}

// Create the observer.
var observer = new MutationObserver(executeCallbacks);
observer.observe(element, {
  characterData: true
});

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass2 = require('./toggleClass');

var _toggleClass3 = _interopRequireDefault(_toggleClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Symbols for private data members on an element.
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('safeToSetAttributes');
var pendingAttributesSymbol = (0, _createSymbol2.default)('pendingAttributes');
var pendingClassesSymbol = (0, _createSymbol2.default)('pendingClasses');

/**
 * Helper functions for updating attributes, including the `class` attribute.
 */
exports.default = {

  /**
   * Perform any pending updates to attributes and classes.
   *
   * This writes any `setAttribute` or `toggleClass` values that were performed
   * before an element was attached to the document for the first time.
   *
   * This method should be called by mixins/components in their
   * `connectedCallback`. If mulitple mixins/components invoke this during the
   * same `connectedCallback`, only the first call will have any effect. The
   * subsequent calls will be harmless.
   *
   * @param {HTMLElement} element - The element being added to the document.
   */
  connected: function connected(element) {
    element[safeToSetAttributesSymbol] = true;

    // Set any pending attributes.
    if (element[pendingAttributesSymbol]) {
      for (var attribute in element[pendingAttributesSymbol]) {
        var value = element[pendingAttributesSymbol][attribute];
        setAttributeToElement(element, attribute, value);
      }
      element[pendingAttributesSymbol] = null;
    }

    // Set any pending classes.
    if (element[pendingClassesSymbol]) {
      for (var className in element[pendingClassesSymbol]) {
        var _value = element[pendingClassesSymbol][className];
        (0, _toggleClass3.default)(element, className, _value);
      }
      element[pendingClassesSymbol] = null;
    }
  },


  /**
   * Set/unset the attribute with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as an attribute. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes. A call to `setAttribute` during the constructor will
   * be deferred until the element is connected to the document.
   *
   * @param {string} attribute - The name of the *attribute* (not property) to set.
   * @param {object} value - The value to set. If null, the attribute will be removed.
   */
  setAttribute: function setAttribute(element, attribute, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set attributes immediately.
      setAttributeToElement(element, attribute, value);
    } else {
      // Defer setting attributes until the first time we're connected.
      if (!element[pendingAttributesSymbol]) {
        element[pendingAttributesSymbol] = {};
      }
      element[pendingAttributesSymbol][attribute] = value;
    }
  },


  /**
   * Set/unset the class with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as as class. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes, including the `class` attribute. A call to
   * `toggleClass` during the constructor will be deferred until the element
   * is connected to the document.
   *
   * @param {string} className - The name of the class to set.
   * @param {object} value - True to set the class, false to remove it.
   */
  toggleClass: function toggleClass(element, className, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set class immediately.
      (0, _toggleClass3.default)(element, className, value);
    } else {
      // Defer setting class until the first time we're connected.
      if (!element[pendingClassesSymbol]) {
        element[pendingClassesSymbol] = {};
      }
      element[pendingClassesSymbol][className] = value;
    }
  }
};

// Reflect the attribute to the given element.
// If the value is null, remove the attribute.

function setAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    var text = String(value);
    // Avoid recursive attributeChangedCallback calls.
    if (element.getAttribute(attributeName) !== text) {
      element.setAttribute(attributeName, value);
    }
  }
}

},{"./createSymbol":21,"./toggleClass":25}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A collection of Symbol objects for standard component properties and methods.
 *
 * These Symbol objects are used to allow mixins and a component to internally
 * communicate, without exposing these properties and methods in the component's
 * public API.
 *
 * To use these Symbol objects in your own component, include this module and
 * then create a property or method whose key is the desired Symbol.
 *
 *     import 'SingleSelectionMixin' from 'basic-component-mixins/src/SingleSelectionMixin';
 *     import 'symbols' from 'basic-component-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
 *       [symbols.itemSelected](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * @module symbols
 */
var symbols = {

  /**
   * Symbol for the `defaults` property.
   *
   * This property can be used to set or override defaults that will be applied
   * to a new component instance. When implementing this property, take care to
   * first acquire any defaults defined by the superclass. The standard idiom is
   * as follows:
   *
   *     get [symbols.defaults]() {
   *       const defaults = super[symbols.defaults] || {};
   *       // Set or override default values here
   *       defaults.customProperty = false;
   *       return defaults;
   *     }
   *
   * @var {object} defaults
   */
  defaults: (0, _createSymbol2.default)('defaults'),

  /**
   * Symbol for the `dragging` property.
   *
   * Components like carousels often define animated CSS transitions for
   * sliding effects. Such a transition should usually *not* be applied while
   * the user is dragging, because a CSS animation will introduce a lag that
   * makes the swipe feel sluggish. Instead, as long as the user is dragging
   * with their finger down, the transition should be suppressed. When the
   * user releases their finger, the transition can be restored, allowing the
   * animation to show the carousel sliding into its final position.
   *
   * @type {boolean} true if a drag is in progress, false if not.
   */
  dragging: (0, _createSymbol2.default)('dragging'),

  /**
   * Symbol for the `goDown` method.
   *
   * This method is invoked when the user wants to go/navigate down.
   *
   * @function goDown
   */
  goDown: (0, _createSymbol2.default)('goDown'),

  /**
   * Symbol for the `goEnd` method.
   *
   * This method is invoked when the user wants to go/navigate to the end (e.g.,
   * of a list).
   *
   * @function goEnd
   */
  goEnd: (0, _createSymbol2.default)('goEnd'),

  /**
   * Symbol for the `goLeft` method.
   *
   * This method is invoked when the user wants to go/navigate left.
   *
   * @function goLeft
   */
  goLeft: (0, _createSymbol2.default)('goLeft'),

  /**
   * Symbol for the `goRight` method.
   *
   * This method is invoked when the user wants to go/navigate right.
   *
   * @function goRight
   */
  goRight: (0, _createSymbol2.default)('goRight'),

  /**
   * Symbol for the `goStart` method.
   *
   * This method is invoked when the user wants to go/navigate to the start
   * (e.g., of a list).
   *
   * @function goStart
   */
  goStart: (0, _createSymbol2.default)('goStart'),

  /**
   * Symbol for the `goUp` method.
   *
   * This method is invoked when the user wants to go/navigate up.
   *
   * @function goUp
   */
  goUp: (0, _createSymbol2.default)('goUp'),

  /**
   * Symbol for the `itemAdded` method.
   *
   * This method is invoked when a new item is added to a list.
   *
   * @function itemAdded
   * @param {HTMLElement} item - the item being selected/deselected
   */
  itemAdded: (0, _createSymbol2.default)('itemAdded'),

  /**
   * Symbol for the `itemsChanged` method.
   *
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   */
  itemsChanged: (0, _createSymbol2.default)('itemsChanged'),

  /**
   * Symbol for the `itemSelected` method.
   *
   * This method is invoked when an item becomes selected or deselected.
   *
   * @function itemSelected
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  itemSelected: (0, _createSymbol2.default)('itemSelected'),

  /**
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: (0, _createSymbol2.default)('keydown'),

  /**
   * Symbol for the `template` property.
   *
   * This property returns a component's template.
   *
   * @type {string|HTMLElement}
   */
  template: (0, _createSymbol2.default)('template')
};

exports.default = symbols;

},{"./createSymbol":21}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleClass;
/**
 * Helper function for standard classList.toggle() behavior on old browsers,
 * namely IE 11.
 *
 * The standard
 * [classlist](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
 * object has a `toggle()` function that supports a second Boolean parameter
 * that can be used to succinctly turn a class on or off. This feature is often
 * useful in designing custom elements, which may want to externally reflect
 * component state in a CSS class that can be used for styling purposes.
 *
 * Unfortunately, IE 11 does not support the Boolean parameter to
 * `classList.toggle()`. This helper function behaves like the standard
 * `toggle()`, including support for the Boolean parameter, so that it can be
 * used even on IE 11.
 *
 * @function toggleClass
 * @param {HTMLElement} element - The element to modify
 * @param {string} className - The class to add/remove
 * @param {boolean} [force] - Force the class to be added (if true) or removed
 *                            (if false)
 */
function toggleClass(element, className, force) {
  var classList = element.classList;
  var addClass = typeof force === 'undefined' ? !classList.contains(className) : force;
  if (addClass) {
    classList.add(className);
  } else {
    classList.remove(className);
  }
  return addClass;
}

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AttributeMarshallingMixin = require('../../basic-component-mixins/src/AttributeMarshallingMixin');

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ComposableMixin = require('../../basic-component-mixins/src/ComposableMixin');

var _ComposableMixin2 = _interopRequireDefault(_ComposableMixin);

var _DistributedChildrenMixin = require('../../basic-component-mixins/src/DistributedChildrenMixin');

var _DistributedChildrenMixin2 = _interopRequireDefault(_DistributedChildrenMixin);

var _ShadowElementReferencesMixin = require('../../basic-component-mixins/src/ShadowElementReferencesMixin');

var _ShadowElementReferencesMixin2 = _interopRequireDefault(_ShadowElementReferencesMixin);

var _ShadowTemplateMixin = require('../../basic-component-mixins/src/ShadowTemplateMixin');

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

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
 *
 * @mixes AttributeMarshallingMixin
 * @mixes ComposableMixin
 * @mixes DistributedChildrenMixin
 * @mixes ShadowElementReferencesMixin
 * @mixes ShadowTemplateMixin
 */
var ElementBase = function (_ComposableMixin$comp) {
  _inherits(ElementBase, _ComposableMixin$comp);

  function ElementBase() {
    _classCallCheck(this, ElementBase);

    return _possibleConstructorReturn(this, (ElementBase.__proto__ || Object.getPrototypeOf(ElementBase)).apply(this, arguments));
  }

  return ElementBase;
}((0, _ComposableMixin2.default)(HTMLElement).compose(_ShadowTemplateMixin2.default, // before node finding, so shadow root is populated
_ShadowElementReferencesMixin2.default, // before marshalling, so properties can use refs
_AttributeMarshallingMixin2.default, _DistributedChildrenMixin2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshallingMixin":4,"../../basic-component-mixins/src/ComposableMixin":5,"../../basic-component-mixins/src/DistributedChildrenMixin":9,"../../basic-component-mixins/src/ShadowElementReferencesMixin":16,"../../basic-component-mixins/src/ShadowTemplateMixin":17}]},{},[2])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hbmltYXRpb24tc3RhZ2Uvc3JjL0FuaW1hdGlvblN0YWdlLmpzIiwicGFja2FnZXMvYmFzaWMtY2Fyb3VzZWwvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNhcm91c2VsL3NyYy9DYXJvdXNlbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0ZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0hvcml6b250YWxOYXZpZ2F0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFuaW1hdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uTWl4aW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbk1peGluLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc2FmZUF0dHJpYnV0ZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sT0FBTyxzQkFBWSxPQUFaLG1OQUFiOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQk0sYzs7Ozs7Ozs7OztTQUVDLGtCQUFR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QUFyQixFQUE4QixTQUE5QixFQUF5QyxLQUF6QyxFQUFnRDtBQUM3RCxNQUFNLFlBQVksUUFBUSxTQUExQjtBQUNBLE1BQU0sV0FBWSxPQUFPLEtBQVAsS0FBaUIsV0FBbEIsR0FDZixDQUFDLFVBQVUsUUFBVixDQUFtQixTQUFuQixDQURjLEdBRWYsS0FGRjtBQUdBLE1BQUksUUFBSixFQUFjO0FBQ1osY0FBVSxHQUFWLENBQWMsU0FBZDtBQUNELEdBRkQsTUFFTztBQUNMLGNBQVUsTUFBVixDQUFpQixTQUFqQjtBQUNEO0FBQ0QsU0FBTyxRQUFQO0FBQ0Q7Ozs7Ozs7OztBQ2pDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQk0sVzs7Ozs7Ozs7OztFQUFvQiwrQkFBZ0IsV0FBaEIsRUFBNkIsT0FBN0IsZ0NBQ007QUFETix3Q0FFTTtBQUZOLHdFOztrQkFPWCxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50SXRlbXNNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50SXRlbXNNaXhpbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluJztcbmltcG9ydCBTZWxlY3Rpb25BbmltYXRpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb25NaXhpbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbic7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2luZ2xlU2VsZWN0aW9uTWl4aW4nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5cblxuY29uc3QgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRJdGVtc01peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluLFxuICBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4sXG4gIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluLFxuICBTZWxlY3Rpb25BcmlhQWN0aXZlTWl4aW4sXG4gIFNpbmdsZVNlbGVjdGlvbk1peGluXG4pO1xuXG4vKipcbiAqIFByZXNlbnRzIGEgc2luZ2xlIGl0ZW0gYXMgc2VsZWN0ZWQsIHByb3ZpZGluZyBhbmltYXRlZCB0cmFuc2l0aW9ucyB3aGVuIHRoZVxuICogc2VsZWN0aW9uIGNoYW5nZXMuIFRoZSBzYW1lIGFuaW1hdGlvbiBjYW4gYmUgc2hvd24gYXQgYW4gYXJiaXRyYXJ5IHBvaW50LFxuICogZ2VuZXJhbGx5IHVzZWQgdG8gcmVmbGVjdCBhIHVzZXItY29udHJvbGxlZCB0b3VjaCBvciB0cmFja3BhZCBkcmFnIG9wZXJhdGlvblxuICogaW4gcHJvZ3Jlc3MuXG4gKlxuICogW0xpdmUgZGVtb10oaHR0cDovL2Jhc2ljd2ViY29tcG9uZW50cy5vcmcvYmFzaWMtd2ViLWNvbXBvbmVudHMvcGFja2FnZXMvYmFzaWMtYW5pbWF0aW9uLXN0YWdlLylcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgcHJvZ3JhbW1hdGljIHJlbmRlcmluZyBzdXJmYWNlIGZvclxuICogY29tcG9uZW50cyB3aGljaCB3YW50IHRvIHNob3cgdHJhbnNpdGlvbmFsIGVmZmVjdHMuXG4gKlxuICogVGhlIGNvbXBvbmVudCB1c2VzIFtTZWxlY3Rpb25BbmltYXRpb25NaXhpbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1NlbGVjdGlvbkFuaW1hdGlvbk1peGluLm1kKVxuICogbWl4aW4sIHdoaWNoIGluIHR1cm4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICpcbiAqIEZvciBhIHNpbXBsZXIgY29tcG9uZW50IHRoYXQgZXhoaWJpdHMgb25seSBhIHNsaWRpbmcgZWZmZWN0LCBidXQgZG9lcyBub3RcbiAqIHJlcXVpcmUgdGhlIFdlYiBBbmltYXRpb25zIEFQSSwgc2VlIFtiYXNpYy1zbGlkaW5nLXZpZXdwb3J0XSguLi9iYXNpYy1zbGlkaW5nLXZpZXdwb3J0KS5cbiAqXG4gKiBAZXh0ZW5kcyBFbGVtZW50QmFzZVxuICogQG1peGVzIENvbnRlbnRJdGVtc01peGluXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpblxuICogQG1peGVzIFNlbGVjdGlvbkFuaW1hdGlvbk1peGluXG4gKiBAbWl4ZXMgU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluXG4gKiBAbWl4ZXMgU2luZ2xlU2VsZWN0aW9uTWl4aW5cbiAqL1xuY2xhc3MgQW5pbWF0aW9uU3RhZ2UgZXh0ZW5kcyBiYXNlIHtcblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjY29udGFpbmVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiByb2xlPVwibm9uZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLWFuaW1hdGlvbi1zdGFnZScsIEFuaW1hdGlvblN0YWdlKTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvblN0YWdlO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL3NyYy9DYXJvdXNlbCc7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcbndpbmRvdy5CYXNpYy5DYXJvdXNlbCA9IENhcm91c2VsO1xuIiwiaW1wb3J0IEFuaW1hdGlvblN0YWdlIGZyb20gJy4uLy4uL2Jhc2ljLWFuaW1hdGlvbi1zdGFnZS9zcmMvQW5pbWF0aW9uU3RhZ2UnO1xuaW1wb3J0IEhvcml6b250YWxOYXZpZ2F0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSG9yaXpvbnRhbE5hdmlnYXRpb25NaXhpbic7XG5cblxuLyoqXG4gKiBMZXRzIHRoZSB1c2VyIG5hdmlnYXRlIGxhdGVyYWxseSB0aHJvdWdoIGEgc2VxdWVuY2Ugb2YgY2hpbGQgZWxlbWVudHMuXG4gKlxuICogYmFzaWMtY2Fyb3VzZWwgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNhcm91c2VsIHVzZXIgaW50ZXJmYWNlIHBhdHRlcm4sXG4gKiBjb21tb25seSB1c2VkIGZvciBuYXZpZ2F0aW5nIGJldHdlZW4gaW1hZ2VzLCBwYWdlcywgYW5kIG90aGVyIGVsZW1lbnRzLiBUaGlzXG4gKiBwYXR0ZXJuIHByZXNlbnRzIHRoZSB1c2VyIHdpdGggYSBsaW5lYXIgc2VxdWVuY2Ugb2YgZWxlbWVudHMsIG9ubHkgb25lIG9mXG4gKiB3aGljaCBpcyBzaG93biBhdCBhIHRpbWUuIFRoZSB1c2VyIGNhbiBuYXZpZ2F0ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlbGVtZW50XG4gKiB3aXRoIGEgdmFyaWV0eSBvZiBpbnB1dCBtZXRob2RzLlxuICpcbiAqIFtMaXZlIGRlbW9dKGh0dHA6Ly9iYXNpY3dlYmNvbXBvbmVudHMub3JnL2Jhc2ljLXdlYi1jb21wb25lbnRzL3BhY2thZ2VzL2Jhc2ljLWNhcm91c2VsLylcbiAqXG4gKiBUaGUgYWJvdmUgZGVtbyBpcyBhIHBsYWluIGNhcm91c2VsLiBJdCdzIG9mdGVuIGNvbWJpbmVkLCBob3dldmVyLCB3aXRoXG4gKiBtaXhpbnMgbGlrZVxuICogW0Fycm93U2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9BcnJvd1NlbGVjdGlvbk1peGluLm1kKSxcbiAqIFtQYWdlRG90c01peGluXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvUGFnZURvdHNNaXhpbi5tZCksXG4gKiBbVGltZXJTZWxlY3Rpb25NaXhpbl0oLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9kb2NzL1RpbWVyU2VsZWN0aW9uTWl4aW4ubWQpLlxuICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gdmlldyBhXG4gKiBbZGVtbyB3aXRoIGFycm93cyBhbmQgcGFnZSBkb3RzXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9kZW1vcy9jYXJvdXNlbC13aXRoLWFycm93cy1hbmQtZG90cy5odG1sKS5cbiAqIFNlZSB0aGUgc3BlY2lmaWMgbWl4aW5zIGZvciBvdGhlciBjYXJvdXNlbCBkZW1vcy5cbiAqXG4gKiBiYXNpYy1jYXJvdXNlbCB1c2VzIGl0cyBjaGlsZHJlbiBhcyB0aGUgZWxlbWVudHMgdGhlIHVzZXIgd2lsbCBuYXZpZ2F0ZVxuICogdGhyb3VnaC4gSW4gYSB0eXBpY2FsIHVzZSwgYSBiYXNpYy1jYXJvdXNlbCBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGFcbiAqIHNlcXVlbmNlIG9mIGltYWdlczpcbiAqXG4gKiAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgPGltZyBzcmM9XCJpbWFnZTEuanBnXCI+XG4gKiAgICAgICA8aW1nIHNyYz1cImltYWdlMi5qcGdcIj5cbiAqICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UzLmpwZ1wiPlxuICogICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKlxuICogVGhlIGNoaWxkIGVsZW1lbnRzIGNhbiBiZSBvZiBhbnkgdHlwZSDigJTCoHRoZXkgYXJlIG5vdCByZXN0cmljdGVkIHRvIGltYWdlcy5cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBhdHRlbXB0cyB0byBtZWV0IHRoZSBbR29sZCBTdGFuZGFyZCBmb3Igd2ViIGNvbXBvbmVudHNdXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpKSBzbyB0aGF0IGl0IGlzIGdlbmVyYWxseVxuICogYXMgZmxleGlibGUgYW5kIHJvYnVzdCBhcyBzdGFuZGFyZCBIVE1MIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgaXQgbWVldHMgdGhlXG4gKiBcIkNvbnRlbnQgQ2hhbmdlc1wiIGNyaXRlcmlhOiB0aGUgY2Fyb3VzZWwgd2lsbCBhZGFwdCB0byBuZXcgY2hpbGQgZWxlbWVudHNcbiAqIGFkZGVkIG9yIHJlbW92ZWQgYXQgcnVudGltZS5cbiAqXG4gKiBDdXJyZW50bHksIHRoaXMgY29tcG9uZW50IGRvZXMgbm90IG1lZXQgdGhlIEdvbGQgU3RhbmRhcmQgY3JpdGVyaWEgXCJTaXplIHRvXG4gKiBDb250ZW50XCIuIEFzIGEgcmVzdWx0LCBmb3IgdGhlIHRpbWUgYmVpbmcsICoqeW91IG11c3QgbWFudWFsbHkgc2V0IGEgc2l6ZSBvblxuICogdGhpcyBjb21wb25lbnQqKi4gVHdvIGFwcHJvYWNoZXMgYXJlIHRvOiAxKSBzdHJldGNoIHRoZSBjb21wb25lbnQgYWNyb3NzXG4gKiB3aGF0ZXZlciBzdXJmYWNlIGl0IGlzIGNvbnRhaW5lZCB3aXRoaW4sIG9yIDIpIHNldCBpdCB0byBiZSBsYXJnZXIgdGhhbiB0aGVcbiAqIGxhcmdlc3QgY2hpbGQgZWxlbWVudCB5b3Ugd2FudCB0byBkaXNwbGF5LiBUaGUgZm9ybWVyIGFwcHJvYWNoIGlzIG1vcmVcbiAqIGNvbW1vbiwgYW5kIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBzdHlsaW5nIHN1Y2ggYXM6XG4gKlxuICogICAgIGh0bWwge1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgIH1cbiAqXG4gKiAgICAgYm9keSB7XG4gKiAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gKiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICogICAgICAgaGVpZ2h0OiAxMDAlO1xuICogICAgICAgbWFyZ2luOiAwO1xuICogICAgIH1cbiAqXG4gKiAgICAgYmFzaWMtY2Fyb3VzZWwge1xuICogICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICogICAgICAgZmxleDogMTtcbiAqICAgICB9XG4gKlxuICogVGhlIHN0YW5kYXJkIGJhc2ljLWNhcm91c2VsIGNvbXBvbmVudCBzdXBwb3J0cyBuYXZpZ2F0aW9uIHZpYSB0aGUgZm9sbG93aW5nXG4gKiBpbnB1dCBtZXRob2RzOlxuICpcbiAqICogS2V5Ym9hcmQuIFdoZW4gdGhlIGNhcm91c2VsIGhhcyBmb2N1cywgdGhlIHVzZXIgY2FuIHByZXNzIExlZnQsIFJpZ2h0LFxuICogICBIb21lLCBvciBFbmQuIFRoZXNlIG5hdmlnYXRlIHRvIHRoZSBleHBlY3RlZCBlbGVtZW50LlxuICogKiBUb3VjaC4gT24gbW9iaWxlIGFuZCBvdGhlciB0b3VjaC1lbmFibGVkIGRldmljZXMsIHRoZSB1c2VyIGNhbiBkcmFnIGxlZnQgb3JcbiAqICAgcmlnaHQuXG4gKiAqIFRyYWNrcGFkLiBUaGUgdXNlciBjYW4gc3dpcGUgbGVmdCBvciByaWdodCBvbiBhIHRyYWNrcGFkIHRvIG5hdmlnYXRlLlxuICpcbiAqIEJlY2F1c2UgY2Fyb3VzZWxzIGFyZSB1c2VkIGluIGEgd2lkZSB2YXJpZXR5IG9mIGNpcmN1bXN0YW5jZXMsIGJ5IGRlZmF1bHRcbiAqIGJhc2ljLWNhcm91c2VsIHByb3ZpZGVzIGEgbWluaW1hbCBhcHBlYXJhbmNlIGFuZCBubyBzZXBhcmF0ZWx5IGludGVyYWN0aXZlXG4gKiBlbGVtZW50cyBzdWNoIGFzIGFycm93IGJ1dHRvbnMgb24gdGhlIHNpZGUgb3IgZG90cyBhbG9uZyB0aGUgYm90dG9tLiBUaG9zZVxuICogZWxlbWVudHMgY2FuIGJlIGFkZGVkIGJ5IHdyYXBwaW5nIGEgQ2Fyb3VzZWwgaW4gb3B0aW9uYWwgbWl4aW5zOlxuICpcbiAqICogW0Fycm93U2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9BcnJvd1NlbGVjdGlvbk1peGluLm1kKS5cbiAqICAgQWRkcyBwcm9taW5lbnQgbGVmdCBhbmQgcmlnaHQgYXJyb3cgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgY2Fyb3VzZWwuXG4gKiAqIFtQYWdlRG90c01peGluXSguLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2RvY3MvUGFnZURvdHNNaXhpbi5tZCkuXG4gKiAgIEFkZHMgYSBzZXJpZXMgb2Ygc21hbGwgZG90cyBiZWxvdyB0aGUgY2Fyb3VzZWwgdG8gaW5kaWNhdGUgdGhlIHVzZXInc1xuICogICBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS5cbiAqICogW1RpbWVyU2VsZWN0aW9uTWl4aW5dKC4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvZG9jcy9UaW1lclNlbGVjdGlvbk1peGluLm1kKS5cbiAqICAgQWR2YW5jZXMgdG8gdGhlIG5leHQgaXRlbSBvbiBhIHRpbWVyLlxuICogKiBbVGFiU3RyaXBNaXhpbl0oLi4vYmFzaWMtdGFiLXN0cmlwKS5cbiAqICAgQWRkcyBhIHN0cmlwIG9mIHRyYWRpdGlvbmFsIHRhYiBidXR0b25zLlxuICpcbiAqIFNlZSB0aG9zZSBjb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMsIGJ1dCBpbiBnZW5lcmFsIHlvdSBjYW4gY29uc3RydWN0IGFcbiAqIGNvbW1vbiBjYXJvdXNlbCB3aXRoIGJvdGggYXJyb3cgYnV0dG9ucyBhbmQgZG90cyBsaWtlIHNvOlxuICpcbiAqICAgICBjbGFzcyBNeUNhcm91c2VsIGV4dGVuZHNcbiAqICAgICAgICAgQXJyb3dTZWxlY3Rpb25NaXhpbihQYWdlRG90c01peGluKENhcm91c2VsKSkge31cbiAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWNhcm91c2VsJywgTXlDYXJvdXNlbCk7XG4gKlxuICogRm9yIHVuaXZlcnNhbCBhY2Nlc3MsIGJhc2ljLWNhcm91c2VsIGF1dG9tYXRpY2FsbHkgYWRkcyBhIHZhcmlldHkgb2ZcbiAqIFtBUklBXShodHRwOi8vd3d3LnczLm9yZy9XQUkvaW50cm8vYXJpYSkgcHJvcGVydGllcyB0byBpdHNlbGYgYW5kIHRvIGNoaWxkXG4gKiBlbGVtZW50cy4gVGhpcyBoZWxwcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2VxdWVuY2Ugb2YgZWxlbWVudHMgaW4gdGhlIGNhcm91c2VsXG4gKiB1c2luZyBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLlxuICpcbiAqIEBleHRlbmRzIEFuaW1hdGlvblN0YWdlXG4gKiBAbWl4ZXMgSG9yaXpvbnRhbE5hdmlnYXRpb25NaXhpblxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEFuaW1hdGlvblN0YWdlLmNvbXBvc2UoXG4gIEhvcml6b250YWxOYXZpZ2F0aW9uTWl4aW5cbikge31cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiYXNpYy1jYXJvdXNlbCcsIENhcm91c2VsKTtcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuXG5cbi8vIE1lbW9pemVkIG1hcHMgb2YgYXR0cmlidXRlIHRvIHByb3BlcnR5IG5hbWVzIGFuZCB2aWNlIHZlcnNhLlxuY29uc3QgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzID0ge307XG5jb25zdCBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzID0ge307XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4oSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgc2V0IHRoZSBwcm9wZXJ0eS5cbiAgICAgIC8vIElnbm9yZSBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzIGhhbmRsZWQgYnkgdGhlIERPTS5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzRm9yQ2xhc3ModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0L3Vuc2V0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYW4gYXR0cmlidXRlLiBBblxuICAgICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAgICogc2V0IGF0dHJpYnV0ZXMuIEEgY2FsbCB0byBgcmVmbGVjdEF0dHJpYnV0ZWAgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsXG4gICAgICogYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiB0aGUgKmF0dHJpYnV0ZSogKG5vdCBwcm9wZXJ0eSkgdG8gc2V0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIHJlZmxlY3RBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNhZmVBdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZSh0aGlzLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGNsYXNzIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFzIGNsYXNzLiBBblxuICAgICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAgICogc2V0IGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuIEEgY2FsbCB0b1xuICAgICAqIGByZWZsZWN0Q2xhc3NgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudFxuICAgICAqIGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNsYXNzIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUcnVlIHRvIHNldCB0aGUgY2xhc3MsIGZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICAgKi9cbiAgICByZWZsZWN0Q2xhc3MoY2xhc3NOYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNhZmVBdHRyaWJ1dGVzLnRvZ2dsZUNsYXNzKHRoaXMsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICBpZiAoIXByb3BlcnR5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgY29uc3QgaHlwZW5SZWdFeCA9IC8tKFthLXpdKS9nO1xuICAgIHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShoeXBlblJlZ0V4LFxuICAgICAgICBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV0gPSBwcm9wZXJ0eU5hbWU7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc0ZvckNsYXNzKGNsYXNzRm4pIHtcblxuICAvLyBXZSB0cmVhdCB0aGUgZWxlbWVudCBiYXNlIGNsYXNzZXMgYXMgaWYgdGhleSBoYXZlIG5vIGF0dHJpYnV0ZXMsIHNpbmNlIHdlXG4gIC8vIGRvbid0IHdhbnQgdG8gcmVjZWl2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIHRoZW0uXG4gIGlmIChjbGFzc0ZuID09PSBIVE1MRWxlbWVudCB8fCBjbGFzc0ZuID09PSBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgcGFyZW50IGNsYXNzLlxuICBjb25zdCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2xhc3NGbi5wcm90b3R5cGUpLmNvbnN0cnVjdG9yO1xuICBjb25zdCBiYXNlQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3JDbGFzcyhiYXNlQ2xhc3MpO1xuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciB0aGlzIGNsYXNzLlxuICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2xhc3NGbi5wcm90b3R5cGUpO1xuICBjb25zdCBzZXR0ZXJOYW1lcyA9IHByb3BlcnR5TmFtZXMuZmlsdGVyKHByb3BlcnR5TmFtZSA9PlxuICAgIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBjbGFzc0ZuLnByb3RvdHlwZSwgcHJvcGVydHlOYW1lKS5zZXQgPT09ICdmdW5jdGlvbicpO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gc2V0dGVyTmFtZXMubWFwKHNldHRlck5hbWUgPT5cbiAgICAgIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHNldHRlck5hbWUpKTtcblxuICAvLyBNZXJnZS5cbiAgY29uc3QgZGlmZiA9IGF0dHJpYnV0ZXMuZmlsdGVyKGF0dHJpYnV0ZSA9PlxuICAgICAgYmFzZUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpIDwgMCk7XG4gIHJldHVybiBiYXNlQXR0cmlidXRlcy5jb25jYXQoZGlmZik7XG59XG5cbi8vIENvbnZlcnQgYSBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lIHRvIGEgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHByb3BlcnR5TmFtZSkge1xuICBsZXQgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlc1twcm9wZXJ0eU5hbWVdO1xuICBpZiAoIWF0dHJpYnV0ZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgY29uc3QgdXBwZXJjYXNlUmVnRXggPSAvKFtBLVpdKS9nO1xuICAgIGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKHVwcGVyY2FzZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gYXR0cmlidXRlO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZU1peGluKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXMnKTtcbmNvbnN0IGl0ZW1Jbml0aWFsaXplZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbUluaXRpYWxpemVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50SXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogSXRlbXMgZGlmZmVyIGZyb20gZWxlbWVudCBjb250ZW50cyBpbiBzZXZlcmFsIHdheXM6XG4gICAqXG4gICAqICogVGhleSBhcmUgb2Z0ZW4gcmVmZXJlbmNlZCB2aWEgaW5kZXguXG4gICAqICogVGhleSBtYXkgaGF2ZSBhIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICogKiBJdCdzIGNvbW1vbiB0byBkbyB3b3JrIHRvIGluaXRpYWxpemUgdGhlIGFwcGVhcmFuY2Ugb3Igc3RhdGUgb2YgYSBuZXdcbiAgICogICBpdGVtLlxuICAgKiAqIEF1eGlsaWFyeSBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgYXJlIGZpbHRlcmVkIG91dCBhbmQgbm90IGNvdW50ZWQgYXNcbiAgICogICBpdGVtcy4gQXV4aWxpYXJ5IGVsZW1lbnRzIGluY2x1ZGUgbGluaywgc2NyaXB0LCBzdHlsZSwgYW5kIHRlbXBsYXRlXG4gICAqICAgZWxlbWVudHMuIFRoaXMgZmlsdGVyaW5nIGVuc3VyZXMgdGhhdCB0aG9zZSBhdXhpbGlhcnkgZWxlbWVudHMgY2FuIGJlXG4gICAqICAgdXNlZCBpbiBtYXJrdXAgaW5zaWRlIG9mIGEgbGlzdCB3aXRob3V0IGJlaW5nIHRyZWF0ZWQgYXMgbGlzdCBpdGVtcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbi5tZCkuXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbmx5IHJlZmVyZW5jZWQgcHJvcGVydHkgZGVmaW5lZCBieSB0aGlzIG1peGluIGlzIHRoZSBgaXRlbXNgXG4gICAqIHByb3BlcnR5LiBUbyBhdm9pZCBoYXZpbmcgdG8gZG8gd29yayBlYWNoIHRpbWUgdGhhdCBwcm9wZXJ0eSBpcyByZXF1ZXN0ZWQsXG4gICAqIHRoaXMgbWl4aW4gc3VwcG9ydHMgYW4gb3B0aW1pemVkIG1vZGUuIElmIHlvdSBpbnZva2UgdGhlIGBjb250ZW50Q2hhbmdlZGBcbiAgICogbWV0aG9kIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLCB0aGUgbWl4aW4gY29uY2x1ZGVzIHRoYXQgeW91J2xsIHRha2VcbiAgICogY2FyZSBvZiBub3RpZnlpbmcgaXQgb2YgZnV0dXJlIGNoYW5nZXMsIGFuZCB0dXJucyBvbiB0aGUgb3B0aW1pemF0aW9uLiBXaXRoXG4gICAqIHRoYXQgb24sIHRoZSBtaXhpbiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcHV0ZWQgc2V0IG9mIGl0ZW1zLCBhbmQgd2lsbFxuICAgKiByZXR1cm4gdGhhdCBpbW1lZGlhdGVseSBvbiBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBgaXRlbXNgIHByb3BlcnR5LiBJZiB5b3VcbiAgICogdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aFxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnRNaXhpbi5tZCksIHRoZVxuICAgKiBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgZm9yIHlvdSB3aGVuIHRoZSBlbGVtZW50J3MgY2hpbGRyZW5cbiAgICogY2hhbmdlLCB0dXJuaW5nIG9uIHRoZSBvcHRpbWl6YXRpb24gYXV0b21hdGljYWxseS5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBTaW5jZSB3ZSBnb3QgdGhlIGNvbnRlbnRDaGFuZ2VkIGNhbGwsIHdlJ2xsIGFzc3VtZSB3ZSdsbCBiZSBub3RpZmllZCBpZlxuICAgICAgLy8gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzIGxhdGVyLiBXZSB0dXJuIG9uIG1lbW9pemF0aW9uIG9mIHRoZSBpdGVtc1xuICAgICAgLy8gcHJvcGVydHkgYnkgc2V0dGluZyBvdXIgaW50ZXJuYWwgcHJvcGVydHkgdG8gbnVsbCAoaW5zdGVhZCBvZlxuICAgICAgLy8gdW5kZWZpbmVkKS5cbiAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gbnVsbDtcblxuICAgICAgdGhpc1tzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKSB7IHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXShpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3Rpb24gc3RhdGUgZm9yIGEgc2luZ2xlIGl0ZW0gaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxuICAgICAqIGhhcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCB0aGlzIGFwcGxpZXMgYSBgc2VsZWN0ZWRgIENTUyBjbGFzcyBpZiB0aGUgaXRlbVxuICAgICAqIGlzIHNlbGVjdGVkLCBhbmQgcmVtb3ZlZCBpdCBpZiBub3Qgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gd2hvc2Ugc2VsZWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSBUcnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zO1xuICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAvLyBOb3RlOiB0ZXN0IGZvciAqZXF1YWxpdHkqIHdpdGggbnVsbDsgZG9uJ3QgdHJlYXQgdW5kZWZpbmVkIGFzIGEgbWF0Y2guXG4gICAgICAgIGlmICh0aGlzW2l0ZW1zU3ltYm9sXSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIE1lbW9pemUgdGhlIHNldCBvZiBpdGVtcy5cbiAgICAgICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IGl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1lbW9pemVkIGl0ZW1zLlxuICAgICAgICBpdGVtcyA9IHRoaXNbaXRlbXNTeW1ib2xdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5pdGVtcywgaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdKSB7XG4gICAgICAgICAgdGhpc1tzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7XG4gICAgICAgICAgaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbnRlbnRJdGVtc1xuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gQ29udGVudEl0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgY29uc3QgYXV4aWxpYXJ5VGFncyA9IFtcbiAgICAnbGluaycsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGVtcGxhdGUnXG4gIF07XG4gIHJldHVybiBbXS5maWx0ZXIuY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aFxuICAgKiBbS2V5Ym9hcmREaXJlY3Rpb25NaXhpbl0oS2V5Ym9hcmREaXJlY3Rpb25NaXhpbi5tZCkgKHdoaWNoIG1hcHMga2V5Ym9hcmRcbiAgICogZXZlbnRzIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgW3N5bWJvbHMuZ29Eb3duXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRG93bl0pIHsgc3VwZXJbc3ltYm9scy5nb0Rvd25dKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgc3VwZXJbc3ltYm9scy5nb0VuZF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29TdGFydF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSkgeyBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29VcF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1VwXSkgeyBzdXBlcltzeW1ib2xzLmdvVXBdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkNvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIGFsc28gcHJvdmlkZXMgbm90aWZpY2F0aW9uIG9mIGNoYW5nZXMgdG8gYSBjb21wb25lbnQncyBjb250ZW50LiBJdFxuICAgKiB3aWxsIGludm9rZSBhIGBjb250ZW50Q2hhbmdlZGAgbWV0aG9kIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdFxuICAgKiBpbnN0YW50aWF0ZWQsIGFuZCB3aGVuZXZlciBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gY2hhbmdlLiBUaGlzIGlzIGFuXG4gICAqIGVhc3kgd2F5IHRvIHNhdGlzZnkgdGhlIEdvbGQgU3RhbmRhcmQgY2hlY2tsaXN0IGl0ZW0gZm9yIG1vbml0b3JpbmdcbiAgICogW0NvbnRlbnQgQ2hhbmdlc10oaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvZ29sZC1zdGFuZGFyZC93aWtpL0NvbnRlbnQtQ2hhbmdlcykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBsZXQgYmFzZSA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4oRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluKEhUTUxFbGVtZW50KSk7XG4gICAqIGNsYXNzIENvdW50aW5nRWxlbWVudCBleHRlbmRzIGJhc2Uge1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc3VwZXIoKTtcbiAgICogICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAqICAgICByb290LmlubmVySFRNTCA9IGA8c2xvdD48L3Nsb3Q+YDtcbiAgICogICB9XG4gICAqXG4gICAqICAgY29udGVudENoYW5nZWQoKSB7XG4gICAqICAgICAvLyBDb3VudCB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4sIGJvdGggaW5pdGlhbGx5IGFuZCB3aGVuIGNoYW5nZWQuXG4gICAqICAgICB0aGlzLmNvdW50ID0gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuLmxlbmd0aDtcbiAgICogICB9XG4gICAqXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIE5vdGUgdGhhdCBjb250ZW50IGNoYW5nZSBkZXRlY3Rpb24gZGVwZW5kcyB1cG9uIHRoZSBlbGVtZW50IGhhdmluZyBhdCBsZWFzdFxuICAgKiBvbmUgYHNsb3RgIGVsZW1lbnQgaW4gaXRzIHNoYWRvdyBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbk1peGluLm1kKS4gU2VlIHRoYXQgbWl4aW4gZm9yXG4gICAqIGEgZGlzY3Vzc2lvbiBvZiBob3cgdGhhdCB3b3Jrcy4gVGhpcyBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudE1peGluXG4gICAqIHByb3ZpZGVzIGFuIGVhc3kgd2F5IG9mIGRlZmluaW5nIHRoZSBcImNvbnRlbnRcIiBvZiBhIGNvbXBvbmVudCBhcyB0aGVcbiAgICogY29tcG9uZW50J3MgZGlzdHJpYnV0ZWQgY2hpbGRyZW4uIFRoYXQgaW4gdHVybiBsZXRzIG1peGlucyBsaWtlXG4gICAqIFtDb250ZW50SXRlbXNNaXhpbl0oQ29udGVudEl0ZW1zTWl4aW4ubWQpIG1hbmlwdWxhdGUgdGhlIGNoaWxkcmVuIGFzIGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBjaGFuZ2VzIG9uIGFsbCBzbG90cy5cbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICBzbG90cy5mb3JFYWNoKHNsb3QgPT4gc2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICBjb25zdCBkaXN0cmlidXRlZENoaWxkcmVuID0gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgICAgaWYgKHR5cGVvZiBkaXN0cmlidXRlZENoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50TWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFwiZGlzdHJpYnV0ZWRDaGlsZHJlblwiIHByb3BlcnR5LmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgfVxuICAgIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxuICAgICAgLy8gVE9ETzogU2V0IHRoZSBjaGlsZHJlbiB0byB0aGUgZ2l2ZW4gdmFsdWUgKHdoaWNoIHNob3VsZCBiZSBhbiBhcnJheSBvZlxuICAgICAgLy8gZWxlbWVudHMpP1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIGNvbXBvbmVudCdzIGNvbnRlbnRzIChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50XG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Db250ZW50O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHRcbiAgICAgKiBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZ1xuICAgICAqIGFueSBzbG90IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgY29uc3QgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIi5cbiAgICBjb25zdCBpc1Nsb3QgPSB0eXBlb2YgSFRNTFNsb3RFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50IDpcbiAgICAgIG5vZGUubG9jYWxOYW1lID09PSAnc2xvdCc7XG4gICAgaWYgKGlzU2xvdCkge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGNvbnN0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBGcmFjdGlvbmFsU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBBZGRzIHN1cHBvcnQgZm9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uOiB0cmVhdGluZyBhIHNlbGVjdGlvbiBhcyBhIHJlYWxcbiAgICogbnVtYmVyIHRoYXQgY29tYmluZXMgYW4gaW50ZWdlciBwb3J0aW9uIChhbiBpbmRleCBpbnRvIGEgbGlzdCksIGFuZCBhXG4gICAqIGZyYWN0aW9uIChpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZSBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXNcbiAgICogaXRlbSkuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIGNvbXBvbmVudHMgdGhhdCBzdXBwb3J0IGluY3JlbWVudGFsIG9wZXJhdGlvbnMgZHVyaW5nXG4gICAqIGRyYWdnaW5nIGFuZCBzd2lwaW5nLiBFeGFtcGxlOiBhIGNhcm91c2VsIGNvbXBvbmVudCBoYXMgc2V2ZXJhbCBpdGVtcywgYW5kIHRoZVxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpcyBpdGVtIDMuIFRoZSB1c2VyIGJlZ2lucyBzd2lwaW5nIHRvIHRoZSBsZWZ0LFxuICAgKiBtb3ZpbmcgdG93YXJkcyBzZWxlY3RpbmcgaXRlbSA0LiBIYWxmd2F5IHRocm91Z2ggdGhpcyBvcGVyYXRpb24sIHRoZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBpcyAzLjUuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgcGVybWl0cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gbWl4aW5zIGxpa2VcbiAgICogW1N3aXBlRGlyZWN0aW9uTWl4aW5dKC4vU3dpcGVEaXJlY3Rpb25NaXhpbi5tZCkgYW5kXG4gICAqIFtUcmFja3BhZERpcmVjdGlvbk1peGluXSguL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4ubWQpLCB3aGljaCBnZW5lcmF0ZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZXMsIGFuZCBtaXhpbnMgbGlrZVxuICAgKiBbU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW5dKC4vU2VsZWN0aW9uQW5pbWF0aW9uTWl4aW4ubWQpLCB3aGljaCBjYW4gcmVuZGVyXG4gICAqIHNlbGVjdGlvbiBhdCBhIGZyYWN0aW9uYWwgdmFsdWUuXG4gICAqL1xuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBGcmFjdGlvbmFsU2VsZWN0aW9uO1xufVxuXG5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgY29uc3QgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGxldCBkYW1wZWQ7XG4gICAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGJlZ2lubmluZyBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IC1taXhpbi5oZWxwZXJzLmRhbXBpbmcoLXNlbGVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPj0gYm91bmQpIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGVuZCBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIHJpZ2h0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSBib3VuZCArIG1peGluLmhlbHBlcnMuZGFtcGluZyhzZWxlY3Rpb24gLSBib3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgICBkYW1wZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBkYW1wZWQ7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gICAqIHZhbHVlcy5cbiAgICpcbiAgICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICAgKiBiZWxvdy9hYm92ZSB0aGUgYWN0dWFsIG1pbmltdW0vbWF4aW11bS4gVGhpcyByZXF1aXJlcyBjYWxjdWxhdGluZyBhXG4gICAqIGh5cGVyYm9saWMgZnVuY3Rpb24uXG4gICAqXG4gICAqIFNlZSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9eSslM0QrLTElMkYlMjh4JTJCMSUyOSslMkIrMVxuICAgKiBmb3IgdGhlIG9uZSB3ZSB1c2UuIFRoZSBvbmx5IHBvcnRpb24gb2YgdGhhdCBmdW5jdGlvbiB3ZSBjYXJlIGFib3V0IGlzIHdoZW5cbiAgICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gICAqIHRhbmdlbnQgdG8gdGhlIGRpYWdvbmFsIGxpbmUgeD15IGF0ICgwLCAwKS4gVGhpcyBlbnN1cmVzIHNtb290aCBjb250aW51aXR5XG4gICAqIHdpdGggdGhlIG5vcm1hbCBkcmFnIGJlaGF2aW9yLCBpbiB3aGljaCB0aGUgdmlzaWJsZSBzbGlkaW5nIGlzIGxpbmVhciB3aXRoXG4gICAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICAgKi9cbiAgZGFtcGluZyh4KSB7XG4gICAgY29uc3QgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcbiAgICByZXR1cm4geTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNpbXBseSBhZGRzIHRoZSBlbGVtZW50J3MgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRGcmFjdGlvbmBcbiAgICogcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb25cbiAgICovXG4gIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRGcmFjdGlvbiA9IGVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbiB8fCAwO1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfSxcblxuICAvKlxuICAgKiBCcmVha3MgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbnRvIGl0cyBpbnRlZ2VyIGFuZCBmcmFjdGlvbmFsIHBhcnRzLlxuICAgKlxuICAgKiBFeGFtcGxlOiBpZiBwYXNzZWQgMy41LCB0aGlzIHJldHVybnMgeyBpbmRleDogMywgZnJhY3Rpb246IDUgfS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQW4gb2JqZWN0IHdpdGggYW4gYGluZGV4YCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBpbnRlZ2VyIGNvbXBvbmVudCwgYW5kIGEgYGZyYWN0aW9uYCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAgICovXG4gIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAgIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgICAvLyBjb25zdCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0aW9uKTtcbiAgICBjb25zdCBmcmFjdGlvbiA9IHNlbGVjdGlvbiAtIGluZGV4O1xuICAgIHJldHVybiB7IGluZGV4LCBmcmFjdGlvbiB9O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybnMgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBwb2ludCBhZnRlciBhY2NvdW50aW5nIGZvciB3cmFwcGluZywgZW5zdXJpbmdcbiAgICogdGhhdCB0aGUgaW50ZWdlciBwb3J0aW9uIG9mIHRoZSBzZWxlY3Rpb24gc3RheXMgYmV0d2VlbiAwIGFuZCBgaXRlbUNvdW50YC0xLlxuICAgKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBlbmQgb2YgdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDUuNSBhbmRcbiAgICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICogdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDAuNSBhbmQgYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDQuNS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgc2VsZWN0aW9uIHBvaW50XG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgcmV0dXJuICgoc2VsZWN0aW9uICUgaXRlbUNvdW50KSArIGl0ZW1Db3VudCkgJSBpdGVtQ291bnQ7XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJuIHRoZSBwYXJ0cyBvZiBhIHNlbGVjdGlvbiwgZmlyc3Qgd3JhcHBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAkyBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdyYXAg4oCTIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBzaG91bGQgd3JhcCB0byBzdGF5IHdpdGhpbiB0aGVcbiAgICogbGlzdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSDigJMgVGhlIHBhcnRzIG9mIHRoZSBzZWxlY3Rpb24sIHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhc1xuICAgKiBgc2VsZWN0aW9uUGFydHNgLlxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbiwgaXRlbUNvdW50LCB3cmFwKSB7XG4gICAgaWYgKHdyYXApIHtcbiAgICAgIHNlbGVjdGlvbiA9IG1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gICAgfVxuICAgIHJldHVybiBtaXhpbi5oZWxwZXJzLnNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbik7XG4gIH1cblxufTtcbiIsImltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZERpcmVjdGlvbk1peGluJztcbmltcG9ydCBLZXlib2FyZE1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkTWl4aW4nO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU3dpcGVEaXJlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbk1peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RyYWNrcGFkRGlyZWN0aW9uTWl4aW4nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY29uc3QgbWl4aW5zID0gW1xuICAgIERpcmVjdGlvblNlbGVjdGlvbk1peGluLFxuICAgIEtleWJvYXJkTWl4aW4sXG4gICAgS2V5Ym9hcmREaXJlY3Rpb25NaXhpbixcbiAgICBTd2lwZURpcmVjdGlvbk1peGluLFxuICAgIFRyYWNrcGFkRGlyZWN0aW9uTWl4aW5cbiAgXTtcblxuICAvLyBEb24ndCBhc3N1bWUgYmFzZSBjbGFzcyB1c2VzIENvbXBvc2FibGVNaXhpbi4gRG8gY29tcG9zaXRpb24gYnkgaGFuZC5cbiAgY29uc3QgYmFzZVdpdGhNaXhpbnMgPSBtaXhpbnMucmVkdWNlKChjLCBtaXhpbikgPT4gbWl4aW4oYyksIGJhc2UpO1xuXG4gIC8qKlxuICAgKiBAbWl4ZXMgS2V5Ym9hcmRNaXhpblxuICAgKiBAbWl4ZXMgS2V5Ym9hcmREaXJlY3Rpb25NaXhpblxuICAgKiBAbWl4ZXMgU3dpcGVEaXJlY3Rpb25NaXhpblxuICAgKiBAbWl4ZXMgVHJhY2twYWREaXJlY3Rpb25NaXhpblxuICAgKi9cbiAgY2xhc3MgSG9yaXpvbnRhbE5hdmlnYXRpb24gZXh0ZW5kcyBiYXNlV2l0aE1peGlucyB7XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLm5hdmlnYXRpb25BeGlzID0gJ2hvcml6b250YWwnO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlV2l0aEdhcCc7XG4gICAgICAvLyBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gSG9yaXpvbnRhbE5hdmlnYXRpb247XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgW0tleWJvYXJkTWl4aW5dKEtleWJvYXJkTWl4aW4ubWQpIGZvciB0aGF0XG4gICAqIHB1cnBvc2UsIG9yIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aFxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5dKERpcmVjdGlvblNlbGVjdGlvbk1peGluLm1kKS5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvRG93bl0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0Rvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29FbmRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvVXBdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29VcF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgY29uc3QgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb0VuZF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKSA6IHRoaXNbc3ltYm9scy5nb1VwXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvRW5kXSgpIDogdGhpc1tzeW1ib2xzLmdvRG93bl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoYW5kbGVzIHNldmVyYWwga2V5Ym9hcmQtcmVsYXRlZCBmZWF0dXJlcy5cbiAgICpcbiAgICogRmlyc3QsIGl0IHdpcmVzIHVwIGEgc2luZ2xlIGtleWRvd24gZXZlbnQgaGFuZGxlciB0aGF0IGNhbiBiZSBzaGFyZWQgYnlcbiAgICogbXVsdGlwbGUgbWl4aW5zIG9uIGEgY29tcG9uZW50LiBUaGUgZXZlbnQgaGFuZGxlciB3aWxsIGludm9rZSBhIGBrZXlkb3duYFxuICAgKiBtZXRob2Qgd2l0aCB0aGUgZXZlbnQgb2JqZWN0LCBhbmQgYW55IG1peGluIGFsb25nIHRoZSBwcm90b3R5cGUgY2hhaW4gdGhhdFxuICAgKiB3YW50cyB0byBoYW5kbGUgdGhhdCBtZXRob2QgY2FuIGRvIHNvLlxuICAgKlxuICAgKiBJZiBhIG1peGluIHdhbnRzIHRvIGluZGljYXRlIHRoYXQga2V5Ym9hcmQgZXZlbnQgaGFzIGJlZW4gaGFuZGxlZCwgYW5kIHRoYXRcbiAgICogb3RoZXIgbWl4aW5zIHNob3VsZCAqbm90KiBoYW5kbGUgaXQsIHRoZSBtaXhpbidzIGBrZXlkb3duYCBoYW5kbGVyIHNob3VsZFxuICAgKiByZXR1cm4gYSB2YWx1ZSBvZiB0cnVlLiBUaGUgY29udmVudGlvbiB0aGF0IHNlZW1zIHRvIHdvcmsgd2VsbCBpcyB0aGF0IGFcbiAgICogbWl4aW4gc2hvdWxkIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50IGFuZCwgaWYgbm90LCB0aGVuIGFzayB0aGVcbiAgICogc3VwZXJjbGFzcyB0byBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZlxuICAgKiBnaXZpbmcgdGhlIG1peGluIHRoYXQgd2FzIGFwcGxpZWQgbGFzdCB0aGUgZmlyc3QgY2hhbmNlIGF0IGhhbmRsaW5nIGFcbiAgICoga2V5Ym9hcmQgZXZlbnQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT0gbnVsbCAmJiB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnRhYmluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXNbc3ltYm9scy5kZWZhdWx0c10udGFiaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGFiIGluZGV4IGlzIDAgKGRvY3VtZW50IG9yZGVyKS5cbiAgICAgIGRlZmF1bHRzLnRhYmluZGV4ID0gMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmtleWRvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbiBmcm9tICcuL0ZyYWN0aW9uYWxTZWxlY3Rpb25NaXhpbic7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FuaW1hdGlvbicpO1xuY29uc3QgZHJhZ2dpbmdTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RyYWdnaW5nJyk7XG5jb25zdCBsYXN0QW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0QW5pbWF0aW9uJyk7XG5jb25zdCBwbGF5aW5nQW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IHByZXZpb3VzU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1NlbGVjdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyk7XG5jb25zdCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnKTtcbmNvbnN0IHJlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BbmltYXRpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHVzZXMgYW5pbWF0aW9uIHRvIHNob3cgdHJhbnNpdGlvbnMgYmV0d2VlbiBzZWxlY3Rpb24gc3RhdGVzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGJ5IGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIHByb3ZpZGUgdmlzaWJsZVxuICAgKiBhbmltYXRpb25zIHdoZW4gY2hhbmdpbmcgdGhlIHNlbGVjdGlvbi4gRm9yIGV4YW1wbGUsIGEgY2Fyb3VzZWwgY29tcG9uZW50XG4gICAqIG1heSB3YW50IHRvIGRlZmluZSBhIHNsaWRpbmcgYW5pbWF0aW9uIGVmZmVjdCBzaG93biB3aGVuIG1vdmluZyBiZXR3ZWVuXG4gICAqIGl0ZW1zLlxuICAgKlxuICAgKiBUaGUgYW5pbWF0aW9uIGlzIGRlZmluZWQgYnkgYSBgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzYCBwcm9wZXJ0eTsgc2VlXG4gICAqIHRoYXQgcHJvcGVydHkgZm9yIGRldGFpbHMgb24gaG93IHRvIGRlZmluZSB0aGVzZSBrZXlmcmFtZXMuIFRoaXMgYW5pbWF0aW9uXG4gICAqIHdpbGwgYmUgdXNlZCBpbiB0d28gd2F5cy4gRmlyc3QsIHdoZW4gbW92aW5nIHN0cmljdGx5IGJldHdlZW4gaXRlbXMsIHRoZVxuICAgKiBhbmltYXRpb24gd2lsbCBwbGF5IHNtb290aGx5IHRvIHNob3cgdGhlIHNlbGVjdGlvbiBjaGFuZ2luZy4gU2Vjb25kLCB0aGVcbiAgICogYW5pbWF0aW9uIGNhbiBiZSB1c2VkIHRvIHJlbmRlciB0aGUgc2VsZWN0aW9uIGF0IGEgZml4ZWQgcG9pbnQgaW4gdGhlXG4gICAqIHRyYW5zaXRpb24gYmV0d2VlbiBzdGF0ZXMuIEUuZy4sIGlmIHRoZSB1c2VyIHBhdXNlcyBoYWxmd2F5IHRocm91Z2hcbiAgICogZHJhZ2dpbmcgYW4gZWxlbWVudCB1c2luZyBbU3dpcGVEaXJlY3Rpb25NaXhpbl0oU3dpcGVEaXJlY3Rpb25NaXhpbi5tZClcbiAgICogb3IgW1RyYWNrcGFkRGlyZWN0aW9uTWl4aW5dKFRyYWNrcGFkRGlyZWN0aW9uTWl4aW4ubWQpcywgdGhlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duIGF0IHRoZSBwb2ludCBleGFjdGx5IGhhbGZ3YXkgdGhyb3VnaC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogW0NvbnRlbnRJdGVtc01peGluXShDb250ZW50SXRlbXNNaXhpbi5tZCkuIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzXG4gICAqIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkSXRlbWAgcHJvcGVydGllcywgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uTWl4aW5dKFNpbmdsZVNlbGVjdGlvbk1peGluLm1kKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBzdXBwb3J0cyBhIGBzZWxlY3Rpb25XcmFwc2AgcHJvcGVydHkuIFdoZW4gdHJ1ZSwgdGhlIHVzZXIgY2FuXG4gICAqIG5hdmlnYXRlIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogZmlyc3QgaXRlbSwgb3IgbmF2aWdhdGUgYmFja3dhcmQgZnJvbSB0aGUgZmlyc3QgaXRlbSBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGxhc3QgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB1c2VzIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuIEZvciB1c2Ugb24gYnJvd3NlcnMgd2hpY2hcbiAgICogZG8gbm90IHN1cHBvcnQgdGhhdCBBUEkgbmF0aXZlbHksIHlvdSB3aWxsIG5lZWQgdG8gbG9hZCB0aGVcbiAgICogW1dlYiBBbmltYXRpb25zIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vd2ViLWFuaW1hdGlvbnMvd2ViLWFuaW1hdGlvbnMtanMpLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQW5pbWF0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3Q7XG4gICAgICB9XG5cbiAgICAgIHRoaXNbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gMjUwO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFByb3ZpZGUgYmFja2luZyBmb3IgdGhlIGRyYWdnaW5nIHByb3BlcnR5LlxuICAgICAqIEFsc28sIHdoZW4gYSBkcmFnIGJlZ2lucywgcmVzZXQgdGhlIGFuaW1hdGlvbnMuXG4gICAgICovXG4gICAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICAgIHJldHVybiB0aGlzW2RyYWdnaW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IFtzeW1ib2xzLmRyYWdnaW5nXSh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXNbc3ltYm9scy5kcmFnZ2luZ107XG4gICAgICB0aGlzW2RyYWdnaW5nU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgICAgaWYgKHZhbHVlICYmICFwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIC8vIEhhdmUgYmVndW4gYSBkcmFnLlxuICAgICAgICB0aGlzW3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlclN5bWJvbF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgLy8gV2UgbWFyayBuZXcgaXRlbXMgaW4gdGhlIGxpc3QgYXMgZXhwbGljaXRseSB2aXNpYmxlIHRvIEFSSUEuIE90aGVyd2lzZSxcbiAgICAgIC8vIHdoZW4gYW4gaXRlbSBpc24ndCB2aXNpYmxlIG9uIHRoZSBzY3JlZW4sIEFSSUEgd2lsbCBhc3N1bWUgdGhlIGl0ZW0gaXNcbiAgICAgIC8vIG9mIG5vIGludGVyZXN0IHRvIHRoZSB1c2VyLCBhbmQgbGVhdmUgaXQgb3V0IG9mIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUuXG4gICAgICAvLyBJZiB0aGUgbGlzdCBjb250YWlucyAxMCBpdGVtcywgYnV0IG9ubHkgMyBhcmUgdmlzaWJsZSwgYSBzY3JlZW4gcmVhZGVyXG4gICAgICAvLyBtaWdodCB0aGVuIGFubm91bmNlIHRoZSBsaXN0IG9ubHkgaGFzIDMgaXRlbXMuIFRvIGVuc3VyZSB0aGF0IHNjcmVlblxuICAgICAgLy8gcmVhZGVycyBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBhbm5vdW5jZSB0aGUgY29ycmVjdCB0b3RhbFxuICAgICAgLy8gbnVtYmVyIG9mIGl0ZW1zLCB3ZSBleHBsaWNpdGx5IG1hcmsgYWxsIGl0ZW1zIGFzIG5vdCBoaWRkZW4uIFRoaXMgd2lsbFxuICAgICAgLy8gZXhwb3NlIHRoZW0gYWxsIGluIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUsIGV2ZW4gdGhlIGl0ZW1zIHdoaWNoIGFyZVxuICAgICAgLy8gY3VycmVudGx5IG5vdCByZW5kZXJlZC5cbiAgICAgIC8vXG4gICAgICAvLyBUT0RPOiBHZW5lcmFsbHkgc3BlYWtpbmcsIHRoaXMgZW50aXJlIG1peGluIGFzc3VtZXMgdGhhdCB0aGUgdXNlciBjYW5cbiAgICAgIC8vIG5hdmlnYXRlIHRocm91Z2ggYWxsIGl0ZW1zIGluIGEgbGlzdC4gQnV0IGFuIGFwcCBjb3VsZCBzdHlsZSBhbiBpdGVtIGFzXG4gICAgICAvLyBkaXNwbGF5Om5vbmUgb3IgdmlzaWJpbGl0eTpoaWRkZW4gYmVjYXVzZSB0aGUgdXNlciBpcyBub3QgYWxsb3dlZCB0b1xuICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGF0IGl0ZW0gYXQgdGhlIG1vbWVudC4gU3VwcG9ydCBmb3IgdGhpcyBzY2VuYXJpbyBzaG91bGRcbiAgICAgIC8vIGJlIGFkZGVkLiBUaGlzIHdvdWxkIGVudGFpbCBjaGFuZ2luZyBhbGwgbG9jYXRpb25zIHdoZXJlIGEgbWl4aW5cbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGNvdW50aW5nIGl0ZW1zLCBpdGVyYXRpbmcgb3ZlciB0aGUgKHZpc2libGUpIGl0ZW1zLCBhbmRcbiAgICAgIC8vIHNob3dpbmcgb3IgaGlkaW5nIGl0ZW1zLiBBbW9uZyBvdGhlciB0aGluZ3MsIHRoZSBjb2RlIGJlbG93IHRvIG1ha2VcbiAgICAgIC8vIGl0ZW1zIHZpc2libGUgdG8gQVJJQSB3b3VsZCBuZWVkIHRvIGRpc2NyaW1pbmF0ZSBiZXR3ZWVuIGl0ZW1zIHdoaWNoXG4gICAgICAvLyBhcmUgaW52aXNpYmxlIGJlY2F1c2Ugb2YgYW5pbWF0aW9uIHN0YXRlLCBvciBpbnZpc2libGUgYmVjYXVzZSB0aGUgdXNlclxuICAgICAgLy8gc2hvdWxkbid0IGludGVyYWN0IHdpdGggdGhlbS5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG5cbiAgICAgIC8vIFRPRE86IEFsc28gcmVzZXQgb3VyIG5vdGlvbiBvZiB0aGUgbGFzdCByZW5kZXJlZCBzZWxlY3Rpb24/IFRoaXMgY29tZXNcbiAgICAgIC8vIHVwIHdoZW4gYSBET00gcmVtb3ZhbCBjYXVzZXMgdGhlIHNlbGVjdGVkIGl0ZW0gdG8gY2hhbmdlIHBvc2l0aW9uLlxuICAgICAgLy8gdGhpc1twcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBudWxsO1xuXG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRBbmltYXRpb25zKCkge1xuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSBbRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluXShGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4ubWQpXG4gICAgICogbWl4aW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgaW5kZXgsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBvZiBhIHNlbGVjdGlvbiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqXG4gICAgICogVGhpcyBtZWFzdXJlcyB0aGUgYW1vdW50IG9mIHRpbWUgcmVxdWlyZWQgZm9yIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiB0b1xuICAgICAqIGNvbXBsZXRlLiBUaGlzIG51bWJlciByZW1haW5zIGNvbnN0YW50LCBldmVuIGlmIHRoZSBudW1iZXIgb2YgaXRlbXMgYmVpbmdcbiAgICAgKiBhbmltYXRlZCBpbmNyZWFzZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyNTAgbWlsbGlzZWNvbmRzIChhIHF1YXJ0ZXIgYSBzZWNvbmQpLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAyNTBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiBhIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIHNob3J0aGFuZCBmb3Igc2V0dGluZyB0aGUgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2BcbiAgICAgKiBwcm9wZXJ0eSB0byBzdGFuZGFyZCBrZXlmcmFtZXMuIFN1cHBvcnRlZCBzdHJpbmcgdmFsdWVzOlxuICAgICAqXG4gICAgICogKiBcImNyb3NzZmFkZVwiXG4gICAgICogKiBcInJldmVhbFwiXG4gICAgICogKiBcInJldmVhbFdpdGhGYWRlXCJcbiAgICAgKiAqIFwic2hvd0FkamFjZW50XCJcbiAgICAgKiAqIFwic2xpZGVcIlxuICAgICAqICogXCJzbGlkZVdpdGhHYXBcIlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCBcInNsaWRlXCJcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gbWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXNbdmFsdWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXlmcmFtZXMgdGhhdCBkZWZpbmUgYW4gYW5pbWF0aW9uIHRoYXQgcGxheXMgZm9yIGFuIGl0ZW0gd2hlbiBtb3ZpbmdcbiAgICAgKiBmb3J3YXJkIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXJyYXkgb2YgQ1NTIHJ1bGVzIHRoYXQgd2lsbCBiZSBhcHBsaWVkLiBUaGVzZSBhcmUgdXNlZCBhc1xuICAgICAqIFtrZXlmcmFtZXNdKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYi1hbmltYXRpb25zLyNrZXlmcmFtZXMtc2VjdGlvbilcbiAgICAgKiB0byBhbmltYXRlIHRoZSBpdGVtIHdpdGggdGhlXG4gICAgICogW1dlYiBBbmltYXRpb25zIEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2FuaW1hdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSBuZXh0IGl0ZW0gYXMgaXQgbW92ZXMgZnJvbVxuICAgICAqIGNvbXBsZXRlbHkgdW5zZWxlY3RlZCAob2Zmc3RhZ2UsIHVzdWFsbHkgcmlnaHQpLCB0byBzZWxlY3RlZCAoY2VudGVyXG4gICAgICogc3RhZ2UpLCB0byBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IGxlZnQpLiBUaGUgY2VudGVyIHRpbWVcbiAgICAgKiBvZiB0aGUgYW5pbWF0aW9uIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBpdGVtJ3MgcXVpc2NlbnQgc2VsZWN0ZWQgc3RhdGUsXG4gICAgICogdHlwaWNhbGx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHN0YWdlIGFuZCBhdCB0aGUgaXRlbSdzIGxhcmdlc3Qgc2l6ZS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGZvcndhcmQgYW5pbWF0aW9uIGlzIGEgc21vb3RoIHNsaWRlIGF0IGZ1bGwgc2l6ZSBmcm9tIHJpZ2h0IHRvXG4gICAgICogbGVmdC5cbiAgICAgKlxuICAgICAqIFdoZW4gbW92aW5nIHRoZSBzZWxlY3Rpb24gYmFja3dhcmQsIHRoaXMgYW5pbWF0aW9uIGlzIHBsYXllZCBpbiByZXZlcnNlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Nzc1J1bGVzW119XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcygpIHtcbiAgICAgIC8vIFN0YW5kYXJkIGFuaW1hdGlvbiBzbGlkZXMgbGVmdC9yaWdodCwga2VlcHMgYWRqYWNlbnQgaXRlbXMgb3V0IG9mIHZpZXcuXG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFuaW1hdGlvbjtcbn1cblxuXG4vLyBXZSBleHBvc2UgaGVscGVycyBvbiB0aGUgbWl4aW4gZnVuY3Rpb24gdGhhdCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gdW5pdCB0ZXN0LlxuLy8gU2luY2UgdGhlc2UgYXJlIG9uIHRoZSBmdW5jdGlvbiwgbm90IG9uIHRoZSBjbGFzcyBlbWl0dGVkIGJ5IHRoZSBmdW5jdGlvbixcbi8vIHRoZXkgZG9uJ3QgZW5kIHVwIGdldHRpbmcgZXhwb3NlZCBvbiBhY3R1YWwgZWxlbWVudCBpbnN0YW5jZXMuXG5taXhpbi5oZWxwZXJzID0ge1xuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIGZyYWN0aW9ucyBmb3IgYW4gZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlblxuICAgKiBzZWxlY3Rpb24gcG9pbnQuIFRoaXMgaXMgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgZWxlbWVudCdzIHNlbGVjdGlvbiBzdGF0ZVxuICAgKiBpbnN0YW50YW5lb3VzbHkuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY29uc2lkZXJzIHRoZSBzZWxlY3RlZEluZGV4IHBhcmFtZXRlciwgd2hpY2ggY2FuIGJlIGEgd2hvbGVcbiAgICogb3IgZnJhY3Rpb25hbCBudW1iZXIsIGFuZCBkZXRlcm1pbmVzIHdoaWNoIGl0ZW1zIHdpbGwgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIGluZGV4LiBUaGlzIGZ1bmN0aW9uIHRoZW4gY2FsY3VsYXRlcyBhIGNvcnJlc3BvbmRpbmcgYW5pbWF0aW9uIGZyYWN0aW9uOiBhXG4gICAqIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBob3cgZmFyIHRocm91Z2ggdGhlIHNlbGVjdGlvbiBhbmltYXRpb25cbiAgICogYW4gaXRlbSBzaG91bGQgYmUgc2hvd24sIG9yIG51bGwgaWYgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogc2VsZWN0aW9uIGluZGV4LiBUaGVzZSBmcmFjdGlvbnMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LCB3aGVyZSB0aGVcbiAgICogYW5pbWF0aW9uIGZyYWN0aW9uIGF0IHBvc2l0aW9uIE4gY29ycmVzcG9uZHMgdG8gaG93IGl0ZW0gTiBzaG91bGQgYmUgc2hvd24uXG4gICAqL1xuICBhbmltYXRpb25GcmFjdGlvbnNGb3JTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0aW9uKSB7XG5cbiAgICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG5cbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIC8vIEhvdyBtYW55IHN0ZXBzIGZyb20gdGhlIHNlbGVjdGlvbiBwb2ludCB0byB0aGlzIGl0ZW0/XG4gICAgICBjb25zdCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFjdGlvbiA9ICgxIC0gc3RlcHMpIC8gMjtcbiAgICAgIHJldHVybiAoYW5pbWF0aW9uRnJhY3Rpb24gPj0gMCAmJiBhbmltYXRpb25GcmFjdGlvbiA8PSAxKSA/XG4gICAgICAgIGFuaW1hdGlvbkZyYWN0aW9uIDpcbiAgICAgICAgbnVsbDsgLy8gT3V0c2lkZSBhbmltYXRpb24gcmFuZ2VcbiAgICB9KTtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gc21vb3RobHkgYW5pbWF0ZSB0aGVcbiAgICogZWxlbWVudCdzIGl0ZW1zIGZyb20gb25lIHNlbGVjdGlvbiBzdGF0ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2YgdGltaW5ncywgd2hlcmUgdGhlIHRpbWluZyBhdCBwb3NpdGlvbiBOIHNob3VsZCBiZVxuICAgKiB1c2VkIHRvIGFuaW1hdGUgaXRlbSBOLiBJZiBhbiBpdGVtJ3MgdGltaW5nIGlzIG51bGwsIHRoZW4gdGhhdCBpdGVtIHNob3VsZFxuICAgKiBub3QgdGFrZSBwbGFjZSBpbiB0aGUgYW5pbWF0aW9uLCBhbmQgc2hvdWxkIGJlIGhpZGRlbiBpbnN0ZWFkLlxuICAgKi9cbiAgZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgICBjb25zdCB0b0luZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0b3RhbFN0ZXBzID49IDAgPyAnbm9ybWFsJzogJ3JldmVyc2UnO1xuICAgIGNvbnN0IGZpbGwgPSAnYm90aCc7XG4gICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgY29uc3Qgc3RlcER1cmF0aW9uID0gdG90YWxTdGVwcyAhPT0gMCA/XG4gICAgICB0b3RhbER1cmF0aW9uICogMiAvIE1hdGguY2VpbChNYXRoLmFicyh0b3RhbFN0ZXBzKSkgOlxuICAgICAgMDsgIC8vIE5vIHN0ZXBzIHJlcXVpcmVkLCBhbmltYXRpb24gd2lsbCBiZSBpbnN0YW50ZW5vdXMuXG5cbiAgICBjb25zdCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGl0ZW1JbmRleCwgdG9TZWxlY3Rpb24pO1xuICAgICAgLy8gSWYgd2UgaW5jbHVkZSB0aGlzIGl0ZW0gaW4gdGhlIHN0YWdnZXJlZCBzZXF1ZW5jZSBvZiBhbmltYXRpb25zIHdlJ3JlXG4gICAgICAvLyBjcmVhdGluZywgd2hlcmUgd291bGQgdGhlIGl0ZW0gYXBwZWFyIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGxldCBwb3NpdGlvbkluU2VxdWVuY2UgPSB0b3RhbFN0ZXBzIC0gc3RlcHM7XG4gICAgICBpZiAodG90YWxTdGVwcyA8IDApIHtcbiAgICAgICAgcG9zaXRpb25JblNlcXVlbmNlID0gLXBvc2l0aW9uSW5TZXF1ZW5jZTtcbiAgICAgIH1cbiAgICAgIC8vIFNvLCBpcyB0aGlzIGl0ZW0gcmVhbGx5IGluY2x1ZGVkIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGlmIChNYXRoLmNlaWwocG9zaXRpb25JblNlcXVlbmNlKSA+PSAwICYmIHBvc2l0aW9uSW5TZXF1ZW5jZSA8PSBNYXRoLmFicyh0b3RhbFN0ZXBzKSkge1xuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsYXkgZm9yIGZpcnN0IGl0ZW0gd2lsbCBiZSBuZWdhdGl2ZS4gVGhhdCB3aWxsIGNhdXNlXG4gICAgICAgIC8vIHRoZSBhbmltYXRpb24gdG8gc3RhcnQgaGFsZndheSB0aHJvdWdoLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gc3RlcER1cmF0aW9uICogKHBvc2l0aW9uSW5TZXF1ZW5jZSAtIDEpLzI7XG4gICAgICAgIGNvbnN0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzLlxuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgY29uc3QgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBpdGVtIHdpbGwgYmUgdGhlIG9uZSAqYWZ0ZXIqIHRoZSBvbmUgd2UncmUgc2VsZWN0aW5nLlxuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICBjb25zdCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbk1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihuZXh0VXBJbmRleCwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIGlmICghaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBuZXh0VXBJbmRleCkpIHtcbiAgICBuZXh0VXBJbmRleCA9IG51bGw7IC8vIEF0IHN0YXJ0L2VuZCBvZiBsaXN0OyBkb24ndCBoYXZlIGEgbmV4dCBpdGVtIHRvIHNob3cuXG4gIH1cblxuICAvLyBQbGF5IHRoZSBhbmltYXRpb25zIHVzaW5nIHRob3NlIHRpbWluZ3MuXG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcbiAgdGltaW5ncy5mb3JFYWNoKCh0aW1pbmcsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAodGltaW5nKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdID0gYW5pbWF0aW9uO1xuICAgICAgaWYgKGluZGV4ID09PSBuZXh0VXBJbmRleCkge1xuICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBiZSBhbmltYXRlZCwgc28gd2lsbCBhbHJlYWR5IGJlIGluIHRoZSBkZXNpcmVkIHN0YXRlXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBuZXh0VXBJbmRleCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGltaW5nLmVuZERlbGF5ICE9PSAwKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGFuaW1hdGlvbiBmb3IgdGhlIGl0ZW0gdGhhdCB3aWxsIGJlIGxlZnQgc2VsZWN0ZWQuXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2xlYW4gdXAgd2hlbiB0aGlzIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIGxhc3RBbmltYXRpb25EZXRhaWxzID0geyBhbmltYXRpb24sIGluZGV4LCB0aW1pbmcsIGZvcndhcmQgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpdGVtIGRvZXNuJ3QgcGFydGljaXBhdGUgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QW5pbWF0aW9uRGV0YWlscyAhPSBudWxsKSB7XG4gICAgLy8gQXJyYW5nZSBmb3IgY2xlYW4tdXAgd29yayB0byBiZSBwZXJmb3JtZWQuXG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMubmV4dFVwSW5kZXggPSBuZXh0VXBJbmRleDtcbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb24ub25maW5pc2ggPSBldmVudCA9PiBzZWxlY3Rpb25BbmltYXRpb25GaW5pc2hlZChlbGVtZW50LCBsYXN0QW5pbWF0aW9uRGV0YWlscyk7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG91bGRuJ3QgaGFwcGVuIC0tIHdlIHNob3VsZCBhbHdheXMgaGF2ZSBhdCBsZWFzdCBvbmUgYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpbmRleCkge1xuICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdID09IG51bGwpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBhbmltYXRpb24gPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZmlsbDogJ2JvdGgnXG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIGVsZW1lbnQuaXRlbXMgJiYgaW5kZXggPCBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbn1cblxuLypcbiAqIFJlbmRlciB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmUtcmVuZGVyIGEgcHJldmlvdXMgc2VsZWN0aW9uIHN0YXRlIChpZiB0aGVcbiAqIHNlbGVjdGVkSW5kZXggcGFyYW0gaXMgb21pdHRlZCksIHJlbmRlciB0aGUgc2VsZWN0aW9uIGluc3RhbnRseSBhdCBhIGdpdmVuXG4gKiB3aG9sZSBvciBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleCwgb3IgYW5pbWF0ZSB0byBhIGdpdmVuIHNlbGVjdGlvbiBpbmRleC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaXN0aW5jdCBzY2VuYXJpb3Mgd2UgbmVlZCB0byBjb3ZlcjpcbiAqXG4gKiAxLiBJbml0aWFsIHBvc2l0aW9uaW5nLCBvciByZXBvc2l0aW9uaW5nIGFmdGVyIGNoYW5naW5nIGEgcHJvcGVydHkgbGlrZVxuICogICAgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzIHRoYXQgYWZmZWN0cyByZW5kZXJpbmcuXG4gKiAyLiBBbmltYXRlIG9uIHNlbGVjdGVkSW5kZXggY2hhbmdlLiBUaGlzIHNob3VsZCBvdmVycmlkZSBhbnkgYW5pbWF0aW9uL3N3aXBlXG4gKiAgICBhbHJlYWR5IGluIHByb2dyZXNzLlxuICogMy4gSW5zdGFudGx5IHJlbmRlciB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhIGRyYWcgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICogNC4gQ29tcGxldGUgYSBkcmFnIG9wZXJhdGlvbi4gSWYgdGhlIGRyYWcgd2Fzbid0IGZhciBlbm91Z2ggdG8gYWZmZWN0XG4gKiAgICBzZWxlY3Rpb24sIHdlJ2xsIGp1c3QgYmUgcmVzdG9yaW5nIHRoZSBzZWxlY3RlZEZyYWN0aW9uIHRvIDAuXG4gKlxuICogSWYgdGhlIGxpc3QgZG9lcyBub3Qgd3JhcCwgYW55IHNlbGVjdGlvbiBwb3NpdGlvbiBvdXRzaWRlIHRoZSBsaXN0J3MgYm91bmRzXG4gKiB3aWxsIGJlIGRhbXBlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleD1lbGVtZW50LnNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb249ZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGNvbnN0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIHRvIHJlbmRlci5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgLy8gVE9ETzogSGFuZGxlIG5vIHNlbGVjdGlvbi5cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNlbGVjdGlvbiA9IHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEFwcGx5IHdyYXBwaW5nIHRvIGVuc3VyZSBjb25zaXN0ZW50IHJlcHJlc2VudGF0aW9uIG9mIHNlbGVjdGlvbi5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBcHBseSBkYW1waW5nIGlmIG5lY2Vzc2FyeS5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uTWl4aW4uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF07XG4gIC8vIFRPRE86IElmIGFuIGl0ZW0gY2hhbmdlcyBwb3NpdGlvbiBpbiB0aGUgRE9NLCB3ZSBlbmQgdXAgYW5pbWF0aW5nIGZyb21cbiAgLy8gaXRzIG9sZCBpbmRleCB0byBpdHMgbmV3IGluZGV4LCBidXQgd2UgcmVhbGx5IGRvbid0IHdhbnQgdG8gYW5pbWF0ZSBhdCBhbGwuXG4gIGlmICghZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSAmJiBwcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmXG4gICAgICBwcmV2aW91c1NlbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgLy8gQW5pbWF0ZSBzZWxlY3Rpb24gZnJvbSBwcmV2aW91cyBzdGF0ZSB0byBuZXcgc3RhdGUuXG4gICAgYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBwcmV2aW91c1NlbGVjdGlvbiwgc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwICYmIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBpZiAoZWxlbWVudFtyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdKSB7XG4gICAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuICAgIGVsZW1lbnRbcmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyU3ltYm9sXSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICogV2UgbWFpbnRhaW4gYW4gYXJyYXkgY29udGFpbmluZyBhbiBhbmltYXRpb24gcGVyIGl0ZW0uIFRoaXMgaXMgdXNlZCBmb3IgdHdvXG4gKiByZWFzb25zOlxuICpcbiAqICogRHVyaW5nIGEgZHJhZyBvcGVyYXRpb24sIHdlIHdhbnQgdG8gYmUgYWJsZSB0byByZXVzZSBhbmltYXRpb25zIGJldHdlZW5cbiAqICAgZHJhZyB1cGRhdGVzLlxuICogKiBXaGVuIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiBjb21wbGV0ZXMsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBsZWF2ZSB0aGVcbiAqICAgdmlzaWJpbGUgaXRlbXMgaW4gYSBwYXVzZWQgc3RhdGUuIExhdGVyLCB3ZSdsbCB3YW50IHRvIGJlIGFibGUgdG8gY2xlYW4gdXBcbiAqICAgdGhvc2UgYW5pbWF0aW9ucy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBhcnJheSBpcyBzcGFyc2U6IGl0IHdpbGwgb25seSBob2xkIHVwIGZyb20gMOKAkzMgYW5pbWF0aW9ucyBhdFxuICogYW55IGdpdmVuIHBvaW50LlxuICovXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBjb25zdCBhbmltYXRpb25zID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdO1xuICBpZiAoYW5pbWF0aW9ucykge1xuICAgIC8vIENhbmNlbCBleGlzdGluZyBhbmltYXRpb25zIHRvIHJlbW92ZSB0aGUgZWZmZWN0cyB0aGV5J3JlIGFwcGx5aW5nLlxuICAgIGFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgIGFuaW1hdGlvbnNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggIT09IGl0ZW1Db3VudCkge1xuICAgIC8vIEhhdmVuJ3QgYW5pbWF0ZWQgYmVmb3JlIHdpdGggdGhpcyBudW1iZXIgb2YgaXRlbXM7IChyZSljcmVhdGUgYXJyYXkuXG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG4gIH1cbn1cblxuLypcbiAqIFRoZSBsYXN0IGFuaW1hdGlvbiBpbiBvdXIgc2VsZWN0aW9uIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLiBDbGVhbiB1cC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgZGV0YWlscykge1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFdhaXRpbmcgdG8gdGhhdCB1bnRpbCB0aGlzIHBvaW50IGlzIGEgYml0IG9mIGEgaGFjayB0byBhdm9pZFxuICAvLyBoYXZpbmcgYSBuZXh0IGl0ZW0gdGhhdCdzIGhpZ2hlciBpbiB0aGUgbmF0dXJhbCB6LW9yZGVyIG9ic2N1cmUgb3RoZXIgaXRlbXNcbiAgLy8gZHVyaW5nIGFuaW1hdGlvbi5cbiAgY29uc3QgbmV4dFVwSW5kZXggPSBkZXRhaWxzLm5leHRVcEluZGV4O1xuICBpZiAobmV4dFVwSW5kZXggIT0gbnVsbCkge1xuICAgIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdKSB7XG4gICAgICAvLyBDYW5jZWwgZXhpc3Rpbmcgc2VsZWN0aW9uIGFuaW1hdGlvbiBzbyB3ZSBjYW4gY29uc3RydWN0IGEgbmV3IG9uZS5cbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0uY2FuY2VsKCk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uRnJhY3Rpb24gPSBkZXRhaWxzLmZvcndhcmQgPyAwIDogMTtcbiAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBuZXh0VXBJbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIHNob3dJdGVtKGVsZW1lbnQuaXRlbXNbbmV4dFVwSW5kZXhdLCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG59XG5cbi8qXG4gKiBQYXVzZSB0aGUgaW5kaWNhdGVkIGFuaW1hdGlvbiBhbmQgaGF2ZSBpdCBzaG93IHRoZSBhbmltYXRpb24gYXQgdGhlIGdpdmVuXG4gKiBmcmFjdGlvbiAoYmV0d2VlbiAwIGFuZCAxKSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaXRlbUluZGV4LCBmcmFjdGlvbikge1xuICBjb25zdCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGZyYWN0aW9uICogZHVyYXRpb247XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IHdyYXBTdGVwcyA9IGxlbmd0aCAtIE1hdGguYWJzKHN0ZXBzKTtcbiAgICBpZiAod3JhcFN0ZXBzIDw9IDEpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZVxuICAgICAgc3RlcHMgPSBzdGVwcyA8IDAgP1xuICAgICAgICB3cmFwU3RlcHMgOiAgIC8vIFdyYXAgZm9yd2FyZCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdC5cbiAgICAgICAgLXdyYXBTdGVwczsgICAvLyBXcmFwIGJhY2t3YXJkIGZyb20gZmlyc3QgaXRlbSB0byBsYXN0LlxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RlcHM7XG59XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBbc3ltYm9scy5pdGVtU2VsZWN0ZWRdYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW5cbiAgICogc3VwcGx5IHRoZXNlIHlvdXJzZWxmLCBvciBkbyBzbyB2aWFcbiAgICogW1NpbmdsZVNlbGVjdGlvbk1peGluXShTaW5nbGVTZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBTZXQgZGVmYXVsdCBBUklBIHJvbGUuXG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PSBudWxsICYmIHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucm9sZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsIHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucm9sZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5yb2xlID0gJ2xpc3Rib3gnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgY29uc3QgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgaWYgKGl0ZW1JZCAmJiBzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbUlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBTZWxlY3Rpb24gd2FzIHJlbW92ZWQuXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2ZcbiAgICogW1NoYWRvd1RlbXBsYXRlTWl4aW5dKFNoYWRvd1RlbXBsYXRlTWl4aW4ubWQpLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgY29uc3Qgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vc3JjL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZU1peGluKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBbc3ltYm9scy50ZW1wbGF0ZV0oKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXNbc3ltYm9scy50ZW1wbGF0ZV07XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYWRvd0RPTVBvbHlmaWxsKSB7XG4gICAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGNvbnN0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2hhZG93VGVtcGxhdGU7XG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjYW5TZWxlY3ROZXh0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3ROZXh0Jyk7XG5jb25zdCBjYW5TZWxlY3RQcmV2aW91c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0UHJldmlvdXMnKTtcbmNvbnN0IHNlbGVjdGlvblJlcXVpcmVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25SZXF1aXJlZCcpO1xuY29uc3Qgc2VsZWN0aW9uV3JhcHNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvbldyYXBzJyk7XG5cbi8vIFdlIHdhbnQgdG8gZXhwb3NlIGJvdGggc2VsZWN0ZWRJbmRleCBhbmQgc2VsZWN0ZWRJdGVtIGFzIGluZGVwZW5kZW50XG4vLyBwcm9wZXJ0aWVzIGJ1dCBrZWVwIHRoZW0gaW4gc3luYy4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdXNlciB0byByZWZlcmVuY2Vcbi8vIHRoZSBzZWxlY3Rpb24gYnkgd2hhdGV2ZXIgbWVhbnMgaXMgbW9zdCBuYXR1cmFsIGZvciB0aGVpciBzaXR1YXRpb24uXG4vL1xuLy8gVG8gZWZmaWNpZW50bHkga2VlcCB0aGVzZSBwcm9wZXJ0aWVzIGluIHN5bmMsIHdlIHRyYWNrIFwiZXh0ZXJuYWxcIiBhbmRcbi8vIFwiaW50ZXJuYWxcIiByZWZlcmVuY2VzIGZvciBlYWNoIHByb3BlcnR5OlxuLy9cbi8vIFRoZSBleHRlcm5hbCBpbmRleCBvciBpdGVtIGlzIHRoZSBvbmUgd2UgcmVwb3J0IHRvIHRoZSBvdXRzaWRlIHdvcmxkIHdoZW5cbi8vIGFza2VkIGZvciBzZWxlY3Rpb24uICBXaGVuIGhhbmRsaW5nIGEgY2hhbmdlIHRvIGluZGV4IG9yIGl0ZW0sIHdlIHVwZGF0ZSB0aGVcbi8vIGV4dGVybmFsIHJlZmVyZW5jZSBhcyBzb29uIGFzIHBvc3NpYmxlLCBzbyB0aGF0IGlmIGFueW9uZSBpbW1lZGlhdGVseSBhc2tzXG4vLyBmb3IgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLCB0aGV5IHdpbGwgcmVjZWl2ZSBhIHN0YWJsZSBhbnN3ZXIuXG4vL1xuLy8gVGhlIGludGVybmFsIGluZGV4IG9yIGl0ZW0gdHJhY2tzIHdoaWNoZXZlciBpbmRleCBvciBpdGVtIGxhc3QgcmVjZWl2ZWQgdGhlXG4vLyBmdWxsIHNldCBvZiBwcm9jZXNzaW5nLiBQcm9jZXNzaW5nIGluY2x1ZGVzIHJhaXNpbmcgYSBjaGFuZ2UgZXZlbnQgZm9yIHRoZVxuLy8gbmV3IHZhbHVlLiBPbmNlIHdlJ3ZlIGJlZ3VuIHRoYXQgcHJvY2Vzc2luZywgd2Ugc3RvcmUgdGhlIG5ldyB2YWx1ZSBhcyB0aGVcbi8vIGludGVybmFsIHZhbHVlIHRvIGluZGljYXRlIHdlJ3ZlIGhhbmRsZWQgaXQuXG4vL1xuY29uc3QgZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdleHRlcm5hbFNlbGVjdGVkSW5kZXgnKTtcbmNvbnN0IGV4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdleHRlcm5hbFNlbGVjdGVkSXRlbScpO1xuY29uc3QgaW50ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpbnRlcm5hbFNlbGVjdGVkSW5kZXgnKTtcbmNvbnN0IGludGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpbnRlcm5hbFNlbGVjdGVkSXRlbScpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2luZ2xlU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyBzaW5nbGUtc2VsZWN0aW9uIHNlbWFudGljcyBmb3IgaXRlbXMgaW4gYSBsaXN0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIEFycmF5IG9yIE5vZGVMaXN0IG9mXG4gICAqIGFsbCBlbGVtZW50cyBpbiB0aGUgbGlzdC4gQSBzdGFuZGFyZCB3YXkgdG8gZG8gdGhhdCB3aXRoIGlzIHRoZVxuICAgKiBbQ29udGVudEl0ZW1zTWl4aW5dKENvbnRlbnRJdGVtc01peGluLm1kKSwgd2hpY2ggdGFrZXMgYSBjb21wb25lbnQnc1xuICAgKiBjb250ZW50ICh0eXBpY2FsbHkgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuKSBhcyB0aGUgc2V0IG9mIGxpc3QgaXRlbXM7IHNlZVxuICAgKiB0aGF0IG1peGluIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyYWNrcyBhIHNpbmdsZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBsaXN0LCBhbmQgcHJvdmlkZXMgbWVhbnMgdG9cbiAgICogZ2V0IGFuZCBzZXQgdGhhdCBzdGF0ZSBieSBpdGVtIHBvc2l0aW9uIChgc2VsZWN0ZWRJbmRleGApIG9yIGl0ZW0gaWRlbnRpdHlcbiAgICogKGBzZWxlY3RlZEl0ZW1gKS4gVGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgaW4gdGhlIGxpc3QgdmlhIHRoZSBtZXRob2RzXG4gICAqIGBzZWxlY3RGaXJzdGAsIGBzZWxlY3RMYXN0YCwgYHNlbGVjdE5leHRgLCBhbmQgYHNlbGVjdFByZXZpb3VzYC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBkb2VzIG5vdCBwcm9kdWNlIGFueSB1c2VyLXZpc2libGUgZWZmZWN0cyB0byByZXByZXNlbnRcbiAgICogc2VsZWN0aW9uLiBPdGhlciBtaXhpbnMsIHN1Y2ggYXNcbiAgICogW1NlbGVjdGlvbkFyaWFBY3RpdmVNaXhpbl0oU2VsZWN0aW9uQXJpYUFjdGl2ZU1peGluLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodE1peGluXShTZWxlY3Rpb25IaWdobGlnaHRNaXhpbi5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXdNaXhpbl0oU2VsZWN0aW9uSW5WaWV3TWl4aW4ubWQpLCBtb2RpZnkgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICogaW4gY29tbW9uIHdheXMgdG8gbGV0IHRoZSB1c2VyIGtub3cgYSBnaXZlbiBpdGVtIGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgKiBzZWxlY3RlZC5cbiAgICovXG4gIGNsYXNzIFNpbmdsZVNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25XcmFwcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25XcmFwcyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uV3JhcHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBjb25zdCBwcmV2aW91c0NhblNlbGVjdE5leHQgPSB0aGlzW2NhblNlbGVjdE5leHRTeW1ib2xdO1xuICAgICAgdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXSA9IGNhblNlbGVjdE5leHQ7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICBpZiAoY2FuU2VsZWN0TmV4dCAhPT0gcHJldmlvdXNDYW5TZWxlY3ROZXh0KSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nhbi1zZWxlY3QtbmV4dC1jaGFuZ2VkJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0NhblNlbGVjdFByZXZpb3VzID0gdGhpc1tjYW5TZWxlY3RQcmV2aW91c1N5bWJvbF07XG4gICAgICB0aGlzW2NhblNlbGVjdFByZXZpb3VzU3ltYm9sXSA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgICAgaWYgKGNhblNlbGVjdFByZXZpb3VzICE9PSBwcmV2aW91c0NhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nhbi1zZWxlY3QtcHJldmlvdXMtY2hhbmdlZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7IH1cbiAgICAgIHRoaXNbc3ltYm9scy5pdGVtU2VsZWN0ZWRdKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICAvLyBJbiBjYXNlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlZCBwb3NpdGlvbiBvciB3YXMgcmVtb3ZlZC5cbiAgICAgIHRyYWNrU2VsZWN0ZWRJdGVtKHRoaXMpO1xuXG4gICAgICAvLyBJbiBjYXNlIHRoZSBjaGFuZ2UgaW4gaXRlbXMgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgaW5kaWNhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcbiAgICAgKiBlZmZlY3RzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgW3N5bWJvbHMuaXRlbVNlbGVjdGVkXShpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbVNlbGVjdGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEEgYHNlbGVjdGVkSW5kZXhgIG9mIC0xIGluZGljYXRlcyB0aGVyZSBpcyBubyBzZWxlY3Rpb24uIFNldHRpbmcgdGhpc1xuICAgICAqIHByb3BlcnR5IHRvIC0xIHdpbGwgcmVtb3ZlIGFueSBleGlzdGluZyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSAhPSBudWxsID9cbiAgICAgICAgdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdIDpcbiAgICAgICAgLTE7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICAvLyBTZWUgbm90ZXMgYXQgdG9wIGFib3V0IGludGVybmFsIHZzLiBleHRlcm5hbCBjb3BpZXMgb2YgdGhpcyBwcm9wZXJ0eS5cbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJbmRleCA9IHRoaXNbaW50ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXTtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0pIHtcbiAgICAgICAgLy8gU3RvcmUgdGhlIG5ldyBpbmRleCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgaXRlbS5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBoYXNJdGVtcyA9IGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmICghKGhhc0l0ZW1zICYmIGluZGV4ID49IDAgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGgpKSB7XG4gICAgICAgICAgaW5kZXggPSAtMTsgLy8gTm8gaXRlbSBhdCB0aGF0IGluZGV4LlxuICAgICAgICB9XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSA9IGluZGV4O1xuICAgICAgICBpdGVtID0gaGFzSXRlbXMgJiYgaW5kZXggPj0gMCA/IGl0ZW1zW2luZGV4XSA6IG51bGw7XG4gICAgICAgIHRoaXNbZXh0ZXJuYWxTZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0gPSB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIH1cblxuICAgICAgLy8gTm93IGxldCBzdXBlciBkbyBhbnkgd29yay5cbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcHJldmlvdXNTZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIC8vIFRoZSBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkLlxuICAgICAgICB0aGlzW2ludGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF0gPSBpbmRleDtcblxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmcuIFRPRE86IFZlcmlmeSBzdGlsbCBuZWNlc3NhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1tpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gIT09IGl0ZW0pIHtcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBzbyBpdCBjYW4gaGF2ZSBpdHMgb3duIGVmZmVjdHMuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gYW4gb2JqZWN0IHRoYXQgaXMgbm90IGluIHRoZSBsaXN0IGhhcyBubyBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBUT0RPOiBFdmVuIGlmIHNlbGVjdGlvblJlcXVpcmVkLCBjYW4gc3RpbGwgZXhwbGljaXRseSBzZXQgc2VsZWN0ZWRJdGVtIHRvIG51bGwuXG4gICAgICogVE9ETzogSWYgc2VsZWN0aW9uUmVxdWlyZWQsIGxlYXZlIHNlbGVjdGlvbiBhbG9uZT9cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIC8vIFNlZSBub3RlcyBhdCB0b3AgYWJvdXQgaW50ZXJuYWwgdnMuIGV4dGVybmFsIGNvcGllcyBvZiB0aGlzIHByb3BlcnR5LlxuICAgICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZEl0ZW0gPSB0aGlzW2ludGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIGxldCBpbmRleDtcbiAgICAgIGlmIChpdGVtICE9PSB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJdGVtU3ltYm9sXSkge1xuICAgICAgICAvLyBTdG9yZSBpdGVtIGFuZCBsb29rIHVwIGNvcnJlc3BvbmRpbmcgaW5kZXguXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBpbmRleCA9IGhhc0l0ZW1zID8gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChpdGVtcywgaXRlbSkgOiAtMTtcbiAgICAgICAgdGhpc1tleHRlcm5hbFNlbGVjdGVkSW5kZXhTeW1ib2xdID0gaW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpdGVtID0gbnVsbDsgLy8gVGhlIGluZGljYXRlZCBpdGVtIGlzbid0IGFjdHVhbGx5IGluIGBpdGVtc2AuXG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tleHRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSB0aGlzW2V4dGVybmFsU2VsZWN0ZWRJbmRleFN5bWJvbF07XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdyBsZXQgc3VwZXIgZG8gYW55IHdvcmsuXG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuXG4gICAgICBpZiAoaXRlbSAhPT0gcHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgLy8gVGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlZC5cbiAgICAgICAgdGhpc1tpbnRlcm5hbFNlbGVjdGVkSXRlbVN5bWJvbF0gPSBpdGVtO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1NlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3Rpb24gc3RhdGUgb2Ygb2xkIGl0ZW0uXG4gICAgICAgICAgdGhpc1tzeW1ib2xzLml0ZW1TZWxlY3RlZF0ocHJldmlvdXNTZWxlY3RlZEl0ZW0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gbmV3IGl0ZW0uXG4gICAgICAgICAgdGhpc1tzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNbaW50ZXJuYWxTZWxlY3RlZEluZGV4U3ltYm9sXSAhPT0gaW5kZXgpIHtcbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgc28gaXQgY2FuIGhhdmUgaXRzIG93biBlZmZlY3RzLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbF0gPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmICgnc2VsZWN0aW9uUmVxdWlyZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblJlcXVpcmVkID0gc2VsZWN0aW9uUmVxdWlyZWQ7IH1cbiAgICAgIHRyYWNrU2VsZWN0ZWRJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogSWYgdGhlIGxpc3QgaGFzIG5vIHNlbGVjdGlvbiwgdGhlIGxhc3QgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IDwgMCA/XG4gICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSA6ICAgICAvLyBObyBzZWxlY3Rpb24geWV0OyBzZWxlY3QgbGFzdCBpdGVtLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIG5ld0luZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59O1xuXG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGNvbnN0IGNvdW50ID0gZWxlbWVudC5pdGVtcy5sZW5ndGg7XG5cbiAgY29uc3QgYm91bmRlZEluZGV4ID0gKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpID9cbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudCA6XG5cbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuXG4gIGNvbnN0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiB0aGUgc2V0IG9mIGl0ZW1zLCBvciBpbiB0aGUgdmFsdWUgb2YgdGhlXG4vLyBgc2VsZWN0aW9uUmVxdWlyZWRgIHByb3BlcnR5LCByZWFjcXVpcmUgdGhlIHNlbGVjdGVkIGl0ZW0uIElmIGl0J3MgbW92ZWQsXG4vLyB1cGRhdGUgYHNlbGVjdGVkSW5kZXhgLiBJZiBpdCdzIGJlZW4gcmVtb3ZlZCwgYW5kIGEgc2VsZWN0aW9uIGlzIHJlcXVpcmVkLFxuLy8gdHJ5IHRvIHNlbGVjdCBhbm90aGVyIGl0ZW0uXG5mdW5jdGlvbiB0cmFja1NlbGVjdGVkSXRlbShlbGVtZW50KSB7XG5cbiAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtcyA/IGl0ZW1zLmxlbmd0aCA6IDA7XG5cbiAgY29uc3QgcHJldmlvdXNTZWxlY3RlZEl0ZW0gPSBlbGVtZW50LnNlbGVjdGVkSXRlbTtcbiAgaWYgKCFwcmV2aW91c1NlbGVjdGVkSXRlbSkge1xuICAgIC8vIE5vIGl0ZW0gd2FzIHByZXZpb3VzbHkgc2VsZWN0ZWQuXG4gICAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBieSBkZWZhdWx0LlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgLy8gV2UndmUgbG9zdCB0aGUgc2VsZWN0aW9uLCBhbmQgdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gc2VsZWN0LlxuICAgIGVsZW1lbnQuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUcnkgdG8gZmluZCB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIGluIHRoZSBjdXJyZW50IHNldCBvZiBpdGVtcy5cbiAgICBjb25zdCBpbmRleEluQ3VycmVudEl0ZW1zID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChpdGVtcywgcHJldmlvdXNTZWxlY3RlZEl0ZW0pO1xuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXhJbkN1cnJlbnRJdGVtcyA8IDApIHtcbiAgICAgIC8vIFByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBpdGVtcy5cbiAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSBhdCB0aGUgc2FtZSBpbmRleCAoaWYgaXQgZXhpc3RzKSBvciBhcyBjbG9zZSBhcyBwb3NzaWJsZS5cbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSW5kZXggPSBNYXRoLm1pbihwcmV2aW91c1NlbGVjdGVkSW5kZXgsIGl0ZW1Db3VudCAtIDEpO1xuICAgICAgLy8gU2VsZWN0IGJ5IGl0ZW0sIHNpbmNlIGluZGV4IG1heSBiZSB0aGUgc2FtZSwgYW5kIHdlIHdhbnQgdG8gcmFpc2UgdGhlXG4gICAgICAvLyBzZWxlY3RlZC1pdGVtLWNoYW5nZWQgZXZlbnQuXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IGl0ZW1zW25ld1NlbGVjdGVkSW5kZXhdO1xuICAgIH0gZWxzZSBpZiAoaW5kZXhJbkN1cnJlbnRJdGVtcyAhPT0gcHJldmlvdXNTZWxlY3RlZEluZGV4KSB7XG4gICAgICAvLyBQcmV2aW91c2x5LXNlbGVjdGVkIGl0ZW0gc3RpbGwgdGhlcmUsIGJ1dCBjaGFuZ2VkIHBvc2l0aW9uLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gaW5kZXhJbkN1cnJlbnRJdGVtcztcbiAgICB9XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgcmVwb3J0IHdoZXRoZXIgaXQncyBub3cgcG9zc2libGUgdG9cbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXG5mdW5jdGlvbiB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGNhblNlbGVjdE5leHQ7XG4gIGxldCBjYW5TZWxlY3RQcmV2aW91cztcbiAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBpdGVtcyB0byBzZWxlY3QuXG4gICAgY2FuU2VsZWN0TmV4dCA9IGZhbHNlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gZmFsc2U7XG4gIH0gaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBTaW5jZSB0aGVyZSBhcmUgaXRlbXMsIGNhbiBhbHdheXMgZ28gbmV4dC9wcmV2aW91cy5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGlmIChlbGVtZW50LmNhblNlbGVjdE5leHQgIT09IGNhblNlbGVjdE5leHQpIHtcbiAgICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICB9XG4gIGlmIChlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzICE9PSBjYW5TZWxlY3RQcmV2aW91cykge1xuICAgIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBkZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWCcpO1xuY29uc3QgZGVsdGFZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVknKTtcbmNvbnN0IG11bHRpVG91Y2hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ211bHRpVG91Y2gnKTtcbmNvbnN0IHByZXZpb3VzWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNYJyk7XG5jb25zdCBwcmV2aW91c1lTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWScpO1xuY29uc3Qgc3RhcnRYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzdGFydFgnKTtcbmNvbnN0IHRyYXZlbEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0cmF2ZWxGcmFjdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU3dpcGVEaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBsZWZ0LCBzd2lwZSByaWdodCkgdG8gZGlyZWN0aW9uXG4gICAqIHNlbWFudGljcyAoZ28gcmlnaHQsIGdvIGxlZnQpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1peGluIHByZXNlbnRzIG5vIHVzZXItdmlzaWJsZSBlZmZlY3RzOyBpdCBqdXN0IGluZGljYXRlc1xuICAgKiBhIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgdXNlciBpcyBjdXJyZW50bHkgc3dpcGluZyBvciBoYXMgZmluaXNoZWQgc3dpcGluZy5cbiAgICogVG8gbWFwIHRoZSBkaXJlY3Rpb24gdG8gYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCB1c2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbk1peGluXShEaXJlY3Rpb25TZWxlY3Rpb25NaXhpbi5tZCkuXG4gICAqL1xuICBjbGFzcyBTd2lwZURpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLnRyYXZlbEZyYWN0aW9uID0gMDtcblxuICAgICAgLy8gSW4gYWxsIHRvdWNoIGV2ZW50cywgb25seSBoYW5kbGUgc2luZ2xlIHRvdWNoZXMuIFdlIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgICAvLyB0aGUgZmlyc3QgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYmVndW4gYSBzd2lwZS5cbiAgICAgIC8vIFRPRE86IFRvdWNoIGV2ZW50cyBzaG91bGQgcHJvYmFibHkgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIC8vIFByZWZlciBsaXN0ZW5pbmcgdG8gc3RhbmRhcmQgcG9pbnRlciBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2ludGVyIGV2ZW50cyBub3Qgc3VwcG9ydGVkIC0tIGxpc3RlbiB0byBvbGRlciB0b3VjaCBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSkge1xuICAgICAgICAgICAgICAvLyBTaW5nbGUtdG91Y2ggc3dpcGUgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgY29uc3QgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBGb3IgdGhlIGNvbXBvbmVudCB0byByZWNlaXZlIFBvaW50ZXJFdmVudHMgaW4gSUUvRWRnZSwgd2UgbmVlZCB0byBzZXRcbiAgICAgIC8vIHRvdWNoLWFjdGlvbjogbm9uZS4gT25seSBtYWtlIHRoaXMgY2hhbmdlIGlmIHRvdWNoLWFjdGlvbiBpcyBjdXJyZW50bHlcbiAgICAgIC8vIHRoZSBkZWZhdWx0IHZhbHVlIChcImF1dG9cIiksIGluIGNhc2UgdGhlIGRldmVsb3BlciBrbm93cyBiZXR0ZXIgdGhhbiB3ZVxuICAgICAgLy8gZG8gd2hhdCB0aGV5IHdhbnQgaW4gdGhlaXIgcGFydGljdWxhciBjb250ZXh0LlxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcykudG91Y2hBY3Rpb24gPT09ICdhdXRvJykge1xuICAgICAgICB0aGlzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0IFtzeW1ib2xzLmRyYWdnaW5nXSgpIHtcbiAgICAgIHJldHVybiBzdXBlcltzeW1ib2xzLmRyYWdnaW5nXTtcbiAgICB9XG4gICAgc2V0IFtzeW1ib2xzLmRyYWdnaW5nXSh2YWx1ZSkge1xuICAgICAgaWYgKHN5bWJvbHMuZHJhZ2dpbmcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXJbc3ltYm9scy5kcmFnZ2luZ10gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0xlZnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29SaWdodF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSB0aGUgZmlyc3QgdG91Y2hwb2ludCBoYXMgdHJhdmVsZWQgc2luY2UgdGhlIGJlZ2lubmluZyBvZiBhXG4gICAgICogZHJhZywgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3RyYXZlbEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3RyYXZlbEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFN3aXBlRGlyZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgcG9pbnRlciBldmVudCBpcyBmb3IgdGhlIHBlbiwgb3IgdGhlIHByaW1hcnkgdG91Y2ggcG9pbnQuXG5mdW5jdGlvbiBpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnBvaW50ZXJUeXBlID09PSAncGVuJyB8fFxuICAgICAgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2ZW50LmlzUHJpbWFyeSk7XG59XG5cbi8qXG4gKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgaGFzIGZpbmlzaGVkIGEgdG91Y2ggb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB0b3VjaEVuZChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGNvbnN0IHRyYXZlbEZyYWN0aW9uID0gZWxlbWVudC50cmF2ZWxGcmFjdGlvbjtcbiAgICBpZiAodHJhdmVsRnJhY3Rpb24gPj0gMC41KSB7XG4gICAgICBlbGVtZW50W3N5bWJvbHMuZ29SaWdodF0oKTtcbiAgICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uIDw9IC0wLjUpIHtcbiAgICAgIGVsZW1lbnRbc3ltYm9scy5nb0xlZnRdKCk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQudHJhdmVsRnJhY3Rpb24gPSAwO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBudWxsO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBudWxsO1xufVxuXG4vKlxuICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCBkdXJpbmcgYSB0b3VjaCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHRvdWNoTW92ZShlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG5cbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gY2xpZW50WCAtIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXTtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gY2xpZW50WSAtIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXTtcbiAgZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgaWYgKE1hdGguYWJzKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSkgPiBNYXRoLmFicyhlbGVtZW50W2RlbHRhWVN5bWJvbF0pKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IGhvcml6b250YWwuXG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBldmVudCB3YXMgaGFuZGxlZC4gSXQnZCBiZSBuaWNlciBpZiB3ZSBkaWRuJ3QgaGF2ZVxuICAgIC8vIHRvIGRvIHRoaXMgc28gdGhhdCwgZS5nLiwgYSB1c2VyIGNvdWxkIGJlIHN3aXBpbmcgbGVmdCBhbmQgcmlnaHRcbiAgICAvLyB3aGlsZSBzaW11bHRhbmVvdXNseSBzY3JvbGxpbmcgdXAgYW5kIGRvd24uIChOYXRpdmUgdG91Y2ggYXBwcyBjYW4gZG9cbiAgICAvLyB0aGF0LikgSG93ZXZlciwgTW9iaWxlIFNhZmFyaSB3YW50cyB0byBoYW5kbGUgc3dpcGUgZXZlbnRzIG5lYXIgdGhlXG4gICAgLy8gcGFnZSBhbmQgaW50ZXJwcmV0IHRoZW0gYXMgbmF2aWdhdGlvbnMuIFRvIGF2b2lkIGhhdmluZyBhIGhvcml6aW9udGFsXG4gICAgLy8gc3dpcGUgbWlzaW50ZXByZXRlZCBhcyBhIG5hdmlnYXRpb24sIHdlIGluZGljYXRlIHRoYXQgd2UndmUgaGFuZGxlZFxuICAgIC8vIHRoZSBldmVudCwgYW5kIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOb3QgaGFuZGxlZFxuICB9XG59XG5cbi8qXG4gKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgaGFzIGJlZ3VuIGEgdG91Y2ggb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IHRydWU7XG4gIGVsZW1lbnRbc3RhcnRYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNYU3ltYm9sXSA9IGNsaWVudFg7XG4gIGVsZW1lbnRbcHJldmlvdXNZU3ltYm9sXSA9IGNsaWVudFk7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IDA7XG59XG5cbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IGRyYWdEaXN0YW5jZSA9IGVsZW1lbnRbc3RhcnRYU3ltYm9sXSAtIHg7XG4gIGNvbnN0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBkcmFnRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IGZyYWN0aW9uO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhYnNvcmJEZWNlbGVyYXRpb24nKTtcbmNvbnN0IGxhc3REZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3REZWx0YVgnKTtcbmNvbnN0IGxhc3RXaGVlbFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RXaGVlbFRpbWVvdXQnKTtcbmNvbnN0IHBvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUnKTtcbmNvbnN0IHdoZWVsRGlzdGFuY2VTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3doZWVsRGlzdGFuY2UnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uTWl4aW5dKERpcmVjdGlvblNlbGVjdGlvbk1peGluLm1kKSB0byBsZXQgdGhlIHVzZXJcbiAgICogY2hhbmdlIHRoZSBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZWQgPSB3aGVlbCh0aGlzLCBldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXNldFdoZWVsVHJhY2tpbmcodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgW3N5bWJvbHMuZHJhZ2dpbmddKCkge1xuICAgICAgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddO1xuICAgIH1cbiAgICBzZXQgW3N5bWJvbHMuZHJhZ2dpbmddKHZhbHVlKSB7XG4gICAgICBpZiAoc3ltYm9scy5kcmFnZ2luZyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlcltzeW1ib2xzLmRyYWdnaW5nXSA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gdHJ1ZTtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgfVxuICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgY29uc3QgZGVsdGFYID0gZXZlbnQuZGVsdGFYO1xuICBjb25zdCBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxuICBjb25zdCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSk7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSBkZWx0YVg7XG5cbiAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPCBNYXRoLmFicyhkZWx0YVkpKSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLiBUaGUgdXNlciBtYXkgYmUgdHJ5aW5nIHNjcm9sbCB3aXRoIHRoZVxuICAgIC8vIHRyYWNrcGFkL3doZWVsLiBUbyBiZSBvbiB0aGUgc2FmZSwgd2UgaWdub3JlIHN1Y2ggZXZlbnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdKSB7XG4gICAgLy8gSXQncyB0b28gc29vbiBhZnRlciBhIG5hdmlnYXRpb247IGlnbm9yZSB0aGUgZXZlbnQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IHRyYXZlbEZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSB0cnVlO1xuICB0cmF2ZWxGcmFjdGlvbiA9IHNpZ24odHJhdmVsRnJhY3Rpb24pICogTWF0aC5taW4oTWF0aC5hYnModHJhdmVsRnJhY3Rpb24pLCAxKTtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IHRyYXZlbEZyYWN0aW9uO1xuXG4gIC8vIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byByZWFjaCB0aGUgcHJldmlvdXMvbmV4dCBpdGVtLCB0aGVuXG4gIC8vIGNvbXBsZXRlIGEgbmF2aWdhdGlvbiB0byB0aGF0IGl0ZW0uXG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gMSkge1xuICAgIGVsZW1lbnRbc3ltYm9scy5kcmFnZ2luZ10gPSBmYWxzZTtcbiAgICBlbGVtZW50W3N5bWJvbHMuZ29SaWdodF0oKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPT09IC0xKSB7XG4gICAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb0xlZnRdKCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEEgc3VmZmljaWVudGx5IGxvbmcgcGVyaW9kIG9mIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCB3aGVlbCBldmVudC5cbi8vIFdlIHNuYXAgdGhlIHNlbGVjdGlvbiB0byB0aGUgY2xvc2VzdCBpdGVtLCB0aGVuIHJlc2V0IG91ciBzdGF0ZS5cbmZ1bmN0aW9uIHdoZWVsVGltZWRPdXQoZWxlbWVudCkge1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICBjb25zdCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZ29SaWdodF0oKTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgfVxuXG4gIC8vIFRPRE86IExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUsIGFuZCB0aGVuIHJlc3RvcmVcbiAgLy8gZHJhZ2dpbmcgdG8gZmFsc2UgKG9yIHRoZSBwcmV2aW91cyB2YWx1ZSkuXG5cbiAgcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxuY29uc3QgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHRvZ2dsZUNsYXNzIGZyb20gJy4vdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzYWZlVG9TZXRBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0F0dHJpYnV0ZXMnKTtcbmNvbnN0IHBlbmRpbmdDbGFzc2VzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwZW5kaW5nQ2xhc3NlcycpO1xuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgdXBkYXRpbmcgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGFueSBwZW5kaW5nIHVwZGF0ZXMgdG8gYXR0cmlidXRlcyBhbmQgY2xhc3Nlcy5cbiAgICpcbiAgICogVGhpcyB3cml0ZXMgYW55IGBzZXRBdHRyaWJ1dGVgIG9yIGB0b2dnbGVDbGFzc2AgdmFsdWVzIHRoYXQgd2VyZSBwZXJmb3JtZWRcbiAgICogYmVmb3JlIGFuIGVsZW1lbnQgd2FzIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYnkgbWl4aW5zL2NvbXBvbmVudHMgaW4gdGhlaXJcbiAgICogYGNvbm5lY3RlZENhbGxiYWNrYC4gSWYgbXVsaXRwbGUgbWl4aW5zL2NvbXBvbmVudHMgaW52b2tlIHRoaXMgZHVyaW5nIHRoZVxuICAgKiBzYW1lIGBjb25uZWN0ZWRDYWxsYmFja2AsIG9ubHkgdGhlIGZpcnN0IGNhbGwgd2lsbCBoYXZlIGFueSBlZmZlY3QuIFRoZVxuICAgKiBzdWJzZXF1ZW50IGNhbGxzIHdpbGwgYmUgaGFybWxlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBiZWluZyBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqL1xuICBjb25uZWN0ZWQoZWxlbWVudCkge1xuICAgIGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGF0dHJpYnV0ZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdO1xuICAgICAgICBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFueSBwZW5kaW5nIGNsYXNzZXMuXG4gICAgaWYgKGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICBmb3IgKGxldCBjbGFzc05hbWUgaW4gZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICogc2V0IGF0dHJpYnV0ZXMuIEEgY2FsbCB0byBgc2V0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICogYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgLy8gU2FmZSB0byBzZXQgYXR0cmlidXRlcyBpbW1lZGlhdGVseS5cbiAgICAgIHNldEF0dHJpYnV0ZVRvRWxlbWVudChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmZXIgc2V0dGluZyBhdHRyaWJ1dGVzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldC91bnNldCB0aGUgY2xhc3Mgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYXMgY2xhc3MuIEFuXG4gICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICogYHRvZ2dsZUNsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICogaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRydWUgdG8gc2V0IHRoZSBjbGFzcywgZmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAvLyBTYWZlIHRvIHNldCBjbGFzcyBpbW1lZGlhdGVseS5cbiAgICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZlciBzZXR0aW5nIGNsYXNzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgIGlmICghZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0pIHtcbiAgICAgICAgZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdW2NsYXNzTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxufTtcblxuXG4vLyBSZWZsZWN0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4vLyBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZXh0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAvLyBBdm9pZCByZWN1cnNpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGNhbGxzLlxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSAhPT0gdGV4dCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIFN5bWJvbCBvYmplY3RzIGZvciBzdGFuZGFyZCBjb21wb25lbnQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAqXG4gKiBUaGVzZSBTeW1ib2wgb2JqZWN0cyBhcmUgdXNlZCB0byBhbGxvdyBtaXhpbnMgYW5kIGEgY29tcG9uZW50IHRvIGludGVybmFsbHlcbiAqIGNvbW11bmljYXRlLCB3aXRob3V0IGV4cG9zaW5nIHRoZXNlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlIGNvbXBvbmVudCdzXG4gKiBwdWJsaWMgQVBJLlxuICpcbiAqIFRvIHVzZSB0aGVzZSBTeW1ib2wgb2JqZWN0cyBpbiB5b3VyIG93biBjb21wb25lbnQsIGluY2x1ZGUgdGhpcyBtb2R1bGUgYW5kXG4gKiB0aGVuIGNyZWF0ZSBhIHByb3BlcnR5IG9yIG1ldGhvZCB3aG9zZSBrZXkgaXMgdGhlIGRlc2lyZWQgU3ltYm9sLlxuICpcbiAqICAgICBpbXBvcnQgJ1NpbmdsZVNlbGVjdGlvbk1peGluJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaW5nbGVTZWxlY3Rpb25NaXhpbic7XG4gKiAgICAgaW1wb3J0ICdzeW1ib2xzJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2luZ2xlU2VsZWN0aW9uTWl4aW4oSFRNTEVsZW1lbnQpIHtcbiAqICAgICAgIFtzeW1ib2xzLml0ZW1TZWxlY3RlZF0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAqICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGludm9rZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBAbW9kdWxlIHN5bWJvbHNcbiAqL1xuY29uc3Qgc3ltYm9scyA9IHtcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRlZmF1bHRzYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogVGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBzZXQgb3Igb3ZlcnJpZGUgZGVmYXVsdHMgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICogdG8gYSBuZXcgY29tcG9uZW50IGluc3RhbmNlLiBXaGVuIGltcGxlbWVudGluZyB0aGlzIHByb3BlcnR5LCB0YWtlIGNhcmUgdG9cbiAgICogZmlyc3QgYWNxdWlyZSBhbnkgZGVmYXVsdHMgZGVmaW5lZCBieSB0aGUgc3VwZXJjbGFzcy4gVGhlIHN0YW5kYXJkIGlkaW9tIGlzXG4gICAqIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqICAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgKiAgICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgKiAgICAgICAvLyBTZXQgb3Igb3ZlcnJpZGUgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgKiAgICAgICBkZWZhdWx0cy5jdXN0b21Qcm9wZXJ0eSA9IGZhbHNlO1xuICAgKiAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEB2YXIge29iamVjdH0gZGVmYXVsdHNcbiAgICovXG4gIGRlZmF1bHRzOiBjcmVhdGVTeW1ib2woJ2RlZmF1bHRzJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBkcmFnZ2luZ2AgcHJvcGVydHkuXG4gICAqXG4gICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICogc2xpZGluZyBlZmZlY3RzLiBTdWNoIGEgdHJhbnNpdGlvbiBzaG91bGQgdXN1YWxseSAqbm90KiBiZSBhcHBsaWVkIHdoaWxlXG4gICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAqIHdpdGggdGhlaXIgZmluZ2VyIGRvd24sIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkLiBXaGVuIHRoZVxuICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufSB0cnVlIGlmIGEgZHJhZyBpcyBpbiBwcm9ncmVzcywgZmFsc2UgaWYgbm90LlxuICAgKi9cbiAgZHJhZ2dpbmc6IGNyZWF0ZVN5bWJvbCgnZHJhZ2dpbmcnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvRG93bmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRG93blxuICAgKi9cbiAgZ29Eb3duOiBjcmVhdGVTeW1ib2woJ2dvRG93bicpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29FbmRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sXG4gICAqIG9mIGEgbGlzdCkuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0VuZFxuICAgKi9cbiAgZ29FbmQ6IGNyZWF0ZVN5bWJvbCgnZ29FbmQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvTGVmdGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvTGVmdFxuICAgKi9cbiAgZ29MZWZ0OiBjcmVhdGVTeW1ib2woJ2dvTGVmdCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29SaWdodGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1JpZ2h0XG4gICAqL1xuICBnb1JpZ2h0OiBjcmVhdGVTeW1ib2woJ2dvUmlnaHQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvU3RhcnRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydFxuICAgKiAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvU3RhcnRcbiAgICovXG4gIGdvU3RhcnQ6IGNyZWF0ZVN5bWJvbCgnZ29TdGFydCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29VcGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1VwXG4gICAqL1xuICBnb1VwOiBjcmVhdGVTeW1ib2woJ2dvVXAnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGl0ZW1BZGRlZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYSBuZXcgaXRlbSBpcyBhZGRlZCB0byBhIGxpc3QuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBpdGVtQWRkZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICovXG4gIGl0ZW1BZGRlZDogY3JlYXRlU3ltYm9sKCdpdGVtQWRkZWQnKSxcblxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbXNDaGFuZ2VkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICogYmVpbmcgbm90aGluZy5cbiAgICovXG4gIGl0ZW1zQ2hhbmdlZDogY3JlYXRlU3ltYm9sKCdpdGVtc0NoYW5nZWQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGl0ZW1TZWxlY3RlZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYW4gaXRlbSBiZWNvbWVzIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBpdGVtU2VsZWN0ZWRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgKi9cbiAgaXRlbVNlbGVjdGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1TZWxlY3RlZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBga2V5ZG93bmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYW4gZWxlbWVudCByZWNlaXZlcyBhIGBrZXlkb3duYCBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGtleWRvd25cbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBldmVudCBiZWluZyBwcm9jZXNzZWRcbiAgICovXG4gIGtleWRvd246IGNyZWF0ZVN5bWJvbCgna2V5ZG93bicpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgdGVtcGxhdGVgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IHJldHVybnMgYSBjb21wb25lbnQncyB0ZW1wbGF0ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ3xIVE1MRWxlbWVudH1cbiAgICovXG4gIHRlbXBsYXRlOiBjcmVhdGVTeW1ib2woJ3RlbXBsYXRlJylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN5bWJvbHM7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nTWl4aW4nO1xuaW1wb3J0IENvbXBvc2FibGVNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlTWl4aW4nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuTWl4aW4nO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbic7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGVNaXhpbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZU1peGluJztcblxuXG4vKipcbiAqIEEgc2FtcGxlIGdlbmVyYWwtcHVycG9zZSBiYXNlIGNsYXNzIGZvciBkZWZpbmluZyBjdXN0b20gZWxlbWVudHMgdGhhdCBtaXhlc1xuICogaW4gc29tZSBjb21tb24gZmVhdHVyZXM6IHRlbXBsYXRlIHN0YW1waW5nIGludG8gYSBzaGFkb3cgcm9vdCwgc2hhZG93IGVsZW1lbnRcbiAqIHJlZmVyZW5jZXMsIG1hcnNoYWxsaW5nIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcywgYW5kIHJldHJpZXZpbmcgdGhlIGNoaWxkcmVuXG4gKiBkaXN0cmlidXRlZCB0byBhIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHNwZWNpYWwgaW4gYW55IHdheSwgYW5kIGlzIGRlZmluZWQgb25seSBhcyBhXG4gKiBjb252ZW5pZW50IHNob3J0aGFuZCBmb3IgYXBwbHlpbmcgdGhlIG1peGlucyBsaXN0ZWQgYWJvdmUuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGNsYXNzIGFzIGEgYmFzZSBjbGFzcyBmb3IgeW91ciBvd24gZWxlbWVudHMsIG9yIGVhc2lseSBjcmVhdGUgeW91ciBvd24gYmFzZVxuICogY2xhc3MgYnkgYXBwbHlpbmcgdGhlIHNhbWUgc2V0IG9mIG1peGlucy5cbiAqXG4gKiBUaGUgRWxlbWVudEJhc2UgYmFzZSBjbGFzcyBkb2VzIG5vdCByZWdpc3RlciBpdHNlbGYgYXMgYSBjdXN0b20gZWxlbWVudCB3aXRoXG4gKiB0aGUgYnJvd3NlciwgYW5kIGhlbmNlIGNhbm5vdCBiZSBpbmRlcGVuZGVudGx5IGluc3RhbnRpYXRlZC5cbiAqXG4gKiBAbWl4ZXMgQXR0cmlidXRlTWFyc2hhbGxpbmdNaXhpblxuICogQG1peGVzIENvbXBvc2FibGVNaXhpblxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5NaXhpblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzTWl4aW5cbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZU1peGluXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZU1peGluKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZU1peGluLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNNaXhpbiwgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZ01peGluLFxuICBEaXN0cmlidXRlZENoaWxkcmVuTWl4aW5cbikge31cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudEJhc2U7XG4iXX0=
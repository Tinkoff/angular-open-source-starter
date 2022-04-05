function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/core-js/es6/reflect.js":
  /*!*********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/es6/reflect.js ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsEs6ReflectJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/es6.reflect.apply */
    "../../node_modules/core-js/modules/es6.reflect.apply.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.construct */
    "../../node_modules/core-js/modules/es6.reflect.construct.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.define-property */
    "../../node_modules/core-js/modules/es6.reflect.define-property.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.delete-property */
    "../../node_modules/core-js/modules/es6.reflect.delete-property.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.enumerate */
    "../../node_modules/core-js/modules/es6.reflect.enumerate.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get */
    "../../node_modules/core-js/modules/es6.reflect.get.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get-own-property-descriptor */
    "../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get-prototype-of */
    "../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.has */
    "../../node_modules/core-js/modules/es6.reflect.has.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.is-extensible */
    "../../node_modules/core-js/modules/es6.reflect.is-extensible.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.own-keys */
    "../../node_modules/core-js/modules/es6.reflect.own-keys.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.prevent-extensions */
    "../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.set */
    "../../node_modules/core-js/modules/es6.reflect.set.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.set-prototype-of */
    "../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js");

    module.exports = __webpack_require__(
    /*! ../modules/_core */
    "../../node_modules/core-js/modules/_core.js").Reflect;
    /***/
  },

  /***/
  "../../node_modules/core-js/es7/reflect.js":
  /*!*********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/es7/reflect.js ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsEs7ReflectJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/es7.reflect.define-metadata */
    "../../node_modules/core-js/modules/es7.reflect.define-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.delete-metadata */
    "../../node_modules/core-js/modules/es7.reflect.delete-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-metadata */
    "../../node_modules/core-js/modules/es7.reflect.get-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-metadata-keys */
    "../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-own-metadata */
    "../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-own-metadata-keys */
    "../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.has-metadata */
    "../../node_modules/core-js/modules/es7.reflect.has-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.has-own-metadata */
    "../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.metadata */
    "../../node_modules/core-js/modules/es7.reflect.metadata.js");

    module.exports = __webpack_require__(
    /*! ../modules/_core */
    "../../node_modules/core-js/modules/_core.js").Reflect;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_a-function.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_a-function.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_aFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_an-instance.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_an-instance.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_anInstanceJs(module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
        throw TypeError(name + ': incorrect invocation!');
      }

      return it;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_an-object.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_an-object.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_anObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_array-from-iterable.js":
  /*!**************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_array-from-iterable.js ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayFromIterableJs(module, exports, __webpack_require__) {
    var forOf = __webpack_require__(
    /*! ./_for-of */
    "../../node_modules/core-js/modules/_for-of.js");

    module.exports = function (iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_array-includes.js":
  /*!*********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_array-includes.js ***!
    \*********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayIncludesJs(module, exports, __webpack_require__) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "../../node_modules/core-js/modules/_to-iobject.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "../../node_modules/core-js/modules/_to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ./_to-absolute-index */
    "../../node_modules/core-js/modules/_to-absolute-index.js");

    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }
        return !IS_INCLUDES && -1;
      };
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_array-methods.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_array-methods.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayMethodsJs(module, exports, __webpack_require__) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = __webpack_require__(
    /*! ./_ctx */
    "../../node_modules/core-js/modules/_ctx.js");

    var IObject = __webpack_require__(
    /*! ./_iobject */
    "../../node_modules/core-js/modules/_iobject.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "../../node_modules/core-js/modules/_to-object.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "../../node_modules/core-js/modules/_to-length.js");

    var asc = __webpack_require__(
    /*! ./_array-species-create */
    "../../node_modules/core-js/modules/_array-species-create.js");

    module.exports = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || asc;
      return function ($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);

            if (TYPE) {
              if (IS_MAP) result[index] = res; // map
              else if (res) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return val;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    result.push(val);
                  // filter
                } else if (IS_EVERY) return false; // every
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_array-species-constructor.js":
  /*!********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_array-species-constructor.js ***!
    \********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arraySpeciesConstructorJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var isArray = __webpack_require__(
    /*! ./_is-array */
    "../../node_modules/core-js/modules/_is-array.js");

    var SPECIES = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('species');

    module.exports = function (original) {
      var C;

      if (isArray(original)) {
        C = original.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return C === undefined ? Array : C;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_array-species-create.js":
  /*!***************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_array-species-create.js ***!
    \***************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arraySpeciesCreateJs(module, exports, __webpack_require__) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = __webpack_require__(
    /*! ./_array-species-constructor */
    "../../node_modules/core-js/modules/_array-species-constructor.js");

    module.exports = function (original, length) {
      return new (speciesConstructor(original))(length);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_bind.js":
  /*!***********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_bind.js ***!
    \***********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_bindJs(module, exports, __webpack_require__) {
    "use strict";

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "../../node_modules/core-js/modules/_a-function.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var invoke = __webpack_require__(
    /*! ./_invoke */
    "../../node_modules/core-js/modules/_invoke.js");

    var arraySlice = [].slice;
    var factories = {};

    var construct = function construct(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) {
          n[i] = 'a[' + i + ']';
        } // eslint-disable-next-line no-new-func


        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      }

      return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that
    /* , ...args */
    ) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);

      var bound = function bound()
      /* args... */
      {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };

      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_classof.js":
  /*!**************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_classof.js ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_classofJs(module, exports, __webpack_require__) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = __webpack_require__(
    /*! ./_cof */
    "../../node_modules/core-js/modules/_cof.js");

    var TAG = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


    var ARG = cof(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (e) {
        /* empty */
      }
    };

    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
      : ARG ? cof(O) // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_cof.js":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_cof.js ***!
    \**********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_cofJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_collection-strong.js":
  /*!************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_collection-strong.js ***!
    \************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionStrongJs(module, exports, __webpack_require__) {
    "use strict";

    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js").f;

    var create = __webpack_require__(
    /*! ./_object-create */
    "../../node_modules/core-js/modules/_object-create.js");

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "../../node_modules/core-js/modules/_redefine-all.js");

    var ctx = __webpack_require__(
    /*! ./_ctx */
    "../../node_modules/core-js/modules/_ctx.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "../../node_modules/core-js/modules/_an-instance.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "../../node_modules/core-js/modules/_for-of.js");

    var $iterDefine = __webpack_require__(
    /*! ./_iter-define */
    "../../node_modules/core-js/modules/_iter-define.js");

    var step = __webpack_require__(
    /*! ./_iter-step */
    "../../node_modules/core-js/modules/_iter-step.js");

    var setSpecies = __webpack_require__(
    /*! ./_set-species */
    "../../node_modules/core-js/modules/_set-species.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js");

    var fastKey = __webpack_require__(
    /*! ./_meta */
    "../../node_modules/core-js/modules/_meta.js").fastKey;

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var SIZE = DESCRIPTORS ? '_s' : 'size';

    var getEntry = function getEntry(that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index]; // frozen object case

      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = create(null); // index

          that._f = undefined; // first entry

          that._l = undefined; // last entry

          that[SIZE] = 0; // size

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }

            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function _delete(key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);

            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            }

            return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn
          /* , that = undefined */
          ) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;

            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this); // revert to the last existing entry

              while (entry && entry.r) {
                entry = entry.p;
              }
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        if (DESCRIPTORS) dP(C.prototype, 'size', {
          get: function get() {
            return validate(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index; // change existing entry

        if (entry) {
          entry.v = value; // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true),
            // <- index
            k: key,
            // <- key
            v: value,
            // <- value
            p: prev = that._l,
            // <- previous entry
            n: undefined,
            // <- next entry
            r: false // <- removed

          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++; // add to index

          if (index !== 'F') that._i[index] = entry;
        }

        return that;
      },
      getEntry: getEntry,
      setStrong: function setStrong(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function (iterated, kind) {
          this._t = validate(iterated, NAME); // target

          this._k = kind; // kind

          this._l = undefined; // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l; // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          } // get next entry


          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return step(1);
          } // return step by kind


          if (kind == 'keys') return step(0, entry.k);
          if (kind == 'values') return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

        setSpecies(NAME);
      }
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_collection-weak.js":
  /*!**********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_collection-weak.js ***!
    \**********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionWeakJs(module, exports, __webpack_require__) {
    "use strict";

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "../../node_modules/core-js/modules/_redefine-all.js");

    var getWeak = __webpack_require__(
    /*! ./_meta */
    "../../node_modules/core-js/modules/_meta.js").getWeak;

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "../../node_modules/core-js/modules/_an-instance.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "../../node_modules/core-js/modules/_for-of.js");

    var createArrayMethod = __webpack_require__(
    /*! ./_array-methods */
    "../../node_modules/core-js/modules/_array-methods.js");

    var $has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0; // fallback for uncaught frozen keys

    var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function UncaughtFrozenStore() {
      this.a = [];
    };

    var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };

    UncaughtFrozenStore.prototype = {
      get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function has(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.a.push([key, value]);
      },
      'delete': function _delete(key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = id++; // collection id

          that._l = undefined; // leak store for uncaught frozen objects

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function _delete(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_collection.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_collection.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "../../node_modules/core-js/modules/_redefine.js");

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "../../node_modules/core-js/modules/_redefine-all.js");

    var meta = __webpack_require__(
    /*! ./_meta */
    "../../node_modules/core-js/modules/_meta.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "../../node_modules/core-js/modules/_for-of.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "../../node_modules/core-js/modules/_an-instance.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var fails = __webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js");

    var $iterDetect = __webpack_require__(
    /*! ./_iter-detect */
    "../../node_modules/core-js/modules/_iter-detect.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "../../node_modules/core-js/modules/_set-to-string-tag.js");

    var inheritIfRequired = __webpack_require__(
    /*! ./_inherit-if-required */
    "../../node_modules/core-js/modules/_inherit-if-required.js");

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};

      var fixMethod = function fixMethod(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == 'delete' ? function (a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a) {
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a) {
          fn.call(this, a === 0 ? 0 : a);
          return this;
        } : function set(a, b) {
          fn.call(this, a === 0 ? 0 : a, b);
          return this;
        });
      };

      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        var instance = new C(); // early implementations not supports chaining

        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

        var THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        }); // most early implementations doesn't supports iterables, most modern - not close it correctly

        var ACCEPT_ITERABLES = $iterDetect(function (iter) {
          new C(iter);
        }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same

        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;

          while (index--) {
            $instance[ADDER](index, index);
          }

          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      setToStringTag(C, NAME);
      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);
      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
      return C;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_core.js":
  /*!***********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_core.js ***!
    \***********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_coreJs(module, exports) {
    var core = module.exports = {
      version: '2.6.9'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_ctx.js":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_ctx.js ***!
    \**********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ctxJs(module, exports, __webpack_require__) {
    // optional / simple context binding
    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "../../node_modules/core-js/modules/_a-function.js");

    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_defined.js":
  /*!**************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_defined.js ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_definedJs(module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_descriptors.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_descriptors.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_descriptorsJs(module, exports, __webpack_require__) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      return Object.defineProperty({}, 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_dom-create.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_dom-create.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_domCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var document = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


    var is = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_enum-bug-keys.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_enum-bug-keys.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_enumBugKeysJs(module, exports) {
    // IE 8- don't enum bug keys
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_export.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_export.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_exportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var core = __webpack_require__(
    /*! ./_core */
    "../../node_modules/core-js/modules/_core.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "../../node_modules/core-js/modules/_hide.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "../../node_modules/core-js/modules/_redefine.js");

    var ctx = __webpack_require__(
    /*! ./_ctx */
    "../../node_modules/core-js/modules/_ctx.js");

    var PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;

      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

        out = (own ? target : source)[key]; // bind timers to global for call from export context

        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

        if (target) redefine(target, key, out, type & $export.U); // export

        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };

    global.core = core; // type bitmap

    $export.F = 1; // forced

    $export.G = 2; // global

    $export.S = 4; // static

    $export.P = 8; // proto

    $export.B = 16; // bind

    $export.W = 32; // wrap

    $export.U = 64; // safe

    $export.R = 128; // real proto method for `library`

    module.exports = $export;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_fails.js":
  /*!************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_fails.js ***!
    \************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_failsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_for-of.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_for-of.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_forOfJs(module, exports, __webpack_require__) {
    var ctx = __webpack_require__(
    /*! ./_ctx */
    "../../node_modules/core-js/modules/_ctx.js");

    var call = __webpack_require__(
    /*! ./_iter-call */
    "../../node_modules/core-js/modules/_iter-call.js");

    var isArrayIter = __webpack_require__(
    /*! ./_is-array-iter */
    "../../node_modules/core-js/modules/_is-array-iter.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "../../node_modules/core-js/modules/_to-length.js");

    var getIterFn = __webpack_require__(
    /*! ./core.get-iterator-method */
    "../../node_modules/core-js/modules/core.get-iterator-method.js");

    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_function-to-string.js":
  /*!*************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_function-to-string.js ***!
    \*************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_functionToStringJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! ./_shared */
    "../../node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_global.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_global.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_globalJs(module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_has.js":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_has.js ***!
    \**********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_hasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_hide.js":
  /*!***********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_hide.js ***!
    \***********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_hideJs(module, exports, __webpack_require__) {
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "../../node_modules/core-js/modules/_property-desc.js");

    module.exports = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_html.js":
  /*!***********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_html.js ***!
    \***********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_htmlJs(module, exports, __webpack_require__) {
    var document = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").document;

    module.exports = document && document.documentElement;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_ie8-dom-define.js":
  /*!*********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_ie8-dom-define.js ***!
    \*********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ie8DomDefineJs(module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      return Object.defineProperty(__webpack_require__(
      /*! ./_dom-create */
      "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_inherit-if-required.js":
  /*!**************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_inherit-if-required.js ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_inheritIfRequiredJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var setPrototypeOf = __webpack_require__(
    /*! ./_set-proto */
    "../../node_modules/core-js/modules/_set-proto.js").set;

    module.exports = function (that, target, C) {
      var S = target.constructor;
      var P;

      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      }

      return that;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_invoke.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_invoke.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_invokeJs(module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;

      switch (args.length) {
        case 0:
          return un ? fn() : fn.call(that);

        case 1:
          return un ? fn(args[0]) : fn.call(that, args[0]);

        case 2:
          return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

        case 3:
          return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

        case 4:
          return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }

      return fn.apply(that, args);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iobject.js":
  /*!**************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iobject.js ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iobjectJs(module, exports, __webpack_require__) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(
    /*! ./_cof */
    "../../node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_is-array-iter.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_is-array-iter.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isArrayIterJs(module, exports, __webpack_require__) {
    // check on default Array iterator
    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "../../node_modules/core-js/modules/_iterators.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('iterator');

    var ArrayProto = Array.prototype;

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_is-array.js":
  /*!***************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_is-array.js ***!
    \***************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isArrayJs(module, exports, __webpack_require__) {
    // 7.2.2 IsArray(argument)
    var cof = __webpack_require__(
    /*! ./_cof */
    "../../node_modules/core-js/modules/_cof.js");

    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_is-object.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_is-object.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iter-call.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iter-call.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterCallJs(module, exports, __webpack_require__) {
    // call something on iterator step with safe closing on error
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iter-create.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iter-create.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterCreateJs(module, exports, __webpack_require__) {
    "use strict";

    var create = __webpack_require__(
    /*! ./_object-create */
    "../../node_modules/core-js/modules/_object-create.js");

    var descriptor = __webpack_require__(
    /*! ./_property-desc */
    "../../node_modules/core-js/modules/_property-desc.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "../../node_modules/core-js/modules/_set-to-string-tag.js");

    var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    __webpack_require__(
    /*! ./_hide */
    "../../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('iterator'), function () {
      return this;
    });

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + ' Iterator');
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iter-define.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iter-define.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterDefineJs(module, exports, __webpack_require__) {
    "use strict";

    var LIBRARY = __webpack_require__(
    /*! ./_library */
    "../../node_modules/core-js/modules/_library.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "../../node_modules/core-js/modules/_redefine.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "../../node_modules/core-js/modules/_hide.js");

    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "../../node_modules/core-js/modules/_iterators.js");

    var $iterCreate = __webpack_require__(
    /*! ./_iter-create */
    "../../node_modules/core-js/modules/_iter-create.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "../../node_modules/core-js/modules/_set-to-string-tag.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('iterator');

    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);

      var getMethod = function getMethod(kind) {
        if (!BUGGY && kind in proto) return proto[kind];

        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };

          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }

        return function entries() {
          return new Constructor(this, kind);
        };
      };

      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype; // Fix native

      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;

        $default = function values() {
          return $native.call(this);
        };
      } // Define iterator


      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      } // Plug for library


      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;

      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }

      return methods;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iter-detect.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iter-detect.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterDetectJs(module, exports, __webpack_require__) {
    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('iterator');

    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();

      riter['return'] = function () {
        SAFE_CLOSING = true;
      }; // eslint-disable-next-line no-throw-literal


      Array.from(riter, function () {
        throw 2;
      });
    } catch (e) {
      /* empty */
    }

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;

      try {
        var arr = [7];
        var iter = arr[ITERATOR]();

        iter.next = function () {
          return {
            done: safe = true
          };
        };

        arr[ITERATOR] = function () {
          return iter;
        };

        exec(arr);
      } catch (e) {
        /* empty */
      }

      return safe;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iter-step.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iter-step.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterStepJs(module, exports) {
    module.exports = function (done, value) {
      return {
        value: value,
        done: !!done
      };
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_iterators.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_iterators.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iteratorsJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_library.js":
  /*!**************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_library.js ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_libraryJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_meta.js":
  /*!***********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_meta.js ***!
    \***********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_metaJs(module, exports, __webpack_require__) {
    var META = __webpack_require__(
    /*! ./_uid */
    "../../node_modules/core-js/modules/_uid.js")('meta');

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var setDesc = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js").f;

    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !__webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_metadata.js":
  /*!***************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_metadata.js ***!
    \***************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_metadataJs(module, exports, __webpack_require__) {
    var Map = __webpack_require__(
    /*! ./es6.map */
    "../../node_modules/core-js/modules/es6.map.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var shared = __webpack_require__(
    /*! ./_shared */
    "../../node_modules/core-js/modules/_shared.js")('metadata');

    var store = shared.store || (shared.store = new (__webpack_require__(
    /*! ./es6.weak-map */
    "../../node_modules/core-js/modules/es6.weak-map.js"))());

    var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
      var targetMetadata = store.get(target);

      if (!targetMetadata) {
        if (!create) return undefined;
        store.set(target, targetMetadata = new Map());
      }

      var keyMetadata = targetMetadata.get(targetKey);

      if (!keyMetadata) {
        if (!create) return undefined;
        targetMetadata.set(targetKey, keyMetadata = new Map());
      }

      return keyMetadata;
    };

    var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
    };

    var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
    };

    var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };

    var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
      var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
      var keys = [];
      if (metadataMap) metadataMap.forEach(function (_, key) {
        keys.push(key);
      });
      return keys;
    };

    var toMetaKey = function toMetaKey(it) {
      return it === undefined || typeof it == 'symbol' ? it : String(it);
    };

    var exp = function exp(O) {
      $export($export.S, 'Reflect', O);
    };

    module.exports = {
      store: store,
      map: getOrCreateMetadataMap,
      has: ordinaryHasOwnMetadata,
      get: ordinaryGetOwnMetadata,
      set: ordinaryDefineOwnMetadata,
      keys: ordinaryOwnMetadataKeys,
      key: toMetaKey,
      exp: exp
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-assign.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-assign.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectAssignJs(module, exports, __webpack_require__) {
    "use strict"; // 19.1.2.1 Object.assign(target, source, ...)

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js");

    var getKeys = __webpack_require__(
    /*! ./_object-keys */
    "../../node_modules/core-js/modules/_object-keys.js");

    var gOPS = __webpack_require__(
    /*! ./_object-gops */
    "../../node_modules/core-js/modules/_object-gops.js");

    var pIE = __webpack_require__(
    /*! ./_object-pie */
    "../../node_modules/core-js/modules/_object-pie.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "../../node_modules/core-js/modules/_to-object.js");

    var IObject = __webpack_require__(
    /*! ./_iobject */
    "../../node_modules/core-js/modules/_iobject.js");

    var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

    module.exports = !$assign || __webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      var A = {};
      var B = {}; // eslint-disable-next-line no-undef

      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;

      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;

        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
      }

      return T;
    } : $assign;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-create.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-create.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectCreateJs(module, exports, __webpack_require__) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var dPs = __webpack_require__(
    /*! ./_object-dps */
    "../../node_modules/core-js/modules/_object-dps.js");

    var enumBugKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "../../node_modules/core-js/modules/_enum-bug-keys.js");

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    var Empty = function Empty() {
      /* empty */
    };

    var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

    var _createDict = function createDict() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = __webpack_require__(
      /*! ./_dom-create */
      "../../node_modules/core-js/modules/_dom-create.js")('iframe');

      var i = enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';

      __webpack_require__(
      /*! ./_html */
      "../../node_modules/core-js/modules/_html.js").appendChild(iframe);

      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);

      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      _createDict = iframeDocument.F;

      while (i--) {
        delete _createDict[PROTOTYPE][enumBugKeys[i]];
      }

      return _createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _createDict();

      return Properties === undefined ? result : dPs(result, Properties);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_object-dp.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-dp.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectDpJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ./_ie8-dom-define */
    "../../node_modules/core-js/modules/_ie8-dom-define.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "../../node_modules/core-js/modules/_to-primitive.js");

    var dP = Object.defineProperty;
    exports.f = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-dps.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-dps.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectDpsJs(module, exports, __webpack_require__) {
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var getKeys = __webpack_require__(
    /*! ./_object-keys */
    "../../node_modules/core-js/modules/_object-keys.js");

    module.exports = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;

      while (length > i) {
        dP.f(O, P = keys[i++], Properties[P]);
      }

      return O;
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-gopd.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-gopd.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopdJs(module, exports, __webpack_require__) {
    var pIE = __webpack_require__(
    /*! ./_object-pie */
    "../../node_modules/core-js/modules/_object-pie.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "../../node_modules/core-js/modules/_property-desc.js");

    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "../../node_modules/core-js/modules/_to-iobject.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "../../node_modules/core-js/modules/_to-primitive.js");

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ./_ie8-dom-define */
    "../../node_modules/core-js/modules/_ie8-dom-define.js");

    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {
        /* empty */
      }
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-gopn.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-gopn.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopnJs(module, exports, __webpack_require__) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = __webpack_require__(
    /*! ./_object-keys-internal */
    "../../node_modules/core-js/modules/_object-keys-internal.js");

    var hiddenKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "../../node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_object-gops.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-gops.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_object-gpo.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-gpo.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGpoJs(module, exports, __webpack_require__) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "../../node_modules/core-js/modules/_to-object.js");

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    var ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectProto : null;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_object-keys-internal.js":
  /*!***************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-keys-internal.js ***!
    \***************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "../../node_modules/core-js/modules/_to-iobject.js");

    var arrayIndexOf = __webpack_require__(
    /*! ./_array-includes */
    "../../node_modules/core-js/modules/_array-includes.js")(false);

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_object-keys.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-keys.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectKeysJs(module, exports, __webpack_require__) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__(
    /*! ./_object-keys-internal */
    "../../node_modules/core-js/modules/_object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "../../node_modules/core-js/modules/_enum-bug-keys.js");

    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_object-pie.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_object-pie.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectPieJs(module, exports) {
    exports.f = {}.propertyIsEnumerable;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_own-keys.js":
  /*!***************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_own-keys.js ***!
    \***************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ownKeysJs(module, exports, __webpack_require__) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = __webpack_require__(
    /*! ./_object-gopn */
    "../../node_modules/core-js/modules/_object-gopn.js");

    var gOPS = __webpack_require__(
    /*! ./_object-gops */
    "../../node_modules/core-js/modules/_object-gops.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var Reflect = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").Reflect;

    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_property-desc.js":
  /*!********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_property-desc.js ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_propertyDescJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_redefine-all.js":
  /*!*******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_redefine-all.js ***!
    \*******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_redefineAllJs(module, exports, __webpack_require__) {
    var redefine = __webpack_require__(
    /*! ./_redefine */
    "../../node_modules/core-js/modules/_redefine.js");

    module.exports = function (target, src, safe) {
      for (var key in src) {
        redefine(target, key, src[key], safe);
      }

      return target;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_redefine.js":
  /*!***************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_redefine.js ***!
    \***************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_redefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "../../node_modules/core-js/modules/_hide.js");

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var SRC = __webpack_require__(
    /*! ./_uid */
    "../../node_modules/core-js/modules/_uid.js")('src');

    var $toString = __webpack_require__(
    /*! ./_function-to-string */
    "../../node_modules/core-js/modules/_function-to-string.js");

    var TO_STRING = 'toString';
    var TPL = ('' + $toString).split(TO_STRING);

    __webpack_require__(
    /*! ./_core */
    "../../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_set-proto.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_set-proto.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setProtoJs(module, exports, __webpack_require__) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var check = function check(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };

    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = __webpack_require__(
          /*! ./_ctx */
          "../../node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(
          /*! ./_object-gopd */
          "../../node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }

        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
      check: check
    };
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_set-species.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_set-species.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setSpeciesJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "../../node_modules/core-js/modules/_descriptors.js");

    var SPECIES = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('species');

    module.exports = function (KEY) {
      var C = global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_set-to-string-tag.js":
  /*!************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_set-to-string-tag.js ***!
    \************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setToStringTagJs(module, exports, __webpack_require__) {
    var def = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js").f;

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var TAG = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('toStringTag');

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
      });
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_shared-key.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_shared-key.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_sharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ./_shared */
    "../../node_modules/core-js/modules/_shared.js")('keys');

    var uid = __webpack_require__(
    /*! ./_uid */
    "../../node_modules/core-js/modules/_uid.js");

    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_shared.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_shared.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_sharedJs(module, exports, __webpack_require__) {
    var core = __webpack_require__(
    /*! ./_core */
    "../../node_modules/core-js/modules/_core.js");

    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: core.version,
      mode: __webpack_require__(
      /*! ./_library */
      "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/_to-absolute-index.js":
  /*!************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-absolute-index.js ***!
    \************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ./_to-integer */
    "../../node_modules/core-js/modules/_to-integer.js");

    var max = Math.max;
    var min = Math.min;

    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_to-integer.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-integer.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toIntegerJs(module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;

    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_to-iobject.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-iobject.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toIobjectJs(module, exports, __webpack_require__) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(
    /*! ./_iobject */
    "../../node_modules/core-js/modules/_iobject.js");

    var defined = __webpack_require__(
    /*! ./_defined */
    "../../node_modules/core-js/modules/_defined.js");

    module.exports = function (it) {
      return IObject(defined(it));
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_to-length.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-length.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toLengthJs(module, exports, __webpack_require__) {
    // 7.1.15 ToLength
    var toInteger = __webpack_require__(
    /*! ./_to-integer */
    "../../node_modules/core-js/modules/_to-integer.js");

    var min = Math.min;

    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_to-object.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-object.js ***!
    \****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toObjectJs(module, exports, __webpack_require__) {
    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__(
    /*! ./_defined */
    "../../node_modules/core-js/modules/_defined.js");

    module.exports = function (it) {
      return Object(defined(it));
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_to-primitive.js":
  /*!*******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_to-primitive.js ***!
    \*******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toPrimitiveJs(module, exports, __webpack_require__) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_uid.js":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_uid.js ***!
    \**********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_uidJs(module, exports) {
    var id = 0;
    var px = Math.random();

    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_validate-collection.js":
  /*!**************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_validate-collection.js ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_validateCollectionJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    module.exports = function (it, TYPE) {
      if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/_wks.js":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/_wks.js ***!
    \**********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_wksJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ./_shared */
    "../../node_modules/core-js/modules/_shared.js")('wks');

    var uid = __webpack_require__(
    /*! ./_uid */
    "../../node_modules/core-js/modules/_uid.js");

    var Symbol = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").Symbol;

    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/core.get-iterator-method.js":
  /*!******************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/core.get-iterator-method.js ***!
    \******************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesCoreGetIteratorMethodJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ./_classof */
    "../../node_modules/core-js/modules/_classof.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "../../node_modules/core-js/modules/_wks.js")('iterator');

    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "../../node_modules/core-js/modules/_iterators.js");

    module.exports = __webpack_require__(
    /*! ./_core */
    "../../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/es6.map.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.map.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6MapJs(module, exports, __webpack_require__) {
    "use strict";

    var strong = __webpack_require__(
    /*! ./_collection-strong */
    "../../node_modules/core-js/modules/_collection-strong.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var MAP = 'Map'; // 23.1 Map Objects

    module.exports = __webpack_require__(
    /*! ./_collection */
    "../../node_modules/core-js/modules/_collection.js")(MAP, function (get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
      }
    }, strong, true);
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.apply.js":
  /*!***********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.apply.js ***!
    \***********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectApplyJs(module, exports, __webpack_require__) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "../../node_modules/core-js/modules/_a-function.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var rApply = (__webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").Reflect || {}).apply;
    var fApply = Function.apply; // MS Edge argumentsList argument is optional

    $export($export.S + $export.F * !__webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      rApply(function () {
        /* empty */
      });
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.construct.js":
  /*!***************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.construct.js ***!
    \***************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectConstructJs(module, exports, __webpack_require__) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var create = __webpack_require__(
    /*! ./_object-create */
    "../../node_modules/core-js/modules/_object-create.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "../../node_modules/core-js/modules/_a-function.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var fails = __webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js");

    var bind = __webpack_require__(
    /*! ./_bind */
    "../../node_modules/core-js/modules/_bind.js");

    var rConstruct = (__webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it

    var NEW_TARGET_BUG = fails(function () {
      function F() {
        /* empty */
      }

      return !(rConstruct(function () {
        /* empty */
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      rConstruct(function () {
        /* empty */
      });
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args
      /* , newTarget */
      ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0:
              return new Target();

            case 1:
              return new Target(args[0]);

            case 2:
              return new Target(args[0], args[1]);

            case 3:
              return new Target(args[0], args[1], args[2]);

            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          } // w/o altered newTarget, lot of arguments case


          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        } // with altered newTarget, not support built-in constructors


        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.define-property.js":
  /*!*********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.define-property.js ***!
    \*********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectDefinePropertyJs(module, exports, __webpack_require__) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "../../node_modules/core-js/modules/_to-primitive.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


    $export($export.S + $export.F * __webpack_require__(
    /*! ./_fails */
    "../../node_modules/core-js/modules/_fails.js")(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(dP.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);

        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.delete-property.js":
  /*!*********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
    \*********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectDeletePropertyJs(module, exports, __webpack_require__) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "../../node_modules/core-js/modules/_object-gopd.js").f;

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.enumerate.js":
  /*!***************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
    \***************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectEnumerateJs(module, exports, __webpack_require__) {
    "use strict"; // 26.1.5 Reflect.enumerate(target)

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var Enumerate = function Enumerate(iterated) {
      this._t = anObject(iterated); // target

      this._i = 0; // next index

      var keys = this._k = []; // keys

      var key;

      for (key in iterated) {
        keys.push(key);
      }
    };

    __webpack_require__(
    /*! ./_iter-create */
    "../../node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
      var that = this;
      var keys = that._k;
      var key;

      do {
        if (that._i >= keys.length) return {
          value: undefined,
          done: true
        };
      } while (!((key = keys[that._i++]) in that._t));

      return {
        value: key,
        done: false
      };
    });

    $export($export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
  /*!*********************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
    \*********************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "../../node_modules/core-js/modules/_object-gopd.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
  /*!**********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
    \**********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetPrototypeOfJs(module, exports, __webpack_require__) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var getProto = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.get.js":
  /*!*********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.get.js ***!
    \*********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetJs(module, exports, __webpack_require__) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "../../node_modules/core-js/modules/_object-gopd.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    function get(target, propertyKey
    /* , receiver */
    ) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', {
      get: get
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.has.js":
  /*!*********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.has.js ***!
    \*********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectHasJs(module, exports, __webpack_require__) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    $export($export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.is-extensible.js":
  /*!*******************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
    \*******************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectIsExtensibleJs(module, exports, __webpack_require__) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var $isExtensible = Object.isExtensible;
    $export($export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.own-keys.js":
  /*!**************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectOwnKeysJs(module, exports, __webpack_require__) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    $export($export.S, 'Reflect', {
      ownKeys: __webpack_require__(
      /*! ./_own-keys */
      "../../node_modules/core-js/modules/_own-keys.js")
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
  /*!************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
    \************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectPreventExtensionsJs(module, exports, __webpack_require__) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var $preventExtensions = Object.preventExtensions;
    $export($export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        anObject(target);

        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
  /*!**********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
    \**********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectSetPrototypeOfJs(module, exports, __webpack_require__) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var setProto = __webpack_require__(
    /*! ./_set-proto */
    "../../node_modules/core-js/modules/_set-proto.js");

    if (setProto) $export($export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);

        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.reflect.set.js":
  /*!*********************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.reflect.set.js ***!
    \*********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectSetJs(module, exports, __webpack_require__) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "../../node_modules/core-js/modules/_object-dp.js");

    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "../../node_modules/core-js/modules/_object-gopd.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var has = __webpack_require__(
    /*! ./_has */
    "../../node_modules/core-js/modules/_has.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "../../node_modules/core-js/modules/_export.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "../../node_modules/core-js/modules/_property-desc.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    function set(target, propertyKey, V
    /* , receiver */
    ) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;

      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }

        ownDesc = createDesc(0);
      }

      if (has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;

        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));

        return true;
      }

      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', {
      set: set
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.set.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.set.js ***!
    \*************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6SetJs(module, exports, __webpack_require__) {
    "use strict";

    var strong = __webpack_require__(
    /*! ./_collection-strong */
    "../../node_modules/core-js/modules/_collection-strong.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var SET = 'Set'; // 23.2 Set Objects

    module.exports = __webpack_require__(
    /*! ./_collection */
    "../../node_modules/core-js/modules/_collection.js")(SET, function (get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, strong);
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es6.weak-map.js":
  /*!******************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es6.weak-map.js ***!
    \******************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6WeakMapJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "../../node_modules/core-js/modules/_global.js");

    var each = __webpack_require__(
    /*! ./_array-methods */
    "../../node_modules/core-js/modules/_array-methods.js")(0);

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "../../node_modules/core-js/modules/_redefine.js");

    var meta = __webpack_require__(
    /*! ./_meta */
    "../../node_modules/core-js/modules/_meta.js");

    var assign = __webpack_require__(
    /*! ./_object-assign */
    "../../node_modules/core-js/modules/_object-assign.js");

    var weak = __webpack_require__(
    /*! ./_collection-weak */
    "../../node_modules/core-js/modules/_collection-weak.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "../../node_modules/core-js/modules/_is-object.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ./_validate-collection */
    "../../node_modules/core-js/modules/_validate-collection.js");

    var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = __webpack_require__(
    /*! ./_collection */
    "../../node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
    /***/

  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.define-metadata.js":
  /*!*********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
    \*********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectDefineMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var toMetaKey = metadata.key;
    var ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({
      defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.delete-metadata.js":
  /*!*********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
    \*********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectDeleteMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var toMetaKey = metadata.key;
    var getOrCreateMetadataMap = metadata.map;
    var store = metadata.store;
    metadata.exp({
      deleteMetadata: function deleteMetadata(metadataKey, target
      /* , targetKey */
      ) {
        var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
        var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata['delete'](targetKey);
        return !!targetMetadata.size || store['delete'](target);
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
  /*!***********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
    \***********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetMetadataKeysJs(module, exports, __webpack_require__) {
    var Set = __webpack_require__(
    /*! ./es6.set */
    "../../node_modules/core-js/modules/es6.set.js");

    var from = __webpack_require__(
    /*! ./_array-from-iterable */
    "../../node_modules/core-js/modules/_array-from-iterable.js");

    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;

    var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
      var oKeys = ordinaryOwnMetadataKeys(O, P);
      var parent = getPrototypeOf(O);
      if (parent === null) return oKeys;
      var pKeys = ordinaryMetadataKeys(parent, P);
      return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };

    metadata.exp({
      getMetadataKeys: function getMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.get-metadata.js":
  /*!******************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
    \******************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;

    var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };

    metadata.exp({
      getMetadata: function getMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
  /*!***************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
    \***************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetOwnMetadataKeysJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadataKeys: function getOwnMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
  /*!**********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
    \**********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetOwnMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadata: function getOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.has-metadata.js":
  /*!******************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
    \******************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectHasMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "../../node_modules/core-js/modules/_object-gpo.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;

    var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
    };

    metadata.exp({
      hasMetadata: function hasMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
  /*!**********************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
    \**********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectHasOwnMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;
    metadata.exp({
      hasOwnMetadata: function hasOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "../../node_modules/core-js/modules/es7.reflect.metadata.js":
  /*!**************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/core-js/modules/es7.reflect.metadata.js ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectMetadataJs(module, exports, __webpack_require__) {
    var $metadata = __webpack_require__(
    /*! ./_metadata */
    "../../node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "../../node_modules/core-js/modules/_an-object.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "../../node_modules/core-js/modules/_a-function.js");

    var toMetaKey = $metadata.key;
    var ordinaryDefineOwnMetadata = $metadata.set;
    $metadata.exp({
      metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
          ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
      }
    });
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<blockquote>\n    Import from your library in this demo project as if you were using it as an\n    NPM package\n</blockquote>\n<blockquote>\n    <a\n        routerLink=\".\"\n        style=\"margin-right: 16px\"\n    >\n        Static component\n    </a>\n    <a routerLink=\"/lazy\">Lazy component</a>\n</blockquote>\n<blockquote>\n    <router-outlet></router-outlet>\n</blockquote>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/static/static.template.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/raw-loader/dist/cjs.js!./src/app/modules/static/static.template.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesStaticStaticTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>This is a static route</p>\n";
    /***/
  },

  /***/
  "../../node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "__load_patch",
            // tslint:disable-next-line:require-internal-with-underscore
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate = /*#__PURE__*/function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }, {
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise = /*#__PURE__*/function () {
          _createClass(ZoneAwarePromise, null, [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }, {
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.browser.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app.browser.module.ts ***!
    \***************************************/

  /*! exports provided: AppBrowserModule */

  /***/
  function srcAppAppBrowserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function () {
      return AppBrowserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _modules_static_static_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/static/static.module */
    "./src/app/modules/static/static.module.ts");

    var AppBrowserModule = function AppBrowserModule() {
      _classCallCheck(this, AppBrowserModule);
    };

    AppBrowserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({
        appId: 'demo'
      }), _app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _modules_static_static_module__WEBPACK_IMPORTED_MODULE_6__["StaticModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"]
      }]
    })], AppBrowserModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'my-app',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: appRoutes, AppRoutingModule */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_static_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/static/static.component */
    "./src/app/modules/static/static.component.ts");

    var appRoutes = [{
      path: '',
      component: _modules_static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"]
    }, {
      path: 'lazy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-lazy-lazy-module */
        "modules-lazy-lazy-module").then(__webpack_require__.bind(null,
        /*! ./modules/lazy/lazy.module */
        "./src/app/modules/lazy/lazy.module.ts")).then(function (m) {
          return m.LazyModule;
        });
      }
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        initialNavigation: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/static/static.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/static/static.component.ts ***!
    \****************************************************/

  /*! exports provided: StaticComponent */

  /***/
  function srcAppModulesStaticStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return StaticComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaticComponent = function StaticComponent() {
      _classCallCheck(this, StaticComponent);
    };

    StaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'static',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./static.template.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/static/static.template.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], StaticComponent);
    /***/
  },

  /***/
  "./src/app/modules/static/static.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/static/static.module.ts ***!
    \*************************************************/

  /*! exports provided: StaticModule */

  /***/
  function srcAppModulesStaticStaticModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticModule", function () {
      return StaticModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _static_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./static.component */
    "./src/app/modules/static/static.component.ts");

    var StaticModule = function StaticModule() {
      _classCallCheck(this, StaticModule);
    };

    StaticModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_static_component__WEBPACK_IMPORTED_MODULE_2__["StaticComponent"]],
      exports: [_static_component__WEBPACK_IMPORTED_MODULE_2__["StaticComponent"]]
    })], StaticModule);
    /***/
  },

  /***/
  "./src/main.browser.ts":
  /*!*****************************!*\
    !*** ./src/main.browser.ts ***!
    \*****************************/

  /*! no exports provided */

  /***/
  function srcMainBrowserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.browser.module */
    "./src/app/app.browser.module.ts");

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__["AppBrowserModule"]).then(function (ref) {
        var windowRef = window; // Ensure Angular destroys itself on hot reloads for Stackblitz

        if (windowRef['ngRef']) {
          windowRef['ngRef'].destroy();
        }

        windowRef['ngRef'] = ref;
      })["catch"](console.error);
    });
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/es6/reflect */
    "../../node_modules/core-js/es6/reflect.js");
    /* harmony import */


    var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/es7/reflect */
    "../../node_modules/core-js/es7/reflect.js");
    /* harmony import */


    var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "../../node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
    /***/

  },

  /***/
  0:
  /*!***********************************!*\
    !*** multi ./src/main.browser.ts ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/angular-open-source-starter/angular-open-source-starter/projects/demo/src/main.browser.ts */
    "./src/main.browser.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
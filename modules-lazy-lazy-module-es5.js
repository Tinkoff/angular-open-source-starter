function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-lazy-lazy-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/lazy/lazy.template.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** /home/runner/work/angular-open-source-starter/angular-open-source-starter/node_modules/raw-loader/dist/cjs.js!./src/app/modules/lazy/lazy.template.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLazyLazyTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>This is a lazy route</p>\n";
    /***/
  },

  /***/
  "./src/app/modules/lazy/lazy.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/lazy/lazy.component.ts ***!
    \************************************************/

  /*! exports provided: LazyComponent */

  /***/
  function srcAppModulesLazyLazyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
      return LazyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LazyComponent = function LazyComponent() {
      _classCallCheck(this, LazyComponent);
    };

    LazyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lazy',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lazy.template.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/lazy/lazy.template.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], LazyComponent);
    /***/
  },

  /***/
  "./src/app/modules/lazy/lazy.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/lazy/lazy.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, LazyModule */

  /***/
  function srcAppModulesLazyLazyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyModule", function () {
      return LazyModule;
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


    var _lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lazy.component */
    "./src/app/modules/lazy/lazy.component.ts");

    var routes = [{
      path: '',
      component: _lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"]
    }];

    var LazyModule = function LazyModule() {
      _classCallCheck(this, LazyModule);
    };

    LazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"]],
      exports: [_lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"]]
    })], LazyModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-lazy-lazy-module-es5.js.map
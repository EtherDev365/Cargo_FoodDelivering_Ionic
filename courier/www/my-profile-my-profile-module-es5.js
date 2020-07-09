function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'my_profile' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"profile_container d-flex\"> \r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile.png\" class=\"crop_img\"> \r\n\t\t</div> \r\n\t</div>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"Samantha Smith\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"enail\" value=\"samanthasmith@mail.com\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item> \r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"text\" value=\"+1 987 654 3210\" readonly></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n ";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyProfilePageRoutingModule */

  /***/
  function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.module.ts ***!
    \*************************************************/

  /*! exports provided: MyProfilePageModule */

  /***/
  function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: var(--transparent) !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 45px;\n}\n\n.profile_container .img_box {\n  min-width: 115px;\n  height: 115px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxteS1wcm9maWxlXFxteS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EsMkNBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREdBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQ0FEOztBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjU2cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHRib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9maWxlX2NvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMjJweCAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDQ1cHg7IFxyXG5cclxuXHQuaW1nX2JveCB7XHJcblx0XHRtaW4td2lkdGg6IDExNXB4O1xyXG5cdFx0aGVpZ2h0OiAxMTVweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG5cclxuICIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjU2cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59XG5cbi5wcm9maWxlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIycHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5wcm9maWxlX2NvbnRhaW5lciAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-profile/my-profile.page.ts ***!
    \***********************************************/

  /*! exports provided: MyProfilePage */

  /***/
  function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage() {
        _classCallCheck(this, MyProfilePage);
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfilePage;
    }();

    MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/my-profile/my-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map
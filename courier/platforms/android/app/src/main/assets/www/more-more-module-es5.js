function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMoreMorePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>{{'account' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n\t<div class=\"profile_box d-flex\" (click)=\"view_profile()\">\r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile.png\" class=\"crop_img\">\r\n\t\t</div>\r\n\t\t<div class=\"text_box\">\r\n\t\t\t<h2>Samantha Smith</h2>\r\n\t\t\t<p>{{'view_profile' | translate}}</p>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item (click)=\"saved_addresses()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'saved_addresses' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'save_address_for_quick_process' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<ion-item (click)=\"contact_us()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'contact_us' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'contact_us_for_any_query_issue' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"change_language()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-globe ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'change_language' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'select_language' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"terms_conditions()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'terms_conditions' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'know_our_terms_conditions' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-arrow-split ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'share_app' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'share_with_friends_famill' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item (click)=\"logout()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-sign-in ion-text-start\"></ion-icon>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2>{{'logout' | translate}}</h2>\r\n\t\t\t\t\t<p>{{'signout_form_current_account' | translate}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\r\n\t<div *ngIf=\"config.showBuyPromt\" (click)=\"buyAppAction()\" class=\"buy_this_app\">\r\n\t\t<h2>\r\n\t\t\t<ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon>\r\n\t\t\t{{\"buy_this_app\" | translate}}\r\n\t\t</h2>\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/more/more-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/more/more-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MorePageRoutingModule */

  /***/
  function srcAppMoreMoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorePageRoutingModule", function () {
      return MorePageRoutingModule;
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


    var _more_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more.page */
    "./src/app/more/more.page.ts");

    var routes = [{
      path: '',
      component: _more_page__WEBPACK_IMPORTED_MODULE_3__["MorePage"]
    }];

    var MorePageRoutingModule = function MorePageRoutingModule() {
      _classCallCheck(this, MorePageRoutingModule);
    };

    MorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MorePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/more/more.module.ts":
  /*!*************************************!*\
    !*** ./src/app/more/more.module.ts ***!
    \*************************************/

  /*! exports provided: MorePageModule */

  /***/
  function srcAppMoreMoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorePageModule", function () {
      return MorePageModule;
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


    var _more_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-routing.module */
    "./src/app/more/more-routing.module.ts");
    /* harmony import */


    var _more_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./more.page */
    "./src/app/more/more.page.ts");

    var MorePageModule = function MorePageModule() {
      _classCallCheck(this, MorePageModule);
    };

    MorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _more_routing_module__WEBPACK_IMPORTED_MODULE_6__["MorePageRoutingModule"]],
      declarations: [_more_page__WEBPACK_IMPORTED_MODULE_7__["MorePage"]]
    })], MorePageModule);
    /***/
  },

  /***/
  "./src/app/more/more.page.scss":
  /*!*************************************!*\
    !*** ./src/app/more/more.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMoreMorePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 25px !important;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\nion-header .profile_box {\n  padding: 27px 25px 25px 25px !important;\n}\nion-header .profile_box .img_box {\n  min-width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  margin-right: 15px;\n}\nion-header .profile_box .text_box {\n  color: var(--white);\n}\nion-header .profile_box .text_box h2 {\n  margin: 0;\n  font-size: 1.4rem;\n  letter-spacing: 0.7px;\n  padding-bottom: 2px;\n}\nion-header .profile_box .text_box p {\n  margin: 0;\n  opacity: 0.6;\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.7px;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 45px 34px 19px 34px;\n  padding-bottom: 50px;\n}\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 38px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner ion-icon {\n  color: var(--primary);\n  font-size: 1.6rem;\n  position: relative;\n  min-width: 48px;\n  display: block;\n  top: 3px;\n}\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 700;\n  font-size: 1.5rem;\n  letter-spacing: 0;\n  padding-bottom: 11px;\n}\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  margin: 0;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.buy_this_app {\n  background: var(--primary);\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  min-width: 155px;\n  z-index: 99999;\n  box-shadow: 0 10px 18px -4px rgba(0, 0, 0, 0.2);\n}\n.buy_this_app h2 {\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxtb3JlXFxtb3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9yZS9tb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0M7RUFFQyx1Q0FBQTtBQ0ZGO0FESUU7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGSDtBREtFO0VBQ0MsbUJBQUE7QUNISDtBREtHO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0hKO0FET0c7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0xKO0FEV0E7RUFDQyx5Q0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDUkQ7QURVQztFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEVUU7RUFDQyxXQUFBO0VBQ0EsdUJBQUE7QUNSSDtBRFVHO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0FDUko7QURXRztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVEo7QURZRztFQUNDLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVko7QURnQkE7RUFDQywwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0FDYkQ7QURlQztFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGVFO0VBQ0MsZUFBQTtFQUNBLGVBQUE7QUNiSCIsImZpbGUiOiJzcmMvYXBwL21vcmUvbW9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHRpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdFx0cGFkZGluZzogMCAyNXB4ICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG5cclxuXHQucHJvZmlsZV9ib3gge1xyXG5cclxuXHRcdHBhZGRpbmc6IDI3cHggMjVweCAyNXB4IDI1cHggIWltcG9ydGFudDtcclxuXHJcblx0XHQuaW1nX2JveCB7XHJcblx0XHRcdG1pbi13aWR0aDogNjhweDtcclxuXHRcdFx0aGVpZ2h0OiA2OHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQudGV4dF9ib3gge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjdweDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdG9wYWNpdHk6IC42O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC43cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNDVweCAzNHB4IDE5cHggMzRweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG5cclxuXHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuXHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNnJlbTtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLXdpZHRoOiA0OHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdHRvcDogM3B4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMiB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uYnV5X3RoaXNfYXBwIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAyMHB4O1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtaW4td2lkdGg6IDE1NXB4O1xyXG5cdHotaW5kZXg6IDk5OTk5O1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuXHRoMiB7XHJcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdG1pbi13aWR0aDogMjRweDtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMjVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1oZWFkZXIgLnByb2ZpbGVfYm94IHtcbiAgcGFkZGluZzogMjdweCAyNXB4IDI1cHggMjVweCAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9ib3ggLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5pb24taGVhZGVyIC5wcm9maWxlX2JveCAudGV4dF9ib3gge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9ib3ggLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuaW9uLWhlYWRlciAucHJvZmlsZV9ib3ggLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNDVweCAzNHB4IDE5cHggMzRweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA0OHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ1eV90aGlzX2FwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxNTVweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmJ1eV90aGlzX2FwcCBoMiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5idXlfdGhpc19hcHAgaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/more/more.page.ts":
  /*!***********************************!*\
    !*** ./src/app/more/more.page.ts ***!
    \***********************************/

  /*! exports provided: MorePage */

  /***/
  function srcAppMoreMorePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorePage", function () {
      return MorePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var MorePage = /*#__PURE__*/function () {
      function MorePage(config, route, navCtrl) {
        _classCallCheck(this, MorePage);

        this.config = config;
        this.route = route;
        this.navCtrl = navCtrl;
      }

      _createClass(MorePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "view_profile",
        value: function view_profile() {
          this.route.navigate(['./my-profile']);
        }
      }, {
        key: "saved_addresses",
        value: function saved_addresses() {
          this.route.navigate(['./saved-addresses']);
        }
      }, {
        key: "contact_us",
        value: function contact_us() {
          this.route.navigate(['./contact-us']);
        }
      }, {
        key: "change_language",
        value: function change_language() {
          this.route.navigate(['./change-language']);
        }
      }, {
        key: "terms_conditions",
        value: function terms_conditions() {
          this.route.navigate(['./terms-conditions']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.navCtrl.navigateRoot(['./sign-in']);
        }
      }, {
        key: "buyAppAction",
        value: function buyAppAction() {
          window.open("https://bit.ly/cc_CourierOne", '_system', 'location=no');
        }
      }]);

      return MorePage;
    }();

    MorePage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-more',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./more.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./more.page.scss */
      "./src/app/more/more.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], MorePage);
    /***/
  }
}]);
//# sourceMappingURL=more-more-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<!--\r\n  <ion-toolbar>\r\n    <ion-title>{{'enter_phone_number' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n-->\r\n\r\n\t<div class=\"logo_box\">\r\n\t\t<img src=\"assets/images/logo.png\">\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<h2 class=\"ion-text-center\">{{'sign_in_with_phone_number' | translate}}</h2>\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'select_country' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-select mode=\"md\" placeholder=\"{{'select_country_from_list' | translate}}\" interface=\"action-sheet\">\r\n\t\t\t\t\t\t<ion-select-option value=\"1\">Brazil</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"2\">India</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"3\">Ireland</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"4\">Japan</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"5\">Kenya</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"6\">Latvia</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"7\">Martinique</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"8\">Mexico</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"9\">Monaco</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"10\">Nepal</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</div> \r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"number\" value=\"\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn continue\" (click)=\"continue()\">{{'continue' | translate}}</ion-button>\r\n\t<h3 class=\"ion-text-center\">{{'we_will_send_otp_for_verfication' | translate}}</h3>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n<h2 class=\"ion-text-center\">{{'or_continue_with' | translate}}</h2>\r\n\t<ion-row>\r\n\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\r\n\t\t\t<ion-button size=\"large\"   class=\"btn facebook\" (click)=\"tabs()\">{{'facebook' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t\t\r\n\t\t<ion-col size=\"6\" class=\"ion-no-padding\">\r\n\t\t\t<ion-button size=\"large\"   class=\"btn google\" (click)=\"tabs()\">{{'google' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SignInPageRoutingModule */

  /***/
  function srcAppSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
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


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-in/sign-in.module.ts ***!
    \*******************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
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


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sign-in/sign-in.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo_box {\n  position: relative;\n  overflow: hidden;\n  min-height: 220px;\n}\n.logo_box img {\n  width: 190px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  margin: auto;\n}\n.form {\n  padding-top: 30px;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.4rem;\n  padding-bottom: 52px;\n}\n.button.btn.button-block.continue {\n  --border-radius: 33px 0 !important;\n}\nh3 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 1rem;\n  padding-top: 13px;\n}\nion-footer {\n  background: var(--white);\n}\nion-footer h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.35rem;\n  padding-bottom: 40px;\n}\nion-footer .button.btn {\n  --border-radius: 0;\n}\nion-footer .button.btn.facebook {\n  --background: #3b45c1;\n  --border-radius: 33px 0 0 0;\n}\nion-footer .button.btn.google {\n  --background: #ff452c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxzaWduLWluXFxzaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NEO0FEQ0M7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjtBRElBO0VBQ0MsaUJBQUE7QUNERDtBREdDO0VBQ0MsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RGO0FETUE7RUFDQyxrQ0FBQTtBQ0hEO0FETUE7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hEO0FETUE7RUFDQyx3QkFBQTtBQ0hEO0FES0M7RUFDQyxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDSEY7QURNQztFQUNDLGtCQUFBO0FDSkY7QURNRTtFQUNDLHFCQUFBO0VBQ0EsMkJBQUE7QUNKSDtBRE1FO0VBQ0MscUJBQUE7QUNKSCIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb19ib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG5cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDE5MHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblxyXG5cdH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHRcdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDUycHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLmJ1dHRvbi5idG4uYnV0dG9uLWJsb2NrLmNvbnRpbnVlIHtcclxuXHQtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRwYWRkaW5nLXRvcDogMTNweDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHRcdGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cdH1cclxuXHJcblx0LmJ1dHRvbi5idG4ge1xyXG5cdFx0LS1ib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuXHRcdCYuZmFjZWJvb2sge1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6ICMzYjQ1YzE7XHJcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHRcdH1cclxuXHRcdCYuZ29vZ2xlIHtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjZmY0NTJjOyBcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLmxvZ29fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cbi5sb2dvX2JveCBpbWcge1xuICB3aWR0aDogMTkwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmZvcm0gaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDUycHg7XG59XG5cbi5idXR0b24uYnRuLmJ1dHRvbi1ibG9jay5jb250aW51ZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzNweCAwICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tZm9vdGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuLmZhY2Vib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2I0NWMxO1xuICAtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuLmdvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmNDUyYztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sign-in/sign-in.page.ts ***!
    \*****************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignInPage = /*#__PURE__*/function () {
      function SignInPage(navCtrl, route) {
        _classCallCheck(this, SignInPage);

        this.navCtrl = navCtrl;
        this.route = route;
      }

      _createClass(SignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabs",
        value: function tabs() {
          this.navCtrl.navigateRoot(['./tabs']);
        }
      }, {
        key: "continue",
        value: function _continue() {
          this.route.navigate(['./sign-up']);
        }
      }]);

      return SignInPage;
    }();

    SignInPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/sign-in/sign-in.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SignInPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map
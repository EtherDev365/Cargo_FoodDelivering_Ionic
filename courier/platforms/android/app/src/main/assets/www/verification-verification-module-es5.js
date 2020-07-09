function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'verification' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n\t<div class=\"text_box\">\r\n\t\t<p>{{'verification_text' | translate}}</p>\r\n\t\t<h2 class=\"d-flex\">2:23 min <span class=\"end\">{{'resend' | translate}}</span></h2>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'enter_otp' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"\" placeholder=\"{{'enter_6_digit_code' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"   class=\"btn\" (click)=\"submit()\">{{'submit' | translate}}</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/verification/verification-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verification/verification-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerificationPageRoutingModule */

  /***/
  function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
      return VerificationPageRoutingModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }];

    var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
      _classCallCheck(this, VerificationPageRoutingModule);
    };

    VerificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerificationPageModule */

  /***/
  function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verification/verification-routing.module.ts");
    /* harmony import */


    var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var VerificationPageModule = function VerificationPageModule() {
      _classCallCheck(this, VerificationPageModule);
    };

    VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verification/verification.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\n.text_box {\n  color: var(--white);\n  padding: 26px 23px 15px 23px;\n}\n\n.text_box p {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.35rem;\n  line-height: 26px;\n  letter-spacing: 0.5px;\n  padding-bottom: 55px;\n}\n\n.text_box h2 {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.15rem;\n}\n\n.text_box h2 span {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\n.form {\n  padding-top: 62px;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL0Q6XFxNb2JpbGVGcmFtd29ya3NcXElvbmljXFxSZXNvdXJjZXNcXGlvbmljVGVtcGxhdGVcXGNvdXJpZXIvc3JjXFxhcHBcXHZlcmlmaWNhdGlvblxcdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLDRCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFRTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FIOztBREtBO0VBQ0MsaUJBQUE7QUNGRDs7QURLQTtFQUNDLHdCQUFBO0FDRkQ7O0FESUM7RUFDQywyQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS41NnJlbTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9ib3gge1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0cGFkZGluZzogMjZweCAyM3B4IDE1cHggMjNweDtcclxuXHJcblx0cCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjM1cmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG5cdH1cclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuXHJcblx0XHRzcGFuIHtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZm9ybSB7XHJcblx0cGFkZGluZy10b3A6IDYycHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0LmJ1dHRvbi5idG4ge1xyXG5cdFx0LS1ib3JkZXItcmFkaXVzOiAzM3B4IDAgMCAwO1xyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjU2cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLnRleHRfYm94IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMjZweCAyM3B4IDE1cHggMjNweDtcbn1cbi50ZXh0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xufVxuLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMTVyZW07XG59XG4udGV4dF9ib3ggaDIgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogNjJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verification/verification.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verification/verification.page.ts ***!
    \***************************************************/

  /*! exports provided: VerificationPage */

  /***/
  function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
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

    var VerificationPage = /*#__PURE__*/function () {
      function VerificationPage(navCtrl) {
        _classCallCheck(this, VerificationPage);

        this.navCtrl = navCtrl;
      }

      _createClass(VerificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          this.navCtrl.navigateRoot(['./tabs']);
        }
      }]);

      return VerificationPage;
    }();

    VerificationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/verification/verification.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], VerificationPage);
    /***/
  }
}]);
//# sourceMappingURL=verification-verification-module-es5.js.map
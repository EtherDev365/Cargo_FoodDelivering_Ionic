(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'register' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"profile_container d-flex\">\r\n\t\t<ion-icon class=\"zmdi zmdi-image\"></ion-icon>\r\n\t\t<div class=\"img_box center_img\">\r\n\t\t\t<img src=\"assets/images/profile_pic_placeholder.png\" class=\"crop_img\"> \r\n\t\t</div>\r\n\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"\" placeholder=\"{{'enter_full_name' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"enail\" value=\"\" placeholder=\"{{'enter_email_address' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'select_country' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-select mode=\"md\" placeholder=\"{{'select_country_from_list' | translate}}\" interface=\"action-sheet\">\r\n\t\t\t\t\t\t<ion-select-option value=\"1\">Brazil</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"2\">India</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"3\">Ireland</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"4\">Japan</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"5\">Kenya</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"6\">Latvia</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"7\">Martinique</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"8\">Mexico</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"9\">Monaco</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"10\">Nepal</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"number\" value=\"\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\" (click)=\"continue()\">{{'continue' | translate}}</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/sign-up/sign-up-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");








let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.56rem;\n  font-weight: 500;\n  padding: 0 15px !important;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: var(--transparent) !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 45px;\n}\n\n.profile_container ion-icon {\n  color: var(--primary);\n  margin: 0 auto;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.profile_container .img_box {\n  min-width: 115px;\n  height: 115px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxzaWduLXVwXFxzaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLDJCQUFBO0VBQ0EsMkNBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREdBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQ0FEOztBREVDO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBREtBO0VBQ0Msd0JBQUE7QUNGRDs7QURHQztFQUNDLDJCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS41NnJlbTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblxyXG5cdCY6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0fVxyXG59XHJcblxyXG4ucHJvZmlsZV9jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDIycHggMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG5cclxuXHRpb24taWNvbiB7XHJcblx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQuaW1nX2JveCB7XHJcblx0XHRtaW4td2lkdGg6IDExNXB4O1xyXG5cdFx0aGVpZ2h0OiAxMTVweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0LmJ1dHRvbi5idG57XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNTZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcbn1cblxuLnByb2ZpbGVfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjJweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLnByb2ZpbGVfY29udGFpbmVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnByb2ZpbGVfY29udGFpbmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWZvb3RlciAuYnV0dG9uLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SignUpPage = class SignUpPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    continue() {
        this.route.navigate(['./verification']);
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map
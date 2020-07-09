(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title></ion-title>\r\n\t</ion-toolbar>\r\n\t<h1>{{'contact_us' | translate}}</h1>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<h2>{{'contact_us_text' | translate}}</h2>\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'full_name' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"name\" value=\"\" placeholder=\"{{'enter_full_name' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-input type=\"number\" value=\"\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t<ion-label position=\"fixed\">{{'your_message' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-textarea rows=\"1\" type=\"text\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\" class=\"btn\">{{'send_message' | translate}}</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/contact-us/contact-us-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function() { return ContactUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us-routing.module */ "./src/app/contact-us/contact-us-routing.module.ts");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContactUsPageRoutingModule"]
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_7__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header h1 {\n  padding: 6px 23px 35px 23px;\n  color: var(--white);\n  margin: 0;\n  font-size: 1.6rem;\n}\n\n.form {\n  padding-top: 30px;\n}\n\n.form h2 {\n  margin: 0;\n  font-size: 1.42rem;\n  font-weight: 500;\n  line-height: 24px;\n  padding-bottom: 47px;\n}\n\n.form ion-item {\n  margin-bottom: 45px;\n}\n\nion-footer {\n  background: var(--white);\n}\n\nion-footer .button.btn {\n  --border-radius: 33px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxjb250YWN0LXVzXFxjb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURLQTtFQUNDLGlCQUFBO0FDRkQ7O0FESUM7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURLQztFQUNDLG1CQUFBO0FDSEY7O0FET0E7RUFDQyx3QkFBQTtBQ0pEOztBRE1DO0VBQ0MsMkJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHRoMSB7XHJcblx0XHRwYWRkaW5nOiA2cHggMjNweCAzNXB4IDIzcHg7XHJcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0fVxyXG5cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IDEuNDJyZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNDdweDtcclxuXHR9XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblx0fVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdC5idXR0b24uYnRuIHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHR9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBoMSB7XG4gIHBhZGRpbmc6IDZweCAyM3B4IDM1cHggMjNweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5mb3JtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDdweDtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es2015.js.map
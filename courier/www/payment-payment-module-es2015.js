(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'payment_modes' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'amount_to_pay' | translate}} $8.60</h2>\r\n\t\t<ion-radio-group>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'cash_on_pickup' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_while_pick_a_pickup' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"cop\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'cash_on_delivery' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_while_drop_a_delivery' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"cod\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'pay_pal' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_from_pay_pal_account' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"pay_pal\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\t<h3>{{'stripe' | translate}}</h3>\r\n\t\t\t\t\t<h4>{{'pay_from_stripe_account' | translate}}</h4>\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-radio slot=\"start\" value=\"stripe\"></ion-radio>\r\n\t\t\t</ion-item>\r\n\t\t</ion-radio-group>\r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\" (click)=\"pickup_assigned()\">{{'done' | translate}}</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");








let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_7__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--bg-color);\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding-top: 24px;\n}\n\nion-list h2 {\n  margin: 0;\n  font-weight: 700;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  padding: 0 33px 24px 33px;\n}\n\nion-list ion-item {\n  padding: 16px 18px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 5px;\n  background: var(--white);\n}\n\nion-list ion-item ion-radio {\n  --color: var(--text-light);\n  --color-checked: var(--primary);\n  margin: 0;\n  margin-right: 20px;\n}\n\nion-list ion-item ion-label {\n  margin: 0;\n}\n\nion-list ion-item ion-label h3 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\nion-list ion-item ion-label h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  font-weight: 400;\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .button.btn {\n  --border-radius: 0px 33px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUFBO0FDQ0Q7O0FERUE7RUFDQyx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUM7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFRTtFQUNDLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBSDs7QURHRTtFQUNDLFNBQUE7QUNESDs7QURHRztFQUNDLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElHO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRFNBO0VBQ0MsMkJBQUE7QUNORDs7QURPQztFQUNDLDZCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdHBhZGRpbmc6IDAgMzNweCAyNHB4IDMzcHg7XHJcblx0fVxyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nOjE2cHggIDE4cHg7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuXHRcdGlvbi1yYWRpbyB7XHJcblx0XHRcdC0tY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDQge1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblx0LmJ1dHRvbi5idG57XHJcblx0XHQtLWJvcmRlci1yYWRpdXM6IDBweCAzM3B4IDAgMDtcclxuXHR9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMCAzM3B4IDI0cHggMzNweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTZweCAxOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcmFkaW8ge1xuICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggMzNweCAwIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PaymentPage = class PaymentPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    pickup_assigned() {
        this.route.navigate(['./pickup-assigned']);
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map
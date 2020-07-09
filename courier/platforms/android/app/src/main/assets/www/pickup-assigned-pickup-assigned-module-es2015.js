(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickup-assigned-pickup-assigned-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>{{'pickup_assigned' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"container ion-text-center\">\r\n\t\t<div class=\"img_box\">\r\n\t\t\t<img src=\"assets/images/pickup_assigned_img.png\">\r\n\t\t</div>\r\n\t\t<h2>{{'your_pickup_has_ben_arranged' | translate}}</h2>\r\n\t\t<p>{{'thank_you_for_choosing_us_for' | translate}}<br>{{'delivery_you_valuable_stuffs' | translate}}</p>\r\n\t</div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-row>\r\n\t\t<ion-col size=\"6\">\r\n\t\t\t<ion-button size=\"large\"  class=\"btn back_to_home\" (click)=\"back_to_home()\">{{'back_to_home' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"6\">\r\n\t\t\t<ion-button size=\"large\"  class=\"btn track_my_courier\">{{'track_my_courier' | translate}}</ion-button>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pickup-assigned/pickup-assigned-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pickup-assigned/pickup-assigned-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PickupAssignedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupAssignedPageRoutingModule", function() { return PickupAssignedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pickup-assigned.page */ "./src/app/pickup-assigned/pickup-assigned.page.ts");




const routes = [
    {
        path: '',
        component: _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_3__["PickupAssignedPage"]
    }
];
let PickupAssignedPageRoutingModule = class PickupAssignedPageRoutingModule {
};
PickupAssignedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PickupAssignedPageRoutingModule);



/***/ }),

/***/ "./src/app/pickup-assigned/pickup-assigned.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pickup-assigned/pickup-assigned.module.ts ***!
  \***********************************************************/
/*! exports provided: PickupAssignedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupAssignedPageModule", function() { return PickupAssignedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pickup_assigned_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pickup-assigned-routing.module */ "./src/app/pickup-assigned/pickup-assigned-routing.module.ts");
/* harmony import */ var _pickup_assigned_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pickup-assigned.page */ "./src/app/pickup-assigned/pickup-assigned.page.ts");








let PickupAssignedPageModule = class PickupAssignedPageModule {
};
PickupAssignedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _pickup_assigned_routing_module__WEBPACK_IMPORTED_MODULE_6__["PickupAssignedPageRoutingModule"]
        ],
        declarations: [_pickup_assigned_page__WEBPACK_IMPORTED_MODULE_7__["PickupAssignedPage"]]
    })
], PickupAssignedPageModule);



/***/ }),

/***/ "./src/app/pickup-assigned/pickup-assigned.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pickup-assigned/pickup-assigned.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.container .img_box {\n  margin: auto;\n  width: 278px;\n  margin-bottom: 63px;\n}\n\n.container h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  padding-bottom: 23px;\n}\n\n.container p {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\nion-footer {\n  background: var(--white) !important;\n}\n\nion-footer ion-row {\n  margin: 0 -0.5px;\n}\n\nion-footer ion-row ion-col {\n  padding: 0 0.5px;\n}\n\nion-footer ion-row ion-col .button.btn {\n  font-size: 1.1rem !important;\n}\n\nion-footer ion-row ion-col .button.btn.back_to_home {\n  --border-radius: 33px 0 0 0;\n}\n\nion-footer ion-row ion-col .button.btn.track_my_courier {\n  --border-radius: 0px 0 33px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlja3VwLWFzc2lnbmVkL0Q6XFxNb2JpbGVGcmFtd29ya3NcXElvbmljXFxSZXNvdXJjZXNcXGlvbmljVGVtcGxhdGVcXGNvdXJpZXIvc3JjXFxhcHBcXHBpY2t1cC1hc3NpZ25lZFxccGlja3VwLWFzc2lnbmVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGlja3VwLWFzc2lnbmVkL3BpY2t1cC1hc3NpZ25lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNDRDs7QURDQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRE1BO0VBQ0MsbUNBQUE7QUNIRDs7QURLQztFQUNDLGdCQUFBO0FDSEY7O0FES0U7RUFDQyxnQkFBQTtBQ0hIOztBREtHO0VBQ0MsNEJBQUE7QUNISjs7QURLSTtFQUNDLDJCQUFBO0FDSEw7O0FETUk7RUFDQyw2QkFBQTtBQ0pMIiwiZmlsZSI6InNyYy9hcHAvcGlja3VwLWFzc2lnbmVkL3BpY2t1cC1hc3NpZ25lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuXHQuaW1nX2JveCB7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR3aWR0aDogMjc4cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA2M3B4O1xyXG5cdH1cclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDIzcHg7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG5cclxuXHRpb24tcm93IHtcclxuXHRcdG1hcmdpbjogMCAtLjVweDtcclxuXHJcblx0XHRpb24tY29sIHtcclxuXHRcdFx0cGFkZGluZzogMCAuNXB4O1xyXG5cclxuXHRcdFx0LmJ1dHRvbi5idG4ge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcblxyXG5cdFx0XHRcdCYuYmFja190b19ob21lIHtcclxuXHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCYudHJhY2tfbXlfY291cmllciB7XHJcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDBweCAwIDMzcHggMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmNvbnRhaW5lciAuaW1nX2JveCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDI3OHB4O1xuICBtYXJnaW4tYm90dG9tOiA2M3B4O1xufVxuLmNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgcGFkZGluZy1ib3R0b206IDIzcHg7XG59XG4uY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtMC41cHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMC41cHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5iYWNrX3RvX2hvbWUge1xuICAtLWJvcmRlci1yYWRpdXM6IDMzcHggMCAwIDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi50cmFja19teV9jb3VyaWVyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHggMCAzM3B4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pickup-assigned/pickup-assigned.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pickup-assigned/pickup-assigned.page.ts ***!
  \*********************************************************/
/*! exports provided: PickupAssignedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupAssignedPage", function() { return PickupAssignedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PickupAssignedPage = class PickupAssignedPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    back_to_home() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
};
PickupAssignedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PickupAssignedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pickup-assigned',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pickup-assigned.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup-assigned/pickup-assigned.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pickup-assigned.page.scss */ "./src/app/pickup-assigned/pickup-assigned.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PickupAssignedPage);



/***/ })

}]);
//# sourceMappingURL=pickup-assigned-pickup-assigned-module-es2015.js.map
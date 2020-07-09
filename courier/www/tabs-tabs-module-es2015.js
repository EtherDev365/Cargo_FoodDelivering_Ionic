(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\t<ion-tab-bar slot=\"bottom\">\r\n\t\t<ion-tab-button tab=\"my_deliveries\">\r\n\t\t\t<!--\r\n      <ion-icon name=\"triangle\"></ion-icon>\r\n      <ion-label>my deliveries</ion-label>\r\n-->\r\n\t\t\t<img src=\"assets/images/ic_feeds.png\" class=\"before\">\r\n\t\t\t<img src=\"assets/images/ic_feeds_active.png\" class=\"after\">\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"home\">\r\n\t\t\t<!--\r\n      <ion-icon name=\"ellipse\"></ion-icon>\r\n      <ion-label>home</ion-label>\r\n-->\r\n\t\t\t<img src=\"assets/images/ic_home.png\" class=\"before\">\r\n\t\t\t<img src=\"assets/images/ic_home_active.png\" class=\"after\">\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"more\">\r\n\t\t\t<!--\r\n      <ion-icon name=\"square\"></ion-icon>\r\n      <ion-label>more</ion-label>\r\n-->\r\n\t\t\t<img src=\"assets/images/ic_profile.png\" class=\"before\">\r\n\t\t\t<img src=\"assets/images/ic_profile_active.png\" class=\"after\">\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'my_deliveries',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | my-deliveries-my-deliveries-module */ "my-deliveries-my-deliveries-module").then(__webpack_require__.bind(null, /*! ../my-deliveries/my-deliveries.module */ "./src/app/my-deliveries/my-deliveries.module.ts")).then(m => m.MyDeliveriesPageModule)
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'more',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | more-more-module */ "more-more-module").then(__webpack_require__.bind(null, /*! ../more/more.module */ "./src/app/more/more.module.ts")).then(m => m.MorePageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs ion-tab-bar {\n  --background: var(--white) !important;\n  box-shadow: 0 4px 41px 10px rgba(0, 0, 0, 0.1);\n}\nion-tabs ion-tab-bar ion-tab-button img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  transition: all 0.5s;\n}\nion-tabs ion-tab-bar ion-tab-button img.before {\n  width: 27px;\n  height: 27px;\n  transition: all 0.5s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img {\n  transition: all 0.5s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.before {\n  width: 0;\n  height: 0;\n  transition: all 0.5s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.after {\n  width: 27px;\n  height: 27px;\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHFDQUFBO0VBQ0EsOENBQUE7QUNBRjtBRElHO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNGSjtBRElJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0ZMO0FEUUk7RUFDQyxvQkFBQTtBQ05MO0FEUUs7RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDTk47QURTSztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFicyB7XHJcblx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuXHRcdGJveC1zaGFkb3c6IDAgNHB4IDQxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG5cdFx0aW9uLXRhYi1idXR0b24ge1xyXG5cdFx0XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG5cdFx0XHRcdCYuYmVmb3JlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyN3B4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyN3B4O1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC41cztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLnRhYi1zZWxlY3RlZCB7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG5cdFx0XHRcdFx0Ji5iZWZvcmUge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCYuYWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMjdweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyN3B4O1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW9uLXRhYnMgaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDRweCA0MXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiBpbWcuYmVmb3JlIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW1nIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW1nLmJlZm9yZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGltZy5hZnRlciB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
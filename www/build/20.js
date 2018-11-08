webpackJsonp([20],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesoPageModule", function() { return ProcesoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proceso__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProcesoPageModule = /** @class */ (function () {
    function ProcesoPageModule() {
    }
    ProcesoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proceso__["a" /* ProcesoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proceso__["a" /* ProcesoPage */]),
            ],
        })
    ], ProcesoPageModule);
    return ProcesoPageModule;
}());

//# sourceMappingURL=proceso.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcesoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProcesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcesoPage = /** @class */ (function () {
    function ProcesoPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    ProcesoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcesoPage');
    };
    ProcesoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    ProcesoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proceso',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\proceso\proceso.html"*/'<!--\n\n  Generated template for the ProcesoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Victimas de Violencia Sexual</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding style="background-color: #23B4B7">\n\n\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n\n        \n\n        <ion-slide style="background-color: white; color:  #23B4B7">\n\n            <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Qué debes hacer en caso de ser víctima de una violación sexual?</strong> </h2>  \n\n<h4><strong>¡No hay que sentirse culpable o avergonzada, no te quedes callada, busca ayuda!</strong></h4>\n\n            <div>&nbsp;</div>\n\n            <p style="text-align: center; color:#FF6663;"><strong>Sigue estos pasos deslizando la imagen para la derecha \n\n            </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n\n          \n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n          \n\n              <img src="assets/imgs/3Violaciones/2ProcesoViolacion/2Paso1.jpeg" style="width : 100% ; height : 100%">\n\n             \n\n            </ion-slide>\n\n          <ion-slide>\n\n           \n\n               <img src="assets/imgs/3Violaciones/2ProcesoViolacion/3Paso2.jpeg" style="width : 100% ; height : 100%">\n\n               \n\n          </ion-slide>\n\n          <ion-slide>\n\n             \n\n               <img src="assets/imgs/3Violaciones/2ProcesoViolacion/4Paso3.jpeg" style="width : 100% ; height : 100%">\n\n              \n\n          </ion-slide>\n\n\n\n         \n\n        </ion-slides>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\proceso\proceso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ProcesoPage);
    return ProcesoPage;
}());

//# sourceMappingURL=proceso.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
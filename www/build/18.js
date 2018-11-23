webpackJsonp([18],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranciscoMPageModule", function() { return FranciscoMPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__francisco_m__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FranciscoMPageModule = /** @class */ (function () {
    function FranciscoMPageModule() {
    }
    FranciscoMPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__francisco_m__["a" /* FranciscoMPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__francisco_m__["a" /* FranciscoMPage */]),
            ],
        })
    ], FranciscoMPageModule);
    return FranciscoMPageModule;
}());

//# sourceMappingURL=francisco-m.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranciscoMPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the FranciscoMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FranciscoMPage = /** @class */ (function () {
    function FranciscoMPage(navParams, view, navCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
    }
    FranciscoMPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FranciscoMPage');
    };
    FranciscoMPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    FranciscoMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-francisco-m',template:/*ion-inline-start:"/Users/cloudcen/Documents/GitHub/segurasappio/src/pages/francisco-m/francisco-m.html"*/'<!--\n  Generated template for the FranciscoMPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Francisco Morazán</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-card>\n    <ion-card-header style="color: #0B3954">\n          <strong>Fiscalía de Protección de la Mujer</strong></ion-card-header>\n          <ion-card-content>\n            Edificio Ministerio Público<br>\n            Lomas del Guijarro, Tegucigalpa <br>\n           <strong> Teléfono:</strong> 2221-3534\n          </ion-card-content>\n        </ion-card>\n       \n\n        <ion-card>\n          <ion-card-header style="color: #0B3954">\n        <strong>Instituto Nacional de la Mujer INAM\n          </strong></ion-card-header>\n          <ion-card-content>\n             Barrio Concepción, 13 y 14 calle, entres 4 y 5 AV, Comayaguela \n           edificio principal de Banadesa, 7 piso,\n          Lomas del Guijarro, Tegucigalpa \n          <strong> Teléfonos:</strong> 2220-0906, 2220-0852, 2220-0902<br>\n          <strong>Correo Electrónico:</strong> webmaster@inam.gob.hn <br>\n          <strong>Correo Electrónico:</strong> secretariainam@cybertelh.hn <br>\n          <strong>Página Web:</strong> www.inam.gob.hn <br>\n          \n</ion-card-content>\n</ion-card>\n\n<ion-card>\n    <ion-card-header style="color: #0B3954">\n          <strong>Dirección de Niñez <br> Adolescencia y Familia DINAF</strong></ion-card-header>\n          <ion-card-content>\n              Colonia Humuya, Tegucigalpa <br>\n           <strong> Teléfono:</strong> 2239-9605\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="color: #0B3954">\n                  <strong>Hospital San Felipe</strong></ion-card-header>\n                  <ion-card-content>\n                      Boulevar Los Próceres, Tegucigalpa <br>\n                   <strong> Teléfonos:</strong> 2236-5786 y  2236-7917\n                  </ion-card-content>\n                </ion-card>\n\n                <ion-card>\n                    <ion-card-header style="color: #0B3954">\n                          <strong> Programa Presidencial <br>Ciudad Mujer</strong></ion-card-header>\n                          <ion-card-content>\n                              Colonia Kennedy, Tegucigalpa <br>\n                           <strong> Teléfonos:</strong>2239-8957 y 2239-8911\n                          </ion-card-content>\n                        </ion-card>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/cloudcen/Documents/GitHub/segurasappio/src/pages/francisco-m/francisco-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FranciscoMPage);
    return FranciscoMPage;
}());

//# sourceMappingURL=francisco-m.js.map

/***/ })

});
//# sourceMappingURL=18.js.map
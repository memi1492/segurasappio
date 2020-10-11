webpackJsonp([10],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasPageModule", function() { return MedidasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medidas__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedidasPageModule = /** @class */ (function () {
    function MedidasPageModule() {
    }
    MedidasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medidas__["a" /* MedidasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medidas__["a" /* MedidasPage */]),
            ],
        })
    ], MedidasPageModule);
    return MedidasPageModule;
}());

//# sourceMappingURL=medidas.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the MedidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedidasPage = /** @class */ (function () {
    function MedidasPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    MedidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedidasPage');
    };
    MedidasPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    MedidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medidas',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\medidas\medidas.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Medidas de Seguridad</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n \n  \n  <ion-content padding>\n      <h2 text-center style="padding-top: 10px; color:#0B3954 "><strong>¿Qué medidas debes tomar para evitar ser victima de violación?</strong> </h2>\n      <p text-center style="padding-top: 10px;  color:#FF6663"> <strong>Es difícil evitar ser víctima de una violación, recuerda que en la mayoría de los casos los agresores son personas conocidas.</strong></p>  \n\n     \n      <ion-grid>\n          <ion-row justify-content-center style="color: #0B3954; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;">\n              \n           <ion-col><br><p style="padding:10px; text-align: center">Trata de caminar por lugares iluminados cuando sea de noche.</p></ion-col> \n              <ion-col>  <img   src="assets/imgs/3Violaciones/1MedidasSeguridad/street-light.gif" style="padding-top: 10px; padding-bottom: 5px; width: 90%; height: 90%" ></ion-col> \n         \n          </ion-row>\n\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n      \n        <ion-row justify-content-center style="color: #0B3954; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;">\n          \n              <ion-col>  <img   src="assets/imgs/3Violaciones/1MedidasSeguridad/smartphone.gif" style="padding-bottom: 5px; width: 90%; height: 90%" ></ion-col>\n          <ion-col>      <br>    <p style="padding:5px;">Ten siempre el celular cargado y a mano.</p>          </ion-col>\n            </ion-row>\n\n            <div>&nbsp;</div>\n            <div>&nbsp;</div>\n\n          <ion-row justify-content-center style="color: #0B3954; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;">\n              <ion-col><p style="padding:5px;">Decide bien en quien confiar, antes de aceptar que te lleven en un carro o aceptar la compañia de cualquier persona.</p></ion-col>\n              <ion-col> <img   src="assets/imgs/3Violaciones/1MedidasSeguridad/search-4.gif" style="padding-bottom: 5px; width: 90%; height: 90%" ></ion-col>\n          \n              </ion-row>\n\n              <div>&nbsp;</div>\n<div>&nbsp;</div>\n\n            <ion-row justify-content-center style="color: #0B3954; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;">\n              <ion-col>  <img   src="assets/imgs/3Violaciones/1MedidasSeguridad/rich-people.gif" style="padding-bottom: 5px; width: 90%; height: 90%" >   </ion-col>\n              <ion-col><p style="padding:5px;">Si te sientes en peligro o amenazada, trata de dirigirte a un lugar que no sea solitario.</p></ion-col>\n                </ion-row>\n                </ion-grid>\n\n\n               \n\n      </ion-content>\n  '/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\medidas\medidas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], MedidasPage);
    return MedidasPage;
}());

//# sourceMappingURL=medidas.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
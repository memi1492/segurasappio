webpackJsonp([19],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElParaisoPageModule", function() { return ElParaisoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__el_paraiso__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElParaisoPageModule = /** @class */ (function () {
    function ElParaisoPageModule() {
    }
    ElParaisoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__el_paraiso__["a" /* ElParaisoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__el_paraiso__["a" /* ElParaisoPage */]),
            ],
        })
    ], ElParaisoPageModule);
    return ElParaisoPageModule;
}());

//# sourceMappingURL=el-paraiso.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElParaisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ElParaisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElParaisoPage = /** @class */ (function () {
    function ElParaisoPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    ElParaisoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElParaisoPage');
    };
    ElParaisoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    ElParaisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-el-paraiso',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\el-paraiso\el-paraiso.html"*/'<!--\n  Generated template for the ElParaisoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>El Paraíso</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Fiscalía de la Mujer</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio el Centro, a una cuadra del Parque Central , Danlí.<br>\n       <strong> Teléfono:</strong> 2763-2963\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Fiscalía de la Niñez</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio el Centro, a una cuadra del Parque Central, Danlí.<br>\n       <strong> Teléfono:</strong> 2763-2963\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Juzgado II de Letras</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio El Zarzal, Carretera Panamericana hacia Tegucigalpa, Danlí.<br>\n       <strong> Teléfono:</strong> 2763-2063 \n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Juzgado de Paz Criminal</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio El Zarzal, Carretera Panamericana hacia Tegucigalpa, Danlí.<br>\n       <strong> Teléfono:</strong> 2763-2063 \n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Alcaldía Municipal</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio El Centro, frente al Parque Ramón Rosa, Danlí.<br>\n       <strong> Teléfono:</strong> 2793-4179\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Policia Nacional Preventiva</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Barrio Buenos Aires Arriba, frente a Pulpería La Estrella, Danlí.<br>\n       <strong> Teléfono:</strong> 2763-2739\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n        <strong>Hospital Gabriela Alvarado</strong>\n      </ion-card-header>\n      <ion-card-content>\n        San Marcos Abajo, frente a la UNATEC regional UNAH<br>\n       <strong> Teléfono del Director del Hospital:</strong> 9701-9414 <br>\n       <strong>  correo electrónico:</strong>  hga@yahoo.com\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\el-paraiso\el-paraiso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ElParaisoPage);
    return ElParaisoPage;
}());

//# sourceMappingURL=el-paraiso.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
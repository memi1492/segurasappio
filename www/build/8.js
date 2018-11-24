webpackJsonp([8],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcotepequePageModule", function() { return OcotepequePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ocotepeque__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OcotepequePageModule = /** @class */ (function () {
    function OcotepequePageModule() {
    }
    OcotepequePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ocotepeque__["a" /* OcotepequePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ocotepeque__["a" /* OcotepequePage */]),
            ],
        })
    ], OcotepequePageModule);
    return OcotepequePageModule;
}());

//# sourceMappingURL=ocotepeque.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcotepequePage; });
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
 * Generated class for the OcotepequePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OcotepequePage = /** @class */ (function () {
    function OcotepequePage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    OcotepequePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OcotepequePage');
    };
    OcotepequePage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    OcotepequePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ocotepeque',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\ocotepeque\ocotepeque.html"*/'<!--\n  Generated template for the OcotepequePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Ocotepeque</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público</strong></ion-card-header>\n            <ion-card-content>\n                Esquina opuesta a Ferretería Vásquez, Barrio La Concepción, Ocotepeque<br>\n             <strong> Teléfono:</strong> 2653-3963\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Modelo de Atención Integral <br> Especializado MAIE</strong></ion-card-header>\n                    <ion-card-content>\n                        Esquina opuesta a Ferretería Vásquez, Barrio La Concepción, Ocotepeque<br>\n                     <strong> Teléfono:</strong> 2653-3963\n                    </ion-card-content>\n                  </ion-card>\n\n                  \n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Juzgado de Paz</strong></ion-card-header>\n                    <ion-card-content>\n                        Frente a Supermercado El Sol, en el Parque Viejo, Ocotepeque<br>\n                     <strong> Teléfono:</strong> 2653-3963 \n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Clínica Periférica <br> de Emergencia</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio Sinuapa, Ocotepeque<br>\n                             <strong> Teléfono:</strong> 2653-1298  \n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong>Policia Nacional Preventiva </strong></ion-card-header>\n                                    <ion-card-content>\n                                        Barrio las Flores, cinco cuadras debajo de la calle internacional, Ocotepeque<br>\n                                     <strong> Teléfono:</strong> 2653-3199 \n                                    </ion-card-content>\n                                  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\ocotepeque\ocotepeque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], OcotepequePage);
    return OcotepequePage;
}());

//# sourceMappingURL=ocotepeque.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
webpackJsonp([12],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaPazPageModule", function() { return LaPazPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__la_paz__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LaPazPageModule = /** @class */ (function () {
    function LaPazPageModule() {
    }
    LaPazPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__la_paz__["a" /* LaPazPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__la_paz__["a" /* LaPazPage */]),
            ],
        })
    ], LaPazPageModule);
    return LaPazPageModule;
}());

//# sourceMappingURL=la-paz.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaPazPage; });
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
 * Generated class for the LaPazPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaPazPage = /** @class */ (function () {
    function LaPazPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    LaPazPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaPazPage');
    };
    LaPazPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    LaPazPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-la-paz',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\la-paz\la-paz.html"*/'<!--\n  Generated template for the LaPazPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>La Paz</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <ion-card>\n          <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público\n              </strong>\n          </ion-card-header>\n          <ion-card-content>\n              Barrio La Merced, carretera hacia Marcala, esquina opuesta a COINCA, La Paz.<br>\n           <strong> Teléfonos:</strong> 2774-1433 y 2774-1009\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="color: #0B3954">\n              <strong>Fiscalía de la Mujer\n                </strong>\n            </ion-card-header>\n            <ion-card-content>\n                Barrio La Merced, carretera hacia Marcala, esquina opuesta a COINCA, La Paz.<br>\n             <strong> Teléfonos:</strong> 2774-1433 y 2774-1009\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                <strong>Fiscalía de la Niñez\n                  </strong>\n              </ion-card-header>\n              <ion-card-content>\n                  Barrio La Merced, carretera hacia Marcala, esquina opuesta a COINCA, La Paz.<br>\n               <strong> Teléfonos:</strong> 2774-1433 y 2774-1009\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <ion-card-header style="color: #0B3954">\n                  <strong>Juzgados de Letras <br> Seccionados(Letras, Penal, Civil, <br>Niñez y Adolescencia, Familia)\n                    </strong>\n                </ion-card-header>\n                <ion-card-content>\n                    Barrio La Granja, frente al estadio Roberto Suazo Córdova, La Paz.<br>\n                 <strong> Teléfono:</strong> 2774-1122\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card>\n                  <ion-card-header style="color: #0B3954">\n                    <strong>Policia Nacional Preventiva   \n                      </strong>\n                  </ion-card-header>\n                  <ion-card-content>\n                      Barrio San Antonio, dos cuadras al norte de la Dirección Departamental de Educación, La Paz.<br>\n                   <strong> Teléfono:</strong> 2774-2199\n                  </ion-card-content>\n                </ion-card>\n\n                <ion-card>\n                    <ion-card-header style="color: #0B3954">\n                      <strong>Hospital Roberto Suazo Córdova  \n                        </strong>\n                    </ion-card-header>\n                    <ion-card-content>\n                        Barrio La Trinidad, La Paz.<br>\n                     <strong> Teléfonos:</strong> 2774-1453 y 2774-1454\n                    </ion-card-content>\n                  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\la-paz\la-paz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LaPazPage);
    return LaPazPage;
}());

//# sourceMappingURL=la-paz.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
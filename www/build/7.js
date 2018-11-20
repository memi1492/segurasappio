webpackJsonp([7],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlanchoPageModule", function() { return OlanchoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__olancho__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OlanchoPageModule = /** @class */ (function () {
    function OlanchoPageModule() {
    }
    OlanchoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__olancho__["a" /* OlanchoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__olancho__["a" /* OlanchoPage */]),
            ],
        })
    ], OlanchoPageModule);
    return OlanchoPageModule;
}());

//# sourceMappingURL=olancho.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlanchoPage; });
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
 * Generated class for the OlanchoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OlanchoPage = /** @class */ (function () {
    function OlanchoPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    OlanchoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OlanchoPage');
    };
    OlanchoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    OlanchoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-olancho',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\olancho\olancho.html"*/'<!--\n  Generated template for the OlanchoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Olancho</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong> Fiscalía de la Mujer</strong></ion-card-header>\n            <ion-card-content>\n                Barrio La Hoya, antiguo local del Hotel Colonial, Juticalpa<br>\n             <strong> Teléfono:</strong> 2785-2143 (Secretaría)\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>  Ministerio Publico</strong></ion-card-header>\n                    <ion-card-content>\n                        Barrio La Hoya, antiguo local del Hotel Colonial, Juticalpa<br>\n                     <strong> Teléfono:</strong> 2785-2143 (Secretaría)\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>  Juzgados</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio El Centro, una cuadra antes de llegar al Parque Central, Juticalpa<br>\n                             <strong> Teléfono Juzgado de Paz:</strong>  2785-1176 <br>\n                             <strong> Teléfono Juzgado de lo Civil:</strong>  2785-1377 <br>\n                             <strong> Teléfono Juzgado de lo Penal: </strong>  2785-2319\n                            </ion-card-content>\n                          </ion-card>\n\n                          \n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong> Policia Nacional Preventiva</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio Belén, Juticalpa<br>\n                             <strong> Teléfonos:</strong>  2785-2647 y 2785-2655 \n                         \n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong> Hospital San Francisco</strong></ion-card-header>\n                                    <ion-card-content>\n                                        Barrio El Campo, Juticalpa<br>\n                                     <strong> Teléfonos:</strong>  2785-2647 y 2785-2655\n                                 \n                                    </ion-card-content>\n                                  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\olancho\olancho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], OlanchoPage);
    return OlanchoPage;
}());

//# sourceMappingURL=olancho.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
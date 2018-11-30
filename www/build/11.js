webpackJsonp([11],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LempiraPageModule", function() { return LempiraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lempira__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LempiraPageModule = /** @class */ (function () {
    function LempiraPageModule() {
    }
    LempiraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lempira__["a" /* LempiraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lempira__["a" /* LempiraPage */]),
            ],
        })
    ], LempiraPageModule);
    return LempiraPageModule;
}());

//# sourceMappingURL=lempira.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LempiraPage; });
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
 * Generated class for the LempiraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LempiraPage = /** @class */ (function () {
    function LempiraPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    LempiraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LempiraPage');
    };
    LempiraPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    LempiraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lempira',template:/*ion-inline-start:"/Users/mariajcoello/Documents/GitHub/Seguras/src/pages/lempira/lempira.html"*/'<!--\n  Generated template for the LempiraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Lempira</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público</strong></ion-card-header>\n            <ion-card-content>\n                Barrio El Rosario, frente a la iglesia Amigos y Plan Internacional Honduras, Gracias <br>\n             <strong> Teléfono:</strong> 2656-1253\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Fiscalía de la Mujer</strong></ion-card-header>\n                    <ion-card-content>\n                        Barrio El Rosario, frente a la iglesia Amigos y Plan Internacional Honduras, Gracias <br>\n                     <strong> Teléfono:</strong> 2656-1253\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Fiscalía de la Niñez</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio El Rosario, frente a la iglesia Amigos y Plan Internacional Honduras, Gracias <br>\n                             <strong> Teléfono:</strong> 2656-1253\n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong>Policia Nacional Preventiva</strong></ion-card-header>\n                                    <ion-card-content>\n                                        Barrio El Rosario, frente al Parque Central, Gracias <br>\n                                     <strong> Teléfono:</strong> 2656-1397\n                                    </ion-card-content>\n                                  </ion-card>\n\n                                  <ion-card>\n                                      <ion-card-header style="color: #0B3954">\n                                            <strong>Juzgados</strong></ion-card-header>\n                                            <ion-card-content>\n                                                Barrio El Rosario, frente al Parque Central, Gracias <br>\n                                             <strong> Teléfono:</strong> 2656-1615\n                                            </ion-card-content>\n                                          </ion-card>\n\n                                          <ion-card>\n                                              <ion-card-header style="color: #0B3954">\n                                                    <strong>Hospital Juan Manuel Gálvez</strong></ion-card-header>\n                                                    <ion-card-content>\n                                                        Barrio Mercedes,Gracias <br>\n                                                     <strong> Teléfono:</strong> 2656-1615\n                                                    </ion-card-content>\n                                                  </ion-card>\n         \n\n</ion-content>\n'/*ion-inline-end:"/Users/mariajcoello/Documents/GitHub/Seguras/src/pages/lempira/lempira.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LempiraPage);
    return LempiraPage;
}());

//# sourceMappingURL=lempira.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
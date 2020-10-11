webpackJsonp([3],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SantaBarbaraPageModule", function() { return SantaBarbaraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__santa_barbara__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SantaBarbaraPageModule = /** @class */ (function () {
    function SantaBarbaraPageModule() {
    }
    SantaBarbaraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__santa_barbara__["a" /* SantaBarbaraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__santa_barbara__["a" /* SantaBarbaraPage */]),
            ],
        })
    ], SantaBarbaraPageModule);
    return SantaBarbaraPageModule;
}());

//# sourceMappingURL=santa-barbara.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantaBarbaraPage; });
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
 * Generated class for the SantaBarbaraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SantaBarbaraPage = /** @class */ (function () {
    function SantaBarbaraPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    SantaBarbaraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SantaBarbaraPage');
    };
    SantaBarbaraPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    SantaBarbaraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-santa-barbara',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\santa-barbara\santa-barbara.html"*/'<!--\n  Generated template for the SantaBarbaraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Santa Bárbara</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público</strong></ion-card-header>\n            <ion-card-content>\n                Calle La Justicia, frente al Jardín de Niños Gabriela Mistral,  Santa Bárbara<br>\n             <strong> Teléfono:</strong>2643-2350\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Fiscalía de la Mujer</strong></ion-card-header>\n                    <ion-card-content>\n                        Calle La Justicia, frente al Jardín de Niños Gabriela Mistral,  Santa Bárbara<br>\n                     <strong> Teléfono:</strong>2643-2350\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Fiscalía de la Niñez</strong></ion-card-header>\n                            <ion-card-content>\n                                Calle La Justicia, frente al Jardín de Niños Gabriela Mistral,  Santa Bárbara<br>\n                             <strong> Teléfono:</strong>2643-2350\n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong>Juzgados de Paz y <br> de lo Criminal</strong></ion-card-header>\n                                    <ion-card-content>\n                                        Barrio Galeras,  Santa Bárbara<br>\n                                     <strong> Teléfonos:</strong>2643-3709 y 2643-2031\n                                    </ion-card-content>\n                                  </ion-card>\n\n                                  \n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong>Alcaldía Municipal</strong></ion-card-header>\n                                    <ion-card-content>\n                                        Barrio El Centro,  Santa Bárbara<br>\n                                     <strong> Teléfono:</strong> 2643-2910 \n                                    </ion-card-content>\n                                  </ion-card>\n\n                                  <ion-card>\n                                      <ion-card-header style="color: #0B3954">\n                                            <strong>Hospital Santa Bárbara <br>Integrado</strong></ion-card-header>\n                                            <ion-card-content>\n                                                Calle principal, entrada a la Ciudad,  Santa Bárbara<br>\n                                             <strong> Teléfonos:</strong> 2643-2910 y 2643-2721\n                                            </ion-card-content>\n                                          </ion-card>\n        \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\santa-barbara\santa-barbara.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SantaBarbaraPage);
    return SantaBarbaraPage;
}());

//# sourceMappingURL=santa-barbara.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
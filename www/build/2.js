webpackJsonp([2],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VallePageModule", function() { return VallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valle__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VallePageModule = /** @class */ (function () {
    function VallePageModule() {
    }
    VallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__valle__["a" /* VallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__valle__["a" /* VallePage */]),
            ],
        })
    ], VallePageModule);
    return VallePageModule;
}());

//# sourceMappingURL=valle.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VallePage; });
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
 * Generated class for the VallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VallePage = /** @class */ (function () {
    function VallePage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    VallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VallePage');
    };
    VallePage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    VallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-valle',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\valle\valle.html"*/'<!--\n  Generated template for the VallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Valle</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público</strong></ion-card-header>\n            <ion-card-content>\n                Barrio abajo, antiguas oficinas ADED Valle, Nacaaome<br>\n             <strong> Teléfono:</strong> 2653-3963\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Policia Nacional <br> Preventiva</strong></ion-card-header>\n                    <ion-card-content>\n                        Barrio María Auxiliadora, tres cuadras del estadio hacia el centro, Nacaaome<br>\n                     <strong> Teléfonos:</strong> 2795-4135 y 2795-4637\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Juzgados de Paz,  <br> Civil, Letras</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio abajo, esquina opuesta a Hondutel, Nacaaome<br>\n                             <strong> Teléfonos:</strong> 2795-4138\n                            </ion-card-content>\n                          </ion-card>\n\n                          \n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Hospital Policlinio</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio el Corcovado por la Dirección Departamental de Educación, Nacaaome<br>\n                             <strong> Teléfonos:</strong> No tienen teléfono\n                            </ion-card-content>\n                          </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\valle\valle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], VallePage);
    return VallePage;
}());

//# sourceMappingURL=valle.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
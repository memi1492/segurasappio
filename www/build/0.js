webpackJsonp([0],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoroPageModule", function() { return YoroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yoro__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YoroPageModule = /** @class */ (function () {
    function YoroPageModule() {
    }
    YoroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__yoro__["a" /* YoroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__yoro__["a" /* YoroPage */]),
            ],
        })
    ], YoroPageModule);
    return YoroPageModule;
}());

//# sourceMappingURL=yoro.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoroPage; });
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
 * Generated class for the YoroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YoroPage = /** @class */ (function () {
    function YoroPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    YoroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YoroPage');
    };
    YoroPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    YoroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yoro',template:/*ion-inline-start:"/Users/mariajcoello/Documents/GitHub/Seguras/src/pages/yoro/yoro.html"*/'<!--\n  Generated template for the YoroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Yoro</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>\n      <ion-card-header style="color: #0B3954">\n            <strong>Ministerio Público</strong></ion-card-header>\n            <ion-card-content>\n                Barrio Santiago, dos cuadras al sur de Banadesa, Yoro<br>\n             <strong> Teléfono:</strong>2671-2668\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                    <strong>Fiscalía de la Mujer</strong></ion-card-header>\n                    <ion-card-content>\n                        Barrio Santiago, dos cuadras al sur de Banadesa, Yoro<br>\n                     <strong> Teléfono:</strong>2671-2668\n                    </ion-card-content>\n                  </ion-card>\n\n                  <ion-card>\n                      <ion-card-header style="color: #0B3954">\n                            <strong>Fiscalía de la Niñez</strong></ion-card-header>\n                            <ion-card-content>\n                                Barrio Santiago, dos cuadras al sur de Banadesa, Yoro<br>\n                             <strong> Teléfono:</strong>2671-2668\n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header style="color: #0B3954">\n                                    <strong>Juzgado de Paz</strong></ion-card-header>\n                                    <ion-card-content>\n                                        Carretera salida al Progreso, Yoro<br>\n                                     <strong> Teléfono:</strong>2671-2537\n                                    </ion-card-content>\n                                  </ion-card>\n\n                                  <ion-card>\n                                      <ion-card-header style="color: #0B3954">\n                                            <strong>Hospital Manuel <br> de Jesús Subirana</strong></ion-card-header>\n                                            <ion-card-content>\n                                                Barrio Subirana, contiguo al Instituto de Conservación Forestal ICH, Yoro<br>\n                                             <strong> Teléfonos:</strong> 2671-2255 y 2671-2254 \n                                            </ion-card-content>\n                                          </ion-card>\n\n                                          <ion-card>\n                                              <ion-card-header style="color: #0B3954">\n                                                    <strong>Policia Nacional Preventiva</strong></ion-card-header>\n                                                    <ion-card-content>\n                                                        Barrio Santiago, media cuadra al sur del Banco Banadesa, Yoro<br>\n                                                     <strong> Teléfono:</strong> 2671-2540 \n                                                    </ion-card-content>\n                                                  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mariajcoello/Documents/GitHub/Seguras/src/pages/yoro/yoro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], YoroPage);
    return YoroPage;
}());

//# sourceMappingURL=yoro.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
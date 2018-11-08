webpackJsonp([28],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectorioPageModule", function() { return DirectorioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directorio__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectorioPageModule = /** @class */ (function () {
    function DirectorioPageModule() {
    }
    DirectorioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__directorio__["a" /* DirectorioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__directorio__["a" /* DirectorioPage */]),
            ],
        })
    ], DirectorioPageModule);
    return DirectorioPageModule;
}());

//# sourceMappingURL=directorio.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirectorioPage = /** @class */ (function () {
    function DirectorioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DirectorioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DirectorioPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* List */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* List */])
    ], DirectorioPage.prototype, "list", void 0);
    DirectorioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-directorio',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\directorio\directorio.html"*/'<!--\n\n  Generated template for the DirectorioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Directorio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n\n\n  \n\n        <ion-item-group >\n\n          <ion-item > <div class="fondo">\n\n            <button ion-item (click)="FM()">\n\n                FRANCISCO MORAZÁN \n\n              </button></div>\n\n            </ion-item>\n\n\n\n            <ion-item > <div style="background-color: #BFD7EA; color: white;">\n\n                <button ion-item (click)="LaCeiba()">\n\n                LA CEIBA \n\n              </button></div>\n\n            </ion-item>\n\n\n\n              <ion-item > \n\n                  <button ion-item (click)="islas()">\n\n                   ISLAS DE LA BAHÍA\n\n                    </button>\n\n                  </ion-item>\n\n\n\n                    <ion-item > \n\n                        <button ion-item (click)="comayagua()">\n\n                          COMAYAGUA\n\n                         </button>\n\n                        </ion-item>\n\n\n\n                        <!--aqui me quede generando paginas-->\n\n                          <ion-item > \n\n                              <button ion-item (click)="copan()">\n\n                                  COPÁN\n\n                                </button>\n\n                              </ion-item>\n\n                            \n\n\n\n                                <ion-item > \n\n                                    <button ion-item (click)="openPage(homePage)">\n\n                                        CORTES\n\n                                      </button>\n\n                                    </ion-item>\n\n                          \n\n\n\n                                      <ion-item > \n\n                                          <button ion-item (click)="openPage(homePage)">\n\n                                              EL PARAÍSO\n\n                                            </button>\n\n                                          </ion-item>\n\n\n\n                                            <ion-item > \n\n                                                <button ion-item (click)="openPage(homePage)">\n\n                                                    GRACIAS A DIOS \n\n                                                  </button>\n\n                                                </ion-item>\n\n\n\n                                                  <ion-item > \n\n                                                      <button ion-item (click)="openPage(homePage)">\n\n                                                          INTIBUCA \n\n                                                        </button>\n\n                                                      </ion-item>\n\n\n\n                                                        <ion-item > \n\n                                                            <button ion-item (click)="openPage(homePage)">\n\n                                                                FRANCISCO MORAZÁN \n\n                                                              </button>\n\n                                                            </ion-item>\n\n\n\n                                                              <ion-item > \n\n                                                                  <button ion-item (click)="openPage(homePage)">\n\n                                                                      FRANCISCO MORAZÁN \n\n                                                                    </button>\n\n                                                                  </ion-item>\n\n\n\n                                                                    <ion-item > \n\n                                                                        <button ion-item (click)="openPage(homePage)">\n\n                                                                            FRANCISCO MORAZÁN \n\n                                                                          </button>\n\n                                                                        </ion-item>\n\n\n\n                                                                          <ion-item > \n\n                                                                              <button ion-item (click)="openPage(homePage)">\n\n                                                                                  FRANCISCO MORAZÁN \n\n                                                                                </button>\n\n                                                                              </ion-item>\n\n\n\n                                                                                <ion-item > \n\n                                                                                    <button ion-item (click)="openPage(homePage)">\n\n                                                                                        FRANCISCO MORAZÁN \n\n                                                                                      </button>\n\n                                                                                    </ion-item>\n\n\n\n                                                                                      <ion-item > \n\n                                                                                          <button ion-item (click)="openPage(homePage)">\n\n                                                                                              FRANCISCO MORAZÁN \n\n                                                                                            </button>\n\n                                                                                          </ion-item>\n\n\n\n                                                                                            <ion-item > \n\n                                                                                                <button ion-item (click)="openPage(homePage)">\n\n                                                                                                    FRANCISCO MORAZÁN \n\n                                                                                                  </button>\n\n                                                                                                </ion-item>\n\n\n\n                                                                                                  <ion-item > \n\n                                                                                                      <button ion-item (click)="openPage(homePage)">\n\n                                                                                                          FRANCISCO MORAZÁN \n\n                                                                                                        </button>\n\n                                                                                                      </ion-item>\n\n\n\n</ion-item-group>\n\n           \n\n      <!--      </ion-item>\n\n              <ion-item>\n\n              <strong>Fiscalía de Protección de la Mujer</strong><br>\n\n            Edificio Ministerio Público<br>\n\n            Lomas del Guijarro, Tegucigalpa <br>\n\n            Teléfono: 2221-3534\n\n\n\n            </ion-item>\n\n            <ion-item><strong>Instituto Nacional de la Mujer INAM\n\n              </strong><br>\n\n              Comayaguela, Barrio Concepción, 13 y 14 calle, entres 4 y 5 AV <br> \n\n               edificio principal de Banadesa, 7 piso.<br>\n\n              Lomas del Guijarro, Tegucigalpa <br>\n\n              Teléfono: 2221-3534\n\n  \n\n              </ion-item>\n\n\n\n              <ion-item><strong>Fiscalía de Protección de la Mujer</strong><br>\n\n                Edificio Ministerio Público<br>\n\n                Lomas del Guijarro, Tegucigalpa <br>\n\n                Teléfono: 2221-3534\n\n    \n\n                </ion-item>\n\n\n\n                <ion-item><strong>Fiscalía de Protección de la Mujer</strong><br>\n\n                  Edificio Ministerio Público<br>\n\n                  Lomas del Guijarro, Tegucigalpa <br>\n\n                  Teléfono: 2221-3534\n\n      \n\n                  </ion-item>\n\n\n\n                  <ion-item><strong>Fiscalía de Protección de la Mujer</strong><br>\n\n                    Edificio Ministerio Público<br>\n\n                    Lomas del Guijarro, Tegucigalpa <br>\n\n                    Teléfono: 2221-3534\n\n        \n\n                    </ion-item>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group>\n\n            <ion-item-divider color="light">B</ion-item-divider>\n\n            <ion-item>Angola</ion-item>\n\n            <ion-item>Argentina</ion-item>\n\n          </ion-item-group>\n\n      \n\n        -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\directorio\directorio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DirectorioPage);
    return DirectorioPage;
}());

//# sourceMappingURL=directorio.js.map

/***/ })

});
//# sourceMappingURL=28.js.map
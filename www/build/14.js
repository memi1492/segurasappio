webpackJsonp([14],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntibucaPageModule", function() { return IntibucaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intibuca__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntibucaPageModule = /** @class */ (function () {
    function IntibucaPageModule() {
    }
    IntibucaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intibuca__["a" /* IntibucaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intibuca__["a" /* IntibucaPage */]),
            ],
        })
    ], IntibucaPageModule);
    return IntibucaPageModule;
}());

//# sourceMappingURL=intibuca.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntibucaPage; });
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
 * Generated class for the IntibucaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntibucaPage = /** @class */ (function () {
    function IntibucaPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    IntibucaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntibucaPage');
    };
    IntibucaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    IntibucaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intibuca',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\intibuca\intibuca.html"*/'<!--\n  Generated template for the IntibucaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Intibucá</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="closemodal()">Atrás</button>\n          </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n      <ion-card>\n        <ion-card-header style="color: #0B3954">\n          <strong>Ministerio Público\n            </strong>\n        </ion-card-header>\n        <ion-card-content>\n            Barrio Eramaní, frente a Star Video, Intibucá.<br>\n         <strong> Teléfonos:</strong> 2783-0600\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n          <ion-card-header style="color: #0B3954">\n            <strong>Fiscalía de la Mujer\n              </strong>\n          </ion-card-header>\n          <ion-card-content>\n              Barrio Eramaní, frente a Star Video, Intibucá.<br>\n           <strong> Teléfonos:</strong> 2783-0600\n          </ion-card-content>\n        </ion-card>\n\n        \n      <ion-card>\n          <ion-card-header style="color: #0B3954">\n            <strong>Fiscalía de la Niñez\n              </strong>\n          </ion-card-header>\n          <ion-card-content>\n              Barrio Eramaní, frente a Star Video, Intibucá.<br>\n           <strong> Teléfonos:</strong> 2783-0600\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="color: #0B3954">\n              <strong>Juzgados 1ero y 2ndo <br>  de letras y Juzgado de Paz\n                </strong>\n            </ion-card-header>\n            <ion-card-content>\n                Plaza Cívica, frente a la Oficina de los Bomberos, Intibucá.<br>\n             <strong> Teléfonos:</strong> 2783-0358\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header style="color: #0B3954">\n                <strong>Comisionado Nacional  <br>de los Derechos Humanos\n                  </strong>\n              </ion-card-header>\n              <ion-card-content>\n                  Colonia Ciudad Cívica, frente a la oficina de Los Bomberos, atrás del Palacio Judicial, Intibucá.<br>\n               <strong> Teléfonos:</strong> 2783-0039 <br>\n               <strong> Correo Electrónico:</strong> intibuca@conadeh.hn\n\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <ion-card-header style="color: #0B3954">\n                  <strong>Hospital Enrique  <br>Aguilar Cerrato \n                    </strong>\n                </ion-card-header>\n                <ion-card-content>\n                    Barrio El Way, salida a Siguatepeque, Intibucá.<br>\n                 <strong> Teléfonos:</strong> 2783-0184 \n          \n  \n                </ion-card-content>\n              </ion-card>\n\n              <ion-card>\n                  <ion-card-header style="color: #0B3954">\n                    <strong>Policia Nacional<br> Preventiva\n                      </strong>\n                  </ion-card-header>\n                  <ion-card-content>\n                      Barrio El Centro, frente al Parque, Intibucá.<br>\n                   <strong> Teléfonos:</strong> 2783-1002\n            \n    \n                  </ion-card-content>\n                </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\intibuca\intibuca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], IntibucaPage);
    return IntibucaPage;
}());

//# sourceMappingURL=intibuca.js.map

/***/ })

});
//# sourceMappingURL=14.js.map
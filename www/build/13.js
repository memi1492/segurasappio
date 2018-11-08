webpackJsonp([13],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComayaguaPageModule", function() { return ComayaguaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comayagua__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComayaguaPageModule = /** @class */ (function () {
    function ComayaguaPageModule() {
    }
    ComayaguaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comayagua__["a" /* ComayaguaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comayagua__["a" /* ComayaguaPage */]),
            ],
        })
    ], ComayaguaPageModule);
    return ComayaguaPageModule;
}());

//# sourceMappingURL=comayagua.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComayaguaPage; });
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
 * Generated class for the ComayaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComayaguaPage = /** @class */ (function () {
    function ComayaguaPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    ComayaguaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComayaguaPage');
    };
    ComayaguaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    ComayaguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comayagua',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\comayagua\comayagua.html"*/'<!--\n  Generated template for the LaCeibaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Comayagua</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    \n        <ion-item>\n            <strong>Ministerio Público\n           </strong><br>\n           Comayagua, Barrio Arriba, \n\n           <br>\n           calle principal, Edificio Jerusalén <br>\n          Teléfonos: 2772-4059, 2772-2368, 2772-4043,<br> 2772-4975 y 2772-4058\n\n  \n          </ion-item>\n\n        \n          <ion-item>\n              <strong>Fiscalía de la Mujer\n             </strong><br>\n             Comayagua, Barrio Arriba, \n  \n             <br>\n             calle principal, Edificio Jerusalén <br>\n            Teléfonos: 2772-4059, 2772-2368, 2772-4043,<br> 2772-4975 y 2772-4058\n  \n    \n            </ion-item>\n\n            <ion-item>\n                <strong>Fiscalía de la Niñez\n               </strong><br>\n               Comayagua, Barrio Arriba, \n    \n               <br>\n               calle principal, Edificio Jerusalén <br>\n              Teléfonos: 2772-4059, 2772-2368, 2772-4043,<br> 2772-4975 y 2772-4058\n    \n      \n              </ion-item>\n\n              <ion-item>\n                  <strong>Edificio Poder Judicial, Juzgados de Paz, Penal y Civil\n                 </strong><br>\n                 Comayagua, dos cuadras debajo de la Policia Nacional Preventiva,<br> Barrio San Francisco\n      \n                 <br>\n             \n                 Teléfono de Juzgado Paz: 2772-0077   <br>Teléfono de Juzgado de Penal: 2772-4114   <br>Teléfono de Juzgado de Civil: 2772-0236 \n\n      \n        \n                </ion-item>\n  \n            <ion-item><strong>Alcaldía Municipal\n\n</strong>\n                <br>\n                Comayagua, El Centro,\n                <br>\n                frente al Parque Central<br>\n              Teléfono: 2772-1586, 2772-1747, 2772-0159 y 2772-0258\n\n\n  \n              </ion-item>\n  \n              <ion-item><strong>Policia Nacional Preventiva\n\n\n                </strong><br>\n                Comayagua, Barrio El Centro\n<br>\n\nTeléfonos: 2772-0080 y 2772-3040\n\n\n                </ion-item>\n  \n                <ion-item><strong> Hospital Regional Santa Teresa\n\n\n                  </strong><br>\n                  Comayagua, Barrio Torondón, \n\n\n<br>\nfrente a Wendys<br>\nTeléfonos: 2772-0209, 2772-0055, 2772-2281 y 2772-0094\n\n\n      \n                  </ion-item>\n\n                  \n\n\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\comayagua\comayagua.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object])
    ], ComayaguaPage);
    return ComayaguaPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=comayagua.js.map

/***/ })

});
//# sourceMappingURL=13.js.map
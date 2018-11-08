webpackJsonp([21],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasosDenunciaPageModule", function() { return PasosDenunciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pasos_denuncia__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasosDenunciaPageModule = /** @class */ (function () {
    function PasosDenunciaPageModule() {
    }
    PasosDenunciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pasos_denuncia__["a" /* PasosDenunciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pasos_denuncia__["a" /* PasosDenunciaPage */]),
            ],
        })
    ], PasosDenunciaPageModule);
    return PasosDenunciaPageModule;
}());

//# sourceMappingURL=pasos-denuncia.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasosDenunciaPage; });
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
 * Generated class for the PasosDenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasosDenunciaPage = /** @class */ (function () {
    function PasosDenunciaPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    PasosDenunciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasosDenunciaPage');
    };
    PasosDenunciaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    PasosDenunciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pasos-denuncia',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\pasos-denuncia\pasos-denuncia.html"*/'<!--\n\n  Generated template for the PasosDenunciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Proceso de Denuncia</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding style="background-color: #23B4B7">\n\n\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n\n        \n\n        <ion-slide style="background-color: white; color:  #23B4B7">\n\n            <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Qué sigue cuando interpones la denuncia por violencia doméstica? </strong> </h2>  \n\n            <div>&nbsp;</div>\n\n            <p style="text-align: center; color:#FF6663;"><strong>Aprende el proceso deslizando la imagen para la derecha \n\n            </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n\n          \n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n          \n\n              <p>Que el Juzgado, Posta Policial o Ministerio Público impongan de inmediato medidas de seguridad para protección, \n\n                tales como retirar al agresor del hogar, prohibirle que pase por lugares donde transitas con frecuencia, entre otras medidas.</p>\n\n             \n\n            </ion-slide>\n\n          <ion-slide>\n\n           \n\n               <p>Te asignarán un o una fiscal que llevará tu caso y que debe informarte en todo momento del proceso que seguirá tu denuncia. \n\n                 También puedes tener un apoyo legal privado.</p>\n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n             \n\n               <p><strong>A.	El Juzgado puede imponer medidas para ayudar al agresor a que cambie de comportamiento, es decir puede imponer medidas precautorias,\n\n                  enviando al agresor a la Consejería de Familia y se le impone trabajo comunitario.</strong></p>\n\n\n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n             \n\n             <p>B.	El juzgado también puede imponer las medidas cautelares, que tienen como fin garantizar el bienestar tuyo y de tus hijas e hijos en caso que los tuvieras.\n\n                Entre ellas están la pensión de alimentos; prohibición de retiro del menaje, es decir de todos los enseres domésticos a que te corresponden, \n\n                aunque estén a nombre del agresor; régimen de comunicación al agresor con sus hijas e hijos, es decir los días que puede verlos;\n\n                 prohibición al agresor de disponer de la casa de habitación, sin importar que la propiedad esté a nombre de él.</p>\n\n              <h4><strong>¡Recuerda que tienes derecho a denunciar y ser protegida, también puedes denunciar casos que conozcas de manera anónima, paremos esta violencia!</strong></h4>\n\n\n\n         </ion-slide>\n\n\n\n         \n\n        </ion-slides>\n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\pasos-denuncia\pasos-denuncia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PasosDenunciaPage);
    return PasosDenunciaPage;
}());

//# sourceMappingURL=pasos-denuncia.js.map

/***/ })

});
//# sourceMappingURL=21.js.map
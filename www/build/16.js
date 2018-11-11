webpackJsonp([16],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraciasADiosPageModule", function() { return GraciasADiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gracias_a_dios__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GraciasADiosPageModule = /** @class */ (function () {
    function GraciasADiosPageModule() {
    }
    GraciasADiosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gracias_a_dios__["a" /* GraciasADiosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gracias_a_dios__["a" /* GraciasADiosPage */]),
            ],
        })
    ], GraciasADiosPageModule);
    return GraciasADiosPageModule;
}());

//# sourceMappingURL=gracias-a-dios.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraciasADiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the GraciasADiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraciasADiosPage = /** @class */ (function () {
    function GraciasADiosPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    GraciasADiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraciasADiosPage');
    };
    GraciasADiosPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    GraciasADiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gracias-a-dios',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\gracias-a-dios\gracias-a-dios.html"*/'<!--\n\n  Generated template for the GraciasADiosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Gracias a Dios</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closemodal()">Atrás</button>\n\n          </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n    \n\n      <ion-card>\n\n        <ion-card-header style="color: #0B3954">\n\n          <strong>Hospital  Puerto Lempira\n\n            </strong>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Barrio el manchen,calle principal frente a la terminal de buses, Puerto Lempira.<br>\n\n         <strong> Teléfonos:</strong> 2433-6078/2433-6012\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n          <ion-card-header style="color: #0B3954">\n\n            <strong>Policia Preventiva Puerto Lempira \n\n              </strong>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              Barrio las Minas,frente al instituto José Cecilio del Valle, Puerto Lempira.<br>\n\n           <strong> Teléfonos:</strong> 2433-6033  -35-88\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-card-header style="color: #0B3954">\n\n              <strong>Ministerio Público\n\n                </strong>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                Barrio la Mora, esquina opuesta al campo de futbol.<br>\n\n             <strong> Teléfono:</strong>  2433-6072\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n              <ion-card-header style="color: #0B3954">\n\n                <strong>Juzgado de Letras Puerto Lempira\n\n                  </strong>\n\n              </ion-card-header>\n\n              <ion-card-content>\n\n                  Barrio el centro esquina opuesta a la Departamental de Educacion<br>\n\n               <strong> Teléfono:</strong> 2433-6005\n\n              </ion-card-content>\n\n            </ion-card>\n\n\n\n            <ion-card>\n\n                <ion-card-header style="color: #0B3954">\n\n                  <strong>Defensa Pública Puerto Lempira\n\n                    </strong>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    Frente a la Iglesia de Dios, a la par de la Asociación de busos liciados Ambly<br>\n\n                 <strong> Teléfono:</strong> 2433-6066\n\n                </ion-card-content>\n\n              </ion-card>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\gracias-a-dios\gracias-a-dios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], GraciasADiosPage);
    return GraciasADiosPage;
}());

//# sourceMappingURL=gracias-a-dios.js.map

/***/ })

});
//# sourceMappingURL=16.js.map
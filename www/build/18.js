webpackJsonp([18],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraciasADiosPageModule", function() { return GraciasADiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gracias_a_dios__ = __webpack_require__(361);
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

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraciasADiosPage; });
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
            selector: 'page-gracias-a-dios',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\gracias-a-dios\gracias-a-dios.html"*/'<!--\n  Generated template for the GraciasADiosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Gracias a Dios</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="closemodal()">Atrás</button>\n          </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n      <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público	</strong>	</ion-card-header><ion-card-content>	Barrio la Mora, esquina opuesta al campo de futbol.	<br>	 <strong> Teléfono(s):</strong><a href="tel:2433-6072">2433-6072		</a>		</ion-card-content>	</ion-card>\n      <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Juzgado de Letras Puerto Lempira	</strong>	</ion-card-header><ion-card-content>	Barrio el centro esquina opuesta a la Departamental de Educacion	<br>	 <strong> Teléfono(s):</strong><a href="tel:2433-6005">2433-6005		</a>		</ion-card-content>	</ion-card>\n      <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Hospital Puerto Lempira	</strong>	</ion-card-header><ion-card-content>	Barrio el manchen,calle principal frente a la terminal de buses.	<br>	 <strong> Teléfono(s):</strong><a href="tel:2433-6078">2433-6078		</a>		</ion-card-content>	</ion-card>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\gracias-a-dios\gracias-a-dios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], GraciasADiosPage);
    return GraciasADiosPage;
}());

//# sourceMappingURL=gracias-a-dios.js.map

/***/ })

});
//# sourceMappingURL=18.js.map
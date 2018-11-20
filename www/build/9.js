webpackJsonp([9],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinosPageModule", function() { return NinosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ninos__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NinosPageModule = /** @class */ (function () {
    function NinosPageModule() {
    }
    NinosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ninos__["a" /* NinosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ninos__["a" /* NinosPage */]),
            ],
        })
    ], NinosPageModule);
    return NinosPageModule;
}());

//# sourceMappingURL=ninos.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NinosPage; });
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
 * Generated class for the NinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NinosPage = /** @class */ (function () {
    function NinosPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
    }
    NinosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NinosPage');
    };
    NinosPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    NinosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ninos',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\ninos\ninos.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Violencia Sexual</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Y qué hacer con los niños y niñas y adolescentes </strong> </h2>\n      <p style="text-align: center; color: #23B4B7; font-size: 16px;">\n         <strong> para evitar la violencia sexual?</strong>\n        </p>    \n      \n        <ion-grid>\n           <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n        <ion-col >\n              <img style="align-content: center;" src="assets/imgs/2ViolenciaSexual/2NiñosYAdolescentes/family.gif">\n            </ion-col>\n            <ion-col >\n              <p style="text-align:center">Se debe crear un ambiente de confianza con los hijos e hijas, donde sientan que son escuchados y escuchadas.</p>\n            </ion-col>\n            </ion-row>\n        \n            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n                <ion-col >\n                    <p style="text-align:center">Enseñarles que nadie tiene derecho a tocar su cuerpo sin su consentimiento.</p> \n                    </ion-col>\n                    <ion-col >\n                        <img style="align-content: center;" src="assets/imgs/2ViolenciaSexual/2NiñosYAdolescentes/no.gif">\n                    </ion-col>\n                    </ion-row>\n\n                    <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n                        <ion-col >\n                              <img style="align-content: center;" src="assets/imgs/2ViolenciaSexual/2NiñosYAdolescentes/stop.gif">\n                            </ion-col>\n                            <ion-col >\n                              <p style="text-align:center">Decirles que deben decir "no" ante cualquier propuesta que les incomode, de cualquier persona extraña o conocida.</p>\n                            </ion-col>\n                            </ion-row>\n\n                            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n                                <ion-col >\n                                    <p style="text-align:center">Explicarles que no se deben abrir puertas a extraños, ni ir a sus casas, ni a pasear con ellos sin el permiso de sus padres y madres.</p> \n                                    </ion-col>\n                                    <ion-col >\n                                        <img style="align-content: center;" src="assets/imgs/2ViolenciaSexual/2NiñosYAdolescentes/lock.gif">\n                                    </ion-col>\n                                    </ion-row>\n\n              \n                  </ion-grid>\n\n\n\n\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\ninos\ninos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NinosPage);
    return NinosPage;
}());

//# sourceMappingURL=ninos.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
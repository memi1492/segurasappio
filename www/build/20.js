webpackJsonp([20],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciasDefPageModule", function() { return DenunciasDefPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncias_def__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DenunciasDefPageModule = /** @class */ (function () {
    function DenunciasDefPageModule() {
    }
    DenunciasDefPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denuncias_def__["a" /* DenunciasDefPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncias_def__["a" /* DenunciasDefPage */]),
            ],
        })
    ], DenunciasDefPageModule);
    return DenunciasDefPageModule;
}());

//# sourceMappingURL=denuncias-def.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasDefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the DenunciasDefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DenunciasDefPage = /** @class */ (function () {
    function DenunciasDefPage(navCtrl, view, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    DenunciasDefPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DenunciasDefPage');
    };
    DenunciasDefPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    DenunciasDefPage.prototype.que = function () {
        var que = this.alertCtrl.create({
            title: "¿Qué es una denuncia?",
            message: " Es un mecanismo que cada persona tiene para dar a conocer, la violencia sufrida, ante la autoridad competente. ",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        que.present();
    };
    DenunciasDefPage.prototype.elementos = function () {
        var elementos = this.alertCtrl.create({
            title: " ¿Qué elementos debe recoger la denuncia?",
            message: "1. Nombre completo de la víctima <br> 2. Lugar y fecha en donde ocurrieron los hechos  <br> 3. La hora en la que sucedieron los hechos. En caso de un delito, esto no debe faltar <br> 4. Descripción detallada de los hechos. Mencionar todos los detalles, aunque parezcan insignificantes <br> 5. En caso de haber testigos, sus nombres y cómo ubicarlos ",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        elementos.present();
    };
    DenunciasDefPage.prototype.exigir = function () {
        var exigir = this.alertCtrl.create({
            title: "Violencia Física",
            message: "1. Que reciban tu denuncia en un espacio donde haya privacidad <br> 2.	Que te respeten durante el relato de los hechos. es decir, que no hagan preguntas incomodas o comentarios que te culpabilicen por la agresión recibida.<br> 3.	Que registren la denuncia en un libro o base de datos.<br> 4.	Que te permitan leer la denuncia antes de firmarla. Fíjate bien en las horas y fechas registradas en el documento. No firmes si no estás de acuerdo con lo escrito en la denuncia, si esta no refleja los hechos que has denunciado. <br> 5.	Y no olvides pedir el nombre de la persona que recibe la denuncia. <br> 6.Que te entreguen una copia de la denuncia, la cual debe estar sellada y firmada. <br> <strong> Además, tienes derecho a que protejan tu vida y la de tu familia.</strong>",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        exigir.present();
    };
    DenunciasDefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-denuncias-def',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\denuncias-def\denuncias-def.html"*/'<!--\n  Generated template for the DenunciasDefPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Preguntas Frecuentes</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding >\n      <h3 text-center style="padding-top: 10px; color:#0B3954"><strong>Conoce lo que debes de saber para realizar una denuncia</strong> </h3>\n      \n      <div padding class="estilo">\n          <div>  <img   src="assets/imgs/question.png" style=" align-content: center; padding-bottom: 5px; width: 50%; height: 50%" ></div> \n\n          <div><ion-buttons><button ion-button center (click)="que()">  ¿Qué es una denuncia? </button></ion-buttons> </div>\n      </div>\n\n      <div padding class="estilo">\n          <div>  <img   src="assets/imgs/newspaper.png" style=" align-content: center; padding-bottom: 5px; width: 50%; height: 50%" ></div> \n\n          <div><ion-buttons><button ion-button center (click)="elementos()">  ¿Qué elementos debe recoger <br> la denuncia?\n            </button></ion-buttons> </div>\n      </div>\n\n      <div padding class="estilo">\n          <div>  <img   src="assets/imgs/advocate.png" style=" align-content: center; padding-bottom: 5px; width: 50%; height: 50%" ></div> \n\n          <div><ion-buttons><button ion-button center (click)="exigir()"> ¿Qué debes de exigir al momento<br> de presentar  una denuncia?\n            </button></ion-buttons> </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!--\n        <ion-card>\n            <ion-card-content>\n              <ion-card-title>\n               ¿Qué es una denuncia?\n                </ion-card-title>\n              <p>\n                Es un mecanismo que cada persona tiene para dar a conocer, la violencia sufrida, ante la autoridad competente.\n              </p>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-content>\n              <ion-card-title>\n                ¿Qué elementos debe recoger la denuncia?\n                </ion-card-title>\n              <p>\n                   \na.	Nombre completo de la víctima.\nb.	Lugar y fecha en donde ocurrieron los hechos.\nc.	La hora en la que sucedieron los hechos. En caso de un delito, esto no debe faltar.\nd.	Descripción detallada de los hechos. Mencionar todos los detalles, aunque parezcan insignificantes.\ne.	En caso de haber testigos, sus nombres y cómo ubicarlos\n\n\n              </p>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-content>\n              <ion-card-title>\n                ¿Qué debes de exigir al momento de presentar una denuncia?\n                </ion-card-title>\n              <p>\n                    1.	Que reciban tu denuncia en un espacio donde haya privacidad.\n                    2.	Que te respeten durante el relato de los hechos. es decir, que no hagan preguntas incomodas o comentarios que te culpabilicen por la agresión recibida.\n                    3.	Que registren la denuncia en un libro o base de datos.\n                    4.	Que te permitan leer la denuncia antes de firmarla. Fíjate bien en las horas y fechas registradas en el documento. No firmes si no estás de acuerdo con lo escrito en la denuncia, si esta no refleja los hechos que has denunciado.\n                    5.	Y no olvides pedir el nombre de la persona que recibe la denuncia.\n                    6.	Que te entreguen una copia de la denuncia, la cual debe estar sellada y firmada.\n                    Además, tienes derecho a que protejan tu vida y la de tu familia.\n                    \n              </p>\n            </ion-card-content>\n          </ion-card>\n-->\n\n     \n      \n      \n      \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\denuncias-def\denuncias-def.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DenunciasDefPage);
    return DenunciasDefPage;
}());

//# sourceMappingURL=denuncias-def.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
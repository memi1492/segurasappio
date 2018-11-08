webpackJsonp([14],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloViolenciaPageModule", function() { return CicloViolenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ciclo_violencia__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CicloViolenciaPageModule = /** @class */ (function () {
    function CicloViolenciaPageModule() {
    }
    CicloViolenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ciclo_violencia__["a" /* CicloViolenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ciclo_violencia__["a" /* CicloViolenciaPage */]),
            ],
        })
    ], CicloViolenciaPageModule);
    return CicloViolenciaPageModule;
}());

//# sourceMappingURL=ciclo-violencia.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CicloViolenciaPage; });
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
 * Generated class for the CicloViolenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CicloViolenciaPage = /** @class */ (function () {
    function CicloViolenciaPage(navParams, view, alertCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
    }
    CicloViolenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CicloViolenciaPage');
    };
    CicloViolenciaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    CicloViolenciaPage.prototype.agresor1 = function () {
        var agresor1 = this.alertCtrl.create({
            title: "Características del Agresor",
            message: "Se burla de su pareja, la ignora, la compara con otras personas, la corrige en público, la insulta, le grita y la culpa de todo.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        agresor1.present();
    };
    CicloViolenciaPage.prototype.victima1 = function () {
        var victima1 = this.alertCtrl.create({
            title: "Características de la Víctima",
            message: "Siente miedo de hablar o actuar por temor a las criticas, se siente deprimida y débil.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        victima1.present();
    };
    CicloViolenciaPage.prototype.agresor2 = function () {
        var agresor2 = this.alertCtrl.create({
            title: "Características del Agresor",
            message: "Ejerce violencia física: puede pellizcar, golpear, empujar, patear, recurrir a objetos para lastimar, exigir relaciones sexuales o llegar a la violación.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        agresor2.present();
    };
    CicloViolenciaPage.prototype.victima2 = function () {
        var victima2 = this.alertCtrl.create({
            title: "Características de la Víctima",
            message: "Puede sentir un miedo constante, alejarse o separarse temporalmente buscando una salida, interponer una denuncia.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        victima2.present();
    };
    CicloViolenciaPage.prototype.agresor3 = function () {
        var agresor3 = this.alertCtrl.create({
            title: "Características del Agresor",
            message: "Se muestra cariñoso y arrepentido. Utiliza todos los recursos para lograr que no termine la relación.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        agresor3.present();
    };
    CicloViolenciaPage.prototype.victima3 = function () {
        var victima3 = this.alertCtrl.create({
            title: "Características de la Víctima",
            message: "Desea creer que la amabilidad y las conductas amorosas durarán, espera que el cambie y no la vuelva a lastimar.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        victima3.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], CicloViolenciaPage.prototype, "slides", void 0);
    CicloViolenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ciclo-violencia',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\ciclo-violencia\ciclo-violencia.html"*/'<!--\n  Generated template for the CicloViolenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Violencia Doméstica</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closemodal()"> Atrás</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n    <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n        <ion-slide style=" color:  #0B3954">\n         <h2 style="padding-top: 10px; color:#0B3954;" ><strong> FASES DEL CICLO DE VIOLENCIA</strong></h2>\n              \n          <div>&nbsp;</div>\n          <img src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/ezgif.com-crop-2.gif" style="width : 90% ; height : 190%; border: 2px solid #0B3954;  border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;">\n          <div>&nbsp;</div>\n          <p style="padding: 5px; text-align: center; font-size: 15px; color:#0B3954"> <strong>La única manera de cortar con este ciclo es con la intervención de alguien externo a la pareja, como familiares, amistades, personal de salud, operadores de justicia etc.</strong>\n          </p>\n          <p style="padding: 5px; text-align: center; color:#FF6663; "><strong>Desliza la imagen para la derecha para aprender más\n          </strong> <ion-icon name="arrow-round-forward" style="align-content: center; color:#23B4B7"></ion-icon></p>\n         \n        </ion-slide>\n        <ion-slide >\n            <h4 style="padding-top: 10px;  color:#0B3954"><strong>Acumulación de Tensión</strong> </h4>\n            <p style="padding: 5px;text-align: center; color:#FF6663; font-size: 15px;"> Aprende las características de cada uno:</p>\n            <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n            -moz-box-shadow: 0 10px 6px -6px #777;\n                 box-shadow: 0 10px 6px -6px #777;">\n\n               <div style="text-align: center; color:#0B3954">EL AGRESOR </div>\n                <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/manpic.png" style=" width: 40%; height: 40%; align-content: center; " >\n               <ion-buttons><button ion-button center (click)="agresor1()"> Características  </button></ion-buttons> </div>\n                  \n                <!-- <ion-col col-6><p style="padding:2px; font-size: 14px; ">Se burla de su pareja, la ignora, la compara con otras personas, la corrige en público, la insulta, le grita y la culpa de todo.</p></ion-col>\n                --> \n              \n                <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n                -moz-box-shadow: 0 10px 6px -6px #777;\n                     box-shadow: 0 10px 6px -6px #777;">                    \n                <!--    <ion-col col-6><p style="padding:5px;font-size: 14px; ">Siente miedo de hablar o actuar por temor a las criticas, se siente deprimida y débil.</p></ion-col> \n                -->      <div style="text-align: center; color:#0B3954">LA VÍCTIMA </div> \n                 <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/womanpic.png" style="width: 40%; height: 40%;  align-content: center; " >\n                <ion-buttons><button ion-button center (click)="victima1()"> Características  </button></ion-buttons> </div>\n              \n\n              <p style="padding: 5px;text-align: center; color:#FF6663; "><strong>Desliza a la derecha para fase 2\n              </strong> </p>\n          </ion-slide>\n          <ion-slide >\n              <h4 style="padding-top: 10px;  color:#0B3954"><strong>Estallido de la Tensión</strong> </h4>\n              <p style="padding: 5px;text-align: center; color:#FF6663; font-size: 15px;"> Aprende las características de cada uno:</p>\n              <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n              -moz-box-shadow: 0 10px 6px -6px #777;\n                   box-shadow: 0 10px 6px -6px #777;">\n  \n                 <div style="text-align: center; color:#0B3954">EL AGRESOR </div>\n                  <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/manpic.png" style=" width: 40%; height: 40%; align-content: center; " >\n                 <ion-buttons><button ion-button center (click)="agresor2()"> Características  </button></ion-buttons> </div>\n                    \n                  <!-- <ion-col col-6><p style="padding:2px; font-size: 14px; ">Se burla de su pareja, la ignora, la compara con otras personas, la corrige en público, la insulta, le grita y la culpa de todo.</p></ion-col>\n                  --> \n                \n                  <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n                  -moz-box-shadow: 0 10px 6px -6px #777;\n                       box-shadow: 0 10px 6px -6px #777;">                    \n                    <div style="text-align: center; color:#0B3954">LA VÍCTIMA </div> \n                   <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/womanpic.png" style="width: 40%; height: 40%;  align-content: center; " >\n                  <ion-buttons><button ion-button center (click)="victima2()"> Características  </button></ion-buttons> </div>\n                \n  \n                <p style="padding: 5px;text-align: center; color:#FF6663; "><strong>Desliza a la derecha para fase 3\n                </strong> </p>\n            </ion-slide>\n\n            <ion-slide >\n                <h4 style="padding-top: 10px;  color:#0B3954"><strong>Reconciliación</strong> </h4>\n                <p style="padding: 5px;text-align: center; color:#FF6663; font-size: 15px;"> Aprende las características de cada uno:</p>\n                <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n                -moz-box-shadow: 0 10px 6px -6px #777;\n                     box-shadow: 0 10px 6px -6px #777;">\n    \n                   <div style="text-align: center; color:#0B3954">EL AGRESOR </div>\n                    <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/manpic.png" style=" width: 40%; height: 40%; align-content: center; " >\n                   <ion-buttons><button ion-button center (click)="agresor3()"> Características  </button></ion-buttons> </div>\n                      \n                  \n                    <div padding style="background-color: white; text-align: center; padding: 10px ; border: 2px solid #0B3954; margin: 30px; border-radius: 5px;   -webkit-box-shadow: 0 10px 6px -6px #777;\n                    -moz-box-shadow: 0 10px 6px -6px #777;\n                         box-shadow: 0 10px 6px -6px #777;">                    \n                          <div style="text-align: center; color:#0B3954">LA VÍCTIMA </div> \n                     <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/womanpic.png" style="width: 40%; height: 40%;  align-content: center; " >\n                    <ion-buttons><button ion-button center (click)="victima3()"> Características  </button></ion-buttons> </div>\n                  \n    \n                  <p style="padding: 5px;text-align: center; color:#FF6663; "><strong>¡Rompe el Ciclo!\n                  </strong> </p>\n              </ion-slide>\n              </ion-slides>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\ciclo-violencia\ciclo-violencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CicloViolenciaPage);
    return CicloViolenciaPage;
}());

//# sourceMappingURL=ciclo-violencia.js.map

/***/ })

});
//# sourceMappingURL=14.js.map
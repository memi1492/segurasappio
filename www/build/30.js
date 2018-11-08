webpackJsonp([30],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicionPageModule", function() { return DefinicionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definicion__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DefinicionPageModule = /** @class */ (function () {
    function DefinicionPageModule() {
    }
    DefinicionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__definicion__["a" /* DefinicionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__definicion__["a" /* DefinicionPage */]),
            ],
        })
    ], DefinicionPageModule);
    return DefinicionPageModule;
}());

//# sourceMappingURL=definicion.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinicionPage; });
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
 * Generated class for the DefinicionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DefinicionPage = /** @class */ (function () {
    function DefinicionPage(navCtrl, navParams, view, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
    }
    DefinicionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DefinicionPage');
    };
    DefinicionPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    DefinicionPage.prototype.vfisica = function () {
        var vfisica = this.alertCtrl.create({
            title: "Violencia Física",
            message: "Existen golpes. empujadas y cachetadas ",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vfisica.present();
    };
    DefinicionPage.prototype.vsexual = function () {
        var vsexual = this.alertCtrl.create({
            title: "Violencia Sexual",
            message: "Te obliga a tener relaciones sexuales y en posiciones que no deseas, También te puede impedir que realices una planificación familiar.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vsexual.present();
    };
    DefinicionPage.prototype.vpsicologica = function () {
        var vpsicologica = this.alertCtrl.create({
            title: "Violencia Psicológica",
            message: "Te degrada, controla tus acciones, comportamientos, creencias y decisiones por medio de la intimidación, manipulación, amenaza directa e indirecta.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vpsicologica.present();
    };
    DefinicionPage.prototype.vpatrimonial = function () {
        var vpatrimonial = this.alertCtrl.create({
            title: "Violencia Patrimonial",
            message: "Te niega tus bienes, rompe tus cosas, teniendo dinero te lo niega para cubrir los gastos y el de tus hijos e hijas, dispone del dinero o de tus bienes sin avisarte.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vpatrimonial.present();
    };
    DefinicionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-definicion',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\definicion\definicion.html"*/'<!--\n\n  Generated template for the DefinicionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Tipos de Violencia Doméstica</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()"> Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954"><strong> ¿Cómo saber si sufres violencia doméstica?</strong> </h2>\n\n      <p style="text-align: center; color: #FF6663; font-size: 16px;">\n\n         <strong> Cuando los actos de tu pareja o ex-pareja te producen cualquiera de estos tipos de violencia, estas siendo víctima de violencia doméstica </strong>\n\n        </p>\n\n \n\n          <div padding class="estilo">\n\n              <div>  <img   src="assets/imgs/1ViolenciaDomestica/handymod.gif" style=" align-content: center; padding-bottom: 5px; width: 20%; height: 20%" ></div> \n\n\n\n         <!--  <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n              <div><ion-buttons><button ion-button center (click)="vfisica()"> Violencia Física  </button></ion-buttons> </div>\n\n          </div>\n\n          <br>\n\n\n\n          <div padding class="estilo">\n\n              <div>  <img   src="assets/imgs/1ViolenciaDomestica/sex.gif" style=" align-content: center; padding-bottom: 5px; width: 30%; height: 30%" ></div> \n\n\n\n         <!--  <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n              <div><ion-buttons><button ion-button center (click)="vsexual()"> Violencia Sexual  </button></ion-buttons> </div>\n\n          </div>\n\n          <br>\n\n\n\n          <div padding class="estilo">\n\n              <div> <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/swear.gif" style="padding-bottom: 5px; width: 25%; height: 25%" >\n\n              </div> \n\n\n\n         <!--  <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n              <div><ion-buttons><button ion-button center (click)="vpsicologica()"> Violencia Psicológica  </button></ion-buttons> </div>\n\n          </div>\n\n          <br>\n\n\n\n\n\n          <div padding class="estilo">\n\n              <div>  <img   src="assets/imgs/1ViolenciaDomestica/man.gif" style=" align-content: center; padding-bottom: 5px; width: 30%; height: 30%" ></div> \n\n\n\n         <!--  <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n              <div><ion-buttons><button ion-button center (click)="vpatrimonial()"> Violencia Patrimonial  </button></ion-buttons> </div>\n\n          </div>\n\n\n\n<div>&nbsp;</div>\n\n<div>&nbsp;</div>\n\n      \n\n       \n\n\n\n\n\n\n\n\n\n\n\n<!--\n\n\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()">\n\n          <ion-slide style="background-color: white; color:  #0B3954">\n\n           <h2 style="padding-top: 10px; color:#FF6663;" ><strong> ¿Cómo saber si sufres violencia doméstica?</strong></h2>\n\n           <br> <p style="text-align: center;font-size: 15px; padding: 10px;">\n\n                Cuando los actos de tu pareja o ex-pareja te producen cualquiera de estos tipos de violencia, estas siendo víctima de violencia doméstica </p>\n\n            <div>&nbsp;</div>\n\n            <div>&nbsp;</div>\n\n            <p style="padding: 5px; text-align: center; color:#23B4B7; "><strong>Desliza la imagen para la derecha para ver los tipos de violencia\n\n            </strong></p>\n\n            <img src="assets/imgs/right.gif" style="width :50% ; height : 50%">\n\n\n\n           \n\n          </ion-slide>\n\n          <ion-slide style="background-color: #BFD7EA;">\n\n          \n\n              <div style="background-color: white;"><h4 style="padding-top: 10px; background-color: white; color:#FF6663;"> <strong>« Violencia Física »</strong> </h4>\n\n                <img src="assets/imgs/1ViolenciaDomestica/handy.gif" style="width : 30% ; height : 30%; background-color: white; border: 5px solid #23B4B7;">\n\n                <p style="padding: 5px; background-color: white; text-align: center; color:#0B3954; font-size: 15px; padding-bottom: 15px; ">Existen golpes. empujadas y cachetadas\n\n                  </p></div>\n\n               \n\n                  <br>\n\n\n\n                <div style="background-color: white; border-radius: 5px"> <h4 style="padding-top: 10px; background-color: white; color:#FF6663; "><strong>« Violencia Sexual »</strong> </h4>\n\n                <img src="assets/imgs/1ViolenciaDomestica/sex.gif" style="width : 30% ; height : 30%; background-color: white; border: 5px solid #FF6663;">\n\n                <p style="padding: 5px; background-color: white; text-align: center; color:#0B3954; font-size: 15px">Te obliga a tener relaciones sexuales o en posiciones que no deseas, También te puede impedir que realices una planificación familiar.\n\n                  </p> </div>\n\n                  <p style="text-align: center; color:#FF6663;"><strong>Desliza a la derecha  \n\n                    </strong> <ion-icon name="arrow-round-forward" style="align-content: center;  color:#23B4B7"></ion-icon></p>\n\n            </ion-slide>\n\n          <ion-slide  style="background-color: #BFD7EA;">\n\n              <div style="background-color: white; border-radius: 5px"> <h4 style="padding-top: 10px; background-color: white; color:#FF6663"><strong>« Violencia Psicológica »</strong></h4>\n\n               <img src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/swear.gif" style="width : 30% ; height : 30%; border: 5px solid #FF6663; padding:10px;">\n\n               <p style="padding: 10px; text-align: center;font-size: 15px; color:#0B3954; background-color: white"> Te degrada, controla tus acciones, comportamientos, creencias y decisiones por medio de la intimidación, manipulación, amenaza directa e indirecta\n\n                 </p>\n\n                </div>\n\n                <br>\n\n                <div style="background-color: white; border-radius: 5px"> <h4 style="padding-top: 10px; background-color: white; color: #FF6663"><strong>« Violencia Patrimonial »</strong></h4>\n\n                  <img src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/maan.gif" style="width : 20% ; height : 20%; border: 5px solid #23B4B7;">\n\n                  <p style="padding: 10px; text-align: center;font-size: 15px; color:#0B3954; background-color: white">Te niega tus bienes, rompe tus cosas, teniendo dinero te niega para cubrir los gastos y el de tus hijos e hijas, dispone del dinero o de tus bienes sin avisarte.</p>\n\n                </div>\n\n          </ion-slide>\n\n          \n\n        </ion-slides>\n\n      -->\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\definicion\definicion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DefinicionPage);
    return DefinicionPage;
}());

//# sourceMappingURL=definicion.js.map

/***/ })

});
//# sourceMappingURL=30.js.map
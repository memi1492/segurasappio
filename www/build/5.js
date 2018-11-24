webpackJsonp([5],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesoPageModule", function() { return ProcesoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proceso__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProcesoPageModule = /** @class */ (function () {
    function ProcesoPageModule() {
    }
    ProcesoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proceso__["a" /* ProcesoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proceso__["a" /* ProcesoPage */]),
            ],
        })
    ], ProcesoPageModule);
    return ProcesoPageModule;
}());

//# sourceMappingURL=proceso.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcesoPage; });
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
 * Generated class for the ProcesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcesoPage = /** @class */ (function () {
    function ProcesoPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    ProcesoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcesoPage');
    };
    ProcesoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    ProcesoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proceso',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\proceso\proceso.html"*/'<!--\n  Generated template for the ProcesoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Victimas de Violencia Sexual</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="background-color: #23B4B7">\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n        \n        <ion-slide style="background-color: white; color:  #0B3954">\n            <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Qué debes hacer en caso de ser víctima de una violación sexual?</strong> </h2>  \n<h4><strong>¡No hay que sentirse culpable o avergonzada, no te quedes callada, busca ayuda!</strong></h4>\n<img src="assets/imgs/shield-1s-200px.gif" style="width : 50% ; height : 50%; text-align: center">\n\n            <p style="text-align: center; "><strong>Sigue estos pasos deslizando la imagen para la derecha \n            </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n          \n          </ion-slide>\n\n          <ion-slide  style="background-color: white;">\n          <h2 style="text-align: center; color:#0B3954"> <strong>ACUDIR LO MAS PRONTO A UN CENTRO DE SALUD</strong></h2>\n              <img src="assets/imgs/3Violaciones/2ProcesoViolacion/hospital.gif" style="width : 50% ; height : 50%">\n             <p style="text-align: center">Es prioridad atender tu salud. <br> En el hospital también puedes solicitar apoyo en caso de querer realizar la denuncia.</p>\n            </ion-slide>\n          <ion-slide style="background-color: white;">\n              <h2 style="text-align: center; color:#0B3954"> <strong>REALIZAR LA DENUNCIA A LA POLICÍA, JUZGADOS O MINISTERIO PÚBLICO</strong></h2>\n\n               <img src="assets/imgs/3Violaciones/2ProcesoViolacion/police-cap.gif" style="width : 50% ; height : 50%">\n               <p style="text-align: center">Recuerda que no importa el tiempo que haya transcurrido después de la violación, siempre puedes buscar ayuda para tu salud y denunciar.</p>\n\n          </ion-slide>\n          <ion-slide style="background-color: white;">\n              <h2 style="text-align: center; color:#0B3954"> <strong>¿QUÉ NO HACER EN CASO DE UNA VIOLACIÓN RECIENTE?</strong></h2>\n               <img src="assets/imgs/3Violaciones/2ProcesoViolacion/caution.gif" style="width : 50% ; height : 50%">\n               <p style="text-align: center">No hay que asearse <br> No bañarse ni hacerse duchas vaginales <br> No usar ninguna medicina<br> No cambiarse de ropa</p>\n              <p style="text-align: center">Todo esto para preservar las pruebas en caso de que quieras denunciar</p>\n          </ion-slide>\n\n         \n        </ion-slides>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\proceso\proceso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ProcesoPage);
    return ProcesoPage;
}());

//# sourceMappingURL=proceso.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
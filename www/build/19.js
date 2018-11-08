webpackJsonp([19],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasAtencionPageModule", function() { return RutasAtencionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutas_atencion__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RutasAtencionPageModule = /** @class */ (function () {
    function RutasAtencionPageModule() {
    }
    RutasAtencionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rutas_atencion__["a" /* RutasAtencionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rutas_atencion__["a" /* RutasAtencionPage */]),
            ],
        })
    ], RutasAtencionPageModule);
    return RutasAtencionPageModule;
}());

//# sourceMappingURL=rutas-atencion.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasAtencionPage; });
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
 * Generated class for the RutasAtencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutasAtencionPage = /** @class */ (function () {
    function RutasAtencionPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    RutasAtencionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RutasAtencionPage');
    };
    RutasAtencionPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    RutasAtencionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutas-atencion',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/'<!--\n\n  Generated template for the RutasAtencionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>¿ Donde puedes acudir?</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <h4 text-center style=" color:#0B3954"><strong>La denuncia por Violencia Doméstica se interpone en cualquiera de los siguientes lugares:</strong> </h4>\n\n       \n\n        <ion-grid>\n\n            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n\n         <ion-col >\n\n               <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/card.gif" >\n\n             </ion-col>\n\n             <ion-col >\n\n               <p style="text-align:center">Juzgado de Paz.</p>\n\n             </ion-col>\n\n             </ion-row>\n\n         \n\n             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n\n                 <ion-col >\n\n                     <p style="text-align:center">Posta Policial.</p> \n\n                     </ion-col>\n\n                     <ion-col >\n\n                         <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/hand.gif">\n\n                     </ion-col>\n\n                     </ion-row>\n\n \n\n                     <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n\n                         <ion-col >\n\n                               <img style="align-content: center;  width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/house.gif">\n\n                             </ion-col>\n\n                             <ion-col >\n\n                               <p style="text-align:center">Ministerio Público. Dentro de este Ministerio, en muchos lugares del país, existen los Módulos de Atención Integral especializado (MAIE), donde puedes denunciar.</p>\n\n                             </ion-col>\n\n                             </ion-row>\n\n \n\n                             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n\n                                 <ion-col >\n\n                                     <p style="text-align:center">Defensa Pública</p> \n\n                                     </ion-col>\n\n                                     <ion-col >\n\n                                         <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/help.gif">\n\n                                     </ion-col>\n\n                                     </ion-row>\n\n \n\n               \n\n                   </ion-grid>\n\n<p> \n\n  <strong>  La denuncia por otras violencias, como violencia sexual, violencia intrafamiliar o femicidio, que son delitos según el Código Penal hondureño se interponen en:\n\n    </strong>\n\n    •	El Ministerio Público y dentro de este, en los lugares donde existen, se interponen en el Módulo de Atención Integral Especializado (MAIE).\n\n    •	La Dirección Policial de Investigación (DPI).\n\n    •	La Posta Policial más cercana.\n\n     </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RutasAtencionPage);
    return RutasAtencionPage;
}());

//# sourceMappingURL=rutas-atencion.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
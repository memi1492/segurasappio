webpackJsonp([4],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasAtencionPageModule", function() { return RutasAtencionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutas_atencion__ = __webpack_require__(356);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasAtencionPage; });
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
            selector: 'page-rutas-atencion',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/'<!--\n  Generated template for the RutasAtencionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>¿ Donde puedes acudir?</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <h4 text-center style=" color:#0B3954"><strong>La denuncia por Violencia Doméstica se interpone en cualquiera de los siguientes lugares:</strong> </h4>\n       \n        <ion-grid>\n            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n         <ion-col >\n               <img style="align-content: center; width: 100%; height:100%" src="assets/imgs/juzgado.gif" >\n             </ion-col>\n             <ion-col  >\n               <h2 style="text-align:center;  padding: 7px;">Juzgado de Paz de tu ciudad</h2>\n             </ion-col>\n             </ion-row>\n         \n             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n                 <ion-col >\n                     <h2 style="text-align:center; padding: 5px;">En la Posta Policial más cercana</h2> \n                     </ion-col>\n                     <ion-col >\n                         <img style="align-content: center; width: 100%; height:100%" src="assets/imgs/posta.gif">\n                     </ion-col>\n                     </ion-row>\n \n                     <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n                         <ion-col >\n                               <img style="align-content: center;  width: 100%; height:100%" src="assets/imgs/ministerio.gif">\n                             </ion-col>\n                             <ion-col >\n                               <h2 style="text-align:center; padding: 5px;">Ministerio Público.<br> Módulos de Atención Integral especializado (MAIE)</h2>\n                             </ion-col>\n                             </ion-row>\n \n                             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n                                 <ion-col >\n                                     <h2 style="text-align:center;  padding-top: 20px; padding-right: 5px;">Defensa Pública</h2> \n                                     </ion-col>\n                                     <ion-col >\n                                         <img style="align-content: center; width: 100%; height:100%" src="assets/imgs/defense.gif">\n                                     </ion-col>\n                                     </ion-row>\n \n               \n                   </ion-grid>\n<p style="text-align: justify; padding: 5px; color: #FF6663"> \n  <strong>  La denuncia por otras violencias, como violencia sexual, violencia intrafamiliar o femicidio, que son delitos según el Código Penal hondureño se interponen en:\n    </strong> <br></p>\n   <p style="text-align: justify; padding: 5px; color: #0B3954">  Los mismos lugares, eliminando a los Juzgados y agregando a la Dirección Policial de Investigación (DPI).\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RutasAtencionPage);
    return RutasAtencionPage;
}());

//# sourceMappingURL=rutas-atencion.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
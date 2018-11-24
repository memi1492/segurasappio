webpackJsonp([4],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasAtencionPageModule", function() { return RutasAtencionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutas_atencion__ = __webpack_require__(363);
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

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasAtencionPage; });
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
            selector: 'page-rutas-atencion',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/'<!--\n  Generated template for the RutasAtencionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>¿ Donde puedes acudir?</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="closemodal()">Atrás</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <p text-center style=" color:#0B3954"><strong>Si has sufrido violencia doméstica puedes interponer la denuncia en cualquiera de estos lugares:</strong> </p>\n       \n        <ion-grid>\n        <ion-row align-items-center padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; \n    \n        -webkit-box-shadow: 0 10px 6px -6px #777;\n           -moz-box-shadow: 0 10px 6px -6px #777;\n                box-shadow: 0 10px 6px -6px #777; " >\n         \n          <div style="text-align: center">   <img style="display: inline-block; width: 30%; height:30%" src="assets/imgs/4Denuncia/bank.gif" ></div>  \n          \n               <p class="alineado">	<strong>Ministerio Público. Dentro de este Ministerio, en varios lugares del país, existe el Módulo de Atención Integral Especializado (MAIE), donde puedes denunciar.</strong></p>\n            \n             </ion-row>\n         <br>\n              <ion-row align-items-center  padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ;\n    \n              -webkit-box-shadow: 0 10px 6px -6px #777;\n                 -moz-box-shadow: 0 10px 6px -6px #777;\n                      box-shadow: 0 10px 6px -6px #777; " >\n               \n                <div style="text-align: center">      <img style=" width:30%; height:70%" src="assets/imgs/4Denuncia/police.gif">  <br>   \n              <strong>En la Posta Policial más cercana</strong> </div>  \n                    \n                        \n                   \n                     </ion-row>\n \n                     <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; \n    \n                     -webkit-box-shadow: 0 10px 6px -6px #777;\n                        -moz-box-shadow: 0 10px 6px -6px #777;\n                             box-shadow: 0 10px 6px -6px #777; " >\n                        <div style="text-align: center">    <img style="align-content: center;  width: 30%; height:70%" src="assets/imgs/4Denuncia/museum.gif"> <br>\n                            \n                             <strong>Juzgado de Paz</strong> \n                            </div>\n\n                             </ion-row>\n\n                             <p text-center style=" color:#0B3954"><strong>Si quieres hacer una denuncia por otras violencias como violencia sexual, violencia intrafamiliar o femicidio, que son delitos según el Código Penal hondureño, estas se pueden interponer en: </strong> </p>\n\n \n                             <br> <ion-row align-items-center padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; \n    \n                             -webkit-box-shadow: 0 10px 6px -6px #777;\n                                -moz-box-shadow: 0 10px 6px -6px #777;\n                                     box-shadow: 0 10px 6px -6px #777; " >\n                              \n                               <div style="text-align: center">   <img style="display: inline-block; width: 30%; height:30%" src="assets/imgs/4Denuncia/library.gif" ></div>  \n                               \n                                    <p class="alineado">	<strong>Ministerio Público. Dentro de este Ministerio, en varios lugares del país, existe el Módulo de Atención Integral Especializado (MAIE), donde puedes denunciar.</strong></p>\n                                 \n                                  </ion-row>\n\n                                     <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; \n    \n                                     -webkit-box-shadow: 0 10px 6px -6px #777;\n                                        -moz-box-shadow: 0 10px 6px -6px #777;\n                                             box-shadow: 0 10px 6px -6px #777; " >\n                                        \n                                        <div style="text-align: center">      <img style="align-content: center;  width: 30%; height:70%" src="assets/imgs/4Denuncia/post-office.gif"><br>\n                                       \n                                             <strong>Posta Policial</strong></div>\n                                          \n                                            </ion-row>\n\n                                            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; \n    \n                                            -webkit-box-shadow: 0 10px 6px -6px #777;\n                                               -moz-box-shadow: 0 10px 6px -6px #777;\n                                                    box-shadow: 0 10px 6px -6px #777; " >\n                                              \n                                              \n                                                <div style="text-align: center">      <img style="align-content: center; width: 30%; height:70%" src="assets/imgs/4Denuncia/house-5.gif"><br>    \n                                              	<strong>Dirección Policial de Investigación (DPI).</strong> </div>\n                                                  \n                                     \n                                                    </ion-row>\n\n                                     \n \n               \n                   </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\rutas-atencion\rutas-atencion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RutasAtencionPage);
    return RutasAtencionPage;
}());

//# sourceMappingURL=rutas-atencion.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
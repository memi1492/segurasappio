webpackJsonp([31],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsejosSeguridadPageModule", function() { return ConsejosSeguridadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consejos_seguridad__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsejosSeguridadPageModule = /** @class */ (function () {
    function ConsejosSeguridadPageModule() {
    }
    ConsejosSeguridadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__consejos_seguridad__["a" /* ConsejosSeguridadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__consejos_seguridad__["a" /* ConsejosSeguridadPage */]),
            ],
        })
    ], ConsejosSeguridadPageModule);
    return ConsejosSeguridadPageModule;
}());

//# sourceMappingURL=consejos-seguridad.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosSeguridadPage; });
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
 * Generated class for the ConsejosSeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsejosSeguridadPage = /** @class */ (function () {
    function ConsejosSeguridadPage(navParams, view, navCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
    }
    ConsejosSeguridadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsejosSeguridadPage');
    };
    ConsejosSeguridadPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], ConsejosSeguridadPage.prototype, "slides", void 0);
    ConsejosSeguridadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consejos-seguridad',template:/*ion-inline-start:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\consejos-seguridad\consejos-seguridad.html"*/'<!--\n\n  Generated template for the CicloViolenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Violencia Doméstica</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Qué hacer ante una amenaza de violencia?</strong> </h2>\n\n      <p style="text-align: center; color: #FF6663; font-size: 16px;">\n\n         <strong> ­«­¡­­Recuerda que no estás sola y que no debes aceptar la violencia! »</strong>\n\n        </p>    \n\n        <ion-grid>\n\n            <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n\n         <ion-col >\n\n               <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/card.gif" >\n\n             </ion-col>\n\n             <ion-col >\n\n               <p style="text-align:center">Guarda dinero, copias de tus llaves y documentos importantes en un lugar accesible o con alguien de confianza.</p>\n\n             </ion-col>\n\n             </ion-row>\n\n         \n\n             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n\n                 <ion-col >\n\n                     <p style="text-align:center">Si una discusión se hace inevitable asegúrate de estar en un lugar que tenga una salida o tener acceso a un teléfono.</p> \n\n                     </ion-col>\n\n                     <ion-col >\n\n                         <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/hand.gif">\n\n                     </ion-col>\n\n                     </ion-row>\n\n \n\n                     <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #0B3954;" >\n\n                         <ion-col >\n\n                               <img style="align-content: center;  width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/house.gif">\n\n                             </ion-col>\n\n                             <ion-col >\n\n                               <p style="text-align:center">Siempre ten una segunda opción a donde ir (Incluyendo un refugio temporal).</p>\n\n                             </ion-col>\n\n                             </ion-row>\n\n \n\n                             <br> <ion-row padding-top  style="color: black; background-color: white; text-align: center; padding-top: 5px ; border: 10px solid #23B4B7;" >\n\n                                 <ion-col >\n\n                                     <p style="text-align:center">Identifica a una vecina/o a quién puedas confiarle lo que está sucediendo y pídele que llame a la policía en caso de emergencia.</p> \n\n                                     </ion-col>\n\n                                     <ion-col >\n\n                                         <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/help.gif">\n\n                                     </ion-col>\n\n                                     </ion-row>\n\n \n\n               \n\n                   </ion-grid>\n\n      <!--  <ion-grid>\n\n            <ion-row padding-top>\n\n                \n\n              <div  style="background-color: white; text-align: center; padding-top: 5px ; border: 15px solid #23B4B7;" ><p style="padding:5px;">Guarda dinero, copias de tus llaves y documentos importantes en un lugar accesible o con alguien de confianza.</p>\n\n                  <img   src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/card.gif" style=" width: 20%; height: 30%" >\n\n             </div>\n\n            </ion-row>\n\n        \n\n          <ion-row padding-top>\n\n              <div  style="background-color: white; text-align: center; padding-top: 5px ; border: 15px solid #0B3954;" ><p style="padding:5px;">Si una discusión se hace inevitable asegúrate de estar en un lugar que tenga una salida o tener acceso a un teléfono para usar esta aplicación.</p>\n\n                  <img   src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/hand.gif" style=" width: 20%; height: 30%" >\n\n             </div>\n\n              </ion-row>\n\n\n\n            <ion-row padding-top>\n\n                <div  style="background-color: white; text-align: center; padding-top: 5px ; border: 15px solid #23B4B7;" ><p style="padding:5px;">Siempre ten una segunda opción a donde ir (Incluyendo un refugio temporal)</p>\n\n                  <img   src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/house.gif" style=" width: 20%; height: 30%" >\n\n             </div>\n\n                </ion-row>\n\n\n\n              <ion-row padding-top>\n\n                  <div  style="background-color: white; text-align: center; padding-top: 5px ; border: 15px solid #0B3954;" ><p style="padding:5px;">Identifica a una vecina/o a quién puedas confiarle lo que está sucediendo y pídele que llame a la policía en caso de emergencia.</p>\n\n                    <img   src="assets/imgs/1ViolenciaDomestica/2ConsejosSeguridad/help.gif" style=" width: 20%; height: 30%" >\n\n               </div>\n\n                  </ion-row>\n\n                  </ion-grid>\n\n                -->\n\n\n\n\n\n\n\n\n\n      </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Jossué\Documents\Trabajos\UNFPASEGURAS\segurasappio\src\pages\consejos-seguridad\consejos-seguridad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ConsejosSeguridadPage);
    return ConsejosSeguridadPage;
}());

//# sourceMappingURL=consejos-seguridad.js.map

/***/ })

});
//# sourceMappingURL=31.js.map
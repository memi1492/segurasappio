webpackJsonp([17],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificaPageModule", function() { return IdentificaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identifica__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdentificaPageModule = /** @class */ (function () {
    function IdentificaPageModule() {
    }
    IdentificaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identifica__["a" /* IdentificaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identifica__["a" /* IdentificaPage */]),
            ],
        })
    ], IdentificaPageModule);
    return IdentificaPageModule;
}());

//# sourceMappingURL=identifica.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentificaPage; });
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
 * Generated class for the IdentificaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdentificaPage = /** @class */ (function () {
    function IdentificaPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
    }
    IdentificaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdentificaPage');
    };
    IdentificaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    IdentificaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identifica',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\identifica\identifica.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Violencia Sexual</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>­Violencia Sexual </strong> <br>\n\n      <span style="text-align: center; color: #23B4B7; font-size: 16px;">\n\n         <strong> ¡Identificala!</strong></span>\n\n        </h2> \n\n\n\n      <ion-grid>\n\n          <br> <ion-row padding-top  class="estilo">\n\n       <ion-col >\n\n             <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/no.gif">\n\n           </ion-col>\n\n           <ion-col >\n\n             <p style="text-align:center">Estas sufriendo violencia sexual cuando eres victima de cualquier acto sexual que no desees.</p>\n\n           </ion-col>\n\n           </ion-row>\n\n       \n\n           <br> <ion-row padding-top  class="estilo2" >\n\n               <ion-col >\n\n                   <p style="text-align:center">La violencia sexual incluye el acoso sexual (manoseo, propuestas sexuales, miradas, piropos no deseados) y la violación sexual.</p> \n\n                   </ion-col>\n\n                   <ion-col >\n\n                       <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/chat.gif">\n\n                   </ion-col>\n\n                   </ion-row>\n\n\n\n                   <br> <ion-row padding-top  class="estilo" >\n\n                       <ion-col >\n\n                             <img style="align-content: center; width: 80%; height:80%" src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/target.gif">\n\n                           </ion-col>\n\n                           <ion-col >\n\n                             <p style="text-align:center">Puede darse a través de violencia, de una amenaza grave, aprovechándose de tu situación o de tu incapacidad de resistir.</p>\n\n                           </ion-col>\n\n                           </ion-row>\n\n\n\n             \n\n                 </ion-grid>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n\n\n\n\n\n      </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\identifica\identifica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IdentificaPage);
    return IdentificaPage;
}());

//# sourceMappingURL=identifica.js.map

/***/ })

});
//# sourceMappingURL=17.js.map
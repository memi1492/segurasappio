webpackJsonp([15],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslasPageModule", function() { return IslasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__islas__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IslasPageModule = /** @class */ (function () {
    function IslasPageModule() {
    }
    IslasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__islas__["a" /* IslasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__islas__["a" /* IslasPage */]),
            ],
        })
    ], IslasPageModule);
    return IslasPageModule;
}());

//# sourceMappingURL=islas.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslasPage; });
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
 * Generated class for the IslasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IslasPage = /** @class */ (function () {
    function IslasPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    IslasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IslasPage');
    };
    IslasPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    IslasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-islas',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\islas\islas.html"*/'<!--\n  Generated template for the LaCeibaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Islas de la Bahía</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Alcaldía Municipal de Roatán	</strong>	</ion-card-header><ion-card-content>	Coxen Hole, Calle Principal	<br>	 <strong> Teléfono(s):</strong>	<a href="tel:2445-1299">2445-1299</a>	</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público	</strong>	</ion-card-header><ion-card-content>	Coxen Hole, edificio Cooper, frente a Ferretería Serrano, 2 y 3 plantas	<br>	 <strong> Teléfono(s):</strong>	<a href="tel:2445-1869">2445-1869</a>,<a href="tel:2445-1867">2445-1867</a>	</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Hospital de Roatán	</strong>	</ion-card-header><ion-card-content>	Coxen Hole, Barrio El Ticket, calle principal	<br>	 <strong> Teléfono(s):</strong>	<a href="tel:2445-1499">2445-1499</a>,<a href="tel:2445-2496">2445-2496</a>	</ion-card-content>	</ion-card>\n    \n\n\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\islas\islas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], IslasPage);
    return IslasPage;
}());

//# sourceMappingURL=islas.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
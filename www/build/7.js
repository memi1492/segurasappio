webpackJsonp([7],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlanchoPageModule", function() { return OlanchoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__olancho__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OlanchoPageModule = /** @class */ (function () {
    function OlanchoPageModule() {
    }
    OlanchoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__olancho__["a" /* OlanchoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__olancho__["a" /* OlanchoPage */]),
            ],
        })
    ], OlanchoPageModule);
    return OlanchoPageModule;
}());

//# sourceMappingURL=olancho.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlanchoPage; });
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
 * Generated class for the OlanchoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OlanchoPage = /** @class */ (function () {
    function OlanchoPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    OlanchoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OlanchoPage');
    };
    OlanchoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    OlanchoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-olancho',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\olancho\olancho.html"*/'<!--\n  Generated template for the OlanchoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Olancho</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    \n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Fiscalía de la Mujer	</strong>	</ion-card-header><ion-card-content>	Barrio La Hoya, antiguo local del Hotel Colonial, Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-2143">2785-2143		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público Juticalpa	</strong>	</ion-card-header><ion-card-content>	Barrio La Hoya, antiguo local del Hotel Colonial, Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-2143">2785-2143		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público Juticalpa	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-1041">2785-1041		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público Catacamas	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2799-4031">2799-4031		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong> Juzgado de Paz y Penal 	</strong>	</ion-card-header><ion-card-content>	Col. Lempira. Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-1176">2785-1176	 	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Juzgado Civil</strong>	</ion-card-header><ion-card-content>	Barrio El Centro, una cuadra antes de llegar al Parque Central, Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-1377">2785-1377	 	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Juzgado Penal	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-2319">2785-2319	 	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Hospital San Francisco	</strong>	</ion-card-header><ion-card-content>	Barrio El Campo, Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:9988-3677	">9988-3677		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Policia Nacional Preventiva	</strong>	</ion-card-header><ion-card-content>	Barrio Belén, Juticalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-2054">2785-2054		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>		</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2785-2110">2785-2110		</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Consejería de Familia - Olancho 	</strong>	</ion-card-header><ion-card-content>	Hospital Regional San Francisco, Juticalpa Olancho	<br>	 <strong> Teléfono(s):</strong>N/A	</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Acompañamiento Instituto Nacional de la Mujer INAM - Juticalpa	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:9818-1834	">9818-1834		</a>	<a href="tel:9818-1835\n      ">9818-1835	</a>, <a href="tel:8928-5618 ">8928-5618  </a>, <a href="tel: 9920-2968	"> 9920-2968		</a>, <a href="tel:9920-2969	">9920-2969		</a>,<a href="tel:9807-8444	">9807-8444		</a>,<a href="tel:8869-1327	">8869-1327		</a>,<a href="tel:8869-1328	">8869-1328		</a>,<a href="tel:9548-1648	">9548-1648		</a>,<a href="tel:9486-4363	">9486-4363		</a>,<a href="tel:9548-1648	">9548-1648		</a>,<a href="tel:9486-4364	">9486-4364		</a>,<a href="tel:9807-8444	">9807-8444		</a>	</ion-card-content>	</ion-card>\n    \n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\olancho\olancho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], OlanchoPage);
    return OlanchoPage;
}());

//# sourceMappingURL=olancho.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
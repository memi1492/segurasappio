webpackJsonp([9],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelnacionalPageModule", function() { return NivelnacionalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nivelnacional__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NivelnacionalPageModule = /** @class */ (function () {
    function NivelnacionalPageModule() {
    }
    NivelnacionalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nivelnacional__["a" /* NivelnacionalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nivelnacional__["a" /* NivelnacionalPage */]),
            ],
        })
    ], NivelnacionalPageModule);
    return NivelnacionalPageModule;
}());

//# sourceMappingURL=nivelnacional.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelnacionalPage; });
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
 * Generated class for the NivelnacionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NivelnacionalPage = /** @class */ (function () {
    function NivelnacionalPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    NivelnacionalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NivelnacionalPage');
    };
    NivelnacionalPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    NivelnacionalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivelnacional',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\nivelnacional\nivelnacional.html"*/'<!--\n  Generated template for the NivelnacionalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-title >Nivel Nacional</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Médicos Sin Fronteras (Unidad de Servicios Prioritarios)	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	9922-7181	">	9922-7181	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Visitación Padilla	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	9982-2231	">	9982-2231	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Carlos Del Cid	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	3341-6131	">	3341-6131	</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	UDIMUF (Unidad de Desarrollo de la Mujer y Familia) <br>  </strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	8751-0056	">	8751-0056</a> 		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Calidad de Vida <br>  </strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	8941-2552	">	8941-2552</a>, <a href="tel:	8941-2610	">	8941-2610</a>, <a href="tel:	8941-2667	">	8941-2667</a>			</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ecuménicas por el Derecho a Decidir <br>  </strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:	3395-8035	">	3395-8035</a>, <a href="tel:	9507-5026	">	9507-5026</a>, <a href="tel:	3157-9167	">	3157-9167</a>		</ion-card-content>	</ion-card>\n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	CDM Centro de Derechos de la Mujer <br>  </strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:3397-8290	">	3397-8290</a>, <a href="tel:	9752-1332	">	9752-1332</a>	<a href="tel:3346-1931	">	3346-1931</a>, <a href="tel:	3372-5372	">	3372-5372</a>	<a href="9752-1332	">	9752-1332</a>		</ion-card-content>	</ion-card>\n\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\nivelnacional\nivelnacional.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NivelnacionalPage);
    return NivelnacionalPage;
}());

//# sourceMappingURL=nivelnacional.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
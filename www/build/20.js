webpackJsonp([20],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElParaisoPageModule", function() { return ElParaisoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__el_paraiso__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElParaisoPageModule = /** @class */ (function () {
    function ElParaisoPageModule() {
    }
    ElParaisoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__el_paraiso__["a" /* ElParaisoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__el_paraiso__["a" /* ElParaisoPage */]),
            ],
        })
    ], ElParaisoPageModule);
    return ElParaisoPageModule;
}());

//# sourceMappingURL=el-paraiso.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElParaisoPage; });
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
 * Generated class for the ElParaisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElParaisoPage = /** @class */ (function () {
    function ElParaisoPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    ElParaisoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElParaisoPage');
    };
    ElParaisoPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    ElParaisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-el-paraiso',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\el-paraiso\el-paraiso.html"*/'<!--\n  Generated template for the ElParaisoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>El Paraíso</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Alcaldía Municipal	</strong>	</ion-card-header><ion-card-content>	El Paraíso, Barrio El Centro, frente al Parque Ramón Rosa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2793-4179	">2793-4179		</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público Danlí	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2052">2763-2052		</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Ministerio Público Yuscarán	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:2793-7442">2793-7442		</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Fiscalía de la Niñez	</strong>	</ion-card-header><ion-card-content>	Danlí, Barrio el Centro, a una cuadra del Parque Central 	<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2963">2763-2963</a>	, <a href="tel:2763-2144">2763-2144</a>			</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Juzgado II de Letras	</strong>	</ion-card-header><ion-card-content>	Danlí, Barrio El Zarzal, Carretera Panamericana hacia Tegucigalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2063">2763-2063		</a>, <a href="tel:2763-2008">2763-2008	</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Juzgado de Paz Criminal	</strong>	</ion-card-header><ion-card-content>	Danlí, Barrio El Zarzal, Carretera Panamericana hacia Tegucigalpa	<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2063	">2763-2063		</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Policia Nacional Preventiva	</strong>	</ion-card-header><ion-card-content>	Danlí, Barrio Buenos Aires Arriba, frente a Pulpería La Estrella	<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2739">2763-2739		</a>, <a href="tel:2763-2330	">2763-2330			</a>	</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Hospital Gabriela Alvarado	</strong>	</ion-card-header><ion-card-content>	Danlí, San Marcos Abajo, frente a la UNATEC regional UNAH	<br>	 <strong> Teléfono(s):</strong><a href="tel:3323-0086">3323-0086	 	</a>(Dr. Quintero)		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Consejería de Familia Danlí, El  Paraíso 	</strong>	</ion-card-header><ion-card-content>	Danli, Barrio Pueblo nuevo por ASHOMPLAFA , ES Hospital Gabriela Alvarado.	<br>	 <strong> Teléfono(s):</strong><a href="tel:2763-2318">2763-2318		</a>		</ion-card-content>	</ion-card>\n<ion-card>	 <ion-card-header style="color: #0B3954; white-space: normal;">	<strong>	Apoyo Psicológico - El Paraíso	</strong>	</ion-card-header><ion-card-content>		<br>	 <strong> Teléfono(s):</strong><a href="tel:3280-0692">3280-0692		</a>		</ion-card-content>	</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\el-paraiso\el-paraiso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ElParaisoPage);
    return ElParaisoPage;
}());

//# sourceMappingURL=el-paraiso.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
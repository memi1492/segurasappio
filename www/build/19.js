webpackJsonp([19],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranciscoMPageModule", function() { return FranciscoMPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__francisco_m__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FranciscoMPageModule = /** @class */ (function () {
    function FranciscoMPageModule() {
    }
    FranciscoMPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__francisco_m__["a" /* FranciscoMPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__francisco_m__["a" /* FranciscoMPage */]),
            ],
        })
    ], FranciscoMPageModule);
    return FranciscoMPageModule;
}());

//# sourceMappingURL=francisco-m.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranciscoMPage; });
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
 * Generated class for the FranciscoMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FranciscoMPage = /** @class */ (function () {
    function FranciscoMPage(navParams, view, navCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
    }
    FranciscoMPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FranciscoMPage');
    };
    FranciscoMPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    FranciscoMPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-francisco-m',template:/*ion-inline-start:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\francisco-m\francisco-m.html"*/'<!--\n\n  Generated template for the FranciscoMPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Francisco Morazán</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="closemodal()">Atrás</button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Centro Integrado de Justicia</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:2237-6830">2237-6830</a>,<a href="tel:2237-6908">2237-6908</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Unidad de Género del Poder Judicial</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:9548-9170">9548-9170</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Fiscalía de Protección de la Mujer</strong></ion-card-header><ion-card-content>Edificio Ministerio Público,Lomas del Guijarro, Tegucigalpa<br><strong> Teléfono(s):</strong><a href="tel:2237-6830">2237-6830</a>,<a href="tel:2237-6908">2237-6908</a>,<a href="tel:2221-3099">2221-3099</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Juzgado Contra la Violencia Doméstica</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:2240-6237">2240-6237</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Juzgado de Letras Penal (La Granja) </strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:2225-3928">2225-3928</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Instituto Nacional de la Mujer INAM</strong></ion-card-header><ion-card-content>Comayaguela, Barrio Concepción, 13 y 14 calle, entres 4 y 5 avenida, edificio principal de Banadesa, 7 piso<br><strong> Teléfono(s):</strong><a href="tel:2220-0906">2220-0906</a>,<a href="tel:2220-0852">2220-0852</a>,<a href="tel:2220-0902">2220-0902</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Dirección de Niñez, Adolescencia y Familia DINAF</strong></ion-card-header><ion-card-content>Tegucigalpa, Colonia Humuya<br><strong> Teléfono(s):</strong><a href="tel:2239-9605">2239-9605</a> ,<a href="tel:2239-7978">2239-7978</a>,<a href="tel:2239-8029">2239-8029</a> ext.131</ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Hospital San Felipe</strong></ion-card-header><ion-card-content>Tegucigalpa, Boulevar Los Próceres,<br><strong> Teléfono(s):</strong><a href="tel:2236-7698">2236-7698</a>,<a href="tel:2236-7005">2236-7005</a>,<a href="tel:9905-2819">9905-2819</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Programa Presidencial Ciudad Mujer</strong></ion-card-header><ion-card-content>Tegucigalpa, Colonia Kennedy  <br><strong> Teléfono(s):</strong><a href="tel:9739-6698">9739-66988</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF.  Alonso Suazo</strong></ion-card-header><ion-card-content>Bo. La Hoya, Edif. Ssstrería Moncada, callejón a la derecha del punto de taxis UNAH<br><strong> Teléfono(s):</strong><a href="tel:2238-9379">2238-9379</a>,<a href="tel:9595-0762">9595-0762</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF. El Manchen</strong></ion-card-header><ion-card-content>CIS Dr. Manuel Larios. Bo. El manchen 2 cuadras hacia abajo de la posta policial<br><strong> Teléfono(s):</strong><a href="tel:2222-1760">2222-1760</a>,<a href="tel:2238-9379">2238-9379</a>, <a href="tel:9990-2902">9990-2902</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF. Las Crucitas</strong></ion-card-header><ion-card-content>CIS. Las Crucitas Bo. Las Crucitas, 2 cuadras hacia abajo de la posta policial, frente a cafetería Leo.<br><strong> Teléfono(s):</strong><a href="tel:2223-8661">2223-8661</a>,<a href="tel:3266-1914">3266-1914</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF.  El Bosque</strong></ion-card-header><ion-card-content>CIS. Dr. Carlos Romero. Bo. El Bosque, avenida  España, ½ cuadra al norte de Escuela 14 de julio.<br><strong> Teléfono(s):</strong><a href="tel:2222-1756">2222-1756</a>,<a href="tel:3200-7309">3200-7309</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF.  Los Pinos</strong></ion-card-header><ion-card-content>CIS. San Benito.  col. Los Pinos, calle principal, 1 cuadra hacia arriba de la iglesia Mormona.<br><strong> Teléfono(s):</strong><a href="tel:9970-0296">9970-0296</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CF.  Villa Adela</strong></ion-card-header><ion-card-content>CIS. Dr. Odilón Renderos. Bo. Villa Adela, calle principal, 1/2 cuadra antes del IHSS La granja, frente hotel California.<br><strong> Teléfono(s):</strong><a href="tel:2225-0658">2225-0658</a>,<a href="tel:9695-5701">9695-5701</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Centro de Derechos de las Mujeres</strong></ion-card-header><ion-card-content>Col. Lara Norte, Calle Lara, No.834,Apdo. postal 4562,Tegucigalpa, Honduras<br><strong> Teléfono(s):</strong><a href="tel:2221-0459">2221-0459</a>,<a href="tel:2221-0657">2221-0657</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Hospital Psiquiátrico Santa Rosita</strong></ion-card-header><ion-card-content>Valle de Amarateca, Francisco Morazán <br><strong> Teléfono(s):</strong><a href="tel:9966-0928">9966-0928</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>CIS Alonso Suazo </strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:9849-6142">9849-6142</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Acompañamiento Instituto Nacional de la Mujer INAM - Tegucigalpa</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:9863-6096">9863-6096</a>,<a href="tel:9801-2882">9801-2882</a>,<a href="tel:9566-7272">9566-7272</a>,<a href="tel:9651-1157">9651-1157</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Apoyo Psicológico - Francisco Morazán</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:9584-3624">9584-3624</a>,<a href="tel:9896-1220">9896-1220</a>,<a href="tel:9478-9856">9478-9856</a>,<a href="tel:3200-7309">3200-7309</a>,<a href="tel:9582-4676">9582-4676</a>,<a href="tel:9990-2902">9990-2902</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Centro de Estudios de la Mujer Honduras CEM-H - Tegucigalpa</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:9546-2260">9546-2260</a></ion-card-content></ion-card>\n\n<ion-card><ion-card-header style="color: #0B3954; white-space: normal;"><strong>Ministerio Público Talanga</strong></ion-card-header><ion-card-content><br><strong> Teléfono(s):</strong><a href="tel:2775-7486">2775-7486</a></ion-card-content></ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Amy\Desktop\Proyectos\segurasappio\src\pages\francisco-m\francisco-m.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FranciscoMPage);
    return FranciscoMPage;
}());

//# sourceMappingURL=francisco-m.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
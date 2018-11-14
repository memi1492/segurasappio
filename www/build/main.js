webpackJsonp([40],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosPage; });
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
 * Generated class for the ConsejosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsejosPage = /** @class */ (function () {
    function ConsejosPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    ConsejosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsejosPage');
    };
    ConsejosPage.prototype.medidas = function () {
        var Medidas = this.modal.create('MedidasPage');
        Medidas.present();
    };
    ConsejosPage.prototype.proceso = function () {
        var Proceso = this.modal.create('ProcesoPage');
        Proceso.present();
    };
    ConsejosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consejos',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\consejos\consejos.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Consejos</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding >\n\n \n          <div>&nbsp;</div>      \n             \n          \n          <div (click)="medidas()" class="estilodeboton" ><p style="font-size: 20px;"><strong>Medidas de Seguridad</strong></p>\n            <img   src="assets/imgs/3Violaciones/lock.gif" style="width: 20%; height: 20%;">\n            <p>Recuerda estar atenta y sigue estos consejos</p>\n          </div>  \n          \n          <div>&nbsp;</div>\n          <div>&nbsp;</div>\n          <div>&nbsp;</div>\n             \n          <div (click)="proceso()" class="estilodeboton" ><p style="font-size: 20px;"><strong>¿Qué hacer en caso de sufrir una violación?</strong></p>\n            <img   src="assets/imgs/3Violaciones/ove.gif" style="width: 20%; height: 20%;">\n            <p>¡No te quedes callada y busca ayuda!</p>\n          </div>  \n              \n              \n              \n              \n          </ion-content>\n\n\n\n    <!--\n      \n   <div>&nbsp;</div>\n         <div>&nbsp;</div>\n      <ion-card>\n   \n    <ion-card-content style="height: 100%">\n        <div (click)="medidas()" style="background-color: white; text-align: center; padding-top: 5px; padding-bottom: 5px;" ><p>Medidas de Seguridad</p>\n          <img  src="assets/imgs/3Violaciones/lock.gif" style="width: 20%; height: 20%; vertical-align: middle "> <br>\n          <p>Recuerda estar atenta y sigue estos consejos</p>\n        </div>  \n    </ion-card-content>\n  </ion-card>\n       <div>&nbsp;</div>\n         <div>&nbsp;</div>\n     \n      <ion-card>\n          <ion-card-content style="height: 100%">\n              <div (click)="proceso()" style="background-color: white; text-align: center; padding-top: 5px; padding-bottom: 5px;" ><p>¿Qué hacer en caso de sufrir una violación?</p>\n                <img  src="assets/imgs/3Violaciones/ove.gif" style="width: 20%; height: 20%; vertical-align: middle "> <br>\n                <p>¡No te quedes callada y busca ayuda!</p>\n              </div>  \n          </ion-card-content>\n  </ion-card>\n      \n        \n      \n     \n     \n  </ion-content>-->\n  '/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\consejos\consejos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ConsejosPage);
    return ConsejosPage;
}());

//# sourceMappingURL=consejos.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaPage; });
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
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DenunciaPage = /** @class */ (function () {
    function DenunciaPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    DenunciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DenunciaPage');
    };
    DenunciaPage.prototype.DenunciasDef = function () {
        var DenunciasDef = this.modal.create('DenunciasDefPage');
        DenunciasDef.present();
    };
    DenunciaPage.prototype.RutasAtencion = function () {
        var RutasAtencion = this.modal.create('RutasAtencionPage');
        RutasAtencion.present();
    };
    DenunciaPage.prototype.PasosDenuncia = function () {
        var PasosDenuncia = this.modal.create('PasosDenunciaPage');
        PasosDenuncia.present();
    };
    DenunciaPage.prototype.directorio = function () {
        var directorio = this.modal.create('DirectorioPage');
        directorio.present();
    };
    DenunciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-denuncia',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\denuncia\denuncia.html"*/'<!--\n  Generated template for the DenunciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Denuncia</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding >\n      <h3 text-center style="padding-top: 10px; color:#0B3954"><strong>Conoce los pasos que debes seguir para denunciar una agresión</strong> </h3>\n     \n      \n      <div (click)="DenunciasDef()" class="estilodeboton"><p style="font-size: 20px;"><strong>¿Quieres denunciar esta violencia para acceder a la justicia? </strong></p>\n        <img   src="assets/imgs/law.gif" style="width: 25%; height: 25%;">\n        <p>Veamos algunas cosas importantes que debes saber</p>\n   </div>\n      \n  \n  \n  <div>&nbsp;</div>\n   \n     <div (click)="RutasAtencion()" class="estilodeboton"><p style="font-size: 20px;"><strong>Rutas de atención de las denuncias</strong></p>\n       <img   src="assets/imgs/guia.gif" style="width: 25%; height: 25%;">\n       <p>¿Dónde puedes acudir?</p>\n  </div>\n  \n       \n      <div>&nbsp;</div>\n     \n     <div (click)="PasosDenuncia()" class="estilodeboton" ><p style="font-size: 20px;"><strong>¿Qué sigue cuando interpones la denuncia por violencia doméstica?  </strong></p>\n         <img  src="assets/imgs/shield.gif" style="width: 25%; height: 25%;">\n         <p>Conoce más del sistema</p>\n   </div>\n\n   <div>&nbsp;</div>\n     \n   <div (click)="directorio()" class="estilodeboton" ><p style="font-size: 20px;"><strong>¿Adonde puedes buscar ayuda en Honduras?  </strong></p>\n       <img  src="assets/imgs/directorio.gif" style="width: 25%; height: 25%;">\n       <p>Ayuda cerca de tí</p>\n </div>\n     \n <p style="text-align: center; color: #FF6663; font-size: 16px;">\n    <strong> ­«­Luego que has reconocido que te has visto sometida a algún tipo de violencia:<br> ¡Es tiempo de actuar! »</strong>\n   </p>    \n      \n      \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\denuncia\denuncia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DenunciaPage);
    return DenunciaPage;
}());

//# sourceMappingURL=denuncia.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.CicloViolencia = function () {
        var CicloViolencia = this.modal.create('CicloViolenciaPage');
        CicloViolencia.present();
    };
    InfoPage.prototype.ConsejosSeguridad = function () {
        var ConsejosSeguridad = this.modal.create('ConsejosSeguridadPage');
        ConsejosSeguridad.present();
    };
    InfoPage.prototype.definicion = function () {
        var Definicion = this.modal.create('DefinicionPage');
        Definicion.present();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\info\info.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Violencia Doméstica</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    \n    <div (click)="definicion()" class="estilodeboton"><p style="font-size: 20px;"><strong>¿Comó saber si sufres violencia doméstica?</strong></p>\n      <img   src="assets/imgs/1ViolenciaDomestica/warnmodif.gif" style="width: 25%; height: 25%;">\n      <p>Infórmate</p>\n </div>\n    \n\n\n<div>&nbsp;</div>\n \n   <div (click)="CicloViolencia()" class="estilodeboton"><p style="font-size: 20px;"><strong>Ciclo de Violencia</strong></p>\n     <img   src="assets/imgs/1ViolenciaDomestica/rotate.gif" style="width: 20%; height: 20%;">\n     <p>¡Rompe el Ciclo!</p>\n</div>\n\n     \n    <div>&nbsp;</div>\n   \n   <div (click)="ConsejosSeguridad()" class="estilodeboton" ><p style="font-size: 20px;"><strong>Consejos de Seguridad </strong></p>\n       <img  src="assets/imgs/1ViolenciaDomestica/think.gif" style="width: 20%; height: 20%;">\n        <p>Conoce lo que puedes hacer</p>\n </div>\n   \n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info2Page; });
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
 * Generated class for the Info2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Info2Page = /** @class */ (function () {
    function Info2Page(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    Info2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Info2Page');
    };
    Info2Page.prototype.Identificala = function () {
        var Identificala = this.modal.create('IdentificaPage');
        Identificala.present();
    };
    Info2Page.prototype.Ninos = function () {
        var Ninos = this.modal.create('NinosPage');
        Ninos.present();
    };
    Info2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info2',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\info2\info2.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Violencia Sexual</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    \n<div>&nbsp;</div>\n<div>&nbsp;</div>      \n   \n\n<div (click)="Identificala()" class="estilodeboton" ><p><strong>¿Sabes qué es la violencia sexual?</strong></p>\n  <img   src="assets/imgs/1ViolenciaDomestica/girl.gif" style="width: 20%; height: 20%;">\n  <p>¡Identificala!</p>\n</div>  \n\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n<div>&nbsp;</div>\n   \n<div (click)="Ninos()" class="estilodeboton" ><p><strong>Protejamos a los niños y adolescentes</strong></p>\n  <img   src="assets/imgs/1ViolenciaDomestica/cipota.gif" style="width: 20%; height: 20%;">\n  <p>Evitemos la violencia sexual</p>\n</div>  \n    \n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\info2\info2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Info2Page);
    return Info2Page;
}());

//# sourceMappingURL=info2.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info2_info2__ = __webpack_require__(105);
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
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPlacePage = /** @class */ (function () {
    function NewPlacePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewPlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPlacePage');
    };
    NewPlacePage.prototype.domestica = function () {
        console.log("InfoPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */]);
    };
    NewPlacePage.prototype.sexual = function () {
        console.log("Info2Page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info2_info2__["a" /* Info2Page */]);
    };
    NewPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-place',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\new-place\new-place.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Violencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding >\n\n  <div>&nbsp;</div>\n\n  \n\n    <div (click)="domestica()" class="estilodeboton" ><p style="font-size: 20px;"><strong>Violencia Doméstica</strong></p>\n      <img   src="assets/imgs/broken.gif" style="width: 20%; height: 20%; padding-bottom: 20px;">\n      <p>¡Tú y tú familia valen mucho!</p>\n </div>\n\n <div>&nbsp;</div>\n\n <div>&nbsp;</div>\n\n <div (click)="sexual()" class="estilodeboton" ><p style="font-size: 20px;"><strong>Violencia Sexual</strong></p>\n  <img   src="assets/imgs/femenine.gif" style="width: 20%; height: 20%; padding-bottom: 20px; ">\n  <p>¡No permitas el abuso!</p>\n</div>\n    \n      \n    \n   \n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\new-place\new-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewPlacePage);
    return NewPlacePage;
}());

//# sourceMappingURL=new-place.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__si_si__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__raravez_raravez__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aveces_aveces__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__no_no__ = __webpack_require__(209);
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navParams, view, navCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
        this.csi = 0;
        this.cav = 0;
        this.crv = 0;
        this.cno = 0;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    TestPage.prototype.fsi = function () {
        this.csi++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        console.log(this.csi);
    };
    TestPage.prototype.faveces = function () {
        this.cav++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    TestPage.prototype.fraravez = function () {
        this.crv++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    TestPage.prototype.fno = function () {
        this.cno++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    TestPage.prototype.fsifinal = function () {
        this.csi++;
        this.fcomparadora();
    };
    TestPage.prototype.fcomparadora = function () {
        if (this.csi >= this.cav && this.csi >= this.crv && this.csi >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__si_si__["a" /* SiPage */]);
        }
        else if (this.cav >= this.csi && this.cav >= this.crv && this.cav >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aveces_aveces__["a" /* AvecesPage */]);
        }
        else if (this.crv >= this.csi && this.crv >= this.cav && this.crv >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__raravez_raravez__["a" /* RaravezPage */]);
        }
        else if (this.cno >= this.csi && this.cno >= this.cav && this.cno >= this.crv) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__no_no__["a" /* NoPage */]);
        }
    };
    TestPage.prototype.favecesfinal = function () {
        this.cav++;
        this.fcomparadora();
    };
    TestPage.prototype.fraravezfinal = function () {
        this.crv++;
        this.fcomparadora();
    };
    TestPage.prototype.fnofinal = function () {
        this.cno++;
        this.fcomparadora();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]) === "function" && _a || Object)
    ], TestPage.prototype, "slides", void 0);
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\test\test.html"*/'<!--\n\n  Generated template for the TestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Test de Violencia</ion-title>\n\n      <ion-buttons end>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding style="background-color: white">\n\n\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n\n        \n\n        <ion-slide style="background-color: #BFD7EA; color:  #23B4B7">\n\n            <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Crees que estas sufriendo de violencia? </strong> </h2>  \n\n           <div style="text-align: center; " ><img   src="assets/imgs/unknown.gif" style="padding-bottom: 5px; width: 40%; height: 40%" ></div> \n\n\n\n            <p style="text-align: center; color: #FF6663;"><strong>Responde las siguientes preguntas y averigua \n\n            </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n\n          \n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n\n\n<img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/1.png">\n\n\n\n              <p>1.	¿Te acusa de infidelidad o de que actúas en forma sospechosa? </p>\n\n       \n\n              <button ion-button block (click)="fsi()">Si</button>\n\n              <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n              <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n              <button ion-button block color="dark" (click)="fno()">No </button>\n\n             \n\n\n\n         \n\n             \n\n            </ion-slide>\n\n\n\n            <ion-slide>\n\n                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/2.png">\n\n\n\n \n\n                <p>2.	Has perdido contacto con amigos, familiares, compañeras/os de tu escuela o trabajo para evitar que tu pareja se moleste? </p>\n\n         \n\n              <button ion-button block (click)="fsi()">Si</button>\n\n                           <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                        <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                   <button ion-button block color="dark" (click)="fno()">No </button>\n\n  \n\n           \n\n               \n\n              </ion-slide>\n\n\n\n              <ion-slide>\n\n                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/3.png">\n\n\n\n                  <p>3.	¿Te critica y humilla en público o en privado, opina negativamente sobre tu apariencia, tu forma de ser o el modo en que te vistes? </p>\n\n                <button ion-button block (click)="fsi()"  >Si</button>\n\n                             <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                          <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                     <button ion-button block color="dark" (click)="fno()">No </button>\n\n    \n\n             \n\n                 \n\n                  </ion-slide>\n\n\n\n                <ion-slide>\n\n                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/4.png">\n\n\n\n                    <p>4.	¿Te ha golpeado con sus manos, te ha jaloneado o te ha lanzado cosas cuando se enoja o cuando discuten? </p>\n\n             \n\n                  <button ion-button block (click)="fsi()">Si</button>\n\n                         <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                      <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                 <button ion-button block color="dark" (click)="fno()">No </button>\n\n      \n\n               \n\n                   \n\n                  </ion-slide>\n\n\n\n                  <ion-slide>\n\n                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/5.png">\n\n\n\n                      <p>5.	¿Te ha amenazado alguna vez con un objeto o armas, o con matarse él, a ti o a algún miembro de la familia si no le obedeces? </p>\n\n               \n\n                    <button ion-button block (click)="fsi()">Si</button>\n\n                         <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                      <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                 <button ion-button block color="dark" (click)="fno()">No </button>\n\n                 \n\n                     \n\n                    </ion-slide>\n\n\n\n                    <ion-slide>\n\n                            <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/6..png">\n\n\n\n                        <p> 6.	¿Sientes que cedes a sus peticiones sexuales por temor, o te ha forzado a tener relaciones, amenazándote que, si no tiene relaciones contigo, entonces se va con otra?\n\n                           </p>\n\n                 \n\n                         <button ion-button block (click)="fsi()">Si</button>\n\n                                      <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                   <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                              <button ion-button block color="dark" (click)="fno()">No </button>\n\n                   \n\n                       \n\n                      </ion-slide>\n\n\n\n                      <ion-slide>\n\n                            <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/7.png">\n\n\n\n                          <p>7.	Después de un episodio violento, ¿se muestra cariñoso y atento, te regala cosas y te promete que nunca más volverá a pegarte o insultarte y te dice que “todo cambiará”?\n\n                              </p>\n\n                   \n\n                            <button ion-button block (click)="fsi()">Si</button>\n\n                                         <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                      <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                 <button ion-button block color="dark" (click)="fno()">No </button>\n\n                     \n\n                         \n\n                        </ion-slide>\n\n\n\n                        <ion-slide>\n\n                                <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/8.png">\n\n\n\n                            <p>8.	¿Es violento con otras personas o se pelea a golpes con otros hombres?\n\n                                </p>\n\n                     \n\n                              <button ion-button block (click)="fsi()">Si</button>\n\n                                           <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                        <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                   <button ion-button block color="dark" (click)="fno()">No </button>\n\n                       \n\n                           \n\n                          </ion-slide>\n\n\n\n                          <ion-slide>\n\n                                <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/9.png">\n\n\n\n                              <p>9.	¿Has buscado o has recibido ayuda por lesiones que él te ha causado? (primeros auxilios, atención médica o legal) \n\n                                  </p>\n\n                       \n\n                                <button ion-button block (click)="fsi()">Si</button>\n\n                                             <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                          <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                     <button ion-button block color="dark" (click)="fno()">No </button>\n\n                \n\n                         \n\n                             \n\n                            </ion-slide>\n\n\n\n                            <ion-slide>\n\n                                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/10.png">\n\n\n\n                                <p> 10.	¿Todo el tiempo quiere saber qué haces y con quién estas? \n\n                                   </p>\n\n                                 <button ion-button block (click)="fsi()">Si</button>\n\n                                              <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                           <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                      <button ion-button block color="dark" (click)="fno()">No </button>\n\n                  \n\n                           \n\n                               \n\n                              </ion-slide>\n\n\n\n                              <ion-slide>\n\n                                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/11.png">\n\n\n\n                                  <p> 11.	¿Te ha obligado a ver pornografía y/o a tener prácticas sexuales que te desagraden?\n\n                                      </p>\n\n                                    <button ion-button block (click)="fsi()">Si</button>\n\n                                                 <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                              <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                         <button ion-button block color="dark" (click)="fno()">No </button>\n\n                             \n\n                                 \n\n                                </ion-slide>\n\n\n\n                                <ion-slide>\n\n                                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/12.png">\n\n\n\n                                    <p>12.	Cuando tienen relaciones sexuales ¿Te impide o condiciona el uso de métodos anticonceptivos?  \n\n                                       </p>\n\n                             \n\n                                     <button ion-button block (click)="fsi()">Si</button>\n\n                                                  <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                               <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                          <button ion-button block color="dark" (click)="fno()">No </button>\n\n                      \n\n                               \n\n                                   \n\n                                  </ion-slide>\n\n\n\n                                  <ion-slide>\n\n                                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/13.png">\n\n\n\n                                      <p>13.	Cuando se enojan o discuten ¿Has sentido que tu vida está en peligro? \n\n                                          </p>\n\n                                        <button ion-button block (click)="fsifinal()">Si</button>\n\n                                                     <button ion-button block color="dark" (click)="favecesfinal()">A Veces</button>\n\n                                                  <button ion-button block (click)="fraravezfinal()">Rara Vez</button>\n\n                                             <button ion-button block color="dark" (click)="fnofinal()">No </button>\n\n                        \n\n                                 \n\n                                     \n\n                                    </ion-slide>\n\n\n\n                                    <ion-slide>\n\n          \n\n                                        <p>14. ¿Te ha amenazado con matarse cuando le dices que quieres terminar con él, o cuando tienen algún problema?\n\n                                             </p>\n\n                                 \n\n                                           <button ion-button block (click)="fsi()">Si</button>\n\n                                                        <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                                     <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                                <button ion-button block color="dark" (click)="fno()">No </button>\n\n                          \n\n                                   \n\n                                       \n\n                                      </ion-slide>\n\n\n\n                                      <ion-slide>\n\n          \n\n                                          <p>15. ¿Alguna vez te ha causado lesiones que ameriten recibir atención médica, psicológica, jurídica y/o auxilio policial? \n\n                                             </p>\n\n                                   \n\n                                           <button ion-button block (click)="fsi()">Si</button>\n\n                                                        <button ion-button block color="dark" (click)="faveces()">A Veces</button>\n\n                                                     <button ion-button block (click)="fraravez()">Rara Vez</button>\n\n                                                <button ion-button block color="dark" (click)="fno()">No </button>\n\n                            \n\n                                     \n\n                                         \n\n                                        </ion-slide>\n\n\n\n                                    \n\n           \n\n         \n\n        </ion-slides>\n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _d || Object])
    ], TestPage);
    return TestPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/atlantida/atlantida.module": [
		287,
		29
	],
	"../pages/aveces/aveces.module": [
		288,
		39
	],
	"../pages/choluteca/choluteca.module": [
		289,
		28
	],
	"../pages/ciclo-violencia/ciclo-violencia.module": [
		290,
		27
	],
	"../pages/colon/colon.module": [
		292,
		26
	],
	"../pages/comayagua/comayagua.module": [
		291,
		25
	],
	"../pages/consejos-seguridad/consejos-seguridad.module": [
		295,
		24
	],
	"../pages/consejos/consejos.module": [
		296,
		38
	],
	"../pages/copan/copan.module": [
		293,
		23
	],
	"../pages/cortes/cortes.module": [
		294,
		22
	],
	"../pages/definicion/definicion.module": [
		299,
		21
	],
	"../pages/denuncia/denuncia.module": [
		297,
		37
	],
	"../pages/denuncias-def/denuncias-def.module": [
		298,
		20
	],
	"../pages/directorio/directorio.module": [
		300,
		19
	],
	"../pages/el-paraiso/el-paraiso.module": [
		304,
		18
	],
	"../pages/francisco-m/francisco-m.module": [
		309,
		17
	],
	"../pages/gracias-a-dios/gracias-a-dios.module": [
		312,
		16
	],
	"../pages/identifica/identifica.module": [
		313,
		15
	],
	"../pages/info/info.module": [
		301,
		35
	],
	"../pages/info2/info2.module": [
		302,
		36
	],
	"../pages/intibuca/intibuca.module": [
		303,
		14
	],
	"../pages/islas/islas.module": [
		305,
		13
	],
	"../pages/la-ceiba/la-ceiba.module": [
		306,
		12
	],
	"../pages/la-paz/la-paz.module": [
		307,
		11
	],
	"../pages/lempira/lempira.module": [
		308,
		10
	],
	"../pages/medidas/medidas.module": [
		319,
		9
	],
	"../pages/new-place/new-place.module": [
		316,
		34
	],
	"../pages/ninos/ninos.module": [
		310,
		8
	],
	"../pages/no/no.module": [
		311,
		33
	],
	"../pages/ocotepeque/ocotepeque.module": [
		317,
		7
	],
	"../pages/olancho/olancho.module": [
		323,
		6
	],
	"../pages/pasos-denuncia/pasos-denuncia.module": [
		324,
		5
	],
	"../pages/proceso/proceso.module": [
		314,
		4
	],
	"../pages/raravez/raravez.module": [
		315,
		32
	],
	"../pages/rutas-atencion/rutas-atencion.module": [
		325,
		3
	],
	"../pages/santa-barbara/santa-barbara.module": [
		326,
		2
	],
	"../pages/si/si.module": [
		318,
		31
	],
	"../pages/test/test.module": [
		320,
		30
	],
	"../pages/valle/valle.module": [
		321,
		1
	],
	"../pages/yoro/yoro.module": [
		322,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Alerta" tabIcon="alert"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contactos" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(sms, callSvc, geo, storage) {
        this.sms = sms;
        this.callSvc = callSvc;
        this.geo = geo;
        this.storage = storage;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.lat = pos.coords.latitude;
            _this.lng = pos.coords.longitude;
        }).catch(function (err) { return console.log(err); });
    };
    AboutPage.prototype.call = function () {
        this.callSvc.callNumber('31663396', true).then(function () {
            console.log('worked');
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    AboutPage.prototype.senSMS = function () {
        this.SMS1();
        this.SMS2();
        this.SMS3();
    };
    AboutPage.prototype.SMS1 = function () {
        var _this = this;
        this.storage.get('contact1').then(function (contacto1) {
            var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
            var urlfinal = urlinicial.concat(_this.lat, ",", _this.lng);
            var options;
            _this.sms.send(contacto1, urlfinal, options).then(function () { console.log('sms worked'); }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        });
    };
    AboutPage.prototype.SMS2 = function () {
        var _this = this;
        this.storage.get('contact2').then(function (contacto2) {
            var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
            var urlfinal = urlinicial.concat(_this.lat, ",", _this.lng);
            var options;
            _this.sms.send(contacto2, urlfinal, options).then(function () { console.log('sms worked'); }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        });
    };
    AboutPage.prototype.SMS3 = function () {
        var _this = this;
        this.storage.get('contact3').then(function (contacto3) {
            var urlinicial = "AIUUUUDAAA TOY ACA https://www.google.com/maps/search/?api=1&query=";
            var urlfinal = urlinicial.concat(_this.lat, ",", _this.lng);
            var options;
            _this.sms.send(contacto3, urlfinal, options).then(function () { console.log('sms worked'); }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-title style="text-align: center; ">\n\n      AYUDA\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>&nbsp;</div>\n\n    <ion-grid>\n\n        <ion-row (click)= "senSMS()" padding style="background-color: #FC4E50; text-align: center; padding-top: 5px ; border: 10px solid white;">\n\n            \n\n         <ion-col><p style="padding:5px; font-size: 20px; color:white">ENVIAR MENSAJES DE EMERGENCIA</p></ion-col> \n\n            <ion-col>  <img   src="assets/imgs/5Emergencia/alarm.gif" style="padding-bottom: 5px; width: 70%; height: 70%" ></ion-col> \n\n       \n\n        </ion-row>\n\n\n\n<br>\n\n<br>\n\n        <ion-row (click)= "call()" padding style="background-color: #0B3954; text-align: center; padding-top: 5px ; border: 10px solid white; height:200px;">\n\n            \n\n         \n\n               <ion-col>  <img src="assets/imgs/5Emergencia/alert.gif" style="padding-bottom: 5px; width: 70%; height: 70%" ></ion-col> \n\n               <ion-col><p style="padding:5px; font-size: 20px; color:white">LLAMADA DE EMERGENCIA<br> 911</p></ion-col> \n\n           </ion-row>\n\n\n\n\n\n</ion-grid>\n\n\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.contactos = {};
        this.storage.get('contact1').then(function (contacto1) {
            _this.contactos.contact1 = contacto1;
        });
        this.storage.get('contact2').then(function (contacto2) {
            _this.contactos.contact2 = contacto2;
        });
        this.storage.get('contact3').then(function (contacto3) {
            _this.contactos.contact3 = contacto3;
        });
    }
    ContactPage.prototype.setData = function () {
        var contact1 = this.contactos.contact1;
        var contact2 = this.contactos.contact2;
        var contact3 = this.contactos.contact3;
        this.storage.set('contact1', contact1);
        this.storage.set('contact2', contact2);
        this.storage.set('contact3', contact3);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\contact\contact.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Mis Contactos</ion-title>\n\n      \n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954 "><strong>CONFIGURA TUS NÚMEROS DE EMERGENCIA</strong> </h2>\n\n<div style="text-align: center;" ><img   src="assets/imgs/Contacts/agenda1.gif" style="padding-bottom: 5px; width: 40%; height: 40%" >\n\n<br>\n\n<p>Para editar un número telefónico simplemente selecciona una casilla y escribe el número nuevo:</p></div>\n\n     \n\n      <ion-grid>\n\n          <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n              <ion-item>\n\n                  <ion-label   color="primary">1.</ion-label>\n\n                  <ion-input  type="tel" placeholder="3333-3333" [(ngModel)]="contactos.contact1" name="contact1"></ion-input>\n\n                </ion-item>\n\n            \n\n         \n\n          </ion-row>\n\n          <br>\n\n\n\n          <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n              <ion-item>\n\n                  <ion-label color="primary">2.</ion-label>\n\n                  <ion-input [(ngModel)]="contactos.contact2" placeholder="3333-3333" name="contact2"></ion-input>\n\n                </ion-item>\n\n                 \n\n              \n\n               </ion-row>\n\n<br>\n\n               <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n                  <ion-item>\n\n                      <ion-label color="primary">3.</ion-label>\n\n                      <ion-input [(ngModel)]="contactos.contact3" placeholder="3333-3333" name="contact3"></ion-input>\n\n                    </ion-item>\n\n                     \n\n                  \n\n                   </ion-row>\n\n<br>\n\n                   <ion-row padding-top style=" text-align: center; padding-top: 5px ;">\n\n          \n\n                      <ion-col><ion-buttons> <button ion-button color="primary">Mensaje de Prueba </button></ion-buttons></ion-col>\n\n                  <ion-col> <ion-buttons> <button (click)= "setData()" ion-button color="secondary">Aceptar </button> </ion-buttons>      </ion-col>\n\n                    </ion-row>\n\n\n\n                </ion-grid>\n\n\n\n\n\n               \n\n\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_place_new_place__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consejos_consejos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__denuncia_denuncia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onLoadNewPlace = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_place_new_place__["a" /* NewPlacePage */]);
    };
    HomePage.prototype.Consejos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__consejos_consejos__["a" /* ConsejosPage */]);
    };
    HomePage.prototype.denunciapage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__denuncia_denuncia__["a" /* DenunciaPage */]);
    };
    HomePage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__test_test__["a" /* TestPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title style="text-align: center; ">\n      SEGURAS\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  >\n\n <ion-grid >\n     <ion-row> &nbsp;</ion-row>\n  <ion-row>\n    <ion-col>\n        <img (click)="onLoadNewPlace()" src="assets/imgs/info.jpeg" style="width : 100% ; height : 100%">\n\n\n    </ion-col>\n    <ion-col>\n    <img (click)="Consejos()" src="assets/imgs/consejos.jpeg" style="width : 100% ; height : 100%">\n\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n       <img (click)="test()"src="assets/imgs/test.jpeg" style="width : 100% ; height : 100%">\n\n    </ion-col>\n    <ion-col>\n     <img (click)="denunciapage()"src="assets/imgs/accion.jpeg" style="width : 100% ; height : 100%">\n\n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n   \n\n\n</ion-content>\n\n<ion-footer no-border style="height:2px;">\n  <ion-toolbar no-border color="danger">\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvecesPage; });
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
 * Generated class for the AvecesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvecesPage = /** @class */ (function () {
    function AvecesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvecesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvecesPage');
    };
    AvecesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aveces',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\aveces\aveces.html"*/'<!--\n  Generated template for the AvecesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>aveces</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nAMBECES\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\aveces\aveces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AvecesPage);
    return AvecesPage;
}());

//# sourceMappingURL=aveces.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPage; });
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
 * Generated class for the NoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoPage = /** @class */ (function () {
    function NoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoPage');
    };
    NoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\no\no.html"*/'<!--\n  Generated template for the NoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>no</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nNO\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\no\no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NoPage);
    return NoPage;
}());

//# sourceMappingURL=no.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaravezPage; });
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
 * Generated class for the RaravezPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RaravezPage = /** @class */ (function () {
    function RaravezPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RaravezPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RaravezPage');
    };
    RaravezPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-raravez',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\raravez\raravez.html"*/'<!--\n  Generated template for the RaravezPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>raravez</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nRARA VEZ\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\raravez\raravez.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RaravezPage);
    return RaravezPage;
}());

//# sourceMappingURL=raravez.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiPage; });
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
 * Generated class for the SiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SiPage = /** @class */ (function () {
    function SiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiPage');
    };
    SiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-si',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\si\si.html"*/'<!--\n  Generated template for the SiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>si</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\nESTA ES LA RESPUESTA SI\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\si\si.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SiPage);
    return SiPage;
}());

//# sourceMappingURL=si.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_test_test__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_info_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info2_info2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_si_si__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_no_no__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__["a" /* NewPlacePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info2_info2__["a" /* Info2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__["a" /* ConsejosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__["a" /* DenunciaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SiPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__["a" /* RaravezPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__["a" /* AvecesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_no_no__["a" /* NoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/atlantida/atlantida.module#AtlantidaPageModule', name: 'AtlantidaPage', segment: 'atlantida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aveces/aveces.module#AvecesPageModule', name: 'AvecesPage', segment: 'aveces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choluteca/choluteca.module#CholutecaPageModule', name: 'CholutecaPage', segment: 'choluteca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ciclo-violencia/ciclo-violencia.module#CicloViolenciaPageModule', name: 'CicloViolenciaPage', segment: 'ciclo-violencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comayagua/comayagua.module#ComayaguaPageModule', name: 'ComayaguaPage', segment: 'comayagua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/colon/colon.module#ColonPageModule', name: 'ColonPage', segment: 'colon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/copan/copan.module#CopanPageModule', name: 'CopanPage', segment: 'copan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cortes/cortes.module#CortesPageModule', name: 'CortesPage', segment: 'cortes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-seguridad/consejos-seguridad.module#ConsejosSeguridadPageModule', name: 'ConsejosSeguridadPage', segment: 'consejos-seguridad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos/consejos.module#ConsejosPageModule', name: 'ConsejosPage', segment: 'consejos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denuncia/denuncia.module#DenunciaPageModule', name: 'DenunciaPage', segment: 'denuncia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denuncias-def/denuncias-def.module#DenunciasDefPageModule', name: 'DenunciasDefPage', segment: 'denuncias-def', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/definicion/definicion.module#DefinicionPageModule', name: 'DefinicionPage', segment: 'definicion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directorio/directorio.module#DirectorioPageModule', name: 'DirectorioPage', segment: 'directorio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info2/info2.module#Info2PageModule', name: 'Info2Page', segment: 'info2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intibuca/intibuca.module#IntibucaPageModule', name: 'IntibucaPage', segment: 'intibuca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/el-paraiso/el-paraiso.module#ElParaisoPageModule', name: 'ElParaisoPage', segment: 'el-paraiso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/islas/islas.module#IslasPageModule', name: 'IslasPage', segment: 'islas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/la-ceiba/la-ceiba.module#LaCeibaPageModule', name: 'LaCeibaPage', segment: 'la-ceiba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/la-paz/la-paz.module#LaPazPageModule', name: 'LaPazPage', segment: 'la-paz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lempira/lempira.module#LempiraPageModule', name: 'LempiraPage', segment: 'lempira', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/francisco-m/francisco-m.module#FranciscoMPageModule', name: 'FranciscoMPage', segment: 'francisco-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ninos/ninos.module#NinosPageModule', name: 'NinosPage', segment: 'ninos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no/no.module#NoPageModule', name: 'NoPage', segment: 'no', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gracias-a-dios/gracias-a-dios.module#GraciasADiosPageModule', name: 'GraciasADiosPage', segment: 'gracias-a-dios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/identifica/identifica.module#IdentificaPageModule', name: 'IdentificaPage', segment: 'identifica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proceso/proceso.module#ProcesoPageModule', name: 'ProcesoPage', segment: 'proceso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/raravez/raravez.module#RaravezPageModule', name: 'RaravezPage', segment: 'raravez', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-place/new-place.module#NewPlacePageModule', name: 'NewPlacePage', segment: 'new-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ocotepeque/ocotepeque.module#OcotepequePageModule', name: 'OcotepequePage', segment: 'ocotepeque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/si/si.module#SiPageModule', name: 'SiPage', segment: 'si', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medidas/medidas.module#MedidasPageModule', name: 'MedidasPage', segment: 'medidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/valle/valle.module#VallePageModule', name: 'VallePage', segment: 'valle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yoro/yoro.module#YoroPageModule', name: 'YoroPage', segment: 'yoro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/olancho/olancho.module#OlanchoPageModule', name: 'OlanchoPage', segment: 'olancho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasos-denuncia/pasos-denuncia.module#PasosDenunciaPageModule', name: 'PasosDenunciaPage', segment: 'pasos-denuncia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rutas-atencion/rutas-atencion.module#RutasAtencionPageModule', name: 'RutasAtencionPage', segment: 'rutas-atencion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/santa-barbara/santa-barbara.module#SantaBarbaraPageModule', name: 'SantaBarbaraPage', segment: 'santa-barbara', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__["a" /* NewPlacePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info2_info2__["a" /* Info2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__["a" /* ConsejosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__["a" /* DenunciaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SiPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__["a" /* RaravezPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__["a" /* AvecesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_no_no__["a" /* NoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                Storage
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map
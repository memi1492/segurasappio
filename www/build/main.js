webpackJsonp([46],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact__ = __webpack_require__(214);
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
    function AboutPage(navCtrl, sms, callSvc, geo, storage) {
        this.navCtrl = navCtrl;
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
    AboutPage.prototype.config = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage.prototype.senSMS = function () {
        this.SMS1();
        this.SMS2();
        this.SMS3();
    };
    AboutPage.prototype.SMS1 = function () {
        var _this = this;
        this.storage.get('contact1').then(function (contacto1) {
            var urlinicial = "Estoy en problema y necesito tu ayuda. Esta es mi ubicación: https://www.google.com/maps/search/?api=1&query=";
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
            var urlinicial = "Estoy en problema y necesito tu ayuda. Esta es mi ubicación: https://www.google.com/maps/search/?api=1&query=";
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
            var urlinicial = "Estoy en problema y necesito tu ayuda. Esta es mi ubicación: https://www.google.com/maps/search/?api=1&query=";
            var urlfinal = urlinicial.concat(_this.lat, ",", _this.lng);
            var options;
            _this.sms.send(contacto3, urlfinal, options).then(function () { console.log('sms worked'); }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-title style="text-align: center; ">\n\n     Botón de Pánico\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <p style="text-align: center; color: #0B3954;">Lo debes utilizar solamente en caso de emergencia y cuando te encuentres en peligro, este botón será una llamada directamente al 911 y las personas de tu confianza y que te puedan auxiliar en caso de una emergencia.\n\n    </p>\n\n  \n\n    <ion-grid>\n\n        <ion-row (click)= "senSMS()" padding style="background-color: #FC4E50; text-align: center; padding-top: 5px ; border: 10px solid white;">\n\n            \n\n         <ion-col align-self-center><p style=" color:white">ENVIAR MENSAJES DE EMERGENCIA</p></ion-col> \n\n            <ion-col align-self-center>  <img   src="assets/imgs/5Emergencia/alarm-2.gif" style="padding-top:20px; padding-bottom: 5px; width: 70%; height: 70%" ></ion-col> \n\n       \n\n        </ion-row>\n\n        <br>\n\n \n\n\n\n        <ion-row (click)= "call()" padding style="background-color: #0B3954; text-align: center; padding-top: 5px ; border: 10px solid white; ">\n\n            \n\n         \n\n               <ion-col align-self-center>  <img src="assets/imgs/5Emergencia/alert.gif" style="padding-top:10px; padding-bottom: 5px; width: 70%; height: 70%"></ion-col> \n\n               <ion-col align-self-center ><p style=" color:white">LLAMADA DE EMERGENCIA<br> 911</p></ion-col> \n\n           </ion-row>\n\n\n\n           <br>\n\n           <ion-row style="height: 100%; display: block; text-align: center"><ion-buttons > <button (click)= "config()" ion-button color="primary">Configurar tus contactos </button> </ion-buttons> \n\n           </ion-row>\n\n          <br>\n\n\n\n\n\n</ion-grid>\n\n\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info2_info2__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info3_info3__ = __webpack_require__(112);
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
    NewPlacePage.prototype.intrafamiliar = function () {
        console.log("Info2Page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__info3_info3__["a" /* Info3Page */]);
    };
    NewPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-place',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\new-place\new-place.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Violencia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n\n\n\n\n    <div (click)="domestica()" class="estilodeboton" >\n\n      <p ><strong>Violencia Doméstica</strong></p>\n\n      <img   src="assets/imgs/Informate/hand.gif" style="width: 20%; height: 20%; padding-bottom: 10px;">\n\n      <p>¡Tú y tú familia valen mucho!</p>\n\n </div>\n\n\n\n <div>&nbsp;</div>\n\n\n\n <div (click)="sexual()" class="estilodeboton" >\n\n   <p ><strong>Violencia Sexual</strong></p>\n\n  <img   src="assets/imgs/Informate/woman2.gif" style="width: 20%; height: 20%; padding-bottom: 10px; ">\n\n  <p>¡No permitas el abuso!</p>\n\n</div>\n\n\n\n<div>&nbsp;</div>\n\n\n\n<div (click)="intrafamiliar()" class="estilodeboton" >\n\n  <p ><strong>Violencia Intrafamiliar</strong></p>\n\n  <img   src="assets/imgs/Informate/network.gif" style="width: 20%; height: 20%; padding-bottom: 10px; ">\n\n  <p>¡Observa e identifica!</p>\n\n</div>\n\n    \n\n      \n\n    \n\n   \n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\new-place\new-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewPlacePage);
    return NewPlacePage;
}());

//# sourceMappingURL=new-place.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    function InfoPage(navCtrl, navParams, modal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.CicloViolencia = function () {
        var CicloViolencia = this.modal.create('CicloViolenciaPage');
        CicloViolencia.present();
    };
    InfoPage.prototype.vfisica = function () {
        var vfisica = this.alertCtrl.create({
            title: "Violencia Física",
            message: "Existen golpes. empujadas y cachetadas ",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vfisica.present();
    };
    InfoPage.prototype.vsexual = function () {
        var vsexual = this.alertCtrl.create({
            title: "Violencia Sexual",
            message: "Te obliga a tener relaciones sexuales y en posiciones que no deseas, También te puede impedir que realices una planificación familiar.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vsexual.present();
    };
    InfoPage.prototype.vpsicologica = function () {
        var vpsicologica = this.alertCtrl.create({
            title: "Violencia Psicológica",
            message: "Te degrada, controla tus acciones, comportamientos, creencias y decisiones por medio de la intimidación, manipulación, amenaza directa e indirecta.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vpsicologica.present();
    };
    InfoPage.prototype.vpatrimonial = function () {
        var vpatrimonial = this.alertCtrl.create({
            title: "Violencia Patrimonial",
            message: "Te niega tus bienes, rompe tus cosas, teniendo dinero te lo niega para cubrir los gastos y el de tus hijos e hijas, dispone del dinero o de tus bienes sin avisarte.",
            buttons: [
                {
                    text: "Atrás",
                }
            ],
            cssClass: 'alertCustomCss',
        });
        vpatrimonial.present();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info\info.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Violencia Doméstica</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n    <ion-content padding>\n\n        <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>­Tipos de Violencia Doméstica </strong> </h2>\n\n      <p text-center style="padding-top: 10px; color:#0B3954"><strong> Cuando los actos de tu pareja o ex-pareja te producen cualquiera de estos tipos de violencia, estas siendo víctima de violencia doméstica: </strong> </p>\n\n    \n\n       <br>\n\n        \n\n            <!--   <ion-col>  <img   src="assets/imgs/1ViolenciaDomestica/handymod.gif" style=" align-content: center; padding-bottom: 5px; width: 50%; height: 50%" ></ion-col>-->\n\n\n\n         <!--  <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n         <ion-grid >\n\n       <ion-row padding >\n\n     \n\n         <ion-col  \n\n              style=" align-content: center; background-color: white">\n\n             \n\n            <div (click)="vfisica()" class="violencia">\n\n                <img  src="assets/imgs/Informate/strong.png" style="width : 70% ; height : 70%; "> \n\n                <p style="align-content: center;"><strong>Violencia Física</strong></p>\n\n            \n\n            \n\n         </div>   \n\n         </ion-col>\n\n        \n\n           <!--   <div>  <img   src="assets/imgs/1ViolenciaDomestica/sex.gif" style=" align-content: center; padding-bottom: 5px; width: 30%; height: 30%" ></div> \n\n\n\n          <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n          <ion-col col-1 ></ion-col>\n\n          <ion-col  \n\n          style=" align-content: center; background-color: white">\n\n\n\n          <div (click)="vsexual()" class="violencia">\n\n              <img  src="assets/imgs/Informate/bed.png" style="width : 70% ; height : 70%; "> \n\n              <p style="align-content: center;"><strong>Violencia Sexual</strong></p>\n\n          \n\n          \n\n       </div>   \n\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n             <!-- <div> <img   src="assets/imgs/1ViolenciaDomestica/1CicloViolencia/swear.gif" style="padding-bottom: 5px; width: 25%; height: 25%" >\n\n              </div> \n\n\n\n          <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n        \n\n          <ion-row padding>\n\n            <ion-col  \n\n              style=" align-content: center; background-color: white">\n\n             \n\n            <div (click)="vpsicologica()" class="violencia">\n\n                <img  src="assets/imgs/Informate/illness.png" style="width : 70% ; height : 70%; "> \n\n                <p style="align-content: center;"><strong>Violencia Psicológica</strong></p>\n\n            \n\n            \n\n         </div>   \n\n         </ion-col>\n\n\n\n        <ion-col col-1 ></ion-col>\n\n\n\n              <!-- <img   src="assets/imgs/1ViolenciaDomestica/man.gif" style=" align-content: center; padding-bottom: 5px; width: 30%; height: 30%" ></div> \n\n\n\n        <ion-col><p style="padding:5px;">Existen golpes. empujadas y cachetadas</p></ion-col> -->\n\n        <ion-col  \n\n        style=" align-content: center; background-color: white">\n\n       \n\n      <div (click)="vpatrimonial()" class="violencia">\n\n          <img  src="assets/imgs/Informate/money.png" style="width : 70% ; height : 70%; "> \n\n          <p style="align-content: center;"><strong>Violencia Patrimonial</strong></p>\n\n      \n\n      \n\n   </div>   \n\n   </ion-col> \n\n     \n\n      </ion-row>\n\n\n\n     \n\n\n\n\n\n  <!--  <div (click)="definicion()" class="estilodeboton"><p style="font-size: 10px;"><strong>¿Qué es la violencia doméstica?</strong></p>\n\n      <img   src="assets/imgs/1ViolenciaDomestica/warnmodif.gif" style="width: 25%; height: 25%;">\n\n      <p>Infórmate</p>\n\n </div> -->\n\n <ion-row item-height="20">\n\n\n\n \n\n   \n\n\n\n</ion-row>\n\n\n\n</ion-grid>\n\n<h2 style="padding-top: 10px; color:#0B3954; text-align: center"><strong>Ciclo de Violencia Doméstica </strong> </h2> <br>\n\n<div >\n\n<button ion-item no-lines detail-none (click)="CicloViolencia()" class="estilodeboton"><p style="font-size: 20px; color: black"><strong>Ciclo de Violencia</strong></p><br>\n\n  <img (click)="CicloViolencia()"  src="assets/imgs/1ViolenciaDomestica/rotate.gif" style="width: 30%; height: 30%;">\n\n  <p style="color: black">¡Rompe el Ciclo!</p> </button>\n\n</div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    Info2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info2',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info2\info2.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Violencia Sexual</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Sabes qué es la violencia sexual? </strong>    </h2> \n\n    \n\n   \n\n\n\n    <ion-grid>\n\n       \n\n         <ion-row padding  class="estilo" justify-content-center>\n\n     <ion-col >\n\n         <br>  <img style="align-content: center; width: 70%; height:70%; " src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/no.gif">\n\n         </ion-col>\n\n         <ion-col >\n\n           <p style="text-align:center; color: #0B3954"><strong>Estas sufriendo violencia sexual cuando eres victima de cualquier acto sexual que no desees.</strong></p>\n\n         </ion-col>\n\n         </ion-row>\n\n     \n\n         <br> <ion-row padding class="estilo2"  justify-content-center>\n\n             <ion-col >\n\n                 <p style="text-align:center; color: #0B3954"><strong>La violencia sexual incluye el acoso sexual (manoseo, propuestas sexuales, miradas, piropos no deseados) y la violación sexual.</strong></p> \n\n                 </ion-col>\n\n                 <ion-col justify-content-center>\n\n                    <br>     <img style="align-content: center; width: 70%; height:70%"  src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/chat.gif">\n\n                 </ion-col>\n\n                 </ion-row>\n\n\n\n                 <br> <ion-row padding  class="estilo" justify-content-center>\n\n                     <ion-col justify-content-center >\n\n                        <br>     <img style="align-content: center; width: 70%; height:70%" src="assets/imgs/2ViolenciaSexual/1ViolenciaSexualIdentificala/target.gif">\n\n                         </ion-col>\n\n                         <ion-col >\n\n                           <p style="text-align:center;  color: #0B3954"><strong>Puede darse a través de violencia, de una amenaza grave, aprovechándose de tu situación o de tu incapacidad de resistir.</strong></p>\n\n                         </ion-col>\n\n                         </ion-row>\n\n\n\n           \n\n               </ion-grid>\n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n\n\n\n\n\n\n    </ion-content>\n\n\n\n   \n\n\n\n    \n\n    \n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info2\info2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Info2Page);
    return Info2Page;
}());

//# sourceMappingURL=info2.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the Info3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Info3Page = /** @class */ (function () {
    function Info3Page(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    Info3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Info3Page');
    };
    Info3Page.prototype.Vintraf = function () {
        var Identificala = this.modal.create('VintrafPage');
        Identificala.present();
    };
    Info3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info3',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info3\info3.html"*/'<!--\n\n  Generated template for the Info3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Violencia Intrafamiliar</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954"><strong>¿Sabes qué es la violencia intrafamiliar? </strong> <br></h2>\n\n      \n\n  \n\n      <ion-grid>\n\n         \n\n           <ion-row padding  class="estilo" justify-content-center>\n\n       <ion-col >\n\n           <br>  <img style="align-content: center; width: 70%; height:70%; " src="assets/imgs/Informate/judging.gif">\n\n           </ion-col>\n\n           <ion-col >\n\n             <p style="text-align:center; color:#0B3954">Esta violencia es considerada un delito penado por la ley. </p>\n\n           </ion-col>\n\n           </ion-row>\n\n       \n\n           <br> <ion-row padding class="estilo2"  justify-content-center>\n\n               <ion-col >\n\n                   <p style="text-align:center; color:#0B3954">Puede ocurrir entre personas que tienen una relación de pareja, pero también incluye la violencia entre familiares como tíos(as), primos(as), hermanos (as), abuelos(as) y otros.  </p> \n\n                   </ion-col>\n\n                   <ion-col justify-content-center>\n\n                      <br>     <img style="align-content: center; width: 70%; height:70%"  src="assets/imgs/Informate/picture.gif">\n\n                   </ion-col>\n\n                   </ion-row>\n\n  \n\n                   <br> <ion-row padding  class="estilo" justify-content-center>\n\n                       <ion-col justify-content-center >\n\n                          <br>     <img style="align-content: center; width: 70%; height:70%" src="assets/imgs/Informate/illness.gif">\n\n                           </ion-col>\n\n                           <ion-col >\n\n                             <p style="text-align:center; color:#0B3954">Esta violencia se diferencia de la violencia doméstica por la gravedad de los daños que causa a la salud física y psicológica de la persona que la recibe. </p>\n\n                           </ion-col>\n\n                           </ion-row>\n\n\n\n                           <br> <ion-row padding class="estilo2"  justify-content-center>\n\n                              <ion-col >\n\n                                  <p style="text-align:center; color:#0B3954"> Además, Cuando se ejerce en presencia de los hijos e hijas es más grave aún. </p> \n\n                                  </ion-col>\n\n                                  <ion-col justify-content-center>\n\n                                     <br>     <img style="align-content: center; width: 70%; height:70%"  src="assets/imgs/Informate/tower.gif">\n\n                                  </ion-col>\n\n                                  </ion-row>\n\n  \n\n             \n\n                 </ion-grid>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n  \n\n  \n\n  \n\n      </ion-content>\n\n  \n\n  '/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\info3\info3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Info3Page);
    return Info3Page;
}());

//# sourceMappingURL=info3.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    ConsejosPage.prototype.ConsejosSeguridad = function () {
        var ConsejosSeguridad = this.modal.create('ConsejosSeguridadPage');
        ConsejosSeguridad.present();
    };
    ConsejosPage.prototype.Ninos = function () {
        var Ninos = this.modal.create('NinosPage');
        Ninos.present();
    };
    ConsejosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consejos',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\consejos\consejos.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Consejos</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding >\n\n\n\n    <div (click)="ConsejosSeguridad()" class="estilodeboton" ><p ><strong>Medidas de seguridad en caso de violencia doméstica </strong></p>\n\n      <img  src="assets/imgs/1ViolenciaDomestica/think.gif" style="width: 20%; height: 20%;">\n\n       <p>Conoce lo que puedes hacer</p>\n\n</div>\n\n<br>\n\n \n\n             \n\n          \n\n          <div (click)="medidas()" class="estilodeboton" ><p ><strong>Medidas de Seguridad en violencia sexual </strong></p>\n\n            <img   src="assets/imgs/3Violaciones/lock.gif" style="width: 20%; height: 20%;">\n\n            <p>Recuerda estar atenta y sigue estos consejos</p>\n\n          </div>  \n\n\n\n          <br>\n\n\n\n          <div (click)="Ninos()" class="estilodeboton" ><p ><strong>	Protección a niños y niñas</strong></p>\n\n            <img   src="assets/imgs/1ViolenciaDomestica/cipota.gif" style="width: 20%; height: 20%;">\n\n            <p>Evitemos la violencia sexual</p>\n\n          </div>  \n\n\n\n          <br>\n\n\n\n          <div (click)="proceso()" class="estilodeboton" ><p ><strong>¿Qué hacer en caso de sufrir una violación?</strong></p>\n\n            <img   src="assets/imgs/3Violaciones/ove.gif" style="width: 20%; height: 20%;">\n\n            <p>¡No te quedes callada y busca ayuda!</p>\n\n          </div>  \n\n\n\n          <br>\n\n           \n\n              \n\n              \n\n              \n\n              \n\n          </ion-content>\n\n\n\n\n\n\n\n    <!--\n\n      \n\n   <div>&nbsp;</div>\n\n         <div>&nbsp;</div>\n\n      <ion-card>\n\n   \n\n    <ion-card-content style="height: 100%">\n\n        <div (click)="medidas()" style="background-color: white; text-align: center; padding-top: 5px; padding-bottom: 5px;" ><p>Medidas de Seguridad</p>\n\n          <img  src="assets/imgs/3Violaciones/lock.gif" style="width: 20%; height: 20%; vertical-align: middle "> <br>\n\n          <p>Recuerda estar atenta y sigue estos consejos</p>\n\n        </div>  \n\n    </ion-card-content>\n\n  </ion-card>\n\n       <div>&nbsp;</div>\n\n         <div>&nbsp;</div>\n\n     \n\n      <ion-card>\n\n          <ion-card-content style="height: 100%">\n\n              <div (click)="proceso()" style="background-color: white; text-align: center; padding-top: 5px; padding-bottom: 5px;" ><p>¿Qué hacer en caso de sufrir una violación?</p>\n\n                <img  src="assets/imgs/3Violaciones/ove.gif" style="width: 20%; height: 20%; vertical-align: middle "> <br>\n\n                <p>¡No te quedes callada y busca ayuda!</p>\n\n              </div>  \n\n          </ion-card-content>\n\n  </ion-card>\n\n      \n\n        \n\n      \n\n     \n\n     \n\n  </ion-content>-->\n\n  '/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\consejos\consejos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ConsejosPage);
    return ConsejosPage;
}());

//# sourceMappingURL=consejos.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    DenunciaPage.prototype.DenunciaMenu = function () {
        var DenunciaMenu = this.modal.create('DenunciamenuPage');
        DenunciaMenu.present();
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
            selector: 'page-denuncia',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\denuncia\denuncia.html"*/'<!--\n\n  Generated template for the DenunciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Denuncia</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding >\n\n      \n\n    <div  (click)="DenunciaMenu()" class="estilodeboton"><p ><strong>¿Que debes saber para <br> denunciar una agresión? </strong></p>\n\n        <img   src="assets/imgs/search-4.gif" style="width: 25%; height: 25%;">\n\n        <p style="color: black">Veamos algunas cosas importantes <br> que debes saber</p>\n\n   </div>\n\n      \n\n  \n\n\n\n   <div>&nbsp;</div>\n\n     \n\n   <div (click)="directorio()" class="estilodeboton" ><p ><strong>¿Adonde puedes buscar ayuda en Honduras?  </strong></p>\n\n       <img  src="assets/imgs/agenda.gif" style="width: 25%; height: 25%;">\n\n       <p>Directorio de Instituciones</p>\n\n </div>\n\n     \n\n <p style="text-align: center; color: #FF6663; ">\n\n    <strong> ­«­Luego que has reconocido que te has visto sometida a algún tipo de violencia:<br> ¡Es tiempo de actuar! »</strong>\n\n   </p>    \n\n      \n\n      \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\denuncia\denuncia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DenunciaPage);
    return DenunciaPage;
}());

//# sourceMappingURL=denuncia.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test2_test2__ = __webpack_require__(117);
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
 * Generated class for the TestmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestmenuPage = /** @class */ (function () {
    function TestmenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestmenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestmenuPage');
    };
    TestmenuPage.prototype.testpareja = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */]);
    };
    TestmenuPage.prototype.testnoviazgo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test2_test2__["a" /* Test2Page */]);
    };
    TestmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testmenu',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\testmenu\testmenu.html"*/'<!--\n\n  Generated template for the TestmenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Autoevalúate</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n<br>\n\n  <div (click)="testpareja()" class="estilodeboton" ><p ><strong>Violencia en la relación de pareja</strong></p>\n\n    <img  src="assets/imgs/test/relationship.gif" style="width: 20%; height: 20%;">\n\n     <p>Averigua si vives en violencia</p>\n\n</div>\n\n<br>\n\n\n\n           <br>\n\n        \n\n        <div (click)="testnoviazgo()" class="estilodeboton" ><p ><strong>Violencia en el noviazgo </strong></p>\n\n          <img   src="assets/imgs/test/signpost.gif" style="width: 20%; height: 20%;">\n\n          <p>Averigua si tu noviazgo tiene signos de violencia</p>\n\n        </div>  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\testmenu\testmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TestmenuPage);
    return TestmenuPage;
}());

//# sourceMappingURL=testmenu.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__si_si__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aveces_aveces__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_no__ = __webpack_require__(54);
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
        if (this.csi >= this.cav && this.csi >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__si_si__["a" /* SiPage */]);
        }
        else if (this.cav >= this.csi && this.cav >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aveces_aveces__["a" /* AvecesPage */]);
        }
        else if (this.cno >= this.csi && this.cno >= this.cav) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__no_no__["a" /* NoPage */]);
        }
    };
    TestPage.prototype.favecesfinal = function () {
        this.cav++;
        this.fcomparadora();
    };
    TestPage.prototype.fnofinal = function () {
        this.cno++;
        this.fcomparadora();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], TestPage.prototype, "slides", void 0);
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\test\test.html"*/'<!--\n\n  Generated template for the TestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Test de Violencia</ion-title>\n\n      <ion-buttons end>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding style="background-color: #0B3954">\n\n\n\n      <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n\n        \n\n        <ion-slide style="background-color: #0B3954; color:  white">\n\n            <h2 text-center style="padding-top: 10px; color:white4"><strong>¿Crees que estas sufriendo de violencia? </strong> </h2>  \n\n           <div style="text-align: center; " ><img   src="assets/imgs/test/test2.png" style="padding-bottom: 5px; width: 30%; height: 30%;" ></div> \n\n\n\n            <p style="text-align: center; color: white;"><strong>Responde las siguientes preguntas y averigua \n\n            </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n\n          \n\n          </ion-slide>\n\n\n\n          <ion-slide style="background-color: #0B3954">\n\n\n\n<img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/1p.png">\n\n\n\n              <p style="color: white">1.	¿Te acusa que eres infiel?  </p>\n\n       \n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n             <br>\n\n            </ion-slide>\n\n\n\n            <ion-slide style="background-color: #0B3954">\n\n                    <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/2p.png">\n\n\n\n \n\n                <p style="color: white">2.	¿No te comunicas con tus amigos/as, familiares, compañeras/os de trabajo para evitar que tu pareja se moleste? </p>\n\n         \n\n                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n  \n\n                <br>\n\n               \n\n              </ion-slide>\n\n\n\n              <ion-slide style="background-color: #0B3954">\n\n                    <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/3p.png">\n\n\n\n                  <p style="color: white">3.¿Opina negativamente en público o en privado, sobre tu apariencia, tu forma de ser, el modo en que te vistes? </p>\n\n                  <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                  <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                  <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n             \n\n                  <br>\n\n                  </ion-slide>\n\n\n\n                <ion-slide style="background-color: #0B3954">\n\n                        <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/4.png">\n\n\n\n                    <p style="color: white">4.	¿Te ha golpeado cuando se enoja o cuando discuten? </p>\n\n             \n\n                    <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                    <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                    <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n               \n\n                    <br>\n\n                  </ion-slide>\n\n\n\n                  <ion-slide style="background-color: #0B3954">\n\n                        <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/5p.png">\n\n\n\n                      <p style="color: white">5.	Después de una explosión de violencia, ¿Se muestra cariñoso y atento, te regala cosas y te promete que nunca más volverá a pegarte o insultarte y te dice que “todo cambiará”? </p>\n\n               \n\n                      <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                      <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                      <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                      <br>\n\n                    </ion-slide>\n\n\n\n                    <ion-slide style="background-color: #0B3954">\n\n                            <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/smartphone.png">\n\n\n\n                        <p style="color: white"> 6.	¿Todo el tiempo quiere controlarte, revisa tu celular y siempre quiere saber dónde estás y con quién?\n\n                           </p>\n\n                           <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                           <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                           <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                   \n\n                           <br>\n\n                      </ion-slide>\n\n\n\n                      <ion-slide style="background-color: #0B3954">\n\n                            <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/7p.png">\n\n\n\n                          <p style="color: white">	7.	¿Te ha obligado a tener relaciones sexuales cuando no quieres?\n\n                              </p>\n\n                   \n\n                              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                              <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                     \n\n                              <br>\n\n                        </ion-slide>\n\n\n\n                        <ion-slide style="background-color: #0B3954">\n\n                                <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/12.png">\n\n\n\n                            <p style="color: white">8.	¿Te impide usar métodos anticonceptivos?\n\n                                </p>\n\n                     \n\n                                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                                <button class="button button-danger customBtn" ion-button large color="danger" (click)="faveces()">A Veces</button> <br>\n\n                                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                                <br>\n\n                           \n\n                          </ion-slide>\n\n\n\n\n\n                     \n\n\n\n                                  <ion-slide style="background-color: #0B3954">\n\n                                        <img style="align-content: center;width: 30%; height: 30%" src="assets/imgs/test/9p.png">\n\n\n\n                                      <p style="color: white">9.	Cuando se enojan o discuten ¿Has sentido que tu vida está en peligro? \n\n                                          </p>\n\n                                       <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsifinal()">Si &nbsp;</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="favecesfinal()">A Veces</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fnofinal()">No </button> <br>\n\n                                 \n\n              <br>\n\n                                    </ion-slide>\n\n\n\n                                  \n\n                            \n\n                                     \n\n                                         \n\n\n\n                                    \n\n           \n\n         \n\n        </ion-slides>\n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__si_si__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aveces_aveces__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_no__ = __webpack_require__(54);
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
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Test2Page = /** @class */ (function () {
    function Test2Page(navParams, view, navCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
        this.csi = 0;
        this.cav = 0;
        this.cno = 0;
    }
    Test2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Test2Page');
    };
    Test2Page.prototype.closemodal = function () {
        this.view.dismiss();
    };
    Test2Page.prototype.fsi = function () {
        this.csi++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        console.log(this.csi);
    };
    Test2Page.prototype.faveces = function () {
        this.cav++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    Test2Page.prototype.fno = function () {
        this.cno++;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    Test2Page.prototype.fsifinal = function () {
        this.csi++;
        this.fcomparadora();
    };
    Test2Page.prototype.fcomparadora = function () {
        if (this.csi >= this.cav && this.csi >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__si_si__["a" /* SiPage */]);
        }
        else if (this.cav >= this.csi && this.cav >= this.cno) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aveces_aveces__["a" /* AvecesPage */]);
        }
        else if (this.cno >= this.csi && this.cno >= this.cav) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__no_no__["a" /* NoPage */]);
        }
    };
    Test2Page.prototype.favecesfinal = function () {
        this.cav++;
        this.fcomparadora();
    };
    Test2Page.prototype.fnofinal = function () {
        this.cno++;
        this.fcomparadora();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], Test2Page.prototype, "slides", void 0);
    Test2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test2',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\test2\test2.html"*/'<!--\n\n  Generated template for the Test2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Test de Violencia</ion-title>\n\n    <ion-buttons end>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: white">\n\n\n\n    <ion-slides pager="true" (ionslideDidChange)="slideChanged()"><!--3 little buttons at the bottom of each slide-->\n\n      \n\n      <ion-slide style="background-color: #0B3954; color:  white">\n\n          <h2 text-center style="padding-top: 10px; color:white4"><strong>¿Crees que estas sufriendo de violencia en tu relación? </strong> </h2>  \n\n         <div style="text-align: center; " ><img   src="assets/imgs/test/test1.png" style="padding-bottom: 5px; width: 30%; height: 30%;" ></div> \n\n\n\n          <p style="text-align: center; color: white;"><strong>Responde las siguientes preguntas y averigua \n\n          </strong><ion-icon name="arrow-round-forward" style="align-content: center;"></ion-icon></p>\n\n        \n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-color: #0B3954">\n\n\n\n<img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/1n.png">\n\n\n\n     \n\n            <p style="color: white">1.	¿Tiene un temperamento explosivo, nunca se sabe cuándo va a estallar? </p>\n\n       \n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n             <br>\n\n       \n\n           \n\n          </ion-slide>\n\n\n\n          <ion-slide style="background-color: #0B3954">\n\n              <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/2n.png">\n\n\n\n\n\n              <p style="color: white">2.	¿Por momentos se vuelve extremadamente celoso o te acusa frecuentemente de engañarlo con otros chavos? </p>\n\n       \n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n             <br>\n\n\n\n         \n\n             \n\n            </ion-slide>\n\n\n\n            <ion-slide style="background-color: #0B3954">\n\n                <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/3n.png">\n\n\n\n                <p style="color: white">3.	¿Te critica continuamente tu forma de ser o de relacionarte con la gente?</p>\n\n                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n               <br>\n\n  \n\n           \n\n               \n\n                </ion-slide>\n\n\n\n                <ion-slide style="background-color: #0B3954">\n\n                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/make-up.png">\n\n\n\n                  <p style="color: white">4.	¿Te critica y hasta te prohíbe el uso de alguna ropa o maquillaje? </p>\n\n           \n\n                  <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                  <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                 <br>\n\n    \n\n             \n\n                 \n\n                </ion-slide>\n\n\n\n                <ion-slide style="background-color: #0B3954">\n\n                    <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/smartphone.png">\n\n\n\n                    <p style="color: white">5.	¿Te llama constantemente al celular, revisa tus mensajes, llamadas o tu correo electrónico? </p>\n\n             \n\n                    <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                    <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                   <br>\n\n               \n\n                   \n\n                  </ion-slide>\n\n\n\n                  <ion-slide style="background-color: #0B3954">\n\n                      <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/6n.png">\n\n\n\n                      <p style="color: white"> 6.	¿Te engaña o te amenaza con engañarte con otra chava?\n\n                         </p>\n\n               \n\n                         <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                         <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                        <br>\n\n                     \n\n                    </ion-slide>\n\n\n\n                    <ion-slide style="background-color: #0B3954">\n\n                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/7n.png">\n\n\n\n                        <p style="color: white">7.	¿Critica o menosprecia a tus amigos/as o a tu familia?\n\n                            </p>\n\n                            <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                            <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                           <br>\n\n                   \n\n                       \n\n                      </ion-slide>\n\n\n\n                      <ion-slide style="background-color: #0B3954">\n\n                          <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/8n.png">\n\n\n\n                          <p style="color: white">8.	¿Él toma todas las decisiones sobre qué hacer, a donde ir o con quien salir?\n\n                              </p>\n\n                   \n\n                              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                              <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                             <br>\n\n                         \n\n                        </ion-slide>\n\n\n\n                        <ion-slide style="background-color: #0B3954">\n\n                            <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/4.png">\n\n\n\n                      <p style="color: white">9.	¿Pega, patea, empuja o tira cosas?\n\n                          </p>\n\n               \n\n                          <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsi()">Si &nbsp;</button> <br>\n\n                          <button class="button button-danger customBtn" ion-button large color="danger" (click)="fno()">No </button> <br>\n\n                         <br>\n\n                 \n\n                     \n\n                    </ion-slide>\n\n\n\n\n\n                   \n\n\n\n                    <ion-slide style="background-color: #0B3954">\n\n                        <img style="align-content: center;width: 40%; height: 40%" src="assets/imgs/test/10n.png">\n\n\n\n                                    <p style="color: white">10.	¿Te obliga a mantener relaciones sexuales o insiste pidiéndote la prueba de amor?\n\n                                        </p>\n\n                                      <button class="button button-danger customBtn" ion-button large color="danger" (click)="fsifinal()">Si</button>\n\n                                              \n\n                                       <br>    <button class="button button-danger customBtn" ion-button large color="danger" (click)="fnofinal()">No </button>\n\n                      \n\n                               \n\n                                   \n\n                                  </ion-slide>\n\n\n\n                                \n\n                          \n\n                                   \n\n                                       \n\n\n\n                                  \n\n         \n\n       \n\n      </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\test2\test2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Test2Page);
    return Test2Page;
}());

//# sourceMappingURL=test2.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\intro\intro.html"*/'<!--\n\n  Generated template for the IntroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Información </ion-title>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h2 text-center style="padding-top: 10px; color:#0B3954 "><strong>Acerca de Seguras</strong> </h2>\n\n\n\n<p style="text-align: center; color: #0B3954">La aplicación móvil <span style="color: #FF6663">“Seguras” </span>es para que las mujeres puedan acceder de manera rápida a servicios de protección \n\n  en casos de violencia doméstica y violencia sexual, <strong>tiene un botón de pánico o emergencia (llamar) y otro para \n\n      envío de mensaje urgente a tres personas de su confianza (mensajes)</strong>. Además, contiene información útil sobre estas violencias. </p>\n\n  <p style="text-align: center; color: #0B3954">Esta aplicación móvil “Seguras” lanzada por el <strong> Programa Presidencial Ciudad Mujer, el Instituto Nacional de la Mujer (INAM)\n\n      y La Secretaría de Seguridad ha sido desarrollada con el apoyo del Fondo de Población de las Naciones Unidas (UNFPA) en Honduras.</strong></p>\n\n   \n\n   <p style="text-align: center; color: #0B3954">\n\n  Para su elaboración se han tomado textos del Cuadernillo Primeros Auxilios: Manual para mujeres sobrevivientes de violencia sexual.\n\n   Centros de Derechos de Mujeres (reproducido por el UNFPA 2017); del Trifolio: “Sabias que puedes hablar de violencia en el noviazgo” CDM,\n\n    reproducido por el UNFPA 2017 y del Cuadernillo Violencia contra las mujeres: La denuncia y sus rutas de atención del\n\n     Proyecto "Acceso a la justicia y cese a la impunidad para mujeres sobrevivientes de violencia":  </p>\n\n\n\n  \n\n<ion-grid padding>\n\n  <ion-row  >\n\n    <ion-col padding>\n\n        <img   src="assets/imgs/inam.png" style="padding-bottom: 5px; width: 100%;" >      \n\n    </ion-col>\n\n\n\n    <ion-col padding>\n\n        <img   src="assets/imgs/logocmh.png" style="padding-bottom: 5px; width: 100%; " >   \n\n    </ion-col>\n\n\n\n    <ion-col padding style="text-align: center;">\n\n        <img   src="assets/imgs/unfpa.png" style="padding-bottom: 5px; width: 100%;  padding-top: 20px;" >   \n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/atlantida/atlantida.module": [
		300,
		31
	],
	"../pages/aveces/aveces.module": [
		301,
		45
	],
	"../pages/choluteca/choluteca.module": [
		302,
		30
	],
	"../pages/ciclo-violencia/ciclo-violencia.module": [
		303,
		29
	],
	"../pages/colon/colon.module": [
		305,
		28
	],
	"../pages/comayagua/comayagua.module": [
		304,
		27
	],
	"../pages/consejos-seguridad/consejos-seguridad.module": [
		306,
		26
	],
	"../pages/consejos/consejos.module": [
		307,
		44
	],
	"../pages/copan/copan.module": [
		308,
		25
	],
	"../pages/cortes/cortes.module": [
		309,
		24
	],
	"../pages/definicion/definicion.module": [
		310,
		23
	],
	"../pages/denuncia/denuncia.module": [
		311,
		43
	],
	"../pages/denunciamenu/denunciamenu.module": [
		312,
		22
	],
	"../pages/denuncias-def/denuncias-def.module": [
		313,
		21
	],
	"../pages/directorio/directorio.module": [
		314,
		20
	],
	"../pages/el-paraiso/el-paraiso.module": [
		315,
		19
	],
	"../pages/francisco-m/francisco-m.module": [
		316,
		18
	],
	"../pages/gracias-a-dios/gracias-a-dios.module": [
		317,
		17
	],
	"../pages/identifica/identifica.module": [
		318,
		16
	],
	"../pages/info/info.module": [
		319,
		40
	],
	"../pages/info2/info2.module": [
		320,
		42
	],
	"../pages/info3/info3.module": [
		321,
		41
	],
	"../pages/intibuca/intibuca.module": [
		322,
		15
	],
	"../pages/intro/intro.module": [
		323,
		39
	],
	"../pages/islas/islas.module": [
		324,
		14
	],
	"../pages/la-ceiba/la-ceiba.module": [
		325,
		13
	],
	"../pages/la-paz/la-paz.module": [
		326,
		12
	],
	"../pages/lempira/lempira.module": [
		327,
		11
	],
	"../pages/medidas/medidas.module": [
		328,
		10
	],
	"../pages/new-place/new-place.module": [
		329,
		38
	],
	"../pages/ninos/ninos.module": [
		330,
		9
	],
	"../pages/no/no.module": [
		331,
		37
	],
	"../pages/ocotepeque/ocotepeque.module": [
		332,
		8
	],
	"../pages/olancho/olancho.module": [
		333,
		7
	],
	"../pages/pasos-denuncia/pasos-denuncia.module": [
		334,
		6
	],
	"../pages/proceso/proceso.module": [
		335,
		5
	],
	"../pages/raravez/raravez.module": [
		339,
		36
	],
	"../pages/rutas-atencion/rutas-atencion.module": [
		336,
		4
	],
	"../pages/santa-barbara/santa-barbara.module": [
		338,
		3
	],
	"../pages/si/si.module": [
		337,
		35
	],
	"../pages/test/test.module": [
		340,
		33
	],
	"../pages/test2/test2.module": [
		341,
		34
	],
	"../pages/testmenu/testmenu.module": [
		342,
		32
	],
	"../pages/valle/valle.module": [
		343,
		2
	],
	"../pages/vintraf/vintraf.module": [
		344,
		1
	],
	"../pages/yoro/yoro.module": [
		345,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro__ = __webpack_require__(118);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* IntroPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Alerta" tabIcon="alert"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Acerca de" tabIcon="settings"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(108);
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
    ContactPage.prototype.atras = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\contact\contact.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Mis Contactos</ion-title>\n\n      \n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n \n\n  \n\n  <ion-content padding>\n\n      <h2 text-center style="padding-top: 10px; color:#0B3954 "><strong>CONFIGURA TUS NÚMEROS DE EMERGENCIA</strong> </h2>\n\n<div style="text-align: center;" ><img   src="assets/imgs/Contacts/agenda1.gif" style="padding-bottom: 5px; width: 40%; height: 40%" >\n\n<br>\n\n<p>Para editar un número telefónico simplemente selecciona una casilla y escribe el número nuevo:</p></div>\n\n     \n\n      <ion-grid>\n\n          <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n              <ion-item>\n\n                  <ion-label   color="primary">1.</ion-label>\n\n                  <ion-input  type="tel" placeholder="3333-3333" [(ngModel)]="contactos.contact1" name="contact1"></ion-input>\n\n                </ion-item>\n\n            \n\n         \n\n          </ion-row>\n\n          <br>\n\n\n\n          <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n              <ion-item>\n\n                  <ion-label color="primary">2.</ion-label>\n\n                  <ion-input [(ngModel)]="contactos.contact2" placeholder="3333-3333" name="contact2"></ion-input>\n\n                </ion-item>\n\n                 \n\n              \n\n               </ion-row>\n\n<br>\n\n               <ion-row padding style="background-color: white; text-align: center; padding-top: 5px ; ">\n\n              \n\n                  <ion-item>\n\n                      <ion-label color="primary">3.</ion-label>\n\n                      <ion-input [(ngModel)]="contactos.contact3" placeholder="3333-3333" name="contact3"></ion-input>\n\n                    </ion-item>\n\n                     \n\n                  \n\n                   </ion-row>\n\n<br>\n\n                   \n\n                </ion-grid>\n\n\n\n\n\n               <div style="text-align: center"> \n\n                <ion-buttons> <button (click)= "setData()" ion-button color="secondary">Aceptar y Guardar </button>\n\n                               <button (click)= "atras()" ion-button color="primary">Atrás </button>\n\n                </ion-buttons>     </div>\n\n\n\n      </ion-content>'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaravezPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-raravez',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\raravez\raravez.html"*/'<!--\n\n  Generated template for the RaravezPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>raravez</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\nRARA VEZ\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\raravez\raravez.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RaravezPage);
    return RaravezPage;
}());

//# sourceMappingURL=raravez.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_info_info__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_info2_info2__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info3_info3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_si_si__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_no_no__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_testmenu_testmenu__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_test_test__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_test2_test2__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_intro_intro__ = __webpack_require__(118);
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
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__["a" /* NewPlacePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_info2_info2__["a" /* Info2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info3_info3__["a" /* Info3Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__["a" /* ConsejosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__["a" /* DenunciaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SiPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__["a" /* RaravezPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__["a" /* AvecesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_no_no__["a" /* NoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_testmenu_testmenu__["a" /* TestmenuPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_test2_test2__["a" /* Test2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/atlantida/atlantida.module#AtlantidaPageModule', name: 'AtlantidaPage', segment: 'atlantida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aveces/aveces.module#AvecesPageModule', name: 'AvecesPage', segment: 'aveces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choluteca/choluteca.module#CholutecaPageModule', name: 'CholutecaPage', segment: 'choluteca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ciclo-violencia/ciclo-violencia.module#CicloViolenciaPageModule', name: 'CicloViolenciaPage', segment: 'ciclo-violencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comayagua/comayagua.module#ComayaguaPageModule', name: 'ComayaguaPage', segment: 'comayagua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/colon/colon.module#ColonPageModule', name: 'ColonPage', segment: 'colon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-seguridad/consejos-seguridad.module#ConsejosSeguridadPageModule', name: 'ConsejosSeguridadPage', segment: 'consejos-seguridad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos/consejos.module#ConsejosPageModule', name: 'ConsejosPage', segment: 'consejos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/copan/copan.module#CopanPageModule', name: 'CopanPage', segment: 'copan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cortes/cortes.module#CortesPageModule', name: 'CortesPage', segment: 'cortes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/definicion/definicion.module#DefinicionPageModule', name: 'DefinicionPage', segment: 'definicion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denuncia/denuncia.module#DenunciaPageModule', name: 'DenunciaPage', segment: 'denuncia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denunciamenu/denunciamenu.module#DenunciamenuPageModule', name: 'DenunciamenuPage', segment: 'denunciamenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/denuncias-def/denuncias-def.module#DenunciasDefPageModule', name: 'DenunciasDefPage', segment: 'denuncias-def', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directorio/directorio.module#DirectorioPageModule', name: 'DirectorioPage', segment: 'directorio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/el-paraiso/el-paraiso.module#ElParaisoPageModule', name: 'ElParaisoPage', segment: 'el-paraiso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/francisco-m/francisco-m.module#FranciscoMPageModule', name: 'FranciscoMPage', segment: 'francisco-m', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gracias-a-dios/gracias-a-dios.module#GraciasADiosPageModule', name: 'GraciasADiosPage', segment: 'gracias-a-dios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/identifica/identifica.module#IdentificaPageModule', name: 'IdentificaPage', segment: 'identifica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info2/info2.module#Info2PageModule', name: 'Info2Page', segment: 'info2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info3/info3.module#Info3PageModule', name: 'Info3Page', segment: 'info3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intibuca/intibuca.module#IntibucaPageModule', name: 'IntibucaPage', segment: 'intibuca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/islas/islas.module#IslasPageModule', name: 'IslasPage', segment: 'islas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/la-ceiba/la-ceiba.module#LaCeibaPageModule', name: 'LaCeibaPage', segment: 'la-ceiba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/la-paz/la-paz.module#LaPazPageModule', name: 'LaPazPage', segment: 'la-paz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lempira/lempira.module#LempiraPageModule', name: 'LempiraPage', segment: 'lempira', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medidas/medidas.module#MedidasPageModule', name: 'MedidasPage', segment: 'medidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-place/new-place.module#NewPlacePageModule', name: 'NewPlacePage', segment: 'new-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ninos/ninos.module#NinosPageModule', name: 'NinosPage', segment: 'ninos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no/no.module#NoPageModule', name: 'NoPage', segment: 'no', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ocotepeque/ocotepeque.module#OcotepequePageModule', name: 'OcotepequePage', segment: 'ocotepeque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/olancho/olancho.module#OlanchoPageModule', name: 'OlanchoPage', segment: 'olancho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasos-denuncia/pasos-denuncia.module#PasosDenunciaPageModule', name: 'PasosDenunciaPage', segment: 'pasos-denuncia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proceso/proceso.module#ProcesoPageModule', name: 'ProcesoPage', segment: 'proceso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rutas-atencion/rutas-atencion.module#RutasAtencionPageModule', name: 'RutasAtencionPage', segment: 'rutas-atencion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/si/si.module#SiPageModule', name: 'SiPage', segment: 'si', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/santa-barbara/santa-barbara.module#SantaBarbaraPageModule', name: 'SantaBarbaraPage', segment: 'santa-barbara', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/raravez/raravez.module#RaravezPageModule', name: 'RaravezPage', segment: 'raravez', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test2/test2.module#Test2PageModule', name: 'Test2Page', segment: 'test2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testmenu/testmenu.module#TestmenuPageModule', name: 'TestmenuPage', segment: 'testmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/valle/valle.module#VallePageModule', name: 'VallePage', segment: 'valle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vintraf/vintraf.module#VintrafPageModule', name: 'VintrafPage', segment: 'vintraf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yoro/yoro.module#YoroPageModule', name: 'YoroPage', segment: 'yoro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_place_new_place__["a" /* NewPlacePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_info2_info2__["a" /* Info2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info3_info3__["a" /* Info3Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_consejos_consejos__["a" /* ConsejosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denuncia_denuncia__["a" /* DenunciaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_si_si__["a" /* SiPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_raravez_raravez__["a" /* RaravezPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aveces_aveces__["a" /* AvecesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_no_no__["a" /* NoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_testmenu_testmenu__["a" /* TestmenuPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_test2_test2__["a" /* Test2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_intro_intro__["a" /* IntroPage */]
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
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
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<div *ngIf="showSplash" class = "splash">\n\n    <div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-ripple"><div></div><div></div></div>\n\n</div>'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_place_new_place__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consejos_consejos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__denuncia_denuncia__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testmenu_testmenu__ = __webpack_require__(115);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__testmenu_testmenu__["a" /* TestmenuPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title style="text-align: center; ">\n\n      SEGURAS\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  >\n\n\n\n <ion-grid padding>\n\n     <ion-row> &nbsp;</ion-row>\n\n  <ion-row height="100">\n\n\n\n    <ion-col width="100" padding\n\n         style=" align-content: center; background-color: white">\n\n         <div ion-col style="text-align: center; border-radius: 15%;   background-color: white; padding: 10px;"><img (click)="onLoadNewPlace()" src="assets/imgs/megaphone-2.png" style="width : 80% ; height : 80%; "> </div>\n\n      \n\n      <p style="text-align: center; font-size: 20px" (click)="onLoadNewPlace()">  INFÓRMATE </p>\n\n\n\n    </ion-col>\n\n    <ion-col col-1></ion-col>\n\n\n\n    <ion-col width="100" padding\n\n         style="align-content: center; background-color: white">\n\n         <div ion-col style="text-align: center; border-radius: 15%;  background-color: white; padding: 10px;"> <img (click)="Consejos()" src="assets/imgs/shopping-list.png" style="width : 80% ; height : 80%; "> </div>\n\n     \n\n     <p style="text-align: center; font-size: 20px" (click)="Consejos()">CONSEJOS </p>\n\n\n\n    </ion-col>\n\n\n\n\n\n  </ion-row>\n\n  <ion-row > &nbsp;</ion-row>\n\n  <ion-row > &nbsp;</ion-row>\n\n  <ion-row height="100">\n\n\n\n      <ion-col width="100" padding\n\n      style=" align-content: center; background-color: white">\n\n      <div ion-col style="text-align: center; border-radius: 15%;   background-color: white; padding: 10px;">  <img (click)="test()" src="assets/imgs/wishlist.png" style="width : 80% ; height : 80%; "> </div>\n\n   \n\n       <p style="text-align: center; font-size: 20px" (click)="test()"> AUTO<br>EVALÚATE</p>\n\n\n\n </ion-col>\n\n <ion-col col-1></ion-col>\n\n <ion-col width="100" padding\n\n      style=" align-content: center; background-color: white">\n\n      <div ion-col style="text-align: center; border-radius: 15%;   background-color: white; padding: 10px;"> <img (click)="denunciapage()" src="assets/imgs/protection.png" style="width : 80% ; height : 80%; "> </div>\n\n    \n\n    <p style="text-align: center; font-size: 20px" (click)="denunciapage()"> TOMA <br> ACCIÓN</p>\n\n\n\n </ion-col>\n\n\n\n  \n\n   \n\n  </ion-row>\n\n\n\n</ion-grid>\n\n   \n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border style="height:2px;">\n\n  <ion-toolbar no-border color="danger">\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvecesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
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
    AvecesPage.prototype.volver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AvecesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aveces',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\aveces\aveces.html"*/'<!--\n\n  Generated template for the AvecesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Resultados</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<br>\n\n  <p style="color: white; text-align: center; font-size: 20px"><strong>VIVES EN UNA RELACIÓN NO SALUDABLE</strong></p>\n\n   <div style="text-align: center"> <img style="text-align: center;width: 50%; height: 50%" src="assets/imgs/test/test.png"> </div>\n\n\n\n  \n\n    <p style="color: white; text-align: center; font-size: 15px">\n\n        Tu relación tiene signos de ser una relación abusiva. Busca ayuda, puedes prevenir y parar esta situación.  \n\n        </p>\n\n\n\n    <div style="text-align: center" > <button class="button button-danger customBtn" ion-button large color="danger" (click)="volver()">Volver al Menú  </button> </div>  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\aveces\aveces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AvecesPage);
    return AvecesPage;
}());

//# sourceMappingURL=aveces.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
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
    SiPage.prototype.volver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-si',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\si\si.html"*/'<!--\n\n  Generated template for the SiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Resultados</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<br>\n\n  <p style="color: white; text-align: center; font-size: 20px"><strong>¡TEN CUIDADO!</strong></p>\n\n   <div style="text-align: center"> <img style="text-align: center;width: 50%; height: 50%" src="assets/imgs/test/test.png"> </div>\n\n\n\n  \n\n    <p style="color: white; text-align: center; font-size: 15px">\n\n      Esto puede volver a pasar, pide ayuda, tu vida y la de tu familia puede estar en peligro. \n\n        </p>\n\n\n\n    <div style="text-align: center" > <button class="button button-danger customBtn" ion-button large color="danger" (click)="volver()">Volver al Menú  </button> </div>  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\si\si.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SiPage);
    return SiPage;
}());

//# sourceMappingURL=si.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
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
    NoPage.prototype.volver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    NoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no',template:/*ion-inline-start:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\no\no.html"*/'<!--\n\n  Generated template for the NoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>Resultados</ion-title>\n\n        <ion-buttons end>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<br>\n\n  <p style="color: white; text-align: center; font-size: 20px"><strong>­¡FELICIDADES!­</strong></p>\n\n   <div style="text-align: center"> <img style="text-align: center;width: 50%; height: 50%" src="assets/imgs/test/test.png"> </div>\n\n\n\n  \n\n    <p style="color: white; text-align: center; font-size: 15px">\n\n        Tu relación es saludable.  \n\n        </p>\n\n\n\n    <div style="text-align: center" > <button class="button button-danger customBtn" ion-button large color="danger" (click)="volver()">Volver al Menú  </button> </div>  \n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\CloudServ\Documents\GitHub\segurasappio\src\pages\no\no.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NoPage);
    return NoPage;
}());

//# sourceMappingURL=no.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map
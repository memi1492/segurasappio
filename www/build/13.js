webpackJsonp([13],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaCeibaPageModule", function() { return LaCeibaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__la_ceiba__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LaCeibaPageModule = /** @class */ (function () {
    function LaCeibaPageModule() {
    }
    LaCeibaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__la_ceiba__["a" /* LaCeibaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__la_ceiba__["a" /* LaCeibaPage */]),
            ],
        })
    ], LaCeibaPageModule);
    return LaCeibaPageModule;
}());

//# sourceMappingURL=la-ceiba.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaCeibaPage; });
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
 * Generated class for the LaCeibaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaCeibaPage = /** @class */ (function () {
    function LaCeibaPage(navCtrl, navParams, modal, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.view = view;
    }
    LaCeibaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaCeibaPage');
    };
    LaCeibaPage.prototype.closemodal = function () {
        this.view.dismiss();
    };
    LaCeibaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-la-ceiba',template:/*ion-inline-start:"C:\Users\Amy\Desktop\segurasappio\src\pages\la-ceiba\la-ceiba.html"*/'<!--\n  Generated template for the LaCeibaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>La Ceiba</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closemodal()">Atrás</button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-grid>\n        <ion-item>\n            <strong>Fiscalía  de la Mujer</strong><br>\n            Esquina opuesta al edificio Lovable, \n            <br>\n            Barrio Solares Nuevos, boulevar 15 de septiembre <br>\n          Teléfono: 2440-3557\n  \n          </ion-item>\n          <ion-item><strong>Fiscalia de turno, Centro Integrado CEIN, Ministerio Público\n\n            </strong><br>\n            Barrio el Dorado,\n\n             <br>\n             a la par de la Policia Preventiva Nacional<br>\n            Teléfono: 2441-2104\n  \n            </ion-item>\n  \n            <ion-item><strong>Fiscalía de Protección de la Niñez     </strong><br>\n              Esquina opuesta al edificion Lovable, \n<br>\nBarrio Solares Nuevos, Boulevar 15 de septiembre<br>\n              Teléfono: 2443-2627\n\n\n\n  \n              </ion-item>\n  \n              <ion-item><strong>Comisionado Nacional de los Derechos Humanos (CONADEH)\n                </strong><br>\n                Colonia El Toronjal 2, entrada por Pollito La Cumbre del Gimnasio Azcona,\n<br>\ndos cuadras derecho luego girar a la  derecha segunda casa mano izquierda,\n Casa color Amarillo <br>\n                Teléfono: 2441-6001 y 2441-6156\n\n    \n                </ion-item>\n  \n                <ion-item><strong> Dirección de Niñez, Familia y Adolescencia DINAF, Región Atlantida, La Ceiba, Jurisdicción: Atlántida, Colón, Gracias a Dios e Islas de la Bahía\n                  </strong><br>\n                  Barrio Alvarado, Ave 14 de Julio, .\n<br>\nAntiguas instalaciones del Centro Comunal, La Ceiba <br>\n                  Teléfono:  2442-0681\n                  Correo Electrónico: regionalatlantica@dinaf.gob.hn\n\n      \n                  </ion-item>\n\n                  <ion-item><strong> Consejería de Familia de la Dirección Departamental de Salud\n                    </strong><br>\n                    Barrio Potreritos, Calle al Estadio Frente a Panadería Cuquis\n .\n  <br>\n <br>\n                    Teléfono:  3369-3828\n\n                    </ion-item>\n\n                    <ion-item><strong> Departamento de Género de la Alcadía Municipal\n                      </strong><br>\n                      Barrio El Centro, Avenida San Isidro,\n    <br>\n    Frente a Iglesia San Isidro, Alcaldía Municipal de La Ceiba<br>\n                      Teléfono:  3380-5400\n                      Correo Electrónico: municipalidadlaceiba@yahoo.es\n\n\n\n  \n                      </ion-item>\n\n                      <ion-item><strong> Secretaría de Juzgados\n                        </strong><br>\n                        Edificio Palacio de Justicia, Colonia La Quinta, Los Laureles,\n\n      <br>\n      2 kilómetros, Carretera a Tocoa, frente a Reataurante Las Hamacas, La Ceiba<br>\n                        Teléfono:  2408-4306\n  \n  \n  \n    \n                        </ion-item>\n\n                        <ion-item><strong> Organización de Desarrollo Étnico Comintario (ODECO)\n\n                          </strong><br>\n                          Barrio La Isla, segunda calle, apartado postal 538\n\n  \n        <br>\n                          Teléfono:  Tel:2443-3651 y Fax 2443-4642\n                          Correo Electrónico: odeco.hn@gmail.com\n\n\n    \n    \n    \n      \n                          </ion-item>\n\n\n\n    </ion-grid>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Amy\Desktop\segurasappio\src\pages\la-ceiba\la-ceiba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LaCeibaPage);
    return LaCeibaPage;
}());

//# sourceMappingURL=la-ceiba.js.map

/***/ })

});
//# sourceMappingURL=13.js.map
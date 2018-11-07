import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  
  CicloViolencia() {
 const CicloViolencia = this.modal.create('CicloViolenciaPage');
 
 CicloViolencia.present();
  }

  ConsejosSeguridad(){
    const ConsejosSeguridad = this.modal.create('ConsejosSeguridadPage');
    ConsejosSeguridad.present();
  }

  definicion(){
    const Definicion = this.modal.create('DefinicionPage');
    Definicion.present();
  }

}

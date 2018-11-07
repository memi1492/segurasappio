import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
})
export class DenunciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciaPage');
  }
 
  DenunciasDef(){
    const DenunciasDef = this.modal.create('DenunciasDefPage');
    DenunciasDef.present();
  }

  RutasAtencion(){
    const RutasAtencion = this.modal.create('RutasAtencionPage');
    RutasAtencion.present();
  }

  PasosDenuncia(){
    const PasosDenuncia = this.modal.create('PasosDenunciaPage');
    PasosDenuncia.present();
  }

}

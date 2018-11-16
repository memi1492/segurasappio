import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the DenunciamenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denunciamenu',
  templateUrl: 'denunciamenu.html',
})
export class DenunciamenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public view: ViewController) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciamenuPage');
  }

  closemodal(){
    this.view.dismiss();
  }

  Def(){
    const Def = this.modal.create('DenunciasDefPage');
    Def.present()
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

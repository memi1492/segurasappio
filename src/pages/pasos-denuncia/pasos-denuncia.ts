import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the PasosDenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pasos-denuncia',
  templateUrl: 'pasos-denuncia.html',
})
export class PasosDenunciaPage {

  constructor( private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasosDenunciaPage');
  }

  closemodal(){
    this.view.dismiss();
  }
}

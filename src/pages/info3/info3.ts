import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Info3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }

  Vintraf() {
    const Identificala = this.modal.create('VintrafPage');
    
    Identificala.present();
     }

}

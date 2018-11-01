import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Info2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }
  Identificala() {
    const Identificala = this.modal.create('IdentificaPage');
    
    Identificala.present();
     }

     Ninos() {
      const Ninos = this.modal.create('NinosPage');
      
      Ninos.present();
       }
   
    

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the IdentificaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identifica',
  templateUrl: 'identifica.html',
})
export class IdentificaPage {

  constructor(public navCtrl: NavController,  private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificaPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

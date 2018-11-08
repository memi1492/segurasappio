import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ComayaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comayagua',
  templateUrl: 'comayagua.html',
})
export class ComayaguaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComayaguaPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

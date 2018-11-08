import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the LaCeibaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-la-ceiba',
  templateUrl: 'la-ceiba.html',
})
export class LaCeibaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaCeibaPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

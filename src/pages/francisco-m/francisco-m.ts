import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the FranciscoMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-francisco-m',
  templateUrl: 'francisco-m.html',
})
export class FranciscoMPage {

  constructor(private navParams: NavParams, private view: ViewController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FranciscoMPage');
  }
  closemodal(){
    this.view.dismiss();
  }

}

import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CopanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-copan',
  templateUrl: 'copan.html',
})
export class CopanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CopanPage');
  }

  closemodal(){
    this.view.dismiss();
  }

}

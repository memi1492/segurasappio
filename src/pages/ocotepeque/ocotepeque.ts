import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the OcotepequePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ocotepeque',
  templateUrl: 'ocotepeque.html',
})
export class OcotepequePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OcotepequePage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

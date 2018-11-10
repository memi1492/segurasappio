import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the GraciasADiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gracias-a-dios',
  templateUrl: 'gracias-a-dios.html',
})
export class GraciasADiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraciasADiosPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

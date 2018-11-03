import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MedidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medidas',
  templateUrl: 'medidas.html',
})
export class MedidasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedidasPage');
  }

  closemodal(){
    this.view.dismiss();
  }
}

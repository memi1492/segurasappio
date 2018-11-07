import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DenunciasDefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncias-def',
  templateUrl: 'denuncias-def.html',
})
export class DenunciasDefPage {

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciasDefPage');
  }
  closemodal(){
    this.view.dismiss();
  }

 
}

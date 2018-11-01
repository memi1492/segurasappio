import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the NinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ninos',
  templateUrl: 'ninos.html',
})
export class NinosPage {

  constructor(public navCtrl: NavController,  private view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NinosPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

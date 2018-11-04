import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the ProcesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proceso',
  templateUrl: 'proceso.html',
})
export class ProcesoPage {

  constructor( private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcesoPage');
  }
  
  closemodal(){
    this.view.dismiss();
  }
}

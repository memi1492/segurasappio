import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the RutasAtencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas-atencion',
  templateUrl: 'rutas-atencion.html',
})
export class RutasAtencionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasAtencionPage');
  }

  
  closemodal(){
    this.view.dismiss();
  }

}

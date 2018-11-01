import { Component, ViewChild } from '@angular/core';
import { IonicPage,  NavParams, ModalController, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the CicloViolenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ciclo-violencia',
  templateUrl: 'ciclo-violencia.html',
})
export class CicloViolenciaPage {

  @ViewChild(Slides) slides: Slides;

  constructor( private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CicloViolenciaPage');
  }

  closemodal(){
    this.view.dismiss();
  }
}

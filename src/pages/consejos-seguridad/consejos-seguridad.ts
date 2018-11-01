import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the ConsejosSeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consejos-seguridad',
  templateUrl: 'consejos-seguridad.html',
})
export class ConsejosSeguridadPage {

  @ViewChild(Slides) slides: Slides;

  constructor(private navParams: NavParams, private view: ViewController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsejosSeguridadPage');
  }

  closemodal(){
    this.view.dismiss();
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor( private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  closemodal(){
    this.view.dismiss();
  }
}

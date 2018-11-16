import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Test2Page } from '../test2/test2';

/**
 * Generated class for the TestmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testmenu',
  templateUrl: 'testmenu.html',
})
export class TestmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestmenuPage');
  }
 
  testpareja(){
      this.navCtrl.push(TestPage);
  }

  testnoviazgo(){
    this.navCtrl.push(Test2Page);
}
}

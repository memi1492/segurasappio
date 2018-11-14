import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Info2Page } from '../info2/info2';
import { Info3Page } from '../info3/info3';
/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

domestica(){
    console.log("InfoPage")
    this.navCtrl.push(InfoPage);
}

sexual(){
    console.log("Info2Page")
    this.navCtrl.push(Info2Page);
} 

intrafamiliar(){
  console.log("Info2Page")
  this.navCtrl.push(Info3Page);
} 
}

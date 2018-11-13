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

  @ViewChild(Slides) slides: Slides; 
  public csi = 0;
  public cav = 0;
  public crv = 0;
  public cno = 0;

  constructor( private navParams: NavParams, private view: ViewController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
   
  }
  closemodal(){
    this.view.dismiss();
  }

  
  
  fsi(){
    
    this.csi++;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log(this.csi);
  
  }

  faveces(){
    this.cav++;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  fraravez(){
    this.crv++;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  fno(){
    this.cno++;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
}

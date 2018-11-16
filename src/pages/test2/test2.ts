import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides } from 'ionic-angular';
import { SiPage } from '../si/si';
import { RaravezPage } from '../raravez/raravez';
import { AvecesPage } from '../aveces/aveces';
import { NoPage } from '../no/no';

/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {

  @ViewChild(Slides) slides: Slides; 
  public csi = 0;
  public cav = 0;
  public cno = 0;

  constructor( private navParams: NavParams, private view: ViewController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Test2Page');
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

 

  fno(){
    this.cno++;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  fsifinal(){
    this.csi++;
    this.fcomparadora();

      }

  fcomparadora(){
    if(this.csi  >= this.cav && this.csi  >= this.cno){
      this.navCtrl.push(SiPage);
    }

    else if (this.cav  >= this.csi && this.cav  >= this.cno){

      this.navCtrl.push(AvecesPage);


    }


    else if (this.cno  >= this.csi && this.cno  >= this.cav){
      this.navCtrl.push(NoPage);
      
    }

  }

  favecesfinal(){
    this.cav++;
    this.fcomparadora();

  }

  

  fnofinal(){
    this.cno++;
    
    this.fcomparadora();
   
  }

}

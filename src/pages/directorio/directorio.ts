import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ModalController, ViewController } from 'ionic-angular';


/**
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {
  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

  closemodal(){
    this.view.dismiss();
  }

  FM(){
    const FM = this.modal.create('FranciscoMPage');
    FM.present();
  }

  LaCeiba(){
    const ceiba = this.modal.create('LaCeibaPage');
    ceiba.present();
  }

  islas(){
    const islas = this.modal.create('IslasPage');
    islas.present();
  }

  comayagua(){
    const comayagua = this.modal.create('ComayaguaPage');
    comayagua.present();
  }
  
  
  
  

}

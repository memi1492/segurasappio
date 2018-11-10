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

  Atlantida(){
    const Atlantida = this.modal.create('AtlantidaPage');
    Atlantida.present();
  }

  Colon(){
    const Colon = this.modal.create('ColonPage');
    Colon.present();
  }

  Comayagua(){
    const comayagua = this.modal.create('ComayaguaPage');
    comayagua.present();
  }

  Copan(){
    const Copan = this.modal.create('CopanPage');
    Copan.present();
  }

  Cortes(){
    const Cortes = this.modal.create('CortesPage');
    Cortes.present();
  }

  Choluteca(){
    const Choluteca = this.modal.create('CholutecaPage');
    Choluteca.present();
  }

  ElParaiso(){
    const ElParaiso = this.modal.create('ElParaisoPage');
    ElParaiso.present();
  }

  FM(){
    const FM = this.modal.create('FranciscoMPage');
    FM.present();
  }
GraciasADios(){
  const GraciasADios = this.modal.create('GraciasADiosPage');
  GraciasADios.present();
}

  LaCeiba(){
    const ceiba = this.modal.create('LaCeibaPage');
    ceiba.present();
  }

  Intibuca(){
    const Intibuca = this.modal.create('IntibucaPage');
    Intibuca.present();
  }

  islas(){
    const islas = this.modal.create('IslasPage');
    islas.present();
  }

  LaPaz(){
    const LaPaz = this.modal.create('LaPazPage');
    LaPaz.present();
  }

  Ocotepeque(){
    const Ocotepeque = this.modal.create('OcotepequePage');
    Ocotepeque.present();
  }

  Olancho(){
    const Olancho = this.modal.create('OlanchoPage');
    Olancho.present();
  }

  SantaBarbara(){
    const SantaBarbara = this.modal.create('SantaBarbaraPage');
    SantaBarbara.present();
  }

  Valle(){
    const Valle = this.modal.create('VallePage');
    Valle.present();
  }

  Yoro(){
    const Yoro = this.modal.create('YoroPage');
    Yoro.present();
  }


  
  
  
  
  

}

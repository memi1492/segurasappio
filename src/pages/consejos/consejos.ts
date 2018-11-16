import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ConsejosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-consejos',
  templateUrl: 'consejos.html',
})
export class ConsejosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsejosPage');
  }

  medidas(){
    const Medidas = this.modal.create('MedidasPage');
    Medidas.present();
  }

  proceso(){
    const Proceso = this.modal.create('ProcesoPage');
    Proceso.present();
  }

  ConsejosSeguridad(){
    const ConsejosSeguridad = this.modal.create('ConsejosSeguridadPage');
    ConsejosSeguridad.present();
  }
  
  Ninos() {
    const Ninos = this.modal.create('NinosPage');
    
    Ninos.present();
     }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  
  CicloViolencia() {
 const CicloViolencia = this.modal.create('CicloViolenciaPage');
 

 CicloViolencia.present();
  }



  vfisica(){
    let vfisica = this.alertCtrl.create({
      title: "Violencia Física",
      message: "Existen golpes. empujadas y cachetadas ",
      buttons: [
        {
          text: "Atrás",
         
        } ],
        cssClass: 'alertCustomCss',
    });
    vfisica.present()
     }

     vsexual(){
      let vsexual = this.alertCtrl.create({
        title: "Violencia Sexual",
        message: "Te obliga a tener relaciones sexuales y en posiciones que no deseas, También te puede impedir que realices una planificación familiar.",
        buttons: [
          {
            text: "Atrás",
           
          } ],
          cssClass: 'alertCustomCss',
      });
      vsexual.present()
       }

       vpsicologica(){
        let vpsicologica = this.alertCtrl.create({
          title: "Violencia Psicológica",
          message: "Te degrada, controla tus acciones, comportamientos, creencias y decisiones por medio de la intimidación, manipulación, amenaza directa e indirecta.",
          buttons: [
            {
              text: "Atrás",
             
            } ],
            cssClass: 'alertCustomCss',
        });
        vpsicologica.present()
         }

         vpatrimonial(){
          let vpatrimonial = this.alertCtrl.create({
            title: "Violencia Patrimonial",
            message: "Te niega tus bienes, rompe tus cosas, teniendo dinero te lo niega para cubrir los gastos y el de tus hijos e hijas, dispone del dinero o de tus bienes sin avisarte.",
            buttons: [
              {
                text: "Atrás",
               
              } ],
              cssClass: 'alertCustomCss',
          });
          vpatrimonial.present()
           }

}

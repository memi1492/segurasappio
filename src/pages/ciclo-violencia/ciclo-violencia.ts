import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Slides, AlertController  } from 'ionic-angular';

/**
 * Generated class for the CicloViolenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ciclo-violencia',
  templateUrl: 'ciclo-violencia.html',
})
export class CicloViolenciaPage {

  @ViewChild(Slides) slides: Slides;

  constructor( private navParams: NavParams, private view: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CicloViolenciaPage');
  }

  closemodal(){
    this.view.dismiss();
  }

  agresor1(){
 let agresor1 = this.alertCtrl.create({
   title: "Características del Agresor",
   message: "Se burla de su pareja, la ignora, la compara con otras personas, la corrige en público, la insulta, le grita y la culpa de todo.",
   buttons: [
     {
       text: "Atrás",
      
     } ],
     cssClass: 'alertCustomCss',
 });
 agresor1.present()
  }

  victima1(){
    let victima1 = this.alertCtrl.create({
      title: "Características de la Víctima",
      message: "Siente miedo de hablar o actuar por temor a las criticas, se siente deprimida y débil.",
      buttons: [
        {
          text: "Atrás",
         
        } ],
        cssClass: 'alertCustomCss',
    });
    victima1.present()
     }

     agresor2(){
      let agresor2 = this.alertCtrl.create({
        title: "Características del Agresor",
        message: "Ejerce violencia física: puede pellizcar, golpear, empujar, patear, recurrir a objetos para lastimar, exigir relaciones sexuales o llegar a la violación.",
        buttons: [
          {
            text: "Atrás",
           
          } ],
          cssClass: 'alertCustomCss',
      });
      agresor2.present()
       }
     
       victima2(){
         let victima2 = this.alertCtrl.create({
           title: "Características de la Víctima",
           message: "Puede sentir un miedo constante, alejarse o separarse temporalmente buscando una salida, interponer una denuncia.",
           buttons: [
             {
               text: "Atrás",
              
             } ],
             cssClass: 'alertCustomCss',
         });
         victima2.present()
          }

          agresor3(){
            let agresor3 = this.alertCtrl.create({
              title: "Características del Agresor",
              message: "Se muestra cariñoso y arrepentido. Utiliza todos los recursos para lograr que no termine la relación.",
              buttons: [
                {
                  text: "Atrás",
                 
                } ],
                cssClass: 'alertCustomCss',
            });
            agresor3.present()
             }
           
             victima3(){
               let victima3 = this.alertCtrl.create({
                 title: "Características de la Víctima",
                 message: "Desea creer que la amabilidad y las conductas amorosas durarán, espera que el cambie y no la vuelva a lastimar.",
                 buttons: [
                   {
                     text: "Atrás",
                    
                   } ],
                   cssClass: 'alertCustomCss',
               });
               victima3.present()
                }






}

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the DenunciasDefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncias-def',
  templateUrl: 'denuncias-def.html',
})
export class DenunciasDefPage {

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciasDefPage');
  }
  closemodal(){
    this.view.dismiss();
  }
  que(){
    let que = this.alertCtrl.create({
      title: "¿Qué es una denuncia?",
      message: " Es un mecanismo que cada persona tiene para dar a conocer, la violencia sufrida, ante la autoridad competente. ",
      buttons: [
        {
          text: "Atrás",
         
        } ],
        cssClass: 'alertCustomCss',
    });
    que.present()
     }
 
     elementos(){
      let elementos = this.alertCtrl.create({
        title: " ¿Qué elementos debe recoger la denuncia?",
        message: "1. Nombre completo de la víctima <br> 2. Lugar y fecha en donde ocurrieron los hechos  <br> 3. La hora en la que sucedieron los hechos. En caso de un delito, esto no debe faltar <br> 4. Descripción detallada de los hechos. Mencionar todos los detalles, aunque parezcan insignificantes <br> 5. En caso de haber testigos, sus nombres y cómo ubicarlos ",
        buttons: [
          {
            text: "Atrás",
           
          } ],
          cssClass: 'alertCustomCss',
      });
      elementos.present()
       }

       exigir(){
        let exigir = this.alertCtrl.create({
          title: "Violencia Física",
          message: "1. Que reciban tu denuncia en un espacio donde haya privacidad <br> 2.	Que te respeten durante el relato de los hechos. es decir, que no hagan preguntas incomodas o comentarios que te culpabilicen por la agresión recibida.<br> 3.	Que registren la denuncia en un libro o base de datos.<br> 4.	Que te permitan leer la denuncia antes de firmarla. Fíjate bien en las horas y fechas registradas en el documento. No firmes si no estás de acuerdo con lo escrito en la denuncia, si esta no refleja los hechos que has denunciado. <br> 5.	Y no olvides pedir el nombre de la persona que recibe la denuncia. <br> 6.Que te entreguen una copia de la denuncia, la cual debe estar sellada y firmada. <br> <strong> Además, tienes derecho a que protejan tu vida y la de tu familia.</strong>",
          buttons: [
            {
              text: "Atrás",
             
            } ],
            cssClass: 'alertCustomCss',
        });
        exigir.present()
         }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  
  contactos:any={};
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage.get('contact1').then((contacto1) => {
      this.contactos.contact1 = contacto1;

    })
    this.storage.get('contact2').then((contacto2) => {
      this.contactos.contact2 = contacto2;

    })
    this.storage.get('contact3').then((contacto3) => {
      this.contactos.contact3 = contacto3;

    })
  }
  



  setData(){

    var contact1 = this.contactos.contact1;
    var contact2 = this.contactos.contact2;
    var contact3 = this.contactos.contact3;
   
    this.storage.set('contact1', contact1);
    this.storage.set('contact2', contact2);
    this.storage.set('contact3', contact3);
  }

  atras(){
    this.navCtrl.push(HomePage);
  }

}

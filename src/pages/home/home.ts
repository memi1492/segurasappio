import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { ConsejosPage } from '../consejos/consejos';
import { DenunciaPage } from '../denuncia/denuncia';
import { TestmenuPage } from '../testmenu/testmenu';
import { Platform } from 'ionic-angular'; 
import { Storage } from "@ionic/storage";





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public platform: Platform, private storage: Storage) {

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => { 



      this.storage.get('primeravez').then((primeravez) => {

        if (primeravez == null){
          this.storage.set('primeravez', 'primeravez');
              //mandar a pagina de acerca de.
        }
        else{


          this.storage.get('contact1').then((contact1) => {


            if (contact1 == null){
             
              //mandar a pagina contactos.


            }


          })



   
        }
        })
      


    });
  }
  

    onLoadNewPlace(){
        this.navCtrl.push(NewPlacePage);
    }

    Consejos(){
      this.navCtrl.push(ConsejosPage);
  }

  denunciapage(){
    this.navCtrl.push(DenunciaPage);
}

test(){
  this.navCtrl.push(TestmenuPage);
}

}

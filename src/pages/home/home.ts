import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { ConsejosPage } from '../consejos/consejos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    onLoadNewPlace(){
        this.navCtrl.push(NewPlacePage);
    }

    Consejos(){
      this.navCtrl.push(ConsejosPage);
  }
}

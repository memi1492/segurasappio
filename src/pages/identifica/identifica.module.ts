import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentificaPage } from './identifica';

@NgModule({
  declarations: [
    IdentificaPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentificaPage),
  ],
})
export class IdentificaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OlanchoPage } from './olancho';

@NgModule({
  declarations: [
    OlanchoPage,
  ],
  imports: [
    IonicPageModule.forChild(OlanchoPage),
  ],
})
export class OlanchoPageModule {}

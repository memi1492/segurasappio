import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaPazPage } from './la-paz';

@NgModule({
  declarations: [
    LaPazPage,
  ],
  imports: [
    IonicPageModule.forChild(LaPazPage),
  ],
})
export class LaPazPageModule {}

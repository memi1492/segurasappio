import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantaBarbaraPage } from './santa-barbara';

@NgModule({
  declarations: [
    SantaBarbaraPage,
  ],
  imports: [
    IonicPageModule.forChild(SantaBarbaraPage),
  ],
})
export class SantaBarbaraPageModule {}

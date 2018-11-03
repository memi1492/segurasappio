import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcesoPage } from './proceso';

@NgModule({
  declarations: [
    ProcesoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcesoPage),
  ],
})
export class ProcesoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CortesPage } from './cortes';

@NgModule({
  declarations: [
    CortesPage,
  ],
  imports: [
    IonicPageModule.forChild(CortesPage),
  ],
})
export class CortesPageModule {}

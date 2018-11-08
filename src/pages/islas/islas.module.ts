import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IslasPage } from './islas';

@NgModule({
  declarations: [
    IslasPage,
  ],
  imports: [
    IonicPageModule.forChild(IslasPage),
  ],
})
export class IslasPageModule {}

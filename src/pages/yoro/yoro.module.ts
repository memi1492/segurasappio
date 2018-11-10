import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoroPage } from './yoro';

@NgModule({
  declarations: [
    YoroPage,
  ],
  imports: [
    IonicPageModule.forChild(YoroPage),
  ],
})
export class YoroPageModule {}

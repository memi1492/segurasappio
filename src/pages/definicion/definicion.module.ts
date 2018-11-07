import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefinicionPage } from './definicion';

@NgModule({
  declarations: [
    DefinicionPage,
  ],
  imports: [
    IonicPageModule.forChild(DefinicionPage),
  ],
})
export class DefinicionPageModule {}

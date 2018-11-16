import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestmenuPage } from './testmenu';



@NgModule({
  declarations: [
    TestmenuPage,
    
  ],
  imports: [
    IonicPageModule.forChild(TestmenuPage),
  ],
})
export class TestmenuPageModule {}

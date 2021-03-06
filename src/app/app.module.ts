import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NewPlacePage } from '../pages/new-place/new-place';
import { SMS } from "@ionic-native/sms";
import { CallNumber } from "@ionic-native/call-number";
import { Geolocation } from "@ionic-native/geolocation";

import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { Info2Page } from '../pages/info2/info2';
import { Info3Page } from '../pages/info3/info3';
import { ConsejosPage } from '../pages/consejos/consejos';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { SiPage } from '../pages/si/si';
import { AvecesPage } from '../pages/aveces/aveces';
import { RaravezPage } from '../pages/raravez/raravez';
import { NoPage } from '../pages/no/no';
import { TestmenuPage } from '../pages/testmenu/testmenu';
import { TestPage } from '../pages/test/test';
import { Test2Page } from '../pages/test2/test2';
import { IntroPage } from '../pages/intro/intro';











@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    AboutPage,
    ContactPage,
    TabsPage,
    InfoPage,
    Info2Page,
    Info3Page,
    ConsejosPage,
    DenunciaPage,
    TestPage,
    SiPage,
    RaravezPage,
    AvecesPage,
    NoPage,
    TestmenuPage,
    Test2Page,
    IntroPage


   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    AboutPage,
    ContactPage,
    TabsPage,
    InfoPage,
    Info2Page,
    Info3Page,
    ConsejosPage,
    DenunciaPage,
    TestPage,
    SiPage,
    RaravezPage,
    AvecesPage,
    NoPage,
    TestmenuPage,
    Test2Page,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SMS,
    CallNumber,
    Geolocation,
    Storage
  ]
})
export class AppModule {}

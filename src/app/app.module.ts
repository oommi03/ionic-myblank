import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//imPort
import { HttpModule } from '@angular/http';

//Page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { ContractPage } from '../pages/contract/contract';
import { MessagePage } from '../pages/message/message';
import { SettingPage } from '../pages/setting/setting';
import { LoginPage } from '../pages/login/login';
import { AddcustomerPage } from '../pages/addcustomer/addcustomer';

//Provider
import { UserProvider } from '../providers/user/user';
import { LoginProvider } from '../providers/login/login';
import { OmiseProvider } from '../providers/omise/omise';
import { CustomerProvider } from '../providers/customer/customer';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage,
    MapPage,
    TabsPage,
    ContractPage,
    MessagePage,
    SettingPage,
    LoginPage,
    AddcustomerPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookPage,
    MapPage,
    TabsPage,
    ContractPage,
    MessagePage,
    SettingPage,
    LoginPage,
    AddcustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    { provide: "OMISEAPI_URL", useValue: "https://vault.omise.co/tokens" },
    { provide: "API_URL", useValue: "http://192.168.1.103:3000" },
    OmiseProvider,
    CustomerProvider
  ]
})
export class AppModule {}

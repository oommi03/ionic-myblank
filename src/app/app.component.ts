import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { MapPage } from '../pages/map/map';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  nav: any;
  rootPage: any = BookPage;
  page: Array<{ title:string,Component: any}>;

  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // let token = localStorage.getItem("token");
      //   if (token) {
      //     this.rootPage = TabsPage;
      //   } else {
      //     this.rootPage = LoginPage;
      //   }
   
    });

    this.page = [
    {title : "Home",Component : HomePage},
    {title : "Book",Component : BookPage}

    ];
      // events.subscribe("logout", () => {
      //   console.log("logout.....");
      //   localStorage.removeItem("token");
      //   this.rootPage = LoginPage;
      // });  
  }


 
}


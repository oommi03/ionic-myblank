import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


import { LoginProvider } from '../../providers/login/login';

import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {
  username: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    this.loginProvider.doLogin(this.username, this.password)
      .then((data: any) => {
        if (data.ok) {
          console.log(data);
          let token = data.token;
          localStorage.setItem("token", token);
          // redirect to tabpage
          this.navCtrl.setRoot(TabsPage);
        } else {
          alert("login failed");  
      }
    },(error) => {})
  }
}

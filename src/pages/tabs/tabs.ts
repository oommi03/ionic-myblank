import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BookPage } from '../book/book';
import { ContractPage } from '../contract/contract';
import { MessagePage } from '../message/message';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabMessage: any;
  tabBook: any;
  tabSetting: any;
  tabContract: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBook = BookPage;
    this.tabMessage = MessagePage;
    this.tabSetting = SettingPage;
    this.tabContract = ContractPage;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Events,App } from 'ionic-angular';
import { MapPage } from "../map/map";
import { ContractPage } from '../contract/contract';
import { LoginPage } from '../login/login';
import { AddcustomerPage } from '../addcustomer/addcustomer';


import { CustomerProvider } from '../../providers/customer/customer';
import { OmiseProvider } from '../../providers/omise/omise';
/**
 * Generated class for the BookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
  providers: [OmiseProvider,CustomerProvider],
  
})
export class BookPage {
  customers: Array<{any}>;
  token: string;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public customerProvider: CustomerProvider,
    public loadingCtrl: LoadingController,
    public omiseProvider: OmiseProvider,
    public events: Events,
    public app: App
    ) {
    // this.user = [
    //   { name: "john doe", email: "john@gmail.com" },
    //   { name: "steve job", email: "steve@gmail.com" }
    // ];
    this.token = localStorage.getItem("token");
    
  }


  goDetail() {
    this.navCtrl.push(MapPage,{});
  }

  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: "waiting...",
      spinner: "dots"
    });
    loader.present();
    this.customers = [];
    this.customerProvider.getCustomers(this.token).then((data: any) => {
      loader.dismiss();
      // this.customers = data.rows;
      data.rows.forEach(v => {
        let obj: any = {
          id: v.id,
          first_name: v.first_name,
          last_name: v.last_name,
          sex: v.sex,
          emaol: v.email,
          image: v.image  ? 'data:image/jpeg;base64,' + v.image : null
        }
        this.customers.push(obj);
      });
    }, error => {
      loader.dismiss();
      });
    
  }

  //omise
  name: string;
  number: string;
  month: string;
  year: string;
  city: string;
  postal: string;
  security: string;
  doLogin() {
    console.log("token");
    this.omiseProvider.doLogin(this.name, this.number,this.month,this.year,this.city,this.postal,this.security)
      .then((data: any) => {
        console.log(data);
        if (data.used == false) {
          let token = data.id;
          localStorage.setItem("omisetoken", token);
          // redirect to tabpage
          console.log(token);
          this.navCtrl.setRoot(ContractPage);
        } else {
          alert(" failed");  
      }
    },(error) => {})
  }
 


  logout() {
  //remove token
    localStorage.removeItem("token");
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
   // this.navCtrl.setRoot(LoginPage);
   // this.events.publish("logout");
    
}

  add() {
    this.navCtrl.push(AddcustomerPage);
}  
 
  
}

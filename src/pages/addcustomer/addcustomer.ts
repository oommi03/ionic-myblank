import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { CustomerProvider } from '../../providers/customer/customer';
/**
 * Generated class for the AddcustomerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addcustomer',
  templateUrl: 'addcustomer.html',
  providers: [CustomerProvider]
})
export class AddcustomerPage {
  sexes: Array<{ id: Number, name: string }> = [];
  groups: Array<{ id: number, name: string }> = [];
  token: string;
  sex: string;
  email: string;
  firstName: string;
  lastName: string;
  customerTypeId: number;
  telephone: string
  constructor(public navCtrl: NavController, public navParams: NavParams,public customerProvider: CustomerProvider) {
    this.sexes = [
      { id: 1, name: "ชาย" },
      { id: 2, name: "หญิง" }
    ];
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    this.customerProvider.getGroups(this.token)
      .then((data: any) => {
        this.groups = data.rows;
      }, (error) => {
        
      });
  }
  

  save() {
    
    let customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      sex: this.sex,
      email: this.email,
      telephone: this.telephone,
      customerTypeId: this.customerTypeId,
      image: null
    };
    this.customerProvider.saveCustomer(this.token,customer)
      .then((data: any) => {
        console.log(data);
        if (data.ok) {
          alert("success");
        }
      
      }, (error:any) => {
        console.log(error);
    })
  }; 
}

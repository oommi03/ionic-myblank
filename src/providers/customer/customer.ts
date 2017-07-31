import { Injectable,Inject } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CustomerProvider {

  constructor(public http: Http, @Inject('API_URL') private url: string) { }
  
  getCustomers(token: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      });
      let options = new RequestOptions({ headers: headers });
      this.http.get(`${this.url}/customers`, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
  // type of customer
    getGroups(token: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      });
      let options = new RequestOptions({ headers: headers });
      this.http.get(`${this.url}/customers/groups`, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
    }
  //save
  saveCustomer(token: string,customer: any) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      });
      let options = new RequestOptions({ headers: headers });
      let body = {
        firstName: customer.firstName,
        lastName: customer.lastName,
        sex: customer.sex,
        customerTypeId: customer.customerTypeId,
        telephone: customer.telephone,
        email: customer.email,
        imange: customer.imange
      };
      this.http.post(`${this.url}/customers`,body, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
          console.log(body);
        }, err => {
          reject(err)
        });
    });
  }
}

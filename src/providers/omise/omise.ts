import { Injectable,Inject } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OmiseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OmiseProvider {

  constructor(public http: Http,@Inject("OMISEAPI_URL") public url: string) {
    console.log('Hello OmiseProvider Provider');
  }
  test() {
    console.log(this.url)
  }
//omise
  doLogin(name: string,number: string,month: string,year: string,city: string,postal: string,security: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ "Content-Type": "application/json" ,"Authorization": "Basic cGtleV90ZXN0XzU4ZXFtbng5M3JubmRkN2t2YmI6"});
      let options = new RequestOptions({ headers: headers });
      //let body = { "card[name]": name, "card[number]": number, "card[expiration_month]": month, "card[expiration_year]": year, "card[city]": city, "card[postal_code]": postal, "card[security_code]": security }
      let body = {
        card: {
          name: name,
          number: number,
          expiration_month: month,
          expiration_year: year,
          city: city,
          postal_code: postal,
          security_code: security
        }
      };
      console.log(body);
      this.http.post(this.url,body,options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log(data);
          console.log('ok');
        }, (error: any) => {
          console.log(error);
        reject(error);
      });
    });
  }
}

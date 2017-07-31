import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {
  url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(public http: Http) {
    
  }
  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

}

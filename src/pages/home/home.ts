import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullname: string = "oommi";
  group: Array<{ id: number, name: string }> = [];

  constructor(public navCtrl: NavController) {
    //let test = new person("oommi", "dear");
  
    this.group.push({ id: 1, name: "oommi" });
    this.group = [
      { id: 2, name: "dear" }
    ];
  }
  showName(group: {id: number,name: string}) {
    alert(group.name);
  }

}
class person {
  fname: string;
  lname: string;
  constructor(_fname: string,_lname: string) {
    this.fname = _fname;
    this.lname = _lname;
  }
  getfullname() {
    let fullname = this.fname + " " + this.lname;
    alert(fullname);
  }
}

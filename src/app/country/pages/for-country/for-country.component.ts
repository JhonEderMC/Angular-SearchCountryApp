import { Component } from '@angular/core';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  term:string ="";

  constructor() { }

  search(){
    console.log(this.term)
  }
  

}

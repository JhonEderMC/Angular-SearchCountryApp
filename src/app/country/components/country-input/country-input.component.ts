import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent{
  
  @Output() term:string = '';
  constructor() { }

  search(){
    console.log(this.term);
  }

}

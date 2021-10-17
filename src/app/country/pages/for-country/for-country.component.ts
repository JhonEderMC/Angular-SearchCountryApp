import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  term:string ="";
  thereIsError:boolean = false;

  constructor(private searchService:SearchService) { }

  search(){
    this.thereIsError=false;      
    //console.log(this.term)
    this.searchService.searchCountry(this.term)
    .subscribe((result)=>{
      console.log(result);      
    }, (err)=>{
      console.log(err.error.status);
      if(err.error.status === 404){
        this.thereIsError=true;
        console.log("here")
      }      
    });
  }
  

}

import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

  term:string ="";
  thereIsError:boolean = false;
  resultSearchCountries:Country [] =[];

  constructor(private searchService:SearchService) { }

  search(){    
    this.thereIsError=false;      
    //console.log(this.term)
    this.searchService.searchCountry(this.term)
    .subscribe((result:Country [])=>{
      console.log(result);     
      this.resultSearchCountries = result;
      result.forEach(country => country.cca2)
    }, (err)=>{
      console.log(err.error.status);
      if(err.error.status === 404){
        this.thereIsError=true;
        this.resultSearchCountries=[];
      }      
    });
  }
  

}

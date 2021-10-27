import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [ `li{
    cursor:pointer}`
  ]
})
export class ForCountryComponent {

  query:string ="";
  thereIsError:boolean = false;
  resultSearch:Country [] =[];
  countrySeggestions:Country[] =[];
  showSuggestions:boolean = false;

  constructor(private searchService:SearchService) { }

  search(term:string){
    this.query = term;    
    this.thereIsError=false; 
    this.countrySeggestions=[];
    this.searchService.searchCountry(term)
    .subscribe((result:Country [])=>{
      console.log(result);     
      this.resultSearch = result;
      //result.forEach(country => country.cca2)
    }, (err)=>{
      console.log(err.error.status);
      if(err.error.status === 404){
        this.thereIsError=true;
        this.resultSearch=[];
      }      
    });    
  }

  suggestions(term:string){
    this.thereIsError=false;
    this.showSuggestions=true;
    this.query = term;
    this.searchService.searChCountrySuggestions(term)
      .subscribe(list =>{
        this.countrySeggestions = list.splice(0,5)        
      }, (error)=>{
        this.countrySeggestions=[]
      });
  }

  searchSuggestions(term:string){
    this.search(term);
    this.showSuggestions=false;
  }

  
  

}

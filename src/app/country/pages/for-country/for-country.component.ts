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

  query:string ="";
  thereIsError:boolean = false;
  resultSearch:Country [] =[];

  constructor(private searchService:SearchService) { }

  search(term:string){
    this.query = term;    
    this.thereIsError=false;          
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
    //TODO: Crear sugerencias
  }

  
  

}

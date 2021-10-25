import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';
import {switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!:Country;

  constructor(    
    private activedRoute:ActivatedRoute, 
    private searchService:SearchService  
    ) { }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap(({id})=> this.searchService.searchACountryByCode(id)) //Change to return to observable params to Object searchService observable
      , tap(console.log) //print to result 
    ) 
    .subscribe((country:Country []) =>{
      this.country = country[0];      
    })
  }


}

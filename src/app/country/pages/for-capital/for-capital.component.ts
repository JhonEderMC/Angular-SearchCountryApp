import { Component, OnInit, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent implements OnInit {

  
  query:string = '';
  resultSearch:Country [] =[];
  thereIsError:boolean = false;

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  search(query:string){
    this.query = query;
    this.thereIsError=false;
    this.searchService.searchCapital(query)
      .subscribe((captials: Country [])=>{
         this.resultSearch = captials;
      }, (err =>{
        if(err.error.status === 404){
          this.thereIsError=true;
          this.resultSearch=[];
        }              
      })
      )
  }

 

}

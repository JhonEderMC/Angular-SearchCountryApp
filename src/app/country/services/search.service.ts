import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl:string  = 'https://restcountries.com/v3.1'; 
  constructor(private http:HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,flags,cca2,population');
  }

  searchCountry(term:string ):Observable<Country[]>{    
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country []>(url, {params:this.httpParams})
  }

  searchCapital(term:string):Observable<Country []>{   
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country []>(url, {params:this.httpParams});
  }

  searchACountryByCode(id:string):Observable<Country []>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country []>(url);    
  }

  searchByRegion(region:string):Observable<Country[]>{    
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country []>(url, {params:this.httpParams});
  }

  searChCountrySuggestions(term:string):Observable<Country[]>{
    const url= `${this.apiUrl}/name/${term}`;
    const params = new HttpParams().set('fields', 'name,cca2');
    return this.http.get<Country[]>(url, {params:params});
  }
}

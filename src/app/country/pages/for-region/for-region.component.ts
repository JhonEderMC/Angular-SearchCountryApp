import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region-component.css'],
})
export class ForRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  search(region: string) {
    if (this.regionActive === region) {
      return;
    }
    this.regionActive = region;
    this.countries = [];
    this.searchService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  getClassCSS(region: string): string {
    return this.regionActive === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}

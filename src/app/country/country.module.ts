import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountryComponent,
  ],
})
export class CountryModule {}

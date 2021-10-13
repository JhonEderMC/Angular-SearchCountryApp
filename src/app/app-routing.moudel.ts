import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ForCountryComponent } from './country/pages/for-country/for-country.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';

const routes:Routes =[
    {
        path:'',
        component: ForCountryComponent,
        pathMatch: 'full'      

    },
    {
        path:'region',
        component: ForRegionComponent
    },
    {
        path:'capital',
        component: ForCapitalComponent
    },    
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path:'**',
        redirectTo: ''
    }
    
   
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule        
    ]
})
export class AppRoutingModule{

}
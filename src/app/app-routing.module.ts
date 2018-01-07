import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesComponent } from './properties/properties.component';
import { PropertyListingComponent } from './properties/property-listing/property-listing.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';

import { PropertyDetailsResolve } from './properties/property-details/property-details.resolve';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PropertiesComponent,
        children: [
            {
                path: '',
                component: PropertyListingComponent
            },
            {
                path: 'listing/:address',
                component: PropertyDetailsComponent,
                resolve: {
                    propertyDetailsResolve: PropertyDetailsResolve
                }
            }
        ]
    }
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        PropertyDetailsResolve
    ]
})
export class AppRoutingModule { }

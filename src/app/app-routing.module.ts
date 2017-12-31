import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { ListingComponent } from './property/listing/listing.component';
import { DetailsComponent } from './property/listing/details/details.component';

import { DetailsResolve } from './property/listing/details/details.resolve';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PropertyComponent,
        children: [
            {
                path: '',
                component: ListingComponent
            },
            {
                path: 'listing/:address',
                component: DetailsComponent,
                resolve: {
                    detailsResolve: DetailsResolve
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
        DetailsResolve
    ]
})
export class AppRoutingModule { }

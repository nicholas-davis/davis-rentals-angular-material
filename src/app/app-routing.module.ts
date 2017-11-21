import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { ListingComponent } from './property/listing/listing.component';
import { DetailsComponent } from './property/listing/details/details.component';

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
                path: 'details',
                component: DetailsComponent
            }
        ]
    }
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

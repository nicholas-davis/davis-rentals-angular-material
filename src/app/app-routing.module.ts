import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { propertyRoutes } from './property/property.routes';
import { listingRoutes } from './property/listing/listing.routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    ...propertyRoutes,
    ...listingRoutes
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { coreRoutes } from './core/core.routes';
import { propertyRoutes } from './property/property.routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    ...coreRoutes,
    ...propertyRoutes
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

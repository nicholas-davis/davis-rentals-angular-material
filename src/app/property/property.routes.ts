import { Routes } from '@angular/router';
import { PropertyComponent } from '../property/property.component';
import { ListingComponent } from '../property/listing/listing.component';

// Route Configuration
export const propertyRoutes: Routes = [
    {
        path: '',
        component: PropertyComponent,
        children: [
            {
                path: '',
                component: ListingComponent
            },
            {
                path: 'listing',
                component: ListingComponent
            }
        ]
    }
];
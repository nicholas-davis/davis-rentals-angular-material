import { Routes } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { PropertyComponent } from '../property/property.component';

// Route Configuration
export const coreRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: '',
                component: PropertyComponent
            },
            {
                path: 'property',
                component: PropertyComponent
            }
        ]
    }
];
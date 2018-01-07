// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PropertyListingModule } from './property-listing/property-listing.module';
import { PropertyDetailsModule } from './property-details/property-details.module';

// Components
import { PropertiesComponent } from './properties.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    PropertyListingModule,
    PropertyDetailsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSnJiWUwA6Dt7qI8BzY9y_cTql_yLmEpE'
    })
  ],
  exports: [
    PropertiesComponent,
    FlexLayoutModule
  ],
  declarations: [
    PropertiesComponent,
    PropertyListingComponent,
    PropertyDetailsComponent
  ]
})
export class PropertiesModule { }

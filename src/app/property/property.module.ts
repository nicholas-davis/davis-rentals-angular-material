// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListingModule } from './listing/listing.module';
import { DetailsModule } from './details/details.module';

// Components
import { PropertyComponent } from './property.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ListingModule,
    DetailsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSnJiWUwA6Dt7qI8BzY9y_cTql_yLmEpE'
    })
  ],
  exports: [
    PropertyComponent,
    FlexLayoutModule
  ],
  declarations: [
    PropertyComponent,
    ListingComponent,
    DetailsComponent
  ]
})
export class PropertyModule { }

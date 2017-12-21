import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { PropertyService } from '../property.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PropertyService
  ],
})
export class ListingModule { }

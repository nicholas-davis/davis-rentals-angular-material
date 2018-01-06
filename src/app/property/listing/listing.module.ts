// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

// Services
import { PropertyService } from '../property.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [],
  providers: [
    PropertyService
  ],
})
export class ListingModule { }

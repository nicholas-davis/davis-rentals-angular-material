// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

// Services
import { PropertiesService } from '../properties.service';

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
    PropertiesService
  ],
})
export class PropertyListingModule { }

// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatGridListModule, MatListModule } from '@angular/material';

// Services
import { PropertyDetailsService } from './property-details.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MatGridListModule,
        MatListModule
    ],
    declarations: [],
    providers: [
        PropertyDetailsService
    ],
})
export class PropertyDetailsModule { }

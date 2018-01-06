// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatGridListModule, MatListModule } from '@angular/material';

// Services
import { DetailsService } from './details.service';

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
        DetailsService
    ],
})
export class DetailsModule { }

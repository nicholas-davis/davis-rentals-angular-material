import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { DetailsService } from './details.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DetailsService
    ],
})
export class DetailsModule { }

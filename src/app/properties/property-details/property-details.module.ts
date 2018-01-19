// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule, MatListModule, MatCardModule, MatButtonModule } from '@angular/material';

// Services
import { PropertyDetailsService } from './property-details.service';

// Components
import { ApplyCardComponent } from './shared/apply-card/apply-card.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MatGridListModule,
        MatListModule,
        ApplyCardComponent
    ],
    declarations: [
        ApplyCardComponent
    ],
    providers: [
        PropertyDetailsService
    ],
})
export class PropertyDetailsModule { }

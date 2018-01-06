import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
    MatToolbarModule, MatCardModule, MatButtonModule,
    MatIconModule, MatGridListModule, MatListModule, MatDialogModule,
    MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

// Modules
import { ListingModule } from './property/listing/listing.module';
import { DetailsModule } from './property/details/details.module';
import { ContactModule } from './contact/contact.module';

// Services
import { UtilityService } from './shared/utility.service';

// Components
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { ListingComponent } from './property/listing/listing.component';
import { DetailsComponent } from './property/details/details.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyComponent,
        ListingComponent,
        DetailsComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule,
        MatTooltipModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        DetailsModule,
        ListingModule,
        ContactModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBSnJiWUwA6Dt7qI8BzY9y_cTql_yLmEpE'
        })
    ],
    providers: [
        UtilityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

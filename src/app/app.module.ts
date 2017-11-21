import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './property/property.service';
import { ListingComponent } from './property/listing/listing.component';
import { DetailsComponent } from './property/listing/details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyComponent,
        ListingComponent,
        DetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBSnJiWUwA6Dt7qI8BzY9y_cTql_yLmEpE'
        })
    ],
    providers: [PropertyService],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

// Modules
import { ListingModule } from './property/listing/listing.module';
import { DetailsModule } from './property/listing/details/details.module';

// Services
import { UtilityService } from './shared/utility.service';

// Components
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { ListingComponent } from './property/listing/listing.component';
import { DetailsComponent } from './property/listing/details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyComponent,
        ListingComponent,
        DetailsComponent
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
        DetailsModule,
        ListingModule,
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

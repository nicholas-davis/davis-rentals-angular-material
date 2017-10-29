import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { PropertyComponent } from './property/property.component';
import { ListingComponent } from './property/listing/listing.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyComponent,
        ListingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBSnJiWUwA6Dt7qI8BzY9y_cTql_yLmEpE'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

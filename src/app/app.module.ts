import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

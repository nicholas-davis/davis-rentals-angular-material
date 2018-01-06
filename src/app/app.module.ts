import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material';
import { PropertyModule } from './property/property.module';
import { ContactModule } from './contact/contact.module';

// Services
import { UtilityService } from './shared/utility.service';

// Components
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        PropertyModule,
        ContactModule
    ],
    providers: [
        UtilityService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from '../property.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    properties: any;
    propertySubscription: Subscription;

    constructor(
        private propertyService: PropertyService
    ) { }

    ngOnInit() {
        this.properties = [];
        this.propertySubscription = this.propertyService.getProperty().subscribe(properties => {
            this.properties = properties
        });
    }

    ngOnDestroy() {
        this.propertySubscription.unsubscribe();
    }

}

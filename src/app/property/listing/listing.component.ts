import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertyService } from '../property.service';
import { Subscription }   from 'rxjs/Subscription';
import { UtilityService } from '../../shared/utility.service';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    properties: any;
    propertySubscription: Subscription;

    constructor(
        private utilityService: UtilityService,
        private propertyService: PropertyService
    ) {
        let defaultMapInputs = {
            latitude: 39.9525839,
            longitude: -75.16522150000003,
            zoom: 16
        };
        //emit coordinates back to property component
        this.utilityService.mapMarker.emit(defaultMapInputs);
    }

    ngOnInit() {
        this.getProperties();
    }

    ngOnDestroy() {
        this.propertySubscription.unsubscribe();
    }

    getProperties() {
        this.properties = [];
        this.propertySubscription = this.propertyService.getProperties().subscribe(properties => {
            this.properties = properties
            console.log(this.properties)
        });
    }

    viewDetails(data) {
        console.log('viewDetails', data)
    }

}

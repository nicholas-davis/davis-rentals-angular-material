import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { UtilityService } from '../../shared/utility.service';
import { PropertyService } from '../property.service';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    properties: any;
    propertiesSubscription: Subscription;
    map: object;

    constructor(
        private utilityService: UtilityService,
        private propertyService: PropertyService
    ) {}

    ngOnInit() {
        this.getProperties();
        console.log('child - listing', this)
    }

    ngOnDestroy() {
        this.propertiesSubscription.unsubscribe();
    }

    getProperties() {
        this.properties = [];
        this.propertiesSubscription = this.propertyService.getProperties().subscribe(properties => this.properties = properties);
    }
}

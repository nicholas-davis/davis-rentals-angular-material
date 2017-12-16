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
    propertySubscription: Subscription;
    map: object;

    constructor(
        private utilityService: UtilityService,
        private propertyService: PropertyService
    ) {}

    ngOnInit() {
        this.utilityService.defaultMapMarker.subscribe(map => this.map = map);
        this.getProperties();
    }

    ngOnDestroy() {
        this.propertySubscription.unsubscribe();
    }

    getProperties() {
        this.properties = [];
        this.propertySubscription = this.propertyService.getProperties().subscribe(properties => this.properties = properties);
    }
}

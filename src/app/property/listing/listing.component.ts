import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../../shared/utility.service';
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
        private sharedService: UtilityService,
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

    viewDetails(data) {
        this.sharedService.mapMarker.emit(data);
    }

}

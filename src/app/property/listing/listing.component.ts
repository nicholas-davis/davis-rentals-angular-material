import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
    mapSubscription: Subscription;

    constructor(
        private utilityService: UtilityService,
        private propertyService: PropertyService
    ) { }

    ngOnInit() {
        // listing all properties
        this.getProperties();

        // Set dafault sidebar width
        this.defaultLayout();

        // Set default map coordinates
        this.defaultMapCoordinates();

        // Subscribe to latest map coordinates
        this.mapSubscription = this.utilityService.defaultMapMarker.subscribe((map: object) => this.map = map);
    }

    ngOnDestroy() {
        this.propertiesSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
    }

    defaultLayout() {
        const layout = {
            mapWidth: 70,
            sidebarWidth: 30
        };

        return this.utilityService.onChangeLayout(layout);
    }

    defaultMapCoordinates() {
        const defaultMapCoordinates = {
            latitude: 39.9525839,
            longitude: -75.16522150000003,
            zoom: 16
        };

        // emit new map coordinates
        return this.utilityService.onUpdateMapMarker(defaultMapCoordinates);
    }

    getProperties() {
        this.properties = [];
        this.propertiesSubscription = this.propertyService.getProperties().subscribe(properties => this.properties = properties);
    }
}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UtilityService } from '@app-shared/utility.service';
import { PropertiesService } from '@app-properties/properties.service';

@Component({
    selector: 'app-property-listing',
    templateUrl: './property-listing.component.html',
    styleUrls: ['./property-listing.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PropertyListingComponent implements OnInit, OnDestroy {

    properties: any;
    propertiesSubscription: Subscription;
    map: object;
    mapSubscription: Subscription;

    constructor(
        private utilityService: UtilityService,
        private propertiesService: PropertiesService
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
            latitude: 39.9305313,
            longitude: -75.1683957,
            zoom: 16,
            properties: [
                {
                    latitude: 39.9340706,
                    longitude: -75.17298449999998,
                },
                {
                    latitude: 39.92817879999999,
                    longitude: -75.16583880000002,
                }
            ]
        };

        // emit new map coordinates
        return this.utilityService.onUpdateMapMarker(defaultMapCoordinates);
    }

    getProperties() {
        this.properties = [];
        this.propertiesSubscription = this.propertiesService.getProperties().subscribe(properties => this.properties = properties);
    }
}

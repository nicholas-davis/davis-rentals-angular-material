import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    host: { 'class': 'property' }
})
export class PropertyComponent implements OnInit {
    latitude: number;
    longitude: number;
    zoom: number;

    constructor(
        private utilityService: UtilityService
    ) {
        this.utilityService.mapMarker.subscribe((data: any) => {
            data = data;
            console.log('property', data)
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.zoom = data.zoom;
        });
    }

    ngOnInit() {
    }
}

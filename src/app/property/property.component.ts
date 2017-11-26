import { Component, OnInit} from '@angular/core';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    host: { 'class': 'property' }
})
export class PropertyComponent implements OnInit {
    lat: number = 19.9281788;
    lng: number = -75.16583880000002;
    zoom: number = 16;

    constructor(
        private sharedService: UtilityService
    ) {
        this.sharedService.mapMarker.subscribe((data: any) => {
            data = data[0];
            this.lat = data.latitude;
            this.lng = data.longitude;
        });
    }

    ngOnInit() {
    }
}

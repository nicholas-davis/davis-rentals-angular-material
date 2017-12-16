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
    map: object

    constructor(
        private utilityService: UtilityService
    ) {}

    ngOnInit() {
        this.utilityService.defaultMapMarker.subscribe(map => this.map = map);
        console.log('parent - property', this)
    }
}

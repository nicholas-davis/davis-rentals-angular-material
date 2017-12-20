import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    host: { 'class': 'property' }
})
export class PropertyComponent implements OnInit, OnDestroy {
    
    map: object;
    mapSubscription: Subscription;
    latitude: number;
    longitude: number;
    zoom: number;

    constructor(
        private utilityService: UtilityService
    ) {}

    ngOnInit()  {
        this.mapSubscription = this.utilityService.defaultMapMarker.subscribe(map => this.map = map);
        console.log('parent - property', this)
    }

    ngOnDestroy() {
        this.mapSubscription.unsubscribe();
    }
}

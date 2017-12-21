import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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

    constructor(
        private utilityService: UtilityService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.mapCoordinates();
    }

    mapCoordinates() {
        return this.mapSubscription = this.utilityService.defaultMapMarker.subscribe(map => {
            this.map = map;
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy() {
        this.mapSubscription.unsubscribe();
    }
}

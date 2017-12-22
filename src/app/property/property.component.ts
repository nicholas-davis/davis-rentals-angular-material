import { Component, HostBinding, OnInit, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit, OnDestroy {
    @HostBinding('attr.class') class = 'property';

    map: object;
    mapSubscription: Subscription;
    structure: object;
    sidebarWidthSubscription: Subscription;

    constructor(
        private utilityService: UtilityService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.layout();
        this.mapCoordinates();
    }

    layout() {
        this.utilityService.defaultLayout.subscribe((structure: object) => this.structure = structure);
    }

    mapCoordinates() {
        return this.mapSubscription = this.utilityService.defaultMapMarker.subscribe((map: object) => {
            this.map = map;
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy() {
        this.sidebarWidthSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
    }
}

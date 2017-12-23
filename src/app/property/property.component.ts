import { Component, HostBinding, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UtilityService } from '../shared/utility.service';
import { AgmMap } from '@agm/core/directives/map';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit, OnDestroy {
    @HostBinding('attr.class') class = 'property';
    @ViewChild(AgmMap) agmMap: AgmMap;

    map: object;
    mapSubscription: Subscription;
    structure: object;
    structureSubscription: Subscription;

    constructor(
        private utilityService: UtilityService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.layout();
        this.mapCoordinates();
    }

    layout() {
        return this.structureSubscription = this.utilityService.defaultLayout
            .subscribe((structure: object) => this.structure = structure);
    }

    mapCoordinates() {
        return this.mapSubscription = this.utilityService.defaultMapMarker.subscribe((map: object) => {
            this.map = map;
            this.agmMap.triggerResize();
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy() {
        this.structureSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
    }
}

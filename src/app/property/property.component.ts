import { Component, HostBinding, ViewChild, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { UtilityService } from '../shared/utility.service';
import { AgmMap } from '@agm/core/directives/map';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PropertyComponent implements OnInit, OnDestroy {
    @HostBinding('attr.class') class = 'property';
    @ViewChild(AgmMap) agmMap: AgmMap;

    map: object;
    mapSubscription: Subscription;
    structure: object;
    structureSubscription: Subscription;

    constructor(
        private meta: Meta,
        private title: Title,
        private utilityService: UtilityService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.setPageInfo();
        this.layout();
        this.mapCoordinates();
    }

    // TODO: CREATE PAGE INFO COMPONENT
    setPageInfo() {
        const pageTitle = 'Davis Rentals';

        const pageDescription = 'View apartments for rent and Airbnb short term rentals in South Philadelphia, PA.';

        this.title.setTitle(pageTitle);
        this.meta.addTags([
            {
                name: 'author',
                content: 'Nicholas Davis'
            },
            {
                name: 'description',
                content: pageDescription
            }
        ]);
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

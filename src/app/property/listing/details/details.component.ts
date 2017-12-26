import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UtilityService } from '../../../shared/utility.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
    @HostBinding('attr.class') class = 'details';

    propertyDetails: any;
    tiles: any;

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute,
        private utilityService: UtilityService,
    ) {
        title.setTitle('Davis');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: '' },
            { name: 'description', content: '' }
        ]);
    }

    ngOnInit() {
        this.propertyDetails = this.route.snapshot.data.DetailsResolve;
        this.emitNewLayout();
        this.emitNewMapCoordinates();
    }

    emitNewLayout() {
        const layout = {
            mapWidth: 40,
            sidebarWidth: 60
        };

        return this.utilityService.onChangeLayout(layout);
    }

    emitNewMapCoordinates() {
        const map = this.propertyDetails.map;

        // property listing location
        const coordinates = {
            latitude: map.latitude,
            longitude: map.longitude,
            zoom: map.zoom
        };

        // emit new map coordinates
        return this.utilityService.onUpdateMapMarker(coordinates);
    }
}

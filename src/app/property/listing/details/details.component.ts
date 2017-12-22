import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UtilityService } from '../../../shared/utility.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

    propertyDetails: any;

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
        this.propertyDetails = this.route.snapshot.data;
        this.emitNewLayout();
        this.emitNewMapCoordinates();
    }

    emitNewLayout() {
        const layout = {
            mapWidth: 50,
            sidebarWidth: 50
        };

        return this.utilityService.onChangeLayout(layout);
    }

    emitNewMapCoordinates() {
        const map = this.propertyDetails.DetailsResolve.map;

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

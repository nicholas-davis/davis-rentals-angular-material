import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { UtilityService } from '../../../shared/utility.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, AfterViewInit  {

    propertyDetails: any;

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute,
        private utilityService: UtilityService
    ) {
        title.setTitle('Davis');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: '' },
            { name: 'description', content: '' }
        ]);
    }

    ngOnInit() {
        this.propertyDetails = this.route.snapshot.data
        
        console.log('details - child', this)
    }

    ngAfterViewInit() {
        this.emitMapCoordinates();
    }

    emitMapCoordinates() {
        let map = this.propertyDetails.DetailsResolve.map;

        //property listing location
        let coordinates = {
            latitude: map.latitude,
            longitude: map.longitude,
            zoom: map.zoom
        };

        //update map in parent
        return this.utilityService.onUpdateMapMarker(coordinates)
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { Subscription }   from 'rxjs/Subscription';
import { UtilityService } from '../../../shared/utility.service';
import { DetailsService } from './details.service';


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {

    propertyUrl: string;
    propertyDetails: any;
    propertyDetailsSubscription: Subscription;

    constructor(
        private meta: Meta,
        private title: Title,
        private route: ActivatedRoute,
        private utilityService: UtilityService,
        private detailsService: DetailsService
    ) {
        console.log(this)
        this.route.params.subscribe((params: any) => {
            this.propertyUrl = params.address;
        });

        title.setTitle('Davis');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: '' },
            { name: 'description', content: '' }
        ]);
    }

    ngOnInit() {
        this.getPropertyDetails();
    }

    getPropertyDetails() {
        this.propertyDetailsSubscription = this.detailsService.getPropertyDetails().subscribe(details => {
            this.propertyDetails = details['details'];

            for (let index = 0, len = this.propertyDetails.length; index < len; index++) {
                let property = this.propertyDetails[index];

                //check which property listing 
                if (property.url === this.propertyUrl) {

                    //property listing location
                    let coordinates = {
                        latitude: property.map.latitude,
                        longitude: property.map.longitude,
                        zoom: property.map.zoom
                    };

                    //emit coordinates back to property component
                    this.utilityService.mapMarker.emit(coordinates);
                }
            }
        });
    }
    ngOnDestroy() {
        this.propertyDetailsSubscription.unsubscribe();
    }

}

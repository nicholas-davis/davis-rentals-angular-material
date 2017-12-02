import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { UtilityService } from '../../../shared/utility.service';
import { DetailsService } from './details.service';
import { Subscription }   from 'rxjs/Subscription';

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
        private sharedService: UtilityService,
        private detailsService: DetailsService
    ) {
  
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

        this.propertyDetailsSubscription = this.detailsService.getPropertyDetails().subscribe(details => {
            this.propertyDetails = details['details'];

            for (let index = 0, len = this.propertyDetails.length; index < len; index++) {
                let property = this.propertyDetails[index];

                //check which property listing 
                if (property.url === this.propertyUrl) {

                    //property listing location
                    let coordinates = {
                        latitude: property.map.latitude,
                        longitude: property.map.longitude
                    };

                    //emit coordinates back to property component
                    this.sharedService.mapMarker.emit(coordinates);
                }
            }
        });
    }

    ngOnDestroy() {
        this.propertyDetailsSubscription.unsubscribe();
    }

}

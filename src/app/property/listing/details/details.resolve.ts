import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DetailsService } from './details.service';

@Injectable()
export class DetailsResolve implements Resolve<any> {

    propertyDetails: any;

    constructor(
        private detailsService: DetailsService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let propertyUrl = route.params.address;

        return this.detailsService.getPropertyDetails().then(details => {
            let propertyDetails = details['properties'];

            for (let index = 0, len = propertyDetails.length; index < len; index++) {
                let property = propertyDetails[index];

                //check which property listing 
                if (property.url === propertyUrl) {
                    this.propertyDetails = property;
                }
            }

            return this.propertyDetails;
        });
    }
}
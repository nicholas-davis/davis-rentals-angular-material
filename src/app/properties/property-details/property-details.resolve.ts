import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { PropertyDetailsService } from './property-details.service';

@Injectable()
export class PropertyDetailsResolve implements Resolve<any> {

    propertyDetails: any;

    constructor(
        private propertyDetailsService: PropertyDetailsService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const propertyUrl = route.params.address;

        return this.propertyDetailsService.getPropertyDetails().then(details => {
            const propertyDetails = details['properties'];

            for (let index = 0, len = propertyDetails.length; index < len; index++) {
                const property = propertyDetails[index];

                // check which property listing
                if (property.url === propertyUrl) {
                    this.propertyDetails = property;
                }
            }

            return this.propertyDetails;
        });
    }
}

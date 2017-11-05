import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';


@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    properties: any;

    constructor(
        private propertyService: PropertyService
    ) { }

    ngOnInit() {
        this.propertyService.getProperty().subscribe(properties => {
            this.properties = properties;
            console.log(this.properties)
        });
    }

}

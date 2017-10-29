import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    host: { 'class': 'property' }
})
export class PropertyComponent implements OnInit {
    lat: number = 39.9281788;
    lng: number = -75.16583880000002;
    zoom: number = 16;

    constructor() { }

    ngOnInit() {
    }

}

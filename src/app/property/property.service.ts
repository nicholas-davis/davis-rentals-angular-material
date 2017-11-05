import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PropertyService {

    constructor(
        private http: HttpClient
    ) { }

    getProperty() {
        this.http.get('api/mock-property.json').subscribe(result => {
            console.log(result)
        });
    }

}

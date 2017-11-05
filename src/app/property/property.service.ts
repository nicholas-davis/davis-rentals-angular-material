import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PropertyService {

    constructor(
        private http: HttpClient
    ) { }

    getProperty() {
       return this.http.get('api/mock-property.json');
    }

}

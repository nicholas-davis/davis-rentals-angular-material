import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {

    constructor(
        private http: HttpClient
    ) { }

    getPropertyDetails() {
        return this.http.get('api/mock-property.json').toPromise();
    }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilityService {
    private mapMarker = new BehaviorSubject<object>({
        latitude: 39.9525839,
        longitude: -75.16522150000003,
        zoom: 16
    });
    defaultMapMarker = this.mapMarker.asObservable();

    onUpdateMapMarker(coordinates: object) {
        this.mapMarker.next(coordinates);
    }
}

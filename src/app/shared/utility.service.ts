import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilityService {
    private mapMarker = new BehaviorSubject<object>({});
    defaultMapMarker = this.mapMarker.asObservable();

    onUpdateMapMarker(coordinates: object) {
        this.mapMarker.next(coordinates);
    }
}

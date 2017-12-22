import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilityService {
    private layout = new BehaviorSubject<object>({});
    defaultLayout = this.layout.asObservable();

    private mapMarker = new BehaviorSubject<object>({});
    defaultMapMarker = this.mapMarker.asObservable();

    onUpdateMapMarker(coordinates: object) {
        this.mapMarker.next(coordinates);
    }

    onChangeLayout(structure: object) {
        this.layout.next(structure);
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UtilityService {
    private sidebar = new BehaviorSubject<number>(30);
    defaultSidebarSize = this.sidebar.asObservable();

    private mapMarker = new BehaviorSubject<object>({});
    defaultMapMarker = this.mapMarker.asObservable();

    onUpdateMapMarker(coordinates: object) {
        this.mapMarker.next(coordinates);
    }

    onChangeSidebarWidth(width: number) {
        this.sidebar.next(width);
    }
}

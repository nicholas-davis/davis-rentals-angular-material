import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UtilityService {
    mapMarker = new EventEmitter<any>();
}

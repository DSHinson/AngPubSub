import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private events:BehaviorSubject<any>;
  constructor() { 

    this.events = new BehaviorSubject<any>({});
  }

  public emit(eventType: string, data?: any): void {
    this.events.next({ type: eventType, data });
  }

  on(eventType: string): Observable<any> {
    return this.events.asObservable().pipe(
      filter((event) => event.type === eventType),
      map((event) => event.data)
    )
  }
}

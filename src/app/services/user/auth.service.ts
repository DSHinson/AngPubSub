import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {EventBusService}from '../events/eventbus.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private user:BehaviorSubject<any>= new BehaviorSubject({});

  constructor(private EventBusService: EventBusService) { 
    this.EventBusService.on("login:attempt").subscribe((data: any)=>{
      this.user.next(data);
    });
  }
  public currentUser():Observable<any>{
    return this.user.asObservable();
  }

}

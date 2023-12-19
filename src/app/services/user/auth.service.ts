import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {EventBusService}from '../events/eventbus.service'
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private subs = new SubSink();


  private user:BehaviorSubject<any>= new BehaviorSubject({});

  constructor(private EventBusService: EventBusService) { 
    this.subs.sink=this.EventBusService.on("login:attempt").subscribe((data: any)=>{
      this.user.next(data);
      this.EventBusService.emit('login:complete');
    });

    this.subs.sink = this.EventBusService.on('login:complete').subscribe((data:any)=>{
      this.EventBusService.emit('navigateTo','/home');
    })
  }

  public currentUser():Observable<any>{
    return this.user.asObservable();
  }
  public ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

}

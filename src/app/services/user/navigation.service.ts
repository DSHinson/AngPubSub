import { Injectable } from '@angular/core';
import { EventBusService } from '../events/eventbus.service';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private subs = new SubSink();
  
  constructor(private EventBusService: EventBusService, private router: Router) 
  {
    this.subs.sink = this.EventBusService.on('navigateTo').subscribe(data =>{
      this.router.navigateByUrl(data);
    })
   }
}

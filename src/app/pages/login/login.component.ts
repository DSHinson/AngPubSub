import { Component, OnDestroy, OnInit } from '@angular/core';
import {EventBusService}from '../../services/events/eventbus.service'
import { SubSink } from 'subsink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  public login: any ={};
  public subs = new SubSink();
  constructor( private EventBusService: EventBusService, private router: Router) { 
    
  }
  public btnLogin_Click() {
    this.EventBusService.emit("login:attempt",this.login);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    
  }

}

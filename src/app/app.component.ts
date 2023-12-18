import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/user/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user:any
  
  constructor(private AuthService:AuthService)
  {
    
  }
  ngOnInit(): void {
    this.AuthService.currentUser().subscribe(data =>{
      this.user =data;
    })
  }

  title = 'rxjseventbus';
  public showNav =false;
}

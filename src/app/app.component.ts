import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    //private auth: AuthenticationService
  ) 
    {
  }

  //get currentUser(): Observable<string> {
    //return this.auth.user$;
    
  //}

  ngOnInit() {
  }

}

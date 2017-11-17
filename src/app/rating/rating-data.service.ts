import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Rating } from './rating.model';
import { AuthenticationService } from '../user/authentication.service';
import 'rxjs/add/operator/map';


@Injectable()
export class RatingDataService {

  private _appUrl = 'http://localhost:4200/api/';
  private _ratings;
  
  constructor(private http: Http, 
    //private auth: AuthenticationService
  ) { }

  get ratings(): Observable<Rating[]> {
    return this.http.get(`${this._appUrl}ratings`,
    //{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
    .map(response => response.json().map(item => Rating.fromJSON(item)));
  }

  getRating(id): Observable<Rating> {
    return this.http.get(`${this._appUrl}/rating/${id}`)
      .map(response => response.json()).map(item => Rating.fromJSON(item));
  }

}

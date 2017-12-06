import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Rating } from './rating.model';
import { Countrating } from './countrating.model';
import { AuthenticationService } from '../user/authentication.service';
import 'rxjs/add/operator/map';


@Injectable()
export class RatingDataService {

  private _appUrl = '/api/';
  private _ratings;
  
  constructor(private http: Http, 
    private auth: AuthenticationService
  ) { }

  get ratings(): Observable<Rating[]> {
    return this.http.get(`${this._appUrl}ratings`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
    .map(response => response.json().map(item => Rating.fromJSON(item)));
  }

  getRating(id): Observable<Rating> {
    return this.http.get(`${this._appUrl}rating/${id}`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
      .map(response => response.json()).map(item => Rating.fromJSON(item));
  }

  get ratingPerRatingNumber(): Observable<Array<Number>> {
    return this.http.get(`${this._appUrl}ratings/countedperrating`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
	.map(response => response.json().map(item => item) );
  }


  addNewRating(rec): Observable<Rating> {
    return this.http.post(`${this._appUrl}ratings`, rec, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
      .map(res => res.json()).map(item => Rating.fromJSON(item));
  }

  fromJSONarray(arr) {
    return Observable.from(arr)
        .flatMap(p => Observable.of(p));
}


}

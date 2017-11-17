import { Component, OnInit, Input } from '@angular/core';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css'],
  providers: [ RatingDataService ]
})
export class RatingsListComponent implements OnInit {

  private _ratings: Rating[];
  
      constructor(private _ratingDataService: RatingDataService) {
      }
  
      ngOnInit() {
        this._ratingDataService.ratings.subscribe(items => this._ratings = items);
      }
      get ratings() {
        return this._ratings;
      }
  
    removeRating(rating: Rating) {
      //this._ratingDataService.removeRating(rating).subscribe(item =>
      //  this._ratings = this._ratings.filter(val => item.id !== val.id)
      //);
    }

}

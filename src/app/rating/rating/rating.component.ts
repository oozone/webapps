import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() public rating: Rating;
  @Output() public deleteRating = new EventEmitter<Rating>();

  constructor(private _ratingDataService: RatingDataService, private router: Router) {
  }
  ngOnInit() {
  }
  removeRating() {
    this.deleteRating.emit(this.rating);
  }

  viewRating() {
    this.router.navigate(['/rating/' + this.rating.id]);
  }

}

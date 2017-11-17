import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() public rating: Rating;
  @Output() public deleteRating = new EventEmitter<Rating>();

  constructor(private _ratingDataService: RatingDataService) {
  }
  ngOnInit() {
  }
  removeRating() {
    this.deleteRating.emit(this.rating);
  }

}

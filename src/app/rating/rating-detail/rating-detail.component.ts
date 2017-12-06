import { RatingDataService } from './../rating-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from '../rating.model';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.css']
})
export class RatingDetailComponent implements OnInit {
  private _rating: Rating;

  constructor(private route: ActivatedRoute, private ratingDataService: RatingDataService) {
  }

  get rating() {
    return this._rating;
  }

  ngOnInit() {

    this.route.data.subscribe(item => 
      this._rating = item['rating']
    );

  }
}

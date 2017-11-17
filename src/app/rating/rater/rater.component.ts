import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css'],
  providers: [ RatingDataService ]
})
export class RaterComponent implements OnInit {


  constructor(private _ratingDataService: RatingDataService) {
  }
  ngOnInit() {
  }



}

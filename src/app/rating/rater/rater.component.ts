import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RatingDataService } from '../rating-data.service';
import { Rating } from '../rating.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css'],
  providers: [ RatingDataService ]
})
export class RaterComponent implements OnInit {

  private rating: FormGroup;
  constructor(private fb: FormBuilder, private _ratingDataService: RatingDataService, private _router: Router) {
  }
  ngOnInit() {

    this.rating = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(2)]],
      ratingNumber: ['', [Validators.required]],
    });

  }

  onSubmit() {
    const rating = new Rating(this.rating.value.comment, this.rating.value.ratingNumber, new Date());
    
    this._ratingDataService.addNewRating(rating).subscribe(item => {
        this._router.navigate(['rating/list']);
      }
    );
    // this.newRecipe.emit(recipe);
  }

  // rateMood(rating: Number) : boolean {
  //   console.log(rating);
  //   return false;
  // }


}

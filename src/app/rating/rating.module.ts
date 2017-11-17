import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {RatingDataService} from './rating-data.service';
import {RatingsListComponent} from './ratings-list/ratings-list.component';
import {RatingResolver} from './rating-resolver.service';

import {RatingComponent} from './rating/rating.component';
import {RaterComponent} from './rater/rater.component';


const routes = [
  { path: 'list', component: RatingsListComponent },
  //{ path: 'add', component: AddRecipeComponent },
  //{ path: ':id', component: RatingDetailComponent,
  //  resolve: { recipe: RatingResolver} }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RatingsListComponent,
    RatingComponent,
    RaterComponent
  ],
  providers: [
    RatingDataService,
    RatingResolver
  ],
})
export class RatingModule { }

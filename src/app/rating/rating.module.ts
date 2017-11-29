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
import { ChartComponent } from './chart/chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ControlMessagesComponent} from '../control-messages/control-messages.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import {RatingDetailComponent} from './rating-detail/rating-detail.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

const routes = [
  { path: 'chart', component: ChartComponent},
  { path: 'list', component: RatingsListComponent },
  { path: 'rater', component: RaterComponent},
  

  //{ path: 'add', component: AddRecipeComponent },
  { path: ':id', component: RatingDetailComponent,
   resolve: { rating: RatingResolver} }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
  ],
  declarations: [
    RatingsListComponent,
    RatingComponent,
    RaterComponent,
    ChartComponent,
    ControlMessagesComponent,
    SlidePanelComponent,
    RatingDetailComponent
  ],
  providers: [
    RatingDataService,
    RatingResolver
  ],
})
export class RatingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';

import { RaterComponent } from './rater/rater.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';

const appRoutes: Routes = [
  { path: 'rater', component: RaterComponent },
  { path: 'ratingslist', component: RatingsListComponent }
  // { path: 'hero/:id',      component: RaterComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RaterComponent,
    RatingsListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

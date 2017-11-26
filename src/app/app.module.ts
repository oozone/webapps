import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { RaterComponent } from './rating/rater/rater.component';
import { RatingsListComponent } from './rating/ratings-list/ratings-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  //{ path: 'rater', component: RaterComponent },
  //{ path: 'ratingslist', component: RatingsListComponent }
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
    PageNotFoundComponent,
  ],
  imports: [
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),*/
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

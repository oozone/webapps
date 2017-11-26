import { AuthGuardService } from './../user/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RaterComponent } from '../rating/rater/rater.component';
import { RatingsListComponent } from '../rating/ratings-list/ratings-list.component';
// import { RecipeListComponent } from './../recipe-list/recipe-list.component';
// import { AddRecipeComponent } from './../add-recipe/add-recipe.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   //canActivate: [ AuthGuardService ],
  //   // data: { preload: true },
  //   //loadChildren: '../rater/rater.module#RaterModule'
  //   loadChildren: '../rating/rating.module#RatingModule',
  //   //component: RaterComponent
  // },
  { path: '', redirectTo: 'rating/rater', pathMatch: 'full'},
  {
    path: 'rating',
    //canActivate: [ AuthGuardService ],
    // data: { preload: true },
    loadChildren: '../rating/rating.module#RatingModule'
  },
  
  //{ path: '', redirectTo: 'rating/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

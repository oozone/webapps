import { RatingDataService } from './rating-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Rating } from './rating.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RatingResolver implements Resolve< Rating > {
    constructor(private ratingService: RatingDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rating> {
        return this.ratingService.getRating(route.params['id']);
    }
}

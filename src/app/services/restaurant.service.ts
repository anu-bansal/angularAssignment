import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TMDB } from '../configs/tmdb.config'; 
import { App } from '../configs/app.config'; 

@Injectable()
export class RestaurantService {

constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  // Function to get search text and make service call to get restaurants from TMDB
  searchRestaurant(searchedResturant) {
    return this.http.get(TMDB.baseUrl+searchedResturant+TMDB.endUrl+searchedResturant+TMDB.apikey;)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

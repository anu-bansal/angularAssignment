import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants =[];

  constructor() { }

  ngOnInit() {
  }

  // Update restaurants list based on search text
  setRestaurantlist(event) {
  	this.restaurants = event.restaurantsList;
    console.log("in Parent:"+this.restaurants);
  }
}

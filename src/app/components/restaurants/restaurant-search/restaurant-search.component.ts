import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
  providers:[RestaurantService]
})
export class RestaurantSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();

	public searchedRestaurant: string="";
	public restaurantsList : any;
  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
  }

 // Function to get search text and make service call to get restaurants fromTMDB
  searchRestaurant(){
  	this.restaurantService.searchRestaurant(this.searchedRestaurant)
  	.subscribe((res) =>{
  		this.restaurantsList=res.restaurants;
      console.log(this.restaurantsList);
  		this.success.emit({
  			'restaurantsList':this.restaurantsList
  		});
  	},(error) =>{

  	});
  }
}

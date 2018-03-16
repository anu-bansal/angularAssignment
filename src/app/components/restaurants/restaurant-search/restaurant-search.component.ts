import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
  providers:[RestaurantService]
})
export class RestaurantSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
	public searchedRestaurant: any='';
	public restaurantsList=[];
  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
  }

 // Function to get search text and make service call to get restaurants fromTMDB
  searchRestaurant(){
  	this.restaurantService.searchRestaurant(this.searchedRestaurant)
  	.subscribe((res) =>{
  		this.restaurantsList=res.results;
  		this.success.emit({
  			'restaurantsList':this.restaurantsList
  		});
  	},(error) =>{

  	})
  }
}

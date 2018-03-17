import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service'
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers:[RestaurantService]
})
export class RestaurantComponent implements OnInit {

	@Input() restaurant:any;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

}

  // Add favourite restaurant to database
  //addRestaurant(restaurant) {
  	//this.restaurantService.addRestaurant(restaurant).subscribe((result) =>{
  		
  	//}, (error) =>{

  	//})
  //}

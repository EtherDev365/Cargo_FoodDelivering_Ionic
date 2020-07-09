import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DeliverymodePage } from '../deliverymode/deliverymode.page';  
@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.page.html',
  styleUrls: ['./search-restaurant.page.scss'],
})
export class SearchRestaurantPage implements OnInit {
 tab: string = "pickup_location";
 fabAction = false;	
 fabAction2 = false;	

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
 toggleFab(){
        this.fabAction = !this.fabAction;
   }
  toggleFab2(){
        this.fabAction2 = !this.fabAction2;
   }
	

 deliverymode(){
    this.modalController.create({component:DeliverymodePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }
proceed_to_payment() {
    this.route.navigate(['./payment']);
  } 	
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pickup-assigned',
  templateUrl: './pickup-assigned.page.html',
  styleUrls: ['./pickup-assigned.page.scss'],
})
export class PickupAssignedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back_to_home() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}

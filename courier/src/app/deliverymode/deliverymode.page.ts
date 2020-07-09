import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-deliverymode',
  templateUrl: './deliverymode.page.html',
  styleUrls: ['./deliverymode.page.scss'],
})
export class DeliverymodePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss(){
   this.modalController.dismiss();
 }
}

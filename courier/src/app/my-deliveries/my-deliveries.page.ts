import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-deliveries',
  templateUrl: './my-deliveries.page.html',
  styleUrls: ['./my-deliveries.page.scss'],
})
export class MyDeliveriesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 track_delivery() {
    this.route.navigate(['./track-delivery']);
  } 
}

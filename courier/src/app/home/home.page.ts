import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 arrange_delivery() {
    this.route.navigate(['./arrange-delivery']);
  }
 search_restaurant() {
    this.route.navigate(['./search-restaurant']);
  } 
 search_grocery_stores() {
    this.route.navigate(['./search-grocery-stores']);
  } 
}

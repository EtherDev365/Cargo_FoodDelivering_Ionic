import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SearchRestaurantPageRoutingModule } from './search-restaurant-routing.module';

import { SearchRestaurantPage } from './search-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    SearchRestaurantPageRoutingModule
  ],
  declarations: [SearchRestaurantPage]
})
export class SearchRestaurantPageModule {}
 
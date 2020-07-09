import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRestaurantPage } from './search-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRestaurantPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchGroceryStoresPage } from './search-grocery-stores.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGroceryStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchGroceryStoresPageRoutingModule {}

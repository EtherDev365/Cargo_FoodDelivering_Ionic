import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverymodePage } from './deliverymode.page';

const routes: Routes = [
  {
    path: '',
    component: DeliverymodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverymodePageRoutingModule {}

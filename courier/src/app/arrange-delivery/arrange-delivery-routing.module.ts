import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrangeDeliveryPage } from './arrange-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ArrangeDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrangeDeliveryPageRoutingModule {}

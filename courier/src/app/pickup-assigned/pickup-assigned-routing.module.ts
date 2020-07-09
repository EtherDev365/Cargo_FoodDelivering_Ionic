import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupAssignedPage } from './pickup-assigned.page';

const routes: Routes = [
  {
    path: '',
    component: PickupAssignedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupAssignedPageRoutingModule {}

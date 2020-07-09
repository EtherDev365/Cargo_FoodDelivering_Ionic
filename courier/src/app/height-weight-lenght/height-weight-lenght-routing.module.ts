import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeightWeightLenghtPage } from './height-weight-lenght.page';

const routes: Routes = [
  {
    path: '',
    component: HeightWeightLenghtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeightWeightLenghtPageRoutingModule {}

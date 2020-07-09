import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	 
import { IonicModule } from '@ionic/angular';

import { PickupAssignedPageRoutingModule } from './pickup-assigned-routing.module';

import { PickupAssignedPage } from './pickup-assigned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    PickupAssignedPageRoutingModule
  ],
  declarations: [PickupAssignedPage]
})
export class PickupAssignedPageModule {}

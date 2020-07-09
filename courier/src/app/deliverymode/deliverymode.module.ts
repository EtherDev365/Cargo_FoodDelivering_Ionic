import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { DeliverymodePageRoutingModule } from './deliverymode-routing.module';

import { DeliverymodePage } from './deliverymode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    DeliverymodePageRoutingModule
  ],
  declarations: [DeliverymodePage]
})
export class DeliverymodePageModule {}
 
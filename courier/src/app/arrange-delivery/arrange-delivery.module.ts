import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { ArrangeDeliveryPageRoutingModule } from './arrange-delivery-routing.module';

import { ArrangeDeliveryPage } from './arrange-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ArrangeDeliveryPageRoutingModule
  ],
  declarations: [ArrangeDeliveryPage]
})
export class ArrangeDeliveryPageModule {}

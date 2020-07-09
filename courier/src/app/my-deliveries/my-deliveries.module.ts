import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	
import { IonicModule } from '@ionic/angular';

import { MyDeliveriesPageRoutingModule } from './my-deliveries-routing.module';

import { MyDeliveriesPage } from './my-deliveries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    MyDeliveriesPageRoutingModule
  ],
  declarations: [MyDeliveriesPage]
})
export class MyDeliveriesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
      
import { IonicModule } from '@ionic/angular';

import { HeightWeightLenghtPageRoutingModule } from './height-weight-lenght-routing.module';

import { HeightWeightLenghtPage } from './height-weight-lenght.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    HeightWeightLenghtPageRoutingModule
  ],
  declarations: [HeightWeightLenghtPage]
})
export class HeightWeightLenghtPageModule {}

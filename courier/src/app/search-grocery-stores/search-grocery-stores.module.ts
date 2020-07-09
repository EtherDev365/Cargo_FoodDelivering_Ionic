import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SearchGroceryStoresPageRoutingModule } from './search-grocery-stores-routing.module';

import { SearchGroceryStoresPage } from './search-grocery-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    SearchGroceryStoresPageRoutingModule
  ],
  declarations: [SearchGroceryStoresPage]
})
export class SearchGroceryStoresPageModule {}

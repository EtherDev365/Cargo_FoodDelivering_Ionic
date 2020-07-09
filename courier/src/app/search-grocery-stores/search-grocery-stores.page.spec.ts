import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchGroceryStoresPage } from './search-grocery-stores.page';

describe('SearchGroceryStoresPage', () => {
  let component: SearchGroceryStoresPage;
  let fixture: ComponentFixture<SearchGroceryStoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroceryStoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchGroceryStoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

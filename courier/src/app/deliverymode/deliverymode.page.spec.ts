import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverymodePage } from './deliverymode.page';

describe('DeliverymodePage', () => {
  let component: DeliverymodePage;
  let fixture: ComponentFixture<DeliverymodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverymodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

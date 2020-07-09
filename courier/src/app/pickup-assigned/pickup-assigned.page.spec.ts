import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupAssignedPage } from './pickup-assigned.page';

describe('PickupAssignedPage', () => {
  let component: PickupAssignedPage;
  let fixture: ComponentFixture<PickupAssignedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAssignedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupAssignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

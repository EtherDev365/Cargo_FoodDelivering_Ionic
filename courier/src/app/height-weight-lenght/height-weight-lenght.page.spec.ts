import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeightWeightLenghtPage } from './height-weight-lenght.page';

describe('HeightWeightLenghtPage', () => {
  let component: HeightWeightLenghtPage;
  let fixture: ComponentFixture<HeightWeightLenghtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightWeightLenghtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeightWeightLenghtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

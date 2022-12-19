import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRateplanComponent } from './changeRateplan.component';

describe('ChangeRateplanComponent', () => {
  let component: ChangeRateplanComponent;
  let fixture: ComponentFixture<ChangeRateplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRateplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRateplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

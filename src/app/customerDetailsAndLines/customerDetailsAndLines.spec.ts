import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsAndLinesComponent } from './customerDetailsAndLines.component';

describe('CustomerDetailsAndLinesComponent', () => {
  let component: CustomerDetailsAndLinesComponent;
  let fixture: ComponentFixture<CustomerDetailsAndLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsAndLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsAndLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

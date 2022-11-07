import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareUpgradeComponent } from './hardware-upgrade.component';

describe('HardwareUpgradeComponent', () => {
  let component: HardwareUpgradeComponent;
  let fixture: ComponentFixture<HardwareUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

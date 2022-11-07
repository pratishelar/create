/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinesAndDevicesComponent } from './linesAndDevices.component';

describe('LinesAndDevicesComponent', () => {
  let component: LinesAndDevicesComponent;
  let fixture: ComponentFixture<LinesAndDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesAndDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesAndDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

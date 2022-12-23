/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortInComponent } from './portIn.component';

describe('PortInComponent', () => {
  let component: PortInComponent;
  let fixture: ComponentFixture<PortInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

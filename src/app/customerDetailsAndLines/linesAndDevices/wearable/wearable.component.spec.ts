/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WearableComponent } from './wearable.component';

describe('WearableComponent', () => {
  let component: WearableComponent;
  let fixture: ComponentFixture<WearableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

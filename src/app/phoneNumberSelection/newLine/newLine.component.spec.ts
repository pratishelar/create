/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewLineComponent } from './newLine.component';

describe('NewLineComponent', () => {
  let component: NewLineComponent;
  let fixture: ComponentFixture<NewLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

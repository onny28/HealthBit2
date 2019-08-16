import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysevenPage } from './dayseven.page';

describe('DaysevenPage', () => {
  let component: DaysevenPage;
  let fixture: ComponentFixture<DaysevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

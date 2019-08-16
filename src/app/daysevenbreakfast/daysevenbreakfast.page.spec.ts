import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysevenbreakfastPage } from './daysevenbreakfast.page';

describe('DaysevenbreakfastPage', () => {
  let component: DaysevenbreakfastPage;
  let fixture: ComponentFixture<DaysevenbreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysevenbreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysevenbreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

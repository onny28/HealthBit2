import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysevendinnerPage } from './daysevendinner.page';

describe('DaysevendinnerPage', () => {
  let component: DaysevendinnerPage;
  let fixture: ComponentFixture<DaysevendinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysevendinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysevendinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfivelunchPage } from './dayfivelunch.page';

describe('DayfivelunchPage', () => {
  let component: DayfivelunchPage;
  let fixture: ComponentFixture<DayfivelunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfivelunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfivelunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

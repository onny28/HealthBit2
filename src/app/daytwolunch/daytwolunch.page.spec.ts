import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytwolunchPage } from './daytwolunch.page';

describe('DaytwolunchPage', () => {
  let component: DaytwolunchPage;
  let fixture: ComponentFixture<DaytwolunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytwolunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytwolunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

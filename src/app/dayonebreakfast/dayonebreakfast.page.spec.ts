import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayonebreakfastPage } from './dayonebreakfast.page';

describe('DayonebreakfastPage', () => {
  let component: DayonebreakfastPage;
  let fixture: ComponentFixture<DayonebreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayonebreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayonebreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

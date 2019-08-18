import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysixbreakfastPage } from './daysixbreakfast.page';

describe('DaysixbreakfastPage', () => {
  let component: DaysixbreakfastPage;
  let fixture: ComponentFixture<DaysixbreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysixbreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysixbreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

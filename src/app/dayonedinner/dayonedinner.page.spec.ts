import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayonedinnerPage } from './dayonedinner.page';

describe('DayonedinnerPage', () => {
  let component: DayonedinnerPage;
  let fixture: ComponentFixture<DayonedinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayonedinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayonedinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

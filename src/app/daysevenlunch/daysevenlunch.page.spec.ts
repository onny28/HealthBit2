import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysevenlunchPage } from './daysevenlunch.page';

describe('DaysevenlunchPage', () => {
  let component: DaysevenlunchPage;
  let fixture: ComponentFixture<DaysevenlunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysevenlunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysevenlunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysixPage } from './daysix.page';

describe('DaysixPage', () => {
  let component: DaysixPage;
  let fixture: ComponentFixture<DaysixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

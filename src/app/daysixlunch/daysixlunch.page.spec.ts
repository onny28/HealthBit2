import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysixlunchPage } from './daysixlunch.page';

describe('DaysixlunchPage', () => {
  let component: DaysixlunchPage;
  let fixture: ComponentFixture<DaysixlunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysixlunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysixlunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

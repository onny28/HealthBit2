import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecipepagePage } from './viewrecipepage.page';

describe('ViewrecipepagePage', () => {
  let component: ViewrecipepagePage;
  let fixture: ComponentFixture<ViewrecipepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrecipepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecipepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdetailPage } from './locationdetail.page';

describe('LocationdetailPage', () => {
  let component: LocationdetailPage;
  let fixture: ComponentFixture<LocationdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

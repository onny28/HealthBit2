import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpagePage } from './adminpage.page';

describe('AdminpagePage', () => {
  let component: AdminpagePage;
  let fixture: ComponentFixture<AdminpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

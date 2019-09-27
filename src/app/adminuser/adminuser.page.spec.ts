import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserPage } from './adminuser.page';

describe('AdminuserPage', () => {
  let component: AdminuserPage;
  let fixture: ComponentFixture<AdminuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

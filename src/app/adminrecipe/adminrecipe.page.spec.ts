import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecipePage } from './adminrecipe.page';

describe('AdminrecipePage', () => {
  let component: AdminrecipePage;
  let fixture: ComponentFixture<AdminrecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

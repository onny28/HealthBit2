import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecipePage } from './addrecipe.page';

describe('AddrecipePage', () => {
  let component: AddrecipePage;
  let fixture: ComponentFixture<AddrecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

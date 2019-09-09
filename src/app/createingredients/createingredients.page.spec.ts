import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateingredientsPage } from './createingredients.page';

describe('CreateingredientsPage', () => {
  let component: CreateingredientsPage;
  let fixture: ComponentFixture<CreateingredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateingredientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateingredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

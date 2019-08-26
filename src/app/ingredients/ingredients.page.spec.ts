import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsPage } from './ingredients.page';

describe('IngredientsPage', () => {
  let component: IngredientsPage;
  let fixture: ComponentFixture<IngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

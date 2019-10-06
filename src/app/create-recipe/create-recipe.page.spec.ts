import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipePage } from './create-recipe.page';

describe('CreateRecipePage', () => {
  let component: CreateRecipePage;
  let fixture: ComponentFixture<CreateRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

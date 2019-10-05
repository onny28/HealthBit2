import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipelistsPage } from './recipelists.page';

describe('RecipelistsPage', () => {
  let component: RecipelistsPage;
  let fixture: ComponentFixture<RecipelistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipelistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipelistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

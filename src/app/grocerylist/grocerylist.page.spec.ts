import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerylistPage } from './grocerylist.page';

describe('GrocerylistPage', () => {
  let component: GrocerylistPage;
  let fixture: ComponentFixture<GrocerylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

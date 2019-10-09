import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgrocerylistPage } from './addgrocerylist.page';

describe('AddgrocerylistPage', () => {
  let component: AddgrocerylistPage;
  let fixture: ComponentFixture<AddgrocerylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgrocerylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgrocerylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

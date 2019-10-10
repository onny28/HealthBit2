import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritedetailsPage } from './favouritedetails.page';

describe('FavouritedetailsPage', () => {
  let component: FavouritedetailsPage;
  let fixture: ComponentFixture<FavouritedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

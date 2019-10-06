import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationPage } from './create-location.page';

describe('CreateLocationPage', () => {
  let component: CreateLocationPage;
  let fixture: ComponentFixture<CreateLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

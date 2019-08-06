import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPage } from './gender.page';

describe('GenderPage', () => {
  let component: GenderPage;
  let fixture: ComponentFixture<GenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

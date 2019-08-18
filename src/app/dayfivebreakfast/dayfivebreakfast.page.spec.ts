import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfivebreakfastPage } from './dayfivebreakfast.page';

describe('DayfivebreakfastPage', () => {
  let component: DayfivebreakfastPage;
  let fixture: ComponentFixture<DayfivebreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfivebreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfivebreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreebreakfastPage } from './daythreebreakfast.page';

describe('DaythreebreakfastPage', () => {
  let component: DaythreebreakfastPage;
  let fixture: ComponentFixture<DaythreebreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaythreebreakfastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreebreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

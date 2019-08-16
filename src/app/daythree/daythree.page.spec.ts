import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreePage } from './daythree.page';

describe('DaythreePage', () => {
  let component: DaythreePage;
  let fixture: ComponentFixture<DaythreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaythreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

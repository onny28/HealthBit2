import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyplanPage } from './healthyplan.page';

describe('HealthyplanPage', () => {
  let component: HealthyplanPage;
  let fixture: ComponentFixture<HealthyplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

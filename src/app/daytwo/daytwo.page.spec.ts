import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytwoPage } from './daytwo.page';

describe('DaytwoPage', () => {
  let component: DaytwoPage;
  let fixture: ComponentFixture<DaytwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

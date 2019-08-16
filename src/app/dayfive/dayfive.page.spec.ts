import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfivePage } from './dayfive.page';

describe('DayfivePage', () => {
  let component: DayfivePage;
  let fixture: ComponentFixture<DayfivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

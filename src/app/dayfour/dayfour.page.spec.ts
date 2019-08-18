import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourPage } from './dayfour.page';

describe('DayfourPage', () => {
  let component: DayfourPage;
  let fixture: ComponentFixture<DayfourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

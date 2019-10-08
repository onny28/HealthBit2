import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepiPage } from './resepi.page';

describe('ResepiPage', () => {
  let component: ResepiPage;
  let fixture: ComponentFixture<ResepiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

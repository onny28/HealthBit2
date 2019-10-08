import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepiListPage } from './resepi-list.page';

describe('ResepiListPage', () => {
  let component: ResepiListPage;
  let fixture: ComponentFixture<ResepiListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepiListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepiListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

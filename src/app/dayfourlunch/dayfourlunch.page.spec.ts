import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourlunchPage } from './dayfourlunch.page';

describe('DayfourlunchPage', () => {
  let component: DayfourlunchPage;
  let fixture: ComponentFixture<DayfourlunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfourlunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourlunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

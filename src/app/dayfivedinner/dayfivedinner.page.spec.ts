import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfivedinnerPage } from './dayfivedinner.page';

describe('DayfivedinnerPage', () => {
  let component: DayfivedinnerPage;
  let fixture: ComponentFixture<DayfivedinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfivedinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfivedinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

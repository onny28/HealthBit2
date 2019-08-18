import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytwodinnerPage } from './daytwodinner.page';

describe('DaytwodinnerPage', () => {
  let component: DaytwodinnerPage;
  let fixture: ComponentFixture<DaytwodinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytwodinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytwodinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

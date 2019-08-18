import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysixdinnerPage } from './daysixdinner.page';

describe('DaysixdinnerPage', () => {
  let component: DaysixdinnerPage;
  let fixture: ComponentFixture<DaysixdinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysixdinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysixdinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

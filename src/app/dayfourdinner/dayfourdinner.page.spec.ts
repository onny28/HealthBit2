import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayfourdinnerPage } from './dayfourdinner.page';

describe('DayfourdinnerPage', () => {
  let component: DayfourdinnerPage;
  let fixture: ComponentFixture<DayfourdinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayfourdinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayfourdinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

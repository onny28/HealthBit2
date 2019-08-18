import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayonelunchPage } from './dayonelunch.page';

describe('DayonelunchPage', () => {
  let component: DayonelunchPage;
  let fixture: ComponentFixture<DayonelunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayonelunchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayonelunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

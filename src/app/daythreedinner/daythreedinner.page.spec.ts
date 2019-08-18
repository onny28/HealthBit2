import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreedinnerPage } from './daythreedinner.page';

describe('DaythreedinnerPage', () => {
  let component: DaythreedinnerPage;
  let fixture: ComponentFixture<DaythreedinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaythreedinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreedinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

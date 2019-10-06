import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryPage } from './try.page';

describe('TryPage', () => {
  let component: TryPage;
  let fixture: ComponentFixture<TryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

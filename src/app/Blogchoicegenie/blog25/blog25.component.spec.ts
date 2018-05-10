import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog25Component } from './blog25.component';

describe('Blog25Component', () => {
  let component: Blog25Component;
  let fixture: ComponentFixture<Blog25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

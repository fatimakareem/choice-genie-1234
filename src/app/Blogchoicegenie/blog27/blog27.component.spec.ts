import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog27Component } from './blog27.component';

describe('Blog27Component', () => {
  let component: Blog27Component;
  let fixture: ComponentFixture<Blog27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

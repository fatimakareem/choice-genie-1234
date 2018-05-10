import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog24Component } from './blog24.component';

describe('Blog24Component', () => {
  let component: Blog24Component;
  let fixture: ComponentFixture<Blog24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog21Component } from './blog21.component';

describe('Blog21Component', () => {
  let component: Blog21Component;
  let fixture: ComponentFixture<Blog21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

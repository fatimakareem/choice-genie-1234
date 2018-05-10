import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog23Component } from './blog23.component';

describe('Blog23Component', () => {
  let component: Blog23Component;
  let fixture: ComponentFixture<Blog23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

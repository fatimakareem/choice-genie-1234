import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog22Component } from './blog22.component';

describe('Blog22Component', () => {
  let component: Blog22Component;
  let fixture: ComponentFixture<Blog22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

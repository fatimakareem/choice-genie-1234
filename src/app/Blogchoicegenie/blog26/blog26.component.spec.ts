import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog26Component } from './blog26.component';

describe('Blog26Component', () => {
  let component: Blog26Component;
  let fixture: ComponentFixture<Blog26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

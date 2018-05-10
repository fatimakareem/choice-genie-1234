import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindBogglingComponent } from './mind-boggling.component';

describe('MindBogglingComponent', () => {
  let component: MindBogglingComponent;
  let fixture: ComponentFixture<MindBogglingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindBogglingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindBogglingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogContentComponent } from './backlog-content.component';

describe('BacklogContentComponent', () => {
  let component: BacklogContentComponent;
  let fixture: ComponentFixture<BacklogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

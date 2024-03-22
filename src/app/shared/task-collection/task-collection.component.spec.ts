import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCollectionComponent } from './task-collection.component';

describe('TaskCollectionComponent', () => {
  let component: TaskCollectionComponent;
  let fixture: ComponentFixture<TaskCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCollectionComponent]
    });
    fixture = TestBed.createComponent(TaskCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

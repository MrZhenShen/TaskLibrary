import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCellComponent } from './friend-cell.component';

describe('FriendCellComponent', () => {
  let component: FriendCellComponent;
  let fixture: ComponentFixture<FriendCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendCellComponent]
    });
    fixture = TestBed.createComponent(FriendCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

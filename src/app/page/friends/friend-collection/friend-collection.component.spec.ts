import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCollectionComponent } from './friend-collection.component';

describe('FriendCollectionComponent', () => {
  let component: FriendCollectionComponent;
  let fixture: ComponentFixture<FriendCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendCollectionComponent]
    });
    fixture = TestBed.createComponent(FriendCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

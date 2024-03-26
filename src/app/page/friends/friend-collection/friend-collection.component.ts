import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserDetails} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../service/auth.service";
import {UserFriendStatus} from "../friends.component";

@Component({
  selector: 'app-friend-collection',
  templateUrl: './friend-collection.component.html',
  styleUrls: ['./friend-collection.component.scss']
})
export class FriendCollectionComponent {

  // @Input() users: UserFriendStatus | undefined
  //
  // constructor(
  //   private authService: AuthService,
  //   private userService: UserService
  // ) {
  // }
  //
  // ngOnInit(): void {
  //   this.authService.getUser().subscribe(user => {
  //     this.userService.getUserById(user['id']).subscribe(userDetails => {
  //
  //     })
  //   })
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['selectedInvoice']) {
  //     this.users = changes['selectedInvoice'].currentValue
  //   }
  // }
  //
  // addFriend(user: UserDetails) {
  //   this.userService.addFriend(user).then(r => this.users)
  // }
  //
  // removeFriend(user: UserDetails) {
  //   this.userService.removeFriend(user).then(r => this.users)
  // }
}

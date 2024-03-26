import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../model/user";
import {UserService} from "../../service/user.service";

export interface UserFriendStatus {
  user: UserDetails,
  isFriend: boolean
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  // users: UserFriendStatus | undefined
  //
  // constructor(private userService: UserService) {
  // }

  ngOnInit(): void {

  }

}

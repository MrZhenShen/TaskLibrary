import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  signOut() {
    this.authService
      .signOut()
      .then(() => this.router.navigate(["/auth/sign-in"]));
  }
}

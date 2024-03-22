import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  form: FormGroup

  errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  submit() {
    if (this.form.valid) {
      this.authService.signIn(
        this.form.value["email"],
        this.form.value["password"]
      ).then(
        () => this.router.navigate(["/tasks"]),
        failed => this.errorMessage = failed
      );
    }
  }

  disableSubmitButton(): boolean {
    return this.form.invalid || this.form.pristine
  }
}

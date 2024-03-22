import {Component} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup

  errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    })
  }

  submit() {
    if (this.form.valid && this.validConfirmPassword()) {
      this.authService.signUp(
        this.form.value["email"],
        this.form.value["password"]
      ).then(
        () => this.router.navigate(["/tasks"]),
        failed => this.errorMessage = failed
      );
    }
  }

  validConfirmPassword(): boolean {
    return this.form.value["password"] === this.form.value["passwordConfirm"]
  }

  disableSubmitButton(): boolean {
    return this.form.invalid
      || this.form.pristine
      || !this.validConfirmPassword()
  }
}

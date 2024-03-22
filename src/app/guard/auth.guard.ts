import {CanActivateFn, Router} from '@angular/router';
import {map} from "rxjs/operators";
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.isAuthenticated().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(["/auth/sign-in"])
        return false;
      }
      return true;
    })
  );
};


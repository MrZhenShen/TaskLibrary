import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user));
  }

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
  }


  async signOut() {
    await this.afAuth.signOut();
  }
}

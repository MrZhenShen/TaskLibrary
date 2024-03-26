import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {UserMapper} from "../mapper/user.mapper";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userState = new BehaviorSubject<any>(null);

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private userService: UserService,
        private userMapper: UserMapper
    ) {
        this.afAuth.authState.subscribe(user => {
            this.userState.next(user ? user : null)
        });
    }

    getUser() {
        return this.userState.asObservable();
    }

    isAuthenticated(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(user => !!user));
    }

    async signIn(email: string, password: string) {
        await this.afAuth.signInWithEmailAndPassword(email, password);
    }

    async signUp(email: string, password: string) {
        await this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
            this.userService.createUser(this.userMapper.fromUserCredentialToUserDetails(user))
        })
    }

    async signOut() {
        await this.afAuth.signOut().then(() => {
            this.router.navigate(["/auth/sign-in"])
        })
    }
}

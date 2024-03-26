import {Injectable} from "@angular/core";
import {UserDetails} from "../model/user";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class UserMapper {

  fromUserCredentialToUserDetails(userCredential: UserCredential): UserDetails {
    return new class implements UserDetails {
      age: number = -1
      email: string = userCredential.user?.email || ""
      friendIds: string[] = []
      tasks: string[] = []
      username: string = userCredential.user?.email?.split("@")[1] || ""
    }
  }
}

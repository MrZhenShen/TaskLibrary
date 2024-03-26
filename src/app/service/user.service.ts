import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {UserDetails} from "../model/user";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import firebase from "firebase/compat";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<UserDetails>;
  private lastDocument: QueryDocumentSnapshot<UserDetails> | null = null;

  constructor(private firestore: AngularFirestore) {
    this.usersCollection = this.firestore.collection<UserDetails>('users');
  }

  createUser(user: UserDetails): Promise<void> {
    const userId = this.firestore.createId();
    return this.firestore.collection('users').doc(userId).set(user);
  }

  getUserById(userId: string): Observable<UserDetails> {
    return this.firestore.collection('users').doc(userId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as UserDetails
        const id = action.payload.id
        return {id, ...data}
      })
    );
  }

  getUsers(limit: number): Observable<UserDetails[]> {
    let query = this.usersCollection.ref.orderBy('username').limit(limit);

    if (this.lastDocument) {
      query = query.startAfter(this.lastDocument);
    }

    return this.firestore.collection<UserDetails>('users', ref => query).snapshotChanges().pipe(
      map(actions => {
        if (actions.length > 0) {
          this.lastDocument = actions[actions.length - 1].payload.doc;
        }
        return actions.map(a => {
          const data = a.payload.doc.data() as UserDetails;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  updateUser(userId: string, user: Partial<UserDetails>): Promise<void> {
    return this.firestore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string): Promise<void> {
    return this.firestore.collection('users').doc(userId).delete();
  }

  addFriend(user: any): Promise<void> {
    return new Promise<void>(() => {
    })
  }

  removeFriend(user: any): Promise<void> {
    return new Promise<void>(() => {
    })
  }
}

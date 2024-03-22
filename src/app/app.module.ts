import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {TaskComponent} from './shared/task/task.component';
import {TaskCollectionComponent} from './shared/task-collection/task-collection.component';
import {FilterComponent} from './page/tasks/filter/filter.component';
import {FriendCellComponent} from './page/friends/friend-cell/friend-cell.component';
import {FriendCollectionComponent} from './page/friends/friend-collection/friend-collection.component';
import {SignInComponent} from './page/auth/sign-in/sign-in.component';
import {SignUpComponent} from './page/auth/sign-up/sign-up.component';
import {TasksPageComponent} from './page/tasks/tasks.component';
import {FriendsComponent} from './page/friends/friends.component';
import {AuthComponent} from './page/auth/auth.component';
import {FormSearchComponent} from './shared/form-search/form-search.component';
import {LibraryComponent} from './page/library/library.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./page/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskComponent,
    TaskCollectionComponent,
    FilterComponent,
    FriendCellComponent,
    FriendCollectionComponent,
    FormSearchComponent,
    SignInComponent,
    SignUpComponent,
    TasksPageComponent,
    ProfileComponent,
    FriendsComponent,
    AuthComponent,
    FormSearchComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

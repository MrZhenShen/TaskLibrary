import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksPageComponent} from "./page/tasks/tasks.component";
import {FriendsComponent} from "./page/friends/friends.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {LibraryComponent} from "./page/library/library.component";
import {AuthComponent} from "./page/auth/auth.component";
import {SignInComponent} from "./page/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./page/auth/sign-up/sign-up.component";
import {authGuard} from "./guard/auth.guard";

const routes: Routes = [
    {
      path: "auth",
      component: AuthComponent,
      canActivate: [!authGuard],
      children: [
        {path: "sign-in", component: SignInComponent},
        {path: "sign-up", component: SignUpComponent},
        {path: "", redirectTo: "sign-in", pathMatch: "full"},
      ]
    },
    {path: "tasks", component: TasksPageComponent, canActivate: [authGuard]},
    {path: "library", component: LibraryComponent, canActivate: [authGuard]},
    {path: "profile", component: ProfileComponent, canActivate: [authGuard]},
    {path: "friends", component: FriendsComponent, canActivate: [authGuard]},
    {path: "", redirectTo: "/tasks", pathMatch: 'full'},
    {path: "**", redirectTo: '/tasks'},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

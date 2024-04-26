import { Component, NgModule } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './guard/login.guard';
import { AdminGuard } from './guard/admin.guard';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path: "",redirectTo:"home", pathMatch:"full"},
  {path: "home", component : LoginPageComponent},
  {path: 'signUp', component : SignupPageComponent},
  {path: 'eventManager', component : EventManagerComponent,canActivate:[LoginGuard]},
  {path: 'userView', component : UserViewComponent,canActivate:[LoginGuard]},
  {path: 'eventEdit/:id', component : EventEditComponent,canActivate:[LoginGuard]},
  {path: 'userView/:id', component : UserViewDetailsComponent,canActivate:[LoginGuard]},
  {path: 'register/:id', component: RegisterComponent,canActivate:[LoginGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

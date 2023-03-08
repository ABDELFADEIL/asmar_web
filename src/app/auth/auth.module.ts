import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


const authRoutes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'creation-compte', component: SignupComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FontAwesomeModule,
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SecurityRoutingModule } from './security.routing.module';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    SharedModule,
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }

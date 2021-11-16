import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRoutingModule } from './auth.routing';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { EmailEnviadoComponent } from './email-enviado/email-enviado.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    CreatePasswordComponent,
    EmailEnviadoComponent,
    LoginComponent,
    CreateComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    authRoutingModule,
  ],
  exports: [
    CreatePasswordComponent,
  ]
})
export class AuthModule { }

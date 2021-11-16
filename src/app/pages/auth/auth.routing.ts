import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { EmailEnviadoComponent } from './email-enviado/email-enviado.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'create-password', component: CreatePasswordComponent },
      { path: 'send-email', component: EmailEnviadoComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create', component: CreateComponent },
      { path: 'account', component: AccountComponent },
      { path: '**', redirectTo: 'create-password' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class authRoutingModule {}

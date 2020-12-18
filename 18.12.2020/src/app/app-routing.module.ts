import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NaukriComponent } from './naukri/naukri.component';
import { FormComponent } from './form/form.component';
import { ApplicationComponent } from './application/application.component';
import { FormtookComponent } from './formtook/formtook.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'naukri', component: NaukriComponent },
  { path: 'form', component: FormComponent },
  { path: 'submitted', component: ApplicationComponent,
children : [
  { path: 'formtook', component: FormtookComponent,
 }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

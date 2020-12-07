import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ServerCreationComponent } from './server-creation/server-creation.component';
import { ServerDisplayComponent } from './server-display/server-display.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'server', component: ServerDisplayComponent},
  { path: 'server/createNew', component: ServerCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

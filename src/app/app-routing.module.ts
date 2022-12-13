import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './access/register/register.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'access',
    loadChildren: () =>
      import('./access/access.module').then((opt) => opt.AccessModule),
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'contact',
    pathMatch: 'full',
    //component: ContactComponent,
    children: [
      { path: '', component: ContactComponent },

      { path: 'edit/1', component: AddcontactComponent },
      { path: 'add', component: AddcontactComponent },
      {
        path: 'access',
        loadChildren: () =>
          import('./access/access.module').then((opt) => opt.AccessModule),
      },
    ],
  },
  //{ path: '**', component: StatusComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

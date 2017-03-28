import {Routes, RouterModule} from "@angular/router";

import {RegisterComponent} from "./../components/register/register.component";
import {LoginComponent} from "./../components/login/login.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
];

export const authenticateRoutes = routes;

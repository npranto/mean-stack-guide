import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: '**', redirectTo: ''
  }
];


export const rootRoutes = RouterModule.forRoot(routes);


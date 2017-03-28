import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthenticateComponent} from './components/authenticate/authenticate.component';
import {LoginComponent} from './components/login/login.component';

import {authenticateRoutes} from './routes/authenticate.routes';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'authenticate', component: AuthenticateComponent, children: authenticateRoutes
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


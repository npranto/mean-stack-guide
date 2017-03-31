import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthenticateComponent} from './components/authenticate/authenticate.component';
import {LoginComponent} from './components/login/login.component';

import {authenticateRoutes} from './routes/authenticate.routes';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'authenticate', component: AuthenticateComponent, children: authenticateRoutes
  },
  {
    path: 'dashboard/:username', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile/:username', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];


export const rootRoutes = RouterModule.forRoot(routes);


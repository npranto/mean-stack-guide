import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', redirectTo: ''
  }
];


export const rootRoutes = RouterModule.forRoot(routes);


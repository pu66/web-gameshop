import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { adminGuard } from './guards/authRoleAdmin';
import { Dashbord } from './pages/admin/dashbord/dashbord';

import { Home } from './pages/user/home/home';
import { userGuard } from './guards/authRoleUser';
export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home, canActivate: [userGuard] },
  { path: 'login', component: Login },

  { path: 'register', component: Register },
  { path: 'admin', component: Dashbord, canActivate: [adminGuard] },
  //   {
  //  path: 'home',
  //     loadChildren: () => import('./pages/user/home/home').then((c) => c.Home),
  //   },
];

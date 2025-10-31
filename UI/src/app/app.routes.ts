import { Routes } from '@angular/router';
import { LandingPage } from './core/pages/landing-page/landing-page';
import { authGuard } from './features/auth/guards/auth-guard';

import { AuthPage } from './features/auth/pages/auth-page/auth-page';

import { DOCTOR_ROUTES } from './features/doctor/consts/doctor-routes.const';

export const routes: Routes = [
  ...DOCTOR_ROUTES,
  { path: '', component: LandingPage, canActivate: [authGuard] },
  { path: 'auth', component: AuthPage },
  { path: '**', redirectTo: '' },
];

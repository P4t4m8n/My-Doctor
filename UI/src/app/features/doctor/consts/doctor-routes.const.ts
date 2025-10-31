import { Routes } from '@angular/router';
import { IconDashboard } from '../../../core/icons/icon-dashboard/icon-dashboard';
import { INavRoute } from '../../../core/models/nav-routes.model';
import { authGuard } from '../../auth/guards/auth-guard';
import { roleGuard } from '../../user/guards/role-guard';
import { DoctorAppointments } from '../pages/doctor-appointments/doctor-appointments';
import { DoctorHome } from '../pages/doctor-home/doctor-home';
import { DoctorPatients } from '../pages/doctor-patients/doctor-patients';
import { DoctorProfile } from '../pages/doctor-profile/doctor-profile';
import { DoctorSchedule } from '../pages/doctor-schedule/doctor-schedule';
import { IconPatients } from '../../../core/icons/icon-patients/icon-patients';
import { IconCalendar } from '../../../core/icons/icon-calendar/icon-calendar';
import { IconSchedule } from '../../../core/icons/icon-schedule/icon-schedule';
import { IconSettings } from '../../../core/icons/icon-settings/icon-settings';

export const DOCTOR_PATHS = {
  dashboard: 'doctor/dashboard',
  patients: 'doctor/patients',
  appointments: 'doctor/appointments',
  schedule: 'doctor/schedule',
  settings: 'doctor/settings',
};

export const DOCTOR_NAV_ROUTES: INavRoute[] = [
  { route: DOCTOR_PATHS.dashboard, label: 'Dashboard', icon: IconDashboard },
  { route: DOCTOR_PATHS.patients, label: 'Patients', icon: IconPatients },
  { route: DOCTOR_PATHS.appointments, label: 'Appointments', icon: IconCalendar },
  { route: DOCTOR_PATHS.schedule, label: 'Schedule', icon: IconSchedule },
  { route: DOCTOR_PATHS.settings, label: 'Settings', icon: IconSettings },
];

const DOCTOR_ALLOWED_ROLES = ['Doctor', 'Admin'];
const DOCTOR_GUARDS = [authGuard, roleGuard];

export const DOCTOR_ROUTES: Routes = [
  {
    path: DOCTOR_PATHS.dashboard,
    component: DoctorHome,
    canActivate: DOCTOR_GUARDS,
    data: { roles: DOCTOR_ALLOWED_ROLES },
  },
  {
    path: DOCTOR_PATHS.appointments,
    component: DoctorAppointments,
    canActivate: DOCTOR_GUARDS,
    data: { roles: DOCTOR_ALLOWED_ROLES },
  },
  {
    path: DOCTOR_PATHS.patients,
    component: DoctorPatients,
    canActivate: DOCTOR_GUARDS,
    data: { roles: DOCTOR_ALLOWED_ROLES },
  },
  {
    path: DOCTOR_PATHS.schedule,
    component: DoctorSchedule,
    canActivate: DOCTOR_GUARDS,
    data: { roles: DOCTOR_ALLOWED_ROLES },
  },
  {
    path: DOCTOR_PATHS.settings,
    component: DoctorProfile,
    canActivate: DOCTOR_GUARDS,
    data: { roles: DOCTOR_ALLOWED_ROLES },
  },
];

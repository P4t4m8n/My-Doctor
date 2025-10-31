import { Role } from '../../features/auth/enums/role';
import { DOCTOR_NAV_ROUTES } from '../../features/doctor/consts/doctor-routes.const';
import { INavRoute } from '../models/nav-routes.model';

const NURSE_NAV_ROUTES: INavRoute[] = [];
const RECEPTIONIST_NAV_ROUTES: INavRoute[] = [];
const PATIENT_NAV_ROUTES: INavRoute[] = [];

const ADMIN_NAV_ROUTES: INavRoute[] = [...DOCTOR_NAV_ROUTES];

export const NAV_ROUTES: Record<Role, INavRoute[]> = {
  [Role.Admin]: ADMIN_NAV_ROUTES,
  [Role.Doctor]: DOCTOR_NAV_ROUTES,
  [Role.Nurse]: NURSE_NAV_ROUTES,
  [Role.Receptionist]: RECEPTIONIST_NAV_ROUTES,
  [Role.Patient]: PATIENT_NAV_ROUTES,
};

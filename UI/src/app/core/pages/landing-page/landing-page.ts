import { Component, inject, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { AuthService } from '../../../features/auth/services/auth';


import { Role } from '../../../features/auth/enums/role';

import type { IAuthDTO } from '../../../features/auth/interfaces/auth';
import { DoctorDashboard } from '../../../features/doctor/pages/doctor-dashboard/doctor-dashboard';

@Component({
  selector: 'landing-page',
  imports: [NgComponentOutlet],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  authService = inject(AuthService);

  session_user: IAuthDTO | null = null;

  ngOnInit(): void {
    this.authService._session_user$.subscribe((user) => {
      this.session_user = user;
    });
  }

  getHomeBaseOnRole() {
    const role = this.session_user?.role;
    switch (role) {
      case Role.Admin:
        return null;
      case Role.Doctor:
        return DoctorDashboard;
      case Role.Patient:
        return null;
      case Role.Nurse:
        return null;
      case Role.Receptionist:
        return null;
      default:
        return null;
    }
  }
}

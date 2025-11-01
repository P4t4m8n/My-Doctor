import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../../../appointment/service/appointment-service';
import { IAppointmentDTO } from '../../../appointment/models/appointment-dto';
import { AuthService } from '../../../auth/services/auth';
import { IAuthDTO } from '../../../auth/interfaces/auth';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { IconCalendar } from '../../../../core/icons/icon-calendar/icon-calendar';
import { IconPatients } from '../../../../core/icons/icon-patients/icon-patients';
import { IconSchedule } from '../../../../core/icons/icon-schedule/icon-schedule';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [TitleCasePipe, IconCalendar, IconPatients, IconSchedule, DatePipe],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.css',
})
export class DoctorDashboard implements OnInit {
  appointmentService = inject(AppointmentService);
  authService = inject(AuthService);

  user$ = this.authService._session_user$;
  appointments$ = this.appointmentService.appointments$;

  session_user: IAuthDTO | null = null;
  appointments: IAppointmentDTO[] = [];

  pending_appointments: number = 0;
  new_patients: number = 3;
  today_appointments: number = 0;

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
      this.pending_appointments = this.appointments.filter(
        (appt) => appt.status === 'scheduled'
      ).length;

      this.today_appointments = this.appointments.filter((appt) => {
        const apptDate = new Date(appt.appointment_date);
        const today = new Date();
        return (
          apptDate.getDate() === today.getDate() &&
          apptDate.getMonth() === today.getMonth() &&
          apptDate.getFullYear() === today.getFullYear()
        );
      }).length;
    });

    this.authService._session_user$.subscribe((user) => {
      this.session_user = user;
    });
  }
}

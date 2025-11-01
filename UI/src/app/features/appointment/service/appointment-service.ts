import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAppointmentDTO } from '../models/appointment-dto';
import { Role } from '../../auth/enums/role';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private _appointments$ = new BehaviorSubject<IAppointmentDTO[]>([]);
  public appointments$ = this._appointments$.asObservable();

  constructor() {
    this.loadDemoAppointments();
  }
  private loadDemoAppointments(): void {
    const today = new Date();
    const demoAppointments: IAppointmentDTO[] = [
      {
        id: '1',
        patient_id: 'patient-001',
        doctor_id: 'doctor-001',
        patient: {
          id: 'patient-001',
          first_name: 'John',
          last_name: 'Doe',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar1.jpg',
        },
        appointment_date: today,
        appointment_time: '09:00',
        status: 'scheduled',
        appointment_type: 'consultation',
        reason_for_visit: 'Annual checkup',
        notes: 'Patient reports mild headache',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '2',
        patient_id: 'patient-002',
        doctor_id: 'doctor-002',
        patient: {
          id: 'patient-002',
          first_name: 'Jane',
          last_name: 'Smith',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar2.jpg',
        },
        appointment_date: today,
        appointment_time: '10:00',
        status: 'completed',
        appointment_type: 'follow_up',
        reason_for_visit: 'Follow-up on blood test',
        notes: 'Results normal',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '3',
        patient_id: 'patient-003',
        doctor_id: 'doctor-001',
        patient: {
          id: 'patient-003',
          first_name: 'Michael',
          last_name: 'Johnson',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar3.jpg',
        },
        appointment_date: today,
        appointment_time: '11:00',
        status: 'scheduled',
        appointment_type: 'emergency',
        reason_for_visit: 'Chest pain',
        notes: 'Urgent case',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '4',
        patient_id: 'patient-004',
        doctor_id: 'doctor-003',
        patient: {
          id: 'patient-004',
          first_name: 'Emily',
          last_name: 'Davis',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar4.jpg',
        },
        appointment_date: today,
        appointment_time: '12:00',
        status: 'canceled',
        appointment_type: 'routine',
        reason_for_visit: 'Vaccination',
        notes: 'Canceled by patient',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '5',
        patient_id: 'patient-005',
        doctor_id: 'doctor-002',
        patient: {
          id: 'patient-005',
          first_name: 'David',
          last_name: 'Wilson',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar5.jpg',
        },
        appointment_date: today,
        appointment_time: '13:00',
        status: 'scheduled',
        appointment_type: 'consultation',
        reason_for_visit: 'Skin rash',
        notes: 'Allergic reaction suspected',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '6',
        patient_id: 'patient-006',
        doctor_id: 'doctor-001',
        patient: {
          id: 'patient-006',
          first_name: 'Sarah',
          last_name: 'Brown',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar6.jpg',
        },
        appointment_date: today,
        appointment_time: '14:00',
        status: 'completed',
        appointment_type: 'follow_up',
        reason_for_visit: 'Post-surgery check',
        notes: 'Healing well',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '7',
        patient_id: 'patient-007',
        doctor_id: 'doctor-003',
        patient: {
          id: 'patient-007',
          first_name: 'Robert',
          last_name: 'Miller',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar7.jpg',
        },
        appointment_date: today,
        appointment_time: '15:00',
        status: 'scheduled',
        appointment_type: 'emergency',
        reason_for_visit: 'High fever',
        notes: 'Possible infection',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '8',
        patient_id: 'patient-008',
        doctor_id: 'doctor-002',
        patient: {
          id: 'patient-008',
          first_name: 'Lisa',
          last_name: 'Garcia',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar8.jpg',
        },
        appointment_date: today,
        appointment_time: '16:00',
        status: 'scheduled',
        appointment_type: 'routine',
        reason_for_visit: 'Dental cleaning',
        notes: 'Regular maintenance',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '9',
        patient_id: 'patient-009',
        doctor_id: 'doctor-001',
        patient: {
          id: 'patient-009',
          first_name: 'James',
          last_name: 'Martinez',
          role: Role.Patient,
          avatarUrl: 'https://example.com/avatar9.jpg',
        },
        appointment_date: today,
        appointment_time: '17:00',
        status: 'completed',
        appointment_type: 'consultation',
        reason_for_visit: 'Back pain',
        notes: 'Prescribed pain relief',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
      {
        id: '10',
        patient_id: 'patient-010',
        doctor_id: 'doctor-003',
        patient: {
          id: 'patient-010',
          first_name: 'Anna',
          last_name: 'Lopez',
          role: Role.Patient,

          avatarUrl: 'https://example.com/avatar10.jpg',
        },
        appointment_date: today,
        appointment_time: '18:00',
        status: 'scheduled',
        appointment_type: 'follow_up',
        reason_for_visit: 'Therapy session',
        notes: 'Progress review',
        created_by: 'admin',
        created_at: today,
        updated_at: today,
      },
    ];
    this._appointments$.next(demoAppointments);
  }

  getAppointments(): Observable<IAppointmentDTO[]> {
    return new Observable((observer) => {
      observer.next(this._appointments$.value);
      observer.complete();
    });
  }
}

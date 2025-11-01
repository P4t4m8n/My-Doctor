import { IEntity } from '../../../core/interfaces/entity';
import { IAuthDTO } from '../../auth/interfaces/auth';

const APPOINTMENT_TYPE = ['consultation', 'follow_up', 'emergency', 'routine'] as const;

export type TAppointmentType = (typeof APPOINTMENT_TYPE)[number];

export interface IAppointmentDTO extends IEntity {
  patient_id: string;
  doctor_id: string;
  patient: IAuthDTO;
  appointment_date: Date;
  appointment_time: string;
  status: 'scheduled' | 'completed' | 'canceled';
  appointment_type: TAppointmentType;
  reason_for_visit: string;
  notes?: string;
  created_by?: string;
}

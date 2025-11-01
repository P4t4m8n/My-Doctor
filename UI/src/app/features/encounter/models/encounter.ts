import { IEntity, IPublicId } from '../../../core/interfaces/entity';

export interface IEncounter extends IEntity {
  patient_id: string;
  doctor_id: string;
  encounter_date: Date;
  encounter_time: string;
  appointment_id?: string;
  complaints: IEncounterComplaintDTO[];
  full_notes?: string;
  summary: string;
  diagnosis: IEncounterMedicalConditionDTO[];
  treatments: IEncounterMedicalTreatmentDTO[];
  recommendations?: string[];
}

export interface IEncounterComplaintDTO extends IEntity {
  complaint: IComplaintDTO;
  severity: 'mild' | 'moderate' | 'severe';
  first_noted: Date;
  duration_days: number;
  notes?: string;
}

export interface IComplaintDTO extends IEntity, IPublicId {
  name: string;
  category: string;
  description?: string;
}

export interface IEncounterMedicalConditionDTO extends IEntity {
  medical_condition: IMedicalConditionDTO;
  diagnosis_date: Date;
  status: 'active' | 'resolved' | 'chronic';
  notes?: string;
}

export interface IMedicalConditionDTO extends IEntity, IPublicId {
  name: string;
  description?: string;
  category: string;
}

export interface IEncounterMedicalTreatmentDTO extends IEntity {
  medical_treatment: IMedicalTreatmentDTO;
  start_date: Date;
  end_date?: Date;
  dosage: string;
  frequency: string;
  notes?: string;
}

export interface IMedicalTreatmentDTO extends IEntity, IPublicId {
  name: string;
  description?: string;
  category: string;
  effective_date: Date;
  notes?: string;
}

import { Hospital } from '../../store/hospital.store'

export interface Visit {
  id: string
  hospital: Hospital
  patient: Patient
  dateOfVisit: Date
  specialization: string
  doctor: Doctor
}

export interface Patient {
  id: string
  name: string
}

export interface Doctor {
  id: string
  name: string
}

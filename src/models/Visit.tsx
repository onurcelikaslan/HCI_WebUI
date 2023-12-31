import { Hospital } from "./Hospital";
import { Patient } from "./Patient";

export interface Visit {
    id: string;
    visitDate: string;
    patient: Patient;
    hospital: Hospital;
}

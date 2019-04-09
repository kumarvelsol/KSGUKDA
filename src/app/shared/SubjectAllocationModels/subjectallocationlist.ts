import { SubjectAllocationData } from './subjectallocationdata';

export interface SubjectAllocationList{
    code: number;
    message: string;
    Data: SubjectAllocationData[];
}
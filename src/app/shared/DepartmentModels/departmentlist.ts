import { DepartmentData } from './departmentdata';

export interface DepartmentList {
  code: number;
  message: string;
  Data: DepartmentData[];
}
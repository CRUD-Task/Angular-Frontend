export interface Employee {
  id?: string; // Changed from number to string for Guid
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  hireDate: string; // or Date if you prefer
  salary: number;
  isActive: boolean;
}
export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  hireDate: string;
  salary: number;
  isActive: boolean;
}
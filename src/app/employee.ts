import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    { 
      id: '1', // Changed from number to string
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      jobTitle: 'Developer',
      hireDate: new Date().toISOString(),
      salary: 60000,
      isActive: true
    },
    { 
      id: '2', // Changed from number to string
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phoneNumber: '0987654321',
      jobTitle: 'Designer',
      hireDate: new Date().toISOString(),
      salary: 55000,
      isActive: true
    }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: string): Employee | undefined {
    return this.employees.find(e => e.id === id);
  }

   addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: string): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
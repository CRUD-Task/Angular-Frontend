import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    hireDate: new Date().toISOString().split('T')[0],
    salary: 0,
    isActive: true,
  };
  isEdit = false;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEmployee(id);
    }
  }

  loadEmployee(id: string): void {
    this.isLoading = true;
    this.employeeService.getEmployee(id).subscribe({
      next: (employee) => {
        this.employee = employee;
        this.isEdit = true;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
  console.log('Submitting:', JSON.stringify(this.employee));
  
  this.isLoading = true;
  const operation = this.isEdit 
    ? this.employeeService.updateEmployee(this.employee)
    : this.employeeService.addEmployee(this.employee);
    console.log('heere',this.employee);

  operation.subscribe({
    next: (response) => {
      console.log('API Response:', response);
      this.router.navigate(['/employees']);
    },
    error: (err) => {
      console.error('API Error:', err);
      this.isLoading = false;
    }
  });
}
}
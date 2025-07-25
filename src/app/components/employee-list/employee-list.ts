import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe, CurrencyPipe],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
  providers: [DatePipe, CurrencyPipe]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading: boolean = true;

  constructor(
    private employeeService: EmployeeService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.employeeService.getEmployees()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (employees) => {
          this.employees = employees;
        },
        error: (err) => {
          console.error('Error loading employees', err);
          // Handle error appropriately
        }
      });
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe({
          next: () => {
            this.loadEmployees(); // Refresh the list after deletion
          },
          error: (err) => {
            console.error('Error deleting employee', err);
          }
        });
    }
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'mediumDate') || date;
  }

  formatCurrency(amount: number): string {
    return this.currencyPipe.transform(amount, 'USD') || amount.toString();
  }
}
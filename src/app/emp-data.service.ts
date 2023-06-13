import { Injectable } from '@angular/core';
import { Employee } from './models/Employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  employees: Array<Employee> = new Array<Employee>()
  employeeCount: number = Employee.ID
  constructor() {
    this.employees.push(new Employee("Zahid", 26))
    this.employees.push(new Employee("Omkar", 25))
    this.employees.push(new Employee("Shubham", 26))
  }

  getempData(){
    return this.employees
  }
}

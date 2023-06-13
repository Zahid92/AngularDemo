import { Component } from '@angular/core';
import { Employee } from '../models/Employee/employee';
import { EmpDataService } from '../emp-data.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  username: string | undefined = "";
  age: number | null = null;
  employees: Array<Employee> = new Array<Employee>()
  employeeCount: number = Employee.ID
  constructor() {
    let empdata = new EmpDataService();
    this.employees = empdata.getempData();
  }

  AddEmployee() {
    if (this.username == undefined || this.age == null) {
      alert("Username or Age is not filled.")
      return
    }
    if (this.age < 0) {
      confirm("Age Could not be negative")
      return
    }
    this.employees.push(new Employee(this.username, this.age))
    this.username = undefined
    this.age = null
  }
}

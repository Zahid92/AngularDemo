import { Injectable } from '@angular/core';
import { Employee } from './models/Employee/employee';

@Injectable({
  providedIn: 'root' // root means injected at the Module level
})
export class EmpDataService {

  employees: Array<Employee> = new Array<Employee>()
  employeeCount: number = Employee.ID
  constructor() {
    this.AddEmployee("Zahid", 26, 0)
    this.AddEmployee("Omkar", 25, 0)
    this.AddEmployee("Shubham", 26, 0)
  }

  getempData(){
    return this.employees
  }

  AddEmployee(name:string, age:number, salary:number){
    this.employees.push(new Employee(name,age,salary))
    this.employeeCount+=1
    return this.employees
  }

  DeleteEmployee(id:number){
    for (var i = 0; i < Employee.ID; ++i) {
      if (this.employees[i].EmployeeID == id) {
        this.employees.splice(i, 1)
        console.log("emp: {eid} is deleted");
        this.employeeCount-=1
        return this.employees
      }
    }
    console.log(`Unable to delete : ${id}`)
    return this.employees
  }
}

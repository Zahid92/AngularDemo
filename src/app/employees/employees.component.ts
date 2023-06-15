import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee/employee';
import { EmpDataService } from '../emp-data.service'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  username: string | undefined = "";
  age: number | null = null;
  employees: Array<Employee> = new Array<Employee>()
  employeeCount!: number
  isAdmin: boolean = true

  //for dependency injection we will pass service in constructor
  constructor(private empdata: EmpDataService, private apiService: ApiService) {

    // this is not a good design to create concrete classes in constructor
    // let empdata = new EmpDataService();
    // this.employees = empdata.getempData();
  }
  ngOnInit(): void {
    //this.employees = this.empdata.getempData()
    this.getEmployeeData()
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
    this.employees.push(new Employee(this.username, this.age, 0))
    this.apiService.postEmpData(new Employee(this.username, this.age, 0)).subscribe(res=>{console.log(res)})
    this.username = undefined
    this.age = null
  }

  Delete(eid: number) {
    this.employees = this.empdata.DeleteEmployee(eid)
  }

  UpdateSalary(salary: number, eid: number) {
    for (var i = 0; i < this.employees.length; i += 1) {
      if (this.employees[i].EmployeeID == eid) {
        this.employees[i].Salary = salary
      }
    }
  }


  getEmployeeData() {
    this.apiService.getEmpData().subscribe(res => {
      this.employees = res
      console.log(res)
    }, (error) => {
      console.log(error);
    }
    )
  }

}

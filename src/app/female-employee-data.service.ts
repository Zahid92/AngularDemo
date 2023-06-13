import { Injectable } from '@angular/core';
import { EmpDataService } from './emp-data.service';
import { Employee } from './models/Employee/employee';

@Injectable({
  providedIn: 'root'
})
export class FemaleEmployeeDataService extends EmpDataService{

  constructor() {
    super()
    this.employees = new Array<Employee>();
    this.AddEmployee("Shaziya", 38, 89)
    this.AddEmployee("Dimple", 45, 200)
    this.AddEmployee("Sakshi", 25, 30)
   }

}

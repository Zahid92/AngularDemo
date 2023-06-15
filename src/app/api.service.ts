import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getEmpData(): Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employees")
  }
  postEmpData(mi:Employee):Observable<any>{
    return this.http.post('http://localhost:3000/employees', mi)
  }
}

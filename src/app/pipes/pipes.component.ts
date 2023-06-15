import { Component } from '@angular/core';
import { Employee } from '../models/Employee/employee';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name:string ="Angular"
  date=new Date()
  person = new Employee("zahid",25,50000)
}

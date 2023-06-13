import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salaryupdater',
  templateUrl: './salaryupdater.component.html',
  styleUrls: ['./salaryupdater.component.css']
})
export class SalaryupdaterComponent implements OnInit {
  @Input() salval!:number
  @Output() updateSal =new EventEmitter<number>()

  constructor() {

  }
  ngOnInit(): void { }

  UpdateSalary(){
    this.updateSal.emit(this.salval)
  }
}

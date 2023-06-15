import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})

export class ViewchildComponent implements OnInit {

  @ViewChild ("highlight") marker!:ElementRef
  @ViewChildren("highlight") allmarker!:QueryList<ElementRef>
  @ViewChild("child") child!:CounterComponent

  constructor(){}
  ngOnInit(): void {
    // console.log(this.marker)
    // this.marker.nativeElement.style.color ="red"
  }

  ngAfterViewInit():void{
    console.log(this.marker)
    this.marker.nativeElement.style.color ="red"
    this.child.counter=0
    console.log(this.allmarker)
    this.allmarker.first.nativeElement.style.color = "blue"
    this.allmarker.last.nativeElement.style.color = "green"

  }
  inc(){
    this.child.increment()
  }
  dec(){
    this.child.decrement()
  }
}

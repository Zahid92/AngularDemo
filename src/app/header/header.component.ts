import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}) 


export class HeaderComponent implements OnInit{
  username!:string
  
  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.auth.getUsername().subscribe(newuser=>{
      this.username=newuser
    })
  }
}

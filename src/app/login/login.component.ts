import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "Guest"
  password: string = "password"

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.auth.setUsername
  }

  Authenticate() {
    if (this.username == "admin" && this.password == "admin") {
      this.route.navigate(['empList'])
    }
    else {
      alert("Invalid Login.")
    }
    this.auth.setUsername(this.username)
  }
}

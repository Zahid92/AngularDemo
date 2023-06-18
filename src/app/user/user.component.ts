import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users!: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.Users = res;
        console.log(res);
      },
      error: (err) => { console.log(err) }
    })
  }

}

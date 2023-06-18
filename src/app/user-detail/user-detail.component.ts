import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  id!: number;
  userDetail!:any;
  constructor(private activateRoute: ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
  }
  getUserDetail(){
    this.userService.getUserDetail().subscribe(res=>{this.userDetail=res})
  }
}

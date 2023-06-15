import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 signupform!: FormGroup

  
  constructor(){
    this.signupform= new FormGroup({
      name: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    })

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get name(){
    return this.signupform.get('name')
  }
  get email(){
    return this.signupform.get('email')
  }
  get password(){
    return this.signupform.get('password')
  }
}

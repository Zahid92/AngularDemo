import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/models/User/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // return this.http.get("http://localhost:3000/posts/")

  }
  getUserDetail(): Observable<any> {

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // return this.http.get("http://localhost:3000/posts/")

  }
}
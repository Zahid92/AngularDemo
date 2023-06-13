import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subject = new Subject<string>()

  constructor() { }

  //this method will be called by Login component
  setUsername(username: string) {
    this.subject.next(username)
  }

  // this will be called by header
  getUsername(): Observable<string> {
    return this.subject.asObservable()
  }
}

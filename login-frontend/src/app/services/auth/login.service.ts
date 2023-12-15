import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get <User> ("/src/assets/data.json")
  }
}

import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get <User> ("../../../assets/data.json").pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error("Error", error)
    }
    else{
      console.error('Codigo estado', error.status, error.error)

    }
    return throwError(()=>new Error("Algo fallo, intente nuevamente"))

  }
}

import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData:BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get <User> ("../../../assets/data.json").pipe(
      tap( userData =>{
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
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

  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}

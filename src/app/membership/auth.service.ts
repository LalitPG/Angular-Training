import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
      status:boolean=false;
      apiPath:string = "http://localhost:8000/";
      constructor(private httpClient:HttpClient){

      }
      validate(user: any): Observable<any> {
      return this.httpClient.post<any>(this.apiPath+"auth/login",user);
     }
     register(user:any):Observable<string>
     {
        return this.httpClient.post<string>(this.apiPath+"auth/register",user);
     }

    logout(): any {   localStorage.removeItem('username'); }
    getUser(): any {   return localStorage.getItem('username'); }
    isLoggedIn(): boolean {    return this.getUser() !== null;  }
}
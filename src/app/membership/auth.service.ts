import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
      private token: string | null = null;
      status:boolean=false;
      apiPath:string = "http://localhost:8000/";
      constructor(private httpClient:HttpClient){}
      validate(user: any): Observable<any> 
      {
      return this.httpClient.post<any>(this.apiPath+"auth/login",user);
      }
      register(user:any):Observable<string>
      {
         return this.httpClient.post<string>(this.apiPath+"auth/register",user);
      }

    logout(): any
    { 
        localStorage.removeItem('username'); 
        this.token = null;
        localStorage.removeItem('jwt');
    }
    getUser(): any {   return localStorage.getItem('username'); }
    isLoggedIn(): boolean 
    {   
       //return !!this.getToken();
       return this.getUser() !== null;  
    }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('jwt');
    }
    return this.token;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';
import { NgoApiService } from './ngo-api.service';
import { SignUp } from './sign-up';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any;

  private _url:string = "https://localhost:7051/api/Login"
  private url:string = "https://localhost:7051/api/Login/register"

  
  constructor(private http:HttpClient,
              private router:Router,
              private dataService:NgoApiService) { }

  login(userName:string,passWord:string){
    let body:Login = {
      userName, passWord
    }
    return this.http.post(this._url ,body, { responseType: 'text'})

  }

  postUser(userData: any): Observable<SignUp[]>{
    return this.http.post<SignUp[]>(this.url,userData)
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/home"])
    
    this.dataService.data = []
  }

  isLoggedIn(){
    if(localStorage.getItem('token')) return true;
    return false;
  }

  isAdmin(){
    
    if(!localStorage.getItem('role')) return false;

    if(localStorage.getItem('role')!="admin") return false;
    console.log(localStorage.getItem('token'))
    return true;
  }
  isUser(){
    if(!localStorage.getItem('role')) return false;

    if(localStorage.getItem('role')!="User") return false;

    return true;
  }

}
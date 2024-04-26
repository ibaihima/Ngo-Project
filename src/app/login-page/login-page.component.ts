import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';



 @Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })
  export class LoginPageComponent {

    userName:string = '';
    passWord:string ='';
    constructor(private router: Router, public dataService: LoginService){
    }

    userSubmit(){
      this.dataService.login(this.userName,this.passWord).subscribe({
        next:(data:any) => {

          localStorage.setItem('token',data)
          // if(this.dataService.isAdmin()){
          this.router.navigate(["/eventManager"])
          // }
          // else{
          // this.router.navigate(['/userView'])
          // }
        },
        error:(err) => {alert(`PLease try again`) ,console.log(err)},
     })

    }

    route(){
      // console.log("logged in")
      if(this.dataService.isLoggedIn()){
      this.router.navigate(["/eventManager"])
      }
    }
    onClick(){
      this.router.navigate(["/signUp"])
    }
  } 



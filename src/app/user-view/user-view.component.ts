import { Component, OnInit } from '@angular/core';
import { Ngo } from '../ngo';
import { NgoApiService } from '../ngo-api.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit{

  ngos:Ngo[]=[]
  constructor(public dataService:NgoApiService ,private router:Router,public loginService: LoginService){
  }
  ngOnInit() {
    this.dataService.getNgos().subscribe(
    (data) => {this.ngos = data, console.log(data)},
    (err) => {console.log(err)},
    () => {console.log("complete")}
    )
  }

  onClick(ngos: any){
    this.router.navigate(["userView/",ngos.ngoId])
  }

  goHome(){
    this.router.navigate(['eventManager'])
  }
  userView(){
    this.router.navigate(['userView'])
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Ngo } from '../ngo';
import { NgoApiService } from '../ngo-api.service';

@Component({
  selector: 'app-user-view-details',
  templateUrl: './user-view-details.component.html',
  styleUrls: ['./user-view-details.component.css']
})
export class UserViewDetailsComponent implements OnInit{
constructor(private router:Router,public dataService:NgoApiService, private activateRoute:ActivatedRoute,public loginService: LoginService){}

event!:any


ngOnInit(): void {
let id = this.activateRoute.snapshot.params['id'];
  console.log(id)
  this.dataService.getNgoById(id).subscribe((data)=>{
    {
      this.event = data
    }
    })
}

goHome(){
  this.router.navigate(['eventManager'])
}

onClick(e:any){
  console.log(e.registration)
  if (e.registration == true){
    this.router.navigate(['register/',e.ngoId])
  }
  else console.log('Cant Register')
}



}

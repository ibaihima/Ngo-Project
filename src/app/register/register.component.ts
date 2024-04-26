import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgoApiService } from '../ngo-api.service';
import {FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router, public dataService:NgoApiService, private activateRoute:ActivatedRoute,public loginService: LoginService){}

  event!: any

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    
      this.dataService.getNgoById(id).subscribe((data)=>{
        {
          this.event = data
        }
        })
    }

    firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
      
    });
    isLinear = true;

    goHome(){
      alert("You have submitted an Event")
      this.router.navigate(['eventManager'])
    }
}

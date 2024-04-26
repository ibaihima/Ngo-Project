import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SignUp } from '../sign-up';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  constructor(private formBuilder:FormBuilder, private router:Router, private dataService:LoginService){}


  onSubmit(userForms:any)
  {
    // console.log(userForms)
      console.log(userForms)
      console.log(this.dataService)
      this.dataService.postUser(userForms).subscribe({
      next:(data) => {
        this.router.navigate(["/home"])
        this.dataService.data.push(userForms);
        console.log(data)
      },
      error:(err) => console.log(err)
    })
  //   this.ngForm = new FormGroup({
  //     userName: new FormControl()
  // });

  // }
  // firstFormGroup = this.formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this.formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // isLinear = false;

  

  }
}

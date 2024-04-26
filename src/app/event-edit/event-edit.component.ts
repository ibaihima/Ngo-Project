import { Component,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoApiService } from '../ngo-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent {
  constructor(
    public dialogRef: MatDialogRef<EventEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ngo,
    private dataService:NgoApiService, private activateRoute:ActivatedRoute,public loginService: LoginService
  ) {}

  myForm!: FormGroup;

  event!:any
  ngOnInit(): void {
    const id = this.data.ngoId
    console.log("look at the id", id)
      this.dataService.getNgoById(id).subscribe({
        next:(data:any)=>{
          console.log("this is the data", data)
          this.myForm = new FormGroup({
            'eventName': new FormControl(data.eventName,Validators.required),
            'eventDescription': new FormControl(data.eventDescription,Validators.required),
            'eventCategory': new FormControl(data.eventCategory,Validators.required),
            'startDate':  new FormControl(data.startDate,Validators.required),
            'endDate':  new FormControl(data.endDate,Validators.required),
            'startTime': new FormControl(data.startTime,Validators.required),
            'endTime': new FormControl(data.endTime,Validators.required),
            'eventLocation': new FormControl(data.eventLocation,Validators.required),
            'registration': new FormControl(data.registration ? data.registration : false),
            'eventImage': new FormControl(data.eventImage,Validators.required),
            'adultTicket': new FormControl(data.adultTicket,Validators.required),
            'childTicket': new FormControl(data.childTicket,Validators.required)
            })
        },
        error:(err) => console.log(err)
        })
    }
 
onSubmit(){
  console.log(this.myForm.value)
  const updatedEvent = {
    ngoId:this.data.ngoId,
    eventName:  this.myForm.value.eventName,
    eventDescription: this.myForm.value.eventDescription,
    eventCategory: this.myForm.value.eventCategory,
    startDate:  this.myForm.value.startDate,
    endDate:  this.myForm.value.endDate,
    startTime: this.myForm.value.startTime,
    endTime: this.myForm.value.endTime,
    eventLocation: this.myForm.value.eventLocation,
    registration: this.myForm.value.registration ? this.myForm.value.registration  : false,
    eventImage: this.myForm.value.eventImage,
    adultTicket: this.myForm.value.adultTicket,
    childTicket: this.myForm.value.childTicket
  }
  console.log(updatedEvent)
  this.dataService.updateNgo(this.data.ngoId,updatedEvent).subscribe(
    {
      next:(data) => {
      console.log(data, "look here")
      },
      error:(err) => console.log(err)
    }
    
  )
}




onNoClick(): void {
  this.dialogRef.close();
}
}

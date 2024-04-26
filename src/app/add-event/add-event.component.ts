import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ngo } from '../ngo';
import { NgoApiService } from '../ngo-api.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ngo,
    private dataService:NgoApiService
  ) {}
 

  onSubmit(userForms:any)
  {
    // console.log(userForms)
      console.log(userForms)
      console.log(this.dataService)
      this.dataService.postNgo(userForms).subscribe({
      next:(data) => {
        this.dataService.data.push(userForms);
        console.log(data)
      },
      error:(err) => console.log(err)
    })

  }

  ngOnInit() {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}


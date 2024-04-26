import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoApiService } from '../ngo-api.service';
import {MatDialog} from '@angular/material/dialog';
import { EventEditComponent } from '../event-edit/event-edit.component';
import { AddEventComponent } from '../add-event/add-event.component';
import { LoginService } from '../login.service';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent implements OnInit {
  ngos:Ngo[]=[]
  constructor(private router: Router, public dataService:NgoApiService, public dialog: MatDialog,public loginService: LoginService){
  }

  refreshpage = new BehaviorSubject<boolean>(true);
  

  ngOnInit() {
    this.dataService.getNgos().subscribe({
    next:(data) => {this.ngos = data,this.dataService.data = data, console.log(data)},
    error: (err) => {console.log(err)},
    // () => {console.log("complete")}
    }
    )
    this.refreshpage.subscribe(l => console.log(l))

  }

  openEditDialog(ngo:any) {
    // this.router.navigate(['eventEdit/',ngo.ngoId])
    const dialogRef = this.dialog.open(EventEditComponent,{
      data: {
        'ngoId':ngo.ngoId,
        'eventName':ngo.eventName, 
        'eventDescription':ngo.eventDescription,
        'eventCategory': ngo.eventCategory,
        'startDate':  ngo.startDate,
        'endDate':ngo.endDate  ,
        'startTime':ngo.startTime ,
        'endTime':ngo.endTime ,
        'eventLocation':ngo.eventLocation ,
        'registration':ngo.register ,
        'eventImage':ngo.eventImage ,
        'adultTicket':ngo.adultTicket ,
        'childTicket':ngo.childTicket 
      }
    });
    // console.log("look at the data", ngo)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.refreshpage.next(false)
    });
    
  }

  userView(){
    this.router.navigate(['userView'])
  }

  eventManag(){
    this.router.navigate(['eventManager'])
  }
  onEdit(){
    this.router.navigate(['eventEdit'])
  }

  onDelete(id:number){
    this.dataService.deleteNgo(id).subscribe({
      next:(data) => {
        alert("You have Deleted an Event")
        for(let i=0;i<this.dataService.data.length;i++){
          if(id==this.dataService.data[i].id){
            this.dataService.data.splice(i,1);
            break;
          }
        }
      },
      error:(err) => console.log(err)
    }
    )
  }

}






export class Ngo{

    ngoId:number;
    eventName:string;
    eventDescription:string;
    eventCategory:string;
    startDate:string;
    endDate:string;
    startTime:string;
    endTime:string;
    eventLocation:string;
    registration:boolean;
    eventImage:string;
    adultTicket:number;
    childTicket:number;

    constructor(id:number,eventName:string,eventDescription:string,eventCategory:string,startDate:string,endDate:string,startTime:string,endTime:string,eventLocation:string,registration:boolean,eventImage:string,childTicket:number,adultTicket:number ){
        this.ngoId = id;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.eventCategory = eventCategory;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLocation = eventLocation;
        this.registration = registration;
        this.eventImage = eventImage;
        this.adultTicket = adultTicket;
        this.childTicket = childTicket
    }

}
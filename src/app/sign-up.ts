export class SignUp {
      id:number;
      userName:string;
      password: string;
      emailAddress:string;
      role:string;
      firstName:string;
      lastName:string

      constructor(id:number,userName:string,password:string,emailAddress:string,role:string,firstName:string,lastName:string){
        this.id=id
        this.userName=userName
        this.password = password
        this.emailAddress=emailAddress
        this.role=role
        this.firstName=firstName
        this.lastName=lastName
      }
}

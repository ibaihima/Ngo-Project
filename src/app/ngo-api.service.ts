import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ngo } from './ngo';
import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class NgoApiService {
  data: any;
  

  url:string="https://localhost:7051/api/"
  console: Ngo[]= [];

  constructor(private httpClient: HttpClient) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded
  }

  getNgos():Observable<any>{
    return this.httpClient.get(this.url + "Ngo")
  }

  getNgoById(id: any): Observable<any>{
    return this.httpClient.get<any[]>(this.url + 'Ngo/' + id)
  }

  postNgo(ngoData: any): Observable<Ngo[]>{
    return this.httpClient.post<Ngo[]>(this.url + 'Ngo/',ngoData)
  }

  updateNgo(id: any, ngoData: any): Observable<Ngo[]>{
    console.log(ngoData)
    console.log(this.url + 'Ngo/' + id)
    return this.httpClient.put<Ngo[]>(this.url + 'Ngo/' + id, ngoData)
  }

  deleteNgo(id: any){
    return this.httpClient.delete(this.url + 'Ngo/' + id)
  }
}

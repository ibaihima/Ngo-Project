import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc2OTkyNzQ1LCJleHAiOjE2NzY5OTYzNDUsInN1YiI6IjEifQ.W1P2LSKqY3fNPW01eIHRMT5acI6MBD0GSKcUzux1afY";
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
                    .set('Authorization',"Bearer " + token)

    if(token) {
      const modified_req = req.clone({
        headers
      })
      return next.handle(modified_req);
    } 
    return next.handle(req);

  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiPath:string='http://localhost:8000/';
  private customerSubject = new BehaviorSubject<number>(1);
  currentCustomerId$ = this.customerSubject.asObservable();
  constructor(private http:HttpClient) { }

  setCustomer(customerId:number)
  {
    this.customerSubject.next(customerId);
  }
  getOrder(id:number):Observable<any>
  {
    return this.http.get(this.apiPath+"/"+id);
  }
  getOrderByCustomer(customerId:number):Observable<any>
  {
    console.log('calling oderbycustomerid'+customerId);
     return this.http.get(this.apiPath+"orders/customer/"+customerId);
  }

}

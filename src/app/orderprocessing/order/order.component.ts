import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../dashboard.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
orders:any[]=[];
selectedCustomer!:number;
constructor(private dashboardService:DashboardService){}

 ngOnInit() {
    this.dashboardService.currentCustomerId$
      .pipe(
        switchMap(customerId => {
          this.selectedCustomer = customerId;
          return this.dashboardService.getOrderByCustomer(customerId);
        })
      )
      .subscribe(data => {
        console.log(data);
        this.orders = data;
      });
  }

}

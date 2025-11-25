import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
 selectedMonth!:number;
 orders:any[] = [];
 constructor(private dashboardService:DashboardService,
             private http : HttpClient){}

 ngOnInit() {
    // this.dashboardService.currentMonth$
    //   .pipe(
    //     switchMap(month => {
    //       this.selectedMonth = month;
    //       return this.dashboardService.getOrder(month);
    //     })
    //   )
    //   .subscribe(data => {
    //     this.orders = data;
    //   });
  }
}
